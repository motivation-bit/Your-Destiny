// ============================================================
// YOUR DESTINY v3.0
// ============================================================

let tg = null;
let currentLang = 'en';
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
    introSubtitle: '', wallet: 'Кошелек для поддержки', copy: 'Скопировать', copied: 'Скопировано',
    soon: 'Скоро', thanks: 'Спасибо', wisdomClose: 'Далее', destinyStart: 'Начать предсказание', destinyRestart: 'Пройти заново',
    riddleEnter: 'Войти в Лабиринт', riddleReady: 'Готов начать? Лабиринт ждет.', riddleRules1: 'Один за другим: новая загадка откроется только после ответа на предыдущую.',
    riddleRules2: 'Не спеши: размышляй столько, сколько нужно.', riddleRules3: 'Помощь: две подсказки. Подсказки дают только направление мысли.',
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
    introSubtitle: '', wallet: 'Support Wallet', copy: 'Copy', copied: 'Copied',
    soon: 'Soon', thanks: 'Thanks', wisdomClose: 'Next', destinyStart: 'Start Prediction', destinyRestart: 'Retake',
    riddleEnter: 'Enter Labyrinth', riddleReady: 'Ready? The Labyrinth awaits.', riddleRules1: 'One by one: each riddle unlocks only after the previous answer.',
    riddleRules2: 'Take your time: think as long as you need.', riddleRules3: 'Help: two hints. Hints only point your thinking in the right direction.',
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
    introSubtitle: '', wallet: 'Billetera de Apoyo', copy: 'Copiar', copied: 'Copiado',
    soon: 'Pronto', thanks: 'Gracias', wisdomClose: 'Siguiente', destinyStart: 'Iniciar Predicción', destinyRestart: 'Repetir',
    riddleEnter: 'Entrar al Laberinto', riddleReady: 'Listo? El Laberinto te espera.', riddleRules1: 'Uno por uno: cada acertijo se desbloquea tras resolver el anterior.',
    riddleRules2: 'Tómate tu tiempo: piensa todo lo que necesites.', riddleRules3: 'Ayuda: dos pistas. Las pistas solo orientan el pensamiento.',
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
  { id: 'purple', name: { ru: 'Королевский Пурпур', en: 'Royal Purple', es: 'Púrpura Real' }, grad: 'linear-gradient(135deg,#6f3aa8,#2e1a4a)' },
  { id: 'sapphire', name: { ru: 'Полночный Сапфир', en: 'Midnight Sapphire', es: 'Zafiro de Medianoche' }, grad: 'linear-gradient(135deg,#264e8b,#101d3c)' },
  { id: 'crimson', name: { ru: 'Багровый Занавес', en: 'Crimson Curtain', es: 'Telón Carmesí' }, grad: 'linear-gradient(135deg,#9b2f43,#4a1515)' },
  { id: 'emerald', name: { ru: 'Изумрудный Лес', en: 'Emerald Forest', es: 'Bosque Esmeralda' }, grad: 'linear-gradient(135deg,#2d7b45,#102f20)' },
  { id: 'amber', name: { ru: 'Янтарные Сумерки', en: 'Amber Twilight', es: 'Crepúsculo Ámbar' }, grad: 'linear-gradient(135deg,#c18a19,#5a3609)' },
  { id: 'kaleidoscope', name: { ru: 'Калейдоскоп', en: 'Kaleidoscope', es: 'Caleidoscopio' }, grad: 'conic-gradient(from 0deg,#7b3fb3,#2d6a9b,#2d7b45,#c18a19,#9b2f43,#7b3fb3)' }
];


function detectLanguage() {
  const telegramLang = tg?.initDataUnsafe?.user?.language_code;
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().split('-')[0];
  const lang = (telegramLang || browserLang || '').toLowerCase().split('-')[0];
  return ['ru', 'en'].includes(lang) ? lang : 'en';
}

function initFirstVisit() {
  let firstVisit = localStorage.getItem('first_visit_at');
  if (!firstVisit) {
    firstVisit = new Date().toISOString();
    localStorage.setItem('first_visit_at', firstVisit);
  }
  const el = document.getElementById('first-visit-date');
  if (el) {
    const d = new Date(firstVisit);
    el.textContent = d.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'es' ? 'es-ES' : 'en-GB', {day:'numeric', month:'long', year:'numeric'});
  }
}

function showTimeCapsule() {
  initFirstVisit();
  const firstVisit = localStorage.getItem('first_visit_at');
  const d = new Date(firstVisit);
  const formatted = d.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'es' ? 'es-ES' : 'en-GB', {day:'numeric', month:'long', year:'numeric'});
  showInfoOverlay(t('timeCapsule'), currentLang === 'ru' ? `Ты впервые открыл игру ${formatted}. Эта дата сохранена как начало твоего пути в Your Destiny.` : currentLang === 'es' ? `Abriste el juego por primera vez el ${formatted}. Esta fecha marca el comienzo de tu camino en Your Destiny.` : `You first entered the game on ${formatted}. This date marks the beginning of your journey in Your Destiny.`);
}

function showInfoOverlay(title, text) {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container info-card"><div class="fate-final-title">${title}</div><div class="fate-final-text">${text}</div><button class="fate-next" onclick="this.closest('.fate-overlay').remove()">${t('close')}</button></div>`;
  document.body.appendChild(overlay);
}

// ---------- Инициализация ----------
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  currentLang = detectLanguage();
  localStorage.setItem('lang', currentLang);
  initParticles();
  initNavigation();
  initIntro();
  initMusic();
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
  }
}

function initIntro() {
  const intro = document.getElementById('intro-screen');
  const app = document.getElementById('app-container');
  const nav = document.getElementById('bottom-nav');
  if (!intro || !app || !nav) return;

  intro.style.display = 'flex';
  intro.style.opacity = '1';
  app.classList.remove('active');
  nav.style.display = 'none';

  // Заставка длится ровно 3 секунды, затем мягко передаёт управление интерфейсу.
  window.setTimeout(() => {
    intro.style.transition = 'opacity 0.55s ease';
    intro.style.opacity = '0';
    window.setTimeout(() => {
      intro.style.display = 'none';
      app.classList.add('active');
      nav.style.display = 'flex';
      initMusic();
    }, 550);
  }, 3000);
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
  initFirstVisit();
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
  const ruBtn = document.getElementById('lang-ru-btn');
  const enBtn = document.getElementById('lang-en-btn');
  if (ruBtn) ruBtn.classList.toggle('active', currentLang === 'ru');
  if (enBtn) enBtn.classList.toggle('active', currentLang === 'en');

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
  const validCode = String(window.ACTIVE_PROMO_CODE || '').trim().toUpperCase();
  if (isVip()) return;
  if (code && validCode && code === validCode) {
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('vip_data', JSON.stringify({ code, activated: new Date().toISOString(), expires: expires.toISOString(), configCode: validCode }));
    status.className = 'promo-status success';
    status.textContent = currentLang === 'ru' ? 'VIP активирован на 30 дней' : currentLang === 'en' ? 'VIP activated for 30 days' : 'VIP activado por 30 días';
    status.style.display = 'block';
    input.value = '';
    updateVipDisplay();
  } else {
    status.className = 'promo-status error';
    status.textContent = currentLang === 'ru' ? 'Неверный промокод' : currentLang === 'en' ? 'Invalid promo code' : 'Código promocional inválido';
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



function showSupportAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="author-card"><div class="author-emblem">✦</div><div class="author-title">${t('supportAuthor')}</div><div class="author-subtitle">${currentLang === 'ru' ? 'Если тебе нравится Your Destiny, ты можешь поддержать развитие проекта.' : currentLang === 'es' ? 'Si te gusta Your Destiny, puedes apoyar el desarrollo del proyecto.' : 'If you enjoy Your Destiny, you can support the project.'}</div><div class="wallet-card"><div class="wallet-label">${t('wallet')}</div><div class="wallet-address">${WALLET}</div><button class="wallet-copy-btn" onclick="copyWallet()">${t('copy')}</button></div></div>`;
  document.body.appendChild(overlay);
}

function showBecomeAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="author-card"><div class="author-emblem">✎</div><div class="author-title">${t('becomeAuthor')}</div><div class="author-subtitle">${currentLang === 'ru' ? 'Создавай истории, загадки и судьбы для Your Destiny. Авторские материалы могут стать частью будущих обновлений проекта.' : currentLang === 'es' ? 'Crea historias, acertijos y destinos para Your Destiny. Tus materiales pueden formar parte de futuras actualizaciones.' : 'Create stories, riddles and destinies for Your Destiny. Your work may become part of future updates.'}</div><div class="author-info-list"><div>✦ ${currentLang === 'ru' ? 'Истории и сценарии' : currentLang === 'es' ? 'Historias y guiones' : 'Stories and scripts'}</div><div>✦ ${currentLang === 'ru' ? 'Загадки и логические задачи' : currentLang === 'es' ? 'Acertijos y lógica' : 'Riddles and logic'}</div><div>✦ ${currentLang === 'ru' ? 'Идеи для новых разделов' : currentLang === 'es' ? 'Ideas para nuevas secciones' : 'Ideas for new sections'}</div></div><button class="fate-next" onclick="this.closest('.fate-overlay').remove()">${t('close')}</button></div>`;
  document.body.appendChild(overlay);
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
    "riddle": {
      "ru": "Кто ходит утром на четырех ногах, днем на двух, а вечером на трех?",
      "en": "What walks on four legs in the morning, two at noon, and three in the evening?",
      "es": "What walks on four legs in the morning, two at noon, and three in the evening?"
    },
    "hints": [
      {
        "ru": "Ищи не отдельное существо, а образ человеческой жизни.",
        "en": "Ищи не отдельное существо, а образ человеческой жизни.",
        "es": "Ищи не отдельное существо, а образ человеческой жизни."
      },
      {
        "ru": "Время суток здесь обозначает разные этапы жизни.",
        "en": "Время суток здесь обозначает разные этапы жизни.",
        "es": "Время суток здесь обозначает разные этапы жизни."
      }
    ],
    "answer": {
      "ru": "Ответ: человек. Утро — младенчество, когда ребенок ползает на четвереньках. День — зрелость, когда человек ходит на двух ногах. Вечер — старость, когда появляется опора в виде трости, то есть третья «нога».",
      "en": "Ответ: человек. Утро — младенчество, когда ребенок ползает на четвереньках. День — зрелость, когда человек ходит на двух ногах. Вечер — старость, когда появляется опора в виде трости, то есть третья «нога».",
      "es": "Ответ: человек. Утро — младенчество, когда ребенок ползает на четвереньках. День — зрелость, когда человек ходит на двух ногах. Вечер — старость, когда появляется опора в виде трости, то есть третья «нога»."
    },
    "difficulty": 1
  },
  {
    "riddle": {
      "ru": "Дом открыт со всех сторон. В доме — тысячи колонн. Над колоннами — шатры. Под колоннами — ковры. Там живут — и в коврах, и в колоннах, и в шатрах.",
      "en": "A house is open on all sides. Inside are thousands of columns. Above the columns are tents, below them are carpets. Creatures live in the carpets, columns and tents.",
      "es": "A house is open on all sides. Inside are thousands of columns. Above the columns are tents, below them are carpets. Creatures live in the carpets, columns and tents."
    },
    "hints": [
      {
        "ru": "Представь место, где «колонны» растут из земли.",
        "en": "Представь место, где «колонны» растут из земли.",
        "es": "Представь место, где «колонны» растут из земли."
      },
      {
        "ru": "Шатры и ковры здесь не сделаны человеком.",
        "en": "Шатры и ковры здесь не сделаны человеком.",
        "es": "Шатры и ковры здесь не сделаны человеком."
      }
    ],
    "answer": {
      "ru": "Ответ: лес. Колонны — стволы деревьев, шатры — их кроны, ковры — мох, трава и лесная подстилка. В этом доме живут птицы, звери, насекомые и множество других существ.",
      "en": "Ответ: лес. Колонны — стволы деревьев, шатры — их кроны, ковры — мох, трава и лесная подстилка. В этом доме живут птицы, звери, насекомые и множество других существ.",
      "es": "Ответ: лес. Колонны — стволы деревьев, шатры — их кроны, ковры — мох, трава и лесная подстилка. В этом доме живут птицы, звери, насекомые и множество других существ."
    },
    "difficulty": 1
  },
  {
    "riddle": {
      "ru": "Крестьянину необходимо переправить через широкую реку волка, козу и кочан капусты. В лодке одновременно могут поместиться только крестьянин и кто-то один из груза. Нельзя оставлять волка с козой и козу с капустой без присмотра. Как перевезти всех за минимальное количество рейсов?",
      "en": "A farmer must take a wolf, a goat and a cabbage across a river. The boat holds only the farmer and one item. The wolf cannot be left with the goat, and the goat cannot be left with the cabbage. What is the minimum sequence of trips?",
      "es": "A farmer must take a wolf, a goat and a cabbage across a river. The boat holds only the farmer and one item. The wolf cannot be left with the goat, and the goat cannot be left with the cabbage. What is the minimum sequence of trips?"
    },
    "hints": [
      {
        "ru": "Сначала перевези того, кто опасен и для одного, и для другого.",
        "en": "Сначала перевези того, кто опасен и для одного, и для другого.",
        "es": "Сначала перевези того, кто опасен и для одного, и для другого."
      },
      {
        "ru": "В одном из обратных рейсов придётся вернуть уже перевезённый груз.",
        "en": "В одном из обратных рейсов придётся вернуть уже перевезённый груз.",
        "es": "В одном из обратных рейсов придётся вернуть уже перевезённый груз."
      }
    ],
    "answer": {
      "ru": "Ответ: 7 рейсов. 1) Перевезти козу. 2) Вернуться одному. 3) Перевезти волка. 4) Вернуть козу обратно. 5) Перевезти капусту. 6) Вернуться одному. 7) Перевезти козу. В итоге волк и капуста остаются вместе, что безопасно.",
      "en": "Ответ: 7 рейсов. 1) Перевезти козу. 2) Вернуться одному. 3) Перевезти волка. 4) Вернуть козу обратно. 5) Перевезти капусту. 6) Вернуться одному. 7) Перевезти козу. В итоге волк и капуста остаются вместе, что безопасно.",
      "es": "Ответ: 7 рейсов. 1) Перевезти козу. 2) Вернуться одному. 3) Перевезти волка. 4) Вернуть козу обратно. 5) Перевезти капусту. 6) Вернуться одному. 7) Перевезти козу. В итоге волк и капуста остаются вместе, что безопасно."
    },
    "difficulty": 2
  },
  {
    "riddle": {
      "ru": "Задача о двух веревках: как отмерить ровно 45 минут при помощи двух веревок, каждая из которых сгорает целиком за один час, но горит неравномерно?",
      "en": "Two ropes each burn completely in exactly one hour, but burn unevenly. How can you measure exactly 45 minutes?",
      "es": "Two ropes each burn completely in exactly one hour, but burn unevenly. How can you measure exactly 45 minutes?"
    },
    "hints": [
      {
        "ru": "Используй тот факт, что конец верёвки можно поджечь сразу с двух сторон.",
        "en": "Используй тот факт, что конец верёвки можно поджечь сразу с двух сторон.",
        "es": "Используй тот факт, что конец верёвки можно поджечь сразу с двух сторон."
      },
      {
        "ru": "Подумай, сколько времени потребуется верёвке, если она горит с двух концов одновременно.",
        "en": "Подумай, сколько времени потребуется верёвке, если она горит с двух концов одновременно.",
        "es": "Подумай, сколько времени потребуется верёвке, если она горит с двух концов одновременно."
      }
    ],
    "answer": {
      "ru": "Ответ: одновременно подожги первую верёвку с двух концов, а вторую — с одного конца. Первая полностью сгорит за 30 минут. В этот момент подожги второй конец второй верёвки. У неё останется ровно половина времени горения, но теперь она горит с двух концов и догорит за 15 минут. 30 + 15 = 45 минут.",
      "en": "Ответ: одновременно подожги первую верёвку с двух концов, а вторую — с одного конца. Первая полностью сгорит за 30 минут. В этот момент подожги второй конец второй верёвки. У неё останется ровно половина времени горения, но теперь она горит с двух концов и догорит за 15 минут. 30 + 15 = 45 минут.",
      "es": "Ответ: одновременно подожги первую верёвку с двух концов, а вторую — с одного конца. Первая полностью сгорит за 30 минут. В этот момент подожги второй конец второй верёвки. У неё останется ровно половина времени горения, но теперь она горит с двух концов и догорит за 15 минут. 30 + 15 = 45 минут."
    },
    "difficulty": 2
  },
  {
    "riddle": {
      "ru": "Сто монет: лежат 100 монет, часть орлом вверх, часть решкой вверх. В темноте нужно разделить их на две кучки с равным числом орлов. Орлом вверх 23 монеты, остальные решкой вверх. Как это сделать?",
      "en": "There are 100 coins. Some show heads and some tails. In complete darkness, 23 show heads. Split them into two piles containing the same number of heads.",
      "es": "There are 100 coins. Some show heads and some tails. In complete darkness, 23 show heads. Split them into two piles containing the same number of heads."
    },
    "hints": [
      {
        "ru": "Тебе известно точное количество монет с орлом во всей куче.",
        "en": "Тебе известно точное количество монет с орлом во всей куче.",
        "es": "Тебе известно точное количество монет с орлом во всей куче."
      },
      {
        "ru": "Важнее количество монет в одной выбранной кучке, чем то, какие именно монеты ты взял.",
        "en": "Важнее количество монет в одной выбранной кучке, чем то, какие именно монеты ты взял.",
        "es": "Важнее количество монет в одной выбранной кучке, чем то, какие именно монеты ты взял."
      }
    ],
    "answer": {
      "ru": "Ответ: отсчитай в темноте любые 23 монеты и сделай из них первую кучку. Остальные 77 — вторая кучка. Переверни все 23 монеты первой кучки. Если среди них было X орлов, то после переворота станет 23 − X орлов. В большой кучке изначально осталось 23 − X орлов. Значит, после переворота количество орлов в обеих кучках станет одинаковым.",
      "en": "Ответ: отсчитай в темноте любые 23 монеты и сделай из них первую кучку. Остальные 77 — вторая кучка. Переверни все 23 монеты первой кучки. Если среди них было X орлов, то после переворота станет 23 − X орлов. В большой кучке изначально осталось 23 − X орлов. Значит, после переворота количество орлов в обеих кучках станет одинаковым.",
      "es": "Ответ: отсчитай в темноте любые 23 монеты и сделай из них первую кучку. Остальные 77 — вторая кучка. Переверни все 23 монеты первой кучки. Если среди них было X орлов, то после переворота станет 23 − X орлов. В большой кучке изначально осталось 23 − X орлов. Значит, после переворота количество орлов в обеих кучках станет одинаковым."
    },
    "difficulty": 3
  },
  {
    "riddle": {
      "ru": "Человек стоит перед двумя дверями. Первая дверь ведёт к замку, вторая — к гибели. Около дверей стоят два стражника: один всегда говорит правду, второй всегда лжёт. Человек не знает, кто из них кто. У него есть всего один вопрос, который можно задать только одному стражнику. Какой вопрос нужно задать?",
      "en": "A person stands before two doors. One leads to the castle, the other to death. One guard always tells the truth and the other always lies. You may ask only one question to one guard. What should you ask?",
      "es": "A person stands before two doors. One leads to the castle, the other to death. One guard always tells the truth and the other always lies. You may ask only one question to one guard. What should you ask?"
    },
    "hints": [
      {
        "ru": "Задай вопрос не о том, что думает сам стражник, а о том, что сказал бы его напарник.",
        "en": "Задай вопрос не о том, что думает сам стражник, а о том, что сказал бы его напарник.",
        "es": "Задай вопрос не о том, что думает сам стражник, а о том, что сказал бы его напарник."
      },
      {
        "ru": "После ответа не выбирай названную дверь напрямую.",
        "en": "После ответа не выбирай названную дверь напрямую.",
        "es": "После ответа не выбирай названную дверь напрямую."
      }
    ],
    "answer": {
      "ru": "Ответ: нужно спросить любого стражника: «Если бы я спросил твоего напарника, какая дверь ведёт к спасению, на какую бы он указал?» Стражник укажет на неправильную дверь независимо от того, кому задан вопрос. Поэтому нужно выбрать противоположную дверь.",
      "en": "Ответ: нужно спросить любого стражника: «Если бы я спросил твоего напарника, какая дверь ведёт к спасению, на какую бы он указал?» Стражник укажет на неправильную дверь независимо от того, кому задан вопрос. Поэтому нужно выбрать противоположную дверь.",
      "es": "Ответ: нужно спросить любого стражника: «Если бы я спросил твоего напарника, какая дверь ведёт к спасению, на какую бы он указал?» Стражник укажет на неправильную дверь независимо от того, кому задан вопрос. Поэтому нужно выбрать противоположную дверь."
    },
    "difficulty": 3
  },
  {
    "riddle": {
      "ru": "Три мудреца сидят в комнате. На них надевают три колпака, выбранных случайным образом из пяти имеющихся: 3 чёрных и 2 белых. Каждый мудрец видит колпаки двух других, но не видит свой. Им запрещено общаться. Первого, затем второго, затем третьего спрашивают: «Знаешь ли ты цвет своего колпака?». Первые два отвечают: «Нет, не знаю». Третий отвечает: «Да, знаю». Какого цвета его колпак?",
      "en": "Three sages wear hats randomly chosen from five hats: three black and two white. Each sees the other two. The first says he does not know his color, the second also says he does not know, and the third says he knows. What color is the third hat?",
      "es": "Three sages wear hats randomly chosen from five hats: three black and two white. Each sees the other two. The first says he does not know his color, the second also says he does not know, and the third says he knows. What color is the third hat?"
    },
    "hints": [
      {
        "ru": "Сначала разберись, какую информацию даёт ответ первого мудреца «не знаю».",
        "en": "Сначала разберись, какую информацию даёт ответ первого мудреца «не знаю».",
        "es": "Сначала разберись, какую информацию даёт ответ первого мудреца «не знаю»."
      },
      {
        "ru": "Затем используй тот же принцип с ответом второго мудреца и учти, что все слышат предыдущие ответы.",
        "en": "Затем используй тот же принцип с ответом второго мудреца и учти, что все слышат предыдущие ответы.",
        "es": "Затем используй тот же принцип с ответом второго мудреца и учти, что все слышат предыдущие ответы."
      }
    ],
    "answer": {
      "ru": "Ответ: третий мудрец точно носит чёрный колпак. Первый мудрец мог бы сразу узнать свой цвет только увидев два белых колпака. Его ответ «не знаю» означает, что среди второго и третьего нет двух белых. Второй мудрец слышит это. Если бы он увидел на третьем белый колпак и при этом сам был в белом, первый мудрец увидел бы два белых и знал бы свой цвет — но первый этого не знал. Поэтому, услышав ответ первого, второй при виде белого колпака на третьем смог бы вычислить свой чёрный. Но второй тоже отвечает «не знаю». Следовательно, третий не белый. Значит, на третьем чёрный колпак.",
      "en": "Ответ: третий мудрец точно носит чёрный колпак. Первый мудрец мог бы сразу узнать свой цвет только увидев два белых колпака. Его ответ «не знаю» означает, что среди второго и третьего нет двух белых. Второй мудрец слышит это. Если бы он увидел на третьем белый колпак и при этом сам был в белом, первый мудрец увидел бы два белых и знал бы свой цвет — но первый этого не знал. Поэтому, услышав ответ первого, второй при виде белого колпака на третьем смог бы вычислить свой чёрный. Но второй тоже отвечает «не знаю». Следовательно, третий не белый. Значит, на третьем чёрный колпак.",
      "es": "Ответ: третий мудрец точно носит чёрный колпак. Первый мудрец мог бы сразу узнать свой цвет только увидев два белых колпака. Его ответ «не знаю» означает, что среди второго и третьего нет двух белых. Второй мудрец слышит это. Если бы он увидел на третьем белый колпак и при этом сам был в белом, первый мудрец увидел бы два белых и знал бы свой цвет — но первый этого не знал. Поэтому, услышав ответ первого, второй при виде белого колпака на третьем смог бы вычислить свой чёрный. Но второй тоже отвечает «не знаю». Следовательно, третий не белый. Значит, на третьем чёрный колпак."
    },
    "difficulty": 4
  },
  {
    "riddle": {
      "ru": "Пять пиратов нашли 100 золотых монет. Старший предлагает раздел. Все голосуют. Если «за» проголосует 50% или больше, план принимается; иначе автора выбрасывают за борт. Пираты хотят прежде всего остаться на корабле, затем получить больше денег, а при равенстве денег голосуют против из вредности. Какой план должен предложить первый пират, чтобы остаться и получить максимум?",
      "en": "Five pirates must divide 100 gold coins. The oldest proposes a plan. If at least 50% vote yes, it passes; otherwise the proposer is thrown overboard. Survival comes first, then money; if money is equal, a pirate votes no out of spite. What should the first pirate propose?",
      "es": "Five pirates must divide 100 gold coins. The oldest proposes a plan. If at least 50% vote yes, it passes; otherwise the proposer is thrown overboard. Survival comes first, then money; if money is equal, a pirate votes no out of spite. What should the first pirate propose?"
    },
    "hints": [
      {
        "ru": "Решай задачу с конца: сначала выясни, что произойдёт при двух, затем трёх, затем четырёх пиратах.",
        "en": "Решай задачу с конца: сначала выясни, что произойдёт при двух, затем трёх, затем четырёх пиратах.",
        "es": "Решай задачу с конца: сначала выясни, что произойдёт при двух, затем трёх, затем четырёх пиратах."
      },
      {
        "ru": "Чтобы купить голос, достаточно дать пирату на одну монету больше, чем он получит в следующем сценарии.",
        "en": "Чтобы купить голос, достаточно дать пирату на одну монету больше, чем он получит в следующем сценарии.",
        "es": "Чтобы купить голос, достаточно дать пирату на одну монету больше, чем он получит в следующем сценарии."
      }
    ],
    "answer": {
      "ru": "Ответ: первый пират предлагает: себе — 98 монет, второму — 0, третьему — 1, четвёртому — 0, пятому — 1. За проголосуют первый, третий и пятый — 3 из 5, поэтому план проходит. Логика строится с конца: при двух пиратах четвёртый забирает всё; при трёх третий покупает голос пятого одной монетой; при четырёх второй покупает голос четвёртого одной монетой; значит, в исходной ситуации первый покупает голоса третьего и пятого по одной монете и получает 98.",
      "en": "Ответ: первый пират предлагает: себе — 98 монет, второму — 0, третьему — 1, четвёртому — 0, пятому — 1. За проголосуют первый, третий и пятый — 3 из 5, поэтому план проходит. Логика строится с конца: при двух пиратах четвёртый забирает всё; при трёх третий покупает голос пятого одной монетой; при четырёх второй покупает голос четвёртого одной монетой; значит, в исходной ситуации первый покупает голоса третьего и пятого по одной монете и получает 98.",
      "es": "Ответ: первый пират предлагает: себе — 98 монет, второму — 0, третьему — 1, четвёртому — 0, пятому — 1. За проголосуют первый, третий и пятый — 3 из 5, поэтому план проходит. Логика строится с конца: при двух пиратах четвёртый забирает всё; при трёх третий покупает голос пятого одной монетой; при четырёх второй покупает голос четвёртого одной монетой; значит, в исходной ситуации первый покупает голоса третьего и пятого по одной монете и получает 98."
    },
    "difficulty": 5
  },
  {
    "riddle": {
      "ru": "Одна кувшинка удваивает площадь покрытия озера каждый день. Через 30 дней она покрывает всё озеро. А если кувшинок две, сколько дней им понадобится, чтобы покрыть то же озеро?",
      "en": "A lily doubles its covered area every day. After 30 days it covers the entire lake. If there are two lilies, how many days will they need?",
      "es": "A lily doubles its covered area every day. After 30 days it covers the entire lake. If there are two lilies, how many days will they need?"
    },
    "hints": [
      {
        "ru": "Сравни количество покрытия за один день до полного заполнения.",
        "en": "Сравни количество покрытия за один день до полного заполнения.",
        "es": "Сравни количество покрытия за один день до полного заполнения."
      },
      {
        "ru": "Две одинаковые кувшинки означают вдвое большую площадь на каждом этапе.",
        "en": "Две одинаковые кувшинки означают вдвое большую площадь на каждом этапе.",
        "es": "Две одинаковые кувшинки означают вдвое большую площадь на каждом этапе."
      }
    ],
    "answer": {
      "ru": "Ответ: 29 дней. Если одна кувшинка покрывает всё озеро на 30-й день, то за день до этого она покрывает половину. Две кувшинки вдвое увеличивают покрываемую площадь, поэтому вместе они покроют всё озеро уже на 29-й день.",
      "en": "Ответ: 29 дней. Если одна кувшинка покрывает всё озеро на 30-й день, то за день до этого она покрывает половину. Две кувшинки вдвое увеличивают покрываемую площадь, поэтому вместе они покроют всё озеро уже на 29-й день.",
      "es": "Ответ: 29 дней. Если одна кувшинка покрывает всё озеро на 30-й день, то за день до этого она покрывает половину. Две кувшинки вдвое увеличивают покрываемую площадь, поэтому вместе они покроют всё озеро уже на 29-й день."
    },
    "difficulty": 5
  },
  {
    "riddle": {
      "ru": "Есть три бога: A, B и C — боги истины, лжи и случая в произвольном порядке. Бог истины всегда говорит правду, бог лжи всегда обманывает, бог случая случайным образом говорит правду или ложь. Нужно определить богов за 3 вопроса, на которые можно ответить «да» или «нет». Каждый вопрос задаётся только одному богу, но одному богу можно задать несколько вопросов. Боги понимают язык, но отвечают словами «da» и «ja», причём неизвестно, какое слово означает «да», а какое «нет». Следующий вопрос может зависеть от предыдущего ответа. Бог случая отвечает случайно в зависимости от подбрасывания монетки. Нельзя задавать вопросы-парадоксы.",
      "en": "There are three gods A, B and C: Truth, Falsehood and Random in unknown order. Truth always tells the truth, Falsehood always lies, and Random answers truthfully or falsely according to a hidden coin toss. You must identify all three using three yes/no questions. Each question is asked to one god, and the next question may depend on the previous answer. The gods answer in an unknown language using the words da and ja, and you do not know which means yes. Paradoxical questions are forbidden.",
      "es": "There are three gods A, B and C: Truth, Falsehood and Random in unknown order. Truth always tells the truth, Falsehood always lies, and Random answers truthfully or falsely according to a hidden coin toss. You must identify all three using three yes/no questions. Each question is asked to one god, and the next question may depend on the previous answer. The gods answer in an unknown language using the words da and ja, and you do not know which means yes. Paradoxical questions are forbidden."
    },
    "hints": [
      {
        "ru": "Сначала нужно гарантированно найти бога, который не является богом случая.",
        "en": "Сначала нужно гарантированно найти бога, который не является богом случая.",
        "es": "Сначала нужно гарантированно найти бога, который не является богом случая."
      },
      {
        "ru": "У обычного бога используй вопрос о том, что он сказал бы на другой вопрос; это позволяет нейтрализовать неизвестное значение «da» и «ja».",
        "en": "У обычного бога используй вопрос о том, что он сказал бы на другой вопрос; это позволяет нейтрализовать неизвестное значение «da» и «ja».",
        "es": "У обычного бога используй вопрос о том, что он сказал бы на другой вопрос; это позволяет нейтрализовать неизвестное значение «da» и «ja»."
      }
    ],
    "answer": {
      "ru": "Ответ: сначала нужно найти бога, который не является богом случая. Один из вариантов — спросить B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?» Если B отвечает «ja», то либо B — бог случая, либо A — бог случая; в обоих вариантах C не является богом случая. Если B отвечает «da», то либо B — бог случая, либо A не является богом случая; в обоих вариантах A не является богом случая. После этого у нас есть гарантированно неслучайный бог. Спросим его: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?» Для истины и лжи такой вложенный вопрос нейтрализует одновременно ложь и неизвестное значение слов: ответ «ja» указывает на ложь, «da» — на истину. Третьим вопросом у того же неслучайного бога спрашиваем: «Если я у тебя спрошу „Бог B — бог случая?“, ответишь ли ты „ja“?» Ответ определяет, является ли B богом случая; оставшийся бог определяется методом исключения. Важно, что вопросы сформулированы как обычные вопросы о поведении ответа и не являются парадоксами.",
      "en": "Ответ: сначала нужно найти бога, который не является богом случая. Один из вариантов — спросить B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?» Если B отвечает «ja», то либо B — бог случая, либо A — бог случая; в обоих вариантах C не является богом случая. Если B отвечает «da», то либо B — бог случая, либо A не является богом случая; в обоих вариантах A не является богом случая. После этого у нас есть гарантированно неслучайный бог. Спросим его: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?» Для истины и лжи такой вложенный вопрос нейтрализует одновременно ложь и неизвестное значение слов: ответ «ja» указывает на ложь, «da» — на истину. Третьим вопросом у того же неслучайного бога спрашиваем: «Если я у тебя спрошу „Бог B — бог случая?“, ответишь ли ты „ja“?» Ответ определяет, является ли B богом случая; оставшийся бог определяется методом исключения. Важно, что вопросы сформулированы как обычные вопросы о поведении ответа и не являются парадоксами.",
      "es": "Ответ: сначала нужно найти бога, который не является богом случая. Один из вариантов — спросить B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?» Если B отвечает «ja», то либо B — бог случая, либо A — бог случая; в обоих вариантах C не является богом случая. Если B отвечает «da», то либо B — бог случая, либо A не является богом случая; в обоих вариантах A не является богом случая. После этого у нас есть гарантированно неслучайный бог. Спросим его: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?» Для истины и лжи такой вложенный вопрос нейтрализует одновременно ложь и неизвестное значение слов: ответ «ja» указывает на ложь, «da» — на истину. Третьим вопросом у того же неслучайного бога спрашиваем: «Если я у тебя спрошу „Бог B — бог случая?“, ответишь ли ты „ja“?» Ответ определяет, является ли B богом случая; оставшийся бог определяется методом исключения. Важно, что вопросы сформулированы как обычные вопросы о поведении ответа и не являются парадоксами."
    },
    "difficulty": 6
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
      <div class="labyrinth-counter">${state.currentRiddle + 1} ${currentLang === 'ru' ? 'из' : currentLang === 'es' ? 'de' : 'of'} ${LABYRINTH_RIDDLES.length}</div>
      <div class="labyrinth-riddle">${riddle.riddle[currentLang]}</div>
      <div class="labyrinth-hints">
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(0) ? 'used' : ''}" onclick="showLabyrinthHint(0)">1</button>
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(1) ? 'used' : ''}" onclick="showLabyrinthHint(1)">2</button>
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
  const state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  if (state.hintsUsed.includes(hintIndex)) return;
  const confirmOverlay = document.createElement('div');
  confirmOverlay.id = 'labyrinth-hint-confirm';
  confirmOverlay.className = 'labyrinth-confirm-overlay';
  const text = currentLang === 'ru' ? 'Точно хочешь открыть подсказку? Она будет использована и не даст готового ответа.' : currentLang === 'es' ? '¿Seguro que quieres abrir la pista? Se consumirá y no dará la respuesta.' : 'Are you sure you want to open the hint? It will be used and will not reveal the answer.';
  const yes = currentLang === 'ru' ? 'Да, открыть' : currentLang === 'es' ? 'Sí, abrir' : 'Yes, open';
  const no = currentLang === 'ru' ? 'Назад' : currentLang === 'es' ? 'Volver' : 'Back';
  confirmOverlay.innerHTML = `<div class="labyrinth-confirm-box"><p>${text}</p><div class="labyrinth-confirm-btns"><button onclick="closeLabyrinthHintConfirm()">${no}</button><button onclick="confirmLabyrinthHint(${hintIndex})">${yes}</button></div></div>`;
  document.body.appendChild(confirmOverlay);
}

function closeLabyrinthHintConfirm() {
  document.getElementById('labyrinth-hint-confirm')?.remove();
}

function confirmLabyrinthHint(hintIndex) {
  closeLabyrinthHintConfirm();
  const saved = localStorage.getItem('labyrinth');
  const state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  const riddle = LABYRINTH_RIDDLES[state.currentRiddle];
  if (!state.hintsUsed.includes(hintIndex)) state.hintsUsed.push(hintIndex);
  localStorage.setItem('labyrinth', JSON.stringify(state));
  const hintText = document.getElementById('labyrinth-hint-text');
  hintText.textContent = riddle.hints[hintIndex][currentLang];
  hintText.style.display = 'block';
  document.querySelectorAll('.labyrinth-hint-btn')[hintIndex]?.classList.add('used');
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
      <button class="labyrinth-next-btn" onclick="restartLabyrinth()">${t('restart')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function restartLabyrinth() {
  localStorage.setItem('labyrinth', JSON.stringify({ currentRiddle: 0, hintsUsed: [] }));
  const overlay = document.querySelector('.labyrinth-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => { overlay.remove(); renderLabyrinthRiddle(); }, 400); }
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
  // Сортируем категории по очкам
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [first, second] = sorted;

  let winner;
  // Если все очки равны (или почти равны) — баланс
  const allEqual = sorted.every(([k,v]) => Math.abs(v - first[1]) <= 1);
  if (allEqual && sorted.length > 2) {
    winner = 'balanced';
  } else if (first[1] === second[1]) {
    // Ничья — берем комбинацию
    const combo = [first[0], second[0]].sort().join('_');
    winner = DESTINY_TITLES[combo] ? combo : 'shadow';
  } else {
    // Чистая победа
    winner = first[0];
  }

  const title = DESTINY_TITLES[winner];
  const overlay = document.createElement('div');
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeDestiny()">&times;</button>
    <div class="destiny-container destiny-result destiny-result-minimal">
      <div class="destiny-result-kicker">${t('destinyResultTitle')}</div>
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
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeWisdom()">&times;</button>
    <div class="wisdom-container">
      <div class="wisdom-symbol">✦</div>
      <div class="wisdom-heading">${t('wisdom')}</div>
      <div class="wisdom-divider"><span>✦</span></div>
      <div class="wisdom-label">${currentLang === 'ru' ? 'ЗНАК СУДЬБЫ' : currentLang === 'es' ? 'SEÑAL DEL DESTINO' : 'SIGN OF FATE'}</div>
      <div class="wisdom-quote">${quote[currentLang]}</div>
      <div class="wisdom-footer-mark">— ${currentLang === 'ru' ? 'слово судьбы' : currentLang === 'es' ? 'palabra del destino' : 'word of fate'} —</div>
      <button class="wisdom-close-btn" onclick="closeWisdom()">${t('wisdomClose')}</button>
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
  overlay.className = 'fate-overlay active';
  const bodyText = currentLang === 'ru' ? "Общие положения. Настоящие условия регулируют доступ и использование Your Destiny, его интерфейса, текстов, иллюстраций, игровых механик, историй, загадок и иных материалов. Используя приложение, пользователь подтверждает, что ознакомился с условиями и принимает их в пределах, допускаемых применимым законодательством.\n\nНазначение сервиса. Your Destiny является развлекательным цифровым продуктом. Игровые тесты, архетипы, «предсказания», психологические дилеммы и иные результаты имеют исключительно развлекательный и художественный характер и не являются медицинской, психологической, юридической, финансовой или иной профессиональной консультацией.\n\nИнтеллектуальная собственность. Исходный код, дизайн, название, визуальные элементы, тексты, структура интерфейса и оригинальные материалы принадлежат правообладателю либо используются на законных основаниях. Запрещается копировать, распространять, продавать, публиковать или перерабатывать материалы проекта без соответствующего разрешения, за исключением случаев, прямо разрешённых законом.\n\nПользовательские действия. Пользователь обязан не вмешиваться в работу приложения, не пытаться обходить ограничения доступа, не использовать автоматизированные средства для нарушения работы сервиса и не предпринимать действий, способных повредить инфраструктуре, данным или другим пользователям.\n\nVIP и промокоды. VIP-доступ и промокоды предоставляют только тот объём доступа и на тот срок, который указан внутри приложения или в официальном сообщении проекта. Срок активированного доступа не изменяется автоматически при последующей замене действующего промокода. Невалидные, просроченные или отозванные промокоды не предоставляют доступа.\n\nДоступность. Разработчик вправе изменять, приостанавливать, обновлять или прекращать отдельные функции приложения. В связи с техническими работами, обновлениями, ошибками сторонних платформ или сетевыми сбоями непрерывная доступность не гарантируется.\n\nОграничение ответственности. В максимально допустимой законом степени разработчик не несёт ответственности за косвенные убытки, потерю локального прогресса, недоступность сторонних сервисов, ошибки Telegram, браузера, хостинга или сети. Пользователь самостоятельно отвечает за сохранность необходимых ему данных.\n\nИзменения условий. Условия могут периодически обновляться. Продолжение использования приложения после публикации новой редакции означает ознакомление с изменениями в пределах, допускаемых законом.\n\nПрименимое право. Если отдельные положения признаются недействительными, остальные положения сохраняют силу. Права и обязанности сторон толкуются с учётом обязательных норм законодательства, применимого к конкретной ситуации." : "General provisions. These terms govern access to and use of Your Destiny, including its interface, text, illustrations, game mechanics, stories, riddles and other materials. By using the application, the user confirms that they have read and accepted these terms to the extent permitted by applicable law.\n\nPurpose of the service. Your Destiny is an entertainment product. Tests, archetypes, “predictions”, psychological dilemmas and other results are fictional or entertainment-oriented and do not constitute medical, psychological, legal, financial or other professional advice.\n\nIntellectual property. The source code, design, name, visual elements, texts, interface structure and original materials belong to the rights holder or are used lawfully. Copying, distributing, selling, publishing or adapting project materials without permission is prohibited except where expressly allowed by law.\n\nUser conduct. Users must not interfere with the application, bypass access restrictions, use automated means to disrupt the service, or take actions that may harm infrastructure, data or other users.\n\nVIP and promo codes. VIP access and promo codes provide only the access and duration stated in the application or official project communication. An already activated access period does not reset merely because the current promo code is later changed. Invalid, expired or revoked codes do not grant access.\n\nAvailability. The developer may modify, suspend, update or discontinue individual features. Continuous availability is not guaranteed due to maintenance, updates, third-party platform issues, hosting, browser or network failures.\n\nLimitation of liability. To the maximum extent permitted by law, the developer is not liable for indirect losses, loss of local progress, or outages caused by Telegram, browsers, hosting, networks or other third parties. Users are responsible for keeping any data they consider important.\n\nChanges. These terms may be updated from time to time. Continued use after a new version is published constitutes notice of the changes to the extent permitted by law.\n\nSeverability and governing rules. If a provision is found invalid, the remaining provisions remain effective. Rights and obligations are interpreted subject to mandatory law applicable to the relevant situation.";
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container legal-card"><div class="fate-final-title">${t('termsTitle')}</div><div class="legal-text">${bodyText.split('\n\n').map((part,i)=>`<p><b>${i+1}.</b> ${part}</p>`).join('')}</div><button class="fate-next" onclick="this.closest('.fate-overlay').remove()">${t('close')}</button></div>`;
  document.body.appendChild(overlay);
}
function showPrivacy() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  const bodyText = currentLang === 'ru' ? "Общая информация. Your Destiny может работать как веб-приложение внутри Telegram WebApp или в обычном браузере. Набор доступных технических данных зависит от среды запуска и настроек платформы.\n\nЛокальное хранение. Игровой прогресс, выбранная тема, дата первого запуска, состояние VIP-доступа, настройки и часть пользовательских предпочтений могут сохраняться локально в localStorage браузера. Очистка данных браузера, переустановка среды или изменение устройства может удалить такие данные.\n\nTelegram. При запуске внутри Telegram приложение может получать от Telegram технический контекст WebApp, включая доступный языковой код и данные, предоставляемые платформой в соответствии с её собственными правилами. Приложение не должно запрашивать у пользователя пароль Telegram или код подтверждения.\n\nСторонние ресурсы. Приложение может использовать внешние ресурсы, включая Telegram WebApp API, CDN или иные технические сервисы. Такие сервисы могут обрабатывать технические данные самостоятельно в соответствии со своими политиками.\n\nМинимизация данных. Приложение предназначено для работы без необходимости создавать отдельный аккаунт внутри Your Destiny. Не следует вводить в игровые поля пароли, платёжные реквизиты, документы, секретные ключи или иные чувствительные сведения.\n\nБезопасность. Принимаются разумные технические меры, но ни один веб-сервис не может гарантировать абсолютную безопасность данных. Пользователь понимает риск, связанный с браузером, устройством, сетью и сторонними платформами.\n\nХранение и удаление. Локальные данные хранятся до их удаления пользователем, очистки браузера либо изменения логики приложения. Отдельные данные, которые обрабатываются сторонними платформами, регулируются их собственными сроками хранения.\n\nИзменения политики. Политика может обновляться при изменении функций, платформ или требований законодательства. Актуальная редакция размещается внутри приложения.\n\nКонтакты и запросы. Если появится отдельный официальный канал для запросов по вопросам приватности, он будет указан в приложении или официальных материалах проекта." : "General information. Your Destiny may run as a Telegram WebApp or in a standard browser. The technical information available to the application depends on the environment and platform settings.\n\nLocal storage. Game progress, selected theme, first-visit date, VIP status, settings and certain preferences may be stored locally in browser localStorage. Clearing browser data, reinstalling the environment or changing devices may remove such data.\n\nTelegram. When launched inside Telegram, the application may receive WebApp context supplied by Telegram, such as a language code and other platform-provided information subject to Telegram’s own rules. The application should never require a Telegram password or verification code.\n\nThird-party resources. The application may use external resources such as the Telegram WebApp API, CDNs or other technical services. Such services may process technical data under their own policies.\n\nData minimization. Your Destiny is designed to work without requiring a separate account inside the application. Users should not enter passwords, payment credentials, private keys, identity documents or other sensitive information into game fields.\n\nSecurity. Reasonable technical measures may be used, but no web service can guarantee absolute security. Users acknowledge risks associated with their browser, device, network and third-party platforms.\n\nRetention and deletion. Local data remains until deleted by the user, cleared by the browser, or changed by the application. Data handled by third-party platforms is subject to their own retention practices.\n\nPolicy changes. This policy may be updated when features, platforms or legal requirements change. The current version is made available inside the application.\n\nPrivacy requests. If an official privacy contact channel is introduced, it will be published inside the application or through official project materials.";
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container legal-card"><div class="fate-final-title">${t('privacyTitle')}</div><div class="legal-text">${bodyText.split('\n\n').map((part,i)=>`<p><b>${i+1}.</b> ${part}</p>`).join('')}</div><button class="fate-next" onclick="this.closest('.fate-overlay').remove()">${t('close')}</button></div>`;
  document.body.appendChild(overlay);
}
