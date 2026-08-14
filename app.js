// ============================================================
// YOUR DESTINY v3.0
// ============================================================

let tg = null;
let currentLang = 'en';
function detectLanguage() {
  if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code) {
    const code = tg.initDataUnsafe.user.language_code.toLowerCase();
    if (code === 'ru' || code === 'uk' || code === 'be' || code === 'kk') return 'ru';
    if (code === 'es' || code === 'pt' || code === 'it' || code === 'fr') return 'es';
    return 'en';
  }
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (browserLang.startsWith('ru') || browserLang.startsWith('uk') || browserLang.startsWith('be') || browserLang.startsWith('kk')) return 'ru';
  if (browserLang.startsWith('es') || browserLang.startsWith('pt') || browserLang.startsWith('it') || browserLang.startsWith('fr')) return 'es';
  return 'en';
}
currentLang = detectLanguage();
let isMusicPlaying = false;
let bgMusic = null;
let visualEffectsEnabled = true;
let currentTheme = 'purple';
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
    resetConfirm: 'Вы уверены? Весь прогресс будет удален безвозвратно.', back: 'Назад', close: 'Закрыть', continue: 'Продолжить',
    restart: 'Начать заново', exit: 'Выйти в меню', pause: 'Пауза', lockTitle: 'Дальше — только по промокоду',
    lockText: 'Вы прошли 2 бесплатные главы. Для доступа ко всем главам активируйте VIP-статус.',
    goToChannel: 'Перейти в канал', enterPromo: 'Ввести промокод', toMenu: 'В меню',
    introSubtitle: 'Интерактивная визуальная новелла', wallet: 'Кошелек для поддержки', copy: 'Скопировать', copied: 'Скопировано',
    soon: 'Скоро', thanks: 'Спасибо', wisdomClose: 'Закрыть', destinyStart: 'Начать предсказание', destinyRestart: 'Пройти заново',
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
    resetConfirm: 'Are you sure? All progress will be permanently deleted.', back: 'Back', close: 'Close', continue: 'Continue',
    restart: 'Restart', exit: 'Exit to Menu', pause: 'Pause', lockTitle: 'VIP Required',
    lockText: 'You have completed 2 free chapters. Activate VIP to access all chapters.',
    goToChannel: 'Go to Channel', enterPromo: 'Enter Promo Code', toMenu: 'To Menu',
    introSubtitle: 'Interactive Visual Novel', wallet: 'Support Wallet', copy: 'Copy', copied: 'Copied',
    soon: 'Soon', thanks: 'Thanks', wisdomClose: 'Close', destinyStart: 'Start Prediction', destinyRestart: 'Retake',
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
    resetConfirm: 'Estas seguro? Todo el progreso se eliminará permanentemente.', back: 'Atrás', close: 'Cerrar', continue: 'Continuar',
    restart: 'Reiniciar', exit: 'Salir al Menú', pause: 'Pausa', lockTitle: 'Se Requiere VIP',
    lockText: 'Has completado 2 capítulos gratuitos. Activa VIP para acceder a todos.',
    goToChannel: 'Ir al Canal', enterPromo: 'Introducir Código', toMenu: 'Al Menú',
    introSubtitle: 'Novela Visual Interactiva', wallet: 'Billetera de Apoyo', copy: 'Copiar', copied: 'Copiado',
    soon: 'Pronto', thanks: 'Gracias', wisdomClose: 'Cerrar', destinyStart: 'Iniciar Predicción', destinyRestart: 'Repetir',
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
  { id: 'amber', name: { ru: 'Янтарные Сумерки', en: 'Amber Twilight', es: 'Crepúsculo Ámbар' }, grad: 'linear-gradient(135deg,#b8860b,#8b6914)' },
  { id: 'kaleidoscope', name: { ru: 'Калейдоскоп', en: 'Kaleidoscope', es: 'Caleidoscopio' }, grad: 'linear-gradient(135deg,#ff6b6b,#4ecdc4,#45b7d1,#96e6a1,#feca57,#ff9ff3)' }
];

// ---------- Инициализация ----------
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  initParticles();
  initNavigation();
  initIntro();
  initMusic();
  loadSettings();
  renderThemeColors();
  updateLanguageUI();
});

function showTimeCapsule() {
  let firstVisit = localStorage.getItem('first_visit');
  if (!firstVisit) {
    firstVisit = new Date().toISOString();
    localStorage.setItem('first_visit', firstVisit);
  }
  const date = new Date(firstVisit);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const formatted = day + '.' + month + '.' + year;
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = '<button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button><div class="fate-container" style="max-width:380px;"><div class="fate-final-title" style="font-size:1.3rem;">' + t('timeCapsule') + '</div><div style="font-size:1.1rem;color:var(--text-primary);margin:24px 0;font-family:'Cinzel',serif;letter-spacing:0.05em;">' + formatted + '</div><div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:20px;">' + (currentLang === 'ru' ? 'Этот день навсегда запечатлен в твоей судьбе. С того момента ты стал частью этого мира.' : currentLang === 'en' ? 'This day is forever sealed in your fate. From that moment, you became part of this world.' : 'Este día está sellado para siempre en tu destino. Desde ese momento, te convertiste en parte de este mundo.') + '</div><button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">' + t('close') + '</button></div>';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function updateTimeCapsuleDisplay() {
  let firstVisit = localStorage.getItem('first_visit');
  if (!firstVisit) {
    firstVisit = new Date().toISOString();
    localStorage.setItem('first_visit', firstVisit);
  }
  const date = new Date(firstVisit);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const el = document.getElementById('time-capsule-date');
  if (el) el.textContent = day + '.' + month + '.' + year;
}

function initTelegram() {
  if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.ready(); tg.expand();
    tg.setHeaderColor('#0a0618');
    tg.setBackgroundColor('#0a0618');
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
  updateTimeCapsuleDisplay();
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

function resetProgress() {
  if (confirm(t('resetConfirm'))) {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('progress_') || ['fate_dilemmas','labyrinth','true_destiny','wisdom_index','intro_shown'].includes(key)) localStorage.removeItem(key);
    });
    showToast(currentLang === 'ru' ? 'Прогресс сброшен' : currentLang === 'en' ? 'Progress reset' : 'Progreso reiniciado');
  }
}

function showSupportAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = '<button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button><div class="fate-container" style="max-width:380px;"><div class="fate-final-title" style="font-size:1.2rem;margin-bottom:8px;">' + t('supportAuthor') + '</div><div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:20px;">' + (currentLang === 'ru' ? 'Ваша поддержка помогает создавать новые истории и развивать этот мир. Любая сумма — это вклад в судьбу.' : currentLang === 'en' ? 'Your support helps create new stories and develop this world. Any amount is a contribution to fate.' : 'Tu apoyo ayuda a crear nuevas historias y desarrollar este mundo. Cualquier cantidad es una contribución al destino.') + '</div><div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.2);border-radius:14px;padding:16px;margin-bottom:20px;"><div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:8px;letter-spacing:0.1em;">TRC20 (TRON)</div><div style="font-size:0.9rem;color:var(--text-primary);font-family:'Cinzel',serif;letter-spacing:0.03em;word-break:break-all;margin-bottom:12px;">' + WALLET + '</div><button onclick="copyWallet()" style="width:100%;padding:12px;background:linear-gradient(135deg,var(--gold-dark),var(--gold));border:none;border-radius:12px;color:#1a0a00;font-family:'Cinzel',serif;font-weight:700;font-size:0.85rem;cursor:pointer;">' + t('copy') + '</button></div><button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">' + t('close') + '</button></div>';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showBecomeAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = '<button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button><div class="fate-container" style="max-width:380px;"><div class="fate-final-title" style="font-size:1.2rem;margin-bottom:8px;">' + t('becomeAuthor') + '</div><div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:20px;">' + (currentLang === 'ru' ? 'Если у вас есть история, достойная быть рассказанной — мы готовы воплотить её в интерактивную новеллу. Пришлите ваш сценарий или идею.' : currentLang === 'en' ? 'If you have a story worth telling — we are ready to turn it into an interactive novel. Send us your script or idea.' : 'Si tienes una historia que vale la pena contar — estamos listos para convertirla en una novela interactiva. Envíanos tu guion o idea.') + '</div><div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.2);border-radius:14px;padding:16px;margin-bottom:20px;"><div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:8px;letter-spacing:0.1em;">Telegram</div><div style="font-size:0.9rem;color:var(--text-primary);font-family:'Cinzel',serif;letter-spacing:0.03em;margin-bottom:12px;">@YourDestiny_Author</div><a href="https://t.me/YourDestiny_Author" target="_blank" style="display:block;width:100%;padding:12px;background:linear-gradient(135deg,var(--gold-dark),var(--gold));border:none;border-radius:12px;color:#1a0a00;font-family:'Cinzel',serif;font-weight:700;font-size:0.85rem;cursor:pointer;text-decoration:none;text-align:center;">Telegram</a></div><button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">' + t('close') + '</button></div>';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function copyWallet() {
  navigator.clipboard.writeText(WALLET).then(() => showToast(t('copied')));
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
  overlay.innerHTML = '<button class="overlay-close-x" onclick="closeDestiny()">&times;</button><div class="destiny-container destiny-result"><div class="destiny-result-title">' + title.name[currentLang] + '</div><div class="destiny-result-desc">' + title.description[currentLang] + '</div><button class="destiny-restart" onclick="closeDestiny()" style="margin-top:30px;">' + t('close') + '</button></div>';
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
  overlay.innerHTML = '<button class="overlay-close-x" onclick="closeWisdom()" style="top:24px;right:24px;">&times;</button><div class="wisdom-container"><div style="font-size:2.5rem;color:var(--gold);opacity:0.3;margin-bottom:12px;font-family:'Cinzel',serif;">❝</div><div class="wisdom-quote">' + quote[currentLang] + '</div><div style="font-size:2.5rem;color:var(--gold);opacity:0.3;margin-top:12px;font-family:'Cinzel',serif;transform:rotate(180deg);">❝</div><div style="width:40px;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);margin:20px auto;"></div><div style="font-size:0.75rem;color:var(--text-muted);letter-spacing:0.15em;font-family:'Cinzel',serif;margin-bottom:20px;">' + (currentLang === 'ru' ? 'МУДРОСТЬ СУДЬБЫ' : currentLang === 'en' ? 'WISDOM OF FATE' : 'SABIDURÍA DEL DESTINO') + '</div><button class="wisdom-close-btn" onclick="closeWisdom()">' + t('next') + '</button></div>';
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
  overlay.innerHTML = '<button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button><div class="fate-container" style="max-width:400px;"><div class="fate-final-title" style="font-size:1.15rem;margin-bottom:16px;">' + t('termsTitle') + '</div><div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.7;text-align:left;margin-bottom:20px;max-height:55vh;overflow-y:auto;padding-right:10px;"><p style="margin-bottom:12px;"><b>1. Общие положения / General Provisions</b><br>' + (currentLang === 'ru' ? 'Настоящие Условия использования регулируют отношения между Пользователем и Администрацией приложения Your Destiny. Используя приложение, вы подтверждаете свое согласие с данными условиями в полном объеме. Если вы не согласны с каким-либо положением, вы обязаны немедленно прекратить использование приложения.' : currentLang === 'en' ? 'These Terms of Use govern the relationship between the User and the Administration of the Your Destiny application. By using the application, you confirm your full agreement with these terms. If you do not agree with any provision, you are obliged to immediately stop using the application.' : 'Estos Términos de Uso rigen la relación entre el Usuario y la Administración de la aplicación Your Destiny. Al usar la aplicación, confirmas tu total acuerdo con estos términos. Si no estás de acuerdo con alguna disposición, estás obligado a dejar de usar la aplicación inmediatamente.') + '</p><p style="margin-bottom:12px;"><b>2. Права интеллектуальной собственности / Intellectual Property Rights</b><br>' + (currentLang === 'ru' ? 'Все материалы, представленные в приложении, включая, но не ограничиваясь, текстовый контент, графические элементы, аудиоматериалы, программный код, дизайн и структуру, являются интеллектуальной собственностью Администрации или правообладателей и защищены законодательством об авторских правах и смежных правах. Любое использование материалов без письменного разрешения правообладателя строго запрещено.' : currentLang === 'en' ? 'All materials presented in the application, including but not limited to text content, graphic elements, audio materials, software code, design and structure, are the intellectual property of the Administration or copyright holders and are protected by copyright and related rights legislation. Any use of materials without the written permission of the copyright holder is strictly prohibited.' : 'Todos los materiales presentados en la aplicación, incluidos pero no limitados a contenido de texto, elementos gráficos, materiales de audio, código de software, diseño y estructura, son propiedad intelectual de la Administración o de los titulares de derechos de autor y están protegidos por la legislación sobre derechos de autor y derechos conexos. Cualquier uso de materiales sin el permiso escrito del titular de los derechos de autor está estrictamente prohibido.') + '</p><p style="margin-bottom:12px;"><b>3. VIP-статус и платные услуги / VIP Status and Paid Services</b><br>' + (currentLang === 'ru' ? 'VIP-статус предоставляет доступ к дополнительному контенту и расширенным функциям приложения. Активация VIP-статуса осуществляется путем ввода промокода или иного способа, предусмотренного Администрацией. Срок действия VIP-статуса составляет 30 календарных дней с момента активации, если иное не указано в условиях конкретного промокода. Администрация оставляет за собой право изменять условия предоставления VIP-статуса в одностороннем порядке.' : currentLang === 'en' ? 'VIP status provides access to additional content and extended application features. VIP status activation is carried out by entering a promo code or other method provided by the Administration. The VIP status validity period is 30 calendar days from the moment of activation, unless otherwise specified in the terms of a specific promo code. The Administration reserves the right to change the terms of providing VIP status unilaterally.' : 'El estado VIP proporciona acceso a contenido adicional y funciones extendidas de la aplicación. La activación del estado VIP se realiza ingresando un código promocional u otro método proporcionado por la Administración. El período de validez del estado VIP es de 30 días calendario desde el momento de la activación, a menos que se especifique lo contrario en los términos de un código promocional específico. La Administración se reserva el derecho de cambiar los términos de proporcionar el estado VIP unilateralmente.') + '</p><p style="margin-bottom:12px;"><b>4. Ответственность сторон / Liability of the Parties</b><br>' + (currentLang === 'ru' ? 'Администрация не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования приложения, включая, но не ограничиваясь, потерю данных, прибыли или деловой репутации. Пользователь самостоятельно несет ответственность за сохранность данных, хранящихся в локальном хранилище устройства. Администрация не гарантирует бесперебойную работу приложения и не несет ответственности за технические сбои, вызванные действиями третьих лиц или форс-мажорными обстоятельствами.' : currentLang === 'en' ? 'The Administration is not liable for any direct or indirect damages arising from the use or inability to use the application, including but not limited to loss of data, profit or business reputation. The User is solely responsible for the safety of data stored in the local storage of the device. The Administration does not guarantee uninterrupted operation of the application and is not responsible for technical failures caused by the actions of third parties or force majeure circumstances.' : 'La Administración no es responsable de ningún daño directo o indirecto derivado del uso o la imposibilidad de usar la aplicación, incluidos pero no limitados a la pérdida de datos, ganancias o reputación comercial. El Usuario es el único responsable de la seguridad de los datos almacenados en el almacenamiento local del dispositivo. La Administración no garantiza el funcionamiento ininterrumpido de la aplicación y no es responsable de los fallos técnicos causados por las acciones de terceros o circunstancias de fuerza mayor.') + '</p><p style="margin-bottom:12px;"><b>5. Пользовательский контент / User Content</b><br>' + (currentLang === 'ru' ? 'Пользователь имеет право создавать и публикировать собственный контент в рамках функционала приложения, при условии соблюдения действующего законодательства и настоящих Условий. Администрация оставляет за собой право удалять любой контент, нарушающий данные Условия или права третьих лиц, без предварительного уведомления. Размещая контент, Пользователь предоставляет Администрации неисключительную лицензию на использование такого контента в целях функционирования приложения.' : currentLang === 'en' ? 'The User has the right to create and publish their own content within the functionality of the application, provided that applicable law and these Terms are observed. The Administration reserves the right to remove any content that violates these Terms or the rights of third parties without prior notice. By posting content, the User grants the Administration a non-exclusive license to use such content for the purpose of operating the application.' : 'El Usuario tiene derecho a crear y publicar su propio contenido dentro de la funcionalidad de la aplicación, siempre que se respete la legislación aplicable y estos Términos. La Administración se reserva el derecho de eliminar cualquier contenido que viole estos Términos o los derechos de terceros sin previo aviso. Al publicar contenido, el Usuario otorga a la Administración una licencia no exclusiva para usar dicho contenido con el fin de operar la aplicación.') + '</p><p style="margin-bottom:12px;"><b>6. Конфиденциальность и защита данных / Privacy and Data Protection</b><br>' + (currentLang === 'ru' ? 'Администрация обязуется принимать все разумные меры для защиты персональных данных Пользователя. Приложение не собирает персональные данные без согласия Пользователя. Все данные, необходимые для функционирования приложения, хранятся исключительно в локальном хранилище устройства Пользователя. Администрация не передает данные Пользователя третьим лицам, за исключением случаев, предусмотренных законодательством.' : currentLang === 'en' ? 'The Administration undertakes to take all reasonable measures to protect the User's personal data. The application does not collect personal data without the User's consent. All data necessary for the operation of the application is stored exclusively in the local storage of the User's device. The Administration does not transfer User data to third parties, except in cases provided by law.' : 'La Administración se compromete a tomar todas las medidas razonables para proteger los datos personales del Usuario. La aplicación no recopila datos personales sin el consentimiento del Usuario. Todos los datos necesarios para el funcionamiento de la aplicación se almacenan exclusivamente en el almacenamiento local del dispositivo del Usuario. La Administración no transfiere datos del Usuario a terceros, excepto en los casos previstos por la ley.') + '</p><p style="margin-bottom:12px;"><b>7. Изменение условий / Changes to Terms</b><br>' + (currentLang === 'ru' ? 'Администрация оставляет за собой право в любое время изменять, дополнять или обновлять настоящие Условия использования без предварительного уведомления Пользователя. Измененные Условия вступают в силу с момента их публикации в приложении. Продолжение использования приложения после внесения изменений означает принятие Пользователем новых Условий. Рекомендуется регулярно проверять актуальность настоящих Условий.' : currentLang === 'en' ? 'The Administration reserves the right to change, supplement or update these Terms of Use at any time without prior notice to the User. The modified Terms take effect from the moment of their publication in the application. Continued use of the application after changes have been made means that the User accepts the new Terms. It is recommended to regularly check the relevance of these Terms.' : 'La Administración se reserva el derecho de cambiar, complementar o actualizar estos Términos de Uso en cualquier momento sin previo aviso al Usuario. Los Términos modificados entran en vigor desde el momento de su publicación en la aplicación. El uso continuado de la aplicación después de que se hayan realizado cambios significa que el Usuario acepta los nuevos Términos. Se recomienda verificar regularmente la relevancia de estos Términos.') + '</p><p style="margin-bottom:12px;"><b>8. Прекращение действия / Termination</b><br>' + (currentLang === 'ru' ? 'Администрация вправе заблокировать или удалить учетную запись Пользователя, а также запретить доступ к приложению без объяснения причин, в случае нарушения настоящих Условий или действующего законодательства. В случае прекращения доступа все данные, хранящиеся в локальном хранилище, могут быть утрачены. Администрация не несет ответственности за такую утрату.' : currentLang === 'en' ? 'The Administration has the right to block or delete the User's account, as well as prohibit access to the application without explaining the reasons, in case of violation of these Terms or applicable law. In case of termination of access, all data stored in local storage may be lost. The Administration is not responsible for such loss.' : 'La Administración tiene derecho a bloquear o eliminar la cuenta del Usuario, así como prohibir el acceso a la aplicación sin explicar las razones, en caso de violación de estos Términos o la legislación aplicable. En caso de terminación del acceso, todos los datos almacenados en el almacenamiento local pueden perderse. La Administración no es responsable de dicha pérdida.') + '</p><p><b>9. Применимое право / Governing Law</b><br>' + (currentLang === 'ru' ? 'Настоящие Условия регулируются и толкуются в соответствии с законодательством Российской Федерации. Все споры, возникающие из настоящих Условий или в связи с их исполнением, подлежат рассмотрению в судебных органах по месту нахождения Администрации.' : currentLang === 'en' ? 'These Terms are governed by and construed in accordance with the laws of the Russian Federation. All disputes arising from these Terms or in connection with their performance shall be considered in the judicial authorities at the location of the Administration.' : 'Estos Términos se rigen e interpretan de conformidad con las leyes de la Federación Rusa. Todas las disputas que surjan de estos Términos o en conexión con su ejecución serán consideradas en las autoridades judiciales en la ubicación de la Administración.') + '</p></div><button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">' + t('close') + '</button></div>';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showPrivacy() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = '<button class="overlay-close-x" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">&times;</button><div class="fate-container" style="max-width:400px;"><div class="fate-final-title" style="font-size:1.15rem;margin-bottom:16px;">' + t('privacyTitle') + '</div><div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.7;text-align:left;margin-bottom:20px;max-height:55vh;overflow-y:auto;padding-right:10px;"><p style="margin-bottom:12px;"><b>1. Общие положения / General Provisions</b><br>' + (currentLang === 'ru' ? 'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных Пользователей приложения Your Destiny. Используя приложение, Пользователь выражает свое безоговорочное согласие с настоящей Политикой и указанными в ней условиями обработки персональных данных. В случае несогласия с условиями Политики Пользователь должен немедленно прекратить использование приложения.' : currentLang === 'en' ? 'This Privacy Policy defines the procedure for processing and protecting the personal data of Users of the Your Destiny application. By using the application, the User expresses their unconditional consent to this Policy and the conditions for processing personal data specified therein. In case of disagreement with the terms of the Policy, the User must immediately stop using the application.' : 'Esta Política de Privacidad define el procedimiento para procesar y proteger los datos personales de los Usuarios de la aplicación Your Destiny. Al usar la aplicación, el Usuario expresa su consentimiento incondicional a esta Política y a las condiciones para procesar datos personales especificadas en ella. En caso de desacuerdo con los términos de la Política, el Usuario debe dejar de usar la aplicación inmediatamente.') + '</p><p style="margin-bottom:12px;"><b>2. Сбор и использование данных / Data Collection and Use</b><br>' + (currentLang === 'ru' ? 'Приложение Your Destiny не собирает, не хранит и не обрабатывает персональные данные Пользователя на серверах Администрации. Все данные, необходимые для функционирования приложения, включая настройки, прогресс, предпочтения и историю использования, сохраняются исключительно в локальном хранилище устройства Пользователя (localStorage, sessionStorage и аналогичные технологии). Администрация не имеет доступа к данным, хранящимся на устройстве Пользователя, и не может их просматривать, изменять или удалять удаленно.' : currentLang === 'en' ? 'The Your Destiny application does not collect, store or process the User's personal data on the Administration's servers. All data necessary for the operation of the application, including settings, progress, preferences and usage history, is stored exclusively in the local storage of the User's device (localStorage, sessionStorage and similar technologies). The Administration does not have access to data stored on the User's device and cannot view, modify or delete it remotely.' : 'La aplicación Your Destiny no recopila, almacena ni procesa datos personales del Usuario en los servidores de la Administración. Todos los datos necesarios para el funcionamiento de la aplicación, incluidos la configuración, el progreso, las preferencias y el historial de uso, se almacenan exclusivamente en el almacenamiento local del dispositivo del Usuario (localStorage, sessionStorage y tecnologías similares). La Administración no tiene acceso a los datos almacenados en el dispositivo del Usuario y no puede verlos, modificarlos ni eliminarlos de forma remota.') + '</p><p style="margin-bottom:12px;"><b>3. Данные Telegram / Telegram Data</b><br>' + (currentLang === 'ru' ? 'При использовании приложения через Telegram WebApp могут быть получены следующие данные из Telegram: идентификатор пользователя (User ID), имя пользователя (username), языковой код (language_code), а также инициалы (first_name, last_name). Указанные данные используются исключительно для настройки интерфейса приложения под предпочтения Пользователя и не сохраняются на серверах Администрации. Администрация не передает данные Telegram третьим лицам и не использует их для иных целей, кроме как для обеспечения функциональности приложения.' : currentLang === 'en' ? 'When using the application through Telegram WebApp, the following data from Telegram may be received: user identifier (User ID), username, language code, as well as initials (first_name, last_name). The specified data is used exclusively to configure the application interface according to the User's preferences and is not stored on the Administration's servers. The Administration does not transfer Telegram data to third parties and does not use it for purposes other than ensuring the functionality of the application.' : 'Al usar la aplicación a través de Telegram WebApp, pueden recibirse los siguientes datos de Telegram: identificador de usuario (User ID), nombre de usuario, código de idioma, así como iniciales (first_name, last_name). Los datos especificados se utilizan exclusivamente para configurar la interfaz de la aplicación de acuerdo con las preferencias del Usuario y no se almacenan en los servidores de la Administración. La Administración no transfiere datos de Telegram a terceros y no los utiliza para fines distintos a garantizar la funcionalidad de la aplicación.') + '</p><p style="margin-bottom:12px;"><b>4. Файлы cookie и локальное хранилище / Cookies and Local Storage</b><br>' + (currentLang === 'ru' ? 'Приложение использует технологию локального хранилища браузера (localStorage) для сохранения настроек Пользователя, прогресса в играх, предпочтений темы оформления, языка интерфейса и других параметров. Эти данные хранятся исключительно на устройстве Пользователя и не передаются третьим лицам. Пользователь вправе в любое время удалить данные из локального хранилища путем очистки кэша браузера или использования соответствующих функций устройства. Администрация предупреждает, что удаление данных из локального хранилища приведет к полной потере прогресса и настроек в приложении.' : currentLang === 'en' ? 'The application uses browser local storage technology (localStorage) to save the User's settings, game progress, theme preferences, interface language and other parameters. This data is stored exclusively on the User's device and is not transferred to third parties. The User has the right to delete data from local storage at any time by clearing the browser cache or using the corresponding device functions. The Administration warns that deleting data from local storage will result in complete loss of progress and settings in the application.' : 'La aplicación utiliza la tecnología de almacenamiento local del navegador (localStorage) para guardar la configuración del Usuario, el progreso del juego, las preferencias de tema, el idioma de la interfaz y otros parámetros. Estos datos se almacenan exclusivamente en el dispositivo del Usuario y no se transfieren a terceros. El Usuario tiene derecho a eliminar datos del almacenamiento local en cualquier momento borrando la caché del navegador o utilizando las funciones correspondientes del dispositivo. La Administración advierte que eliminar datos del almacenamiento local resultará en la pérdida completa del progreso y la configuración en la aplicación.') + '</p><p style="margin-bottom:12px;"><b>5. Защита данных / Data Protection</b><br>' + (currentLang === 'ru' ? 'Администрация принимает все разумные технические и организационные меры для защиты данных Пользователя от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако, учитывая, что данные хранятся исключительно на устройстве Пользователя, ответственность за физическую и программную защиту устройства лежит на самом Пользователе. Администрация настоятельно рекомендует использовать современные средства защиты устройств, включая пароли, биометрическую аутентификацию и антивирусное программное обеспечение.' : currentLang === 'en' ? 'The Administration takes all reasonable technical and organizational measures to protect User data from unauthorized access, modification, disclosure or destruction. However, given that data is stored exclusively on the User's device, responsibility for the physical and software protection of the device lies with the User himself. The Administration strongly recommends using modern device protection tools, including passwords, biometric authentication and antivirus software.' : 'La Administración toma todas las medidas técnicas y organizativas razonables para proteger los datos del Usuario contra el acceso no autorizado, la modificación, la divulgación o la destrucción. Sin embargo, dado que los datos se almacenan exclusivamente en el dispositivo del Usuario, la responsabilidad de la protección física y del software del dispositivo recae en el propio Usuario. La Administración recomienda encarecidamente el uso de herramientas modernas de protección de dispositivos, incluidas contraseñas, autenticación biométrica y software antivirus.') + '</p><p style="margin-bottom:12px;"><b>6. Права Пользователя / User Rights</b><br>' + (currentLang === 'ru' ? 'Пользователь имеет право на доступ к своим данным, их исправление, удаление, ограничение обработки, а также право на возражение против обработки данных. Поскольку все данные хранятся локально, для реализации указанных прав Пользователю необходимо самостоятельно управлять данными в локальном хранилище своего устройства. Пользователь также имеет право подать жалобу в уполномоченный орган по защите прав субъектов персональных данных в случае нарушения его прав.' : currentLang === 'en' ? 'The User has the right to access their data, correct it, delete it, restrict processing, as well as the right to object to data processing. Since all data is stored locally, to exercise these rights, the User needs to independently manage data in the local storage of their device. The User also has the right to file a complaint with the authorized body for the protection of the rights of personal data subjects in case of violation of their rights.' : 'El Usuario tiene derecho a acceder a sus datos, corregirlos, eliminarlos, restringir su procesamiento, así como el derecho a oponerse al procesamiento de datos. Dado que todos los datos se almacenan localmente, para ejercer estos derechos, el Usuario necesita administrar independientemente los datos en el almacenamiento local de su dispositivo. El Usuario también tiene derecho a presentar una queja ante el organismo autorizado para la protección de los derechos de los sujetos de datos personales en caso de violación de sus derechos.') + '</p><p style="margin-bottom:12px;"><b>7. Изменение Политики / Policy Changes</b><br>' + (currentLang === 'ru' ? 'Администрация оставляет за собой право вносить изменения в настоящую Политику конфиденциальности в одностороннем порядке без предварительного уведомления Пользователя. Новая редакция Политики вступает в силу с момента ее размещения в приложении, если иное не предусмотрено новой редакцией. Продолжение использования приложения после внесения изменений означает принятие Пользователем новой редакции Политики. Рекомендуется регулярно проверять актуальность настоящей Политики.' : currentLang === 'en' ? 'The Administration reserves the right to make changes to this Privacy Policy unilaterally without prior notice to the User. The new version of the Policy takes effect from the moment of its placement in the application, unless otherwise provided by the new version. Continued use of the application after changes have been made means that the User accepts the new version of the Policy. It is recommended to regularly check the relevance of this Policy.' : 'La Administración se reserva el derecho de realizar cambios en esta Política de Privacidad unilateralmente sin previo aviso al Usuario. La nueva versión de la Política entra en vigor desde el momento de su colocación en la aplicación, a menos que la nueva versión disponga lo contrario. El uso continuado de la aplicación después de que se hayan realizado cambios significa que el Usuario acepta la nueva versión de la Política. Se recomienda verificar regularmente la relevancia de esta Política.') + '</p><p><b>8. Контактная информация / Contact Information</b><br>' + (currentLang === 'ru' ? 'По всем вопросам, связанным с настоящей Политикой конфиденциальности, обработкой и защитой персональных данных, Пользователь может обратиться к Администрации через официальный канал сообщества в Telegram: @YourDestiny_Official. Администрация обязуется рассмотреть обращение в разумный срок и предоставить ответ в установленном порядке.' : currentLang === 'en' ? 'For all questions related to this Privacy Policy, processing and protection of personal data, the User can contact the Administration through the official community channel on Telegram: @YourDestiny_Official. The Administration undertakes to consider the appeal within a reasonable time and provide a response in the prescribed manner.' : 'Para todas las preguntas relacionadas con esta Política de Privacidad, el procesamiento y la protección de datos personales, el Usuario puede contactar a la Administración a través del canal oficial de la comunidad en Telegram: @YourDestiny_Official. La Administración se compromete a considerar la apelación dentro de un plazo razonable y proporcionar una respuesta de la manera prescrita.') + '</p></div><button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">' + t('close') + '</button></div>';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}
