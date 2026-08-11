// ============================================================
// YOUR DESTINY v4.0
// ============================================================

let tg = null;
let currentLang = 'en';
let isMusicPlaying = false;
let bgMusic = null;
let visualEffectsEnabled = true;
let currentTheme = 'purple';
const WALLET = 'TD95kxxcBBRvdoj1nmELQtZ6X1Ux4n52Jf';

// ---------- Language detection ----------
function detectLanguage() {
  if (window.Telegram && window.Telegram.WebApp) {
    const tgLang = window.Telegram.WebApp.initDataUnsafe?.user?.language_code;
    if (tgLang) {
      if (tgLang.startsWith('ru')) return 'ru';
      if (tgLang.startsWith('es')) return 'es';
      return 'en';
    }
  }
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang) {
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('es')) return 'es';
  }
  return 'en';
}

const T = {
  ru: {
    appTitle: 'YOUR DESTINY', novels: 'Новеллы', surveys: 'Анкеты', contacts: 'Контакты', favorites: 'Любимое', settings: 'Настройки',
    loading: 'Загрузка историй...', emptyNovels: 'Истории скоро появятся...', emptySurveys: 'Анкеты в разработке...', emptyContacts: 'Контакты в разработке...', emptyFavorites: 'Здесь будут ваши сокровенные моменты...',
    music: 'Музыка', theme: 'Цвет темы', language: 'Язык', promo: 'Промокод', activate: 'Активировать', promoPlaceholder: 'Введите промокод...',
    promoHint: 'Промокод можно найти в Telegram-канале', vipStatus: 'VIP-статус', freeVersion: 'Бесплатная версия', vipActive: 'VIP активен',
    timeLeft: 'Осталось', days: 'д', hours: 'ч', minutes: 'м', timeCapsule: 'Капсула Времени', rateApp: 'Оценить приложение',
    storySchedule: 'Расписание Историй', supportAuthor: 'Поддержать Автора', becomeAuthor: 'Стать Автором', wisdom: 'Мудрость Судьбы',
    chronicles: 'Хроники Судьбы', labyrinth: 'Лабиринт Загадок', trueDestiny: 'Какая твоя Истинная Судьба?', about: 'Об игре',
    terms: 'Условия использования', privacy: 'Политика конфиденциальности', community: 'Канал сообщества',
    back: 'Назад', close: 'Закрыть', continue: 'Продолжить', next: 'Далее',
    restart: 'Начать заново', exit: 'Выйти в меню', pause: 'Пауза', lockTitle: 'Дальше — только по промокоду',
    lockText: 'Вы прошли 2 бесплатные главы. Для доступа ко всем главам активируйте VIP-статус.',
    goToChannel: 'Перейти в канал', enterPromo: 'Ввести промокод', toMenu: 'В меню',
    wallet: 'Кошелек для поддержки', copy: 'Копировать', copied: 'Скопировано',
    soon: 'Скоро', thanks: 'Спасибо', wisdomClose: 'Далее', destinyStart: 'Начать предсказание', destinyRestart: 'Пройти заново',
    riddleEnter: 'Войти в Лабиринт', riddleReady: 'Готов начать? Лабиринт ждет.', riddleRules1: 'Один за другим: новая загадка откроется только после ответа на предыдущую.',
    riddleRules2: 'Не спеши: размышляй столько, сколько нужно.', riddleRules3: 'Помощь: две подсказки или открытый ответ.',
    lookAnswer: 'Посмотреть ответ', answerConfirm: 'Уверены, что хотите открыть ответ?', backToRiddle: 'Назад к загадке',
    yesOpen: 'Да, открыть', goFurther: 'Идти дальше', riddleComplete: 'Поздравляем', riddleCompleteText: 'Ты прошел Лабиринт Загадок! Древние стены расступились.',
    fateComplete: 'Хроники Судьбы завершены', fateCompleteText: 'Все дилеммы пройдены. Новые появятся в обновлениях.',
    fateTgText: 'Другие дилеммы ждут тебя в Telegram канале',
    aboutText1: 'Your Destiny — интерактивная визуальная новелла, где каждое решение меняет ход истории.',
    aboutText2: 'Интерактивные истории с множеством разветвлений.', aboutText3: 'Хроники Судьбы — психологические дилеммы.',
    aboutText4: 'Лабиринт Загадок — десять сложнейших загадок.', aboutText5: 'Истинная Судьба — тест из вопросов о прошлых жизнях.',
    aboutText6: 'Мудрость Судьбы — ежедневные цитаты.', termsTitle: 'Условия использования', privacyTitle: 'Политика конфиденциальности',
    stepIntoUnknown: 'Шагнуть в неизвестность...', hint: 'Подсказка', hintUsed: 'Использовано',
    destinyResultTitle: 'Твоя Истинная Судьба', destinyResultDesc: 'Архетип раскрыт', destinyRestartBtn: 'Пройти заново',
    empty: 'Пока пусто...', timeCapsuleTitle: 'Капсула Времени', timeCapsuleDesc: 'Вы впервые запустили Your Destiny на этом устройстве:',
    rateTitle: 'Оценить YOUR DESTINY', rateThanks: 'Спасибо за вашу оценку!', rate5: 'Потрясающе! Ваша максимальная оценка вдохновляет нас творить дальше. Вы — часть нашей вселенной. Ждем вас в официальном Telegram-канале Your Destiny!',
    rate4: 'Прекрасный результат! Нам чуть-чуть не хватило до идеала, но мы это исправим. Заглядывайте в наш Telegram-канал, там мы регулярно делимся дневниками разработки и спойлерами!',
    rate3: 'Нейтральная оценка — отличный повод для роста! Прямо сейчас мы создаем первые интерактивные истории, чтобы сделать Your Destiny намного интереснее. Следите за обновлениями в нашем Telegram.',
    rate2: 'Спасибо за критику! Мы видим, что приложению есть куда расти. Если у вас есть конкретные замечания по интерфейсу или концепции — поделитесь ими в чате нашего канала.',
    rate1: 'Нам искренне жаль, что проект не оправдал ваших ожиданий. Мы только начинаем свой путь и будем усердно работать над улучшением Your Destiny. Напишите нам в Telegram, что именно пошло не так.',
    supportCrypto: 'Криптосеть', supportToken: 'Токен актива', supportAddress: 'Адрес\nплатежа', supportCopy: 'Копировать',
    supportDesc: 'Your Destiny — независимый некоммерческий проект, созданный с страстью и заботой. Если вы желаете поддержать его дальнейшее развитие, вы можете сделать полностью добровольное краудфандинговое пожертвование. Каждый перевод помогает сохранять космос живым и воплощать в жизнь новые истории, персонажей и миры. Это не оплата за товары или услуги — это добровольный дар независимому создателю.',
    becomeAuthorTitle: 'Стать Автором', becomeAuthorLegal: 'Юридическое уведомление: Отправляя любой сюжет, сценарий или творческий материал, вы добровольно и безвозвратно передаете все мировые права интеллектуальной собственности для неограниченного коммерческого использования без каких-либо роялти или вознаграждений. Материалы становятся единоличной собственностью проекта.',
    becomeAuthorConfirm: 'Я понимаю — Продолжить', becomeAuthorDirect: 'Написать в Директ',
    becomeAuthorDirectDesc: 'Отправьте свой сюжет, сценарий или идею нам в Директ. Мы внимательно читаем каждое сообщение. Ваша история может стать частью вселенной Your Destiny.',
    openDirect: 'Открыть Директ в Telegram',
    scheduleTitle: 'Расписание Историй', scheduleDesc: 'Грядущие миры, синопсисы будущих историй и точные даты релизов новых глав Your Destiny.',
    scheduleEmpty: 'Грядущие миры, синопсисы будущих историй и точные даты релизов новых глав Your Destiny.',
    hintConfirmTitle: 'Открыть подсказку?', hintConfirmText: 'Точно ли хотите открыть подсказку?',
    riddleRestart: 'Начать заново'
  },
  en: {
    appTitle: 'YOUR DESTINY', novels: 'Novels', surveys: 'Surveys', contacts: 'Contacts', favorites: 'Favorites', settings: 'Settings',
    loading: 'Loading stories...', emptyNovels: 'Stories coming soon...', emptySurveys: 'Surveys in development...', emptyContacts: 'Contacts in development...', emptyFavorites: 'Your cherished moments will appear here...',
    music: 'Music', theme: 'Theme Color', language: 'Language', promo: 'Promo Code', activate: 'Activate', promoPlaceholder: 'Enter promo code...',
    promoHint: 'Find promo codes in our Telegram channel', vipStatus: 'VIP Status', freeVersion: 'Free Version', vipActive: 'VIP Active',
    timeLeft: 'Time left', days: 'd', hours: 'h', minutes: 'm', timeCapsule: 'Time Capsule', rateApp: 'Rate App',
    storySchedule: 'Story Schedule', supportAuthor: 'Support Author', becomeAuthor: 'Become an Author', wisdom: 'Wisdom of Fate',
    chronicles: 'Chronicles of Fate', labyrinth: 'Labyrinth of Riddles', trueDestiny: 'What is Your True Destiny?', about: 'About',
    terms: 'Terms of Use', privacy: 'Privacy Policy', community: 'Community Channel',
    back: 'Back', close: 'Close', continue: 'Continue', next: 'Next',
    restart: 'Restart', exit: 'Exit to Menu', pause: 'Pause', lockTitle: 'VIP Required',
    lockText: 'You have completed 2 free chapters. Activate VIP to access all chapters.',
    goToChannel: 'Go to Channel', enterPromo: 'Enter Promo Code', toMenu: 'To Menu',
    wallet: 'Support Wallet', copy: 'Copy', copied: 'Copied',
    soon: 'Soon', thanks: 'Thanks', wisdomClose: 'Next', destinyStart: 'Start Prediction', destinyRestart: 'Retake',
    riddleEnter: 'Enter Labyrinth', riddleReady: 'Ready? The Labyrinth awaits.', riddleRules1: 'One by one: each riddle unlocks only after the previous answer.',
    riddleRules2: 'Take your time: think as long as you need.', riddleRules3: 'Help: two hints or reveal the answer.',
    lookAnswer: 'Reveal Answer', answerConfirm: 'Are you sure you want to reveal the answer?', backToRiddle: 'Back to Riddle',
    yesOpen: 'Yes, reveal', goFurther: 'Go Further', riddleComplete: 'Congratulations', riddleCompleteText: 'You have conquered the Labyrinth of Riddles!',
    fateComplete: 'Chronicles Completed', fateCompleteText: 'All dilemmas completed. New ones will appear in updates.',
    fateTgText: 'More dilemmas await you in our Telegram channel',
    aboutText1: 'Your Destiny is an interactive visual novel where every decision changes the story.',
    aboutText2: 'Interactive stories with multiple branches.', aboutText3: 'Chronicles of Fate — psychological dilemmas.',
    aboutText4: 'Labyrinth of Riddles — ten challenging puzzles.', aboutText5: 'True Destiny — a test about past lives.',
    aboutText6: 'Wisdom of Fate — daily quotes.', termsTitle: 'Terms of Use', privacyTitle: 'Privacy Policy',
    stepIntoUnknown: 'Step into the unknown...', hint: 'Hint', hintUsed: 'Used',
    destinyResultTitle: 'Your True Destiny', destinyResultDesc: 'Archetype revealed', destinyRestartBtn: 'Retake',
    empty: 'Empty for now...', timeCapsuleTitle: 'Time Capsule', timeCapsuleDesc: 'You first launched Your Destiny on this device:',
    rateTitle: 'Rate YOUR DESTINY', rateThanks: 'Thank you for your rating!', rate5: 'Amazing! Your maximum rating inspires us to keep creating. You are part of our universe. We await you in the official Your Destiny Telegram channel!',
    rate4: 'Great result! We were just a little short of perfect, but we will fix it. Check out our Telegram channel, where we regularly share development diaries and spoilers!',
    rate3: 'A neutral rating is a great reason to grow! Right now we are creating the first interactive stories to make Your Destiny much more interesting. Follow updates in our Telegram.',
    rate2: 'Thank you for the criticism! We see that the app has room to grow. If you have specific comments on the interface or concept — share them in our channel chat.',
    rate1: 'We are truly sorry that the project did not meet your expectations. We are just beginning our journey and will work hard to improve Your Destiny. Write to us on Telegram about what went wrong.',
    supportCrypto: 'Network', supportToken: 'Asset Token', supportAddress: 'Payment\nAddress', supportCopy: 'Copy',
    supportDesc: 'Your Destiny is an independent non-commercial project created with passion and care. If you wish to support its further development, you can make a fully voluntary crowdfunding donation. Every transfer helps keep the cosmos alive and bring new stories, characters and worlds to life. This is not payment for goods or services — it is a voluntary gift to an independent creator.',
    becomeAuthorTitle: 'Become an Author', becomeAuthorLegal: 'Legal Notice: By submitting any plot, script or creative material, you voluntarily and irrevocably transfer all worldwide intellectual property rights for unlimited commercial use without any royalties or compensation. Materials become the sole property of the project.',
    becomeAuthorConfirm: 'I understand — Continue', becomeAuthorDirect: 'Write in Direct',
    becomeAuthorDirectDesc: 'Send your plot, script or idea to us in Direct. We carefully read every message. Your story may become part of the Your Destiny universe.',
    openDirect: 'Open Direct in Telegram',
    scheduleTitle: 'Story Schedule', scheduleDesc: 'Upcoming worlds, synopses of future stories and exact release dates of new Your Destiny chapters.',
    scheduleEmpty: 'Upcoming worlds, synopses of future stories and exact release dates of new Your Destiny chapters.',
    hintConfirmTitle: 'Open hint?', hintConfirmText: 'Are you sure you want to open the hint?',
    riddleRestart: 'Start Over'
  },
  es: {
    appTitle: 'YOUR DESTINY', novels: 'Novelas', surveys: 'Encuestas', contacts: 'Contactos', favorites: 'Favoritos', settings: 'Ajustes',
    loading: 'Cargando historias...', emptyNovels: 'Las historias llegaran pronto...', emptySurveys: 'Encuestas en desarrollo...', emptyContacts: 'Contactos en desarrollo...', emptyFavorites: 'Tus momentos especiales apareceran aqui...',
    music: 'Musica', theme: 'Color del Tema', language: 'Idioma', promo: 'Codigo Promocional', activate: 'Activar', promoPlaceholder: 'Introduce el codigo...',
    promoHint: 'Encuentra codigos en nuestro canal de Telegram', vipStatus: 'Estado VIP', freeVersion: 'Version Gratuita', vipActive: 'VIP Activo',
    timeLeft: 'Tiempo restante', days: 'd', hours: 'h', minutes: 'm', timeCapsule: 'Capsula del Tiempo', rateApp: 'Valorar App',
    storySchedule: 'Calendario de Historias', supportAuthor: 'Apoyar al Autor', becomeAuthor: 'Ser Autor', wisdom: 'Sabiduria del Destino',
    chronicles: 'Cronicas del Destino', labyrinth: 'Laberinto de Acertijos', trueDestiny: 'Cual es tu Verdadero Destino?', about: 'Acerca de',
    terms: 'Terminos de Uso', privacy: 'Politica de Privacidad', community: 'Canal de la Comunidad',
    back: 'Atras', close: 'Cerrar', continue: 'Continuar', next: 'Siguiente',
    restart: 'Reiniciar', exit: 'Salir al Menu', pause: 'Pausa', lockTitle: 'Se Requiere VIP',
    lockText: 'Has completado 2 capitulos gratuitos. Activa VIP para acceder a todos.',
    goToChannel: 'Ir al Canal', enterPromo: 'Introducir Codigo', toMenu: 'Al Menu',
    wallet: 'Billetera de Apoyo', copy: 'Copiar', copied: 'Copiado',
    soon: 'Pronto', thanks: 'Gracias', wisdomClose: 'Siguiente', destinyStart: 'Iniciar Prediccion', destinyRestart: 'Repetir',
    riddleEnter: 'Entrar al Laberinto', riddleReady: 'Listo? El Laberinto te espera.', riddleRules1: 'Uno por uno: cada acertijo se desbloquea tras resolver el anterior.',
    riddleRules2: 'Tomate tu tiempo: piensa todo lo que necesites.', riddleRules3: 'Ayuda: dos pistas o revelar la respuesta.',
    lookAnswer: 'Revelar Respuesta', answerConfirm: 'Seguro que quieres revelar la respuesta?', backToRiddle: 'Volver al Acertijo',
    yesOpen: 'Si, revelar', goFurther: 'Continuar', riddleComplete: 'Felicidades', riddleCompleteText: 'Has conquistado el Laberinto de Acertijos!',
    fateComplete: 'Cronicas Completadas', fateCompleteText: 'Todos los dilemas completados. Nuevos llegaran en actualizaciones.',
    fateTgText: 'Mas dilemas te esperan en nuestro canal de Telegram',
    aboutText1: 'Your Destiny es una novela visual interactiva donde cada decision cambia la historia.',
    aboutText2: 'Historias interactivas con multiples ramificaciones.', aboutText3: 'Cronicas del Destino — dilemas psicologicos.',
    aboutText4: 'Laberinto de Acertijos — diez desafiantes puzzles.', aboutText5: 'Destino Verdadero — una prueba sobre vidas pasadas.',
    aboutText6: 'Sabiduria del Destino — citas diarias.', termsTitle: 'Terminos de Uso', privacyTitle: 'Politica de Privacidad',
    stepIntoUnknown: 'Dar el paso hacia lo desconocido...', hint: 'Pista', hintUsed: 'Usado',
    destinyResultTitle: 'Tu Verdadero Destino', destinyResultDesc: 'Arquetipo revelado', destinyRestartBtn: 'Repetir',
    empty: 'Vacio por ahora...', timeCapsuleTitle: 'Capsula del Tiempo', timeCapsuleDesc: 'Primera vez que lanzaste Your Destiny en este dispositivo:',
    rateTitle: 'Valorar YOUR DESTINY', rateThanks: 'Gracias por tu valoracion!', rate5: '¡Increible! Tu valoracion maxima nos inspira a seguir creando. Eres parte de nuestro universo. ¡Te esperamos en el canal oficial de Your Destiny en Telegram!',
    rate4: '¡Gran resultado! Nos falto poco para la perfeccion, pero lo arreglaremos. ¡Echa un vistazo a nuestro canal de Telegram, donde compartimos regularmente diarios de desarrollo y spoilers!',
    rate3: '¡Una valoracion neutral es una gran razon para crecer! Ahora mismo estamos creando las primeras historias interactivas para hacer Your Destiny mucho mas interesante. Sigue las actualizaciones en nuestro Telegram.',
    rate2: '¡Gracias por la critica! Vemos que la aplicacion tiene margen de mejora. Si tienes comentarios especificos sobre la interfaz o el concepto, compartelos en el chat de nuestro canal.',
    rate1: 'Sentimos mucho que el proyecto no haya cumplido tus expectativas. Acabamos de empezar nuestro camino y trabajaremos duro para mejorar Your Destiny. Escribenos por Telegram sobre que salio mal.',
    supportCrypto: 'Red', supportToken: 'Token de Activo', supportAddress: 'Direccion de\nPago', supportCopy: 'Copiar',
    supportDesc: 'Your Destiny es un proyecto independiente no comercial creado con pasion y cuidado. Si deseas apoyar su desarrollo futuro, puedes hacer una donacion de crowdfunding totalmente voluntaria. Cada transferencia ayuda a mantener vivo el cosmos y dar vida a nuevas historias, personajes y mundos. Esto no es un pago por bienes o servicios, es un regalo voluntario a un creador independiente.',
    becomeAuthorTitle: 'Ser Autor', becomeAuthorLegal: 'Aviso Legal: Al enviar cualquier trama, guion o material creativo, transfieres voluntaria e irrevocablemente todos los derechos de propiedad intelectual mundiales para uso comercial ilimitado sin regalias ni compensacion. Los materiales pasan a ser propiedad exclusiva del proyecto.',
    becomeAuthorConfirm: 'Entiendo — Continuar', becomeAuthorDirect: 'Escribir en Directo',
    becomeAuthorDirectDesc: 'Envia tu trama, guion o idea a nuestro Directo. Leemos cuidadosamente cada mensaje. Tu historia puede convertirse en parte del universo Your Destiny.',
    openDirect: 'Abrir Directo en Telegram',
    scheduleTitle: 'Calendario de Historias', scheduleDesc: 'Proximos mundos, sinopsis de futuras historias y fechas exactas de lanzamiento de nuevos capitulos de Your Destiny.',
    scheduleEmpty: 'Proximos mundos, sinopsis de futuras historias y fechas exactas de lanzamiento de nuevos capitulos de Your Destiny.',
    hintConfirmTitle: 'Abrir pista?', hintConfirmText: 'Estas seguro de que quieres abrir la pista?',
    riddleRestart: 'Empezar de Nuevo'
  }
};

function t(key) { return T[currentLang][key] || key; }

const THEMES = [
  { id: 'purple', name: { ru: 'Королевский Пурпур', en: 'Royal Purple', es: 'Purpura Real' }, grad: 'linear-gradient(135deg,#5a268b,#2e1a4a)' },
  { id: 'sapphire', name: { ru: 'Полночный Сапфир', en: 'Midnight Sapphire', es: 'Zafiro de Medianoche' }, grad: 'linear-gradient(135deg,#264e8b,#1a2f4a)' },
  { id: 'crimson', name: { ru: 'Багровый Занавес', en: 'Crimson Curtain', es: 'Telon Carmesi' }, grad: 'linear-gradient(135deg,#8b2635,#4a1515)' },
  { id: 'emerald', name: { ru: 'Изумрудный Лес', en: 'Emerald Forest', es: 'Bosque Esmeralda' }, grad: 'linear-gradient(135deg,#2d6a27,#1a3a1a)' },
  { id: 'amber', name: { ru: 'Янтарные Сумерки', en: 'Amber Twilight', es: 'Crepusculo Ambar' }, grad: 'linear-gradient(135deg,#b8860b,#8b6914)' },
  { id: 'kaleidoscope', name: { ru: 'Калейдоскоп', en: 'Kaleidoscope', es: 'Caleidoscopio' }, grad: 'linear-gradient(135deg,#ff006e,#8338ec,#3a86ff,#06ffa5,#ffbe0b)' }
];

// ---------- Инициализация ----------
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  const detected = detectLanguage();
  currentLang = localStorage.getItem('lang') || detected;
  currentTheme = localStorage.getItem('theme') || 'purple';
  initParticles();
  initNavigation();
  initIntro();
  initMusic();
  loadSettings();
  renderThemeColors();
  updateLanguageUI();
  saveFirstLaunch();
});

function saveFirstLaunch() {
  if (!localStorage.getItem('first_launch')) {
    localStorage.setItem('first_launch', new Date().toISOString());
  }
}

function getFirstLaunchDate() {
  const raw = localStorage.getItem('first_launch');
  if (!raw) return null;
  const d = new Date(raw);
  if (currentLang === 'ru') {
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} г. в ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  } else if (currentLang === 'es') {
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()} a las ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  } else {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} at ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  }
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
  let hue = 0;
  function animate() {
    if (!visualEffectsEnabled) { requestAnimationFrame(animate); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isKaleidoscope = currentTheme === 'kaleidoscope';
    if (isKaleidoscope) hue = (hue + 0.3) % 360;
    particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      if (isKaleidoscope) {
        ctx.fillStyle = `hsla(${hue + p.x % 60}, 80%, 60%, ${p.opacity})`;
      } else {
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      }
      ctx.fill();
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
    status.textContent = currentLang === 'ru' ? 'Неверный промокод' : currentLang === 'en' ? 'Invalid code' : 'Codigo invalido';
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
const FATE_DILEMMAS = [
  {
    question: { ru: "Перед тобой две двери. За одной — безопасная, но предсказуемая жизнь. За другой — неизвестность, полная чудес и опасностей. Что выберешь?", en: "Two doors stand before you. Behind one — a safe but predictable life. Behind the other — unknown wonders and dangers. Which do you choose?", es: "Dos puertas ante ti. Detras de una — vida segura pero predecible. Detras de la otra — maravillas y peligros desconocidos. Cual eliges?" },
    a: { ru: "Безопасность", en: "Safety", es: "Seguridad" },
    b: { ru: "Неизвестность", en: "The Unknown", es: "Lo Desconocido" },
    stats: { a: 41.3, b: 58.7 },
    analysis: { ru: "Ты — искатель. Твое сердце тянется к горизонтам, которые еще не нарисованы.", en: "You are a seeker. Your heart is drawn to horizons not yet drawn.", es: "Eres un buscador. Tu corazon se siente atraido por horizontes aun no dibujados." }
  },
  {
    question: { ru: "Волшебник предлагает один дар: читать мысли или стирать воспоминания. Что возьмешь?", en: "A wizard offers one gift: read minds or erase memories. What do you take?", es: "Un mago ofrece un don: leer mentes o borrar recuerdos. Que tomas?" },
    a: { ru: "Читать мысли", en: "Read minds", es: "Leer mentes" },
    b: { ru: "Стирать воспоминания", en: "Erase memories", es: "Borrar recuerdos" },
    stats: { a: 62.9, b: 37.1 },
    analysis: { ru: "Желание видеть скрытое — величайшее проклятие. Ты готов к правде.", en: "The desire to see the hidden is the greatest curse. You are ready for truth.", es: "El deseo de ver lo oculto es la mayor maldicion. Estas listo para la verdad." }
  },
  {
    question: { ru: "Ты можешь спасти одного: незнакомого гения или свою мать. Кого спасешь?", en: "You can save one: a stranger genius or your mother. Who do you save?", es: "Puedes salvar a uno: un genio desconocido o tu madre. A quien salvas?" },
    a: { ru: "Гения", en: "The genius", es: "Al genio" },
    b: { ru: "Мать", en: "My mother", es: "A mi madre" },
    stats: { a: 29.8, b: 70.2 },
    analysis: { ru: "Сердце побеждает разум. Ты выбираешь любовь перед величием.", en: "Heart defeats mind. You choose love over greatness.", es: "El corazon vence a la mente. Elijes el amor sobre la grandeza." }
  },
  {
    question: { ru: "Тебе предложили вечную жизнь без смерти. Принимаешь?", en: "You are offered eternal life without death. Do you accept?", es: "Te ofrecen vida eterna sin muerte. Aceptas?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 35.4, b: 64.6 },
    analysis: { ru: "Ты ценишь конечность. Именно она делает каждый момент бесценным.", en: "You value finitude. It is what makes every moment priceless.", es: "Valoras la finitud. Es lo que hace que cada momento no tenga precio." }
  },
  {
    question: { ru: "Ты можешь вернуться в прошлое и изменить одно решение. Сделаешь это?", en: "You can go back and change one decision. Will you do it?", es: "Puedes volver atras y cambiar una decision. Lo haras?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 54.6, b: 45.4 },
    analysis: { ru: "Желание исправить прошлое естественно. Но ошибки сделали тебя тем, кто ты есть.", en: "The desire to fix the past is natural. But mistakes made you who you are.", es: "El deseo de arreglar el pasado es natural. Pero los errores te hicieron quien eres." }
  },
  {
    question: { ru: "Ты нашел кошелек с большой суммой. Внутри есть данные владельца. Что сделаешь?", en: "You found a wallet with a large sum. Inside is the owner's info. What will you do?", es: "Encontraste una billetera con una gran suma. Dentro esta la informacion del dueno. Que haras?" },
    a: { ru: "Верну владельцу", en: "Return to owner", es: "Devolver al dueno" },
    b: { ru: "Оставлю себе", en: "Keep it", es: "Quedarmela" },
    stats: { a: 78.2, b: 21.8 },
    analysis: { ru: "Честность — твой компас. Даже перед искушением ты остаешься верен себе.", en: "Honesty is your compass. Even before temptation you remain true to yourself.", es: "La honestidad es tu brujula. Incluso ante la tentacion te mantienes fiel a ti mismo." }
  },
  {
    question: { ru: "Ты можешь стать невидимым на один день. Как используешь эту силу?", en: "You can become invisible for one day. How will you use this power?", es: "Puedes volverte invisible por un dia. Como usaras este poder?" },
    a: { ru: "Узнаю тайны", en: "Learn secrets", es: "Aprender secretos" },
    b: { ru: "Помогу людям", en: "Help people", es: "Ayudar a la gente" },
    stats: { a: 45.1, b: 54.9 },
    analysis: { ru: "Твоя доброта сильнее любопытства. Ты — тот, кто делает мир лучше.", en: "Your kindness is stronger than curiosity. You are the one who makes the world better.", es: "Tu bondad es mas fuerte que la curiosidad. Eres quien hace del mundo un lugar mejor." }
  },
  {
    question: { ru: "Тебе предложили работу мечты, но придется переехать в другую страну и оставить семью. Согласишься?", en: "You are offered your dream job, but must move to another country and leave family. Will you agree?", es: "Te ofrecen el trabajo de tus suenos, pero debes mudarte a otro pais y dejar a tu familia. Aceptaras?" },
    a: { ru: "Соглашусь", en: "I will agree", es: "Aceptare" },
    b: { ru: "Останусь", en: "I will stay", es: "Me quedare" },
    stats: { a: 38.7, b: 61.3 },
    analysis: { ru: "Семья — твой якорь. Ты понимаешь, что настоящее счастье рядом с близкими.", en: "Family is your anchor. You understand that true happiness is with loved ones.", es: "La familia es tu ancla. Entiendes que la verdadera felicidad esta con los seres queridos." }
  },
  {
    question: { ru: "Ты можешь узнать дату своей смерти. Хочешь знать?", en: "You can learn the date of your death. Do you want to know?", es: "Puedes saber la fecha de tu muerte. Quieres saberla?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 42.5, b: 57.5 },
    analysis: { ru: "Ты предпочитаешь жить настоящим, а не тенью будущего.", en: "You prefer to live in the present, not the shadow of the future.", es: "Prefieres vivir el presente, no la sombra del futuro." }
  },
  {
    question: { ru: "Ты выиграл в лотерею. Как распорядишься деньгами?", en: "You won the lottery. How will you spend the money?", es: "Ganaste la loteria. Como gastaras el dinero?" },
    a: { ru: "Потрачу на себя", en: "Spend on myself", es: "Gastarlo en mi" },
    b: { ru: "Помогу другим", en: "Help others", es: "Ayudar a otros" },
    stats: { a: 31.4, b: 68.6 },
    analysis: { ru: "Щедрость — твоя сущность. Ты веришь, что богатство обретает смысл в делении.", en: "Generosity is your essence. You believe wealth finds meaning in sharing.", es: "La generosidad es tu esencia. Crees que la riqueza encuentra sentido en compartir." }
  },
  {
    question: { ru: "Ты можешь стать самым богатым человеком, но потеряешь всех друзей. Согласен?", en: "You can become the richest person, but will lose all friends. Agree?", es: "Puedes convertirte en la persona mas rica, pero perderas a todos tus amigos. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 12.3, b: 87.7 },
    analysis: { ru: "Дружба для тебя бесценна. Ты знаешь, что одиночество не купишь за золото.", en: "Friendship is priceless to you. You know loneliness cannot be bought with gold.", es: "La amistad no tiene precio para ti. Sabes que la soledad no se compra con oro." }
  },
  {
    question: { ru: "Ты видишь, как кто-то обижает слабого. Вмешаешься?", en: "You see someone bullying the weak. Will you intervene?", es: "Ves a alguien molestando al debil. Intervendras?" },
    a: { ru: "Вмешаюсь", en: "I will intervene", es: "Intervendre" },
    b: { ru: "Пройду мимо", en: "Walk past", es: "Pasar de largo" },
    stats: { a: 81.5, b: 18.5 },
    analysis: { ru: "Справедливость горит в тебе огнем. Ты не можешь остаться равнодушным.", en: "Justice burns in you like fire. You cannot remain indifferent.", es: "La justicia arde en ti como fuego. No puedes permanecer indiferente." }
  },
  {
    question: { ru: "Ты можешь получить суперсилу, но каждый раз при ее использовании теряешь год жизни. Возьмешь?", en: "You can get superpowers, but each use costs you a year of life. Will you take it?", es: "Puedes obtener superpoderes, pero cada uso te cuesta un ano de vida. Lo tomaras?" },
    a: { ru: "Возьму", en: "I will take it", es: "Lo tomare" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 28.9, b: 71.1 },
    analysis: { ru: "Ты ценишь каждый момент жизни. Сила не стоит такой цены.", en: "You value every moment of life. Power is not worth such a price.", es: "Valoras cada momento de la vida. El poder no vale tal precio." }
  },
  {
    question: { ru: "Тебе предложили стать правителем мира, но ты никогда не сможешь улыбаться. Согласен?", en: "You are offered to become ruler of the world, but you can never smile. Agree?", es: "Te ofrecen convertirte en gobernante del mundo, pero nunca podras sonreir. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 8.4, b: 91.6 },
    analysis: { ru: "Радость важнее власти. Ты выбираешь свет даже в простых вещах.", en: "Joy is more important than power. You choose light even in simple things.", es: "La alegria es mas importante que el poder. Elijes la luz incluso en las cosas simples." }
  },
  {
    question: { ru: "Ты можешь запомнить всё, что прочитаешь, но забудешь все детство. Согласен?", en: "You can remember everything you read, but will forget all childhood. Agree?", es: "Puedes recordar todo lo que lees, pero olvidaras toda tu infancia. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 22.6, b: 77.4 },
    analysis: { ru: "Корни важнее кроны. Ты хранишь память о том, кем ты стал.", en: "Roots are more important than the crown. You keep the memory of who you became.", es: "Las raices son mas importantes que la corona. Guardas la memoria de quien te convertiste." }
  },
  {
    question: { ru: "Ты нашел карту сокровищ, но она ведет в опасное место. Отправишься?", en: "You found a treasure map, but it leads to a dangerous place. Will you go?", es: "Encontraste un mapa del tesoro, pero conduce a un lugar peligroso. Irias?" },
    a: { ru: "Отправлюсь", en: "I will go", es: "Iria" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 56.3, b: 43.7 },
    analysis: { ru: "Приключения зовут тебя. Ты не боишься риска ради великого.", en: "Adventures call to you. You are not afraid of risk for greatness.", es: "Las aventuras te llaman. No tienes miedo al riesgo por la grandeza." }
  },
  {
    question: { ru: "Ты можешь исцелить любого больного, но каждое исцеление отнимет у тебя месяц жизни. Будешь лечить?", en: "You can heal any sick person, but each healing costs you a month of life. Will you heal?", es: "Puedes sanar a cualquier enfermo, pero cada sanacion te cuesta un mes de vida. Sanaras?" },
    a: { ru: "Буду", en: "I will", es: "Sanare" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 65.8, b: 34.2 },
    analysis: { ru: "Сострадание — твоя истинная сила. Ты готов жертвовать ради других.", en: "Compassion is your true strength. You are ready to sacrifice for others.", es: "La compasion es tu verdadera fuerza. Estas listo para sacrificarte por otros." }
  },
  {
    question: { ru: "Ты можешь жить в виртуальном раю, забыв о реальности. Войдешь?", en: "You can live in a virtual paradise, forgetting reality. Will you enter?", es: "Puedes vivir en un paraiso virtual, olvidando la realidad. Entraras?" },
    a: { ru: "Войду", en: "I will enter", es: "Entrare" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 18.7, b: 81.3 },
    analysis: { ru: "Реальность для тебя священна. Ты не бежишь от жизни, а принимаешь ее.", en: "Reality is sacred to you. You do not run from life, you accept it.", es: "La realidad es sagrada para ti. No huyes de la vida, la aceptas." }
  },
  {
    question: { ru: "Ты можешь стать знаменитым, но твоя личная жизнь станет достоянием общественности. Согласен?", en: "You can become famous, but your personal life will become public. Agree?", es: "Puedes hacerte famoso, pero tu vida personal se volvera publica. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 24.1, b: 75.9 },
    analysis: { ru: "Приватность — твоя крепость. Ты ценишь тишину больше аплодисментов.", en: "Privacy is your fortress. You value silence more than applause.", es: "La privacidad es tu fortaleza. Valoras el silencio mas que los aplausos." }
  },
  {
    question: { ru: "Ты можешь говорить со всеми животными, но люди перестанут тебя понимать. Согласен?", en: "You can speak with all animals, but people will stop understanding you. Agree?", es: "Puedes hablar con todos los animales, pero la gente dejara de entenderte. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 15.2, b: 84.8 },
    analysis: { ru: "Связь с людьми для тебя важнее любого дара. Ты — часть человечества.", en: "Connection with people is more important than any gift. You are part of humanity.", es: "La conexion con la gente es mas importante que cualquier don. Eres parte de la humanidad." }
  },
  {
    question: { ru: "Ты можешь остановить время, но каждый раз стареешь на год. Будешь использовать?", en: "You can stop time, but age a year each time. Will you use it?", es: "Puedes detener el tiempo, pero envejeces un ano cada vez. Lo usaras?" },
    a: { ru: "Использовать", en: "Use it", es: "Usarlo" },
    b: { ru: "Не буду", en: "I won't", es: "No lo usare" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты выбираешь естественный ход времени. Красота жизни — в ее неповторимости.", en: "You choose the natural flow of time. The beauty of life is in its uniqueness.", es: "Elijes el flujo natural del tiempo. La belleza de la vida esta en su singularidad." }
  },
  {
    question: { ru: "Ты нашел волшебную лампу, но джинн предложит только одно желание. Что выберешь: любовь или богатство?", en: "You found a magic lamp, but the genie offers only one wish. What do you choose: love or wealth?", es: "Encontraste una lampara magica, pero el genio ofrece solo un deseo. Que eliges: amor o riqueza?" },
    a: { ru: "Любовь", en: "Love", es: "Amor" },
    b: { ru: "Богатство", en: "Wealth", es: "Riqueza" },
    stats: { a: 78, b: 22 },
    analysis: { ru: "Сердце знает истину. Любовь — единственное богатство, которое нельзя потерять.", en: "The heart knows the truth. Love is the only wealth that cannot be lost.", es: "El corazon conoce la verdad. El amor es la unica riqueza que no se puede perder." }
  },
  {
    question: { ru: "Ты можешь стать невидимым или летать. Что выберешь?", en: "You can become invisible or fly. What do you choose?", es: "Puedes volverte invisible o volar. Que eliges?" },
    a: { ru: "Невидимость", en: "Invisibility", es: "Invisibilidad" },
    b: { ru: "Полет", en: "Flight", es: "Vuelo" },
    stats: { a: 42, b: 58 },
    analysis: { ru: "Свобода для тебя выше тайны. Ты хочешь касаться неба, а не прятаться в тени.", en: "Freedom is higher than secrecy for you. You want to touch the sky, not hide in shadows.", es: "La libertad es mas alta que el secreto para ti. Quieres tocar el cielo, no esconderte en las sombras." }
  },
  {
    question: { ru: "Ты можешь вернуться к одному моменту из прошлого. Какому?", en: "You can return to one moment from the past. Which one?", es: "Puedes volver a un momento del pasado. A cual?" },
    a: { ru: "Детству", en: "Childhood", es: "Infancia" },
    b: { ru: "Прощанию", en: "A farewell", es: "Una despedida" },
    stats: { a: 54, b: 46 },
    analysis: { ru: "Тоска по невинности говорит о твоей глубине. Ты хранишь свет тех дней.", en: "Nostalgia for innocence speaks of your depth. You keep the light of those days.", es: "La nostalgia por la inocencia habla de tu profundidad. Guardas la luz de aquellos dias." }
  },
  {
    question: { ru: "Ты можешь знать будущее своих близких. Хочешь?", en: "You can know the future of your loved ones. Do you want to?", es: "Puedes saber el futuro de tus seres queridos. Quieres?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 31, b: 69 },
    analysis: { ru: "Ты уважаешь чужую судьбу. Некоторые тайны должны оставаться нетронутыми.", en: "You respect others' fate. Some secrets must remain untouched.", es: "Respetas el destino de los demas. Algunos secretos deben permanecer intactos." }
  },
  {
    question: { ru: "Ты можешь стать лучшим в мире в одном деле, но никогда не сможешь заниматься другим. Что выберешь?", en: "You can become the best in the world at one thing, but never do another. What do you choose?", es: "Puedes convertirte en el mejor del mundo en una cosa, pero nunca hacer otra. Que eliges?" },
    a: { ru: "Искусство", en: "Art", es: "Arte" },
    b: { ru: "Наука", en: "Science", es: "Ciencia" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Разум побеждает. Ты веришь, что знание — ключ к пониманию вселенной.", en: "Mind wins. You believe knowledge is the key to understanding the universe.", es: "La mente gana. Crees que el conocimiento es la clave para entender el universo." }
  },
  {
    question: { ru: "Ты можешь прожить жизнь заново с сохранением памяти. Согласен?", en: "You can live life again keeping your memory. Agree?", es: "Puedes vivir la vida de nuevo conservando tu memoria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 61, b: 39 },
    analysis: { ru: "Ты хочешь исправить ошибки, но понимаешь, что они — твои учителя.", en: "You want to fix mistakes, but understand they are your teachers.", es: "Quieres corregir errores, pero entiendes que son tus maestros." }
  },
  {
    question: { ru: "Ты можешь говорить только правду один год. Согласен?", en: "You can speak only the truth for one year. Agree?", es: "Puedes hablar solo la verdad por un ano. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Ты ценишь дипломатию. Иногда молчание добрее правды.", en: "You value diplomacy. Sometimes silence is kinder than truth.", es: "Valoras la diplomacia. A veces el silencio es mas amable que la verdad." }
  },
  {
    question: { ru: "Ты можешь получить дом мечты, но он будет в пустыне. Согласен?", en: "You can get your dream house, but it will be in a desert. Agree?", es: "Puedes obtener la casa de tus suenos, pero estara en un desierto. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 19, b: 81 },
    analysis: { ru: "Общество важнее стен. Ты не готов обменять людей на комфорт.", en: "Society is more important than walls. You are not ready to trade people for comfort.", es: "La sociedad es mas importante que las paredes. No estas listo para cambiar gente por comodidad." }
  },
  {
    question: { ru: "Ты можешь стать молодым на 20 лет, но потеряешь все воспоминания. Согласен?", en: "You can become 20 years younger, but lose all memories. Agree?", es: "Puedes rejuvenecer 20 anos, pero perder todos los recuerdos. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 27, b: 73 },
    analysis: { ru: "Ты — это твоя история. Без нее ты просто пустая страница.", en: "You are your story. Without it you are just an empty page.", es: "Eres tu historia. Sin ella eres solo una pagina vacia." }
  },
  {
    question: { ru: "Ты можешь выбрать: быть самым умным или самым добрым. Что выберешь?", en: "You can choose: be the smartest or the kindest. What do you choose?", es: "Puedes elegir: ser el mas inteligente o el mas amable. Que eliges?" },
    a: { ru: "Умный", en: "Smart", es: "Inteligente" },
    b: { ru: "Добрый", en: "Kind", es: "Amable" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты веришь, что доброта меняет мир. Ум без сердца — пуст.", en: "You believe kindness changes the world. Mind without heart is empty.", es: "Crees que la bondad cambia el mundo. La mente sin corazon esta vacia." }
  },
  {
    question: { ru: "Ты можешь путешествовать во времени вперед или назад. Куда?", en: "You can travel in time forward or backward. Where?", es: "Puedes viajar en el tiempo hacia adelante o atras. A donde?" },
    a: { ru: "Вперед", en: "Forward", es: "Adelante" },
    b: { ru: "Назад", en: "Backward", es: "Atras" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Прошлое — твой учитель. Ты не боишься заглянуть в корни.", en: "The past is your teacher. You are not afraid to look at the roots.", es: "El pasado es tu maestro. No tienes miedo de mirar las raices." }
  },
  {
    question: { ru: "Ты можешь иметь идеальное здоровье, но никогда не испытывать радость. Согласен?", en: "You can have perfect health, but never experience joy. Agree?", es: "Puedes tener salud perfecta, pero nunca experimentar alegria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 9, b: 91 },
    analysis: { ru: "Радость — смысл жизни. Без нее даже вечность — тюрьма.", en: "Joy is the meaning of life. Without it even eternity is a prison.", es: "La alegria es el sentido de la vida. Sin ella incluso la eternidad es una prision." }
  },
  {
    question: { ru: "Ты можешь стать легендой после смерти, но прожить скромную жизнь. Согласен?", en: "You can become a legend after death, but live a modest life. Agree?", es: "Puedes convertirte en leyenda tras la muerte, pero vivir una vida modesta. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 52, b: 48 },
    analysis: { ru: "Ты думаешь о наследии. Но настоящее важнее эха в вечности.", en: "You think about legacy. But the present is more important than an echo in eternity.", es: "Piensas en el legado. Pero el presente es mas importante que un eco en la eternidad." }
  },
  {
    question: { ru: "Ты можешь узнать тайну одного человека. Кого выберешь: врага или друга?", en: "You can learn one person's secret. Who do you choose: enemy or friend?", es: "Puedes saber el secreto de una persona. A quien eliges: enemigo o amigo?" },
    a: { ru: "Врага", en: "Enemy", es: "Enemigo" },
    b: { ru: "Друга", en: "Friend", es: "Amigo" },
    stats: { a: 38, b: 62 },
    analysis: { ru: "Ты доверяешь дружбе. Некоторые двери лучше не открывать.", en: "You trust friendship. Some doors are better left unopened.", es: "Confias en la amistad. Algunas puertas es mejor dejarlas cerradas." }
  },
  {
    question: { ru: "Ты можешь получить силу исцелять мир, но никогда не сможешь исцелить себя. Согласен?", en: "You can get the power to heal the world, but never heal yourself. Agree?", es: "Puedes obtener el poder de sanar al mundo, pero nunca sanarte a ti mismo. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 58, b: 42 },
    analysis: { ru: "Ты — жертвенный герой. Мир важнее твоей боли.", en: "You are a sacrificial hero. The world is more important than your pain.", es: "Eres un heroe sacrificado. El mundo es mas importante que tu dolor." }
  },
  {
    question: { ru: "Ты можешь жить в мире без войн, но без искусства. Согласен?", en: "You can live in a world without wars, but without art. Agree?", es: "Puedes vivir en un mundo sin guerras, pero sin arte. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 71, b: 29 },
    analysis: { ru: "Мир — твоя мечта. Ты готов пожертвовать красотой ради жизни.", en: "Peace is your dream. You are ready to sacrifice beauty for life.", es: "La paz es tu sueno. Estas listo para sacrificar la belleza por la vida." }
  },
  {
    question: { ru: "Ты можешь стать бессмертным, но одиноким навеки. Согласен?", en: "You can become immortal, but lonely forever. Agree?", es: "Puedes convertirte en inmortal, pero solo para siempre. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 14, b: 86 },
    analysis: { ru: "Любовь важнее вечности. Ты выбираешь тепло рядом.", en: "Love is more important than eternity. You choose the warmth nearby.", es: "El amor es mas importante que la eternidad. Elijes el calor cercano." }
  },
  {
    question: { ru: "Ты можешь изменить один закон природы. Какой?", en: "You can change one law of nature. Which one?", es: "Puedes cambiar una ley de la naturaleza. Cual?" },
    a: { ru: "Смерть", en: "Death", es: "Muerte" },
    b: { ru: "Время", en: "Time", es: "Tiempo" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Время — твой враг и друг. Ты хочешь контролировать его.", en: "Time is your enemy and friend. You want to control it.", es: "El tiempo es tu enemigo y amigo. Quieres controlarlo." }
  },
  {
    question: { ru: "Ты можешь получить всё знание мира, но потерять способность любить. Согласен?", en: "You can get all the knowledge of the world, but lose the ability to love. Agree?", es: "Puedes obtener todo el conocimiento del mundo, pero perder la capacidad de amar. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 11, b: 89 },
    analysis: { ru: "Любовь — твой источник. Без нее знание — пустой сосуд.", en: "Love is your source. Without it knowledge is an empty vessel.", es: "El amor es tu fuente. Sin el conocimiento es un recipiente vacio." }
  },
  {
    question: { ru: "Ты можешь остановить время, но каждый раз стареешь на год. Будешь использовать?", en: "You can stop time, but age a year each time. Will you use it?", es: "Puedes detener el tiempo, pero envejeces un ano cada vez. Lo usaras?" },
    a: { ru: "Использовать", en: "Use it", es: "Usarlo" },
    b: { ru: "Не буду", en: "I won't", es: "No lo usare" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты выбираешь естественный ход времени. Красота жизни — в ее неповторимости.", en: "You choose the natural flow of time. The beauty of life is in its uniqueness.", es: "Elijes el flujo natural del tiempo. La belleza de la vida esta en su singularidad." }
  },
  {
    question: { ru: "Ты нашел волшебную лампу, но джинн предложит только одно желание. Что выберешь: любовь или богатство?", en: "You found a magic lamp, but the genie offers only one wish. What do you choose: love or wealth?", es: "Encontraste una lampara magica, pero el genio ofrece solo un deseo. Que eliges: amor o riqueza?" },
    a: { ru: "Любовь", en: "Love", es: "Amor" },
    b: { ru: "Богатство", en: "Wealth", es: "Riqueza" },
    stats: { a: 78, b: 22 },
    analysis: { ru: "Сердце знает истину. Любовь — единственное богатство, которое нельзя потерять.", en: "The heart knows the truth. Love is the only wealth that cannot be lost.", es: "El corazon conoce la verdad. El amor es la unica riqueza que no se puede perder." }
  },
  {
    question: { ru: "Ты можешь стать невидимым или летать. Что выберешь?", en: "You can become invisible or fly. What do you choose?", es: "Puedes volverte invisible o volar. Que eliges?" },
    a: { ru: "Невидимость", en: "Invisibility", es: "Invisibilidad" },
    b: { ru: "Полет", en: "Flight", es: "Vuelo" },
    stats: { a: 42, b: 58 },
    analysis: { ru: "Свобода для тебя выше тайны. Ты хочешь касаться неба, а не прятаться в тени.", en: "Freedom is higher than secrecy for you. You want to touch the sky, not hide in shadows.", es: "La libertad es mas alta que el secreto para ti. Quieres tocar el cielo, no esconderte en las sombras." }
  },
  {
    question: { ru: "Ты можешь вернуться к одному моменту из прошлого. Какому?", en: "You can return to one moment from the past. Which one?", es: "Puedes volver a un momento del pasado. A cual?" },
    a: { ru: "Детству", en: "Childhood", es: "Infancia" },
    b: { ru: "Прощанию", en: "A farewell", es: "Una despedida" },
    stats: { a: 54, b: 46 },
    analysis: { ru: "Тоска по невинности говорит о твоей глубине. Ты хранишь свет тех дней.", en: "Nostalgia for innocence speaks of your depth. You keep the light of those days.", es: "La nostalgia por la inocencia habla de tu profundidad. Guardas la luz de aquellos dias." }
  },
  {
    question: { ru: "Ты можешь знать будущее своих близких. Хочешь?", en: "You can know the future of your loved ones. Do you want to?", es: "Puedes saber el futuro de tus seres queridos. Quieres?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 31, b: 69 },
    analysis: { ru: "Ты уважаешь чужую судьбу. Некоторые тайны должны оставаться нетронутыми.", en: "You respect others' fate. Some secrets must remain untouched.", es: "Respetas el destino de los demas. Algunos secretos deben permanecer intactos." }
  },
  {
    question: { ru: "Ты можешь стать лучшим в мире в одном деле, но никогда не сможешь заниматься другим. Что выберешь?", en: "You can become the best in the world at one thing, but never do another. What do you choose?", es: "Puedes convertirte en el mejor del mundo en una cosa, pero nunca hacer otra. Que eliges?" },
    a: { ru: "Искусство", en: "Art", es: "Arte" },
    b: { ru: "Наука", en: "Science", es: "Ciencia" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Разум побеждает. Ты веришь, что знание — ключ к пониманию вселенной.", en: "Mind wins. You believe knowledge is the key to understanding the universe.", es: "La mente gana. Crees que el conocimiento es la clave para entender el universo." }
  },
  {
    question: { ru: "Ты можешь прожить жизнь заново с сохранением памяти. Согласен?", en: "You can live life again keeping your memory. Agree?", es: "Puedes vivir la vida de nuevo conservando tu memoria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 61, b: 39 },
    analysis: { ru: "Ты хочешь исправить ошибки, но понимаешь, что они — твои учителя.", en: "You want to fix mistakes, but understand they are your teachers.", es: "Quieres corregir errores, pero entiendes que son tus maestros." }
  },
  {
    question: { ru: "Ты можешь говорить только правду один год. Согласен?", en: "You can speak only the truth for one year. Agree?", es: "Puedes hablar solo la verdad por un ano. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Ты ценишь дипломатию. Иногда молчание добрее правды.", en: "You value diplomacy. Sometimes silence is kinder than truth.", es: "Valoras la diplomacia. A veces el silencio es mas amable que la verdad." }
  },
  {
    question: { ru: "Ты можешь получить дом мечты, но он будет в пустыне. Согласен?", en: "You can get your dream house, but it will be in a desert. Agree?", es: "Puedes obtener la casa de tus suenos, pero estara en un desierto. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 19, b: 81 },
    analysis: { ru: "Общество важнее стен. Ты не готов обменять людей на комфорт.", en: "Society is more important than walls. You are not ready to trade people for comfort.", es: "La sociedad es mas importante que las paredes. No estas listo para cambiar gente por comodidad." }
  },
  {
    question: { ru: "Ты можешь стать молодым на 20 лет, но потеряешь все воспоминания. Согласен?", en: "You can become 20 years younger, but lose all memories. Agree?", es: "Puedes rejuvenecer 20 anos, pero perder todos los recuerdos. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 27, b: 73 },
    analysis: { ru: "Ты — это твоя история. Без нее ты просто пустая страница.", en: "You are your story. Without it you are just an empty page.", es: "Eres tu historia. Sin ella eres solo una pagina vacia." }
  },
  {
    question: { ru: "Ты можешь выбрать: быть самым умным или самым добрым. Что выберешь?", en: "You can choose: be the smartest or the kindest. What do you choose?", es: "Puedes elegir: ser el mas inteligente o el mas amable. Que eliges?" },
    a: { ru: "Умный", en: "Smart", es: "Inteligente" },
    b: { ru: "Добрый", en: "Kind", es: "Amable" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты веришь, что доброта меняет мир. Ум без сердца — пуст.", en: "You believe kindness changes the world. Mind without heart is empty.", es: "Crees que la bondad cambia el mundo. La mente sin corazon esta vacia." }
  },
  {
    question: { ru: "Ты можешь путешествовать во времени вперед или назад. Куда?", en: "You can travel in time forward or backward. Where?", es: "Puedes viajar en el tiempo hacia adelante o atras. A donde?" },
    a: { ru: "Вперед", en: "Forward", es: "Adelante" },
    b: { ru: "Назад", en: "Backward", es: "Atras" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Прошлое — твой учитель. Ты не боишься заглянуть в корни.", en: "The past is your teacher. You are not afraid to look at the roots.", es: "El pasado es tu maestro. No tienes miedo de mirar las raices." }
  },
  {
    question: { ru: "Ты можешь иметь идеальное здоровье, но никогда не испытывать радость. Согласен?", en: "You can have perfect health, but never experience joy. Agree?", es: "Puedes tener salud perfecta, pero nunca experimentar alegria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 9, b: 91 },
    analysis: { ru: "Радость — смысл жизни. Без нее даже вечность — тюрьма.", en: "Joy is the meaning of life. Without it even eternity is a prison.", es: "La alegria es el sentido de la vida. Sin ella incluso la eternidad es una prision." }
  },
  {
    question: { ru: "Ты можешь стать легендой после смерти, но прожить скромную жизнь. Согласен?", en: "You can become a legend after death, but live a modest life. Agree?", es: "Puedes convertirte en leyenda tras la muerte, pero vivir una vida modesta. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 52, b: 48 },
    analysis: { ru: "Ты думаешь о наследии. Но настоящее важнее эха в вечности.", en: "You think about legacy. But the present is more important than an echo in eternity.", es: "Piensas en el legado. Pero el presente es mas importante que un eco en la eternidad." }
  },
  {
    question: { ru: "Ты можешь узнать тайну одного человека. Кого выберешь: врага или друга?", en: "You can learn one person's secret. Who do you choose: enemy or friend?", es: "Puedes saber el secreto de una persona. A quien eliges: enemigo o amigo?" },
    a: { ru: "Врага", en: "Enemy", es: "Enemigo" },
    b: { ru: "Друга", en: "Friend", es: "Amigo" },
    stats: { a: 38, b: 62 },
    analysis: { ru: "Ты доверяешь дружбе. Некоторые двери лучше не открывать.", en: "You trust friendship. Some doors are better left unopened.", es: "Confias en la amistad. Algunas puertas es mejor dejarlas cerradas." }
  },
  {
    question: { ru: "Ты можешь получить силу исцелять мир, но никогда не сможешь исцелить себя. Согласен?", en: "You can get the power to heal the world, but never heal yourself. Agree?", es: "Puedes obtener el poder de sanar al mundo, pero nunca sanarte a ti mismo. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 58, b: 42 },
    analysis: { ru: "Ты — жертвенный герой. Мир важнее твоей боли.", en: "You are a sacrificial hero. The world is more important than your pain.", es: "Eres un heroe sacrificado. El mundo es mas importante que tu dolor." }
  },
  {
    question: { ru: "Ты можешь жить в мире без войн, но без искусства. Согласен?", en: "You can live in a world without wars, but without art. Agree?", es: "Puedes vivir en un mundo sin guerras, pero sin arte. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 71, b: 29 },
    analysis: { ru: "Мир — твоя мечта. Ты готов пожертвовать красотой ради жизни.", en: "Peace is your dream. You are ready to sacrifice beauty for life.", es: "La paz es tu sueno. Estas listo para sacrificar la belleza por la vida." }
  },
  {
    question: { ru: "Ты можешь стать бессмертным, но одиноким навеки. Согласен?", en: "You can become immortal, but lonely forever. Agree?", es: "Puedes convertirte en inmortal, pero solo para siempre. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 14, b: 86 },
    analysis: { ru: "Любовь важнее вечности. Ты выбираешь тепло рядом.", en: "Love is more important than eternity. You choose the warmth nearby.", es: "El amor es mas importante que la eternidad. Elijes el calor cercano." }
  },
  {
    question: { ru: "Ты можешь изменить один закон природы. Какой?", en: "You can change one law of nature. Which one?", es: "Puedes cambiar una ley de la naturaleza. Cual?" },
    a: { ru: "Смерть", en: "Death", es: "Muerte" },
    b: { ru: "Время", en: "Time", es: "Tiempo" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Время — твой враг и друг. Ты хочешь контролировать его.", en: "Time is your enemy and friend. You want to control it.", es: "El tiempo es tu enemigo y amigo. Quieres controlarlo." }
  },
  {
    question: { ru: "Ты можешь получить всё знание мира, но потерять способность любить. Согласен?", en: "You can get all the knowledge of the world, but lose the ability to love. Agree?", es: "Puedes obtener todo el conocimiento del mundo, pero perder la capacidad de amar. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 11, b: 89 },
    analysis: { ru: "Любовь — твой источник. Без нее знание — пустой сосуд.", en: "Love is your source. Without it knowledge is an empty vessel.", es: "El amor es tu fuente. Sin el conocimiento es un recipiente vacio." }
  },
  {
    question: { ru: "Ты можешь остановить время, но каждый раз стареешь на год. Будешь использовать?", en: "You can stop time, but age a year each time. Will you use it?", es: "Puedes detener el tiempo, pero envejeces un ano cada vez. Lo usaras?" },
    a: { ru: "Использовать", en: "Use it", es: "Usarlo" },
    b: { ru: "Не буду", en: "I won't", es: "No lo usare" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты выбираешь естественный ход времени. Красота жизни — в ее неповторимости.", en: "You choose the natural flow of time. The beauty of life is in its uniqueness.", es: "Elijes el flujo natural del tiempo. La belleza de la vida esta en su singularidad." }
  },
  {
    question: { ru: "Ты нашел волшебную лампу, но джинн предложит только одно желание. Что выберешь: любовь или богатство?", en: "You found a magic lamp, but the genie offers only one wish. What do you choose: love or wealth?", es: "Encontraste una lampara magica, pero el genio ofrece solo un deseo. Que eliges: amor o riqueza?" },
    a: { ru: "Любовь", en: "Love", es: "Amor" },
    b: { ru: "Богатство", en: "Wealth", es: "Riqueza" },
    stats: { a: 78, b: 22 },
    analysis: { ru: "Сердце знает истину. Любовь — единственное богатство, которое нельзя потерять.", en: "The heart knows the truth. Love is the only wealth that cannot be lost.", es: "El corazon conoce la verdad. El amor es la unica riqueza que no se puede perder." }
  },
  {
    question: { ru: "Ты можешь стать невидимым или летать. Что выберешь?", en: "You can become invisible or fly. What do you choose?", es: "Puedes volverte invisible o volar. Que eliges?" },
    a: { ru: "Невидимость", en: "Invisibility", es: "Invisibilidad" },
    b: { ru: "Полет", en: "Flight", es: "Vuelo" },
    stats: { a: 42, b: 58 },
    analysis: { ru: "Свобода для тебя выше тайны. Ты хочешь касаться неба, а не прятаться в тени.", en: "Freedom is higher than secrecy for you. You want to touch the sky, not hide in shadows.", es: "La libertad es mas alta que el secreto para ti. Quieres tocar el cielo, no esconderte en las sombras." }
  },
  {
    question: { ru: "Ты можешь вернуться к одному моменту из прошлого. Какому?", en: "You can return to one moment from the past. Which one?", es: "Puedes volver a un momento del pasado. A cual?" },
    a: { ru: "Детству", en: "Childhood", es: "Infancia" },
    b: { ru: "Прощанию", en: "A farewell", es: "Una despedida" },
    stats: { a: 54, b: 46 },
    analysis: { ru: "Тоска по невинности говорит о твоей глубине. Ты хранишь свет тех дней.", en: "Nostalgia for innocence speaks of your depth. You keep the light of those days.", es: "La nostalgia por la inocencia habla de tu profundidad. Guardas la luz de aquellos dias." }
  },
  {
    question: { ru: "Ты можешь знать будущее своих близких. Хочешь?", en: "You can know the future of your loved ones. Do you want to?", es: "Puedes saber el futuro de tus seres queridos. Quieres?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 31, b: 69 },
    analysis: { ru: "Ты уважаешь чужую судьбу. Некоторые тайны должны оставаться нетронутыми.", en: "You respect others' fate. Some secrets must remain untouched.", es: "Respetas el destino de los demas. Algunos secretos deben permanecer intactos." }
  },
  {
    question: { ru: "Ты можешь стать лучшим в мире в одном деле, но никогда не сможешь заниматься другим. Что выберешь?", en: "You can become the best in the world at one thing, but never do another. What do you choose?", es: "Puedes convertirte en el mejor del mundo en una cosa, pero nunca hacer otra. Que eliges?" },
    a: { ru: "Искусство", en: "Art", es: "Arte" },
    b: { ru: "Наука", en: "Science", es: "Ciencia" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Разум побеждает. Ты веришь, что знание — ключ к пониманию вселенной.", en: "Mind wins. You believe knowledge is the key to understanding the universe.", es: "La mente gana. Crees que el conocimiento es la clave para entender el universo." }
  },
  {
    question: { ru: "Ты можешь прожить жизнь заново с сохранением памяти. Согласен?", en: "You can live life again keeping your memory. Agree?", es: "Puedes vivir la vida de nuevo conservando tu memoria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 61, b: 39 },
    analysis: { ru: "Ты хочешь исправить ошибки, но понимаешь, что они — твои учителя.", en: "You want to fix mistakes, but understand they are your teachers.", es: "Quieres corregir errores, pero entiendes que son tus maestros." }
  },
  {
    question: { ru: "Ты можешь говорить только правду один год. Согласен?", en: "You can speak only the truth for one year. Agree?", es: "Puedes hablar solo la verdad por un ano. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Ты ценишь дипломатию. Иногда молчание добрее правды.", en: "You value diplomacy. Sometimes silence is kinder than truth.", es: "Valoras la diplomacia. A veces el silencio es mas amable que la verdad." }
  },
  {
    question: { ru: "Ты можешь получить дом мечты, но он будет в пустыне. Согласен?", en: "You can get your dream house, but it will be in a desert. Agree?", es: "Puedes obtener la casa de tus suenos, pero estara en un desierto. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 19, b: 81 },
    analysis: { ru: "Общество важнее стен. Ты не готов обменять людей на комфорт.", en: "Society is more important than walls. You are not ready to trade people for comfort.", es: "La sociedad es mas importante que las paredes. No estas listo para cambiar gente por comodidad." }
  },
  {
    question: { ru: "Ты можешь стать молодым на 20 лет, но потеряешь все воспоминания. Согласен?", en: "You can become 20 years younger, but lose all memories. Agree?", es: "Puedes rejuvenecer 20 anos, pero perder todos los recuerdos. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 27, b: 73 },
    analysis: { ru: "Ты — это твоя история. Без нее ты просто пустая страница.", en: "You are your story. Without it you are just an empty page.", es: "Eres tu historia. Sin ella eres solo una pagina vacia." }
  },
  {
    question: { ru: "Ты можешь выбрать: быть самым умным или самым добрым. Что выберешь?", en: "You can choose: be the smartest or the kindest. What do you choose?", es: "Puedes elegir: ser el mas inteligente o el mas amable. Que eliges?" },
    a: { ru: "Умный", en: "Smart", es: "Inteligente" },
    b: { ru: "Добрый", en: "Kind", es: "Amable" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты веришь, что доброта меняет мир. Ум без сердца — пуст.", en: "You believe kindness changes the world. Mind without heart is empty.", es: "Crees que la bondad cambia el mundo. La mente sin corazon esta vacia." }
  },
  {
    question: { ru: "Ты можешь путешествовать во времени вперед или назад. Куда?", en: "You can travel in time forward or backward. Where?", es: "Puedes viajar en el tiempo hacia adelante o atras. A donde?" },
    a: { ru: "Вперед", en: "Forward", es: "Adelante" },
    b: { ru: "Назад", en: "Backward", es: "Atras" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Прошлое — твой учитель. Ты не боишься заглянуть в корни.", en: "The past is your teacher. You are not afraid to look at the roots.", es: "El pasado es tu maestro. No tienes miedo de mirar las raices." }
  },
  {
    question: { ru: "Ты можешь иметь идеальное здоровье, но никогда не испытывать радость. Согласен?", en: "You can have perfect health, but never experience joy. Agree?", es: "Puedes tener salud perfecta, pero nunca experimentar alegria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 9, b: 91 },
    analysis: { ru: "Радость — смысл жизни. Без нее даже вечность — тюрьма.", en: "Joy is the meaning of life. Without it even eternity is a prison.", es: "La alegria es el sentido de la vida. Sin ella incluso la eternidad es una prision." }
  },
  {
    question: { ru: "Ты можешь стать легендой после смерти, но прожить скромную жизнь. Согласен?", en: "You can become a legend after death, but live a modest life. Agree?", es: "Puedes convertirte en leyenda tras la muerte, pero vivir una vida modesta. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 52, b: 48 },
    analysis: { ru: "Ты думаешь о наследии. Но настоящее важнее эха в вечности.", en: "You think about legacy. But the present is more important than an echo in eternity.", es: "Piensas en el legado. Pero el presente es mas importante que un eco en la eternidad." }
  },
  {
    question: { ru: "Ты можешь узнать тайну одного человека. Кого выберешь: врага или друга?", en: "You can learn one person's secret. Who do you choose: enemy or friend?", es: "Puedes saber el secreto de una persona. A quien eliges: enemigo o amigo?" },
    a: { ru: "Врага", en: "Enemy", es: "Enemigo" },
    b: { ru: "Друга", en: "Friend", es: "Amigo" },
    stats: { a: 38, b: 62 },
    analysis: { ru: "Ты доверяешь дружбе. Некоторые двери лучше не открывать.", en: "You trust friendship. Some doors are better left unopened.", es: "Confias en la amistad. Algunas puertas es mejor dejarlas cerradas." }
  },
  {
    question: { ru: "Ты можешь получить силу исцелять мир, но никогда не сможешь исцелить себя. Согласен?", en: "You can get the power to heal the world, but never heal yourself. Agree?", es: "Puedes obtener el poder de sanar al mundo, pero nunca sanarte a ti mismo. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 58, b: 42 },
    analysis: { ru: "Ты — жертвенный герой. Мир важнее твоей боли.", en: "You are a sacrificial hero. The world is more important than your pain.", es: "Eres un heroe sacrificado. El mundo es mas importante que tu dolor." }
  },
  {
    question: { ru: "Ты можешь жить в мире без войн, но без искусства. Согласен?", en: "You can live in a world without wars, but without art. Agree?", es: "Puedes vivir en un mundo sin guerras, pero sin arte. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 71, b: 29 },
    analysis: { ru: "Мир — твоя мечта. Ты готов пожертвовать красотой ради жизни.", en: "Peace is your dream. You are ready to sacrifice beauty for life.", es: "La paz es tu sueno. Estas listo para sacrificar la belleza por la vida." }
  },
  {
    question: { ru: "Ты можешь стать бессмертным, но одиноким навеки. Согласен?", en: "You can become immortal, but lonely forever. Agree?", es: "Puedes convertirte en inmortal, pero solo para siempre. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 14, b: 86 },
    analysis: { ru: "Любовь важнее вечности. Ты выбираешь тепло рядом.", en: "Love is more important than eternity. You choose the warmth nearby.", es: "El amor es mas importante que la eternidad. Elijes el calor cercano." }
  },
  {
    question: { ru: "Ты можешь изменить один закон природы. Какой?", en: "You can change one law of nature. Which one?", es: "Puedes cambiar una ley de la naturaleza. Cual?" },
    a: { ru: "Смерть", en: "Death", es: "Muerte" },
    b: { ru: "Время", en: "Time", es: "Tiempo" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Время — твой враг и друг. Ты хочешь контролировать его.", en: "Time is your enemy and friend. You want to control it.", es: "El tiempo es tu enemigo y amigo. Quieres controlarlo." }
  },
  {
    question: { ru: "Ты можешь получить всё знание мира, но потерять способность любить. Согласен?", en: "You can get all the knowledge of the world, but lose the ability to love. Agree?", es: "Puedes obtener todo el conocimiento del mundo, pero perder la capacidad de amar. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 11, b: 89 },
    analysis: { ru: "Любовь — твой источник. Без нее знание — пустой сосуд.", en: "Love is your source. Without it knowledge is an empty vessel.", es: "El amor es tu fuente. Sin el conocimiento es un recipiente vacio." }
  },
  {
    question: { ru: "Ты можешь остановить время, но каждый раз стареешь на год. Будешь использовать?", en: "You can stop time, but age a year each time. Will you use it?", es: "Puedes detener el tiempo, pero envejeces un ano cada vez. Lo usaras?" },
    a: { ru: "Использовать", en: "Use it", es: "Usarlo" },
    b: { ru: "Не буду", en: "I won't", es: "No lo usare" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты выбираешь естественный ход времени. Красота жизни — в ее неповторимости.", en: "You choose the natural flow of time. The beauty of life is in its uniqueness.", es: "Elijes el flujo natural del tiempo. La belleza de la vida esta en su singularidad." }
  },
  {
    question: { ru: "Ты нашел волшебную лампу, но джинн предложит только одно желание. Что выберешь: любовь или богатство?", en: "You found a magic lamp, but the genie offers only one wish. What do you choose: love or wealth?", es: "Encontraste una lampara magica, pero el genio ofrece solo un deseo. Que eliges: amor o riqueza?" },
    a: { ru: "Любовь", en: "Love", es: "Amor" },
    b: { ru: "Богатство", en: "Wealth", es: "Riqueza" },
    stats: { a: 78, b: 22 },
    analysis: { ru: "Сердце знает истину. Любовь — единственное богатство, которое нельзя потерять.", en: "The heart knows the truth. Love is the only wealth that cannot be lost.", es: "El corazon conoce la verdad. El amor es la unica riqueza que no se puede perder." }
  },
  {
    question: { ru: "Ты можешь стать невидимым или летать. Что выберешь?", en: "You can become invisible or fly. What do you choose?", es: "Puedes volverte invisible o volar. Que eliges?" },
    a: { ru: "Невидимость", en: "Invisibility", es: "Invisibilidad" },
    b: { ru: "Полет", en: "Flight", es: "Vuelo" },
    stats: { a: 42, b: 58 },
    analysis: { ru: "Свобода для тебя выше тайны. Ты хочешь касаться неба, а не прятаться в тени.", en: "Freedom is higher than secrecy for you. You want to touch the sky, not hide in shadows.", es: "La libertad es mas alta que el secreto para ti. Quieres tocar el cielo, no esconderte en las sombras." }
  },
  {
    question: { ru: "Ты можешь вернуться к одному моменту из прошлого. Какому?", en: "You can return to one moment from the past. Which one?", es: "Puedes volver a un momento del pasado. A cual?" },
    a: { ru: "Детству", en: "Childhood", es: "Infancia" },
    b: { ru: "Прощанию", en: "A farewell", es: "Una despedida" },
    stats: { a: 54, b: 46 },
    analysis: { ru: "Тоска по невинности говорит о твоей глубине. Ты хранишь свет тех дней.", en: "Nostalgia for innocence speaks of your depth. You keep the light of those days.", es: "La nostalgia por la inocencia habla de tu profundidad. Guardas la luz de aquellos dias." }
  },
  {
    question: { ru: "Ты можешь знать будущее своих близких. Хочешь?", en: "You can know the future of your loved ones. Do you want to?", es: "Puedes saber el futuro de tus seres queridos. Quieres?" },
    a: { ru: "Да", en: "Yes", es: "Si" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 31, b: 69 },
    analysis: { ru: "Ты уважаешь чужую судьбу. Некоторые тайны должны оставаться нетронутыми.", en: "You respect others' fate. Some secrets must remain untouched.", es: "Respetas el destino de los demas. Algunos secretos deben permanecer intactos." }
  },
  {
    question: { ru: "Ты можешь стать лучшим в мире в одном деле, но никогда не сможешь заниматься другим. Что выберешь?", en: "You can become the best in the world at one thing, but never do another. What do you choose?", es: "Puedes convertirte en el mejor del mundo en una cosa, pero nunca hacer otra. Que eliges?" },
    a: { ru: "Искусство", en: "Art", es: "Arte" },
    b: { ru: "Наука", en: "Science", es: "Ciencia" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Разум побеждает. Ты веришь, что знание — ключ к пониманию вселенной.", en: "Mind wins. You believe knowledge is the key to understanding the universe.", es: "La mente gana. Crees que el conocimiento es la clave para entender el universo." }
  },
  {
    question: { ru: "Ты можешь прожить жизнь заново с сохранением памяти. Согласен?", en: "You can live life again keeping your memory. Agree?", es: "Puedes vivir la vida de nuevo conservando tu memoria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 61, b: 39 },
    analysis: { ru: "Ты хочешь исправить ошибки, но понимаешь, что они — твои учителя.", en: "You want to fix mistakes, but understand they are your teachers.", es: "Quieres corregir errores, pero entiendes que son tus maestros." }
  },
  {
    question: { ru: "Ты можешь говорить только правду один год. Согласен?", en: "You can speak only the truth for one year. Agree?", es: "Puedes hablar solo la verdad por un ano. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Ты ценишь дипломатию. Иногда молчание добрее правды.", en: "You value diplomacy. Sometimes silence is kinder than truth.", es: "Valoras la diplomacia. A veces el silencio es mas amable que la verdad." }
  },
  {
    question: { ru: "Ты можешь получить дом мечты, но он будет в пустыне. Согласен?", en: "You can get your dream house, but it will be in a desert. Agree?", es: "Puedes obtener la casa de tus suenos, pero estara en un desierto. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 19, b: 81 },
    analysis: { ru: "Общество важнее стен. Ты не готов обменять людей на комфорт.", en: "Society is more important than walls. You are not ready to trade people for comfort.", es: "La sociedad es mas importante que las paredes. No estas listo para cambiar gente por comodidad." }
  },
  {
    question: { ru: "Ты можешь стать молодым на 20 лет, но потеряешь все воспоминания. Согласен?", en: "You can become 20 years younger, but lose all memories. Agree?", es: "Puedes rejuvenecer 20 anos, pero perder todos los recuerdos. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 27, b: 73 },
    analysis: { ru: "Ты — это твоя история. Без нее ты просто пустая страница.", en: "You are your story. Without it you are just an empty page.", es: "Eres tu historia. Sin ella eres solo una pagina vacia." }
  },
  {
    question: { ru: "Ты можешь выбрать: быть самым умным или самым добрым. Что выберешь?", en: "You can choose: be the smartest or the kindest. What do you choose?", es: "Puedes elegir: ser el mas inteligente o el mas amable. Que eliges?" },
    a: { ru: "Умный", en: "Smart", es: "Inteligente" },
    b: { ru: "Добрый", en: "Kind", es: "Amable" },
    stats: { a: 35, b: 65 },
    analysis: { ru: "Ты веришь, что доброта меняет мир. Ум без сердца — пуст.", en: "You believe kindness changes the world. Mind without heart is empty.", es: "Crees que la bondad cambia el mundo. La mente sin corazon esta vacia." }
  },
  {
    question: { ru: "Ты можешь путешествовать во времени вперед или назад. Куда?", en: "You can travel in time forward or backward. Where?", es: "Puedes viajar en el tiempo hacia adelante o atras. A donde?" },
    a: { ru: "Вперед", en: "Forward", es: "Adelante" },
    b: { ru: "Назад", en: "Backward", es: "Atras" },
    stats: { a: 48, b: 52 },
    analysis: { ru: "Прошлое — твой учитель. Ты не боишься заглянуть в корни.", en: "The past is your teacher. You are not afraid to look at the roots.", es: "El pasado es tu maestro. No tienes miedo de mirar las raices." }
  },
  {
    question: { ru: "Ты можешь иметь идеальное здоровье, но никогда не испытывать радость. Согласен?", en: "You can have perfect health, but never experience joy. Agree?", es: "Puedes tener salud perfecta, pero nunca experimentar alegria. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 9, b: 91 },
    analysis: { ru: "Радость — смысл жизни. Без нее даже вечность — тюрьма.", en: "Joy is the meaning of life. Without it even eternity is a prison.", es: "La alegria es el sentido de la vida. Sin ella incluso la eternidad es una prision." }
  },
  {
    question: { ru: "Ты можешь стать легендой после смерти, но прожить скромную жизнь. Согласен?", en: "You can become a legend after death, but live a modest life. Agree?", es: "Puedes convertirte en leyenda tras la muerte, pero vivir una vida modesta. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 52, b: 48 },
    analysis: { ru: "Ты думаешь о наследии. Но настоящее важнее эха в вечности.", en: "You think about legacy. But the present is more important than an echo in eternity.", es: "Piensas en el legado. Pero el presente es mas importante que un eco en la eternidad." }
  },
  {
    question: { ru: "Ты можешь узнать тайну одного человека. Кого выберешь: врага или друга?", en: "You can learn one person's secret. Who do you choose: enemy or friend?", es: "Puedes saber el secreto de una persona. A quien eliges: enemigo o amigo?" },
    a: { ru: "Врага", en: "Enemy", es: "Enemigo" },
    b: { ru: "Друга", en: "Friend", es: "Amigo" },
    stats: { a: 38, b: 62 },
    analysis: { ru: "Ты доверяешь дружбе. Некоторые двери лучше не открывать.", en: "You trust friendship. Some doors are better left unopened.", es: "Confias en la amistad. Algunas puertas es mejor dejarlas cerradas." }
  },
  {
    question: { ru: "Ты можешь получить силу исцелять мир, но никогда не сможешь исцелить себя. Согласен?", en: "You can get the power to heal the world, but never heal yourself. Agree?", es: "Puedes obtener el poder de sanar al mundo, pero nunca sanarte a ti mismo. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 58, b: 42 },
    analysis: { ru: "Ты — жертвенный герой. Мир важнее твоей боли.", en: "You are a sacrificial hero. The world is more important than your pain.", es: "Eres un heroe sacrificado. El mundo es mas importante que tu dolor." }
  },
  {
    question: { ru: "Ты можешь жить в мире без войн, но без искусства. Согласен?", en: "You can live in a world without wars, but without art. Agree?", es: "Puedes vivir en un mundo sin guerras, pero sin arte. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 71, b: 29 },
    analysis: { ru: "Мир — твоя мечта. Ты готов пожертвовать красотой ради жизни.", en: "Peace is your dream. You are ready to sacrifice beauty for life.", es: "La paz es tu sueno. Estas listo para sacrificar la belleza por la vida." }
  },
  {
    question: { ru: "Ты можешь стать бессмертным, но одиноким навеки. Согласен?", en: "You can become immortal, but lonely forever. Agree?", es: "Puedes convertirte en inmortal, pero solo para siempre. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 14, b: 86 },
    analysis: { ru: "Любовь важнее вечности. Ты выбираешь тепло рядом.", en: "Love is more important than eternity. You choose the warmth nearby.", es: "El amor es mas importante que la eternidad. Elijes el calor cercano." }
  },
  {
    question: { ru: "Ты можешь изменить один закон природы. Какой?", en: "You can change one law of nature. Which one?", es: "Puedes cambiar una ley de la naturaleza. Cual?" },
    a: { ru: "Смерть", en: "Death", es: "Muerte" },
    b: { ru: "Время", en: "Time", es: "Tiempo" },
    stats: { a: 44, b: 56 },
    analysis: { ru: "Время — твой враг и друг. Ты хочешь контролировать его.", en: "Time is your enemy and friend. You want to control it.", es: "El tiempo es tu enemigo y amigo. Quieres controlarlo." }
  },
  {
    question: { ru: "Ты можешь получить всё знание мира, но потерять способность любить. Согласен?", en: "You can get all the knowledge of the world, but lose the ability to love. Agree?", es: "Puedes obtener todo el conocimiento del mundo, pero perder la capacidad de amar. De acuerdo?" },
    a: { ru: "Согласен", en: "I agree", es: "De acuerdo" },
    b: { ru: "Нет", en: "No", es: "No" },
    stats: { a: 11, b: 89 },
    analysis: { ru: "Любовь — твой источник. Без нее знание — пустой сосуд.", en: "Love is your source. Without it knowledge is an empty vessel.", es: "El amor es tu fuente. Sin el conocimiento es un recipiente vacio." }
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
        <p>${t('fateTgText')}</p>
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

const LABYRINTH_RIDDLES = [
  {
    riddle: { ru: "Кто ходит утром на четырех ногах, днем на двух, а вечером на трех?", en: "What walks on four legs in the morning, two at noon, and three in the evening?", es: "Que camina en cuatro patas por la manana, en dos al mediodia y en tres por la tarde?" },
    hints: [
      { ru: "Это существо меняется со временем.", en: "This creature changes over time.", es: "Esta criatura cambia con el tiempo." },
      { ru: "Вечером оно полагается на помощь.", en: "In the evening it relies on help.", es: "Por la tarde depende de ayuda." }
    ],
    answer: { ru: "Человек. Утром - ползает на четвереньках (младенец), днем - ходит на двух ногах (зрелость), вечером - на трех (с тростью в старости). Это классическая загадка Сфинкса из мифа об Эдипе.", en: "Man. In the morning he crawls on all fours (infant), at noon walks on two legs (adulthood), in the evening on three (with a cane in old age). This is the classic Riddle of the Sphinx from the Oedipus myth.", es: "El hombre. Por la manana se arrastra en cuatro patas (bebe), al mediodia camina en dos (adulto), por la tarde en tres (con baston en la vejez). Es el clasico acertijo de la Esfinge del mito de Edipo." },
    difficulty: 1
  },
  {
    riddle: { ru: "Дом открыт со всех сторон. В доме - тысячи колонн. Над колоннами - шатры. Под колоннами - ковры. Там живут и в коврах, и в колоннах, и в шатрах.", en: "A house open on all sides. Inside - thousands of columns. Above columns - tents. Below columns - carpets. There live creatures in carpets, columns, and tents.", es: "Una casa abierta por todos lados. Dentro - miles de columnas. Sobre columnas - carpas. Debajo de columnas - alfombras. Ahi viven criaturas en alfombras, columnas y carpas." },
    hints: [
      { ru: "Этот дом не построен руками.", en: "This house was not built by hands.", es: "Esta casa no fue construida por manos." },
      { ru: "Колонны - это стволы деревьев.", en: "The columns are tree trunks.", es: "Las columnas son troncos." }
    ],
    answer: { ru: "Лес. Колонны - стволы деревьев, шатры - кроны, ковры - мох и травы под ними. Живут там птицы, звери, насекомые.", en: "A forest. The columns are tree trunks, the tents are the crowns, the carpets are moss and grass beneath. Birds, beasts, and insects live there.", es: "Un bosque. Las columnas son troncos de arboles, las carpas son las copas, las alfombras son musgo y hierba debajo. Aves, bestias e insectos viven ahi." },
    difficulty: 1
  },
  {
    riddle: { ru: "Нужно перевезти через реку волка, козу и капусту. Лодка вмещает только вас и одно существо или предмет. Нельзя оставлять волка с козой, и козу с капустой.", en: "You must cross a river with a wolf, a goat, and cabbage. The boat holds only you and one item. You cannot leave the wolf with the goat, or the goat with the cabbage.", es: "Debes cruzar un rio con un lobo, una cabra y un repollo. La barca solo te lleva a ti y un objeto. No puedes dejar al lobo con la cabra, ni a la cabra con el repollo." },
    hints: [
      { ru: "Первым нужно перевезти того, кого нельзя оставить ни с одним из двух других.", en: "First, take the one who cannot be left with either of the other two.", es: "Primero lleva a quien no puedes dejar con ninguno de los otros dos." },
      { ru: "Возвращаться придется несколько раз.", en: "You will have to return several times.", es: "Tendras que regresar varias veces." }
    ],
    answer: { ru: "1) Перевези козу. 2) Вернись. 3) Перевези волка. 4) Привези козу обратно. 5) Перевези капусту. 6) Вернись. 7) Перевези козу. Волк и капуста безопасны вместе.", en: "1) Take the goat. 2) Return. 3) Take the wolf. 4) Bring the goat back. 5) Take the cabbage. 6) Return. 7) Take the goat. Wolf and cabbage are safe together.", es: "1) Lleva la cabra. 2) Regresa. 3) Lleva el lobo. 4) Trae la cabra de vuelta. 5) Lleva el repollo. 6) Regresa. 7) Lleva la cabra. El lobo y el repollo son seguros juntos." },
    difficulty: 2
  },
  {
    riddle: { ru: "За закрытой дверью три лампы. В коридоре три выключателя. Как узнать, какой за что отвечает, зайдя в комнату только один раз?", en: "Behind a closed door are three lamps. In the corridor are three switches. How do you know which switch controls which lamp, entering the room only once?", es: "Detras de una puerta cerrada hay tres lamparas. En el pasillo hay tres interruptores. Como sabes cual controla cual, entrando solo una vez?" },
    hints: [
      { ru: "Лампа излучает не только свет.", en: "A lamp emits more than light.", es: "Una lampara emite mas que luz." },
      { ru: "У лампы есть температура.", en: "A lamp has temperature.", es: "Una lampara tiene temperatura." }
    ],
    answer: { ru: "Включи первый выключатель, подожди 10 минут, выключи. Включи второй. Зайди в комнату: горящая лампа - от второго, теплая но выключенная - от первого, холодная - от третьего.", en: "Turn on the first switch, wait 10 minutes, turn it off. Turn on the second. Enter the room: the lit lamp is from the second, the warm but off one is from the first, the cold one is from the third.", es: "Enciende el primer interruptor, espera 10 minutos, apagalo. Enciende el segundo. Entra: la lampara encendida es del segundo, la caliente pero apagada del primero, la fria del tercero." },
    difficulty: 2
  },
  {
    riddle: { ru: "Лежат 100 монет. Часть орлом вверх, часть решкой. В темноте нужно разделить их на две кучки с равным числом орлов. Орлом вверх 23, остальные решкой.", en: "There are 100 coins. Some show heads, some tails. In complete darkness, split them into two piles with an equal number of heads. 23 show heads.", es: "Hay 100 monedas. Algunas muestran cara, otras cruz. En total oscuridad, dividelas en dos montones con igual numero de caras. 23 muestran cara." },
    hints: [
      { ru: "Ты можешь перевернуть монеты.", en: "You can flip coins.", es: "Puedes voltear monedas." },
      { ru: "Число монет в кучке - это ключ.", en: "The number of coins in a pile is the key.", es: "El numero de monedas en un monton es la clave." }
    ],
    answer: { ru: "Возьми любые 23 монеты в одну кучку, остальные 77 - в другую. Переверни все 23 в первой кучке. Если в этой кучке было X орлов, то стало 23-X. Во второй кучке тоже 23-X орлов. Равенство достигнуто.", en: "Take any 23 coins into one pile, the remaining 77 into another. Flip all 23 in the first pile. If there were X heads, now there are 23-X. The second pile also has 23-X heads. Equality achieved.", es: "Toma 23 monedas en un monton, las otras 77 en otro. Voltea las 23 del primer monton. Si habia X caras, ahora hay 23-X. El segundo monton tambien tiene 23-X caras. Igualdad lograda." },
    difficulty: 3
  },
  {
    riddle: { ru: "Две веревки. Каждая сгорает за ровно 60 минут, но неравномерно. Как отмерить ровно 45 минут?", en: "Two ropes. Each burns in exactly 60 minutes, but unevenly. How do you measure exactly 45 minutes?", es: "Dos cuerdas. Cada una arde en exactamente 60 minutos, pero de forma desigual. Como medir exactamente 45 minutos?" },
    hints: [
      { ru: "Можно поджигать с двух концов.", en: "You can light from both ends.", es: "Puedes encender desde ambos extremos." },
      { ru: "Если поджечь с двух концов, веревка сгорит за 30 минут.", en: "Lit from both ends, a rope burns in 30 minutes.", es: "Encendida por ambos lados, una cuerda arde en 30 minutos." }
    ],
    answer: { ru: "Подожги первую веревку с обоих концов, а вторую - с одного. Первая сгорит за 30 минут. В этот момент подожги второй конец второй веревки. Она сгорит через 15 минут. Итого: 30 + 15 = 45 минут.", en: "Light the first rope from both ends, the second from one end. The first burns out in 30 minutes. At that moment, light the other end of the second rope. It burns out in 15 more minutes. Total: 30 + 15 = 45 minutes.", es: "Enciende la primera cuerda por ambos lados, la segunda por uno. La primera se consume en 30 minutos. En ese momento enciende el otro extremo de la segunda. Se consume en 15 minutos mas. Total: 30 + 15 = 45 minutos." },
    difficulty: 3
  },
  {
    riddle: { ru: "Одна кувшинка удваивает площадь покрытия озера каждый день. Через 30 дней она покрывает все озеро. Если кувшинок две, сколько дней им понадобится?", en: "One lily pad doubles the covered area of a lake every day. On day 30 it covers the whole lake. If there are two lily pads, how many days will they need?", es: "Un nenufar duplica el area cubierta de un lago cada dia. El dia 30 cubre todo el lago. Si hay dos nenufares, cuantos dias necesitan?" },
    hints: [
      { ru: "Не думай, что ответ 15.", en: "Do not think the answer is 15.", es: "No pienses que la respuesta es 15." },
      { ru: "Две кувшинки - это как одна на день раньше.", en: "Two pads are like one pad one day earlier.", es: "Dos nenufares son como uno un dia antes." }
    ],
    answer: { ru: "29 дней. Если одна кувшинка покрывает все озеро за 30 дней, то на 29-й день она покрывает половину. Две кувшинки - это эквивалент одной на день раньше, так как каждая удваивается независимо.", en: "29 days. If one pad covers the whole lake on day 30, on day 29 it covers half. Two pads are equivalent to one pad one day earlier, since each doubles independently.", es: "29 dias. Si un nenufar cubre todo el lago el dia 30, el dia 29 cubre la mitad. Dos nenufares equivalen a uno un dia antes, ya que cada uno se duplica independientemente." },
    difficulty: 3
  },
  {
    riddle: { ru: "Три мудреца сидят в комнате. На них надели три колпака из пяти (3 черных и 2 белых). Каждый видит других, но не свой. Первые два ответили Не знаю на вопрос о цвете. Какого цвета колпак у третьего?", en: "Three sages sit in a room. Three caps are placed on them from five (3 black and 2 white). Each sees the others, but not their own. The first two answered I do not know when asked about their color. What color is the third sage's cap?", es: "Tres sabios sentados en una habitacion. Tres gorras se colocan sobre ellos de cinco (3 negras y 2 blancas). Cada uno ve a los otros, pero no la suya. Los dos primeros respondieron No se cuando se les pregunto su color. De que color es la gorra del tercer sabio?" },
    hints: [
      { ru: "Если бы первый увидел два белых, он бы знал, что на нем черный.", en: "If the first saw two white caps, he would know his is black.", es: "Si el primero viera dos gorras blancas, sabria que la suya es negra." },
      { ru: "Первый не знает - значит, он не видит двух белых.", en: "The first does not know - so he does not see two white.", es: "El primero no sabe - asi que no ve dos blancas." }
    ],
    answer: { ru: "Черный. Первый не видит двух белых (иначе знал бы, что его черный). Второй слышит это и тоже отвечает Не знаю, значит он тоже не видит двух белых. Третий понимает: раз первые двое не знают, значит никто не видит два белых. Если бы на третьем был белый, второй увидел бы белый на третьем и знал бы, что на нем черный (так как первый не видел два белых). Значит, на третьем - черный.", en: "Black. The first does not see two white (otherwise he would know his is black). The second hears this and also says I do not know, so he also does not see two white. The third understands: since the first two do not know, no one sees two white. If the third had white, the second would see white on the third and know his is black (since the first did not see two white). Therefore, the third has black.", es: "Negro. El primero no ve dos blancas (de lo contrario sabria que la suya es negra). El segundo escucha esto y tambien dice No se, asi que tampoco ve dos blancas. El tercero entiende: como los dos primeros no saben, nadie ve dos blancas. Si el tercero tuviera blanca, el segundo veria blanca en el tercero y sabria que la suya es negra (ya que el primero no vio dos blancas). Por tanto, el tercero tiene negra." },
    difficulty: 4
  },
  {
    riddle: { ru: "Два стражника охраняют две двери. За одной - свобода, за другой - смерть. Один всегда лжет, другой всегда говорит правду. Можно задать только один вопрос одному стражнику. Какой?", en: "Two guards watch two doors. Behind one - freedom, behind the other - death. One always lies, the other always tells the truth. You can ask only one question to one guard. Which one?", es: "Dos guardianes vigilan dos puertas. Detras de una - libertad, detras de la otra - muerte. Uno siempre miente, el otro siempre dice la verdad. Puedes hacer solo una pregunta a un guardian. Cual?" },
    hints: [
      { ru: "Нужно задать вопрос, который работает для обоих.", en: "You need a question that works for both.", es: "Necesitas una pregunta que funcione para ambos." },
      { ru: "Спроси, что сказал бы другой стражник.", en: "Ask what the other guard would say.", es: "Pregunta que diria el otro guardian." }
    ],
    answer: { ru: "Спроси любого стражника: Какую дверь указал бы другой стражник как ведущую к свободе? И выбери противоположную. Лжец скажет, что правдивый указал бы на дверь смерти (ложь). Правдивый скажет, что лжец указал бы на дверь смерти (правда). Оба укажут на дверь смерти.", en: "Ask any guard: Which door would the other guard point to as leading to freedom? And choose the opposite. The liar would say the truthful one would point to the death door (lie). The truthful one would say the liar would point to the death door (truth). Both point to the death door.", es: "Pregunta a cualquier guardian: A que puerta senalaria el otro guardian como la que lleva a la libertad? Y elige la opuesta. El mentiroso diria que el veraz senalaria la puerta de la muerte (mentira). El veraz diria que el mentiroso senalaria la puerta de la muerte (verdad). Ambos senalan la puerta de la muerte." },
    difficulty: 4
  },
  {
    riddle: { ru: "Пять пиратов делят 100 золотых монет. Старший предлагает дележ. Если хотя бы половина (включая его) согласна - дележ принимается. Если нет - его выбрасывают за борт, и следующий предлагает. Как распределит монеты старший, чтобы выжить и получить максимум?", en: "Five pirates divide 100 gold coins. The eldest proposes a split. If at least half (including him) agree - the split is accepted. If not - he is thrown overboard, and the next proposes. How will the eldest distribute the coins to survive and get the maximum?", es: "Cinco piratas dividen 100 monedas de oro. El mayor propone una division. Si al menos la mitad (incluido el) acepta - la division se acepta. Si no - lo arrojan por la borda, y el siguiente propone. Como distribuira las monedas el mayor para sobrevivir y obtener el maximo?" },
    hints: [
      { ru: "Думай с конца - что произойдет, если останется два пирата?", en: "Think from the end - what happens if only two pirates remain?", es: "Piensa desde el final - que pasa si quedan dos piratas?" },
      { ru: "С двумя пиратами старший голосует за себя и побеждает.", en: "With two pirates, the elder votes for himself and wins.", es: "Con dos piratas, el mayor vota por si mismo y gana." }
    ],
    answer: { ru: "Старший (пират 1) предлагает: себе 98, пирату 3 - 1, пирату 5 - 1, остальным - 0. Пират 3 и 5 получат 0, если останется 4 пирата (так как 4 раздаст все 100 себе, а 3 и 5 проголосуют за, чтобы не умереть). Поэтому 3 и 5 согласятся на 1 монету каждый. 1+1+1 (сам за себя) = 3 из 5 = большинство.", en: "The eldest (pirate 1) proposes: himself 98, pirate 3 - 1, pirate 5 - 1, others - 0. Pirates 3 and 5 would get 0 if only 4 pirates remain (since 4 would keep all 100, and 3 and 5 would vote yes to survive). So 3 and 5 will agree to 1 coin each. 1+1+1 (himself) = 3 of 5 = majority.", es: "El mayor (pirata 1) propone: el 98, pirata 3 - 1, pirata 5 - 1, otros - 0. Los piratas 3 y 5 recibirian 0 si quedan 4 piratas (ya que 4 se quedaria con las 100, y 3 y 5 votarian si para sobrevivir). Asi que 3 y 5 aceptaran 1 moneda cada uno. 1+1+1 (el mismo) = 3 de 5 = mayoria." },
    difficulty: 5
  },
  {
    riddle: { ru: "Три бога стоят в ряд. Один всегда говорит правду, другой всегда лжет, третий отвечает случайно. Можно задать три вопроса, на которые отвечают да или нет. Как определить, кто есть кто?", en: "Three gods stand in a row. One always tells the truth, one always lies, the third answers randomly. You can ask three yes/no questions. How do you determine who is who?", es: "Tres dioses estan en fila. Uno siempre dice la verdad, otro siempre miente, el tercero responde al azar. Puedes hacer tres preguntas de si o no. Como determinar quien es quien?" },
    hints: [
      { ru: "Нужен вопрос, который работает даже со случайным богом.", en: "You need a question that works even with the random god.", es: "Necesitas una pregunta que funcione incluso con el dios aleatorio." },
      { ru: "Используй двойное отрицание в вопросе.", en: "Use double negation in the question.", es: "Usa doble negacion en la pregunta." }
    ],
    answer: { ru: "Это знаменитая загадка Харвеста. Первый вопрос к любому богу: Если бы я спросил тебя, является ли Бог Б случайным, сказал бы ты да? Второй вопрос зависит от ответа, но ключ в том, что двойное отрицание устраняет ложь/правду. После первого вопроса можно исключить случайного бога и задать два оставшихся вопроса оставшимся двум богам.", en: "This is the famous Hardest Logic Puzzle. First question to any god: If I asked you whether God B is random, would you say yes? The second question depends on the answer, but the key is that double negation eliminates lie/truth. After the first question you can eliminate the random god and ask the remaining two questions to the remaining two gods.", es: "Este es el famoso acertijo logico mas dificil. Primera pregunta a cualquier dios: Si te preguntara si el Dios B es aleatorio, dirias que si? La segunda pregunta depende de la respuesta, pero la clave es que la doble negacion elimina mentira/verdad. Despues de la primera pregunta puedes eliminar al dios aleatorio y hacer las dos preguntas restantes a los dos dioses restantes." },
    difficulty: 5
  }
];

function openLabyrinth() {
  const overlay = document.createElement('div');
  overlay.id = 'labyrinth-overlay';
  overlay.className = 'labyrinth-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
    <div class="labyrinth-container">
      <h2 class="labyrinth-title">${t('labyrinth')}</h2>
      <p class="labyrinth-desc">${t('riddleReady')}</p>
      <div class="labyrinth-rules">
        <div class="labyrinth-rule"><span class="labyrinth-rule-num">1</span><span>${t('riddleRules1')}</span></div>
        <div class="labyrinth-rule"><span class="labyrinth-rule-num">2</span><span>${t('riddleRules2')}</span></div>
        <div class="labyrinth-rule"><span class="labyrinth-rule-num">3</span><span>${t('riddleRules3')}</span></div>
      </div>
      <button class="labyrinth-start-btn" onclick="startLabyrinth()">${t('riddleEnter')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function startLabyrinth() {
  const state = { currentIndex: 0, hintsUsed: 0 };
  localStorage.setItem('labyrinth_state', JSON.stringify(state));
  renderRiddle(0);
}

function renderRiddle(index) {
  const r = LABYRINTH_RIDDLES[index];
  const state = JSON.parse(localStorage.getItem('labyrinth_state') || '{"currentIndex":0,"hintsUsed":0}');
  const container = document.querySelector('.labyrinth-container');
  const diffStars = '★'.repeat(r.difficulty) + '☆'.repeat(5 - r.difficulty);
  container.innerHTML = `
    <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
    <div class="labyrinth-progress">${index + 1} / ${LABYRINTH_RIDDLES.length}</div>
    <div class="labyrinth-difficulty">${diffStars}</div>
    <div class="labyrinth-riddle">${r.riddle[currentLang]}</div>
    <div class="labyrinth-actions">
      <button class="labyrinth-hint-btn ${state.hintsUsed >= 2 ? 'disabled' : ''}" onclick="showHintConfirm(${index})">
        <span class="hint-icon">💡</span> ${t('hint')} ${state.hintsUsed}/2
      </button>
      <button class="labyrinth-answer-btn" onclick="showAnswerConfirm(${index})">${t('lookAnswer')}</button>
    </div>
    <div class="labyrinth-hints-area" id="labyrinth-hints"></div>
    <div class="labyrinth-answer-area" id="labyrinth-answer" style="display:none;">
      <div class="labyrinth-answer-text">${r.answer[currentLang]}</div>
      <button class="labyrinth-next-btn" onclick="nextRiddle()">${index < LABYRINTH_RIDDLES.length - 1 ? t('goFurther') : t('riddleRestart')}</button>
    </div>
  `;
}

function showHintConfirm(index) {
  const state = JSON.parse(localStorage.getItem('labyrinth_state') || '{"currentIndex":0,"hintsUsed":0}');
  if (state.hintsUsed >= 2) return;
  const overlay = document.createElement('div');
  overlay.className = 'labyrinth-confirm-overlay';
  overlay.innerHTML = `
    <div class="labyrinth-confirm-box">
      <div class="labyrinth-confirm-title">${t('hintConfirmTitle')}</div>
      <div class="labyrinth-confirm-text">${t('hintConfirmText')}</div>
      <div class="labyrinth-confirm-btns">
        <button class="labyrinth-confirm-yes" onclick="useHint(${index}); this.closest('.labyrinth-confirm-overlay').remove();">${t('yesOpen')}</button>
        <button class="labyrinth-confirm-no" onclick="this.closest('.labyrinth-confirm-overlay').remove();">${t('backToRiddle')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function useHint(index) {
  const r = LABYRINTH_RIDDLES[index];
  let state = JSON.parse(localStorage.getItem('labyrinth_state') || '{"currentIndex":0,"hintsUsed":0}');
  if (state.hintsUsed >= 2) return;
  const hintArea = document.getElementById('labyrinth-hints');
  const hintDiv = document.createElement('div');
  hintDiv.className = 'labyrinth-hint-reveal';
  hintDiv.innerHTML = `<span class="hint-label">${t('hint')} ${state.hintsUsed + 1}:</span> ${r.hints[state.hintsUsed][currentLang]}`;
  hintArea.appendChild(hintDiv);
  state.hintsUsed++;
  localStorage.setItem('labyrinth_state', JSON.stringify(state));
  const btn = document.querySelector('.labyrinth-hint-btn');
  if (btn) {
    btn.innerHTML = `<span class="hint-icon">💡</span> ${t('hint')} ${state.hintsUsed}/2`;
    if (state.hintsUsed >= 2) btn.classList.add('disabled');
  }
}

function showAnswerConfirm(index) {
  const overlay = document.createElement('div');
  overlay.className = 'labyrinth-confirm-overlay';
  overlay.innerHTML = `
    <div class="labyrinth-confirm-box">
      <div class="labyrinth-confirm-title">${t('lookAnswer')}</div>
      <div class="labyrinth-confirm-text">${t('answerConfirm')}</div>
      <div class="labyrinth-confirm-btns">
        <button class="labyrinth-confirm-yes" onclick="revealAnswer(); this.closest('.labyrinth-confirm-overlay').remove();">${t('yesOpen')}</button>
        <button class="labyrinth-confirm-no" onclick="this.closest('.labyrinth-confirm-overlay').remove();">${t('backToRiddle')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function revealAnswer() {
  document.getElementById('labyrinth-answer').style.display = 'block';
  document.querySelector('.labyrinth-actions').style.display = 'none';
}

function nextRiddle() {
  let state = JSON.parse(localStorage.getItem('labyrinth_state') || '{"currentIndex":0,"hintsUsed":0}');
  state.currentIndex++;
  state.hintsUsed = 0;
  if (state.currentIndex >= LABYRINTH_RIDDLES.length) {
    showLabyrinthComplete();
    return;
  }
  localStorage.setItem('labyrinth_state', JSON.stringify(state));
  renderRiddle(state.currentIndex);
}

function showLabyrinthComplete() {
  const container = document.querySelector('.labyrinth-container');
  container.innerHTML = `
    <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
    <div class="labyrinth-complete">
      <div class="labyrinth-complete-icon">🏛️</div>
      <div class="labyrinth-complete-title">${t('riddleComplete')}</div>
      <div class="labyrinth-complete-text">${t('riddleCompleteText')}</div>
      <button class="labyrinth-start-btn" onclick="startLabyrinth()">${t('riddleRestart')}</button>
    </div>
  `;
}

function closeLabyrinth() {
  const overlay = document.getElementById('labyrinth-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// ИСТИННАЯ СУДЬБА
// ============================================================
const DESTINY_QUESTIONS = [
  { q: { ru: "Какой цвет ассоциируется у тебя с твоим детством?", en: "What color do you associate with your childhood?", es: "Que color asocias con tu infancia?" },
    options: [
      { text: { ru: "Золотой", en: "Gold", es: "Oro" }, archetype: "emperor" },
      { text: { ru: "Синий", en: "Blue", es: "Azul" }, archetype: "sage" },
      { text: { ru: "Красный", en: "Red", es: "Rojo" }, archetype: "warrior" },
      { text: { ru: "Зеленый", en: "Green", es: "Verde" }, archetype: "explorer" }
    ]
  },
  { q: { ru: "Что ты чувствуешь, глядя на звездное небо?", en: "What do you feel looking at the starry sky?", es: "Que sientes al mirar el cielo estrellado?" },
    options: [
      { text: { ru: "Тоску по дому", en: "Homesickness", es: "Nostalgia del hogar" }, archetype: "explorer" },
      { text: { ru: "Безграничную свободу", en: "Boundless freedom", es: "Libertad sin limites" }, archetype: "warrior" },
      { text: { ru: "Тайну", en: "Mystery", es: "Misterio" }, archetype: "sage" },
      { text: { ru: "Величие", en: "Grandeur", es: "Grandeza" }, archetype: "emperor" }
    ]
  },
  { q: { ru: "Какое животное ты выбрал бы своим тотемом?", en: "Which animal would you choose as your totem?", es: "Que animal elegirias como tu totem?" },
    options: [
      { text: { ru: "Волк", en: "Wolf", es: "Lobo" }, archetype: "warrior" },
      { text: { ru: "Сова", en: "Owl", es: "Buho" }, archetype: "sage" },
      { text: { ru: "Орел", en: "Eagle", es: "Aguila" }, archetype: "emperor" },
      { text: { ru: "Дельфин", en: "Dolphin", es: "Delfin" }, archetype: "explorer" }
    ]
  },
  { q: { ru: "Что для тебя важнее всего?", en: "What is most important to you?", es: "Que es lo mas importante para ti?" },
    options: [
      { text: { ru: "Мудрость", en: "Wisdom", es: "Sabiduria" }, archetype: "sage" },
      { text: { ru: "Сила", en: "Strength", es: "Fuerza" }, archetype: "warrior" },
      { text: { ru: "Свобода", en: "Freedom", es: "Libertad" }, archetype: "explorer" },
      { text: { ru: "Власть", en: "Power", es: "Poder" }, archetype: "emperor" }
    ]
  },
  { q: { ru: "Какой элемент тебе ближе?", en: "Which element is closest to you?", es: "Que elemento te es mas cercano?" },
    options: [
      { text: { ru: "Огонь", en: "Fire", es: "Fuego" }, archetype: "warrior" },
      { text: { ru: "Вода", en: "Water", es: "Agua" }, archetype: "explorer" },
      { text: { ru: "Земля", en: "Earth", es: "Tierra" }, archetype: "emperor" },
      { text: { ru: "Воздух", en: "Air", es: "Aire" }, archetype: "sage" }
    ]
  }
];

const ARCHETYPES = {
  emperor: {
    title: { ru: "ИМПЕРАТОР", en: "THE EMPEROR", es: "EL EMPERADOR" },
    desc: { ru: "Ты рожден, чтобы править. В твоей душе живет величие, справедливость и непреклонная воля. Ты — тот, кто строит миры и ведет за собой.", en: "You were born to rule. Greatness, justice, and unyielding will live in your soul. You are the one who builds worlds and leads others.", es: "Naciste para gobernar. La grandeza, la justicia y la voluntad inquebrantable viven en tu alma. Eres quien construye mundos y guia a otros." }
  },
  sage: {
    title: { ru: "МУДРЕЦ", en: "THE SAGE", es: "EL SABIO" },
    desc: { ru: "Ты — хранитель знаний. За твоими глазами — века мудрости. Ты видишь то, что скрыто от других, и твой голос — свет во тьме.", en: "You are the keeper of knowledge. Behind your eyes lie centuries of wisdom. You see what is hidden from others, and your voice is light in darkness.", es: "Eres el guardian del conocimiento. Detras de tus ojos yacen siglos de sabiduria. Ves lo que esta oculto para otros, y tu voz es luz en la oscuridad." }
  },
  warrior: {
    title: { ru: "ВОИН", en: "THE WARRIOR", es: "EL GUERRERO" },
    desc: { ru: "Твое сердце бьется в такт битвам. Ты не ищешь войны, но когда она приходит — ты стоишь там, где другие падают. Твоя сила — в защите слабых.", en: "Your heart beats to the rhythm of battles. You do not seek war, but when it comes — you stand where others fall. Your strength is in protecting the weak.", es: "Tu corazon late al ritmo de las batallas. No buscas la guerra, pero cuando llega — te mantienes donde otros caen. Tu fuerza esta en proteger a los debiles." }
  },
  explorer: {
    title: { ru: "ИСКАТЕЛЬ", en: "THE EXPLORER", es: "EL EXPLORADOR" },
    desc: { ru: "Горизонт зовет тебя. Ты не можешь остаться на месте, потому что в твоей крови — ветер и звезды. Каждый путь — это новая глава твоей легенды.", en: "The horizon calls to you. You cannot stay in one place, because wind and stars run in your blood. Every path is a new chapter of your legend.", es: "El horizonte te llama. No puedes quedarte en un solo lugar, porque el viento y las estrellas corren en tu sangre. Cada camino es un nuevo capitulo de tu leyenda." }
  }
};

let destinyAnswers = [];

function openTrueDestiny() {
  const overlay = document.createElement('div');
  overlay.id = 'destiny-overlay';
  overlay.className = 'destiny-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeTrueDestiny()">&times;</button>
    <div class="destiny-container">
      <div class="destiny-intro">
        <div class="destiny-intro-icon">🔮</div>
        <h2 class="destiny-intro-title">${t('trueDestiny')}</h2>
        <p class="destiny-intro-text">${currentLang === 'ru' ? 'Ответь на вопросы, и древние силы раскроют твою истинную сущность.' : currentLang === 'en' ? 'Answer the questions, and ancient forces will reveal your true essence.' : 'Responde las preguntas, y las fuerzas antiguas revelaran tu verdadera esencia.'}</p>
        <button class="destiny-start-btn" onclick="startDestiny()">${t('destinyStart')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function startDestiny() {
  destinyAnswers = [];
  renderDestinyQuestion(0);
}

function renderDestinyQuestion(index) {
  const q = DESTINY_QUESTIONS[index];
  const container = document.querySelector('.destiny-container');
  container.innerHTML = `
    <button class="overlay-close-x" onclick="closeTrueDestiny()">&times;</button>
    <div class="destiny-progress">${index + 1} / ${DESTINY_QUESTIONS.length}</div>
    <div class="destiny-question-text">${q.q[currentLang]}</div>
    <div class="destiny-options">
      ${q.options.map((opt, i) => `<button class="destiny-option" onclick="answerDestiny(${index}, '${opt.archetype}')">${opt.text[currentLang]}</button>`).join('')}
    </div>
  `;
}

function answerDestiny(index, archetype) {
  destinyAnswers.push(archetype);
  if (index + 1 < DESTINY_QUESTIONS.length) {
    renderDestinyQuestion(index + 1);
  } else {
    showDestinyResult();
  }
}

function showDestinyResult() {
  const counts = {};
  destinyAnswers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
  const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const arch = ARCHETYPES[winner];
  const container = document.querySelector('.destiny-container');
  container.innerHTML = `
    <button class="overlay-close-x" onclick="closeTrueDestiny()">&times;</button>
    <div class="destiny-result">
      <div class="destiny-result-label">${t('destinyResultDesc')}</div>
      <div class="destiny-result-title">${arch.title[currentLang]}</div>
      <div class="destiny-result-divider"></div>
      <div class="destiny-result-desc">${arch.desc[currentLang]}</div>
      <button class="destiny-restart-btn" onclick="startDestiny()">${t('destinyRestartBtn')}</button>
    </div>
  `;
}

function closeTrueDestiny() {
  const overlay = document.getElementById('destiny-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// МУДРОСТЬ СУДЬБЫ
// ============================================================
const WISDOMS = [
  { ru: "Судьба не случайность. Это выбор, который ты делаешь каждый день.", en: "Fate is not chance. It is the choice you make every day.", es: "El destino no es casualidad. Es la eleccion que haces cada dia." },
  { ru: "Тьма не побеждает свет. Она просто уступает ему место.", en: "Darkness does not defeat light. It simply yields to it.", es: "La oscuridad no vence a la luz. Simplemente le cede el lugar." },
  { ru: "Самый длинный путь начинается с первого шага.", en: "The longest journey begins with the first step.", es: "El camino mas largo comienza con el primer paso." },
  { ru: "То, что ты ищешь, ищет тебя.", en: "What you seek is seeking you.", es: "Lo que buscas te esta buscando." },
  { ru: "В каждом конце — начало чего-то нового.", en: "In every end is the beginning of something new.", es: "En cada final hay un comienzo de algo nuevo." },
  { ru: "Смелость — это не отсутствие страха, а победа над ним.", en: "Courage is not the absence of fear, but victory over it.", es: "El coraje no es la ausencia de miedo, sino la victoria sobre el." },
  { ru: "Судьба любит подготовленных.", en: "Fortune favors the prepared.", es: "La fortuna favorece a los preparados." },
  { ru: "Ты — автор своей истории. Пиши ее достойно.", en: "You are the author of your story. Write it with dignity.", es: "Eres el autor de tu historia. Escribela con dignidad." }
];

function openWisdom() {
  const today = new Date().getDay();
  const w = WISDOMS[today % WISDOMS.length];
  const overlay = document.createElement('div');
  overlay.id = 'wisdom-overlay';
  overlay.className = 'wisdom-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeWisdom()">&times;</button>
    <div class="wisdom-container">
      <div class="wisdom-icon">✦</div>
      <div class="wisdom-divider">◆ ◆ ◆</div>
      <div class="wisdom-text">${w[currentLang]}</div>
      <div class="wisdom-divider">◆ ◆ ◆</div>
      <button class="wisdom-close-btn" onclick="closeWisdom()">${t('wisdomClose')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closeWisdom() {
  const overlay = document.getElementById('wisdom-overlay');
  if (overlay) { overlay.classList.remove('active'); setTimeout(() => overlay.remove(), 400); }
}

// ============================================================
// КАПСУЛА ВРЕМЕНИ
// ============================================================
function openTimeCapsule() {
  const dateStr = getFirstLaunchDate();
  const overlay = document.createElement('div');
  overlay.className = 'timecapsule-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.timecapsule-overlay').remove()">&times;</button>
    <div class="timecapsule-container">
      <div class="timecapsule-icon">⏳</div>
      <div class="timecapsule-title">${t('timeCapsuleTitle')}</div>
      <div class="timecapsule-desc">${t('timeCapsuleDesc')}</div>
      <div class="timecapsule-date">${dateStr || '---'}</div>
      <div class="timecapsule-footer">${currentLang === 'ru' ? 'Этот момент навсегда запечатлен в твоей судьбе.' : currentLang === 'en' ? 'This moment is forever sealed in your destiny.' : 'Este momento esta sellado para siempre en tu destino.'}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

// ============================================================
// ОЦЕНКА ПРИЛОЖЕНИЯ
// ============================================================
function openRateApp() {
  const overlay = document.createElement('div');
  overlay.className = 'rate-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.rate-overlay').remove()">&times;</button>
    <div class="rate-container">
      <div class="rate-title">${t('rateTitle')}</div>
      <div class="rate-stars" id="rate-stars">
        ${[1,2,3,4,5].map(i => `<span class="rate-star" data-val="${i}" onclick="submitRate(${i})">★</span>`).join('')}
      </div>
      <div class="rate-hint">${currentLang === 'ru' ? 'Нажми на звезду' : currentLang === 'en' ? 'Tap a star' : 'Toca una estrella'}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function submitRate(stars) {
  const container = document.querySelector('.rate-container');
  const texts = {
    5: t('rate5'), 4: t('rate4'), 3: t('rate3'), 2: t('rate2'), 1: t('rate1')
  };
  container.innerHTML = `
    <div class="rate-thanks">${t('rateThanks')}</div>
    <div class="rate-result-stars">${'★'.repeat(stars)}${'☆'.repeat(5-stars)}</div>
    <div class="rate-result-text">${texts[stars]}</div>
    <a href="https://t.me/YourDestiny_Official" target="_blank" class="rate-tg-link">Telegram</a>
  `;
}

// ============================================================
// ПОДДЕРЖАТЬ АВТОРА
// ============================================================
function openSupportAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'support-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.support-overlay').remove()">&times;</button>
    <div class="support-container">
      <div class="support-title">${t('supportAuthor')}</div>
      <div class="support-desc">${t('supportDesc')}</div>
      <div class="support-card">
        <div class="support-row">
          <span class="support-label">${t('supportCrypto')}</span>
          <span class="support-value">Tron (TRC-20)</span>
        </div>
        <div class="support-divider"></div>
        <div class="support-row">
          <span class="support-label">${t('supportToken')}</span>
          <span class="support-value">USDT</span>
        </div>
        <div class="support-divider"></div>
        <div class="support-row">
          <span class="support-label">${t('supportAddress')}</span>
          <span class="support-value support-wallet">${WALLET}</span>
        </div>
      </div>
      <button class="support-copy-btn" onclick="copyWallet()">${t('supportCopy')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

// ============================================================
// СТАТЬ АВТОРОМ
// ============================================================
function openBecomeAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'author-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.author-overlay').remove()">&times;</button>
    <div class="author-container">
      <div class="author-title">${t('becomeAuthorTitle')}</div>
      <div class="author-legal">${t('becomeAuthorLegal')}</div>
      <button class="author-confirm-btn" onclick="showAuthorDirect(this)">${t('becomeAuthorConfirm')}</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showAuthorDirect(btn) {
  const container = btn.closest('.author-container');
  container.innerHTML = `
    <div class="author-title">${t('becomeAuthorTitle')}</div>
    <div class="author-direct-desc">${t('becomeAuthorDirectDesc')}</div>
    <a href="https://t.me/YourDestiny_Official" target="_blank" class="author-direct-btn">${t('openDirect')}</a>
  `;
}

// ============================================================
// РАСПИСАНИЕ ИСТОРИЙ
// ============================================================
function openStorySchedule() {
  const overlay = document.createElement('div');
  overlay.className = 'schedule-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.schedule-overlay').remove()">&times;</button>
    <div class="schedule-container">
      <div class="schedule-title">${t('scheduleTitle')}</div>
      <div class="schedule-desc">${t('scheduleDesc')}</div>
      <div class="schedule-empty">${t('scheduleEmpty')}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

// ============================================================
// ОБ ИГРЕ
// ============================================================
function openAbout() {
  const overlay = document.createElement('div');
  overlay.className = 'about-overlay';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.about-overlay').remove()">&times;</button>
    <div class="about-container">
      <div class="about-logo">YOUR DESTINY</div>
      <div class="about-version">v4.0</div>
      <div class="about-text">${t('aboutText1')}</div>
      <div class="about-features">
        <div class="about-feature">${t('aboutText2')}</div>
        <div class="about-feature">${t('aboutText3')}</div>
        <div class="about-feature">${t('aboutText4')}</div>
        <div class="about-feature">${t('aboutText5')}</div>
        <div class="about-feature">${t('aboutText6')}</div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

// ============================================================
// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ
// ============================================================
function openTerms() {
  const overlay = document.createElement('div');
  overlay.className = 'terms-overlay';
  const termsText = currentLang === 'ru' ? `
    <h3>1. Общие положения</h3>
    <p>Настоящие Условия использования (далее — Условия) регулируют отношения между пользователем (далее — Пользователь) и администрацией приложения YOUR DESTINY (далее — Приложение).</p>
    <h3>2. Предмет соглашения</h3>
    <p>Приложение предоставляет Пользователю доступ к интерактивным историям, психологическим дилеммам, логическим загадкам и прочему контенту. Весь контент предоставляется на условиях "как есть".</p>
    <h3>3. Права и обязанности сторон</h3>
    <p>Пользователь обязуется не нарушать работу Приложения, не распространять вредоносный код, не использовать Приложение в противоправных целях. Администрация оставляет за собой право изменять функционал, приостанавливать или прекращать работу Приложения без предварительного уведомления.</p>
    <h3>4. Интеллектуальная собственность</h3>
    <p>Все материалы, размещенные в Приложении, включая тексты, изображения, звуки, являются объектами интеллектуальной собственности администрации или правообладателей. Любое копирование, распространение или модификация без письменного разрешения запрещены.</p>
    <h3>5. Ответственность</h3>
    <p>Администрация не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования Приложения.</p>
    <h3>6. Изменение условий</h3>
    <p>Администрация вправе в любое время изменять настоящие Условия. Продолжение использования Приложения после внесения изменений означает согласие Пользователя с новыми Условиями.</p>
    <h3>7. Применимое право</h3>
    <p>Настоящие Условия регулируются законодательством страны регистрации администрации Приложения.</p>
  ` : currentLang === 'en' ? `
    <h3>1. General Provisions</h3>
    <p>These Terms of Use (hereinafter referred to as the Terms) govern the relationship between the user (hereinafter referred to as the User) and the administration of the YOUR DESTINY application (hereinafter referred to as the Application).</p>
    <h3>2. Subject of Agreement</h3>
    <p>The Application provides the User with access to interactive stories, psychological dilemmas, logic puzzles and other content. All content is provided on an "as is" basis.</p>
    <h3>3. Rights and Obligations</h3>
    <p>The User undertakes not to disrupt the operation of the Application, not to distribute malicious code, not to use the Application for illegal purposes. The administration reserves the right to change functionality, suspend or terminate the Application without prior notice.</p>
    <h3>4. Intellectual Property</h3>
    <p>All materials posted in the Application, including texts, images, sounds, are objects of intellectual property of the administration or rights holders. Any copying, distribution or modification without written permission is prohibited.</p>
    <h3>5. Liability</h3>
    <p>The administration is not liable for any direct or indirect damages arising from the use or inability to use the Application.</p>
    <h3>6. Changes to Terms</h3>
    <p>The administration may change these Terms at any time. Continued use of the Application after changes means the User agrees to the new Terms.</p>
    <h3>7. Governing Law</h3>
    <p>These Terms are governed by the laws of the country of registration of the Application administration.</p>
  ` : `
    <h3>1. Disposiciones Generales</h3>
    <p>Estos Terminos de Uso (en adelante, Terminos) regulan la relacion entre el usuario (en adelante, Usuario) y la administracion de la aplicacion YOUR DESTINY (en adelante, Aplicacion).</p>
    <h3>2. Objeto del Acuerdo</h3>
    <p>La Aplicacion proporciona al Usuario acceso a historias interactivas, dilemas psicologicos, acertijos logicos y otro contenido. Todo el contenido se proporciona tal cual.</p>
    <h3>3. Derechos y Obligaciones</h3>
    <p>El Usuario se compromete a no interrumpir el funcionamiento de la Aplicacion, no distribuir codigo malicioso, no usar la Aplicacion con fines ilegales. La administracion se reserva el derecho de cambiar la funcionalidad, suspender o terminar la Aplicacion sin previo aviso.</p>
    <h3>4. Propiedad Intelectual</h3>
    <p>Todos los materiales publicados en la Aplicacion, incluidos textos, imagenes, sonidos, son objetos de propiedad intelectual de la administracion o titulares de derechos. Queda prohibida cualquier copia, distribucion o modificacion sin permiso escrito.</p>
    <h3>5. Responsabilidad</h3>
    <p>La administracion no es responsable de ningun dano directo o indirecto derivado del uso o la imposibilidad de usar la Aplicacion.</p>
    <h3>6. Cambios en los Terminos</h3>
    <p>La administracion puede modificar estos Terminos en cualquier momento. El uso continuado de la Aplicacion despues de los cambios significa que el Usuario acepta los nuevos Terminos.</p>
    <h3>7. Ley Aplicable</h3>
    <p>Estos Terminos se rigen por las leyes del pais de registro de la administracion de la Aplicacion.</p>
  `;
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.terms-overlay').remove()">&times;</button>
    <div class="terms-container">
      <div class="terms-title">${t('termsTitle')}</div>
      <div class="terms-content">${termsText}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

// ============================================================
// ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
// ============================================================
function openPrivacy() {
  const overlay = document.createElement('div');
  overlay.className = 'privacy-overlay';
  const privacyText = currentLang === 'ru' ? `
    <h3>1. Сбор информации</h3>
    <p>Приложение YOUR DESTINY собирает минимальный объем данных, необходимых для функционирования. Мы можем собирать: данные о языке устройства, настройки приложения, информацию о VIP-статусе, локальные сохранения прогресса. Мы не собираем персональные данные без вашего согласия.</p>
    <h3>2. Использование данных</h3>
    <p>Собранные данные используются исключительно для обеспечения работы Приложения: сохранение прогресса, настройка языка и темы, предоставление доступа к контенту. Мы не передаем данные третьим лицам для коммерческих целей.</p>
    <h3>3. Хранение данных</h3>
    <p>Все данные хранятся локально на устройстве Пользователя с использованием localStorage. Мы не имеем доступа к этим данным на наших серверах. При удалении Приложения все локальные данные удаляются.</p>
    <h3>4. Безопасность</h3>
    <p>Мы принимаем разумные меры для защиты данных, однако не можем гарантировать абсолютную безопасность передачи данных через интернет. Пользователь использует Приложение на свой страх и риск.</p>
    <h3>5. Cookies и аналитика</h3>
    <p>Приложение не использует файлы cookie и не встраивает сторонние аналитические сервисы. Мы не отслеживаем ваши действия вне Приложения.</p>
    <h3>6. Права пользователя</h3>
    <p>Пользователь вправе в любой момент удалить все локальные данные через настройки устройства или браузера. Для этого достаточно очистить данные сайта или удалить приложение.</p>
    <h3>7. Изменения политики</h3>
    <p>Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Продолжение использования Приложения после изменений означает согласие с новыми условиями.</p>
  ` : currentLang === 'en' ? `
    <h3>1. Information Collection</h3>
    <p>YOUR DESTINY collects the minimum amount of data necessary for operation. We may collect: device language data, app settings, VIP status information, local progress saves. We do not collect personal data without your consent.</p>
    <h3>2. Use of Data</h3>
    <p>Collected data is used solely to ensure Application operation: saving progress, setting language and theme, providing access to content. We do not transfer data to third parties for commercial purposes.</p>
    <h3>3. Data Storage</h3>
    <p>All data is stored locally on the User's device using localStorage. We do not have access to this data on our servers. When the Application is deleted, all local data is removed.</p>
    <h3>4. Security</h3>
    <p>We take reasonable measures to protect data, but cannot guarantee absolute security of data transmission over the internet. The User uses the Application at their own risk.</p>
    <h3>5. Cookies and Analytics</h3>
    <p>The Application does not use cookies and does not embed third-party analytics services. We do not track your actions outside the Application.</p>
    <h3>6. User Rights</h3>
    <p>The User has the right to delete all local data at any time through device or browser settings. Simply clear site data or delete the application.</p>
    <h3>7. Policy Changes</h3>
    <p>We reserve the right to make changes to this Privacy Policy. Continued use of the Application after changes means agreement with the new terms.</p>
  ` : `
    <h3>1. Recopilacion de Informacion</h3>
    <p>YOUR DESTINY recopila la minima cantidad de datos necesaria para el funcionamiento. Podemos recopilar: datos de idioma del dispositivo, configuracion de la aplicacion, informacion de estado VIP, guardados locales de progreso. No recopilamos datos personales sin su consentimiento.</p>
    <h3>2. Uso de Datos</h3>
    <p>Los datos recopilados se utilizan unicamente para garantizar el funcionamiento de la Aplicacion: guardar progreso, configurar idioma y tema, proporcionar acceso al contenido. No transferimos datos a terceros con fines comerciales.</p>
    <h3>3. Almacenamiento de Datos</h3>
    <p>Todos los datos se almacenan localmente en el dispositivo del Usuario usando localStorage. No tenemos acceso a estos datos en nuestros servidores. Al eliminar la Aplicacion, todos los datos locales se eliminan.</p>
    <h3>4. Seguridad</h3>
    <p>Tomamos medidas razonables para proteger los datos, pero no podemos garantizar la seguridad absoluta de la transmision de datos por internet. El Usuario utiliza la Aplicacion bajo su propio riesgo.</p>
    <h3>5. Cookies y Analitica</h3>
    <p>La Aplicacion no utiliza cookies ni incrusta servicios analiticos de terceros. No rastreamos sus acciones fuera de la Aplicacion.</p>
    <h3>6. Derechos del Usuario</h3>
    <p>El Usuario tiene derecho a eliminar todos los datos locales en cualquier momento a traves de la configuracion del dispositivo o navegador. Simplemente borre los datos del sitio o elimine la aplicacion.</p>
    <h3>7. Cambios en la Politica</h3>
    <p>Nos reservamos el derecho de realizar cambios en esta Politica de Privacidad. El uso continuado de la Aplicacion despues de los cambios significa acuerdo con los nuevos terminos.</p>
  `;
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="this.closest('.privacy-overlay').remove()">&times;</button>
    <div class="privacy-container">
      <div class="privacy-title">${t('privacyTitle')}</div>
      <div class="privacy-content">${privacyText}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}
