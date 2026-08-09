// ============================================================
// YOUR DESTINY — Telegram Mini App v2.0
// Полный движок визуальной новеллы
// ============================================================

// ---------- Глобальные переменные ----------
let tg = null;
let currentScreen = 'novels';
let currentStory = null;
let currentChapter = null;
let currentScene = null;
let stories = [];
let isMusicPlaying = false;
let bgMusic = null;
let visualEffectsEnabled = true;
let currentTheme = 'burgundy';

// ---------- Инициализация ----------
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  initParticles();
  initNavigation();
  loadStories();
  loadSettings();
  initIntro();
  initFateDilemmas();
  initLabyrinth();
  initTrueDestiny();
  initWisdom();
});

function initTelegram() {
  if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#0a0618');
    tg.setBackgroundColor('#0a0618');
  }
}

// ---------- Интро ----------
function initIntro() {
  const intro = document.getElementById('intro-screen');
  const app = document.getElementById('app-container');
  const nav = document.getElementById('bottom-nav');

  const introShown = localStorage.getItem('intro_shown');

  if (introShown) {
    intro.style.display = 'none';
    app.classList.add('active');
    nav.style.display = 'flex';
    initMusic();
    return;
  }

  setTimeout(() => {
    intro.style.opacity = '0';
    intro.style.transition = 'opacity 1.5s ease';
    setTimeout(() => {
      intro.style.display = 'none';
      app.classList.add('active');
      nav.style.display = 'flex';
      localStorage.setItem('intro_shown', 'true');
      initMusic();
    }, 1500);
  }, 4500);
}

// ---------- Музыка ----------
function initMusic() {
  const musicToggle = document.getElementById('music-toggle');
  const savedMusic = localStorage.getItem('music_enabled');

  if (savedMusic === 'true') {
    isMusicPlaying = true;
    musicToggle.classList.add('active');
    playBgMusic();
  }
}

function playBgMusic() {
  if (!bgMusic) {
    bgMusic = new Audio('bg_music.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
  }
  bgMusic.play().catch(() => {});
}

function stopBgMusic() {
  if (bgMusic) {
    bgMusic.pause();
  }
}

function toggleMusicSetting() {
  const toggle = document.getElementById('music-toggle');
  isMusicPlaying = !isMusicPlaying;
  toggle.classList.toggle('active');
  localStorage.setItem('music_enabled', isMusicPlaying);

  if (isMusicPlaying) {
    playBgMusic();
  } else {
    stopBgMusic();
  }
}

function toggleVisualEffects() {
  const toggle = document.getElementById('effects-toggle');
  visualEffectsEnabled = !visualEffectsEnabled;
  toggle.classList.toggle('active');
  localStorage.setItem('effects_enabled', visualEffectsEnabled);

  const canvas = document.getElementById('particles-canvas');
  canvas.style.display = visualEffectsEnabled ? 'block' : 'none';
}

// ---------- Частицы ----------
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.2,
      opacity: Math.random() * 0.5 + 0.1
    });
  }

  function animate() {
    if (!visualEffectsEnabled) {
      requestAnimationFrame(animate);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// ---------- Навигация ----------
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
  currentScreen = screen;

  const subtitle = document.getElementById('header-subtitle');
  const titles = {
    novels: 'Новеллы',
    surveys: 'Анкеты',
    contacts: 'Контакты',
    favorites: 'Любимое',
    settings: 'Настройки'
  };
  subtitle.textContent = titles[screen] || '';
}

// ---------- Загрузка историй ----------
function loadStories() {
  stories = [
    {
      id: 'story_1',
      title: 'Тени Забытого Замка',
      description: 'Таинственная история о древнем проклятии и судьбе, которая связывает два мира.',
      chapters: 4,
      status: 'new',
      thumb: '🏰'
    },
    {
      id: 'story_2',
      title: 'Звёздные Нити',
      description: 'Космическая одиссея, где каждое решение меняет галактику.',
      chapters: 3,
      status: 'new',
      thumb: '✨'
    }
  ];

  renderStories();
}

function renderStories() {
  const container = document.getElementById('novels-list');

  if (stories.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📚</div>
        <p>Истории скоро появятся...</p>
      </div>`;
    return;
  }

  container.innerHTML = stories.map(story => {
    const progress = getStoryProgress(story.id);
    const statusClass = progress.completed ? 'status-completed' : 
                       progress.started ? 'status-continue' : 'status-new';
    const statusText = progress.completed ? 'Пройдено' : 
                       progress.started ? 'Продолжить' : 'Новая';

    return `
      <div class="card story-card" onclick="openStory('${story.id}')">
        <div class="story-thumb">${story.thumb}</div>
        <div class="story-info">
          <div class="story-title">${story.title}</div>
          <div class="story-meta">${story.description}</div>
          <div class="story-meta">Глав: ${story.chapters} · Прогресс: ${progress.chapter || 0}/${story.chapters}</div>
          <span class="story-status ${statusClass}">${statusText}</span>
        </div>
      </div>
    `;
  }).join('');
}

function getStoryProgress(storyId) {
  const data = localStorage.getItem('progress_' + storyId);
  return data ? JSON.parse(data) : { chapter: 0, scene: 's1', started: false, completed: false };
}

function openStory(storyId) {
  const story = stories.find(s => s.id === storyId);
  if (!story) return;

  currentStory = story;
  const progress = getStoryProgress(storyId);
  const nextChapter = progress.chapter + 1;

  if (nextChapter > 2 && !isVip()) {
    showLockScreen();
    return;
  }

  loadChapter(storyId, nextChapter);
}

function loadChapter(storyId, chapterNum) {
  const demoScenes = {
    s1: {
      id: 's1',
      background: 'linear-gradient(180deg, #1a0a2e, #0d0518)',
      character_name: '???',
      character_image: '',
      text: 'Тьма окутывает стены древнего замка. Вы стоите перед массивными воротами, за которыми скрывается тайна веков...',
      choices: [
        { text: 'Толкнуть ворота', next_scene: 's2' },
        { text: 'Осмотреться вокруг', next_scene: 's3' }
      ]
    },
    s2: {
      id: 's2',
      background: 'linear-gradient(180deg, #2a1a3a, #1a0a2e)',
      character_name: 'Тень',
      character_image: '',
      text: 'Ворота со скрипом открываются. Из темноты доносится шёпот: «Ты пришёл. Я ждал тебя столетия...»',
      choices: [
        { text: 'Кто ты?', next_scene: 's1' },
        { text: 'Я знаю, зачем я здесь', next_scene: 's1' }
      ]
    },
    s3: {
      id: 's3',
      background: 'linear-gradient(180deg, #0f2a0f, #0a1a0a)',
      character_name: '???',
      character_image: '',
      text: 'Вы замечаете странные символы на камнях. Они мерцают золотым светом, словно приглашая разгадать их секрет...',
      choices: [
        { text: 'Коснуться символов', next_scene: 's1' },
        { text: 'Запомнить и войти', next_scene: 's2' }
      ]
    }
  };

  currentChapter = { scenes: demoScenes };
  currentScene = 's1';

  document.getElementById('reader-container').classList.add('active');
  stopBgMusic();
  renderScene();
}

function renderScene() {
  const scene = currentChapter.scenes[currentScene];
  if (!scene) return;

  const bg = document.getElementById('reader-bg');
  const char = document.getElementById('reader-character');
  const name = document.getElementById('reader-name');
  const text = document.getElementById('reader-text');
  const choices = document.getElementById('reader-choices');

  bg.style.background = scene.background;
  char.src = scene.character_image || '';
  char.style.display = scene.character_image ? 'block' : 'none';
  name.textContent = scene.character_name || '';

  text.textContent = '';
  let i = 0;
  function type() {
    if (i < scene.text.length) {
      text.textContent += scene.text[i];
      i++;
      setTimeout(type, 20);
    }
  }
  type();

  choices.innerHTML = scene.choices.map((c, idx) => `
    <button class="choice-btn" onclick="makeChoice('${c.next_scene}')" style="animation-delay:${0.1 + idx * 0.12}s">
      ${c.text}
    </button>
  `).join('');
}

function makeChoice(nextScene) {
  currentScene = nextScene;
  renderScene();
}

function togglePauseMenu() {
  document.getElementById('pause-overlay').classList.add('active');
}

function resumeReader() {
  document.getElementById('pause-overlay').classList.remove('active');
}

function restartChapter() {
  currentScene = 's1';
  document.getElementById('pause-overlay').classList.remove('active');
  renderScene();
}

function exitToMenu() {
  document.getElementById('reader-container').classList.remove('active');
  document.getElementById('pause-overlay').classList.remove('active');
  playBgMusic();
}

function closeReader() {
  document.getElementById('reader-container').classList.remove('active');
  playBgMusic();
}

// ---------- VIP ----------
function isVip() {
  const vipData = localStorage.getItem('vip_data');
  if (!vipData) return false;
  const data = JSON.parse(vipData);
  return new Date(data.expires) > new Date();
}

function showLockScreen() {
  document.getElementById('lock-screen').classList.add('active');
}

function hideLockScreen() {
  document.getElementById('lock-screen').classList.remove('active');
}

function goToSettingsFromLock() {
  hideLockScreen();
  switchScreen('settings');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-screen="settings"]').classList.add('active');
}

// ---------- Промокод ----------
function activatePromo() {
  const input = document.getElementById('promo-input');
  const status = document.getElementById('promo-status');
  const code = input.value.trim().toUpperCase();

  const validCodes = ['DESTINY2024', 'VIPFREE', 'FATE2024'];

  if (validCodes.includes(code)) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    localStorage.setItem('vip_data', JSON.stringify({
      code: code,
      activated: new Date().toISOString(),
      expires: expires.toISOString()
    }));

    status.className = 'promo-status success';
    status.textContent = '✨ VIP активирован на 30 дней!';
    status.style.display = 'block';
    updateVipDisplay();
  } else {
    status.className = 'promo-status error';
    status.textContent = '❌ Неверный промокод. Попробуйте ещё раз.';
    status.style.display = 'block';
  }
}

function updateVipDisplay() {
  const vipStatus = document.getElementById('vip-status');
  const vipDays = document.getElementById('vip-days');

  if (isVip()) {
    const data = JSON.parse(localStorage.getItem('vip_data'));
    const days = Math.ceil((new Date(data.expires) - new Date()) / (1000 * 60 * 60 * 24));
    vipStatus.textContent = 'VIP активен ⭐';
    vipDays.textContent = 'Осталось ' + days + ' дней';
  } else {
    vipStatus.textContent = 'Бесплатная версия';
    vipDays.textContent = 'Первые 2 главы бесплатно. Промокод можно найти в Telegram-канале @YourDestiny_Official';
  }
}

// ---------- Темы ----------
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  currentTheme = theme;
  localStorage.setItem('theme', theme);

  document.querySelectorAll('.color-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === theme);
  });

  const names = {
    burgundy: 'Бордо',
    green: 'Изумруд',
    blue: 'Сапфир',
    purple: 'Аметист',
    dark: 'Ночь',
    gold: 'Золото',
    crimson: 'Кармин',
    ocean: 'Океан',
    sunset: 'Закат'
  };
  document.getElementById('theme-name').textContent = names[theme] || theme;
}

// ---------- Настройки ----------
function loadSettings() {
  const savedTheme = localStorage.getItem('theme') || 'burgundy';
  setTheme(savedTheme);

  const effects = localStorage.getItem('effects_enabled');
  if (effects === 'false') {
    document.getElementById('effects-toggle').classList.remove('active');
    visualEffectsEnabled = false;
    document.getElementById('particles-canvas').style.display = 'none';
  }

  updateVipDisplay();
}

function resetProgress() {
  if (confirm('Вы уверены? Весь прогресс будет удалён безвозвратно.')) {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('progress_') || key === 'fate_dilemmas' || key === 'labyrinth' || 
          key === 'true_destiny' || key === 'wisdom_index' || key === 'intro_shown') {
        localStorage.removeItem(key);
      }
    });
    showToast('Прогресс сброшен');
    renderStories();
  }
}

// ---------- Toast ----------
function showToast(message) {
  const existing = document.querySelector('.toast-message');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

// ============================================================
// ХРОНИКИ СУДЬБЫ — Fate Dilemmas (25 вопросов)
// ============================================================
const FATE_DILEMMAS = [
  {
    question: "Ты стоишь перед двумя дверями. За одной — известная, но скучная жизнь. За другой — неизвестность, полная опасностей и чудес. Что выберешь?",
    a: "Безопасность и покой",
    b: "Риск и приключения",
    stats: { a: 41.3, b: 58.7 },
    analysis: "Ты — искатель. Твое сердце тянется к горизонтам, которые еще не нарисованы. Но помни: великие открытия требуют великих жертв."
  },
  {
    question: "Волшебник предлагает тебе один дар: либо способность читать мысли, либо умение стирать воспоминания. Что возьмешь?",
    a: "Читать мысли",
    b: "Стирать воспоминания",
    stats: { a: 62.9, b: 37.1 },
    analysis: "Желание видеть скрытое — величайшее проклятие. Ты готов к правде, какой бы горькой она ни была."
  },
  {
    question: "Ты можешь спасти одного человека: либо незнакомого гения, который изобретет лекарство от всех болезней, либо свою любимую мать. Кого спасешь?",
    a: "Гения ради человечества",
    b: "Свою мать",
    stats: { a: 29.8, b: 70.2 },
    analysis: "Сердце побеждает разум. Ты выбираешь любовь перед величием — и это делает тебя человеком."
  },
  {
    question: "Тебе предложили вечную жизнь, но без возможности умереть. Принимаешь?",
    a: "Да, жить вечно",
    b: "Нет, смерть — часть жизни",
    stats: { a: 35.4, b: 64.6 },
    analysis: "Ты ценишь конечность. Ведь именно она делает каждый момент бесценным."
  },
  {
    question: "Ты можешь вернуться в прошлое и изменить одно решение. Сделаешь это?",
    a: "Да, исправлю ошибку",
    b: "Нет, все сложилось так, как должно",
    stats: { a: 54.6, b: 45.4 },
    analysis: "Желание исправить прошлое — естественно. Но помни: именно ошибки сделали тебя тем, кто ты есть."
  },
  {
    question: "Ты нашел карту сокровищ, но путь лежит через проклятый лес, откуда никто не возвращался. Пойдешь?",
    a: "Да, сокровище стоит риска",
    b: "Нет, жизнь дороже золота",
    stats: { a: 48.2, b: 51.8 },
    analysis: "Ты на грани. Жадность и мудрость борются в тебе. Победитель определит твою судьбу."
  },
  {
    question: "Можешь узнать дату своей смерти. Хочешь знать?",
    a: "Да, знание — сила",
    b: "Нет, пусть будет сюрприз",
    stats: { a: 38.7, b: 61.3 },
    analysis: "Ты предпочитаешь танец неизвестности. Красиво. Но помни: знание иногда дает силу изменить судьбу."
  },
  {
    question: "Тебе дали шанс стать невидимым на один день. Как используешь?",
    a: "Узнаю секреты других",
    b: "Просто понаблюдаю за миром",
    stats: { a: 67.1, b: 32.9 },
    analysis: "Любопытство — твой двигатель. Но будь осторожен: некоторые тайны лучше не знать."
  },
  {
    question: "Ты можешь обменять свою тень на способность летать. Согласен?",
    a: "Да, полет — свобода",
    b: "Нет, тень — часть меня",
    stats: { a: 72.4, b: 27.6 },
    analysis: "Ты готов расстаться с частью себя ради мечты. Отважно. Но помни: без тени ты потеряешь связь с землей."
  },
  {
    question: "Волшебное зеркало покажет твою истинную сущность. Посмотришь?",
    a: "Да, я хочу знать правду",
    b: "Нет, некоторые вещи лучше не видеть",
    stats: { a: 55.8, b: 44.2 },
    analysis: "Ты ищешь себя. Это путь героев и безумцев. Удачи на этом пути."
  },
  {
    question: "Ты можешь забыть самое болезненное воспоминание. Сделаешь это?",
    a: "Да, освобождение от боли",
    b: "Нет, боль — часть меня",
    stats: { a: 43.1, b: 56.9 },
    analysis: "Ты принимаешь боль как учителя. Редкое мужество. Но иногда забыть — тоже сила."
  },
  {
    question: "Тебе предложили стать правителем мира, но при этом потерять способность любить. Согласен?",
    a: "Да, величие требует жертв",
    b: "Нет, любовь важнее власти",
    stats: { a: 18.3, b: 81.7 },
    analysis: "Ты выбираешь сердце. В мире, где власть развращает, это редкий и драгоценный выбор."
  },
  {
    question: "Ты нашел книгу, которая предсказывает будущее. Но каждое прочтение отнимает год жизни. Прочтешь?",
    a: "Да, знание стоит всего",
    b: "Нет, не хочу платить такую цену",
    stats: { a: 31.5, b: 68.5 },
    analysis: "Ты ценишь жизнь дороже предсказаний. Мудро. Будущее лучше создавать, чем читать."
  },
  {
    question: "Можешь поговорить с любым умершим человеком на один час. С кем?",
    a: "С родственником, которого потерял",
    b: "С великим мудрецом прошлого",
    stats: { a: 76.2, b: 23.8 },
    analysis: "Сердце зовет сильнее разума. Ты выбираешь любовь перед мудростью — и это прекрасно."
  },
  {
    question: "Ты можешь остановить время на один день. Что сделаешь?",
    a: "Исправлю все свои ошибки",
    b: "Просто наслажусь моментом",
    stats: { a: 58.4, b: 41.6 },
    analysis: "Ты — перфекционист. Желание исправить прошлое говорит о глубокой ответственности."
  },
  {
    question: "Волшебный фонарь покажет тебе, каким станет мир через 100 лет. Посмотришь?",
    a: "Да, мне интересно будущее",
    b: "Нет, пусть будет сюрпризом",
    stats: { a: 63.7, b: 36.3 },
    analysis: "Ты — провидец. Желание заглянуть вперед — дар и проклятие одновременно."
  },
  {
    question: "Ты можешь обменять свой голос на способность понимать языки всех живых существ. Согласен?",
    a: "Да, понимание важнее слов",
    b: "Нет, мой голос — моя душа",
    stats: { a: 44.9, b: 55.1 },
    analysis: "Ты ценишь свое слово. В мире, где слова теряют значение, это редкое качество."
  },
  {
    question: "Тебе дали шанс пережить один день из жизни любого исторического персонажа. Выберешь?",
    a: "Да, это уникальный опыт",
    b: "Нет, моя жизнь достаточно интересна",
    stats: { a: 81.3, b: 18.7 },
    analysis: "Ты жаждешь опыта. Желание прикоснуться к истории — признак великого ума."
  },
  {
    question: "Ты можешь узнать, что думают о тебе все люди, которых ты знаешь. Хочешь?",
    a: "Да, правда освобождает",
    b: "Нет, некоторые мысли лучше не знать",
    stats: { a: 39.2, b: 60.8 },
    analysis: "Ты предпочитаешь иллюзию мира. Иногда неведение — действительно благо."
  },
  {
    question: "Можешь вернуть к жизни одного человека, но при этом кто-то другой умрет. Сделаешь?",
    a: "Да, если это спасет близкого",
    b: "Нет, я не решаю, кто жить",
    stats: { a: 33.6, b: 66.4 },
    analysis: "Ты отказываешься играть в бога. Это мудрость, которую мало кто обретает."
  },
  {
    question: "Ты нашел лампу с джинном, но он предлагает только одно желание вместо трех. Загадаешь?",
    a: "Да, одно желание лучше, чем ничего",
    b: "Нет, это подозрительно",
    stats: { a: 57.1, b: 42.9 },
    analysis: "Ты — оптимист. Видишь возможности там, где другие видят ловушки."
  },
  {
    question: "Ты можешь стать невероятно богатым, но при этом потеряешь всех друзей. Согласен?",
    a: "Да, деньги решают все",
    b: "Нет, дружба важнее золота",
    stats: { a: 12.4, b: 87.6 },
    analysis: "Ты выбираешь людей. В мире, где все продается, это бесценный выбор."
  },
  {
    question: "Тебе предложили способность видеть ауру каждого человека. Принимаешь?",
    a: "Да, это даст мне преимущество",
    b: "Нет, пусть люди останутся загадкой",
    stats: { a: 52.3, b: 47.7 },
    analysis: "Ты на грани. Желание видеть скрытое борется с уважением к тайне других."
  },
  {
    question: "Ты можешь отправить послание самому себе в прошлое, но только одно слово. Какое?",
    a: "Верь — в себя и мир",
    b: "Беги — от опасности",
    stats: { a: 68.9, b: 31.1 },
    analysis: "Ты — верующий. Вера в лучшее — самая мощная сила во вселенной."
  },
  {
    question: "В последний день перед концом света ты можешь сделать одно дело. Какое?",
    a: "Провести время с любимыми",
    b: "Совершить великий поступок",
    stats: { a: 84.7, b: 15.3 },
    analysis: "В конце всего ты выбираешь любовь. Это и есть ответ на главный вопрос жизни."
  }
];

const NEXT_BUTTON_TEXTS = [
  "Шагнуть в неизвестность...",
  "Продолжить плетение нитей...",
  "Слушать шепот звезд...",
  "Принять последствия...",
  "Следовать за тенью...",
  "Развернуть следующую страницу...",
  "Пересечь порог...",
  "Узнать правду...",
  "Поверить интуиции...",
  "Открыть новую дверь...",
  "Поймать ветер перемен...",
  "Следовать зову сердца...",
  "Разгадать следующую тайну...",
  "Принять вызов судьбы...",
  "Войти в портал...",
  "Перевернуть карту...",
  "Услышать голос вселенной...",
  "Сделать следующий шаг...",
  "Прочесть следующую строку...",
  "Пересечь рубикон...",
  "Взглянуть в бездну...",
  "Поймать падающую звезду...",
  "Открыть тайный ящик...",
  "Свернуть горы...",
  "Встретить рассвет..."
];

function initFateDilemmas() {
  const chroniclesBtn = document.querySelector('[onclick*="Хроники Судьбы"]');
  if (chroniclesBtn) {
    chroniclesBtn.setAttribute('onclick', 'openFateDilemmas()');
  }
}

function openFateDilemmas() {
  const saved = localStorage.getItem('fate_dilemmas');
  let state = saved ? JSON.parse(saved) : { currentIndex: 0, answers: [] };

  if (state.currentIndex >= FATE_DILEMMAS.length) {
    showFateFinal();
    return;
  }

  renderFateQuestion(state.currentIndex);
}

function renderFateQuestion(index) {
  const dilemma = FATE_DILEMMAS[index];

  const overlay = document.createElement('div');
  overlay.id = 'fate-overlay';
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `
    <div class="fate-container">
      <div class="fate-counter">${index + 1} / ${FATE_DILEMMAS.length}</div>
      <div class="fate-question">${dilemma.question}</div>
      <div class="fate-choices" id="fate-choices">
        <button class="fate-btn" onclick="answerFate(${index}, 'a')">
          <span class="fate-btn-text">${dilemma.a}</span>
        </button>
        <button class="fate-btn" onclick="answerFate(${index}, 'b')">
          <span class="fate-btn-text">${dilemma.b}</span>
        </button>
      </div>
      <div class="fate-result" id="fate-result" style="display:none;">
        <div class="fate-stats">
          <div class="fate-stat-bar">
            <div class="fate-stat-fill" id="stat-a" style="width:0%"></div>
            <span class="fate-stat-label">${dilemma.stats.a}%</span>
          </div>
          <div class="fate-stat-bar">
            <div class="fate-stat-fill" id="stat-b" style="width:0%"></div>
            <span class="fate-stat-label">${dilemma.stats.b}%</span>
          </div>
        </div>
        <div class="fate-analysis">${dilemma.analysis}</div>
        <button class="fate-next" onclick="nextFateQuestion()">${NEXT_BUTTON_TEXTS[index]}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function answerFate(index, choice) {
  const dilemma = FATE_DILEMMAS[index];
  const choicesDiv = document.getElementById('fate-choices');
  const resultDiv = document.getElementById('fate-result');

  createGoldExplosion();

  choicesDiv.style.opacity = '0';
  choicesDiv.style.transform = 'scale(0.9)';
  choicesDiv.style.transition = 'all 0.5s ease';

  setTimeout(() => {
    choicesDiv.style.display = 'none';
    resultDiv.style.display = 'block';

    setTimeout(() => {
      document.getElementById('stat-a').style.width = dilemma.stats.a + '%';
      document.getElementById('stat-b').style.width = dilemma.stats.b + '%';
    }, 100);

    let state = JSON.parse(localStorage.getItem('fate_dilemmas') || '{"currentIndex":0,"answers":[]}');
    state.answers.push({ index: index, choice: choice });
    state.currentIndex = index + 1;
    localStorage.setItem('fate_dilemmas', JSON.stringify(state));
  }, 500);
}

function createGoldExplosion() {
  const overlay = document.getElementById('fate-overlay');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'gold-particle';
    particle.style.left = '50%';
    particle.style.top = '50%';
    particle.style.setProperty('--tx', (Math.random() - 0.5) * 400 + 'px');
    particle.style.setProperty('--ty', (Math.random() - 0.5) * 400 + 'px');
    overlay.appendChild(particle);
    setTimeout(() => particle.remove(), 1500);
  }
}

function nextFateQuestion() {
  const overlay = document.getElementById('fate-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    openFateDilemmas();
  }, 400);
}

function showFateFinal() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `
    <div class="fate-container fate-final">
      <div class="fate-final-title">✨ Хроники Судьбы завершены ✨</div>
      <div class="fate-final-text">
        Хроники Судьбы на этом обрываются... Все новые дилеммы и сюжетные развилки появятся в следующих масштабных обновлениях вселенной Your Destiny. Но вы можете продолжить влиять на судьбы прямо сейчас!
      </div>
      <div class="fate-tg-block">
        <p>Точно такие же крутые интерактивные опросы, дилеммы и важные голосования регулярно проходят в нашем официальном Telegram-канале, где каждый голос напрямую меняет сюжет будущих историй.</p>
        <a href="https://t.me/YourDestiny_Official" target="_blank" class="fate-tg-btn">📢 Наш Telegram канал</a>
      </div>
      <button class="fate-next" onclick="closeFateDilemmas()">Вернуться в меню</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function closeFateDilemmas() {
  const overlay = document.querySelector('.fate-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 400);
  }
}

// ============================================================
// ЛАБИРИНТ ЗАГАДОК (10 загадок)
// ============================================================
const LABYRINTH_RIDDLES = [
  {
    riddle: "У меня есть города, но нет домов. У меня есть горы, но нет деревьев. У меня есть вода, но нет рыбы. У меня есть дороги, но нет машин. Что я?",
    hints: [
      "Это то, что ты можешь свернуть и положить в карман.",
      "Путешественники используют это каждый день.",
      "На ней нарисован весь мир."
    ],
    answer: "Это карта. Карта изображает города, горы, водоемы и дороги, но сама по себе не содержит ни домов, ни деревьев, ни рыбы, ни машин — только их изображения."
  },
  {
    riddle: "Чем больше из этого забираешь, тем больше оно становится. Что это?",
    hints: [
      "Это связано с землей.",
      "Садовники знают ответ.",
      "Это яма или ров."
    ],
    answer: "Это яма. Чем больше земли ты из нее выкапываешь, тем больше становится сама яма."
  },
  {
    riddle: "Я легкий как перышко, но самый сильный человек не может удержать меня более пяти минут. Что я?",
    hints: [
      "Это не физический предмет.",
      "Все делают это каждую ночь.",
      "Без него жизнь невозможна."
    ],
    answer: "Это дыхание. Даже самый сильный человек не может задержать дыхание дольше нескольких минут."
  },
  {
    riddle: "Я принадлежу тебе, но другие используют меня чаще, чем ты сам. Что я?",
    hints: [
      "Это часть твоей личности.",
      "Оно звучит, когда кто-то обращается к тебе.",
      "Это твое имя."
    ],
    answer: "Это твое имя. Оно принадлежит тебе, но другие произносят его гораздо чаще, чем ты сам."
  },
  {
    riddle: "У меня есть ключи, но нет замков. У меня есть космос, но нет комнат. Ты можешь попасть внутрь, но никогда не выйдешь. Что я?",
    hints: [
      "Это цифровой мир.",
      "Ты используешь это каждый день.",
      "На нем есть буквы и цифры."
    ],
    answer: "Это клавиатура. У нее есть клавиши (keys), пробел (space), и ты можешь войти (enter), но никогда не выйдешь (escape — это тоже клавиша, но в данном контексте игра слов)."
  },
  {
    riddle: "Я всегда иду, но никогда не прихожу. У меня есть кровать, но никогда не сплю. У меня есть рот, но никогда не ем. Что я?",
    hints: [
      "Это природное явление.",
      "Оно течет всегда.",
      "Рыбы живут в нем."
    ],
    answer: "Это река. Река течет (идет), у нее есть русло (кровать — riverbed), и устье (рот — mouth), но она не спит и не ест."
  },
  {
    riddle: "Что можно сломать, даже не касаясь?",
    hints: [
      "Это нематериально.",
      "Его легко потерять.",
      "Его трудно восстановить."
    ],
    answer: "Это обещание или доверие. Их можно сломать словами и действиями, даже не прикасаясь физически."
  },
  {
    riddle: "Я начинаюсь там, где заканчивается ночь, и заканчиваюсь там, где начинается день. Что я?",
    hints: [
      "Это буква.",
      "Она есть в словах 'рассвет' и 'закат'.",
      "Это первая буква алфавита."
    ],
    answer: "Это буква 'Р' — начало слова 'рассвет'. Но более точный ответ: это буква, которая начинает слова, обозначающие границу между ночью и днем."
  },
  {
    riddle: "У меня нет жизни, но я умираю. У меня нет легких, но я нуждаюсь в воздухе. У меня нет рта, но вода убивает меня. Что я?",
    hints: [
      "Это яркое и опасное.",
      "Оно согревает и сжигает.",
      "Прометей украл его для людей."
    ],
    answer: "Это огонь. Огонь 'живет' и 'умирает', ему нужен кислород (воздух), и вода его тушит."
  },
  {
    riddle: "Я создан человеком, но человек меня не видит. Я всегда рядом, но никогда не рядом. Я есть у всех, но никто не может меня потрогать. Что я?",
    hints: [
      "Это нематериально, но реально.",
      "Оно течет незаметно.",
      "Прошлое, настоящее и будущее зависят от него."
    ],
    answer: "Это время. Время создано человеком для его измерения, но само по себе нематериально. Оно всегда рядом, но его нельзя потрогать."
  }
];

function initLabyrinth() {
  const labyrinthBtn = document.querySelector('[onclick*="Лабиринт Загадок"]');
  if (labyrinthBtn) {
    labyrinthBtn.setAttribute('onclick', 'openLabyrinth()');
  }
}

function openLabyrinth() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };

  if (state.currentRiddle >= LABYRINTH_RIDDLES.length) {
    showLabyrinthFinal();
    return;
  }

  showLabyrinthStart();
}

function showLabyrinthStart() {
  const overlay = document.createElement('div');
  overlay.id = 'labyrinth-overlay';
  overlay.className = 'labyrinth-overlay';
  overlay.innerHTML = `
    <div class="labyrinth-container">
      <div class="labyrinth-title">🗝️ Лабиринт Загадок</div>
      <div class="labyrinth-intro">
        <p>Добро пожаловать в Лабиринт Загадок!</p>
        <p>Здесь тебя ждут 10 необычных и сложных тайн. Чтобы выбраться из лабиринта, тебе нужно пройти их все.</p>
        <div class="labyrinth-rules">
          <p>🧭 <b>Один за другим:</b> Новая загадка откроется только тогда, когда ты узнаешь ответ на предыдущую.</p>
          <p>⏳ <b>Не спеши:</b> Не заглядывай в ответ до последнего. Ты можешь размышлять над загадкой часами, днями или даже неделями.</p>
          <p>💡 <b>Помощь:</b> Если мысли зайдут в тупик, ты всегда можешь воспользоваться подсказками под номерами 1, 2 и 3 или открыть готовый ответ.</p>
        </div>
        <p class="labyrinth-ready">Готов начать? Лабиринт ждет.</p>
        <button class="labyrinth-enter-btn" onclick="enterLabyrinth()">🗝️ Войти в Лабиринт</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function enterLabyrinth() {
  const overlay = document.getElementById('labyrinth-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    renderLabyrinthRiddle();
  }, 400);
}

function renderLabyrinthRiddle() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  const riddle = LABYRINTH_RIDDLES[state.currentRiddle];

  const overlay = document.createElement('div');
  overlay.id = 'labyrinth-overlay';
  overlay.className = 'labyrinth-overlay active';
  overlay.innerHTML = `
    <div class="labyrinth-container">
      <div class="labyrinth-counter">Загадка ${state.currentRiddle + 1} из ${LABYRINTH_RIDDLES.length}</div>
      <div class="labyrinth-riddle">${riddle.riddle}</div>

      <div class="labyrinth-hints">
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(0) ? 'used' : ''}" onclick="showLabyrinthHint(0)">1</button>
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(1) ? 'used' : ''}" onclick="showLabyrinthHint(1)">2</button>
        <button class="labyrinth-hint-btn ${state.hintsUsed.includes(2) ? 'used' : ''}" onclick="showLabyrinthHint(2)">3</button>
      </div>

      <div class="labyrinth-hint-text" id="labyrinth-hint-text"></div>

      <button class="labyrinth-answer-btn" id="labyrinth-answer-btn" onclick="showLabyrinthAnswerConfirm()">👁️ Посмотреть ответ</button>

      <div class="labyrinth-answer" id="labyrinth-answer" style="display:none;">
        <div class="labyrinth-answer-text">${riddle.answer}</div>
        <button class="labyrinth-next-btn" onclick="nextLabyrinthRiddle()">Идти дальше ➔</button>
      </div>

      <button class="labyrinth-close" onclick="closeLabyrinth()">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function showLabyrinthHint(hintIndex) {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  const riddle = LABYRINTH_RIDDLES[state.currentRiddle];

  if (!state.hintsUsed.includes(hintIndex)) {
    state.hintsUsed.push(hintIndex);
    localStorage.setItem('labyrinth', JSON.stringify(state));
  }

  const hintText = document.getElementById('labyrinth-hint-text');
  hintText.textContent = riddle.hints[hintIndex];
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
      <p>Вы уверены, что хотите посмотреть ответ сейчас?</p>
      <div class="labyrinth-confirm-btns">
        <button onclick="closeLabyrinthConfirm()">Назад к загадке</button>
        <button onclick="revealLabyrinthAnswer()">Да, открыть ответ</button>
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
  state.currentRiddle++;
  state.hintsUsed = [];
  localStorage.setItem('labyrinth', JSON.stringify(state));

  const overlay = document.getElementById('labyrinth-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    if (state.currentRiddle >= LABYRINTH_RIDDLES.length) {
      showLabyrinthFinal();
    } else {
      renderLabyrinthRiddle();
    }
  }, 400);
}

function showLabyrinthFinal() {
  const overlay = document.createElement('div');
  overlay.className = 'labyrinth-overlay active';
  overlay.innerHTML = `
    <div class="labyrinth-container labyrinth-final">
      <div class="labyrinth-final-title">✨ Поздравляем! ✨</div>
      <div class="labyrinth-final-text">
        <p>Ты прошел Лабиринт Загадок!</p>
        <p>Древние стены расступились, и ты успешно преодолел все 10 испытаний. Твой разум отлично справился со всеми трудностями!</p>
        <p>Хочешь еще больше интересных загадок?</p>
        <p>Переходи в наш официальный Telegram-канал! Там мы регулярно выкладываем новые уникальные головоломки, делимся секретами и спойлерами к будущим историям нашей новеллы, а также общаемся с игроками.</p>
      </div>
      <a href="https://t.me/YourDestiny_Official" target="_blank" class="labyrinth-tg-btn">✈️ Перейти в Telegram</a>
      <button class="labyrinth-next-btn" onclick="closeLabyrinth()">В главное меню</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function closeLabyrinth() {
  const overlay = document.querySelector('.labyrinth-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 400);
  }
}

// ============================================================
// КАКАЯ ТВОЯ ИСТИННАЯ СУДЬБА? (10 вопросов, 4 варианта)
// ============================================================
const DESTINY_QUESTIONS = [
  {
    question: "Ты стоишь на перекрестке четырех дорог. Куда пойдешь?",
    options: [
      { text: "В темный лес, где шепчутся древние духи", scores: { mystic: 3, warrior: 1, sage: 0, trickster: 0 } },
      { text: "На вершину горы, покоряя небеса", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "В древнюю библиотеку, где хранятся тайны мира", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "В шумный город, где можно обмануть судьбу", scores: { mystic: 0, warrior: 0, sage: 1, trickster: 3 } }
    ]
  },
  {
    question: "Перед тобой четыре артефакта. Какой возьмешь?",
    options: [
      { text: "Кристалл, в котором пленены звезды", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Меч, выкованный из метеоритного железа", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Свиток с забытыми заклинаниями", scores: { mystic: 1, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Маска, меняющая лицо по желанию", scores: { mystic: 0, warrior: 0, sage: 0, trickster: 3 } }
    ]
  },
  {
    question: "Враг стоит перед тобой. Как поступишь?",
    options: [
      { text: "Прочту его ауру и найду слабое место", scores: { mystic: 3, warrior: 1, sage: 0, trickster: 0 } },
      { text: "Вступлю в честный поединок", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Попытаюсь убедить словами", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Обойду с тыла, пока он не заметит", scores: { mystic: 0, warrior: 0, sage: 1, trickster: 3 } }
    ]
  },
  {
    question: "Какое время суток тебе ближе всего?",
    options: [
      { text: "Полночь, когда миры смыкаются", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Рассвет, когда начинается битва", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Полдень, когда свет развеивает тени", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Сумерки, когда правда и ложь путаются", scores: { mystic: 1, warrior: 0, sage: 0, trickster: 3 } }
    ]
  },
  {
    question: "Тебе предложили стать кем угодно. Кем станешь?",
    options: [
      { text: "Провидцем, видящим сквозь время", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Воином, защищающим слабых", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Мудрецом, хранящим знания", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Путником, не имеющим имени", scores: { mystic: 1, warrior: 0, sage: 0, trickster: 3 } }
    ]
  },
  {
    question: "Какой элемент тебе ближе?",
    options: [
      { text: "Эфир — невидимая сила, связывающая все", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Огонь — разрушение и возрождение", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Вода — мудрость и адаптация", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Тень — скрытность и обман", scores: { mystic: 1, warrior: 0, sage: 0, trickster: 3 } }
    ]
  },
  {
    question: "Ты нашел древний свиток. Что делаешь?",
    options: [
      { text: "Читаю вслух, призывая духов", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Использую как оружие, если придется", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Изучаю, записывая каждую деталь", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Продаю тому, кто больше заплатит", scores: { mystic: 0, warrior: 0, sage: 1, trickster: 3 } }
    ]
  },
  {
    question: "Какой дар ты бы выбрал?",
    options: [
      { text: "Видеть будущее во снах", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Непобедимую силу в бою", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Помнить все прочитанное", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Менять облик по желанию", scores: { mystic: 1, warrior: 0, sage: 0, trickster: 3 } }
    ]
  },
  {
    question: "Тебя пригласили на бал в замок. Как появишься?",
    options: [
      { text: "В плаще из звездной пыли", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "В доспехах, готовый к чему угодно", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "В мантии ученого с книгами", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Никто не узнает, кто я", scores: { mystic: 1, warrior: 0, sage: 0, trickster: 3 } }
    ]
  },
  {
    question: "Последний вопрос. Что для тебя важнее всего?",
    options: [
      { text: "Понимать тайны мира", scores: { mystic: 3, warrior: 0, sage: 1, trickster: 0 } },
      { text: "Защищать тех, кто слаб", scores: { mystic: 0, warrior: 3, sage: 0, trickster: 1 } },
      { text: "Передавать знания будущим поколениям", scores: { mystic: 0, warrior: 0, sage: 3, trickster: 0 } },
      { text: "Жить свободно, не зная границ", scores: { mystic: 1, warrior: 0, sage: 0, trickster: 3 } }
    ]
  }
];

const DESTINY_TITLES = {
  mystic: {
    name: "🌙 Провидец Теней",
    description: "Ты видишь то, что скрыто от других. Мир откровений и видений — твоя стихия. Ты способен заглянуть за грань реальности и увидеть истину, которую другие не замечают. Твоя судьба — быть мостом между мирами, проводником для тех, кто заблудился в темноте.",
    traits: ["Интуиция", "Эмпатия", "Видение будущего", "Связь с потусторонним"]
  },
  warrior: {
    name: "⚔️ Страж Судьбы",
    description: "Твой путь — путь защиты и чести. Ты не ищешь славы, но всегда встаешь на защиту слабых. Твоя сила — не в мече, а в сердце, которое не знает страха перед несправедливостью. Ты — опора для тех, кто потерял надежду.",
    traits: ["Храбрость", "Честь", "Защита", "Решительность"]
  },
  sage: {
    name: "📜 Хранитель Знаний",
    description: "Ты — собиратель мудрости веков. Каждая книга, каждое слово — это кирпичик в твоем храме знаний. Ты понимаешь, что истинная сила — не в магии или оружии, а в понимании законов мира. Твоя судьба — хранить и передавать свет разума.",
    traits: ["Мудрость", "Терпение", "Аналитика", "Обучение"]
  },
  trickster: {
    name: "🎭 Теневой Странник",
    description: "Ты — тот, кто живет по своим правилам. Мир для тебя — игра, где ты всегда на шаг впереди. Твоя сила — в адаптации, в умении видеть лазейки там, где другие видят стены. Ты — переменчивая судьба сама по себе.",
    traits: ["Хитрость", "Адаптивность", "Свобода", "Неожиданность"]
  }
};

function initTrueDestiny() {
  const destinyBtn = document.querySelector('[onclick*="Истинная Судьба"]');
  if (destinyBtn) {
    destinyBtn.setAttribute('onclick', 'openTrueDestiny()');
  }
}

function openTrueDestiny() {
  const saved = localStorage.getItem('true_destiny');
  if (saved) {
    const state = JSON.parse(saved);
    if (state.completed) {
      showDestinyResult(state.scores);
      return;
    }
    if (state.currentQuestion > 0) {
      renderDestinyQuestion(state.currentQuestion);
      return;
    }
  }

  // Начало
  const overlay = document.createElement('div');
  overlay.id = 'destiny-overlay';
  overlay.className = 'destiny-overlay';
  overlay.innerHTML = `
    <div class="destiny-container">
      <div class="destiny-title">✨ Какая твоя Истинная Судьба? ✨</div>
      <div class="destiny-intro">
        <p>10 вопросов раскроют, кем ты был в прошлых жизнях и кем станешь в будущих.</p>
        <p>Отвечай честно — судьба не любит обмана.</p>
      </div>
      <button class="destiny-start-btn" onclick="startDestinyQuiz()">🔮 Начать предсказание</button>
      <button class="destiny-close" onclick="closeDestiny()">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function startDestinyQuiz() {
  localStorage.setItem('true_destiny', JSON.stringify({
    currentQuestion: 0,
    scores: { mystic: 0, warrior: 0, sage: 0, trickster: 0 },
    completed: false
  }));

  const overlay = document.getElementById('destiny-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();
    renderDestinyQuestion(0);
  }, 400);
}

function renderDestinyQuestion(index) {
  const q = DESTINY_QUESTIONS[index];

  const overlay = document.createElement('div');
  overlay.id = 'destiny-overlay';
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `
    <div class="destiny-container">
      <div class="destiny-counter">Вопрос ${index + 1} из ${DESTINY_QUESTIONS.length}</div>
      <div class="destiny-question">${q.question}</div>
      <div class="destiny-options">
        ${q.options.map((opt, i) => `
          <button class="destiny-option" onclick="answerDestiny(${index}, ${i})" style="animation-delay:${i * 0.1}s">
            ${opt.text}
          </button>
        `).join('')}
      </div>
      <button class="destiny-close" onclick="closeDestiny()">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function answerDestiny(qIndex, optIndex) {
  const q = DESTINY_QUESTIONS[qIndex];
  const scores = q.options[optIndex].scores;

  let state = JSON.parse(localStorage.getItem('true_destiny'));
  state.currentQuestion = qIndex + 1;

  for (let key in scores) {
    state.scores[key] += scores[key];
  }

  localStorage.setItem('true_destiny', JSON.stringify(state));

  const overlay = document.getElementById('destiny-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.remove();

    if (state.currentQuestion >= DESTINY_QUESTIONS.length) {
      state.completed = true;
      localStorage.setItem('true_destiny', JSON.stringify(state));
      showDestinyResult(state.scores);
    } else {
      renderDestinyQuestion(state.currentQuestion);
    }
  }, 400);
}

function showDestinyResult(scores) {
  // Определяем победителя
  let maxScore = -1;
  let winner = 'mystic';

  for (let key in scores) {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
      winner = key;
    }
  }

  const title = DESTINY_TITLES[winner];

  const overlay = document.createElement('div');
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `
    <div class="destiny-container destiny-result">
      <div class="destiny-result-title">${title.name}</div>
      <div class="destiny-result-desc">${title.description}</div>
      <div class="destiny-traits">
        ${title.traits.map(t => `<span class="destiny-trait">${t}</span>`).join('')}
      </div>
      <div class="destiny-scores">
        <div class="destiny-score-bar"><span>Мистик</span><div class="destiny-bar"><div style="width:${scores.mystic * 10}%"></div></div></div>
        <div class="destiny-score-bar"><span>Воин</span><div class="destiny-bar"><div style="width:${scores.warrior * 10}%"></div></div></div>
        <div class="destiny-score-bar"><span>Мудрец</span><div class="destiny-bar"><div style="width:${scores.sage * 10}%"></div></div></div>
        <div class="destiny-score-bar"><span>Трикстер</span><div class="destiny-bar"><div style="width:${scores.trickster * 10}%"></div></div></div>
      </div>
      <a href="https://t.me/YourDestiny_Official" target="_blank" class="destiny-tg-btn">📢 Наш Telegram канал</a>
      <button class="destiny-restart" onclick="restartDestiny()">Пройти заново</button>
      <button class="destiny-close" onclick="closeDestiny()">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function restartDestiny() {
  localStorage.removeItem('true_destiny');
  const overlay = document.querySelector('.destiny-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.remove();
      openTrueDestiny();
    }, 400);
  }
}

function closeDestiny() {
  const overlay = document.querySelector('.destiny-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 400);
  }
}

// ============================================================
// МУДРОСТЬ СУДЬБЫ (100 цитат)
// ============================================================
const WISDOM_QUOTES = [
  "Судьба — это не то, что случается с тобой. Это то, как ты реагируешь на то, что с тобой случается.",
  "Нить судьбы тонка, но неразрывна. Каждый узел — это выбор, который ты сделал.",
  "Тот, кто боится своей судьбы, уже проиграл половину битвы.",
  "Судьба не пишет сценарий — она лишь предлагает декорации. Режиссер — ты.",
  "Путь, который ты выбираешь, становится твоей судьбой. А путь, которого избегаешь, становится твоим сожалением.",
  "В каждой судьбе есть момент, когда весь мир замирает, ожидая твоего решения.",
  "Судьба любит тех, кто не ждет, а действует.",
  "Ты не можешь изменить ветер, но можешь направить паруса своей судьбы.",
  "Каждый человек — кузнец своей судьбы, но не все знают, как ковать.",
  "Судьба — это зеркало. Что ты в него посылаешь, то и отражается.",
  "Тайны судьбы раскрываются не тем, кто ищет ответы, а тем, кто задает правильные вопросы.",
  "Нить жизни плетется из тысячи мелких решений. Ни одно из них не случайно.",
  "Судьба не наказывает — она учит. Боль — всего лишь цена за мудрость.",
  "Тот, кто верит в судьбу, теряет половину своих возможностей. Тот, кто ей не верит, теряет половину смысла.",
  "Великие судьбы рождаются из великих испытаний.",
  "Судьба — это не лотерея. Это шахматы, где каждый ход имеет значение.",
  "Ты не можешь выбрать свое начало, но можешь выбрать свой конец.",
  "Судьба шепчет тем, кто умеет слушать тишину.",
  "Каждый закат — это напоминание: даже самый темный день заканчивается.",
  "Твоя судьба — это не то, что написано в звездах. Это то, что ты пишешь своими руками.",
  "Самые красивые истории пишутся не пером, а кровью и потом.",
  "Судьба не дает испытаний тем, кто не способен их пройти.",
  "Ты — автор своей истории. Не позволяй другим писать за тебя.",
  "Каждый выбор — это камень, брошенный в воду судьбы. Круги идут дальше, чем ты думаешь.",
  "Судьба любит смелых, но бережет мудрых.",
  "Тот, кто ищет легкий путь, найдет лишь тупик.",
  "Великие души рождаются не в тишине, а в буре.",
  "Судьба — это не проклятие. Это вызов.",
  "Ты не можешь изменить прошлое, но можешь изменить его значение.",
  "Каждый человек несет в себе искру божественного. Не позволяй ей погаснуть.",
  "Судьба не случайна. Она — результат миллиона маленьких выборов.",
  "Тот, кто боится темноты, никогда не увидит звезд.",
  "Твоя история — это не то, что с тобой случилось. Это то, как ты об этом рассказываешь.",
  "Судьба — это река. Ты можешь плыть по течению или бороться с ним.",
  "Каждый момент — это перекресток. Каждый выбор — это поворот.",
  "Ты не можешь контролировать все, но можешь контролировать свою реакцию.",
  "Судьба щедра к тем, кто не жалеет себя.",
  "Великие дела начинаются с маленьких шагов.",
  "Твоя судьба — это твоя ответственность. Никто не сделает это за тебя.",
  "Самые глубокие раны дают самую яркую мудрость.",
  "Судьба не спрашивает разрешения. Она просто случается.",
  "Ты — единственный человек, который может изменить свою жизнь.",
  "Каждый закат — это обещание нового рассвета.",
  "Судьба — это не наказание. Это возможность.",
  "Тот, кто ищет смысл, найдет его. Тот, кто ищет оправдание, найдет его тоже.",
  "Твоя сила — не в том, чтобы никогда не падать, а в том, чтобы вставать каждый раз.",
  "Судьба любит тех, кто верит в себя.",
  "Каждый человек — это книга. Некоторые — роман, другие — поэма.",
  "Ты не можешь выбрать свою семью, но можешь выбрать свою судьбу.",
  "Судьба — это не то, что дано. Это то, что создано.",
  "Великие мечты требуют великих жертв.",
  "Твоя судьба — это твоя мечта, которую ты не осмелился осуществить.",
  "Судьба не ждет. Она приходит к тем, кто готов.",
  "Каждый выбор — это семя, которое ты сажаешь. Будь осторожен с посевами.",
  "Ты — кузнец своей судьбы. Куй, пока железо горячо.",
  "Судьба — это не случайность. Это закономерность.",
  "Тот, кто не рискует, не пьет шампанского. Но и не пьет яда.",
  "Твоя история еще не закончена. Продолжай писать.",
  "Судьба — это зеркало твоих желаний.",
  "Каждый человек — это вселенная. Не позволяй своей вселенной погаснуть.",
  "Ты не можешь изменить мир, но можешь изменить себя. И этого достаточно.",
  "Судьба — это не проклятие. Это дар.",
  "Великие души не рождаются в комфорте.",
  "Твоя судьба — это твоя отвага.",
  "Судьба не спрашивает, готов ли ты. Она просто приходит.",
  "Каждый момент — это возможность начать заново.",
  "Ты — автор своей судьбы. Не позволяй другим редактировать твою книгу.",
  "Судьба — это не то, что случается. Это то, что ты делаешь.",
  "Тот, кто ищет легких путей, никогда не найдет великих.",
  "Твоя сила — в твоей уязвимости.",
  "Судьба — это не случайность. Это выбор.",
  "Каждый человек — это звезда. Некоторые светят ярче, другие — тише.",
  "Ты не можешь контролировать ветер, но можешь контролировать свой курс.",
  "Судьба — это не проклятие. Это вызов.",
  "Великие дела требуют великой веры.",
  "Твоя судьба — это твоя мудрость.",
  "Судьба не щадит никого. Но и не обделяет никого.",
  "Каждый выбор — это камень в фундамент твоей судьбы.",
  "Ты — кузнец своей судьбы. Куй с умом.",
  "Судьба — это не случайность. Это закон.",
  "Тот, кто не верит в чудеса, никогда их не увидит.",
  "Твоя история — это твоя сила.",
  "Судьба — это не то, что дано. Это то, что взято.",
  "Великие мечты рождаются в великих сердцах.",
  "Твоя судьба — это твоя любовь.",
  "Судьба не ждет. Она идет.",
  "Каждый момент — это дар. Не трать его впустую.",
  "Ты — автор своей жизни. Пиши красиво.",
  "Судьба — это не проклятие. Это возможность.",
  "Тот, кто ищет правду, найдет ее. Но не всегда ту, которую ожидал.",
  "Твоя сила — в твоей истине.",
  "Судьба — это не случайность. Это путь.",
  "Каждый человек — это загадка. Разгадай свою.",
  "Ты не можешь изменить прошлое, но можешь изменить будущее.",
  "Судьба — это не проклятие. Это приключение.",
  "Великие души не ищут легких путей.",
  "Твоя судьба — это твоя отвага.",
  "Судьба не спрашивает. Она решает.",
  "Каждый выбор — это шаг. Делай его уверенно.",
  "Ты — кузнец своей судьбы. Куй с любовью.",
  "Судьба — это не случайность. Это судьба.",
  "Тот, кто верит в себя, уже на полпути к цели.",
  "Твоя история — это твоя магия.",
  "Судьба — это не то, что дано. Это то, что создано любовью.",
  "Великие дела начинаются с великой веры.",
  "Твоя судьба — это твоя надежда.",
  "Судьба не ждет. Она творится.",
  "Каждый момент — это вечность. Живи ее полностью.",
  "Ты — автор своей судьбы. Пиши шедевр."
];

function initWisdom() {
  const wisdomBtn = document.querySelector('[onclick*="Мудростью Судьбы"]');
  if (wisdomBtn) {
    wisdomBtn.setAttribute('onclick', 'showWisdom()');
  }
}

function showWisdom() {
  let index = parseInt(localStorage.getItem('wisdom_index') || '0');
  if (index >= WISDOM_QUOTES.length) index = 0;

  const quote = WISDOM_QUOTES[index];
  localStorage.setItem('wisdom_index', (index + 1).toString());

  const overlay = document.createElement('div');
  overlay.className = 'wisdom-overlay';
  overlay.innerHTML = `
    <div class="wisdom-container">
      <div class="wisdom-icon">🕯️</div>
      <div class="wisdom-quote">${quote}</div>
      <div class="wisdom-number">Мудрость ${index + 1} из ${WISDOM_QUOTES.length}</div>
      <button class="wisdom-close-btn" onclick="closeWisdom()">Закрыть</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closeWisdom() {
  const overlay = document.querySelector('.wisdom-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 400);
  }
}

// ===== ABOUT, TERMS, PRIVACY =====
function showAbout() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `
    <div class="fate-container" style="max-width:380px;">
      <div class="fate-final-title" style="font-size:1.3rem;">✨ Об игре ✨</div>
      <div style="font-family:'Noto Serif',serif;font-size:0.9rem;color:var(--text-secondary);line-height:1.7;text-align:left;margin-bottom:20px;">
        <p style="margin-bottom:12px;"><b>Your Destiny</b> — это интерактивная визуальная новелла, где каждое ваше решение меняет ход истории.</p>
        <p style="margin-bottom:12px;">🎭 <b>Интерактивные истории</b> — погружайтесь в захватывающие сюжеты с множеством разветвлений и концовок.</p>
        <p style="margin-bottom:12px;">🔮 <b>Хроники Судьбы</b> — проходите психологические дилеммы и узнавайте, какие выборы делают другие.</p>
        <p style="margin-bottom:12px;">🗝️ <b>Лабиринт Загадок</b> — испытывайте свой разум на десяти сложнейших загадках.</p>
        <p style="margin-bottom:12px;">✨ <b>Истинная Судьба</b> — пройдите тест из 10 вопросов и узнайте, кем вы были в прошлых жизнях.</p>
        <p style="margin-bottom:12px;">🕯️ <b>Мудрость Судьбы</b> — получайте ежедневные мудрые цитаты о судьбе и жизни.</p>
        <p>Каждый ваш выбор имеет значение. Ваша судьба — в ваших руках.</p>
      </div>
      <button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">Закрыть</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showTerms() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `
    <div class="fate-container" style="max-width:380px;">
      <div class="fate-final-title" style="font-size:1.2rem;">📜 Условия использования</div>
      <div style="font-family:'Noto Serif',serif;font-size:0.82rem;color:var(--text-secondary);line-height:1.6;text-align:left;margin-bottom:20px;max-height:60vh;overflow-y:auto;padding-right:8px;">
        <p style="margin-bottom:10px;"><b>1. Общие положения</b></p>
        <p style="margin-bottom:10px;">Настоящие Условия использования регулируют отношения между пользователем и приложением Your Destiny. Используя приложение, вы соглашаетесь с данными условиями.</p>
        <p style="margin-bottom:10px;"><b>2. Права и обязанности пользователя</b></p>
        <p style="margin-bottom:10px;">Пользователь обязуется использовать приложение исключительно в личных целях, не нарушать работу приложения, не пытаться получить несанкционированный доступ к данным других пользователей.</p>
        <p style="margin-bottom:10px;"><b>3. Интеллектуальная собственность</b></p>
        <p style="margin-bottom:10px;">Все материалы, размещенные в приложении, включая тексты, изображения, музыку и дизайн, являются интеллектуальной собственностью разработчиков и защищены законом.</p>
        <p style="margin-bottom:10px;"><b>4. Ограничение ответственности</b></p>
        <p style="margin-bottom:10px;">Разработчики не несут ответственности за возможные технические сбои, потерю данных из-за очистки кэша браузера или устройства.</p>
        <p style="margin-bottom:10px;"><b>5. VIP-статус</b></p>
        <p style="margin-bottom:10px;">VIP-статус предоставляет доступ к дополнительному контенту и действует в течение указанного срока. Промокоды являются единственным способом активации VIP на данный момент.</p>
        <p style="margin-bottom:10px;"><b>6. Изменения условий</b></p>
        <p>Разработчики оставляют за собой право вносить изменения в настоящие Условия использования без предварительного уведомления.</p>
      </div>
      <button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">Закрыть</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}

function showPrivacy() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay';
  overlay.innerHTML = `
    <div class="fate-container" style="max-width:380px;">
      <div class="fate-final-title" style="font-size:1.2rem;">🔒 Политика конфиденциальности</div>
      <div style="font-family:'Noto Serif',serif;font-size:0.82rem;color:var(--text-secondary);line-height:1.6;text-align:left;margin-bottom:20px;max-height:60vh;overflow-y:auto;padding-right:8px;">
        <p style="margin-bottom:10px;"><b>1. Сбор данных</b></p>
        <p style="margin-bottom:10px;">Приложение Your Destiny не собирает персональные данные пользователей. Все данные хранятся исключительно в localStorage вашего устройства и не передаются на серверы разработчиков.</p>
        <p style="margin-bottom:10px;"><b>2. Локальное хранение</b></p>
        <p style="margin-bottom:10px;">Ваш прогресс, настройки темы, статус VIP и другие данные сохраняются локально в браузере. Очистка кэша или cookies может привести к потере данных.</p>
        <p style="margin-bottom:10px;"><b>3. Telegram WebApp</b></p>
        <p style="margin-bottom:10px;">При использовании через Telegram WebApp приложение может получать базовую информацию из Telegram (имя пользователя, язык интерфейса) в соответствии с политикой конфиденциальности Telegram.</p>
        <p style="margin-bottom:10px;"><b>4. Сторонние сервисы</b></p>
        <p style="margin-bottom:10px;">Приложение использует шрифты Google Fonts и может содержать ссылки на Telegram-канал. Эти сервисы имеют собственные политики конфиденциальности.</p>
        <p style="margin-bottom:10px;"><b>5. Безопасность</b></p>
        <p style="margin-bottom:10px;">Мы принимаем разумные меры для защиты ваших данных, однако помните, что ни один метод передачи данных через интернет не является абсолютно безопасным.</p>
        <p style="margin-bottom:10px;"><b>6. Изменения политики</b></p>
        <p>Мы оставляем за собой право обновлять данную Политику конфиденциальности. Продолжение использования приложения означает согласие с обновленными условиями.</p>
      </div>
      <button class="fate-next" onclick="this.closest('.fate-overlay').classList.remove('active');setTimeout(()=>this.closest('.fate-overlay').remove(),400)">Закрыть</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
}
