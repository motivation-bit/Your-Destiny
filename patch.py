from pathlib import Path
p=Path('/mnt/data/yd_edit')
js=(p/'app.js').read_text()
css=(p/'style.css').read_text()
html=(p/'index.html').read_text()

# Language: no hint text in row; panel is a modal-like overlay via CSS.
html=html.replace('<div><span class="settings-label" data-t="language">Язык</span><span class="language-caption" data-t="languageHint">Выберите язык интерфейса</span></div>', '<div><span class="settings-label" data-t="language">Язык</span></div>')
# Theme picker always visible in settings.
html=html.replace('<div class="settings-item theme-setting" onclick="toggleThemePicker()">','<div class="settings-item theme-setting">')
# Schedule opens modal.
html=html.replace('onclick="showToast(t(\'soon\'))"','onclick="showStorySchedule()"')

# Theme picker / language behavior.
old="""function toggleLanguagePicker() {
  document.getElementById('language-picker-panel')?.classList.toggle('open');
}
function toggleThemePicker() {
  document.getElementById('theme-picker-panel')?.classList.toggle('open');
}
"""
new="""function toggleLanguagePicker() {
  const panel = document.getElementById('language-picker-panel');
  if (!panel) return;
  panel.classList.toggle('open');
}
function toggleThemePicker() {
  // Theme choices are intentionally always visible; this function is kept for compatibility.
  document.getElementById('theme-picker-panel')?.classList.add('open');
}
"""
js=js.replace(old,new)

# Time capsule: one date/time presentation, past tense sentence without repeating date/time.
start=js.index('function showTimeCapsule() {')
end=js.index('\nfunction showInfoOverlay', start)
new_func=r'''function showTimeCapsule() {
  initFirstVisit();
  const firstVisit = localStorage.getItem('first_visit_at');
  const d = new Date(firstVisit);
  const datePart = d.toLocaleDateString(DATE_LOCALES[currentLang] || 'en-GB', { day:'2-digit', month:'long', year:'numeric' });
  const timePart = d.toLocaleTimeString(DATE_LOCALES[currentLang] || 'en-GB', { hour:'2-digit', minute:'2-digit', hour12:false });
  const texts = {
    ru:`Ты впервые вошёл в Your Destiny. С этого момента началась твоя история в этом мире.`,
    en:`You first entered Your Destiny. From that moment, your story in this world began.`,
    es:`Entraste por primera vez en Your Destiny. Desde ese momento comenzó tu historia en este mundo.`,
    pt:`Entraste pela primeira vez no Your Destiny. A partir desse momento começou a tua história neste mundo.`,
    de:`Du bist erstmals in Your Destiny eingetreten. Von diesem Moment an begann deine Geschichte in dieser Welt.`,
    fr:`Tu es entré pour la première fois dans Your Destiny. À partir de cet instant, ton histoire dans cet univers a commencé.`
  };
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
    <div class="time-capsule-card">
      <div class="capsule-title">${t('timeCapsule')}</div>
      <div class="capsule-date">${datePart}</div>
      <div class="capsule-time">${timePart}</div>
      <div class="capsule-divider"></div>
      <div class="capsule-text">${texts[currentLang] || texts.en}</div>
    </div>`;
  document.body.appendChild(overlay);
}
'''
js=js[:start]+new_func+js[end:]

# Rating complete replacement.
start=js.index('function showRatingModal() {')
end=js.index('\nfunction showSupportAuthor()', start)
new_rating=r'''function showRatingModal() {
  const overlay=document.createElement('div');
  overlay.className='fate-overlay active';
  const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en;
  const saved=Number(localStorage.getItem('your_destiny_rating')||0);
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
    <div class="rating-card ${saved ? 'has-rating' : 'compact'}" id="rating-card">
      <div class="rating-title">${texts.title}</div>
      <div class="rating-stars" role="radiogroup" aria-label="${texts.title}">${[1,2,3,4,5].map(i=>`<button class="rating-star ${i<=saved?'selected':''}" data-rating="${i}" aria-label="${i}" onclick="selectRating(${i})">★</button>`).join('')}</div>
      <div class="rating-feedback" id="rating-feedback" ${saved?'':'hidden'}>
        <div class="rating-thanks">${texts.thanks}</div>
        <div class="rating-text" id="rating-text">${saved ? (texts[saved]||texts[5]) : ''}</div>
        <a class="rating-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${texts.open}</a>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}
function selectRating(value){
  localStorage.setItem('your_destiny_rating', String(value));
  const card=document.getElementById('rating-card');
  const stars=document.querySelectorAll('.rating-star');
  stars.forEach(star=>star.classList.toggle('selected',Number(star.dataset.rating)<=value));
  const feedback=document.getElementById('rating-feedback');
  const text=document.getElementById('rating-text');
  const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en;
  if(card) { card.classList.remove('compact'); card.classList.add('has-rating'); }
  if(feedback) feedback.hidden=false;
  if(text) text.textContent=texts[value]||texts[5];
  const thanks=document.querySelector('.rating-thanks');
  if(thanks) thanks.textContent=texts.thanks;
  const channel=document.querySelector('.rating-channel-btn');
  if(channel) channel.textContent=texts.open;
}
'''
js=js[:start]+new_rating+js[end:]

# Add story schedule before support.
marker='function showSupportAuthor() {'
schedule=r'''function showStorySchedule() {
  const overlay=document.createElement('div'); overlay.className='fate-overlay active';
  const copy={
    ru:{title:'Расписание Историй',lead:'Будущие миры, которые уже ждут своего часа.',text:'Здесь будут появляться даты новых глав, синопсисы и первые намёки на истории Your Destiny. Расписание будет обновляться по мере готовности каждой главы.',soon:'Скоро',note:'Следи за обновлениями — новые истории будут открываться постепенно.'},
    en:{title:'Story Schedule',lead:'Future worlds waiting for their moment.',text:'Here you will find release dates, synopses and first hints about upcoming Your Destiny stories. The schedule will be updated as each chapter is prepared.',soon:'Coming soon',note:'Stay tuned — new stories will open gradually.'},
    es:{title:'Calendario de Historias',lead:'Mundos futuros esperando su momento.',text:'Aquí aparecerán fechas de estreno, sinopsis y primeras pistas sobre las próximas historias de Your Destiny. El calendario se actualizará a medida que cada capítulo esté preparado.',soon:'Próximamente',note:'Sigue las novedades: las nuevas historias se abrirán poco a poco.'},
    pt:{title:'Calendário de Histórias',lead:'Mundos futuros à espera do seu momento.',text:'Aqui aparecerão datas de lançamento, sinopses e primeiras pistas das próximas histórias de Your Destiny. O calendário será atualizado à medida que cada capítulo estiver pronto.',soon:'Em breve',note:'Acompanha as novidades — novas histórias serão abertas gradualmente.'},
    de:{title:'Geschichtenplan',lead:'Zukünftige Welten, die auf ihren Moment warten.',text:'Hier erscheinen Veröffentlichungstermine, Kurzfassungen und erste Hinweise zu kommenden Your-Destiny-Geschichten. Der Plan wird aktualisiert, sobald neue Kapitel bereit sind.',soon:'Bald',note:'Bleib dabei — neue Geschichten werden nach und nach geöffnet.'},
    fr:{title:'Calendrier des histoires',lead:'Des mondes futurs qui attendent leur heure.',text:'Vous trouverez ici les dates de sortie, les synopsis et les premiers indices des prochaines histoires de Your Destiny. Le calendrier sera mis à jour à mesure que chaque chapitre sera prêt.',soon:'Bientôt',note:'Restez à l’écoute — les nouvelles histoires seront dévoilées progressivement.'}
  };
  const c=copy[currentLang]||copy.en;
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
  <div class="schedule-card"><div class="schedule-title">${c.title}</div><div class="schedule-lead">${c.lead}</div><div class="schedule-divider"></div>
  <div class="schedule-entry"><div class="schedule-icon">◷</div><div><strong>${c.soon}</strong><p>${c.text}</p></div></div><div class="schedule-note">${c.note}</div></div>`;
  document.body.appendChild(overlay);
}

'''
js=js.replace(marker,schedule+marker)

# Fate in-place rendering.
js=js.replace("""function renderFateQuestion(index) {
  const d = FATE_DILEMMAS[index];
  const overlay = document.createElement('div');
  overlay.id = 'fate-overlay';
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `""", """function renderFateQuestion(index) {
  const d = FATE_DILEMMAS[index];
  let overlay = document.getElementById('fate-overlay');
  if (!overlay) { overlay = document.createElement('div'); overlay.id = 'fate-overlay'; overlay.className = 'fate-overlay active'; document.body.appendChild(overlay); }
  overlay.innerHTML = `""")
# Remove append/activation in renderFateQuestion
js=js.replace("""  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function answerFate""", """}

function answerFate""",1)
# Replace next/restart fate transitions
js=js.replace("""function nextFateQuestion() {
  const overlay = document.getElementById('fate-overlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.remove(); openFateDilemmas(); }, 400);
}""", """function nextFateQuestion() {
  const overlay = document.getElementById('fate-overlay');
  if (!overlay) return;
  const state = JSON.parse(localStorage.getItem('fate_dilemmas') || '{"currentIndex":0,"answers":[]}');
  if (state.currentIndex >= FATE_DILEMMAS.length) { showFateFinalInPlace(overlay); return; }
  renderFateQuestion(state.currentIndex);
}
function showFateFinalInPlace(overlay) {
  overlay.innerHTML = `<button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button><div class="fate-container fate-final"><div class="fate-final-title">${t('fateComplete')}</div><div class="fate-final-text">${t('fateCompleteText')}</div><div class="final-channel-note">${t('finalChannel')}</div><div class="final-actions"><button class="fate-next" onclick="restartFateDilemmas()">${t('restart')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div></div>`;
}""")
js=js.replace("""function restartFateDilemmas() {
  localStorage.setItem('fate_dilemmas', JSON.stringify({currentIndex:0,answers:[]}));
  const overlay=document.querySelector('.fate-overlay');
  if(overlay){overlay.classList.remove('active');setTimeout(()=>{overlay.remove();openFateDilemmas();},250);}
}""", """function restartFateDilemmas() {
  localStorage.setItem('fate_dilemmas', JSON.stringify({currentIndex:0,answers:[]}));
  const overlay=document.getElementById('fate-overlay');
  if(overlay) renderFateQuestion(0);
}""")

# Labyrinth in-place transitions.
js=js.replace("""function enterLabyrinth() {
  const overlay = document.getElementById('labyrinth-overlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.remove(); renderLabyrinthRiddle(); }, 400);
}""", """function enterLabyrinth() {
  const overlay = document.getElementById('labyrinth-overlay');
  if (overlay) renderLabyrinthRiddle();
}""")
# renderLabyrinthRiddle should reuse overlay
js=js.replace("""  const overlay = document.createElement('div');
  overlay.id = 'labyrinth-overlay';
  overlay.className = 'labyrinth-overlay active';
  overlay.innerHTML = `""", """  let overlay = document.getElementById('labyrinth-overlay');
  if (!overlay) { overlay=document.createElement('div'); overlay.id='labyrinth-overlay'; overlay.className='labyrinth-overlay active'; document.body.appendChild(overlay); }
  overlay.className = 'labyrinth-overlay active';
  overlay.innerHTML = `""",1)
# remove append after labyrinth render (first occurrence after this function)
needle="""  document.body.appendChild(overlay);
}

function showLabyrinthHint"""
js=js.replace(needle,"""}

function showLabyrinthHint""",1)
# next labyrinth in-place
js=js.replace("""function nextLabyrinthRiddle() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  state.currentRiddle++; state.hintsUsed = [];
  localStorage.setItem('labyrinth', JSON.stringify(state));
  const overlay = document.getElementById('labyrinth-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    if (state.currentRiddle >= LABYRINTH_RIDDLES.length) showLabyrinthFinal();
    else renderLabyrinthRiddle();
  }, 400);
}""", """function nextLabyrinthRiddle() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  state.currentRiddle++; state.hintsUsed = [];
  localStorage.setItem('labyrinth', JSON.stringify(state));
  const overlay = document.getElementById('labyrinth-overlay');
  if (!overlay) return;
  if (state.currentRiddle >= LABYRINTH_RIDDLES.length) showLabyrinthFinalInPlace(overlay);
  else renderLabyrinthRiddle();
}
function showLabyrinthFinalInPlace(overlay) {
  overlay.innerHTML=`<button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button><div class="labyrinth-container labyrinth-final"><div class="labyrinth-final-title">${t('riddleComplete')}</div><div class="labyrinth-final-text">${t('riddleCompleteText')}</div><div class="final-channel-note">${t('finalChannel')}</div><div class="final-actions"><button class="labyrinth-next-btn" onclick="restartLabyrinth()">${t('restart')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div></div>`;
}""")
js=js.replace("""function restartLabyrinth() {
  localStorage.setItem('labyrinth', JSON.stringify({ currentRiddle: 0, hintsUsed: [] }));
  const overlay = document.querySelector('.labyrinth-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => { overlay.remove(); renderLabyrinthRiddle(); }, 400); }
}""", """function restartLabyrinth() {
  localStorage.setItem('labyrinth', JSON.stringify({ currentRiddle: 0, hintsUsed: [] }));
  const overlay = document.getElementById('labyrinth-overlay');
  if (overlay) renderLabyrinthRiddle();
}""")

# Destiny in-place question rendering.
js=js.replace("""function renderDestinyQuestion(index) {
  const q = DESTINY_QUESTIONS[index];
  const overlay = document.createElement('div');
  overlay.id = 'destiny-overlay';
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `""", """function renderDestinyQuestion(index) {
  const q = DESTINY_QUESTIONS[index];
  let overlay = document.getElementById('destiny-overlay');
  if (!overlay) { overlay=document.createElement('div'); overlay.id='destiny-overlay'; overlay.className='destiny-overlay active'; document.body.appendChild(overlay); }
  overlay.className='destiny-overlay active';
  overlay.innerHTML = `""")
# remove append at end render destiny
js=js.replace("""  document.body.appendChild(overlay);
}

function answerDestiny""", """}

function answerDestiny""",1)
# replace answer transition
old="""  const overlay = document.getElementById('destiny-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    if (state.currentQuestion >= DESTINY_QUESTIONS.length) {
      state.completed = true;
      localStorage.setItem('true_destiny', JSON.stringify(state));
      showDestinyResult(state.scores);
    } else renderDestinyQuestion(state.currentQuestion);
  }, 400);"""
new="""  const overlay = document.getElementById('destiny-overlay');
  if (!overlay) return;
  if (state.currentQuestion >= DESTINY_QUESTIONS.length) {
    state.completed = true;
    localStorage.setItem('true_destiny', JSON.stringify(state));
    showDestinyResultInPlace(overlay, state.scores);
  } else renderDestinyQuestion(state.currentQuestion);"""
js=js.replace(old,new)
# replace result function with in-place helper and wrapper compatibility
start=js.index('function showDestinyResult(scores) {')
end=js.index('\nfunction restartDestiny()',start)
newres=r'''function showDestinyResult(scores) {
  const overlay=document.getElementById('destiny-overlay') || (()=>{const x=document.createElement('div');x.id='destiny-overlay';x.className='destiny-overlay active';document.body.appendChild(x);return x;})();
  showDestinyResultInPlace(overlay,scores);
}
function showDestinyResultInPlace(overlay,scores) {
  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const winner = sorted[0]?.[0] || 'realist';
  const title = DESTINY_TITLES[winner] || DESTINY_TITLES.realist;
  overlay.className='destiny-overlay active';
  overlay.innerHTML = `<button class="overlay-close-x" onclick="closeDestiny()">&times;</button><div class="destiny-container destiny-result destiny-result-minimal destiny-result-rich"><div class="destiny-result-symbol">✦</div><div class="destiny-result-kicker">${t('destinyResultTitle')}</div><div class="destiny-result-title">${loc(title.name)}</div><div class="destiny-result-desc">${loc(title.description)}</div><div class="final-channel-note">${t('finalChannel')}</div><div class="final-actions"><button class="destiny-restart" onclick="restartDestiny()">${t('destinyRestartBtn')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div></div>`;
}
'''
js=js[:start]+newres+js[end:]
js=js.replace("""function restartDestiny() {
  localStorage.removeItem('true_destiny');
  const overlay = document.querySelector('.destiny-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => { overlay.remove(); openTrueDestiny(); }, 400); }
}""", """function restartDestiny() {
  localStorage.removeItem('true_destiny');
  const overlay = document.getElementById('destiny-overlay');
  if (overlay) renderDestinyQuestion(0);
  else openTrueDestiny();
}""")

# Make theme colors always visible and improve swatches; remove theme row click affordance.
css += r'''

/* ===== USER VISUAL PASS ===== */
.language-setting { cursor:pointer; }
.language-caption { display:none !important; }
.language-picker-panel { position:fixed; z-index:5000; left:50%; top:50%; transform:translate(-50%,-50%); width:min(88vw,390px); max-height:min(76vh,620px); overflow:auto; padding:20px; border:1px solid rgba(212,175,55,.38); border-radius:24px; background:linear-gradient(145deg,rgba(28,13,48,.99),rgba(8,5,18,.99)); box-shadow:0 35px 120px rgba(0,0,0,.78); grid-template-columns:1fr 1fr; gap:10px; }
.language-picker-panel.open { display:grid; animation:modalIn .22s ease both; }
.language-picker-panel::before { content:'LANGUAGE'; grid-column:1/-1; color:var(--gold-light); font:700 1.15rem 'Cinzel',serif; letter-spacing:.13em; padding:0 2px 8px; }
.language-picker-panel::after { content:''; position:fixed; z-index:-1; inset:-100vh; background:rgba(0,0,0,.58); backdrop-filter:blur(7px); }
.lang-btn { min-height:54px; padding:11px 13px; border-radius:15px; background:rgba(255,255,255,.025); }
.lang-btn span { font-size:.9rem; }
.theme-setting { cursor:default !important; }
.theme-picker-panel { display:block !important; padding:12px 15px 16px; border-top:1px solid rgba(212,175,55,.12); }
.theme-colors { display:grid !important; grid-template-columns:repeat(6,1fr); gap:12px; align-items:center; justify-content:stretch; }
.color-option { width:48px; height:48px; justify-self:center; position:relative; border:1px solid rgba(255,255,255,.12); background:rgba(8,5,18,.65); box-shadow:inset 0 0 0 3px rgba(8,5,18,.72),0 8px 24px rgba(0,0,0,.32); }
.color-option span { box-shadow:inset 0 1px 2px rgba(255,255,255,.16), inset 0 -8px 18px rgba(0,0,0,.2); }
.color-option.active { border-color:var(--gold-light); box-shadow:inset 0 0 0 3px rgba(8,5,18,.72),0 0 0 2px rgba(244,208,63,.28),0 0 28px rgba(244,208,63,.18); }
.color-option.theme-kaleidoscope span { background:conic-gradient(from 210deg,#6f3aa8 0deg,#6f3aa8 72deg,#264e8b 72deg,#264e8b 144deg,#9b2f43 144deg,#9b2f43 216deg,#2d7b45 216deg,#2d7b45 288deg,#c18a19 288deg,#c18a19 360deg); }
@media(max-width:430px){.theme-colors{grid-template-columns:repeat(3,1fr);gap:14px}.color-option{width:52px;height:52px}}

/* Compact rating before selection; expands only after a rating is chosen. */
.rating-card.compact { width:min(88vw,360px); padding:24px 20px 20px; }
.rating-card.compact .rating-stars { margin:18px 0 4px; }
.rating-card.compact .rating-star { font-size:2.7rem; }
.rating-feedback[hidden] { display:none; }
.rating-card.has-rating { width:min(92vw,410px); padding:30px 24px 26px; }
.rating-card.has-rating .rating-star { font-size:2.55rem; }
.rating-stars { gap:4px; }
.rating-star { color:rgba(244,208,63,.18); -webkit-text-stroke:1px rgba(244,208,63,.38); font-family:Georgia,serif; }
.rating-star.selected { color:var(--gold-light); -webkit-text-stroke:0; }
.rating-text { min-height:0; margin-top:8px; }
.rating-channel-btn { padding:14px 18px; border-radius:14px; color:#1a0e00; background:linear-gradient(180deg,#fff0a8,#e1a915); box-shadow:0 12px 28px rgba(212,175,55,.2); font:700 .8rem 'Cinzel',serif; letter-spacing:.06em; }

/* Full-reading legal author screen. */
.legal-author-card,.legal-confirm-card { width:min(94vw,720px) !important; max-height:88vh; padding:28px 24px 24px; }
.author-legal-text { max-height:58vh; font-size:.9rem; line-height:1.9; padding:20px; }

/* Story schedule: editorial card, no decorative diamonds. */
.schedule-card { width:min(92vw,430px); max-height:84vh; overflow:auto; padding:34px 24px 28px; border:1px solid rgba(212,175,55,.32); border-radius:24px; background:linear-gradient(145deg,rgba(25,12,43,.98),rgba(8,5,18,.99)); box-shadow:0 30px 100px rgba(0,0,0,.75); text-align:center; }
.schedule-title { color:var(--gold-light); font:700 1.55rem 'Cinzel',serif; letter-spacing:.05em; }
.schedule-lead { margin-top:16px; color:var(--text-primary); font:italic 1rem/1.8 'Noto Serif',serif; }
.schedule-divider { width:70%; height:1px; margin:22px auto; background:linear-gradient(90deg,transparent,var(--gold),transparent); }
.schedule-entry { display:flex; gap:16px; text-align:left; padding:18px; border:1px solid rgba(212,175,55,.18); border-radius:17px; background:rgba(255,255,255,.018); }
.schedule-icon { flex:0 0 46px; height:46px; display:grid; place-items:center; border:1px solid rgba(212,175,55,.38); border-radius:14px; color:var(--gold-light); font-size:1.5rem; }
.schedule-entry strong { color:var(--gold-light); font:700 .95rem 'Cinzel',serif; }
.schedule-entry p { margin:8px 0 0; color:var(--text-secondary); font:.84rem/1.75 'Noto Serif',serif; }
.schedule-note { margin-top:18px; color:var(--text-muted); font:.78rem/1.7 'Noto Serif',serif; }

/* Prevent the page from flashing/rebuilding between questions. */
.fate-overlay,.labyrinth-overlay,.destiny-overlay { will-change:opacity; }
.fate-overlay > .fate-container,.labyrinth-overlay > .labyrinth-container,.destiny-overlay > .destiny-container { animation:none !important; }
@keyframes modalIn { from{opacity:0;transform:translate(-50%,-48%) scale(.985)} to{opacity:1;transform:translate(-50%,-50%) scale(1)} }
'''

(p/'index.html').write_text(html)
(p/'app.js').write_text(js)
(p/'style.css').write_text(css)
