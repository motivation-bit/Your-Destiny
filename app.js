// ============================================================
// YOUR DESTINY v3.0
// ============================================================

let tg = null;
let currentLang = localStorage.getItem('lang') || 'ru';
let isMusicPlaying = false;
let bgMusic = null;
let visualEffectsEnabled = true;
let currentTheme = 'crimson';
const WALLET = 'TD95kxxcBBRvdoj1nmELQtZ6X1Ux4n52Jf';

const T = {
  ru: {
    appTitle: 'YOUR DESTINY', novels: 'Новеллы', surveys: 'Анкеты', contacts: 'Контакты', favorites: 'Любимое', settings: 'Настройки',
    loading: 'Загрузка историй...', emptyNovels: 'Истории скоро появятся...', emptySurveys: 'Анкеты в разработке...', emptyContacts: 'Контакты в разработке...', emptyFavorites: 'Здесь будут ваши сокровенные моменты...',
    music: 'Музыка', theme: 'Цвет темы', language: 'Язык', promo: 'Промокод', activate: 'Активировать', promoPlaceholder: 'Введите промокод...',
    promoHint: 'Промокод можно найти в Telegram-канале', vipStatus: 'VIP-статус', freeVersion: 'Бесплатная версия', vipActive: 'VIP активен',
    timeLeft: 'Осталось', days: 'д', hours: 'ч', minutes: 'м', timeCapsule: 'Капсула Времени', rateApp: 'Оценить приложение',
    storySchedule: 'Расписание Историй', supportAuthor: 'Поддержать Автора', becomeAuthor: 'Стать Автором', wisdom: 'Мудрость Судьбы',
    chronicles: 'Хроники Судьбы', labyrinth: 'Лабиринт Загадок', trueDestiny: 'Какая твоя Истинная Судьба?', about: 'Об игре',
    terms: 'Условия использования', privacy: 'Политика конфиденциальности', community: 'Канал сообщества', resetProgress: 'Сбросить прогресс',
    back: 'Назад', close: 'Закрыть', continue: 'Продолжить',
    restart: 'Начать заново', exit: 'Выйти в меню', pause: 'Пауза', lockTitle: 'Дальше — только по промокоду',
    lockText: 'Вы прошли 2 бесплатные главы. Для доступа ко всем главам активируйте VIP-статус.',
    goToChannel: 'Перейти в канал', enterPromo: 'Ввести промокод', toMenu: 'В меню',
    introSubtitle: 'Интерактивная визуальная новелла', wallet: 'Кошелек для поддержки', copy: 'Скопировать', copied: 'Скопировано',
    soon: 'Скоро', thanks: 'Спасибо', wisdomClose: 'Закрыть', wisdomNext: 'Далее', destinyStart: 'Начать предсказание', destinyRestart: 'Пройти заново',
    riddleEnter: 'Войти в Лабиринт', riddleReady: 'Готов начать? Лабиринт ждет.', riddleRules1: 'Один за другим: новая загадка откроется только после ответа на предыдущую.',
    riddleRules2: 'Не спеши: размышляй столько, сколько нужно.', riddleRules3: 'Помощь: три подсказки или открытый ответ.',
    lookAnswer: 'Посмотреть ответ', answerConfirm: 'Уверены, что хотите открыть ответ?', backToRiddle: 'Назад к загадке',
    yesOpen: 'Да, открыть', goFurther: 'Идти дальше', riddleComplete: 'Поздравляем', riddleCompleteText: 'Ты прошел Лабиринт Загадок! Древние стены расступились.',
    fateComplete: 'Хроники Судьбы завершены', fateCompleteText: 'Все дилеммы пройдены. Новые появятся в обновлениях.',
    aboutText1: 'Your Destiny — интерактивная визуальная новелла, где каждое решение меняет ход истории.',
    aboutText2: 'Интерактивные истории с множеством разветвлений.', aboutText3: 'Хроники Судьбы — психологические дилеммы.',
    aboutText4: 'Лабиринт Загадок — десять сложнейших загадок.', aboutText5: 'Истинная Судьба — тест из вопросов о прошлых жизнях.',
    aboutText6: 'Мудрость Судьбы — ежедневные цитаты.', termsTitle: 'Условия использования', privacyTitle: 'Политика конфиденциальности',
    stepIntoUnknown: 'Шагнуть в неизвестность...', next: 'Далее', hint: 'Подсказка', hintUsed: 'Использовано',
    destinyResultTitle: 'Твоя Истинная Судьба', destinyResultDesc: 'Архетип раскрыт', destinyRestartBtn: 'Пройти заново',
    empty: 'Пока пусто...'
  },
  en: {
    appTitle: 'YOUR DESTINY', novels: 'Novels', surveys: 'Surveys', contacts: 'Contacts', favorites: 'Favorites', settings: 'Settings',
    loading: 'Loading stories...', emptyNovels: 'Stories coming soon...', emptySurveys: 'Surveys in development...', emptyContacts: 'Contacts in development...', emptyFavorites: 'Your cherished moments will appear here...',
    music: 'Music', theme: 'Theme Color', language: 'Language', promo: 'Promo Code', activate: 'Activate', promoPlaceholder: 'Enter promo code...',
    promoHint: 'Find promo codes in our Telegram channel', vipStatus: 'VIP Status', freeVersion: 'Free Version', vipActive: 'VIP Active',
    timeLeft: 'Time left', days: 'd', hours: 'h', minutes: 'm', timeCapsule: 'Time Capsule', rateApp: 'Rate App',
    storySchedule: 'Story Schedule', supportAuthor: 'Support Author', becomeAuthor: 'Become an Author', wisdom: 'Wisdom of Fate',
    chronicles: 'Chronicles of Fate', labyrinth: 'Labyrinth of Riddles', trueDestiny: 'What is Your True Destiny?', about: 'About',
    terms: 'Terms of Use', privacy: 'Privacy Policy', community: 'Community Channel', resetProgress: 'Reset Progress',
    back: 'Back', close: 'Close', continue: 'Continue',
    restart: 'Restart', exit: 'Exit to Menu', pause: 'Pause', lockTitle: 'VIP Required',
    lockText: 'You have completed 2 free chapters. Activate VIP to access all chapters.',
    goToChannel: 'Go to Channel', enterPromo: 'Enter Promo Code', toMenu: 'To Menu',
    introSubtitle: 'Interactive Visual Novel', wallet: 'Support Wallet', copy: 'Copy', copied: 'Copied',
    soon: 'Soon', thanks: 'Thanks', wisdomClose: 'Close', wisdomNext: 'Next', destinyStart: 'Start Prediction', destinyRestart: 'Retake',
    riddleEnter: 'Enter Labyrinth', riddleReady: 'Ready? The Labyrinth awaits.', riddleRules1: 'One by one: each riddle unlocks only after the previous answer.',
    riddleRules2: 'Take your time: think as long as you need.', riddleRules3: 'Help: three hints or reveal the answer.',
    lookAnswer: 'Reveal Answer', answerConfirm: 'Are you sure you want to reveal the answer?', backToRiddle: 'Back to Riddle',
    yesOpen: 'Yes, reveal', goFurther: 'Go Further', riddleComplete: 'Congratulations', riddleCompleteText: 'You have conquered the Labyrinth of Riddles!',
    fateComplete: 'Chronicles Completed', fateCompleteText: 'All dilemmas completed. New ones will appear in updates.',
    aboutText1: 'Your Destiny is an interactive visual novel where every decision changes the story.',
    aboutText2: 'Interactive stories with multiple branches.', aboutText3: 'Chronicles of Fate — psychological dilemmas.',
    aboutText4: 'Labyrinth of Riddles — ten challenging puzzles.', aboutText5: 'True Destiny — a test about past lives.',
    aboutText6: 'Wisdom of Fate — daily quotes.', termsTitle: 'Terms of Use', privacyTitle: 'Privacy Policy',
    stepIntoUnknown: 'Step into the unknown...', next: 'Next', hint: 'Hint', hintUsed: 'Used',
    destinyResultTitle: 'Your True Destiny', destinyResultDesc: 'Archetype revealed', destinyRestartBtn: 'Retake',
    empty: 'Empty for now...'
  },
  es: {
    appTitle: 'YOUR DESTINY', novels: 'Novelas', surveys: 'Encuestas', contacts: 'Contactos', favorites: 'Favoritos', settings: 'Ajustes',
    loading: 'Cargando historias...', emptyNovels: 'Las historias llegarán pronto...', emptySurveys: 'Encuestas en desarrollo...', emptyContacts: 'Contactos en desarrollo...', emptyFavorites: 'Tus momentos especiales aparecerán aquí...',
    music: 'Música', theme: 'Color del Tema', language: 'Idioma', promo: 'Código Promocional', activate: 'Activar', promoPlaceholder: 'Introduce el código...',
    promoHint: 'Encuentra códigos en nuestro canal de Telegram', vipStatus: 'Estado VIP', freeVersion: 'Versión Gratuita', vipActive: 'VIP Activo',
    timeLeft: 'Tiempo restante', days: 'd', hours: 'h', minutes: 'm', timeCapsule: 'Cápsula del Tiempo', rateApp: 'Valorar App',
    storySchedule: 'Calendario de Historias', supportAuthor: 'Apoyar al Autor', becomeAuthor: 'Ser Autor', wisdom: 'Sabiduría del Destino',
    chronicles: 'Crónicas del Destino', labyrinth: 'Laberinto de Acertijos', trueDestiny: 'Cual es tu Verdadero Destino?', about: 'Acerca de',
    terms: 'Términos de Uso', privacy: 'Política de Privacidad', community: 'Canal de la Comunidad', resetProgress: 'Reiniciar Progreso',
    back: 'Atrás', close: 'Cerrar', continue: 'Continuar',
    restart: 'Reiniciar', exit: 'Salir al Menú', pause: 'Pausa', lockTitle: 'Se Requiere VIP',
    lockText: 'Has completado 2 capítulos gratuitos. Activa VIP para acceder a todos.',
    goToChannel: 'Ir al Canal', enterPromo: 'Introducir Código', toMenu: 'Al Menú',
    introSubtitle: 'Novela Visual Interactiva', wallet: 'Billetera de Apoyo', copy: 'Copiar', copied: 'Copiado',
    soon: 'Pronto', thanks: 'Gracias', wisdomClose: 'Cerrar', wisdomNext: 'Siguiente', destinyStart: 'Iniciar Predicción', destinyRestart: 'Repetir',
    riddleEnter: 'Entrar al Laberinto', riddleReady: 'Listo? El Laberinto te espera.', riddleRules1: 'Uno por uno: cada acertijo se desbloquea tras resolver el anterior.',
    riddleRules2: 'Tómate tu tiempo: piensa todo lo que necesites.', riddleRules3: 'Ayuda: tres pistas o revelar la respuesta.',
    lookAnswer: 'Revelar Respuesta', answerConfirm: 'Seguro que quieres revelar la respuesta?', backToRiddle: 'Volver al Acertijo',
    yesOpen: 'Sí, revelar', goFurther: 'Continuar', riddleComplete: 'Felicidades', riddleCompleteText: 'Has conquistado el Laberinto de Acertijos!',
    fateComplete: 'Crónicas Completadas', fateCompleteText: 'Todos los dilemas completados. Nuevos llegarán en actualizaciones.',
    aboutText1: 'Your Destiny es una novela visual interactiva donde cada decisión cambia la historia.',
    aboutText2: 'Historias interactivas con múltiples ramificaciones.', aboutText3: 'Crónicas del Destino — dilemas psicológicos.',
    aboutText4: 'Laberinto de Acertijos — diez desafiantes puzzles.', aboutText5: 'Destino Verdadero — una prueba sobre vidas pasadas.',
    aboutText6: 'Sabiduría del Destino — citas diarias.', termsTitle: 'Términos de Uso', privacyTitle: 'Política de Privacidad',
    stepIntoUnknown: 'Dar el paso hacia lo desconocido...', next: 'Siguiente', hint: 'Pista', hintUsed: 'Usado',
    destinyResultTitle: 'Tu Verdadero Destino', destinyResultDesc: 'Arquetipo revelado', destinyRestartBtn: 'Repetir',
    empty: 'Vacío por ahora...'
  }
};

function t(key) { return T[currentLang][key] || key; }

const THEMES = [
  { id: 'purple', name: { ru: 'Королевский Пурпур', en: 'Royal Purple', es: 'Púrpura Real' }, grad: 'linear-gradient(135deg,#5a268b,#2e1a4a)' },
  { id: 'sapphire', name: { ru: 'Полночный Сапфир', en: 'Midnight Sapphire', es: 'Zafiro de Medianoche' }, grad: 'linear-gradient(135deg,#264e8b,#1a2f4a)' },
  { id: 'crimson', name: { ru: 'Багровый Занавес', en: 'Crimson Curtain', es: 'Telón Carmesí' }, grad: 'linear-gradient(135deg,#8b2635,#4a1515)' },
  { id: 'emerald', name: { ru: 'Изумрудный Лес', en: 'Emerald Forest', es: 'Bosque Esmeralda' }, grad: 'linear-gradient(135deg,#2d6a27,#1a3a1a)' },
  { id: 'amber', name: { ru: 'Янтарные Сумерки', en: 'Amber Twilight', es: 'Crepúsculo Ámbar' }, grad: 'linear-gradient(135deg,#b8860b,#8b6914)' },
  { id: 'kaleidoscope', name: { ru: 'Калейдоскоп', en: 'Kaleidoscope', es: 'Caleidoscopio' }, grad: 'linear-gradient(135deg,#d4af37,#8b7508)' }
];

// ---------- Инициализация ----------
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  initParticles();
  initNavigation();
  initIntro();
  initMusic();
  // Store first visit date
  if (!localStorage.getItem('first_visit')) {
    localStorage.setItem('first_visit', new Date().toISOString());
  }
  loadSettings();
  renderThemeColors();
  updateLanguageUI();
});

function initTelegram() {
  if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.ready(); tg.expand();
    tg.setHeaderColor('#0a0618');
    tg.setBackgroundColor('#0a0618');
    // Auto-detect language from Telegram
    if (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code) {
      const langCode = tg.initDataUnsafe.user.language_code;
      if (langCode === 'ru') {
        currentLang = 'ru';
      } else if (langCode === 'es') {
        currentLang = 'es';
      } else {
        currentLang = 'en';
      }
      localStorage.setItem('lang', currentLang);
    }
  }
}

function initIntro() {
  const intro = document.getElementById('intro-screen');
  const app = document.getElementById('app-container');
  const nav = document.getElementById('bottom-nav');
  intro.style.display = 'flex';
  app.classList.remove('active');
  nav.style.display = 'none';
  setTimeout(() => {
    intro.style.opacity = '0';
    intro.style.transition = 'opacity 1.2s ease';
    setTimeout(() => {
      intro.style.display = 'none';
      app.classList.add('active');
      nav.style.display = 'flex';
      initMusic();
    }, 1200);
  }, 3500);
}

function initMusic() {
  const toggle = document.getElementById('music-toggle');
  if (localStorage.getItem('music_enabled') === 'true') {
    isMusicPlaying = true;
    toggle.classList.add('active');
    playBgMusic();
  }
}

function playBgMusic() {
  if (!bgMusic) { bgMusic = new Audio('bg_music.mp3'); bgMusic.loop = true; bgMusic.volume = 0.4; }
  bgMusic.play().catch(() => {});
}
function stopBgMusic() { if (bgMusic) bgMusic.pause(); }

function toggleMusicSetting() {
  const toggle = document.getElementById('music-toggle');
  isMusicPlaying = !isMusicPlaying;
  toggle.classList.toggle('active');
  localStorage.setItem('music_enabled', isMusicPlaying);
  isMusicPlaying ? playBgMusic() : stopBgMusic();
}

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3, speedY: (Math.random() - 0.5) * 0.3 - 0.2,
      opacity: Math.random() * 0.5 + 0.1
    });
  }
  function animate() {
    if (!visualEffectsEnabled) { requestAnimationFrame(animate); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`; ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const screen = item.dataset.screen;
      switchScreen(screen);
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function switchScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  const subtitle = document.getElementById('header-subtitle');
  const titles = { novels: t('novels'), surveys: t('surveys'), contacts: t('contacts'), favorites: t('favorites'), settings: t('settings') };
  subtitle.textContent = titles[screen] || '';
}

function loadSettings() {
  const savedTheme = localStorage.getItem('theme') || 'purple';
  setTheme(savedTheme);
  const effects = localStorage.getItem('effects_enabled');
  if (effects === 'false') {
    visualEffectsEnabled = false;
    document.getElementById('particles-canvas').style.display = 'none';
  }
  updateVipDisplay();
}

function renderThemeColors() {
  const container = document.querySelector('.theme-colors');
  if (!container) return;
  container.innerHTML = THEMES.map(th => `
    <div class="color-option ${th.id === currentTheme ? 'active' : ''}" data-theme="${th.id}" style="background:${th.grad}" onclick="setTheme('${th.id}')"></div>
  `).join('');
}

function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  renderThemeColors();
  const th = THEMES.find(x => x.id === theme);
  document.getElementById('theme-name').textContent = th ? th.name[currentLang] : theme;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateLanguageUI();
  renderThemeColors();
  updateVipDisplay();
  switchScreen('settings');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-screen="settings"]').classList.add('active');
}

function updateLanguageUI() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (el.tagName === 'INPUT') { if (key === 'promoPlaceholder') el.placeholder = t(key); }
    else { el.textContent = t(key); }
  });
  document.getElementById('header-subtitle').textContent = t('novels');
  const keys = ['novels','surveys','contacts','favorites','settings'];
  document.querySelectorAll('.nav-label').forEach((el, i) => { el.textContent = t(keys[i]); });
  const th = THEMES.find(x => x.id === currentTheme);
  if (th) document.getElementById('theme-name').textContent = th.name[currentLang];
  // Update language button active states
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('lang-' + currentLang);
  if (activeBtn) activeBtn.classList.add('active');
}

function isVip() {
  const vipData = localStorage.getItem('vip_data');
  if (!vipData) return false;
  return new Date(JSON.parse(vipData).expires) > new Date();
}

function getVipTimeLeft() {
  const vipData = localStorage.getItem('vip_data');
  if (!vipData) return null;
  const diff = new Date(JSON.parse(vipData).expires) - new Date();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  };
}

function updateVipDisplay() {
  const vipStatus = document.getElementById('vip-status');
  const vipDays = document.getElementById('vip-days');
  const promoSection = document.getElementById('promo-section');
  if (isVip()) {
    const time = getVipTimeLeft();
    vipStatus.textContent = t('vipActive');
    if (time) vipDays.textContent = `${t('timeLeft')}: ${time.d}${t('days')} ${time.h}${t('hours')} ${time.m}${t('minutes')}`;
    if (promoSection) promoSection.style.display = 'none';
  } else {
    vipStatus.textContent = t('freeVersion');
    vipDays.textContent = '';
    if (promoSection) promoSection.style.display = 'block';
  }
}

function activatePromo() {
  const input = document.getElementById('promo-input');
  const status = document.getElementById('promo-status');
  const code = input.value.trim().toUpperCase();
  const validCodes = ['DESTINY2024', 'VIPFREE', 'FATE2024'];
  if (validCodes.includes(code)) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    localStorage.setItem('vip_data', JSON.stringify({ code, activated: new Date().toISOString(), expires: expires.toISOString() }));
    status.className = 'promo-status success';
    status.textContent = currentLang === 'ru' ? 'VIP активирован' : currentLang === 'en' ? 'VIP activated' : 'VIP activado';
    status.style.display = 'block';
    updateVipDisplay();
  } else {
    status.className = 'promo-status error';
    status.textContent = currentLang === 'ru' ? 'Неверный промокод' : currentLang === 'en' ? 'Invalid code' : 'Código inválido';
    status.style.display = 'block';
  }
}

function showToast(message) {
  const existing = document.querySelector('.toast-message');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 2500);
}



function copyWallet() {
  navigator.clipboard.writeText(WALLET).then(() => showToast(t('copied')));
}


// ============================================================
// КАПСУЛА ВРЕМЕНИ
// ============================================================
function showTimeCapsule() {
  let firstVisit = localStorage.getItem('first_visit');
  if (!firstVisit) {
    firstVisit = new Date().toISOString();
    localStorage.setItem('first_visit', firstVisit);
  }
  const date = new Date(firstVisit);
  const months = {
    ru: ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  };
  const day = date.getDate();
  const month = months[currentLang][date.getMonth()];
  const year = date.getFullYear();
  const dateStr = currentLang === 'ru' ? `${day} ${month} ${year}` : `${month} ${day}, ${year}`;

  const titles = { ru: 'Капсула Времени', en: 'Time Capsule', es: 'Cápsula del Tiempo' };
  const labels = { ru: 'Ты впервые открыл эту дверь', en: 'You first opened this door', es: 'Primero abriste esta puerta' };

  const overlay = document.createElement('div');
  overlay.className = 'timecapsule-overlay';
  overlay.innerHTML = `
    <div class="timecapsule-container">
      <div class="timecapsule-icon">⏳</div>
      <div class="timecapsule-title">${titles[currentLang]}</div>
      <div class="timecapsule-date">${dateStr}</div>
      <div class="timecapsule-label">${labels[currentLang]}</div>
      <button class="timecapsule-close" onclick="closeTimeCapsule()">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closeTimeCapsule() {
  const overlay = document.querySelector('.timecapsule-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// ПОДДЕРЖАТЬ АВТОРА
// ============================================================
function showSupportAuthor() {
  const titles = { ru: 'Поддержать Автора', en: 'Support Author', es: 'Apoyar al Autor' };
  const subtitles = {
    ru: 'Ваша поддержка помогает создавать новые истории и развивать проект. Любая сумма — это вклад в мир Your Destiny.',
    en: 'Your support helps create new stories and develop the project. Any amount is a contribution to the world of Your Destiny.',
    es: 'Tu apoyo ayuda a crear nuevas historias y desarrollar el proyecto. Cualquier cantidad es una contribución al mundo de Your Destiny.'
  };
  const walletLabels = { ru: 'Кошелек TRC20', en: 'TRC20 Wallet', es: 'Billetera TRC20' };
  const copyTexts = { ru: 'Скопировать', en: 'Copy', es: 'Copiar' };

  const overlay = document.createElement('div');
  overlay.className = 'support-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeSupportAuthor()">&times;</button>
    <div class="support-container">
      <div class="support-title">${titles[currentLang]}</div>
      <div class="support-subtitle">${subtitles[currentLang]}</div>
      <div class="support-wallet-box">
        <div class="support-wallet-label">${walletLabels[currentLang]}</div>
        <div class="support-wallet-address">${WALLET}</div>
        <button class="support-copy-btn" onclick="copyWallet()">${copyTexts[currentLang]}</button>
      </div>
      <button class="support-close-btn" onclick="closeSupportAuthor()">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closeSupportAuthor() {
  const overlay = document.querySelector('.support-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// СТАТЬ АВТОРОМ
// ============================================================
function showBecomeAuthor() {
  const titles = { ru: 'Стать Автором', en: 'Become an Author', es: 'Ser Autor' };
  const subtitles = {
    ru: 'У вас есть история, которую мир должен услышать? Присоединяйтесь к команде Your Destiny.',
    en: 'Do you have a story the world needs to hear? Join the Your Destiny team.',
    es: '¿Tienes una historia que el mundo necesita escuchar? Únete al equipo de Your Destiny.'
  };
  const stepTexts = {
    ru: [
      'Напишите свою историю в формате интерактивной новеллы',
      'Отправьте её нам через Telegram-канал',
      'Мы рассмотрим и свяжемся с вами'
    ],
    en: [
      'Write your story in the format of an interactive novel',
      'Send it to us via the Telegram channel',
      'We will review it and contact you'
    ],
    es: [
      'Escribe tu historia en formato de novela interactiva',
      'Envíanosla a través del canal de Telegram',
      'La revisaremos y nos pondremos en contacto contigo'
    ]
  };
  const tgTexts = { ru: 'Написать в Telegram', en: 'Write on Telegram', es: 'Escribir en Telegram' };

  const overlay = document.createElement('div');
  overlay.className = 'become-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeBecomeAuthor()">&times;</button>
    <div class="become-container">
      <div class="become-title">${titles[currentLang]}</div>
      <div class="become-subtitle">${subtitles[currentLang]}</div>
      <div class="become-steps">
        ${stepTexts[currentLang].map((text, i) => `
          <div class="become-step">
            <div class="become-step-num">${i + 1}</div>
            <div class="become-step-text">${text}</div>
          </div>
        `).join('')}
      </div>
      <a href="https://t.me/YourDestiny_Official" target="_blank" class="become-tg-btn">${tgTexts[currentLang]}</a>
      <button class="become-close-btn" onclick="closeBecomeAuthor()">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closeBecomeAuthor() {
  const overlay = document.querySelector('.become-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// ХРОНИКИ СУДЬБЫ
// ============================================================
const FATE_DILEMMAS = [
  {
    question: { ru: "Перед тобой две двери. За одной — безопасная, но предсказуемая жизнь. За другой — неизвестность, полная чудес и опасностей. Что выберешь?", en: "Two doors stand before you. Behind one — a safe but predictable life. Behind the other — unknown wonders and dangers. Which do you choose?", es: "Dos puertas ante ti. Detrás de una — vida segura pero predecible. Detrás de la otra — maravillas y peligros desconocidos. Cuál eliges?" },
    a: { ru: "Безопасность", en: "Safety", es: "Seguridad" },
    b: { ru: "Неизвестность", en: "The Unknown", es: "Lo Desconocido" },
    stats: { a: 41.3, b: 58.7 },
    analysis: { ru: "Ты — искатель. Твое сердце тянется к горизонтам, которые еще не нарисованы.", en: "You are a seeker. Your heart is drawn to horizons not yet drawn.", es: "Eres un buscador. Tu corazón se siente atraído por horizontes aún no dibujados." }
  },
  {
    question: { ru: "Волшебник предлагает один дар: читать мысли или стирать воспоминания. Что возьмешь?", en: "A wizard offers one gift: read minds or erase memories. What do you take?", es: "Un mago ofrece un don: leer mentes o borrar recuerdos. Qué tomas?" },
    a: { ru: "Читать мысли", en: "Read minds", es: "Leer mentes" },
    b: { ru: "Стирать воспоминания", en: "Erase memories", es: "Borrar recuerdos" },
    stats: { a: 62.9, b: 37.1 },
    analysis: { ru: "Желание видеть скрытое — величайшее проклятие. Ты готов к правде.", en: "The desire to see the hidden is the greatest curse. You are ready for truth.", es: "El deseo de ver lo oculto es la mayor maldición. Estás listo para la verdad." }
  },
  {
    question: { ru: "Ты можешь спасти одного: незнакомого гения или свою мать. Кого спасешь?", en: "You can save one: a stranger genius or your mother. Who do you save?", es: "Puedes salvar a uno: un genio desconocido o tu madre. A quién salvas?" },
    a: { ru: "Гения", en: "The genius", es: "Al genio" },
    b: { ru: "Мать", en: "My mother", es: "A mi madre" },
    stats: { a: 29.8, b: 70.2 },
    analysis: { ru: "Сердце побеждает разум. Ты выбираешь любовь перед величием.", en: "Heart defeats mind. You choose love over greatness.", es: "El corazón vence a la mente. Elijes el amor sobre la grandeza." }
  },
  {
    question: { ru: "Тебе предложили вечную жизнь без смерти. Принимаешь?", en: "You are offered eternal life without death. Do you accept?", es: "Te ofrecen vida eterna sin muerte. Aceptas?" },
    a: { ru: "Да", en: "Yes", es: "Sí" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 35.4, b: 64.6 },
    analysis: { ru: "Ты ценишь конечность. Именно она делает каждый момент бесценным.", en: "You value finitude. It is what makes every moment priceless.", es: "Valoras la finitud. Es lo que hace que cada momento no tenga precio." }
  },
  {
    question: { ru: "Ты можешь вернуться в прошлое и изменить одно решение. Сделаешь это?", en: "You can go back and change one decision. Will you do it?", es: "Puedes volver atrás y cambiar una decisión. Lo harás?" },
    a: { ru: "Да", en: "Yes", es: "Sí" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 54.6, b: 45.4 },
    analysis: { ru: "Желание исправить прошлое естественно. Но ошибки сделали тебя тем, кто ты есть.", en: "The desire to fix the past is natural. But mistakes made you who you are.", es: "El deseo de arreglar el pasado es natural. Pero los errores te hicieron quien eres." }
  }
];

const NEXT_BUTTON_TEXTS = [
  { ru: "Шагнуть в неизвестность...", en: "Step into the unknown...", es: "Dar el paso hacia lo desconocido..." },
  { ru: "Продолжить путь...", en: "Continue the path...", es: "Continuar el camino..." },
  { ru: "Слушать шепот звезд...", en: "Listen to the whisper of stars...", es: "Escuchar el susurro de las estrellas..." },
  { ru: "Принять последствия...", en: "Accept the consequences...", es: "Aceptar las consecuencias..." },
  { ru: "Следовать за тенью...", en: "Follow the shadow...", es: "Seguir la sombra..." }
];

function openFateDilemmas() {
  const saved = localStorage.getItem('fate_dilemmas');
  let state = saved ? JSON.parse(saved) : { currentIndex: 0, answers: [] };
  if (state.currentIndex >= FATE_DILEMMAS.length) { showFateFinal(); return; }
  renderFateQuestion(state.currentIndex);
}

function renderFateQuestion(index) {
  const d = FATE_DILEMMAS[index];
  const overlay = document.createElement('div');
  overlay.id = 'fate-overlay';
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button>
    <div class="fate-container">
      <div class="fate-counter">${index + 1} / ${FATE_DILEMMAS.length}</div>
      <div class="fate-question">${d.question[currentLang]}</div>
      <div class="fate-choices" id="fate-choices">
        <button class="fate-btn" onclick="answerFate(${index}, 'a')"><span class="fate-btn-text">${d.a[currentLang]}</span></button>
        <button class="fate-btn" onclick="answerFate(${index}, 'b')"><span class="fate-btn-text">${d.b[currentLang]}</span></button>
      </div>
      <div class="fate-result" id="fate-result" style="display:none;">
        <div class="fate-stats">
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-a" style="width:0%"></div><span class="fate-stat-label">${d.stats.a}%</span></div>
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-b" style="width:0%"></div><span class="fate-stat-label">${d.stats.b}%</span></div>
        </div>
        <div class="fate-analysis">${d.analysis[currentLang]}</div>
        <button class="fate-next" onclick="nextFateQuestion()">${NEXT_BUTTON_TEXTS[index % NEXT_BUTTON_TEXTS.length][currentLang]}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function answerFate(index, choice) {
  const d = FATE_DILEMMAS[index];
  const choicesDiv = document.getElementById('fate-choices');
  const resultDiv = document.getElementById('fate-result');
  createGoldExplosion();
  choicesDiv.style.opacity = '0'; choicesDiv.style.transform = 'scale(0.9)'; choicesDiv.style.transition = 'all 0.5s ease';
  setTimeout(() => {
    choicesDiv.style.display = 'none'; resultDiv.style.display = 'block';
    setTimeout(() => { document.getElementById('stat-a').style.width = d.stats.a + '%'; document.getElementById('stat-b').style.width = d.stats.b + '%'; }, 100);
    let state = JSON.parse(localStorage.getItem('fate_dilemmas') || '{"currentIndex":0,"answers":[]}');
    state.answers.push({ index, choice }); state.currentIndex = index + 1;
    localStorage.setItem('fate_dilemmas', JSON.stringify(state));
  }, 500);
}

function createGoldExplosion() {
  const overlay = document.getElementById('fate-overlay');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div'); p.className = 'gold-particle';
    p.style.left = '50%'; p.style.top = '50%';
    p.style.setProperty('--tx', (Math.random() - 0.5) * 400 + 'px');
    p.style.setProperty('--ty', (Math.random() - 0.5) * 400 + 'px');
    overlay.appendChild(p); setTimeout(() => p.remove(), 1500);
  }
}

function nextFateQuestion() {
  const overlay = document.getElementById('fate-overlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.remove(); openFateDilemmas(); }, 400);
}

function showFateFinal() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button>
    <div class="fate-container fate-final">
      <div class="fate-final-title">${t('fateComplete')}</div>
      <div class="fate-final-text">${t('fateCompleteText')}</div>
      <div class="fate-tg-block">
        <p>${t('promoHint')}</p>
        <a href="https://t.me/YourDestiny_Official" target="_blank" class="fate-tg-btn">Telegram</a>
      </div>
      <button class="fate-next" onclick="closeFateDilemmas()">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function closeFateDilemmas() {
  const overlay = document.querySelector('.fate-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// ЛАБИРИНТ ЗАГАДОК
// ============================================================
const LABYRINTH_RIDDLES = [
  {
    riddle: { ru: "Кто ходит утром на четырех ногах, днем на двух, а вечером на трех?", en: "What walks on four legs in the morning, two at noon, and three in the evening?", es: "Qué camina en cuatro patas por la mañana, en dos al mediodía y en tres por la tarde?" },
    hints: [
      { ru: "Это существо меняется со временем.", en: "This creature changes over time.", es: "Esta criatura cambia con el tiempo." },
      { ru: "Вечером оно полагается на помощь.", en: "In the evening it relies on help.", es: "Por la tarde depende de ayuda." },
      { ru: "Это самое умное живое существо.", en: "It is the wisest living being.", es: "Es el ser vivo más sabio." }
    ],
    answer: { ru: "Человек. Утром — ползает на четвереньках (младенец), днем — ходит на двух ногах (зрелость), вечером — на трех (с тростью в старости). Это классическая загадка Сфинкса из мифа об Эдипе.", en: "Man. In the morning he crawls on all fours (infant), at noon walks on two legs (adulthood), in the evening on three (with a cane in old age). This is the classic Riddle of the Sphinx from the Oedipus myth.", es: "El hombre. Por la mañana se arrastra en cuatro patas (bebé), al mediodía camina en dos (adulto), por la tarde en tres (con bastón en la vejez). Es el clásico acertijo de la Esfinge del mito de Edipo." },
    difficulty: 1
  },
  {
    riddle: { ru: "Дом открыт со всех сторон. В доме — тысячи колонн. Над колоннами — шатры. Под колоннами — ковры. Там живут и в коврах, и в колоннах, и в шатрах.", en: "A house open on all sides. Inside — thousands of columns. Above columns — tents. Below columns — carpets. There live creatures in carpets, columns, and tents.", es: "Una casa abierta por todos lados. Dentro — miles de columnas. Sobre columnas — carpas. Debajo de columnas — alfombras. Ahí viven criaturas en alfombras, columnas y carpas." },
    hints: [
      { ru: "Этот 'дом' не построен руками.", en: "This 'house' was not built by hands.", es: "Esta 'casa' no fue construida por manos." },
      { ru: "Колонны — это стволы.", en: "The columns are trunks.", es: "Las columnas son troncos." },
      { ru: "Шатры — кроны деревьев.", en: "The tents are tree crowns.", es: "Las carpas son las copas de los árboles." }
    ],
    answer: { ru: "Лес. Колонны — стволы деревьев, шатры — кроны, ковры — мох и травы под ними. Живут там птицы, звери, насекомые.", en: "A forest. The columns are tree trunks, the tents are the crowns, the carpets are moss and grass beneath. Birds, beasts, and insects live there.", es: "Un bosque. Las columnas son troncos de árboles, las carpas son las copas, las alfombras son musgo y hierba debajo. Aves, bestias e insectos viven ahí." },
    difficulty: 1
  },
  {
    riddle: { ru: "Нужно перевезти через реку волка, козу и капусту. Лодка вмещает только вас и одно существо или предмет. Нельзя оставлять волка с козой, и козу с капустой.", en: "You must cross a river with a wolf, a goat, and cabbage. The boat holds only you and one item. You cannot leave the wolf with the goat, or the goat with the cabbage.", es: "Debes cruzar un río con un lobo, una cabra y un repollo. La barca solo te lleva a ti y un objeto. No puedes dejar al lobo con la cabra, ni a la cabra con el repollo." },
    hints: [
      { ru: "Первым нужно перевезти того, кого нельзя оставить ни с одним из двух других.", en: "First, take the one who cannot be left with either of the other two.", es: "Primero lleva a quien no puedes dejar con ninguno de los otros dos." },
      { ru: "Возвращаться придется несколько раз.", en: "You will have to return several times.", es: "Tendrás que regresar varias veces." },
      { ru: "Подумай, кого можно оставить с кем на короткое время.", en: "Think about who can be left with whom briefly.", es: "Piensa a quién puedes dejar con quién por poco tiempo." }
    ],
    answer: { ru: "1) Перевези козу. 2) Вернись. 3) Перевези волка. 4) Привези козу обратно. 5) Перевези капусту. 6) Вернись. 7) Перевези козу. Волк и капуста безопасны вместе.", en: "1) Take the goat. 2) Return. 3) Take the wolf. 4) Bring the goat back. 5) Take the cabbage. 6) Return. 7) Take the goat. Wolf and cabbage are safe together.", es: "1) Lleva la cabra. 2) Regresa. 3) Lleva el lobo. 4) Trae la cabra de vuelta. 5) Lleva el repollo. 6) Regresa. 7) Lleva la cabra. El lobo y el repollo son seguros juntos." },
    difficulty: 2
  },
  {
    riddle: { ru: "За закрытой дверью три лампы. В коридоре три выключателя. Как узнать, какой за что отвечает, зайдя в комнату только один раз?", en: "Behind a closed door are three lamps. In the corridor are three switches. How do you know which switch controls which lamp, entering the room only once?", es: "Detrás de una puerta cerrada hay tres lámparas. En el pasillo hay tres interruptores. Cómo sabes cuál controla cuál, entrando solo una vez?" },
    hints: [
      { ru: "Лампа излучает не только свет.", en: "A lamp emits more than light.", es: "Una lámpara emite más que luz." },
      { ru: "У лампы есть температура.", en: "A lamp has temperature.", es: "Una lámpara tiene temperatura." },
      { ru: "Включи один, подожди, выключи, включи другой.", en: "Turn one on, wait, turn it off, turn another on.", es: "Enciende uno, espera, apágalo, enciende otro." }
    ],
    answer: { ru: "Включи первый выключатель, подожди 10 минут, выключи. Включи второй. Зайди в комнату: горящая лампа — от второго, теплая но выключенная — от первого, холодная — от третьего.", en: "Turn on the first switch, wait 10 minutes, turn it off. Turn on the second. Enter the room: the lit lamp is from the second, the warm but off one is from the first, the cold one is from the third.", es: "Enciende el primer interruptor, espera 10 minutos, apágalo. Enciende el segundo. Entra: la lámpara encendida es del segundo, la caliente pero apagada del primero, la fría del tercero." },
    difficulty: 2
  },
  {
    riddle: { ru: "Лежат 100 монет. Часть орлом вверх, часть решкой. В темноте нужно разделить их на две кучки с равным числом орлов.", en: "There are 100 coins. Some show heads, some tails. In complete darkness, split them into two piles with an equal number of heads.", es: "Hay 100 monedas. Algunas muestran cara, otras cruz. En total oscuridad, divídelas en dos montones con igual número de caras." },
    hints: [
      { ru: "Ты можешь перевернуть монеты.", en: "You can flip coins.", es: "Puedes voltear monedas." },
      { ru: "Число монет в кучке — это ключ.", en: "The number of coins in a pile is the key.", es: "El número de monedas en un montón es la clave." },
      { ru: "Если в одной кучке 10 монет, сколько там может быть орлов?", en: "If one pile has 10 coins, how many heads can it have?", es: "Si un montón tiene 10 monedas, cuántas caras puede tener?" }
    ],
    answer: { ru: "Возьми любые 10 монет в одну кучку, остальные 90 — в другую. Переверни все 10 в первой кучке. Если в этой кучке было X орлов, то стало 10-X. Во второй кучке тоже 10-X орлов (так как всего 10 орлов в 100 монетах при условии, что взято 10). Равенство достигнуто.", en: "Take any 10 coins into one pile, the remaining 90 into another. Flip all 10 in the first pile. If there were X heads, now there are 10-X. The second pile also has 10-X heads. Equality achieved.", es: "Toma 10 monedas en un montón, las otras 90 en otro. Voltea las 10 del primer montón. Si había X caras, ahora hay 10-X. El segundo montón también tiene 10-X caras. Igualdad lograda." },
    difficulty: 3
  },
  {
    riddle: { ru: "Две веревки. Каждая сгорает за ровно 60 минут, но неравномерно. Как отмерить ровно 45 минут?", en: "Two ropes. Each burns in exactly 60 minutes, but unevenly. How do you measure exactly 45 minutes?", es: "Dos cuerdas. Cada una arde en exactamente 60 minutos, pero de forma desigual. Cómo medir exactamente 45 minutos?" },
    hints: [
      { ru: "Можно поджигать с двух концов.", en: "You can light from both ends.", es: "Puedes encender desde ambos extremos." },
      { ru: "Если поджечь с двух концов, веревка сгорит за 30 минут.", en: "Lit from both ends, a rope burns in 30 minutes.", es: "Encendida por ambos lados, una cuerda arde en 30 minutos." },
      { ru: "Подожги первую с обоих концов, а вторую — с одного.", en: "Light the first from both ends, the second from one.", es: "Enciende la primera por ambos lados, la segunda por uno." }
    ],
    answer: { ru: "Подожги первую веревку с обоих концов, а вторую — с одного. Первая сгорит за 30 минут. В этот момент подожги второй конец второй веревки. Она сгорит через 15 минут. Итого: 30 + 15 = 45 минут.", en: "Light the first rope from both ends, the second from one end. The first burns out in 30 minutes. At that moment, light the other end of the second rope. It burns out in 15 more minutes. Total: 30 + 15 = 45 minutes.", es: "Enciende la primera cuerda por ambos lados, la segunda por uno. La primera se consume en 30 minutos. En ese momento enciende el otro extremo de la segunda. Se consume en 15 minutos más. Total: 30 + 15 = 45 minutos." },
    difficulty: 3
  },
  {
    riddle: { ru: "Три мудреца сидят в ряд. Каждый видит колпаки двух других (белые или черные). Все колпаки одного цвета. Они должны угадать цвет своего, не говоря. Как это возможно?", en: "Three sages sit in a row. Each sees the caps of the other two (white or black). All caps are the same color. They must guess their own color without speaking. How is this possible?", es: "Tres sabios sentados en fila. Cada uno ve las gorras de los otros dos (blancas o negras). Todas las gorras son del mismo color. Deben adivinar el suyo sin hablar. Cómo es posible?" },
    hints: [
      { ru: "Они сидят в ряд и видят друг друга.", en: "They sit in a row and see each other.", es: "Están sentados en fila y se ven entre sí." },
      { ru: "Последний видит двоих впереди.", en: "The last one sees the two in front.", es: "El último ve a los dos de adelante." },
      { ru: "Если бы впереди были разные цвета, последний не знал бы ответа.", en: "If the two in front had different colors, the last would not know.", es: "Si los dos de adelante tuvieran colores diferentes, el último no sabría." }
    ],
    answer: { ru: "Если первый и второй одного цвета, третий (видящий их) молчит, потому что не может быть уверен. Но если они разного цвета — третий точно знает свой цвет (так как все одного цвета — это условие задачи, что все колпаки одного цвета, поэтому он видит два одинаковых и знает, что его тот же цвет). В данной классической задаче: если третий молчит, значит впереди не два черных (или два белых). Второй, услышав молчание, понимает, что он и первой — одного цвета, и называет его. Первый, услышав двоих, называет свой.", en: "If the first two are the same color, the third (who sees them) knows his must be the same. If they were different, he would be uncertain. In the classic version: the third's silence tells the second that he and the first share a color. The second then deduces his own. The first, hearing both, names his.", es: "Si los dos primeros son del mismo color, el tercero (que los ve) sabe que el suyo es igual. Si fueran diferentes, no estaría seguro. En la versión clásica: el silencio del tercero le dice al segundo que él y el primero comparten color. El segundo deduce el suyo. El primero, al oír a ambos, nombra el suyo." },
    difficulty: 4
  },
  {
    riddle: { ru: "Пленник должен произнести фразу. Если она ложная — отдадут львам. Если правдивая — сбросят со скалы. Но он сказал так, что его отпустили. Что он сказал?", en: "A prisoner must say one phrase. If false — fed to lions. If true — thrown off a cliff. Yet he said something that set him free. What did he say?", es: "Un prisionero debe decir una frase. Si es falsa — lo dan a los leones. Si es verdadera — lo tiran del acantilado. Pero dijo algo que lo liberó. Qué dijo?" },
    hints: [
      { ru: "Фраза должна быть парадоксальной.", en: "The phrase must be paradoxical.", es: "La frase debe ser paradójica." },
      { ru: "Если она истинна, то она ложна.", en: "If it is true, then it is false.", es: "Si es verdadera, entonces es falsa." },
      { ru: "Попробуй 'Меня сбросят со скалы'.", en: "Try 'I will be thrown off the cliff'.", es: "Prueba 'Me tirarán del acantilado'." }
    ],
    answer: { ru: "'Меня сбросят со скалы'. Если это правда — его должны сбросить, но тогда фраза оказалась ложной (его не скинули, а отдали львам? Нет, логика: если правда — скалы, но тогда фраза ложна, потому что его не скинули...). Парадокс: если фраза истинна, то ее исполнение делает ее ложной. Если ложна, то должны отдать львам, но тогда она становится истинной. Вождь не может выполнить ни одно условие, и отпускает пленника.", en: "'I will be thrown off the cliff.' If true, they must throw him off, but then the statement becomes false because they did not feed him to lions. If false, they must feed him to lions, making it true that he was not thrown. The paradox forces the chief to release him.", es: "'Me tirarán del acantilado.' Si es verdad, deben tirarlo, pero entonces la frase se vuelve falsa porque no lo dieron a los leones. Si es falsa, deben darlo a los leones, haciéndola verdadera. El paradójico obliga al jefe a liberarlo." },
    difficulty: 4
  },
  {
    riddle: { ru: "Пять пиратов делят 100 монет. Главарь предлагает план. Если половина или больше согласны — план принимается. Если нет — главаря убивают, и следующий предлагает. Как главарь максимизирует свою долю и выживает?", en: "Five pirates divide 100 coins. The captain proposes a plan. If half or more agree, it passes. If not, the captain is killed and the next proposes. How does the captain maximize his share and survive?", es: "Cinco piratas dividen 100 monedas. El capitán propone un plan. Si la mitad o más están de acuerdo, se aprueba. Si no, matan al capitán y el siguiente propone. Cómo maximiza el capitán su parte y sobrevive?" },
    hints: [
      { ru: "Думай с конца: что если останется один пират?", en: "Think from the end: what if only one pirate remains?", es: "Piensa desde el final: qué si solo queda un pirata?" },
      { ru: "Если двое — старший забирает все.", en: "If two remain, the elder takes all.", es: "Si quedan dos, el mayor se lleva todo." },
      { ru: "Если трое — старшему нужен один голос. Кому он даст монету?", en: "If three remain, the elder needs one vote. Who gets a coin?", es: "Si quedan tres, el mayor necesita un voto. A quién le da una moneda?" }
    ],
    answer: { ru: "Решаем с конца: 1 пират — забирает 100. 2 пирата — старший голосует за себя и забирает 100, младший 0. 3 пирата — старшему нужен 1 голос. Он дает 1 монету третьему (которому иначе досталось бы 0), остальное себе: 99-0-1. 4 пирата — нужны 2 голоса. Дает по 1 монете второму и четвертому (которым иначе досталось бы 0): 98-0-1-0-1? Нет, 4 пирата: 98-0-1-0-1? Подождём. 5 пиратов (главарь): ему нужно 3 голоса (половина от 5 — 2.5, значит 3). Он голосует за себя. Ему нужны еще 2 голоса. Он дает по 1 монете тем, кто получил бы 0 при 4 пиратах. При 4 пиратах (A-B-C-D) план был бы: 98-0-1-0-1? Нет, 4 пирата: D предлагает, ему нужно 2 голоса из 4. Он голосует за себя. Нужен еще 1. Тот, кто получил бы 0 при 3 пиратах (то есть второй), получает 1. Итог: 99-0-1-0. При 5 пиратах: E (главарь) нужны 3 голоса. Он голосует за себя. Нужны еще 2. Те, кто получил бы 0 при 4 пиратах — это третий и пятый? Нет, при 4 пиратах: A=99, B=0, C=1, D=0. Значит при 5: E дает по 1 монете B и D. Итог: 98-1-0-1-0. Главарь забирает 98 монет.", en: "Work backwards: 1 pirate takes 100. With 2, the elder takes all (votes for himself). With 3, the elder needs 1 vote; he gives 1 coin to the third who would get 0 otherwise: 99-0-1. With 4, he needs 2 votes; gives 1 each to those who get 0 in the 3-pirate case (the second): 99-0-1-0. With 5, the captain needs 3 votes. He votes for himself, then gives 1 coin each to those who get 0 in the 4-pirate case (second and fourth): 98-1-0-1-0. The captain takes 98 coins.", es: "De atrás hacia adelante: 1 pirata toma 100. Con 2, el mayor se lleva todo. Con 3, necesita 1 voto; da 1 moneda al tercero que recibiría 0: 99-0-1. Con 4, necesita 2 votos; da 1 a quienes reciben 0 con 3 (el segundo): 99-0-1-0. Con 5, el capitán necesita 3 votos. Da 1 moneda a quienes reciben 0 con 4 (segundo y cuarto): 98-1-0-1-0. El capitán se lleva 98 monedas." },
    difficulty: 5
  },
  {
    riddle: { ru: "Одна кувшинка удваивает площадь покрытия озера каждый день. Через 30 дней она покрывает все озеро. Если кувшинок две, сколько дней им понадобится?", en: "One lily pad doubles the covered area of a lake every day. On day 30 it covers the whole lake. If there are two lily pads, how many days will they need?", es: "Un nenúfar duplica el área cubierta de un lago cada día. El día 30 cubre todo el lago. Si hay dos nenúfares, cuántos días necesitan?" },
    hints: [
      { ru: "Не думай, что ответ 15.", en: "Don't think the answer is 15.", es: "No pienses que la respuesta es 15." },
      { ru: "Обе кувшинки растут одновременно.", en: "Both pads grow simultaneously.", es: "Ambos nenúfares crecen simultáneamente." },
      { ru: "Две кувшинки — это как одна на день раньше.", en: "Two pads are like one pad one day earlier.", es: "Dos nenúfares son como uno un día antes." }
    ],
    answer: { ru: "29 дней. Если одна кувшинка покрывает все озеро за 30 дней, то на 29-й день она покрывает половину. Две кувшинки — это эквивалент одной на день раньше, так как каждая удваивается независимо. Значит, две кувшинки покроют все озеро на день раньше — за 29 дней.", en: "29 days. If one pad covers the whole lake on day 30, on day 29 it covers half. Two pads are equivalent to one pad one day earlier, since each doubles independently. Thus, two pads cover the lake one day earlier — in 29 days.", es: "29 días. Si un nenúfar cubre todo el lago el día 30, el día 29 cubre la mitad. Dos nenúfares equivalen a uno un día antes, ya que cada uno se duplica independientemente. Por tanto, dos nenúfares cubren el lago un día antes — en 29 días." },
    difficulty: 3
  }
];

function openLabyrinth() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  if (state.currentRiddle >= LABYRINTH_RIDDLES.length) { showLabyrinthFinal(); return; }
  showLabyrinthStart();
}

function showLabyrinthStart() {
  const overlay = document.createElement('div');
  overlay.id = 'labyrinth-overlay';
  overlay.className = 'labyrinth-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
    <div class="labyrinth-container">
      <div class="labyrinth-title">${t('labyrinth')}</div>
      <div class="labyrinth-intro">
        <p>${t('riddleReady')}</p>
        <div class="labyrinth-rules">
          <p>${t('riddleRules1')}</p>
          <p>${t('riddleRules2')}</p>
          <p>${t('riddleRules3')}</p>
        </div>
        <button class="labyrinth-enter-btn" onclick="enterLabyrinth()">${t('riddleEnter')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function enterLabyrinth() {
  const overlay = document.getElementById('labyrinth-overlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.remove(); renderLabyrinthRiddle(); }, 400);
}

function renderLabyrinthRiddle() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  const riddle = LABYRINTH_RIDDLES[state.currentRiddle];
  const overlay = document.createElement('div');
  overlay.id = 'labyrinth-overlay';
  overlay.className = 'labyrinth-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
    <div class="labyrinth-container">
      <div class="labyrinth-counter">${t('next')} ${state.currentRiddle + 1} / ${LABYRINTH_RIDDLES.length}</div>
      <div class="labyrinth-riddle">${riddle.riddle[currentLang]}</div>
      <div class="labyrinth-hints">
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(0) ? 'used' : ''}" onclick="showLabyrinthHint(0)">1</button>
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(1) ? 'used' : ''}" onclick="showLabyrinthHint(1)">2</button>
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(2) ? 'used' : ''}" onclick="showLabyrinthHint(2)">3</button>
      </div>
      <div class="labyrinth-hint-text" id="labyrinth-hint-text"></div>
      <button class="labyrinth-answer-btn" id="labyrinth-answer-btn" onclick="showLabyrinthAnswerConfirm()">${t('lookAnswer')}</button>
      <div class="labyrinth-answer" id="labyrinth-answer" style="display:none;">
        <div class="labyrinth-answer-text">${riddle.answer[currentLang]}</div>
        <button class="labyrinth-next-btn" onclick="nextLabyrinthRiddle()">${t('goFurther')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function showLabyrinthHint(hintIndex) {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  const riddle = LABYRINTH_RIDDLES[state.currentRiddle];
  if (!state.hintsUsed.includes(hintIndex)) { state.hintsUsed.push(hintIndex); localStorage.setItem('labyrinth', JSON.stringify(state)); }
  const hintText = document.getElementById('labyrinth-hint-text');
  hintText.textContent = riddle.hints[hintIndex][currentLang];
  hintText.style.display = 'block';
  const btns = document.querySelectorAll('.labyrinth-hint-btn');
  btns[hintIndex].classList.add('used');
}

function showLabyrinthAnswerConfirm() {
  const confirmOverlay = document.createElement('div');
  confirmOverlay.id = 'labyrinth-confirm';
  confirmOverlay.className = 'labyrinth-confirm-overlay';
  confirmOverlay.innerHTML = `
    <div class="labyrinth-confirm-box">
      <p>${t('answerConfirm')}</p>
      <div class="labyrinth-confirm-btns">
        <button onclick="closeLabyrinthConfirm()">${t('backToRiddle')}</button>
        <button onclick="revealLabyrinthAnswer()">${t('yesOpen')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(confirmOverlay);
}

function closeLabyrinthConfirm() {
  const confirm = document.getElementById('labyrinth-confirm');
  if (confirm) confirm.remove();
}

function revealLabyrinthAnswer() {
  closeLabyrinthConfirm();
  document.getElementById('labyrinth-answer-btn').style.display = 'none';
  document.getElementById('labyrinth-answer').style.display = 'block';
}

function nextLabyrinthRiddle() {
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
}

function showLabyrinthFinal() {
  const overlay = document.createElement('div');
  overlay.className = 'labyrinth-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
    <div class="labyrinth-container labyrinth-final">
      <div class="labyrinth-final-title">${t('riddleComplete')}</div>
      <div class="labyrinth-final-text">${t('riddleCompleteText')}</div>
      <a href="https://t.me/YourDestiny_Official" target="_blank" class="labyrinth-tg-btn">Telegram</a>
      <button class="labyrinth-next-btn" onclick="closeLabyrinth()">${t('toMenu')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function closeLabyrinth() {
  const overlay = document.querySelector('.labyrinth-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
  const confirm = document.getElementById('labyrinth-confirm');
  if (confirm) confirm.remove();
}

// ============================================================
// КАКАЯ ТВОЯ ИСТИННАЯ СУДЬБА? — 30 архетипов
// ============================================================
const DESTINY_QUESTIONS = [
  {
    question: { ru: "Ты стоишь на перекрестке. Куда пойдешь?", en: "You stand at a crossroads. Where do you go?", es: "Estás en una encrucijada. A dónde vas?" },
    options: [
      { text: { ru: "В темный лес, где шепчутся духи", en: "Into the dark forest where spirits whisper", es: "Al bosque oscuro donde susurran los espíritus" }, scores: { mystic: 2, warrior: 0, sage: 0, trickster: 0, healer: 1, wanderer: 0, guardian: 0 } },
      { text: { ru: "На вершину горы, покоряя небеса", en: "To the mountain peak, conquering the skies", es: "A la cima de la montaña, conquistando los cielos" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 1, guardian: 0 } },
      { text: { ru: "В древнюю библиотеку тайн", en: "To the ancient library of secrets", es: "A la antigua biblioteca de secretos" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "В шумный город, где течет золото", en: "To the bustling city where gold flows", es: "A la bulliciosa ciudad donde fluye el oro" }, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 0, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Перед тобой четыре артефакта. Какой возьмешь?", en: "Four artifacts lie before you. Which do you take?", es: "Cuatro artefactos ante ti. Cuál tomas?" },
    options: [
      { text: { ru: "Кристалл со звездами внутри", en: "A crystal with stars inside", es: "Un cristal con estrellas dentro" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "Меч из метеоритного железа", en: "A sword of meteoric iron", es: "Una espada de hierro meteórico" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 1, guardian: 0 } },
      { text: { ru: "Свиток с забытыми заклинаниями", en: "A scroll of forgotten spells", es: "Un pergamino de hechizos olvidados" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Маска, меняющая лицо", en: "A mask that changes your face", es: "Una máscara que cambia tu rostro" }, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 0, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Враг стоит перед тобой. Как поступишь?", en: "An enemy stands before you. What do you do?", es: "Un enemigo está ante ti. Qué haces?" },
    options: [
      { text: { ru: "Прочту его ауру и найду слабое место", en: "Read his aura and find the weak spot", es: "Leer su aura y encontrar el punto débil" }, scores: { mystic: 2, warrior: 0, sage: 0, trickster: 0, healer: 1, wanderer: 0, guardian: 0 } },
      { text: { ru: "Вступлю в честный поединок", en: "Engage in honorable combat", es: "Enfrentarme en combate honorable" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Попытаюсь убедить словами", en: "Try to convince with words", es: "Intentar convencer con palabras" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 1, wanderer: 0, guardian: 0 } },
      { text: { ru: "Обойду с тыла, пока не заметит", en: "Flank him before he notices", es: "Flanquearlo antes de que note" }, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 1, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Какое время суток тебе ближе?", en: "What time of day is closest to you?", es: "Qué momento del día te es más cercano?" },
    options: [
      { text: { ru: "Полночь, когда миры смыкаются", en: "Midnight, when worlds converge", es: "Medianoche, cuando los mundos convergen" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "Рассвет, когда начинается битва", en: "Dawn, when the battle begins", es: "Amanecer, cuando comienza la batalla" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Полдень, когда свет развеивает тени", en: "Noon, when light dispels shadows", es: "Mediodía, cuando la luz disipa las sombras" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 1, wanderer: 0, guardian: 0 } },
      { text: { ru: "Сумерки, когда правда и ложь путаются", en: "Twilight, when truth and lie blur", es: "Crepúsculo, cuando la verdad y la mentira se confunden" }, scores: { mystic: 1, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 1, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Тебе предложили стать кем угодно. Кем станешь?", en: "You are offered to become anyone. Who do you become?", es: "Te ofrecen ser cualquiera. En quién te conviertes?" },
    options: [
      { text: { ru: "Провидцем, видящим сквозь время", en: "A seer who sees through time", es: "Un vidente que ve a través del tiempo" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "Воином, защищающим слабых", en: "A warrior who protects the weak", es: "Un guerrero que protege a los débiles" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 2 } },
      { text: { ru: "Мудрецом, хранящим знания", en: "A sage who keeps knowledge", es: "Un sabio que guarda el conocimiento" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Путником без имени", en: "A nameless wanderer", es: "Un viajero sin nombre" }, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 1, healer: 0, wanderer: 2, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Какой элемент тебе ближе?", en: "Which element is closest to you?", es: "Qué elemento te es más cercano?" },
    options: [
      { text: { ru: "Эфир — невидимая сила", en: "Aether — invisible force", es: "Éter — fuerza invisible" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "Огонь — разрушение и возрождение", en: "Fire — destruction and rebirth", es: "Fuego — destrucción y renacimiento" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 1, wanderer: 0, guardian: 0 } },
      { text: { ru: "Вода — мудрость и адаптация", en: "Water — wisdom and adaptation", es: "Agua — sabiduría y adaptación" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 2, wanderer: 0, guardian: 0 } },
      { text: { ru: "Тень — скрытность и обман", en: "Shadow — secrecy and deceit", es: "Sombra — secreto y engaño" }, scores: { mystic: 1, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 1, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Ты нашел древний свиток. Что делаешь?", en: "You found an ancient scroll. What do you do?", es: "Encontraste un pergamino antiguo. Qué haces?" },
    options: [
      { text: { ru: "Читаю вслух, призывая духов", en: "Read aloud, summoning spirits", es: "Leer en voz alta, invocando espíritus" }, scores: { mystic: 2, warrior: 0, sage: 0, trickster: 0, healer: 1, wanderer: 0, guardian: 0 } },
      { text: { ru: "Использую как оружие", en: "Use it as a weapon", es: "Usarlo como arma" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Изучаю, записывая каждую деталь", en: "Study it, recording every detail", es: "Estudiarlo, registrando cada detalle" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Продаю тому, кто больше заплатит", en: "Sell it to the highest bidder", es: "Venderlo al mejor postor" }, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 1, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Какой дар ты бы выбрал?", en: "Which gift would you choose?", es: "Qué don elegirías?" },
    options: [
      { text: { ru: "Видеть будущее во снах", en: "See the future in dreams", es: "Ver el futuro en sueños" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "Непобедимую силу в бою", en: "Unbeatable strength in battle", es: "Fuerza invencible en batalla" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Помнить все прочитанное", en: "Remember everything read", es: "Recordar todo lo leído" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Менять облик по желанию", en: "Change appearance at will", es: "Cambiar de apariencia a voluntad" }, scores: { mystic: 1, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 1, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Тебя пригласили на бал в замок. Как появишься?", en: "You are invited to a castle ball. How do you appear?", es: "Te invitan a un baile en el castillo. Cómo apareces?" },
    options: [
      { text: { ru: "В плаще из звездной пыли", en: "In a cloak of stardust", es: "En una capa de polvo de estrellas" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "В доспехах, готовый к чему угодно", en: "In armor, ready for anything", es: "En armadura, listo para cualquier cosa" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 2 } },
      { text: { ru: "В мантии ученого с книгами", en: "In a scholar's robe with books", es: "En una túnica de erudito con libros" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Никто не узнает, кто я", en: "No one will know who I am", es: "Nadie sabrá quién soy" }, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 2, healer: 0, wanderer: 2, guardian: 0 } }
    ]
  },
  {
    question: { ru: "Что для тебя важнее всего?", en: "What matters most to you?", es: "Qué es lo más importante para ti?" },
    options: [
      { text: { ru: "Понимать тайны мира", en: "Understanding the world's mysteries", es: "Comprender los misterios del mundo" }, scores: { mystic: 2, warrior: 0, sage: 1, trickster: 0, healer: 0, wanderer: 0, guardian: 0 } },
      { text: { ru: "Защищать тех, кто слаб", en: "Protecting those who are weak", es: "Proteger a quienes son débiles" }, scores: { mystic: 0, warrior: 2, sage: 0, trickster: 0, healer: 1, wanderer: 0, guardian: 2 } },
      { text: { ru: "Передавать знания будущим", en: "Passing knowledge to the future", es: "Transmitir conocimiento al futuro" }, scores: { mystic: 0, warrior: 0, sage: 2, trickster: 0, healer: 0, wanderer: 0, guardian: 1 } },
      { text: { ru: "Жить свободно, не зная границ", en: "Living freely, knowing no bounds", es: "Vivir libremente, sin conocer límites" }, scores: { mystic: 1, warrior: 0, sage: 0, trickster: 1, healer: 0, wanderer: 2, guardian: 0 } }
    ]
  }
];

const DESTINY_TITLES = {
  mystic: { name: { ru: "Провидец Теней", en: "Shadow Seer", es: "Vidente de Sombras" }, description: { ru: "Ты видишь то, что скрыто от других. Мир откровений — твоя стихия.", en: "You see what is hidden. The world of revelations is your element.", es: "Ves lo oculto. El mundo de revelaciones es tu elemento." }, traits: { ru: ["Интуиция", "Эмпатия", "Видение"], en: ["Intuition", "Empathy", "Vision"], es: ["Intuición", "Empatía", "Visión"] } },
  warrior: { name: { ru: "Страж Судьбы", en: "Guardian of Fate", es: "Guardián del Destino" }, description: { ru: "Твой путь — защита и честь. Ты встаешь на защиту слабых.", en: "Your path is protection and honor. You stand up for the weak.", es: "Tu camino es protección y honor. Defiendes a los débiles." }, traits: { ru: ["Храбрость", "Честь", "Решительность"], en: ["Courage", "Honor", "Determination"], es: ["Coraje", "Honor", "Determinación"] } },
  sage: { name: { ru: "Хранитель Знаний", en: "Keeper of Knowledge", es: "Guardián del Conocimiento" }, description: { ru: "Ты — собиратель мудрости веков. Каждое слово — кирпичик в твоем храме.", en: "You collect centuries of wisdom. Every word is a brick in your temple.", es: "Coleccionas siglos de sabiduría. Cada palabra es un ladrillo en tu templo." }, traits: { ru: ["Мудрость", "Терпение", "Аналитика"], en: ["Wisdom", "Patience", "Analytics"], es: ["Sabiduría", "Paciencia", "Análisis"] } },
  trickster: { name: { ru: "Теневой Странник", en: "Shadow Wanderer", es: "Viajero de las Sombras" }, description: { ru: "Ты живешь по своим правилам. Мир — игра, где ты на шаг впереди.", en: "You live by your own rules. The world is a game where you are ahead.", es: "Vives por tus propias reglas. El mundo es un juego donde vas adelante." }, traits: { ru: ["Хитрость", "Адаптивность", "Свобода"], en: ["Cunning", "Adaptability", "Freedom"], es: ["Astucia", "Adaptabilidad", "Libertad"] } },
  healer: { name: { ru: "Целитель Душ", en: "Soul Healer", es: "Sanador de Almas" }, description: { ru: "Твои руки несут тепло. Ты восстанавливаешь то, что разрушено.", en: "Your hands carry warmth. You restore what is broken.", es: "Tus manos llevan calor. Restauras lo roto." }, traits: { ru: ["Сострадание", "Терпение", "Свет"], en: ["Compassion", "Patience", "Light"], es: ["Compasión", "Paciencia", "Luz"] } },
  wanderer: { name: { ru: "Вечный Странник", en: "Eternal Wanderer", es: "Viajero Eterno" }, description: { ru: "Ты не принадлежишь нигде. Твой дом — дорога, спутники — ветер и звезды.", en: "You belong nowhere. Your home is the road, companions are wind and stars.", es: "No perteneces a ningún lado. Tu hogar es el camino, compañeros el viento y estrellas." }, traits: { ru: ["Свобода", "Любопытство", "Независимость"], en: ["Freedom", "Curiosity", "Independence"], es: ["Libertad", "Curiosidad", "Independencia"] } },
  guardian: { name: { ru: "Небесный Страж", en: "Celestial Guardian", es: "Guardián Celestial" }, description: { ru: "Ты — стена между хаосом и порядком. Клятва — защищать любой ценой.", en: "You are the wall between chaos and order. Your oath is to protect at any cost.", es: "Eres el muro entre el caos y el orden. Tu juramento es proteger a cualquier costo." }, traits: { ru: ["Верность", "Сила", "Жертвенность"], en: ["Loyalty", "Strength", "Sacrifice"], es: ["Lealtad", "Fuerza", "Sacrificio"] } },
  mystic_warrior: { name: { ru: "Боевой Маг", en: "Battle Mage", es: "Mago de Batalla" }, description: { ru: "Ты владеешь силой и видением. Меч и кристалл — твои спутники.", en: "You wield both strength and vision. Sword and crystal are your companions.", es: "Empuñas fuerza y visión. Espada y cristal son tus compañeros." }, traits: { ru: ["Сила", "Видение", "Решительность"], en: ["Strength", "Vision", "Determination"], es: ["Fuerza", "Visión", "Determinación"] } },
  mystic_sage: { name: { ru: "Астролог", en: "Astrologer", es: "Astrólogo" }, description: { ru: "Ты читаешь звезды и свитки. Небо — твоя библиотека.", en: "You read stars and scrolls. The sky is your library.", es: "Lees estrellas y pergaminos. El cielo es tu biblioteca." }, traits: { ru: ["Знания", "Интуиция", "Терпение"], en: ["Knowledge", "Intuition", "Patience"], es: ["Conocimiento", "Intuición", "Paciencia"] } },
  mystic_trickster: { name: { ru: "Иллюзионист", en: "Illusionist", es: "Ilusionista" }, description: { ru: "Ты видишь то, что другие не замечаешь, и используешь это.", en: "You see what others miss, and you use it.", es: "Ves lo que otros no ven, y lo usas." }, traits: { ru: ["Обман", "Видение", "Хитрость"], en: ["Deceit", "Vision", "Cunning"], es: ["Engaño", "Visión", "Astucia"] } },
  mystic_healer: { name: { ru: "Шаман", en: "Shaman", es: "Chamán" }, description: { ru: "Ты лечишь духом и видением. Твоя сила — в связи с потусторонним.", en: "You heal with spirit and vision. Your power is in the connection beyond.", es: "Sanas con espíritu y visión. Tu poder está en la conexión más allá." }, traits: { ru: ["Целительство", "Видение", "Мистика"], en: ["Healing", "Vision", "Mysticism"], es: ["Sanación", "Visión", "Misticismo"] } },
  mystic_wanderer: { name: { ru: "Звездный Скиталец", en: "Star Wanderer", es: "Errante Estelar" }, description: { ru: "Ты следуешь за звездами, которые только ты видишь.", en: "You follow stars that only you can see.", es: "Sigues estrellas que solo tú puedes ver." }, traits: { ru: ["Свобода", "Видение", "Тайна"], en: ["Freedom", "Vision", "Mystery"], es: ["Libertad", "Visión", "Misterio"] } },
  mystic_guardian: { name: { ru: "Оракул", en: "Oracle", es: "Oráculo" }, description: { ru: "Ты видишь угрозы до их появления и предупреждаешь других.", en: "You see threats before they appear and warn others.", es: "Ves amenazas antes de que aparezcan y adviertes a otros." }, traits: { ru: ["Предвидение", "Защита", "Мудрость"], en: ["Foresight", "Protection", "Wisdom"], es: ["Previsión", "Protección", "Sabiduría"] } },
  warrior_sage: { name: { ru: "Стратег", en: "Strategist", es: "Estratega" }, description: { ru: "Ты побеждаешь не силой, а расчетом. Каждый бой — шахматная партия.", en: "You win not by force, but by calculation. Every battle is a chess game.", es: "Ganas no por fuerza, sino por cálculo. Cada batalla es un juego de ajedrez." }, traits: { ru: ["Тактика", "Сила", "Мудрость"], en: ["Tactics", "Strength", "Wisdom"], es: ["Táctica", "Fuerza", "Sabiduría"] } },
  warrior_trickster: { name: { ru: "Наемник", en: "Mercenary", es: "Mercenario" }, description: { ru: "Ты сражаешься не за идеалы, а за результат. Правила — для слабых.", en: "You fight not for ideals, but for results. Rules are for the weak.", es: "Luchas no por ideales, sino por resultados. Las reglas son para débiles." }, traits: { ru: ["Сила", "Хитрость", "Прагматизм"], en: ["Strength", "Cunning", "Pragmatism"], es: ["Fuerza", "Astucia", "Pragmatismo"] } },
  warrior_healer: { name: { ru: "Паладин", en: "Paladin", es: "Paladín" }, description: { ru: "Ты сражаешься, чтобы защитить, и лечишь, чтобы спасти.", en: "You fight to protect, and heal to save.", es: "Luchas para proteger, y sanas para salvar." }, traits: { ru: ["Честь", "Целительство", "Сила"], en: ["Honor", "Healing", "Strength"], es: ["Honor", "Sanación", "Fuerza"] } },
  warrior_wanderer: { name: { ru: "Ронин", en: "Ronin", es: "Ronin" }, description: { ru: "Ты — воин без хозяина. Твой путь — дорога, твой кодекс — честь.", en: "You are a warrior without a master. Your path is the road, your code is honor.", es: "Eres un guerrero sin amo. Tu camino es la ruta, tu código es el honor." }, traits: { ru: ["Свобода", "Честь", "Сила"], en: ["Freedom", "Honor", "Strength"], es: ["Libertad", "Honor", "Fuerza"] } },
  warrior_guardian: { name: { ru: "Рыцарь", en: "Knight", es: "Caballero" }, description: { ru: "Ты — воплощение верности. Твой щит — для слабых, меч — для тиранов.", en: "You are the embodiment of loyalty. Your shield is for the weak, your sword for tyrants.", es: "Eres la encarnación de la lealtad. Tu escudo es para los débiles, tu espada para tiranos." }, traits: { ru: ["Верность", "Сила", "Жертвенность"], en: ["Loyalty", "Strength", "Sacrifice"], es: ["Lealtad", "Fuerza", "Sacrificio"] } },
  sage_trickster: { name: { ru: "Алхимик", en: "Alchemist", es: "Alquimista" }, description: { ru: "Ты превращаешь знания в силу, а силу — в золото.", en: "You turn knowledge into power, and power into gold.", es: "Conviertes conocimiento en poder, y poder en oro." }, traits: { ru: ["Знания", "Хитрость", "Трансформация"], en: ["Knowledge", "Cunning", "Transformation"], es: ["Conocimiento", "Astucia", "Transformación"] } },
  sage_healer: { name: { ru: "Монах", en: "Monk", es: "Monje" }, description: { ru: "Ты ищешь истину, чтобы исцелить мир. Тишина — твой союзник.", en: "You seek truth to heal the world. Silence is your ally.", es: "Buscas la verdad para sanar el mundo. El silencio es tu aliado." }, traits: { ru: ["Мудрость", "Целительство", "Покой"], en: ["Wisdom", "Healing", "Calm"], es: ["Sabiduría", "Sanación", "Calma"] } },
  sage_wanderer: { name: { ru: "Философ", en: "Philosopher", es: "Filósofo" }, description: { ru: "Ты странствуешь в поисках истины. Каждый город — страница, каждый встречный — урок.", en: "You wander in search of truth. Every city is a page, every stranger a lesson.", es: "Vagas en busca de verdad. Cada ciudad es una página, cada desconocido una lección." }, traits: { ru: ["Мудрость", "Свобода", "Познание"], en: ["Wisdom", "Freedom", "Knowledge"], es: ["Sabiduría", "Libertad", "Conocimiento"] } },
  sage_guardian: { name: { ru: "Хранитель Закона", en: "Law Keeper", es: "Guardián de la Ley" }, description: { ru: "Ты знаешь законы мира и защищаешь их. Без порядка — нет света.", en: "You know the laws of the world and protect them. Without order, there is no light.", es: "Conoces las leyes del mundo y las proteges. Sin orden no hay luz." }, traits: { ru: ["Мудрость", "Порядок", "Защита"], en: ["Wisdom", "Order", "Protection"], es: ["Sabiduría", "Orden", "Protección"] } },
  trickster_healer: { name: { ru: "Шарлатан", en: "Charlatan", es: "Charlatán" }, description: { ru: "Ты лечишь одной рукой, а другой забираешь последнее. Но результат — здоровье.", en: "You heal with one hand and take with the other. But the result is health.", es: "Sanas con una mano y tomas con la otra. Pero el resultado es salud." }, traits: { ru: ["Хитрость", "Целительство", "Амбивалентность"], en: ["Cunning", "Healing", "Ambivalence"], es: ["Astucia", "Sanación", "Ambivalencia"] } },
  trickster_wanderer: { name: { ru: "Бард", en: "Bard", es: "Bardo" }, description: { ru: "Ты путешествуешь, рассказывая истории. Правда — лишь инструмент твоего искусства.", en: "You travel telling stories. Truth is just a tool of your art.", es: "Viajas contando historias. La verdad es solo una herramienta de tu arte." }, traits: { ru: ["Свобода", "Хитрость", "Искусство"], en: ["Freedom", "Cunning", "Art"], es: ["Libertad", "Astucia", "Arte"] } },
  trickster_guardian: { name: { ru: "Шпион", en: "Spy", es: "Espía" }, description: { ru: "Ты защищаешь, притворяясь врагом. Твоя ложь — щит, твоя маска — доспех.", en: "You protect by pretending to be the enemy. Your lie is a shield, your mask is armor.", es: "Proteges fingiendo ser el enemigo. Tu mentira es un escudo, tu máscara una armadura." }, traits: { ru: ["Хитрость", "Защита", "Тайна"], en: ["Cunning", "Protection", "Secrecy"], es: ["Astucia", "Protección", "Secreto"] } },
  healer_wanderer: { name: { ru: "Цыганка", en: "Gypsy Healer", es: "Curandera Gitana" }, description: { ru: "Ты лечишь тех, кого встречаешь на дороге. Твоя аптека — поля и леса.", en: "You heal those you meet on the road. Your pharmacy is fields and forests.", es: "Sanas a quienes encuentras en el camino. Tu farmacia son campos y bosques." }, traits: { ru: ["Свобода", "Целительство", "Природа"], en: ["Freedom", "Healing", "Nature"], es: ["Libertad", "Sanación", "Naturaleza"] } },
  healer_guardian: { name: { ru: "Медсестра Поля Боя", en: "Field Medic", es: "Médico de Campo" }, description: { ru: "Ты стоишь между жизнью и смертью, защищая обе.", en: "You stand between life and death, protecting both.", es: "Te paras entre la vida y la muerte, protegiendo ambas." }, traits: { ru: ["Целительство", "Защита", "Смелость"], en: ["Healing", "Protection", "Bravery"], es: ["Sanación", "Protección", "Valentía"] } },
  wanderer_guardian: { name: { ru: "Пограничник", en: "Ranger", es: "Guardabosques" }, description: { ru: "Ты бродишь по чужим землям, защищая свои. Никто не знает твоих троп.", en: "You roam foreign lands protecting your own. No one knows your trails.", es: "Vagas por tierras extrañas protegiendo las tuyas. Nadie conoce tus sendas." }, traits: { ru: ["Свобода", "Защита", "Выживание"], en: ["Freedom", "Protection", "Survival"], es: ["Libertad", "Protección", "Supervivencia"] } },
  balanced: { name: { ru: "Архонт", en: "Archon", es: "Arconte" }, description: { ru: "Ты владеешь всеми силами в равной мере. Ты — редкость, ты — равновесие.", en: "You wield all forces equally. You are rare, you are balance.", es: "Empuñas todas las fuerzas por igual. Eres raro, eres equilibrio." }, traits: { ru: ["Баланс", "Все", "Гармония"], en: ["Balance", "All", "Harmony"], es: ["Equilibrio", "Todo", "Armonía"] } },
  shadow: { name: { ru: "Антигерой", en: "Antihero", es: "Antihéroe" }, description: { ru: "Ты не вписываешься ни в одну категорию. Твоя сила — в противоречиях.", en: "You fit no category. Your strength is in contradictions.", es: "No encajas en ninguna categoría. Tu fuerza está en las contradicciones." }, traits: { ru: ["Противоречие", "Сила", "Тайна"], en: ["Contradiction", "Strength", "Mystery"], es: ["Contradicción", "Fuerza", "Misterio"] } }
};

function openTrueDestiny() {
  const saved = localStorage.getItem('true_destiny');
  if (saved) {
    const state = JSON.parse(saved);
    if (state.completed) { showDestinyResult(state.scores); return; }
    if (state.currentQuestion > 0) { renderDestinyQuestion(state.currentQuestion); return; }
  }
  const overlay = document.createElement('div');
  overlay.id = 'destiny-overlay';
  overlay.className = 'destiny-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeDestiny()">&times;</button>
    <div class="destiny-container">
      <div class="destiny-title">${t('trueDestiny')}</div>
      <div class="destiny-intro">
        <p>10 ${currentLang === 'ru' ? 'вопросов раскроют твою сущность' : currentLang === 'en' ? 'questions will reveal your essence' : 'preguntas revelarán tu esencia'}</p>
      </div>
      <button class="destiny-start-btn" onclick="startDestinyQuiz()">${t('destinyStart')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function startDestinyQuiz() {
  localStorage.setItem('true_destiny', JSON.stringify({ currentQuestion: 0, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 0 }, completed: false }));
  const overlay = document.getElementById('destiny-overlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.remove(); renderDestinyQuestion(0); }, 400);
}

function renderDestinyQuestion(index) {
  const q = DESTINY_QUESTIONS[index];
  const overlay = document.createElement('div');
  overlay.id = 'destiny-overlay';
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeDestiny()">&times;</button>
    <div class="destiny-container">
      <div class="destiny-counter">${index + 1} / ${DESTINY_QUESTIONS.length}</div>
      <div class="destiny-question">${q.question[currentLang]}</div>
      <div class="destiny-options">
        ${q.options.map((opt, i) => `
          <button class="destiny-option" onclick="answerDestiny(${index}, ${i})" style="animation-delay:${i * 0.1}s">${opt.text[currentLang]}</button>
        `).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function answerDestiny(qIndex, optIndex) {
  const q = DESTINY_QUESTIONS[qIndex];
  const scores = q.options[optIndex].scores;
  let state = JSON.parse(localStorage.getItem('true_destiny'));
  state.currentQuestion = qIndex + 1;
  for (let key in scores) state.scores[key] += scores[key];
  localStorage.setItem('true_destiny', JSON.stringify(state));
  const overlay = document.getElementById('destiny-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    if (state.currentQuestion >= DESTINY_QUESTIONS.length) {
      state.completed = true;
      localStorage.setItem('true_destiny', JSON.stringify(state));
      showDestinyResult(state.scores);
    } else renderDestinyQuestion(state.currentQuestion);
  }, 400);
}

function showDestinyResult(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [first, second] = sorted;

  let winner;
  const allEqual = sorted.every(([k,v]) => Math.abs(v - first[1]) <= 1);
  if (allEqual && sorted.length > 2) {
    winner = 'balanced';
  } else if (first[1] === second[1]) {
    const combo = [first[0], second[0]].sort().join('_');
    winner = DESTINY_TITLES[combo] ? combo : 'shadow';
  } else {
    winner = first[0];
  }

  const title = DESTINY_TITLES[winner];
  const overlay = document.createElement('div');
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeDestiny()">&times;</button>
    <div class="destiny-container destiny-result">
      <div class="destiny-result-title">${title.name[currentLang]}</div>
      <div class="destiny-result-desc">${title.description[currentLang]}</div>
      <button class="destiny-restart" onclick="closeDestiny()">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function restartDestiny() {
  localStorage.removeItem('true_destiny');
  const overlay = document.querySelector('.destiny-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => { overlay.remove(); openTrueDestiny(); }, 400); }
}

function closeDestiny() {
  const overlay = document.querySelector('.destiny-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// МУДРОСТЬ СУДЬБЫ — 100 цитат, циклично, без номера
// ============================================================
const WISDOM_QUOTES = [
  { ru: "Судьба — это не то, что случается с тобой. Это то, как ты реагируешь.", en: "Fate is not what happens to you. It is how you react.", es: "El destino no es lo que te sucede. Es cómo reaccionas." },
  { ru: "Нить судьбы тонка, но неразрывна. Каждый узел — это выбор.", en: "The thread of fate is thin but unbreakable. Every knot is a choice.", es: "El hilo del destino es fino pero irrompible. Cada nudo es una elección." },
  { ru: "Тот, кто боится судьбы, уже проиграл половину битвы.", en: "He who fears fate has already lost half the battle.", es: "Quien teme al destino ya ha perdido la mitad de la batalla." },
  { ru: "Судьба не пишет сценарий — она лишь предлагает декорации.", en: "Fate does not write the script — it only offers the set.", es: "El destino no escribe el guion, solo ofrece el escenario." },
  { ru: "Путь, который ты выбираешь, становится твоей судьбой.", en: "The path you choose becomes your fate.", es: "El camino que eliges se convierte en tu destino." },
  { ru: "В каждой судьбе есть момент, когда весь мир замирает.", en: "In every fate there is a moment when the whole world stands still.", es: "En cada destino hay un momento en que el mundo entero se detiene." },
  { ru: "Судьба любит тех, кто не ждет, а действует.", en: "Fate loves those who do not wait but act.", es: "El destino ama a quienes no esperan sino actúan." },
  { ru: "Ты не можешь изменить ветер, но можешь направить паруса.", en: "You cannot change the wind, but you can adjust the sails.", es: "No puedes cambiar el viento, pero puedes ajustar las velas." },
  { ru: "Каждый человек — кузнец своей судьбы.", en: "Every person is the smith of their own fate.", es: "Cada persona es el herrero de su propio destino." },
  { ru: "Судьба — это зеркало. Что ты в него посылаешь, то и отражается.", en: "Fate is a mirror. What you send into it is what reflects back.", es: "El destino es un espejo. Lo que envías es lo que se refleja." },
  { ru: "Тайны судьбы раскрываются тем, кто задает правильные вопросы.", en: "The secrets of fate are revealed to those who ask the right questions.", es: "Los secretos del destino se revelan a quienes hacen las preguntas correctas." },
  { ru: "Нить жизни плетется из тысячи мелких решений.", en: "The thread of life is woven from a thousand small decisions.", es: "El hilo de la vida se teje de mil pequeñas decisiones." },
  { ru: "Судьба не наказывает — она учит.", en: "Fate does not punish — it teaches.", es: "El destino no castiga, enseña." },
  { ru: "Великие судьбы рождаются из великих испытаний.", en: "Great fates are born from great trials.", es: "Los grandes destinos nacen de grandes pruebas." },
  { ru: "Судьба — это не лотерея. Это шахматы.", en: "Fate is not a lottery. It is chess.", es: "El destino no es una lotería. Es ajedrez." },
  { ru: "Ты не можешь выбрать начало, но можешь выбрать конец.", en: "You cannot choose your beginning, but you can choose your end.", es: "No puedes elegir tu inicio, pero puedes elegir tu final." },
  { ru: "Судьба шепчет тем, кто умеет слушать тишину.", en: "Fate whispers to those who know how to listen to silence.", es: "El destino susurra a quienes saben escuchar el silencio." },
  { ru: "Каждый закат — напоминание: даже самый темный день заканчивается.", en: "Every sunset is a reminder: even the darkest day ends.", es: "Cada atardecer es un recordatorio: incluso el día más oscuro termina." },
  { ru: "Твоя судьба — это то, что ты пишешь своими руками.", en: "Your fate is what you write with your own hands.", es: "Tu destino es lo que escribes con tus propias manos." },
  { ru: "Самые красивые истории пишутся не пером, а кровью и потом.", en: "The most beautiful stories are written not with a quill, but with blood and sweat.", es: "Las historias más bellas no se escriben con pluma, sino con sangre y sudor." },
  { ru: "Судьба не дает испытаний тем, кто не способен их пройти.", en: "Fate does not give trials to those unable to pass them.", es: "El destino no da pruebas a quienes no pueden superarlas." },
  { ru: "Ты — автор своей истории. Не позволяй другим писать за тебя.", en: "You are the author of your story. Do not let others write for you.", es: "Eres el autor de tu historia. No dejes que otros escriban por ti." },
  { ru: "Каждый выбор — камень, брошенный в воду судьбы.", en: "Every choice is a stone thrown into the water of fate.", es: "Cada elección es una piedra arrojada al agua del destino." },
  { ru: "Судьба любит смелых, но бережет мудрых.", en: "Fate loves the bold, but protects the wise.", es: "El destino ama a los audaces, pero protege a los sabios." },
  { ru: "Тот, кто ищет легкий путь, найдет лишь тупик.", en: "He who seeks the easy path will find only a dead end.", es: "Quien busca el camino fácil solo encontrará un callejón sin salida." },
  { ru: "Великие души рождаются не в тишине, а в буре.", en: "Great souls are born not in silence, but in storm.", es: "Las grandes almas nacen no en el silencio, sino en la tormenta." },
  { ru: "Судьба — это не проклятие. Это вызов.", en: "Fate is not a curse. It is a challenge.", es: "El destino no es una maldición. Es un desafío." },
  { ru: "Ты не можешь изменить прошлое, но можешь изменить его значение.", en: "You cannot change the past, but you can change its meaning.", es: "No puedes cambiar el pasado, pero puedes cambiar su significado." },
  { ru: "Каждый человек несет в себе искру божественного.", en: "Every person carries a spark of the divine.", es: "Cada persona lleva una chispa de lo divino." },
  { ru: "Судьба не случайна. Она — результат миллиона выборов.", en: "Fate is not random. It is the result of a million choices.", es: "El destino no es azaroso. Es el resultado de un millón de elecciones." },
  { ru: "Тот, кто боится темноты, никогда не увидит звезд.", en: "He who fears darkness will never see the stars.", es: "Quien teme a la oscuridad nunca verá las estrellas." },
  { ru: "Твоя история — это не то, что с тобой случилось. Это то, как ты об этом рассказываешь.", en: "Your story is not what happened to you. It is how you tell it.", es: "Tu historia no es lo que te sucedió. Es cómo lo cuentas." },
  { ru: "Судьба — это река. Ты можешь плыть по течению или бороться с ним.", en: "Fate is a river. You can swim with the current or fight it.", es: "El destino es un río. Puedes nadar con la corriente o luchar contra ella." },
  { ru: "Каждый момент — это перекресток. Каждый выбор — это поворот.", en: "Every moment is a crossroads. Every choice is a turn.", es: "Cada momento es una encrucijada. Cada elección es un giro." },
  { ru: "Ты не можешь контролировать все, но можешь контролировать свою реакцию.", en: "You cannot control everything, but you can control your reaction.", es: "No puedes controlar todo, pero puedes controlar tu reacción." },
  { ru: "Судьба щедра к тем, кто не жалеет себя.", en: "Fate is generous to those who do not spare themselves.", es: "El destino es generoso con quienes no se ahorran a sí mismos." },
  { ru: "Великие дела начинаются с маленьких шагов.", en: "Great deeds begin with small steps.", es: "Las grandes obras comienzan con pequeños pasos." },
  { ru: "Твоя судьба — это твоя ответственность.", en: "Your fate is your responsibility.", es: "Tu destino es tu responsabilidad." },
  { ru: "Самые глубокие раны дают самую яркую мудрость.", en: "The deepest wounds give the brightest wisdom.", es: "Las heridas más profundas dan la sabiduría más brillante." },
  { ru: "Судьба не спрашивает разрешения. Она просто случается.", en: "Fate does not ask permission. It simply happens.", es: "El destino no pide permiso. Simplemente sucede." },
  { ru: "Ты — единственный человек, который может изменить свою жизнь.", en: "You are the only person who can change your life.", es: "Eres la única persona que puede cambiar tu vida." },
  { ru: "Каждый закат — это обещание нового рассвета.", en: "Every sunset is a promise of a new dawn.", es: "Cada atardecer es una promesa de un nuevo amanecer." },
  { ru: "Судьба — это не наказание. Это возможность.", en: "Fate is not punishment. It is opportunity.", es: "El destino no es castigo. Es oportunidad." },
  { ru: "Тот, кто ищет смысл, найдет его.", en: "He who seeks meaning will find it.", es: "Quien busca sentido lo encontrará." },
  { ru: "Твоя сила — не в том, чтобы никогда не падать, а в том, чтобы вставать.", en: "Your strength is not in never falling, but in rising every time.", es: "Tu fuerza no está en nunca caer, sino en levantarte cada vez." },
  { ru: "Судьба любит тех, кто верит в себя.", en: "Fate loves those who believe in themselves.", es: "El destino ama a quienes creen en sí mismos." },
  { ru: "Каждый человек — это книга.", en: "Every person is a book.", es: "Cada persona es un libro." },
  { ru: "Ты не можешь выбрать свою семью, но можешь выбрать свою судьбу.", en: "You cannot choose your family, but you can choose your fate.", es: "No puedes elegir tu familia, pero puedes elegir tu destino." },
  { ru: "Судьба — это не то, что дано. Это то, что создано.", en: "Fate is not what is given. It is what is created.", es: "El destino no es lo que se da. Es lo que se crea." },
  { ru: "Великие мечты требуют великих жертв.", en: "Great dreams require great sacrifices.", es: "Los grandes sueños requieren grandes sacrificios." },
  { ru: "Твоя судьба — это твоя мечта, которую ты не осмелился осуществить.", en: "Your fate is the dream you dared not fulfill.", es: "Tu destino es el sueño que no te atreviste a cumplir." },
  { ru: "Судьба не ждет. Она приходит к тем, кто готов.", en: "Fate does not wait. It comes to those who are ready.", es: "El destino no espera. Viene a quienes están listos." },
  { ru: "Каждый выбор — это семя, которое ты сажаешь.", en: "Every choice is a seed you plant.", es: "Cada elección es una semilla que plantas." },
  { ru: "Ты — кузнец своей судьбы. Куй, пока железо горячо.", en: "You are the smith of your fate. Strike while the iron is hot.", es: "Eres el herrero de tu destino. Golpea mientras el hierro está caliente." },
  { ru: "Судьба — это не случайность. Это закономерность.", en: "Fate is not chance. It is pattern.", es: "El destino no es azar. Es patrón." },
  { ru: "Тот, кто не рискует, не пьет шампанского.", en: "He who does not risk does not drink champagne.", es: "Quien no arriesga no bebe champán." },
  { ru: "Твоя история еще не закончена. Продолжай писать.", en: "Your story is not over. Keep writing.", es: "Tu historia no ha terminado. Sigue escribiendo." },
  { ru: "Судьба — это зеркало твоих желаний.", en: "Fate is the mirror of your desires.", es: "El destino es el espejo de tus deseos." },
  { ru: "Каждый человек — это вселенная.", en: "Every person is a universe.", es: "Cada persona es un universo." },
  { ru: "Ты не можешь изменить мир, но можешь изменить себя.", en: "You cannot change the world, but you can change yourself.", es: "No puedes cambiar el mundo, pero puedes cambiarte a ti mismo." },
  { ru: "Судьба — это не проклятие. Это дар.", en: "Fate is not a curse. It is a gift.", es: "El destino no es una maldición. Es un regalo." },
  { ru: "Великие души не рождаются в комфорте.", en: "Great souls are not born in comfort.", es: "Las grandes almas no nacen en la comodidad." },
  { ru: "Твоя судьба — это твоя отвага.", en: "Your fate is your courage.", es: "Tu destino es tu coraje." },
  { ru: "Судьба не спрашивает, готов ли ты.", en: "Fate does not ask if you are ready.", es: "El destino no pregunta si estás listo." },
  { ru: "Каждый момент — это возможность начать заново.", en: "Every moment is a chance to start anew.", es: "Cada momento es una oportunidad para empezar de nuevo." },
  { ru: "Ты — автор своей судьбы. Не позволяй другим редактировать.", en: "You are the author of your fate. Do not let others edit it.", es: "Eres el autor de tu destino. No dejes que otros lo editen." },
  { ru: "Судьба — это не то, что случается. Это то, что ты делаешь.", en: "Fate is not what happens. It is what you do.", es: "El destino no es lo que sucede. Es lo que haces." },
  { ru: "Тот, кто ищет легких путей, никогда не найдет великих.", en: "He who seeks easy paths will never find great ones.", es: "Quien busca caminos fáciles nunca encontrará los grandes." },
  { ru: "Твоя сила — в твоей уязвимости.", en: "Your strength is in your vulnerability.", es: "Tu fuerza está en tu vulnerabilidad." },
  { ru: "Судьба — это не случайность. Это выбор.", en: "Fate is not chance. It is choice.", es: "El destino no es azar. Es elección." },
  { ru: "Каждый человек — это звезда.", en: "Every person is a star.", es: "Cada persona es una estrella." },
  { ru: "Ты не можешь контролировать ветер, но можешь контролировать свой курс.", en: "You cannot control the wind, but you can control your course.", es: "No puedes controlar el viento, pero puedes controlar tu rumbo." },
  { ru: "Судьба — это не проклятие. Это вызов.", en: "Fate is not a curse. It is a call.", es: "El destino no es una maldición. Es una llamada." },
  { ru: "Великие дела требуют великой веры.", en: "Great deeds require great faith.", es: "Las grandes obras requieren gran fe." },
  { ru: "Твоя судьба — это твоя мудрость.", en: "Your fate is your wisdom.", es: "Tu destino es tu sabiduría." },
  { ru: "Судьба не щадит никого. Но и не обделяет никого.", en: "Fate spares no one. But it also shortchanges no one.", es: "El destino no perdona a nadie. Pero tampoco defrauda a nadie." },
  { ru: "Каждый выбор — это камень в фундамент твоей судьбы.", en: "Every choice is a stone in the foundation of your fate.", es: "Cada elección es una piedra en el fundamento de tu destino." },
  { ru: "Ты — кузнец своей судьбы. Куй с умом.", en: "You are the smith of your fate. Forge wisely.", es: "Eres el herrero de tu destino. Forja con sabiduría." },
  { ru: "Судьба — это не случайность. Это закон.", en: "Fate is not chance. It is law.", es: "El destino no es azar. Es ley." },
  { ru: "Тот, кто не верит в чудеса, никогда их не увидит.", en: "He who does not believe in miracles will never see them.", es: "Quien no cree en milagros nunca los verá." },
  { ru: "Твоя история — это твоя сила.", en: "Your story is your strength.", es: "Tu historia es tu fuerza." },
  { ru: "Судьба — это не то, что дано. Это то, что взято.", en: "Fate is not what is given. It is what is taken.", es: "El destino no es lo que se da. Es lo que se toma." },
  { ru: "Великие мечты рождаются в великих сердцах.", en: "Great dreams are born in great hearts.", es: "Los grandes sueños nacen en grandes corazones." },
  { ru: "Твоя судьба — это твоя любовь.", en: "Your fate is your love.", es: "Tu destino es tu amor." },
  { ru: "Судьба не ждет. Она идет.", en: "Fate does not wait. It moves.", es: "El destino no espera. Avanza." },
  { ru: "Каждый момент — это дар. Не трать его впустую.", en: "Every moment is a gift. Do not waste it.", es: "Cada momento es un regalo. No lo desperdicies." },
  { ru: "Ты — автор своей жизни. Пиши красиво.", en: "You are the author of your life. Write beautifully.", es: "Eres el autor de tu vida. Escribe bellamente." },
  { ru: "Судьба — это не проклятие. Это возможность.", en: "Fate is not a curse. It is opportunity.", es: "El destino no es una maldición. Es oportunidad." },
  { ru: "Тот, кто ищет правду, найдет ее.", en: "He who seeks truth will find it.", es: "Quien busca la verdad la encontrará." },
  { ru: "Твоя сила — в твоей истине.", en: "Your strength is in your truth.", es: "Tu fuerza está en tu verdad." },
  { ru: "Судьба — это не случайность. Это путь.", en: "Fate is not chance. It is path.", es: "El destino no es azar. Es camino." },
  { ru: "Каждый человек — это загадка. Разгадай свою.", en: "Every person is a riddle. Solve yours.", es: "Cada persona es un acertijo. Resuelve el tuyo." },
  { ru: "Ты не можешь изменить прошлое, но можешь изменить будущее.", en: "You cannot change the past, but you can change the future.", es: "No puedes cambiar el pasado, pero puedes cambiar el futuro." },
  { ru: "Судьба — это не проклятие. Это приключение.", en: "Fate is not a curse. It is adventure.", es: "El destino no es una maldición. Es aventura." },
  { ru: "Великие души не ищут легких путей.", en: "Great souls do not seek easy paths.", es: "Las grandes almas no buscan caminos fáciles." },
  { ru: "Твоя судьба — это твоя отвага.", en: "Your fate is your bravery.", es: "Tu destino es tu valentía." },
  { ru: "Судьба не спрашивает. Она решает.", en: "Fate does not ask. It decides.", es: "El destino no pregunta. Decide." },
  { ru: "Каждый выбор — это шаг. Делай его уверенно.", en: "Every choice is a step. Take it confidently.", es: "Cada elección es un paso. Dalo con confianza." },
  { ru: "Ты — кузнец своей судьбы. Куй с любовью.", en: "You are the smith of your fate. Forge with love.", es: "Eres el herrero de tu destino. Forja con amor." },
  { ru: "Судьба — это не случайность. Это судьба.", en: "Fate is not chance. It is destiny.", es: "El destino no es azar. Es destino." },
  { ru: "Тот, кто верит в себя, уже на полпути к цели.", en: "He who believes in himself is already halfway to the goal.", es: "Quien cree en sí mismo ya está a mitad de camino hacia la meta." },
  { ru: "Твоя история — это твоя магия.", en: "Your story is your magic.", es: "Tu historia es tu magia." },
  { ru: "Судьба — это не то, что дано. Это то, что создано любовью.", en: "Fate is not what is given. It is what is created with love.", es: "El destino no es lo que se da. Es lo que se crea con amor." },
  { ru: "Великие дела начинаются с великой веры.", en: "Great deeds begin with great faith.", es: "Las grandes obras comienzan con gran fe." },
  { ru: "Твоя судьба — это твоя надежда.", en: "Your fate is your hope.", es: "Tu destino es tu esperanza." },
  { ru: "Судьба не ждет. Она творится.", en: "Fate does not wait. It is forged.", es: "El destino no espera. Se forja." },
  { ru: "Каждый момент — это вечность. Живи ее полностью.", en: "Every moment is eternity. Live it fully.", es: "Cada momento es eternidad. Vívelo plenamente." },
  { ru: "Ты — автор своей судьбы. Пиши шедевр.", en: "You are the author of your fate. Write a masterpiece.", es: "Eres el autor de tu destino. Escribe una obra maestra." }
];

function showWisdom() {
  let index = parseInt(localStorage.getItem('wisdom_index') || '0');
  if (index >= WISDOM_QUOTES.length) index = 0;
  const quote = WISDOM_QUOTES[index];
  localStorage.setItem('wisdom_index', (index + 1).toString());
  const overlay = document.createElement('div');
  overlay.className = 'wisdom-overlay';
  const titles = { ru: 'Мудрость Судьбы', en: 'Wisdom of Fate', es: 'Sabiduría del Destino' };
  overlay.innerHTML = `
    <div class="wisdom-container">
      <button class="wisdom-close-x" onclick="closeWisdom()">&times;</button>
      <div class="wisdom-icon">✦</div>
      <div class="wisdom-title">${titles[currentLang]}</div>
      <div class="wisdom-quote">${quote[currentLang]}</div>
      <button class="wisdom-next-btn" onclick="closeWisdom()">${t('wisdomNext')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closeWisdom() {
  const overlay = document.querySelector('.wisdom-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// ABOUT, TERMS, PRIVACY
// ============================================================
function showAbout() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button>
    <div class="fate-container" style="max-width:380px;">
      <div class="fate-final-title" style="font-size:1.3rem;">${t('about')}</div>
      <div style="font-size:0.9rem;color:var(--text-secondary);line-height:1.7;text-align:left;margin-bottom:20px;">
        <p style="margin-bottom:12px;"><b>Your Destiny</b> — ${t('aboutText1')}</p>
        <p style="margin-bottom:12px;">${t('aboutText2')}</p>
        <p style="margin-bottom:12px;">${t('aboutText3')}</p>
        <p style="margin-bottom:12px;">${t('aboutText4')}</p>
        <p style="margin-bottom:12px;">${t('aboutText5')}</p>
        <p>${t('aboutText6')}</p>
      </div>
      <button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showTerms() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  const termsTexts = {
    ru: [
      '<b>1. Общие положения.</b> Настоящие Условия использования (далее — «Условия») регулируют отношения между пользователем (далее — «Пользователь») и разработчиком интерактивного приложения «Your Destiny» (далее — «Приложение»). Устанавливая, загружая, устанавливая, активируя, регистрируясь в или иным образом используя Приложение, Пользователь подтверждает свое полное и безоговорочное согласие с настоящими Условиями. Если Пользователь не согласен с каким-либо из положений настоящих Условий, он обязан немедленно прекратить использование Приложения.',
      '<b>2. Права интеллектуальной собственности.</b> Все материалы, содержимое, графика, дизайн, тексты, изображения, аудио, видео, программный код, базы данных и любые другие объекты, размещенные в Приложении, являются объектами авторского права и/или смежных прав, принадлежащих разработчику или лицензиарам. Любое воспроизведение, распространение, модификация, публичный показ, перевод, адаптация, декомпиляция, дизассемблирование, обратное проектирование или иное использование материалов Приложения без предварительного письменного согласия правообладателя строго запрещено и может повлечь гражданскую, административную и уголовную ответственность в соответствии с действующим законодательством.',
      '<b>3. Лицензия на использование.</b> Разработчик предоставляет Пользователю ограниченную, неисключительную, непередаваемую, отзывную лицензию на использование Приложения исключительно для личных, некоммерческих целей в соответствии с настоящими Условиями. Пользователь не вправе сдавать в аренду, продавать, сублицензировать, распространять или иным образом передавать права на использование Приложения третьим лицам.',
      '<b>4. VIP-статус и платные услуги.</b> Приложение может содержать платный контент, доступ к которому предоставляется посредством активации VIP-статуса через ввод промокода или иным способом, предусмотренным разработчиком. VIP-статус предоставляет доступ к дополнительным главам, историям, функциям и контенту, не доступным в бесплатной версии. Стоимость, срок действия и условия предоставления VIP-статуса определяются разработчиком и могут быть изменены в одностороннем порядке. Активация промокода осуществляется в соответствии с правилами, установленными разработчиком.',
      '<b>5. Ограничение ответственности.</b> Приложение предоставляется на условиях «как есть» (as is). Разработчик не гарантирует бесперебойную, безошибочную и безопасную работу Приложения. Разработчик не несет ответственности за любые прямые, косвенные, случайные, особые или последующие убытки, включая, но не ограничиваясь, утратой данных, прибыли, деловой репутации или иных нематериальных потерь, возникших в результате использования или невозможности использования Приложения. Пользователь самостоятельно несет ответственность за сохранность своих данных, включая прогресс в играх, настройки и предпочтения.',
      '<b>6. Пользовательский контент.</b> Пользователь гарантирует, что любой контент, который он создает, загружает, передает или публикует в рамках Приложения, не нарушает права третьих лиц, не является незаконным, оскорбительным, клеветническим, дискриминационным, порнографическим, пропагандирующим насилие, ненависть или экстремизм. Разработчик вправе в любое время без предварительного уведомления удалить любой пользовательский контент, нарушающий настоящие Условия или действующее законодательство.',
      '<b>7. Конфиденциальность и обработка данных.</b> Использование Приложения регулируется Политикой конфиденциальности, которая является неотъемлемой частью настоящих Условий. Пользователь соглашается с обработкой его персональных данных в соответствии с Политикой конфиденциальности.',
      '<b>8. Модификация Условий.</b> Разработчик оставляет за собой право в любое время в одностороннем порядке изменять, дополнять или отменять настоящие Условия. Изменения вступают в силу с момента их публикации в Приложении. Продолжение использования Приложения после внесения изменений означает согласие Пользователя с измененными Условиями.',
      '<b>9. Прекращение действия.</b> Разработчик вправе в любое время без предварительного уведомления приостановить или прекратить доступ Пользователя к Приложению в случае нарушения настоящих Условий, а также по техническим, организационным или иным причинам.',
      '<b>10. Применимое право и разрешение споров.</b> Настоящие Условия регулируются и толкуются в соответствии с законодательством страны регистрации разработчика. Все споры, возникающие из настоящих Условий или в связи с их исполнением, подлежат разрешению путем переговоров. В случае невозможности достижения соглашения спор передается на рассмотрение в компетентный суд по месту нахождения разработчика.'
    ],
    en: [
      '<b>1. General Provisions.</b> These Terms of Use (hereinafter referred to as the «Terms») govern the relationship between the user (hereinafter referred to as the «User») and the developer of the interactive application «Your Destiny» (hereinafter referred to as the «Application»). By installing, downloading, setting up, activating, registering in, or otherwise using the Application, the User confirms their full and unconditional agreement with these Terms. If the User does not agree with any of the provisions of these Terms, they must immediately cease using the Application.',
      '<b>2. Intellectual Property Rights.</b> All materials, content, graphics, design, texts, images, audio, video, software code, databases, and any other objects posted in the Application are objects of copyright and/or related rights belonging to the developer or licensors. Any reproduction, distribution, modification, public display, translation, adaptation, decompilation, disassembly, reverse engineering, or other use of the Application materials without the prior written consent of the rights holder is strictly prohibited and may result in civil, administrative, and criminal liability under applicable law.',
      '<b>3. License to Use.</b> The developer grants the User a limited, non-exclusive, non-transferable, revocable license to use the Application solely for personal, non-commercial purposes in accordance with these Terms. The User is not entitled to rent, sell, sublicense, distribute, or otherwise transfer the rights to use the Application to third parties.',
      '<b>4. VIP Status and Paid Services.</b> The Application may contain paid content, access to which is provided by activating VIP status through entering a promo code or in another manner provided by the developer. VIP status provides access to additional chapters, stories, features, and content not available in the free version. The cost, duration, and conditions of providing VIP status are determined by the developer and may be changed unilaterally. Promo code activation is carried out in accordance with the rules established by the developer.',
      '<b>5. Limitation of Liability.</b> The Application is provided on an «as is» basis. The developer does not guarantee uninterrupted, error-free, and secure operation of the Application. The developer is not liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to loss of data, profits, business reputation, or other intangible losses arising from the use or inability to use the Application. The User is solely responsible for the safety of their data, including game progress, settings, and preferences.',
      '<b>6. User Content.</b> The User guarantees that any content they create, upload, transmit, or publish within the Application does not infringe the rights of third parties, is not illegal, offensive, defamatory, discriminatory, pornographic, or promoting violence, hatred, or extremism. The developer has the right at any time without prior notice to remove any user content that violates these Terms or applicable law.',
      '<b>7. Privacy and Data Processing.</b> The use of the Application is governed by the Privacy Policy, which is an integral part of these Terms. The User agrees to the processing of their personal data in accordance with the Privacy Policy.',
      '<b>8. Modification of Terms.</b> The developer reserves the right at any time to unilaterally modify, supplement, or cancel these Terms. Changes take effect from the moment of their publication in the Application. Continued use of the Application after changes are made means the User agrees with the modified Terms.',
      '<b>9. Termination.</b> The developer has the right at any time without prior notice to suspend or terminate the User's access to the Application in case of violation of these Terms, as well as for technical, organizational, or other reasons.',
      '<b>10. Governing Law and Dispute Resolution.</b> These Terms are governed by and construed in accordance with the laws of the developer's country of registration. All disputes arising from these Terms or in connection with their performance shall be resolved through negotiations. In case of inability to reach an agreement, the dispute shall be referred to the competent court at the location of the developer.'
    ],
    es: [
      '<b>1. Disposiciones Generales.</b> Estos Términos de Uso (en adelante, los «Términos») regulan la relación entre el usuario (en adelante, el «Usuario») y el desarrollador de la aplicación interactiva «Your Destiny» (en adelante, la «Aplicación»). Al instalar, descargar, configurar, activar, registrarse o utilizar de cualquier otra forma la Aplicación, el Usuario confirma su total e incondicional acuerdo con estos Términos. Si el Usuario no está de acuerdo con alguna de las disposiciones de estos Términos, debe cesar inmediatamente en el uso de la Aplicación.',
      '<b>2. Derechos de Propiedad Intelectual.</b> Todos los materiales, contenidos, gráficos, diseños, textos, imágenes, audio, video, código de software, bases de datos y cualquier otro objeto publicado en la Aplicación son objetos de derechos de autor y/o derechos conexos pertenecientes al desarrollador o licenciantes. Cualquier reproducción, distribución, modificación, exhibición pública, traducción, adaptación, decompilación, desensamblaje, ingeniería inversa u otro uso de los materiales de la Aplicación sin el consentimiento previo por escrito del titular de los derechos está estrictamente prohibido y puede resultar en responsabilidad civil, administrativa y penal conforme a la ley aplicable.',
      '<b>3. Licencia de Uso.</b> El desarrollador concede al Usuario una licencia limitada, no exclusiva, no transferible y revocable para utilizar la Aplicación únicamente para fines personales y no comerciales de conformidad con estos Términos. El Usuario no tiene derecho a alquilar, vender, sublicenciar, distribuir o transferir de cualquier otra forma los derechos de uso de la Aplicación a terceros.',
      '<b>4. Estado VIP y Servicios de Pago.</b> La Aplicación puede contener contenido de pago, al que se accede mediante la activación del estado VIP mediante la introducción de un código promocional o de cualquier otra forma prevista por el desarrollador. El estado VIP proporciona acceso a capítulos adicionales, historias, funciones y contenido no disponible en la versión gratuita. El costo, la duración y las condiciones de provisión del estado VIP son determinados por el desarrollador y pueden ser modificados unilateralmente.',
      '<b>5. Limitación de Responsabilidad.</b> La Aplicación se proporciona tal cual («as is»). El desarrollador no garantiza el funcionamiento ininterrumpido, libre de errores y seguro de la Aplicación. El desarrollador no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente, incluyendo pero no limitado a la pérdida de datos, ganancias, reputación comercial u otras pérdidas intangibles derivadas del uso o la imposibilidad de usar la Aplicación.',
      '<b>6. Contenido del Usuario.</b> El Usuario garantiza que cualquier contenido que cree, cargue, transmita o publique dentro de la Aplicación no infringe los derechos de terceros, no es ilegal, ofensivo, difamatorio, discriminatorio, pornográfico, ni promueve la violencia, el odio o el extremismo. El desarrollador tiene derecho a eliminar en cualquier momento y sin previo aviso cualquier contenido del usuario que viole estos Términos o la legislación aplicable.',
      '<b>7. Privacidad y Procesamiento de Datos.</b> El uso de la Aplicación se rige por la Política de Privacidad, que forma parte integral de estos Términos. El Usuario acepta el procesamiento de sus datos personales de conformidad con la Política de Privacidad.',
      '<b>8. Modificación de los Términos.</b> El desarrollador se reserva el derecho de modificar, complementar o cancelar estos Términos en cualquier momento de forma unilateral. Los cambios entran en vigor desde el momento de su publicación en la Aplicación. El uso continuado de la Aplicación después de realizar cambios significa que el Usuario acepta los Términos modificados.',
      '<b>9. Terminación.</b> El desarrollador tiene derecho a suspender o terminar el acceso del Usuario a la Aplicación en cualquier momento y sin previo aviso en caso de violación de estos Términos, así como por razones técnicas, organizativas u otras.',
      '<b>10. Ley Aplicable y Resolución de Disputas.</b> Estos Términos se rigen e interpretan de conformidad con la legislación del país de registro del desarrollador. Todas las disputas que surjan de estos Términos o en conexión con su cumplimiento se resolverán mediante negociaciones. En caso de imposibilidad de llegar a un acuerdo, la disputa se someterá al tribunal competente en la ubicación del desarrollador.'
    ]
  };
  const texts = termsTexts[currentLang] || termsTexts['en'];
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button>
    <div class="fate-container" style="max-width:380px;">
      <div class="fate-final-title" style="font-size:1.2rem;">${t('termsTitle')}</div>
      <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.65;text-align:left;margin-bottom:20px;max-height:60vh;overflow-y:auto;padding-right:8px;">
        ${texts.map(t => '<p style="margin-bottom:14px;">' + t + '</p>').join('')}
      </div>
      <button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showPrivacy() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  const privacyTexts = {
    ru: [
      '<b>1. Общие положения.</b> Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных Пользователей интерактивного приложения «Your Destiny» (далее — «Приложение»). Настоящая Политика разработана в соответствии с требованиями действующего законодательства в области защиты персональных данных. Используя Приложение, Пользователь выражает свое согласие с условиями настоящей Политики.',
      '<b>2. Сбор и обработка данных.</b> Приложение не собирает, не хранит и не передает персональные данные Пользователя на серверы разработчика. Все данные, включая прогресс в играх, настройки, предпочтения, результаты тестов и иной пользовательский контент, сохраняются исключительно в локальном хранилище браузера (localStorage) на устройстве Пользователя. Разработчик не имеет доступа к данным, хранящимся в localStorage Пользователя.',
      '<b>3. Данные Telegram.</b> При запуске Приложения через Telegram WebApp могут быть получены следующие данные из объекта initDataUnsafe: идентификатор пользователя (user.id), имя (user.first_name), фамилия (user.last_name), имя пользователя (user.username), языковой код (user.language_code). Эти данные используются исключительно для автоматического определения языка интерфейса и не сохраняются, не передаются третьим лицам и не используются для иных целей.',
      '<b>4. Cookies и аналогичные технологии.</b> Приложение не использует файлы cookie, веб-маяки, пиксели отслеживания или иные аналогичные технологии для сбора информации о Пользователе. Приложение не осуществляет отслеживание действий Пользователя в сети Интернет.',
      '<b>5. Передача данных третьим лицам.</b> Разработчик не передает персональные данные Пользователя третьим лицам, за исключением случаев, предусмотренных действующим законодательством. Приложение не интегрировано с сервисами аналитики, рекламными сетями или иными сервисами, способными собирать данные о Пользователе.',
      '<b>6. Безопасность данных.</b> Разработчик принимает разумные технические и организационные меры для защиты данных, хранящихся в Приложении, от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако Пользователь понимает и признает, что ни один метод передачи данных через Интернет или метод электронного хранения не является абсолютно безопасным.',
      '<b>7. Хранение и удаление данных.</b> Данные Пользователя хранятся в localStorage до тех пор, пока Пользователь не удалит их самостоятельно путем очистки кэша браузера, удаления данных сайта или переустановки приложения. Разработчик не имеет технической возможности удалить данные из localStorage Пользователя удаленно.',
      '<b>8. Права Пользователя.</b> Пользователь имеет право на доступ к своим данным, их исправление, удаление, ограничение обработки, а также право на переносимость данных в соответствии с действующим законодательством. Поскольку все данные хранятся локально, реализация этих прав осуществляется Пользователем самостоятельно через инструменты браузера.',
      '<b>9. Изменения в Политике.</b> Разработчик оставляет за собой право вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента ее размещения в Приложении. Продолжение использования Приложения после внесения изменений означает согласие Пользователя с новой редакцией Политики.',
      '<b>10. Контактная информация.</b> По всем вопросам, связанным с обработкой персональных данных, Пользователь может обратиться к разработчику через официальный Telegram-канал @YourDestiny_Official.'
    ],
    en: [
      '<b>1. General Provisions.</b> This Privacy Policy (hereinafter referred to as the «Policy») defines the procedure for processing and protecting the personal data of Users of the interactive application «Your Destiny» (hereinafter referred to as the «Application»). This Policy has been developed in accordance with the requirements of applicable legislation in the field of personal data protection. By using the Application, the User expresses their consent to the terms of this Policy.',
      '<b>2. Data Collection and Processing.</b> The Application does not collect, store, or transmit the User's personal data to the developer's servers. All data, including game progress, settings, preferences, test results, and other user content, is stored exclusively in the browser's local storage (localStorage) on the User's device. The developer does not have access to the data stored in the User's localStorage.',
      '<b>3. Telegram Data.</b> When launching the Application via Telegram WebApp, the following data may be obtained from the initDataUnsafe object: user identifier (user.id), first name (user.first_name), last name (user.last_name), username (user.username), and language code (user.language_code). This data is used exclusively for automatic language detection of the interface and is not stored, not transferred to third parties, and not used for other purposes.',
      '<b>4. Cookies and Similar Technologies.</b> The Application does not use cookies, web beacons, tracking pixels, or other similar technologies to collect information about the User. The Application does not track the User's actions on the Internet.',
      '<b>5. Data Transfer to Third Parties.</b> The developer does not transfer the User's personal data to third parties, except as provided by applicable law. The Application is not integrated with analytics services, advertising networks, or other services capable of collecting data about the User.',
      '<b>6. Data Security.</b> The developer takes reasonable technical and organizational measures to protect the data stored in the Application from unauthorized access, modification, disclosure, or destruction. However, the User understands and acknowledges that no method of data transmission over the Internet or method of electronic storage is absolutely secure.',
      '<b>7. Data Storage and Deletion.</b> User data is stored in localStorage until the User deletes it independently by clearing the browser cache, deleting site data, or reinstalling the application. The developer does not have the technical ability to delete data from the User's localStorage remotely.',
      '<b>8. User Rights.</b> The User has the right to access their data, correct it, delete it, restrict processing, as well as the right to data portability in accordance with applicable law. Since all data is stored locally, the exercise of these rights is carried out by the User independently through browser tools.',
      '<b>9. Changes to the Policy.</b> The developer reserves the right to make changes to this Policy. The new version of the Policy takes effect from the moment of its publication in the Application. Continued use of the Application after changes are made means the User agrees with the new version of the Policy.',
      '<b>10. Contact Information.</b> For all questions related to the processing of personal data, the User can contact the developer through the official Telegram channel @YourDestiny_Official.'
    ],
    es: [
      '<b>1. Disposiciones Generales.</b> Esta Política de Privacidad (en adelante, la «Política») define el procedimiento para el procesamiento y la protección de los datos personales de los Usuarios de la aplicación interactiva «Your Destiny» (en adelante, la «Aplicación»). Esta Política ha sido desarrollada de conformidad con los requisitos de la legislación aplicable en materia de protección de datos personales. Al utilizar la Aplicación, el Usuario expresa su consentimiento con los términos de esta Política.',
      '<b>2. Recopilación y Procesamiento de Datos.</b> La Aplicación no recopila, almacena ni transmite los datos personales del Usuario a los servidores del desarrollador. Todos los datos, incluido el progreso del juego, la configuración, las preferencias, los resultados de las pruebas y otro contenido del usuario, se almacenan exclusivamente en el almacenamiento local del navegador (localStorage) en el dispositivo del Usuario. El desarrollador no tiene acceso a los datos almacenados en el localStorage del Usuario.',
      '<b>3. Datos de Telegram.</b> Al iniciar la Aplicación a través de Telegram WebApp, pueden obtenerse los siguientes datos del objeto initDataUnsafe: identificador de usuario (user.id), nombre (user.first_name), apellido (user.last_name), nombre de usuario (user.username) y código de idioma (user.language_code). Estos datos se utilizan exclusivamente para la detección automática del idioma de la interfaz y no se almacenan, no se transfieren a terceros ni se utilizan para otros fines.',
      '<b>4. Cookies y Tecnologías Similares.</b> La Aplicación no utiliza cookies, balizas web, píxeles de seguimiento u otras tecnologías similares para recopilar información sobre el Usuario. La Aplicación no realiza un seguimiento de las acciones del Usuario en Internet.',
      '<b>5. Transferencia de Datos a Terceros.</b> El desarrollador no transfiere los datos personales del Usuario a terceros, excepto en los casos previstos por la legislación aplicable. La Aplicación no está integrada con servicios de análisis, redes publicitarias u otros servicios capaces de recopilar datos sobre el Usuario.',
      '<b>6. Seguridad de los Datos.</b> El desarrollador adopta medidas técnicas y organizativas razonables para proteger los datos almacenados en la Aplicación contra el acceso no autorizado, la modificación, la divulgación o la destrucción. Sin embargo, el Usuario entiende y reconoce que ningún método de transmisión de datos a través de Internet o método de almacenamiento electrónico es absolutamente seguro.',
      '<b>7. Almacenamiento y Eliminación de Datos.</b> Los datos del Usuario se almacenan en localStorage hasta que el Usuario los elimine de forma independiente borrando la caché del navegador, eliminando los datos del sitio o reinstalando la aplicación. El desarrollador no tiene la capacidad técnica de eliminar datos del localStorage del Usuario de forma remota.',
      '<b>8. Derechos del Usuario.</b> El Usuario tiene derecho a acceder a sus datos, corregirlos, eliminarlos, restringir su procesamiento, así como el derecho a la portabilidad de datos de conformidad con la legislación aplicable. Dado que todos los datos se almacenan localmente, el ejercicio de estos derechos lo realiza el Usuario de forma independiente a través de las herramientas del navegador.',
      '<b>9. Cambios en la Política.</b> El desarrollador se reserva el derecho de realizar cambios en esta Política. La nueva versión de la Política entra en vigor desde el momento de su publicación en la Aplicación. El uso continuado de la Aplicación después de realizar cambios significa que el Usuario acepta la nueva versión de la Política.',
      '<b>10. Información de Contacto.</b> Para todas las preguntas relacionadas con el procesamiento de datos personales, el Usuario puede contactar al desarrollador a través del canal oficial de Telegram @YourDestiny_Official.'
    ]
  };
  const texts = privacyTexts[currentLang] || privacyTexts['en'];
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button>
    <div class="fate-container" style="max-width:380px;">
      <div class="fate-final-title" style="font-size:1.2rem;">${t('privacyTitle')}</div>
      <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.65;text-align:left;margin-bottom:20px;max-height:60vh;overflow-y:auto;padding-right:8px;">
        ${texts.map(t => '<p style="margin-bottom:14px;">' + t + '</p>').join('')}
      </div>
      <button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">${t('close')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}
