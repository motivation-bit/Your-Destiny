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

// Дополнительные языки интерфейса. Английский используется только как безопасный
// резерв для контента, для которого ещё не добавлена отдельная редакция.
T.pt = {
  ...T.en,
  novels:'Novelas', surveys:'Questionários', contacts:'Contactos', favorites:'Favoritos', settings:'Definições',
  loading:'A carregar histórias...', emptyNovels:'As histórias chegarão em breve...', emptySurveys:'Questionários em desenvolvimento...', emptyContacts:'Contactos em desenvolvimento...', emptyFavorites:'Os teus momentos especiais aparecerão aqui...',
  music:'Música', theme:'Cor do tema', language:'Idioma', promo:'Código promocional', activate:'Ativar', promoPlaceholder:'Introduza o código promocional...', promoHint:'Encontre códigos promocionais no nosso canal do Telegram',
  vipStatus:'Estado VIP', freeVersion:'Versão gratuita', vipActive:'VIP ativo', timeLeft:'Restante', days:'d', hours:'h', minutes:'min', timeCapsule:'Cápsula do Tempo', rateApp:'Avaliar aplicação', storySchedule:'Calendário de Histórias',
  supportAuthor:'Apoiar o Autor', becomeAuthor:'Tornar-se Autor', wisdom:'Sabedoria do Destino', chronicles:'Crónicas do Destino', labyrinth:'Labirinto de Enigmas', trueDestiny:'Qual é o teu Verdadeiro Destino?', about:'Sobre o jogo',
  terms:'Termos de Utilização', privacy:'Política de Privacidade', community:'Canal da Comunidade', back:'Voltar', close:'Fechar', continue:'Continuar', restart:'Começar de novo', exit:'Sair para o menu', pause:'Pausa',
  lockTitle:'VIP necessário', lockText:'Concluíste 2 capítulos gratuitos. Ativa o VIP para aceder a todos os capítulos.', goToChannel:'Ir para o canal', enterPromo:'Introduzir código promocional', toMenu:'Para o menu',
  wallet:'Carteira de apoio', copy:'Copiar', copied:'Copiado', soon:'Em breve', thanks:'Obrigado', wisdomClose:'Seguinte', destinyStart:'Começar previsão', destinyRestart:'Fazer novamente',
  riddleEnter:'Entrar no Labirinto', riddleReady:'Pronto? O Labirinto espera por ti.', riddleRules1:'Uma de cada vez: cada enigma é desbloqueado após a resposta ao anterior.', riddleRules2:'Não tenhas pressa: pensa o tempo que precisares.', riddleRules3:'Ajuda: duas pistas. As pistas apenas orientam o raciocínio.',
  lookAnswer:'Ver resposta', answerConfirm:'Tens a certeza de que queres revelar a resposta?', backToRiddle:'Voltar ao enigma', yesOpen:'Sim, revelar', goFurther:'Continuar', riddleComplete:'Parabéns', riddleCompleteText:'Conquistaste o Labirinto de Enigmas!',
  fateComplete:'Crónicas concluídas', fateCompleteText:'Todos os dilemas foram concluídos. Novos aparecerão nas atualizações.',
  aboutText1:'Your Destiny é um espaço narrativo de escolhas, histórias, enigmas e reflexões sobre decisões e destino.', aboutText2:'Histórias que convidam a escolher e a descobrir diferentes caminhos.', aboutText3:'Crónicas do Destino — dilemas que colocam escolhas difíceis diante de ti.', aboutText4:'Labirinto de Enigmas — desafios lógicos com dificuldade crescente.', aboutText5:'Verdadeiro Destino — um questionário de arquétipos baseado nas tuas escolhas.', aboutText6:'Sabedoria do Destino — pensamentos para parar, observar e continuar.',
  termsTitle:'Termos de Utilização', privacyTitle:'Política de Privacidade', stepIntoUnknown:'Entrar no desconhecido...', next:'Seguinte', hint:'Pista', hintUsed:'Usada', destinyResultTitle:'O Teu Verdadeiro Destino', destinyResultDesc:'Arquétipo revelado', destinyRestartBtn:'Fazer novamente', empty:'Vazio por agora...'
};
T.de = {
  ...T.en,
  novels:'Novellen', surveys:'Fragebögen', contacts:'Kontakte', favorites:'Favoriten', settings:'Einstellungen', loading:'Geschichten werden geladen...', emptyNovels:'Geschichten erscheinen bald...', emptySurveys:'Fragebögen in Entwicklung...', emptyContacts:'Kontakte in Entwicklung...', emptyFavorites:'Deine besonderen Momente erscheinen hier...',
  music:'Musik', theme:'Themenfarbe', language:'Sprache', promo:'Promo-Code', activate:'Aktivieren', promoPlaceholder:'Promo-Code eingeben...', promoHint:'Promo-Codes findest du im Telegram-Kanal', vipStatus:'VIP-Status', freeVersion:'Kostenlose Version', vipActive:'VIP aktiv', timeLeft:'Verbleibend', days:'T', hours:'Std.', minutes:'Min.', timeCapsule:'Zeitkapsel', rateApp:'App bewerten', storySchedule:'Geschichtenplan',
  supportAuthor:'Autor unterstützen', becomeAuthor:'Autor werden', wisdom:'Weisheit des Schicksals', chronicles:'Chroniken des Schicksals', labyrinth:'Labyrinth der Rätsel', trueDestiny:'Was ist dein wahres Schicksal?', about:'Über das Spiel', terms:'Nutzungsbedingungen', privacy:'Datenschutzerklärung', community:'Community-Kanal', back:'Zurück', close:'Schließen', continue:'Weiter', restart:'Neu beginnen', exit:'Zum Menü', pause:'Pause', lockTitle:'VIP erforderlich', lockText:'Du hast 2 kostenlose Kapitel abgeschlossen. Aktiviere VIP für alle Kapitel.', goToChannel:'Zum Kanal', enterPromo:'Promo-Code eingeben', toMenu:'Zum Menü', wallet:'Unterstützungs-Wallet', copy:'Kopieren', copied:'Kopiert', soon:'Bald', thanks:'Danke', wisdomClose:'Weiter', destinyStart:'Vorhersage starten', destinyRestart:'Neu starten',
  riddleEnter:'Labyrinth betreten', riddleReady:'Bereit? Das Labyrinth wartet.', riddleRules1:'Eines nach dem anderen: Jedes Rätsel wird nach der vorherigen Antwort freigeschaltet.', riddleRules2:'Nimm dir Zeit und denke in Ruhe nach.', riddleRules3:'Hilfe: zwei Hinweise. Sie geben nur eine Denkrichtung vor.', lookAnswer:'Antwort anzeigen', answerConfirm:'Möchtest du die Antwort wirklich anzeigen?', backToRiddle:'Zurück zum Rätsel', yesOpen:'Ja, anzeigen', goFurther:'Weiter', riddleComplete:'Glückwunsch', riddleCompleteText:'Du hast das Rätsellabyrinth gemeistert!', fateComplete:'Chroniken abgeschlossen', fateCompleteText:'Alle Dilemmata wurden abgeschlossen. Neue erscheinen mit Updates.',
  aboutText1:'Your Destiny ist ein interaktiver Raum aus Geschichten, Entscheidungen, Rätseln und Reflexionen über das Schicksal.', aboutText2:'Geschichten, in denen deine Entscheidungen unterschiedliche Wege eröffnen.', aboutText3:'Chroniken des Schicksals — Dilemmata, die schwierige Entscheidungen stellen.', aboutText4:'Rätsellabyrinth — logische Herausforderungen mit steigender Schwierigkeit.', aboutText5:'Wahres Schicksal — ein Archetypen-Test, der deine Entscheidungen auswertet.', aboutText6:'Weisheit des Schicksals — Gedanken zum Innehalten, Beobachten und Weitergehen.', termsTitle:'Nutzungsbedingungen', privacyTitle:'Datenschutzerklärung', stepIntoUnknown:'Ins Unbekannte...', next:'Weiter', hint:'Hinweis', hintUsed:'Verwendet', destinyResultTitle:'Dein wahres Schicksal', destinyResultDesc:'Archetyp enthüllt', destinyRestartBtn:'Neu starten', empty:'Derzeit leer...'
};
T.fr = {
  ...T.en,
  novels:'Romans', surveys:'Questionnaires', contacts:'Contacts', favorites:'Favoris', settings:'Paramètres', loading:'Chargement des histoires...', emptyNovels:'Les histoires arriveront bientôt...', emptySurveys:'Questionnaires en développement...', emptyContacts:'Contacts en développement...', emptyFavorites:'Tes moments précieux apparaîtront ici...',
  music:'Musique', theme:'Couleur du thème', language:'Langue', promo:'Code promo', activate:'Activer', promoPlaceholder:'Entrer le code promo...', promoHint:'Les codes promo sont disponibles sur notre canal Telegram', vipStatus:'Statut VIP', freeVersion:'Version gratuite', vipActive:'VIP actif', timeLeft:'Restant', days:'j', hours:'h', minutes:'min', timeCapsule:'Capsule temporelle', rateApp:"Évaluer l’application", storySchedule:'Calendrier des histoires',
  supportAuthor:"Soutenir l’auteur", becomeAuthor:'Devenir auteur', wisdom:'Sagesse du Destin', chronicles:'Chroniques du Destin', labyrinth:'Labyrinthe des énigmes', trueDestiny:'Quel est ton véritable destin ?', about:'À propos du jeu', terms:"Conditions d’utilisation", privacy:'Politique de confidentialité', community:'Canal de la communauté', back:'Retour', close:'Fermer', continue:'Continuer', restart:'Recommencer', exit:'Retour au menu', pause:'Pause', lockTitle:'VIP requis', lockText:'Tu as terminé 2 chapitres gratuits. Active le VIP pour accéder à tous les chapitres.', goToChannel:'Ouvrir le canal', enterPromo:'Entrer le code promo', toMenu:'Au menu', wallet:'Portefeuille de soutien', copy:'Copier', copied:'Copié', soon:'Bientôt', thanks:'Merci', wisdomClose:'Suivant', destinyStart:'Commencer la prédiction', destinyRestart:'Recommencer',
  riddleEnter:'Entrer dans le Labyrinthe', riddleReady:'Prêt ? Le Labyrinthe t’attend.', riddleRules1:'Un par un : chaque énigme se débloque après la réponse à la précédente.', riddleRules2:'Prends ton temps et réfléchis autant que nécessaire.', riddleRules3:'Aide : deux indices. Ils donnent seulement une direction de réflexion.', lookAnswer:'Voir la réponse', answerConfirm:'Veux-tu vraiment révéler la réponse ?', backToRiddle:"Retour à l’énigme", yesOpen:'Oui, révéler', goFurther:'Continuer', riddleComplete:'Félicitations', riddleCompleteText:'Tu as vaincu le Labyrinthe des énigmes !', fateComplete:'Chroniques terminées', fateCompleteText:'Tous les dilemmes sont terminés. De nouveaux apparaîtront dans les mises à jour.',
  aboutText1:'Your Destiny est un espace narratif de choix, d’histoires, d’énigmes et de réflexions sur le destin.', aboutText2:'Des histoires où tes choix ouvrent des chemins différents.', aboutText3:'Chroniques du Destin — des dilemmes qui mettent des choix difficiles face à toi.', aboutText4:'Labyrinthe des énigmes — des défis logiques à difficulté croissante.', aboutText5:'Véritable Destin — un questionnaire d’archétypes basé sur tes choix.', aboutText6:'Sagesse du Destin — des pensées pour s’arrêter, observer et avancer.', termsTitle:"Conditions d’utilisation", privacyTitle:'Politique de confidentialité', stepIntoUnknown:'Entrer dans l’inconnu...', next:'Suivant', hint:'Indice', hintUsed:'Utilisé', destinyResultTitle:'Ton véritable destin', destinyResultDesc:'Archétype révélé', destinyRestartBtn:'Recommencer', empty:'Vide pour le moment...'
};



// Дополнительные языки интерфейса. Английский используется только как безопасный
// резерв для контента, для которого ещё не добавлена отдельная редакция.
T.pt = {
  ...T.en,
  novels:'Novelas', surveys:'Questionários', contacts:'Contactos', favorites:'Favoritos', settings:'Definições',
  loading:'A carregar histórias...', emptyNovels:'As histórias chegarão em breve...', emptySurveys:'Questionários em desenvolvimento...', emptyContacts:'Contactos em desenvolvimento...', emptyFavorites:'Os teus momentos especiais aparecerão aqui...',
  music:'Música', theme:'Cor do tema', language:'Idioma', promo:'Código promocional', activate:'Ativar', promoPlaceholder:'Introduza o código promocional...', promoHint:'Encontre códigos promocionais no nosso canal do Telegram',
  vipStatus:'Estado VIP', freeVersion:'Versão gratuita', vipActive:'VIP ativo', timeLeft:'Restante', days:'d', hours:'h', minutes:'min', timeCapsule:'Cápsula do Tempo', rateApp:'Avaliar aplicação', storySchedule:'Calendário de Histórias',
  supportAuthor:'Apoiar o Autor', becomeAuthor:'Tornar-se Autor', wisdom:'Sabedoria do Destino', chronicles:'Crónicas do Destino', labyrinth:'Labirinto de Enigmas', trueDestiny:'Qual é o teu Verdadeiro Destino?', about:'Sobre o jogo',
  terms:'Termos de Utilização', privacy:'Política de Privacidade', community:'Canal da Comunidade', back:'Voltar', close:'Fechar', continue:'Continuar', restart:'Começar de novo', exit:'Sair para o menu', pause:'Pausa',
  lockTitle:'VIP necessário', lockText:'Concluíste 2 capítulos gratuitos. Ativa o VIP para aceder a todos os capítulos.', goToChannel:'Ir para o canal', enterPromo:'Introduzir código promocional', toMenu:'Para o menu',
  wallet:'Carteira de apoio', copy:'Copiar', copied:'Copiado', soon:'Em breve', thanks:'Obrigado', wisdomClose:'Seguinte', destinyStart:'Começar previsão', destinyRestart:'Fazer novamente',
  riddleEnter:'Entrar no Labirinto', riddleReady:'Pronto? O Labirinto espera por ti.', riddleRules1:'Uma de cada vez: cada enigma é desbloqueado após a resposta ao anterior.', riddleRules2:'Não tenhas pressa: pensa o tempo que precisares.', riddleRules3:'Ajuda: duas pistas. As pistas apenas orientam o raciocínio.',
  lookAnswer:'Ver resposta', answerConfirm:'Tens a certeza de que queres revelar a resposta?', backToRiddle:'Voltar ao enigma', yesOpen:'Sim, revelar', goFurther:'Continuar', riddleComplete:'Parabéns', riddleCompleteText:'Conquistaste o Labirinto de Enigmas!',
  fateComplete:'Crónicas concluídas', fateCompleteText:'Todos os dilemas foram concluídos. Novos aparecerão nas atualizações.',
  aboutText1:'Your Destiny é um espaço narrativo de escolhas, histórias, enigmas e reflexões sobre decisões e destino.', aboutText2:'Histórias que convidam a escolher e a descobrir diferentes caminhos.', aboutText3:'Crónicas do Destino — dilemas que colocam escolhas difíceis diante de ti.', aboutText4:'Labirinto de Enigmas — desafios lógicos com dificuldade crescente.', aboutText5:'Verdadeiro Destino — um questionário de arquétipos baseado nas tuas escolhas.', aboutText6:'Sabedoria do Destino — pensamentos para parar, observar e continuar.',
  termsTitle:'Termos de Utilização', privacyTitle:'Política de Privacidade', stepIntoUnknown:'Entrar no desconhecido...', next:'Seguinte', hint:'Pista', hintUsed:'Usada', destinyResultTitle:'O Teu Verdadeiro Destino', destinyResultDesc:'Arquétipo revelado', destinyRestartBtn:'Fazer novamente', empty:'Vazio por agora...'
};
T.de = {
  ...T.en,
  novels:'Novellen', surveys:'Fragebögen', contacts:'Kontakte', favorites:'Favoriten', settings:'Einstellungen', loading:'Geschichten werden geladen...', emptyNovels:'Geschichten erscheinen bald...', emptySurveys:'Fragebögen in Entwicklung...', emptyContacts:'Kontakte in Entwicklung...', emptyFavorites:'Deine besonderen Momente erscheinen hier...',
  music:'Musik', theme:'Themenfarbe', language:'Sprache', promo:'Promo-Code', activate:'Aktivieren', promoPlaceholder:'Promo-Code eingeben...', promoHint:'Promo-Codes findest du im Telegram-Kanal', vipStatus:'VIP-Status', freeVersion:'Kostenlose Version', vipActive:'VIP aktiv', timeLeft:'Verbleibend', days:'T', hours:'Std.', minutes:'Min.', timeCapsule:'Zeitkapsel', rateApp:'App bewerten', storySchedule:'Geschichtenplan',
  supportAuthor:'Autor unterstützen', becomeAuthor:'Autor werden', wisdom:'Weisheit des Schicksals', chronicles:'Chroniken des Schicksals', labyrinth:'Labyrinth der Rätsel', trueDestiny:'Was ist dein wahres Schicksal?', about:'Über das Spiel', terms:'Nutzungsbedingungen', privacy:'Datenschutzerklärung', community:'Community-Kanal', back:'Zurück', close:'Schließen', continue:'Weiter', restart:'Neu beginnen', exit:'Zum Menü', pause:'Pause', lockTitle:'VIP erforderlich', lockText:'Du hast 2 kostenlose Kapitel abgeschlossen. Aktiviere VIP für alle Kapitel.', goToChannel:'Zum Kanal', enterPromo:'Promo-Code eingeben', toMenu:'Zum Menü', wallet:'Unterstützungs-Wallet', copy:'Kopieren', copied:'Kopiert', soon:'Bald', thanks:'Danke', wisdomClose:'Weiter', destinyStart:'Vorhersage starten', destinyRestart:'Neu starten',
  riddleEnter:'Labyrinth betreten', riddleReady:'Bereit? Das Labyrinth wartet.', riddleRules1:'Eines nach dem anderen: Jedes Rätsel wird nach der vorherigen Antwort freigeschaltet.', riddleRules2:'Nimm dir Zeit und denke in Ruhe nach.', riddleRules3:'Hilfe: zwei Hinweise. Sie geben nur eine Denkrichtung vor.', lookAnswer:'Antwort anzeigen', answerConfirm:'Möchtest du die Antwort wirklich anzeigen?', backToRiddle:'Zurück zum Rätsel', yesOpen:'Ja, anzeigen', goFurther:'Weiter', riddleComplete:'Glückwunsch', riddleCompleteText:'Du hast das Rätsellabyrinth gemeistert!', fateComplete:'Chroniken abgeschlossen', fateCompleteText:'Alle Dilemmata wurden abgeschlossen. Neue erscheinen mit Updates.',
  aboutText1:'Your Destiny ist ein interaktiver Raum aus Geschichten, Entscheidungen, Rätseln und Reflexionen über das Schicksal.', aboutText2:'Geschichten, in denen deine Entscheidungen unterschiedliche Wege eröffnen.', aboutText3:'Chroniken des Schicksals — Dilemmata, die schwierige Entscheidungen stellen.', aboutText4:'Rätsellabyrinth — logische Herausforderungen mit steigender Schwierigkeit.', aboutText5:'Wahres Schicksal — ein Archetypen-Test, der deine Entscheidungen auswertet.', aboutText6:'Weisheit des Schicksals — Gedanken zum Innehalten, Beobachten und Weitergehen.', termsTitle:'Nutzungsbedingungen', privacyTitle:'Datenschutzerklärung', stepIntoUnknown:'Ins Unbekannte...', next:'Weiter', hint:'Hinweis', hintUsed:'Verwendet', destinyResultTitle:'Dein wahres Schicksal', destinyResultDesc:'Archetyp enthüllt', destinyRestartBtn:'Neu starten', empty:'Derzeit leer...'
};
T.fr = {
  ...T.en,
  novels:'Romans', surveys:'Questionnaires', contacts:'Contacts', favorites:'Favoris', settings:'Paramètres', loading:'Chargement des histoires...', emptyNovels:'Les histoires arriveront bientôt...', emptySurveys:'Questionnaires en développement...', emptyContacts:'Contacts en développement...', emptyFavorites:'Tes moments précieux apparaîtront ici...',
  music:'Musique', theme:'Couleur du thème', language:'Langue', promo:'Code promo', activate:'Activer', promoPlaceholder:'Entrer le code promo...', promoHint:'Les codes promo sont disponibles sur notre canal Telegram', vipStatus:'Statut VIP', freeVersion:'Version gratuite', vipActive:'VIP actif', timeLeft:'Restant', days:'j', hours:'h', minutes:'min', timeCapsule:'Capsule temporelle', rateApp:"Évaluer l’application", storySchedule:'Calendrier des histoires',
  supportAuthor:"Soutenir l’auteur", becomeAuthor:'Devenir auteur', wisdom:'Sagesse du Destin', chronicles:'Chroniques du Destin', labyrinth:'Labyrinthe des énigmes', trueDestiny:'Quel est ton véritable destin ?', about:'À propos du jeu', terms:"Conditions d’utilisation", privacy:'Politique de confidentialité', community:'Canal de la communauté', back:'Retour', close:'Fermer', continue:'Continuer', restart:'Recommencer', exit:'Retour au menu', pause:'Pause', lockTitle:'VIP requis', lockText:'Tu as terminé 2 chapitres gratuits. Active le VIP pour accéder à tous les chapitres.', goToChannel:'Ouvrir le canal', enterPromo:'Entrer le code promo', toMenu:'Au menu', wallet:'Portefeuille de soutien', copy:'Copier', copied:'Copié', soon:'Bientôt', thanks:'Merci', wisdomClose:'Suivant', destinyStart:'Commencer la prédiction', destinyRestart:'Recommencer',
  riddleEnter:'Entrer dans le Labyrinthe', riddleReady:'Prêt ? Le Labyrinthe t’attend.', riddleRules1:'Un par un : chaque énigme se débloque après la réponse à la précédente.', riddleRules2:'Prends ton temps et réfléchis autant que nécessaire.', riddleRules3:'Aide : deux indices. Ils donnent seulement une direction de réflexion.', lookAnswer:'Voir la réponse', answerConfirm:'Veux-tu vraiment révéler la réponse ?', backToRiddle:"Retour à l’énigme", yesOpen:'Oui, révéler', goFurther:'Continuer', riddleComplete:'Félicitations', riddleCompleteText:'Tu as vaincu le Labyrinthe des énigmes !', fateComplete:'Chroniques terminées', fateCompleteText:'Tous les dilemmes sont terminés. De nouveaux apparaîtront dans les mises à jour.',
  aboutText1:'Your Destiny est un espace narratif de choix, d’histoires, d’énigmes et de réflexions sur le destin.', aboutText2:'Des histoires où tes choix ouvrent des chemins différents.', aboutText3:'Chroniques du Destin — des dilemmes qui mettent des choix difficiles face à toi.', aboutText4:'Labyrinthe des énigmes — des défis logiques à difficulté croissante.', aboutText5:'Véritable Destin — un questionnaire d’archétypes basé sur tes choix.', aboutText6:'Sagesse du Destin — des pensées pour s’arrêter, observer et avancer.', termsTitle:"Conditions d’utilisation", privacyTitle:'Politique de confidentialité', stepIntoUnknown:'Entrer dans l’inconnu...', next:'Suivant', hint:'Indice', hintUsed:'Utilisé', destinyResultTitle:'Ton véritable destin', destinyResultDesc:'Archétype révélé', destinyRestartBtn:'Recommencer', empty:'Vide pour le moment...'
};

const EXTRA_I18N = {
  ru:{vipActivated30:'VIP активирован на 30 дней',invalidPromo:'Неверный промокод',supportDesc:'Поддержка помогает сохранять развитие Your Destiny, создавать новые истории и поддерживать работу проекта.',authorDesc:'Раздел для авторов, которые хотят предложить проекту собственные истории, сценарии, загадки, визуальные идеи или другие оригинальные материалы.',authorStories:'Истории и сценарии',authorRiddles:'Загадки и логические задачи',authorIdeas:'Идеи и концепции новых разделов',authorLegal:'Отправляя материал в Your Destiny, автор подтверждает, что является его автором либо располагает всеми необходимыми правами, разрешениями и согласиями на передачу и возможное использование материала. Автор гарантирует отсутствие нарушения прав третьих лиц и обязуется самостоятельно урегулировать любые претензии, связанные с предоставленным материалом. Сам факт отправки не означает автоматического принятия, публикации, эксклюзивности или гарантированной выплаты. До публикации стороны отдельно согласовывают формат использования, объём прав, указание авторства, возможное вознаграждение, срок и территорию использования. Если отдельное письменное соглашение не заключено, отправка материала не считается передачей исключительных прав.',writeDirect:'Написать в Direct',channelMore:'Больше историй, обновлений и материалов — в Telegram-канале.',openTelegram:'Telegram', capsule:'Точная дата и время первого входа', wisdomLabel:'ЗНАК СУДЬБЫ', wisdomFooter:'слово судьбы', hintConfirm:'Точно хочешь открыть подсказку? Она будет использована и не даст готового ответа.', hintYes:'Да, открыть', hintNo:'Назад', countOf:'из', destinyIntro:'10 вопросов помогут раскрыть твой архетип.', finalChannel:'В Telegram-канале есть ещё истории, новые испытания и обновления.', aboutLead:'Your Destiny — это место, где обычный выбор превращается в маленькое испытание. Здесь нет единственно правильного пути: ты читаешь, решаешь, рискуешь, ошибаешься, находишь ответы и постепенно узнаёшь собственный стиль мышления.', aboutBody:'Проходи Хроники Судьбы, где решения показывают твой взгляд на реальные ситуации; входи в Лабиринт Загадок и проверяй логику; ищи свой архетип в Истинной Судьбе; открывай новые мысли в Мудрости Судьбы. Your Destiny создана так, чтобы к ней хотелось возвращаться — не ради одного результата, а ради следующего вопроса.'},
  en:{vipActivated30:'VIP activated for 30 days',invalidPromo:'Invalid promo code',supportDesc:'Your support helps Your Destiny grow, create new stories and keep the project running.',authorDesc:'A space for creators who want to submit original stories, scripts, riddles, visual ideas or other materials for Your Destiny.',authorStories:'Stories and scripts',authorRiddles:'Riddles and logic',authorIdeas:'Ideas and new section concepts',authorLegal:'By submitting material to Your Destiny, the author confirms that they created the material or hold all rights, permissions and consents required for its submission and potential use. The author warrants that the material does not infringe third-party rights and agrees to handle any related claims. Submission alone does not guarantee acceptance, publication, exclusivity or payment. Before publication, the parties may separately agree on permitted use, attribution, scope of rights, compensation, duration and territory. Unless a separate written agreement states otherwise, submission does not constitute a transfer of exclusive rights.',writeDirect:'Write in Direct',channelMore:'More stories, updates and materials are available on the Telegram channel.',openTelegram:'Telegram',capsule:'Exact date and time of first entry',wisdomLabel:'SIGN OF FATE',wisdomFooter:'word of fate',hintConfirm:'Are you sure you want to open the hint? It will be used and will not reveal the answer.',hintYes:'Yes, open',hintNo:'Back',countOf:'of',destinyIntro:'10 questions will help reveal your archetype.',finalChannel:'There are more stories, new challenges and updates on the Telegram channel.',aboutLead:'Your Destiny is a space where an ordinary choice becomes a small test. There is no single perfect path: you read, decide, take risks, make mistakes, find answers and gradually discover your own way of thinking.',aboutBody:'Explore the Chronicles of Fate, where decisions reflect how you approach real situations; enter the Labyrinth of Riddles; discover your archetype in True Destiny; and return to the Wisdom of Fate whenever you need a new thought. Your Destiny is built around one simple idea: there is always another question waiting.'},
  es:{vipActivated30:'VIP activado durante 30 días',invalidPromo:'Código promocional no válido',supportDesc:'Tu apoyo ayuda a que Your Destiny crezca, cree nuevas historias y mantenga el proyecto.',authorDesc:'Un espacio para creadores que quieran proponer historias, guiones, acertijos, ideas visuales u otros materiales originales.',authorStories:'Historias y guiones',authorRiddles:'Acertijos y lógica',authorIdeas:'Ideas y conceptos de nuevas secciones',authorLegal:'Al enviar material a Your Destiny, el autor confirma que lo ha creado o que posee todos los derechos, permisos y autorizaciones necesarios para su envío y posible uso. Garantiza que el material no infringe derechos de terceros y asume la gestión de cualquier reclamación relacionada. El envío no garantiza aceptación, publicación, exclusividad ni pago. Antes de publicar, pueden acordarse por separado el uso permitido, la atribución, el alcance de los derechos, la remuneración, el plazo y el territorio. Salvo acuerdo escrito, el envío no implica cesión de derechos exclusivos.',writeDirect:'Escribir por Direct',channelMore:'Más historias, novedades y materiales están en el canal de Telegram.',openTelegram:'Telegram',capsule:'Fecha y hora exactas de la primera entrada',wisdomLabel:'SEÑAL DEL DESTINO',wisdomFooter:'palabra del destino',hintConfirm:'¿Seguro que quieres abrir la pista? Se usará y no dará la respuesta.',hintYes:'Sí, abrir',hintNo:'Volver',countOf:'de',destinyIntro:'10 preguntas te ayudarán a descubrir tu arquetipo.',finalChannel:'En el canal de Telegram hay más historias, nuevos retos y novedades.',aboutLead:'Your Destiny es un espacio donde una elección cotidiana puede convertirse en un pequeño desafío. No existe un único camino perfecto: lees, decides, arriesgas, te equivocas, encuentras respuestas y descubres poco a poco tu forma de pensar.',aboutBody:'Recorre las Crónicas del Destino, pon a prueba tu lógica en el Laberinto de Acertijos, descubre tu arquetipo en tu Verdadero Destino y vuelve a la Sabiduría del Destino cuando quieras una nueva idea. Aquí siempre queda una pregunta más por responder.'},
  pt:{vipActivated30:'VIP ativado por 30 dias',invalidPromo:'Código promocional inválido',supportDesc:'O teu apoio ajuda o Your Destiny a crescer, criar novas histórias e manter o projeto.',authorDesc:'Um espaço para criadores que querem enviar histórias, guiões, enigmas, ideias visuais ou outros materiais originais.',authorStories:'Histórias e guiões',authorRiddles:'Enigmas e lógica',authorIdeas:'Ideias e conceitos de novas secções',authorLegal:'Ao enviar material para o Your Destiny, o autor confirma que o criou ou que possui todos os direitos, autorizações e consentimentos necessários para o envio e possível utilização. Garante que o material não viola direitos de terceiros e assume a gestão de eventuais reclamações. O envio não garante aceitação, publicação, exclusividade ou pagamento. Antes da publicação, podem ser acordados separadamente o uso permitido, atribuição, âmbito dos direitos, remuneração, duração e território. Salvo acordo escrito, o envio não constitui cessão de direitos exclusivos.',writeDirect:'Escrever por Direct',channelMore:'Mais histórias, novidades e materiais estão no canal do Telegram.',openTelegram:'Telegram',capsule:'Data e hora exatas da primeira entrada',wisdomLabel:'SINAL DO DESTINO',wisdomFooter:'palavra do destino',hintConfirm:'Tens a certeza de que queres abrir a pista? Ela será usada e não dará a resposta.',hintYes:'Sim, abrir',hintNo:'Voltar',countOf:'de',destinyIntro:'10 perguntas vão ajudar a revelar o teu arquétipo.',finalChannel:'No canal do Telegram há mais histórias, novos desafios e atualizações.',aboutLead:'Your Destiny é um espaço onde uma escolha comum se transforma num pequeno desafio. Não existe um único caminho perfeito: lês, decides, arriscas, erras, encontras respostas e descobres gradualmente a tua forma de pensar.',aboutBody:'Percorre as Crónicas do Destino, testa a lógica no Labirinto de Enigmas, descobre o teu arquétipo no Verdadeiro Destino e regressa à Sabedoria do Destino quando quiseres uma nova perspetiva. Há sempre uma pergunta à tua espera.'},
  de:{vipActivated30:'VIP für 30 Tage aktiviert',invalidPromo:'Ungültiger Promo-Code',supportDesc:'Deine Unterstützung hilft Your Destiny zu wachsen, neue Geschichten zu erstellen und das Projekt weiterzuführen.',authorDesc:'Ein Bereich für Kreative, die eigene Geschichten, Skripte, Rätsel, visuelle Ideen oder andere Originalmaterialien einreichen möchten.',authorStories:'Geschichten und Skripte',authorRiddles:'Rätsel und Logik',authorIdeas:'Ideen und Konzepte für neue Bereiche',authorLegal:'Mit der Einreichung bei Your Destiny bestätigt der Autor, dass er das Material erstellt hat oder über alle erforderlichen Rechte, Genehmigungen und Zustimmungen für Einreichung und mögliche Nutzung verfügt. Er gewährleistet, dass keine Rechte Dritter verletzt werden, und übernimmt die Verantwortung für entsprechende Ansprüche. Die Einreichung garantiert weder Annahme, Veröffentlichung, Exklusivität noch Vergütung. Vor einer Veröffentlichung können Nutzung, Urheberkennzeichnung, Rechteumfang, Vergütung, Dauer und Gebiet gesondert vereinbart werden. Ohne gesonderte schriftliche Vereinbarung stellt die Einreichung keine Übertragung ausschließlicher Rechte dar.',writeDirect:'Im Direct schreiben',channelMore:'Weitere Geschichten, Updates und Materialien findest du im Telegram-Kanal.',openTelegram:'Telegram',capsule:'Genaues Datum und Uhrzeit des ersten Zugangs',wisdomLabel:'ZEICHEN DES SCHICKSALS',wisdomFooter:'Wort des Schicksals',hintConfirm:'Möchtest du den Hinweis wirklich öffnen? Er wird verbraucht und verrät nicht die Antwort.',hintYes:'Ja, öffnen',hintNo:'Zurück',countOf:'von',destinyIntro:'10 Fragen helfen dir, deinen Archetyp zu entdecken.',finalChannel:'Im Telegram-Kanal gibt es weitere Geschichten, neue Herausforderungen und Updates.',aboutLead:'Your Destiny ist ein Raum, in dem eine alltägliche Entscheidung zu einer kleinen Prüfung wird. Es gibt nicht nur einen perfekten Weg: Du liest, entscheidest, riskierst, irrst dich, findest Antworten und erkennst dabei deine eigene Denkweise.',aboutBody:'Durchlaufe die Chroniken des Schicksals, prüfe deine Logik im Rätsellabyrinth, entdecke deinen Archetyp im wahren Schicksal und kehre zur Weisheit des Schicksals zurück. Die Idee dahinter ist einfach: Nach jeder Antwort wartet eine neue Frage.'},
  fr:{vipActivated30:'VIP activé pour 30 jours',invalidPromo:'Code promo invalide',supportDesc:'Ton soutien aide Your Destiny à grandir, créer de nouvelles histoires et maintenir le projet.',authorDesc:'Un espace pour les créateurs qui souhaitent proposer des histoires, scénarios, énigmes, idées visuelles ou autres contenus originaux.',authorStories:'Histoires et scénarios',authorRiddles:'Énigmes et logique',authorIdeas:'Idées et concepts de nouvelles sections',authorLegal:'En envoyant un contenu à Your Destiny, l’auteur confirme l’avoir créé ou disposer de tous les droits, autorisations et consentements nécessaires à son envoi et à son éventuelle utilisation. Il garantit que le contenu ne porte pas atteinte aux droits de tiers et assume la gestion des réclamations correspondantes. L’envoi ne garantit ni acceptation, ni publication, ni exclusivité, ni rémunération. Avant publication, l’usage autorisé, l’attribution, l’étendue des droits, la rémunération, la durée et le territoire peuvent être convenus séparément. Sauf accord écrit, l’envoi ne constitue pas une cession de droits exclusifs.',writeDirect:'Écrire en Direct',channelMore:'Plus d’histoires, de nouveautés et de contenus sont disponibles sur le canal Telegram.',openTelegram:'Telegram',capsule:'Date et heure exactes de la première entrée',wisdomLabel:'SIGNE DU DESTIN',wisdomFooter:'parole du destin',hintConfirm:'Veux-tu vraiment ouvrir l’indice ? Il sera utilisé et ne donnera pas la réponse.',hintYes:'Oui, ouvrir',hintNo:'Retour',countOf:'sur',destinyIntro:'10 questions t’aideront à révéler ton archétype.',finalChannel:'Le canal Telegram contient encore des histoires, de nouveaux défis et des mises à jour.',aboutLead:'Your Destiny est un espace où un choix ordinaire devient une petite épreuve. Il n’existe pas un seul chemin parfait : tu lis, décides, prends des risques, te trompes, trouves des réponses et découvres peu à peu ta façon de penser.',aboutBody:'Parcours les Chroniques du Destin, teste ta logique dans le Labyrinthe des énigmes, découvre ton archétype dans Ton véritable destin et retrouve la Sagesse du Destin lorsque tu veux une nouvelle perspective. Ici, une question en appelle toujours une autre.'}
};
for (const lang of Object.keys(EXTRA_I18N)) Object.assign(T[lang], EXTRA_I18N[lang]);
const LANGUAGE_HINTS = {
 ru:'Выберите язык интерфейса', en:'Choose your interface language', es:'Elige el idioma de la interfaz', pt:'Escolhe o idioma da interface', de:'Wähle die Sprache der Oberfläche', fr:"Choisis la langue de l’interface"
};
for (const [k,v] of Object.entries(LANGUAGE_HINTS)) T[k] = T[k] || {};
for (const lang of Object.keys(LANGUAGE_HINTS)) T[lang].languageHint = LANGUAGE_HINTS[lang];

const RATING_TEXTS = {
  ru: {
    title:'Оценить Your Destiny', thanks:'Спасибо за вашу оценку!', open:'Открыть Telegram-канал',
    1:'Нам искренне жаль, что проект не оправдал ваших ожиданий. Мы только начинаем свой путь и будем усердно работать над улучшением Your Destiny. Напишите нам в Telegram, что именно пошло не так.',
    2:'Спасибо за критику! Мы видим, что приложению есть куда расти. Если у вас есть конкретные замечания по интерфейсу или концепции — поделитесь ими в директ нашего канала.',
    3:'Нейтральная оценка — отличный повод для роста! Прямо сейчас мы создаем интерактивные истории, чтобы сделать Your Destiny намного интереснее. Следите за обновлениями в нашем Telegram.',
    4:'Прекрасный результат! Нам чуть-чуть не хватило до идеала, но мы это исправим. Заглядывайте в наш Telegram-канал, там мы регулярно делимся дневниками разработки и спойлерами!',
    5:'Потрясающе! Ваша максимальная оценка вдохновляет нас творить дальше. Вы — часть нашей вселенной. Ждем вас в официальном Telegram-канале Your Destiny!'
  },
  en: { title:'Rate Your Destiny', thanks:'Thank you for your rating!', open:'Open Telegram Channel', 1:'We are truly sorry that the project did not meet your expectations. We are only beginning our journey and will keep working hard to improve Your Destiny. Tell us on Telegram what went wrong.', 2:'Thank you for the criticism! We know the app still has room to grow. If you have specific comments about the interface or concept, share them in our channel direct.', 3:'A neutral rating is a great reason to grow! We are currently creating interactive stories to make Your Destiny much more engaging. Follow the updates on Telegram.', 4:'A wonderful result! We were just a little short of perfection, but we will fix that. Visit our Telegram channel for development diaries and spoilers!', 5:'Amazing! Your highest rating inspires us to keep creating. You are part of our universe. We are waiting for you in the official Your Destiny Telegram channel!' },
  es: { title:'Valorar Your Destiny', thanks:'¡Gracias por tu valoración!', open:'Abrir canal de Telegram', 1:'Sentimos sinceramente que el proyecto no haya cumplido tus expectativas. Estamos comenzando este camino y seguiremos trabajando para mejorar Your Destiny. Cuéntanos en Telegram qué salió mal.', 2:'¡Gracias por la crítica! Sabemos que la aplicación todavía puede crecer. Si tienes comentarios concretos sobre la interfaz o el concepto, compártelos por mensaje directo en nuestro canal.', 3:'¡Una valoración neutral es una buena razón para crecer! Estamos creando historias interactivas para hacer Your Destiny mucho más interesante. Sigue las novedades en Telegram.', 4:'¡Un resultado excelente! Nos faltó muy poco para la perfección, pero lo corregiremos. Visita nuestro canal de Telegram para diarios de desarrollo y spoilers.', 5:'¡Increíble! Tu máxima valoración nos inspira a seguir creando. Eres parte de nuestro universo. Te esperamos en el canal oficial de Telegram de Your Destiny.' },
  pt: { title:'Avaliar Your Destiny', thanks:'Obrigado pela tua avaliação!', open:'Abrir canal do Telegram', 1:'Lamentamos sinceramente que o projeto não tenha correspondido às tuas expectativas. Estamos apenas a começar e continuaremos a trabalhar para melhorar o Your Destiny. Diz-nos no Telegram o que correu mal.', 2:'Obrigado pela crítica! Sabemos que a aplicação ainda pode crescer. Se tiveres comentários concretos sobre a interface ou o conceito, partilha-os por mensagem direta no nosso canal.', 3:'Uma avaliação neutra é um ótimo motivo para crescer! Estamos a criar histórias interativas para tornar o Your Destiny muito mais interessante. Acompanha as novidades no Telegram.', 4:'Um excelente resultado! Faltou muito pouco para a perfeição, mas vamos corrigir isso. Visita o nosso canal do Telegram para diários de desenvolvimento e spoilers.', 5:'Fantástico! A tua avaliação máxima inspira-nos a continuar a criar. Fazes parte do nosso universo. Esperamos por ti no canal oficial do Telegram do Your Destiny.' },
  de: { title:'Your Destiny bewerten', thanks:'Danke für deine Bewertung!', open:'Telegram-Kanal öffnen', 1:'Es tut uns ehrlich leid, dass das Projekt deine Erwartungen nicht erfüllt hat. Wir stehen noch am Anfang und arbeiten weiter an Your Destiny. Schreib uns auf Telegram, was nicht funktioniert hat.', 2:'Danke für die Kritik! Wir wissen, dass die App noch wachsen kann. Wenn du konkrete Hinweise zu Interface oder Konzept hast, teile sie per Direktnachricht in unserem Kanal.', 3:'Eine neutrale Bewertung ist ein guter Anstoß zum Wachstum! Wir entwickeln gerade interaktive Geschichten, damit Your Destiny noch spannender wird. Folge den Updates auf Telegram.', 4:'Ein großartiges Ergebnis! Bis zur Perfektion fehlte nur ein wenig, aber das werden wir verbessern. In unserem Telegram-Kanal teilen wir Entwicklungsberichte und Spoiler.', 5:'Fantastisch! Deine höchste Bewertung inspiriert uns, weiterzumachen. Du bist Teil unseres Universums. Wir erwarten dich im offiziellen Telegram-Kanal von Your Destiny.' },
  fr: { title:'Évaluer Your Destiny', thanks:'Merci pour votre évaluation !', open:'Ouvrir le canal Telegram', 1:'Nous sommes sincèrement désolés que le projet n’ait pas répondu à vos attentes. Nous commençons tout juste et continuerons à améliorer Your Destiny. Dites-nous sur Telegram ce qui n’a pas fonctionné.', 2:'Merci pour votre critique ! Nous savons que l’application peut encore progresser. Si vous avez des remarques précises sur l’interface ou le concept, partagez-les en message direct sur notre canal.', 3:'Une note neutre est une excellente raison de progresser ! Nous créons actuellement des histoires interactives pour rendre Your Destiny bien plus captivant. Suivez les nouveautés sur Telegram.', 4:'Excellent résultat ! Il nous manquait un tout petit peu pour atteindre la perfection, mais nous allons corriger cela. Retrouvez nos journaux de développement et spoilers sur Telegram.', 5:'Fantastique ! Votre note maximale nous inspire à continuer à créer. Vous faites partie de notre univers. Nous vous attendons sur le canal Telegram officiel de Your Destiny.' }
};


function t(key) { return (T[currentLang] && T[currentLang][key]) || T.en[key] || key; }
function loc(value) { return value && (value[currentLang] ?? value.en ?? value.ru ?? Object.values(value)[0]) || ''; }
const DATE_LOCALES = { ru:'ru-RU', en:'en-GB', es:'es-ES', pt:'pt-PT', de:'de-DE', fr:'fr-FR' };
const CHANNEL_URL = 'https://t.me/YourDestiny_Official';
const DIRECT_URL = 'https://t.me/YourDestiny_Official?direct';

const THEMES = [
  { id: 'purple', name: { ru: 'Королевский Пурпур', en: 'Royal Purple', es: 'Púrpura Real', pt:'Púrpura Real', de:'Königliches Purpur', fr:'Pourpre Royal' }, grad: 'linear-gradient(135deg,#6f3aa8,#2e1a4a)', swatch:'#7b3fb3' },
  { id: 'sapphire', name: { ru: 'Полночный Сапфир', en: 'Midnight Sapphire', es: 'Zafiro de Medianoche', pt:'Safira da Meia-Noite', de:'Mitternachtssaphir', fr:'Saphir de Minuit' }, grad: 'linear-gradient(135deg,#264e8b,#101d3c)', swatch:'#315fa8' },
  { id: 'crimson', name: { ru: 'Багровый Занавес', en: 'Crimson Curtain', es: 'Telón Carmesí', pt:'Cortina Carmesim', de:'Karmesinroter Vorhang', fr:'Rideau Cramoisi' }, grad: 'linear-gradient(135deg,#9b2f43,#4a1515)', swatch:'#a9324c' },
  { id: 'emerald', name: { ru: 'Изумрудный Лес', en: 'Emerald Forest', es: 'Bosque Esmeralda', pt:'Floresta Esmeralda', de:'Smaragdwald', fr:'Forêt Émeraude' }, grad: 'linear-gradient(135deg,#2d7b45,#102f20)', swatch:'#2f8a55' },
  { id: 'amber', name: { ru: 'Янтарные Сумерки', en: 'Amber Twilight', es: 'Crepúsculo Ámbar', pt:'Crepúsculo Âmbar', de:'Bernstein-Dämmerung', fr:'Crépuscule Ambré' }, grad: 'linear-gradient(135deg,#c18a19,#5a3609)', swatch:'#d29a24' },
  { id: 'kaleidoscope', name: { ru: 'Калейдоскоп', en: 'Kaleidoscope', es: 'Caleidoscopio', pt:'Calidoscópio', de:'Kaleidoskop', fr:'Kaléidoscope' }, grad: 'linear-gradient(135deg,#7b3fb3,#2d6a9b,#9b2f43,#2d7b45,#c18a19)', swatch:'#7b3fb3' }
];


function detectLanguage() {
  const code = (tg?.initDataUnsafe?.user?.language_code || navigator.language || navigator.userLanguage || '').toLowerCase().split('-')[0];
  const cis = ['ru','kk','be','ky','uk','uz','tg','tk','az','hy','ro','mo'];
  if (cis.includes(code)) return 'ru';
  if (['es','pt','de','fr','en'].includes(code)) return code;
  return 'en';
}

function formatFirstVisit(value, includeTime = false) {
  const d = new Date(value);
  const opts = includeTime
    ? { day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit', hour12:false }
    : { day:'numeric', month:'long', year:'numeric' };
  return d.toLocaleString(DATE_LOCALES[currentLang] || 'en-GB', opts);
}

function initFirstVisit() {
  let firstVisit = localStorage.getItem('first_visit_at');
  if (!firstVisit) {
    firstVisit = new Date().toISOString();
    localStorage.setItem('first_visit_at', firstVisit);
  }
  const el = document.getElementById('first-visit-date');
  if (el) el.textContent = formatFirstVisit(firstVisit, true);
}

function showTimeCapsule() {
  initFirstVisit();
  const firstVisit = localStorage.getItem('first_visit_at');
  const d = new Date(firstVisit);
  const datePart = d.toLocaleDateString(DATE_LOCALES[currentLang] || 'en-GB', { day:'2-digit', month:'long', year:'numeric' });
  const timePart = d.toLocaleTimeString(DATE_LOCALES[currentLang] || 'en-GB', { hour:'2-digit', minute:'2-digit', hour12:false });
  const texts = {
    ru:`Ты впервые вошёл в Your Destiny ${datePart} в ${timePart}. С этого момента началась твоя история в этом мире.`,
    en:`You first entered Your Destiny on ${datePart} at ${timePart}. From that moment, your story in this world began.`,
    es:`Entraste por primera vez en Your Destiny el ${datePart} a las ${timePart}. Desde ese momento comenzó tu historia en este mundo.`,
    pt:`Entraste pela primeira vez no Your Destiny em ${datePart}, às ${timePart}. A partir desse momento começou a tua história neste mundo.`,
    de:`Du bist am ${datePart} um ${timePart} erstmals in Your Destiny eingetreten. Von diesem Moment an begann deine Geschichte in dieser Welt.`,
    fr:`Tu es entré pour la première fois dans Your Destiny le ${datePart} à ${timePart}. À partir de cet instant, ton histoire dans cet univers a commencé.`
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

function showInfoOverlay(title, text) {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container info-card"><div class="fate-final-title">${title}</div><div class="fate-final-text">${text}</div></div>`;
  document.body.appendChild(overlay);
}

// ---------- Инициализация ----------
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  currentLang = localStorage.getItem('lang_manual') === '1' ? (localStorage.getItem('lang') || detectLanguage()) : detectLanguage();
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
  const savedTheme = THEMES.some(x => x.id === localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'purple';
  setTheme(savedTheme || 'purple');
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
    <button class="color-option ${th.id === currentTheme ? 'active' : ''} theme-${th.id}" data-theme="${th.id}" aria-label="${loc(th.name)}" onclick="event.stopPropagation();setTheme('${th.id}')" style="--swatch:${th.swatch}"><span></span></button>
  `).join('');
}

function toggleLanguagePicker() {
  document.getElementById('language-picker-panel')?.classList.toggle('open');
}
function toggleThemePicker() {
  document.getElementById('theme-picker-panel')?.classList.toggle('open');
}

function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  renderThemeColors();
  const th = THEMES.find(x => x.id === theme);
  const name = document.getElementById('theme-name');
  if (name) name.textContent = th ? loc(th.name) : theme;
  document.getElementById('theme-picker-panel')?.classList.remove('open');
}

function setLanguage(lang) {
  if (!T[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('lang', lang);
  localStorage.setItem('lang_manual', '1');
  updateLanguageUI();
  renderThemeColors();
  updateVipDisplay();
  document.getElementById('language-picker-panel')?.classList.remove('open');
}

function updateLanguageUI() {
  ['ru','en','es','pt','de','fr'].forEach(lang => {
    const btn = document.getElementById(`lang-${lang}-btn`);
    if (btn) btn.classList.toggle('active', currentLang === lang);
  });
  const languageCurrent = document.getElementById('language-current');
  if (languageCurrent) languageCurrent.textContent = {ru:'Русский',en:'English',es:'Español',pt:'Português',de:'Deutsch',fr:'Français'}[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (el.tagName === 'INPUT') { if (key === 'promoPlaceholder') el.placeholder = t(key); }
    else el.textContent = t(key);
  });
  const subtitle = document.getElementById('header-subtitle');
  if (subtitle) subtitle.textContent = t('novels');
  const keys = ['novels','surveys','contacts','favorites','settings'];
  document.querySelectorAll('.nav-label').forEach((el, i) => { el.textContent = t(keys[i]); });
  const th = THEMES.find(x => x.id === currentTheme);
  const themeName = document.getElementById('theme-name');
  if (th && themeName) themeName.textContent = loc(th.name);
  initFirstVisit();
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
    status.textContent = t('vipActivated30');
    status.style.display = 'block';
    input.value = '';
    updateVipDisplay();
  } else {
    status.className = 'promo-status error';
    status.textContent = t('invalidPromo');
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



function showRatingModal() {
  const overlay=document.createElement('div'); overlay.className='fate-overlay active';
  const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en;
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="rating-card"><div class="rating-title">${texts.title}</div><div class="rating-stars" role="radiogroup" aria-label="${texts.title}">${[1,2,3,4,5].map(i=>`<button class="rating-star" data-rating="${i}" aria-label="${i}" onclick="selectRating(${i})">★</button>`).join('')}</div><div class="rating-thanks">${texts.thanks}</div><div class="rating-text" id="rating-text"></div><a class="author-channel-btn rating-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${texts.open}</a></div>`;
  document.body.appendChild(overlay);
}
function selectRating(value){
  const stars=document.querySelectorAll('.rating-star'); stars.forEach(star=>star.classList.toggle('selected',Number(star.dataset.rating)<=value));
  const text=document.getElementById('rating-text'); const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en; if(text) text.textContent=texts[value]||texts[5];
}

function showSupportAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  const desc = {
    ru:'Your Destiny — независимый проект, созданный со страстью и заботой. Вы можете поддержать автора и внести добровольный вклад в развитие проекта. Любая отправленная сумма является безвозмездным даром, осуществляется по вашему личному решению и не налагает на создателя встречных обязательств. Это не является оплатой за товары, работы или услуги.',
    en:'Your Destiny is an independent project created with passion and care. You may support the creator with a voluntary contribution to the project. Any amount is a gratuitous gift made by your own choice and does not create a counter-obligation for the creator. It is not payment for goods, work or services.',
    es:'Your Destiny es un proyecto independiente creado con pasión y cuidado. Puedes apoyar al creador con una contribución voluntaria. Cualquier cantidad es un donativo realizado libremente y no crea obligaciones de contraprestación para el creador. No constituye un pago por bienes, trabajos o servicios.',
    pt:'Your Destiny é um projeto independente criado com paixão e cuidado. Podes apoiar o autor com um contributo voluntário. Qualquer valor é um donativo feito por decisão própria e não cria obrigações de contraprestação para o criador. Não constitui pagamento por bens, trabalhos ou serviços.',
    de:'Your Destiny ist ein unabhängiges Projekt, das mit Leidenschaft und Sorgfalt geschaffen wurde. Du kannst den Ersteller mit einem freiwilligen Beitrag unterstützen. Jeder Betrag ist eine freiwillige Schenkung und begründet keine Gegenleistungspflicht des Erstellers. Es handelt sich nicht um eine Zahlung für Waren, Arbeiten oder Dienstleistungen.',
    fr:'Your Destiny est un projet indépendant créé avec passion et soin. Vous pouvez soutenir le créateur par une contribution volontaire. Toute somme versée constitue un don librement décidé et ne crée aucune obligation de contrepartie pour le créateur. Il ne s’agit pas d’un paiement pour des biens, travaux ou services.'
  };
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
    <div class="author-card support-card">
      <div class="author-title">${t('supportAuthor')}</div>
      <div class="author-subtitle support-copy">${desc[currentLang] || desc.en}</div>
      <div class="support-payment-grid">
        <div class="payment-block"><span>${({ru:'Криптосеть',en:'Network',es:'Red',pt:'Rede',de:'Netzwerk',fr:'Réseau'})[currentLang]}</span><strong>Tron (TRC-20)</strong></div>
        <div class="payment-block"><span>${({ru:'Токен актива',en:'Asset token',es:'Token',pt:'Token',de:'Asset-Token',fr:'Jeton'})[currentLang]}</span><strong>USDT</strong></div>
        <div class="payment-block payment-address"><span>${({ru:'Адрес платежа',en:'Payment address',es:'Dirección de pago',pt:'Endereço de pagamento',de:'Zahlungsadresse',fr:'Adresse de paiement'})[currentLang]}</span><strong>${WALLET}</strong></div>
      </div>
      <button class="wallet-copy-btn support-copy-btn" onclick="copyWallet()">${t('copy')}</button>
    </div>`;
  document.body.appendChild(overlay);
}

function showBecomeAuthor() {
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  const legal = {
    ru:'Отправляя текст, сценарий, историю, загадку, изображение, концепцию или иной материал в Your Destiny, вы подтверждаете, что обладаете всеми необходимыми правами и разрешениями на его передачу и использование и что материал не нарушает права третьих лиц. Если материал принят к использованию, вы соглашаетесь предоставить Your Destiny максимально широкий объём прав, необходимый для его воспроизведения, редактирования, адаптации, перевода, публикации, распространения, монетизации и включения в состав проекта, без ограничения территории и на весь допустимый законом срок, если отдельным письменным соглашением не установлено иное. Вознаграждение, роялти, обязательная выплата или обязательное указание авторства не возникают автоматически из самого факта отправки. После принятия материала вы не вправе требовать его удаления, запрета использования или дополнительной оплаты, кроме случаев, прямо предусмотренных отдельным письменным соглашением или императивными нормами применимого права. Вы также подтверждаете, что самостоятельно урегулируете любые претензии третьих лиц, связанные с нарушением предоставленных вами гарантий. Не отправляйте материалы, права на которые вы не можете предоставить на этих условиях.',
    en:'By submitting text, scripts, stories, riddles, images, concepts or other material to Your Destiny, you confirm that you hold all rights and permissions required for its submission and use and that the material does not infringe third-party rights. If the material is accepted for use, you agree to grant Your Destiny the broadest rights reasonably required to reproduce, edit, adapt, translate, publish, distribute, monetize and incorporate the material into the project, worldwide and for the maximum period permitted by law, unless a separate written agreement provides otherwise. Compensation, royalties, mandatory payment or mandatory attribution do not arise automatically from submission. After acceptance, you agree not to demand removal, prohibition of use or additional payment except where a separate written agreement or mandatory applicable law expressly provides otherwise. You also agree to handle third-party claims arising from a breach of your warranties. Do not submit material you cannot grant on these terms.',
    es:'Al enviar textos, guiones, historias, acertijos, imágenes, conceptos u otros materiales a Your Destiny, confirmas que posees todos los derechos y permisos necesarios para su envío y uso y que el material no infringe derechos de terceros. Si el material es aceptado, aceptas conceder a Your Destiny los derechos más amplios razonablemente necesarios para reproducirlo, editarlo, adaptarlo, traducirlo, publicarlo, distribuirlo, monetizarlo e incorporarlo al proyecto, en todo el mundo y durante el máximo plazo permitido por la ley, salvo acuerdo escrito distinto. La remuneración, regalías, pago obligatorio o atribución obligatoria no nacen automáticamente del envío. Tras la aceptación, aceptas no exigir la retirada, prohibición de uso ni pagos adicionales salvo que lo establezca expresamente un acuerdo escrito o una norma legal imperativa. También asumes la gestión de reclamaciones de terceros derivadas del incumplimiento de tus garantías. No envíes materiales que no puedas conceder bajo estas condiciones.',
    pt:'Ao enviar textos, guiões, histórias, enigmas, imagens, conceitos ou outros materiais para o Your Destiny, confirmas que tens todos os direitos e autorizações necessários para o envio e utilização e que o material não viola direitos de terceiros. Se o material for aceite, concordas em conceder ao Your Destiny os direitos mais amplos razoavelmente necessários para reproduzir, editar, adaptar, traduzir, publicar, distribuir, monetizar e integrar o material no projeto, em todo o mundo e pelo período máximo permitido por lei, salvo acordo escrito em contrário. Remuneração, royalties, pagamento obrigatório ou atribuição obrigatória não surgem automaticamente do envio. Após a aceitação, concordas em não exigir remoção, proibição de utilização ou pagamento adicional, salvo quando previsto expressamente por acordo escrito ou por norma legal imperativa. Assumes também a gestão de reclamações de terceiros resultantes da violação das tuas garantias. Não envies materiais que não possas disponibilizar nestas condições.',
    de:'Mit der Einreichung von Texten, Skripten, Geschichten, Rätseln, Bildern, Konzepten oder anderen Materialien bei Your Destiny bestätigst du, dass du über alle erforderlichen Rechte und Genehmigungen verfügst und keine Rechte Dritter verletzt werden. Wird das Material angenommen, stimmst du zu, Your Destiny die weitestgehenden vernünftigerweise erforderlichen Rechte zur Vervielfältigung, Bearbeitung, Anpassung, Übersetzung, Veröffentlichung, Verbreitung, Monetarisierung und Einbindung in das Projekt weltweit und für die gesetzlich zulässige Höchstdauer einzuräumen, sofern keine schriftliche Vereinbarung etwas anderes bestimmt. Vergütung, Tantiemen, eine verpflichtende Zahlung oder verpflichtende Namensnennung entstehen nicht allein durch die Einreichung. Nach Annahme stimmst du zu, keine Entfernung, Nutzungsuntersagung oder zusätzliche Zahlung zu verlangen, außer soweit dies ausdrücklich schriftlich vereinbart oder gesetzlich zwingend vorgesehen ist. Für Ansprüche Dritter aufgrund einer Verletzung deiner Zusicherungen bist du selbst verantwortlich. Reiche kein Material ein, das du nicht unter diesen Bedingungen zur Verfügung stellen darfst.',
    fr:'En envoyant des textes, scénarios, histoires, énigmes, images, concepts ou autres contenus à Your Destiny, vous confirmez disposer de tous les droits et autorisations nécessaires à leur transmission et à leur utilisation et ne pas porter atteinte aux droits de tiers. Si le contenu est accepté, vous acceptez d’accorder à Your Destiny les droits les plus larges raisonnablement nécessaires pour le reproduire, le modifier, l’adapter, le traduire, le publier, le distribuer, le monétiser et l’intégrer au projet, dans le monde entier et pour la durée maximale autorisée par la loi, sauf accord écrit contraire. Aucune rémunération, redevance, paiement obligatoire ou attribution obligatoire ne naît automatiquement de l’envoi. Après acceptation, vous acceptez de ne pas exiger le retrait, l’interdiction d’utilisation ou un paiement supplémentaire, sauf disposition expresse d’un accord écrit ou d’une règle impérative applicable. Vous assumez également les réclamations de tiers résultant d’une violation de vos garanties. N’envoyez pas de contenu que vous ne pouvez pas concéder dans ces conditions.'
  };

  const generic = legal[currentLang] || legal.en;
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
    <div class="author-card legal-author-card">
      <div class="author-title">${t('becomeAuthor')}</div>
      <div class="author-subtitle">${t('authorDesc')}</div>
      <div class="author-legal-text">${generic}</div>
      <button class="author-channel-btn" onclick="showAuthorConfirm()">${currentLang==='ru'?'Продолжить':currentLang==='de'?'Weiter':currentLang==='fr'?'Continuer':currentLang==='es'?'Continuar':currentLang==='pt'?'Continuar':'Continue'}</button>
    </div>`;
  document.body.appendChild(overlay);
}

function showAuthorConfirm() {
  const previous = document.querySelector('.fate-overlay');
  if (previous) previous.remove();
  const overlay = document.createElement('div');
  overlay.className = 'fate-overlay active';
  const text = {
    ru:'Подтвердите, что вы прочитали условия, обладаете необходимыми правами на отправляемый материал и соглашаетесь с указанными условиями передачи и использования.',
    en:'Confirm that you have read the terms, hold the necessary rights to the submitted material and agree to the stated submission and use conditions.',
    es:'Confirma que has leído las condiciones, tienes los derechos necesarios sobre el material y aceptas las condiciones de envío y uso.',
    pt:'Confirma que leste as condições, tens os direitos necessários sobre o material e aceitas as condições de envio e utilização.',
    de:'Bestätige, dass du die Bedingungen gelesen hast, über die erforderlichen Rechte verfügst und den Bedingungen für Einreichung und Nutzung zustimmst.',
    fr:'Confirmez que vous avez lu les conditions, disposez des droits nécessaires sur le contenu et acceptez les conditions d’envoi et d’utilisation.'
  };
  const yes = {ru:'Согласен — написать',en:'I agree — write',es:'Acepto — escribir',pt:'Aceito — escrever',de:'Ich stimme zu — schreiben',fr:'J’accepte — écrire'};
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="author-card legal-confirm-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-legal-text">${text[currentLang]||text.en}</div><a class="author-channel-btn" href="${DIRECT_URL}" target="_blank" rel="noopener">${yes[currentLang]||yes.en}</a></div>`;
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
    "question": {
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? Ситуация: после тяжёлой недели.",
      "en": "If an evening suddenly becomes free, how would you most likely spend it?",
      "es": "Si de repente tienes una tarde libre, ¿cómo la pasarías?",
      "pt": "Se de repente ficares com uma noite livre, como a passarias?",
      "de": "Wenn plötzlich ein Abend frei wird, wie würdest du ihn verbringen?",
      "fr": "Si une soirée se libère soudainement, comment la passerais-tu?"
    },
    "a": {
      "ru": "Останусь дома и отдохну",
      "en": "Stay home and rest",
      "es": "Me quedaré en casa y descansaré",
      "pt": "Ficarei em casa a descansar",
      "de": "Ich bleibe zu Hause und ruhe mich aus",
      "fr": "Je resterai chez moi pour me reposer"
    },
    "b": {
      "ru": "Пойду куда-нибудь спонтанно",
      "en": "Go somewhere spontaneously",
      "es": "Iré a algún sitio espontáneamente",
      "pt": "Irei a algum lugar de forma espontânea",
      "de": "Ich gehe spontan irgendwohin",
      "fr": "J’irai quelque part spontanément"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? Ситуация: перед важной встречей.",
      "en": "If an evening suddenly becomes free, how would you most likely spend it?",
      "es": "Si de repente tienes una tarde libre, ¿cómo la pasarías?",
      "pt": "Se de repente ficares com uma noite livre, como a passarias?",
      "de": "Wenn plötzlich ein Abend frei wird, wie würdest du ihn verbringen?",
      "fr": "Si une soirée se libère soudainement, comment la passerais-tu?"
    },
    "a": {
      "ru": "Останусь дома и отдохну",
      "en": "Stay home and rest",
      "es": "Me quedaré en casa y descansaré",
      "pt": "Ficarei em casa a descansar",
      "de": "Ich bleibe zu Hause und ruhe mich aus",
      "fr": "Je resterai chez moi pour me reposer"
    },
    "b": {
      "ru": "Пойду куда-нибудь спонтанно",
      "en": "Go somewhere spontaneously",
      "es": "Iré a algún sitio espontáneamente",
      "pt": "Irei a algum lugar de forma espontânea",
      "de": "Ich gehe spontan irgendwohin",
      "fr": "J’irai quelque part spontanément"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? Ситуация: когда ты устал.",
      "en": "If an evening suddenly becomes free, how would you most likely spend it?",
      "es": "Si de repente tienes una tarde libre, ¿cómo la pasarías?",
      "pt": "Se de repente ficares com uma noite livre, como a passarias?",
      "de": "Wenn plötzlich ein Abend frei wird, wie würdest du ihn verbringen?",
      "fr": "Si une soirée se libère soudainement, comment la passerais-tu?"
    },
    "a": {
      "ru": "Останусь дома и отдохну",
      "en": "Stay home and rest",
      "es": "Me quedaré en casa y descansaré",
      "pt": "Ficarei em casa a descansar",
      "de": "Ich bleibe zu Hause und ruhe mich aus",
      "fr": "Je resterai chez moi pour me reposer"
    },
    "b": {
      "ru": "Пойду куда-нибудь спонтанно",
      "en": "Go somewhere spontaneously",
      "es": "Iré a algún sitio espontáneamente",
      "pt": "Irei a algum lugar de forma espontânea",
      "de": "Ich gehe spontan irgendwohin",
      "fr": "J’irai quelque part spontanément"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? Ситуация: в незнакомой компании.",
      "en": "If an evening suddenly becomes free, how would you most likely spend it?",
      "es": "Si de repente tienes una tarde libre, ¿cómo la pasarías?",
      "pt": "Se de repente ficares com uma noite livre, como a passarias?",
      "de": "Wenn plötzlich ein Abend frei wird, wie würdest du ihn verbringen?",
      "fr": "Si une soirée se libère soudainement, comment la passerais-tu?"
    },
    "a": {
      "ru": "Останусь дома и отдохну",
      "en": "Stay home and rest",
      "es": "Me quedaré en casa y descansaré",
      "pt": "Ficarei em casa a descansar",
      "de": "Ich bleibe zu Hause und ruhe mich aus",
      "fr": "Je resterai chez moi pour me reposer"
    },
    "b": {
      "ru": "Пойду куда-нибудь спонтанно",
      "en": "Go somewhere spontaneously",
      "es": "Iré a algún sitio espontáneamente",
      "pt": "Irei a algum lugar de forma espontânea",
      "de": "Ich gehe spontan irgendwohin",
      "fr": "J’irai quelque part spontanément"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? Ситуация: когда планы меняются в последний момент.",
      "en": "If an evening suddenly becomes free, how would you most likely spend it?",
      "es": "Si de repente tienes una tarde libre, ¿cómo la pasarías?",
      "pt": "Se de repente ficares com uma noite livre, como a passarias?",
      "de": "Wenn plötzlich ein Abend frei wird, wie würdest du ihn verbringen?",
      "fr": "Si une soirée se libère soudainement, comment la passerais-tu?"
    },
    "a": {
      "ru": "Останусь дома и отдохну",
      "en": "Stay home and rest",
      "es": "Me quedaré en casa y descansaré",
      "pt": "Ficarei em casa a descansar",
      "de": "Ich bleibe zu Hause und ruhe mich aus",
      "fr": "Je resterai chez moi pour me reposer"
    },
    "b": {
      "ru": "Пойду куда-нибудь спонтанно",
      "en": "Go somewhere spontaneously",
      "es": "Iré a algún sitio espontáneamente",
      "pt": "Irei a algum lugar de forma espontânea",
      "de": "Ich gehe spontan irgendwohin",
      "fr": "J’irai quelque part spontanément"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? Ситуация: после тяжёлой недели.",
      "en": "You have two tasks today, but enough time for only one. Which do you choose? Situation: after a difficult week.",
      "es": "Tienes dos tareas hoy, pero solo tiempo para una. ¿Cuál eliges? Situación: después de una semana difícil.",
      "pt": "Tens duas tarefas hoje, mas tempo apenas para uma. Qual escolhes? Situação: depois de uma semana difícil.",
      "de": "Du hast heute zwei Aufgaben, aber nur Zeit für eine. Welche wählst du? Situation: nach einer anstrengenden Woche.",
      "fr": "Tu as deux tâches aujourd’hui, mais assez de temps pour une seule. Laquelle choisis-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Сделаю самое важное",
      "en": "Do the most important one",
      "es": "Haré lo más importante",
      "pt": "Farei o mais importante",
      "de": "Ich erledige das Wichtigste",
      "fr": "Je ferai le plus important"
    },
    "b": {
      "ru": "Сделаю то, что интереснее",
      "en": "Do the more interesting one",
      "es": "Haré lo más interesante",
      "pt": "Farei o mais interessante",
      "de": "Ich mache das Interessantere",
      "fr": "Je ferai le plus intéressant"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? Ситуация: срочную задачу.",
      "en": "You have two tasks today, but enough time for only one. Which do you choose? Situation: an urgent task.",
      "es": "Tienes dos tareas hoy, pero solo tiempo para una. ¿Cuál eliges? Situación: una tarea urgente.",
      "pt": "Tens duas tarefas hoje, mas tempo apenas para uma. Qual escolhes? Situação: uma tarefa urgente.",
      "de": "Du hast heute zwei Aufgaben, aber nur Zeit für eine. Welche wählst du? Situation: eine dringende Aufgabe.",
      "fr": "Tu as deux tâches aujourd’hui, mais assez de temps pour une seule. Laquelle choisis-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Сделаю самое важное",
      "en": "Do the most important one",
      "es": "Haré lo más importante",
      "pt": "Farei o mais importante",
      "de": "Ich erledige das Wichtigste",
      "fr": "Je ferai le plus important"
    },
    "b": {
      "ru": "Сделаю то, что интереснее",
      "en": "Do the more interesting one",
      "es": "Haré lo más interesante",
      "pt": "Farei o mais interessante",
      "de": "Ich mache das Interessantere",
      "fr": "Je ferai le plus intéressant"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? Ситуация: в метро.",
      "en": "You have two tasks today, but enough time for only one. Which do you choose? Situation: on the subway.",
      "es": "Tienes dos tareas hoy, pero solo tiempo para una. ¿Cuál eliges? Situación: en el metro.",
      "pt": "Tens duas tarefas hoje, mas tempo apenas para uma. Qual escolhes? Situação: no metro.",
      "de": "Du hast heute zwei Aufgaben, aber nur Zeit für eine. Welche wählst du? Situation: in der U-Bahn.",
      "fr": "Tu as deux tâches aujourd’hui, mais assez de temps pour une seule. Laquelle choisis-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Сделаю самое важное",
      "en": "Do the most important one",
      "es": "Haré lo más importante",
      "pt": "Farei o mais importante",
      "de": "Ich erledige das Wichtigste",
      "fr": "Je ferai le plus important"
    },
    "b": {
      "ru": "Сделаю то, что интереснее",
      "en": "Do the more interesting one",
      "es": "Haré lo más interesante",
      "pt": "Farei o mais interessante",
      "de": "Ich mache das Interessantere",
      "fr": "Je ferai le plus intéressant"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? Ситуация: важную новость друга.",
      "en": "You have two tasks today, but enough time for only one. Which do you choose? Situation: an important friend’s news.",
      "es": "Tienes dos tareas hoy, pero solo tiempo para una. ¿Cuál eliges? Situación: una noticia importante de un amigo.",
      "pt": "Tens duas tarefas hoje, mas tempo apenas para uma. Qual escolhes? Situação: uma notícia importante de um amigo.",
      "de": "Du hast heute zwei Aufgaben, aber nur Zeit für eine. Welche wählst du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Tu as deux tâches aujourd’hui, mais assez de temps pour une seule. Laquelle choisis-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Сделаю самое важное",
      "en": "Do the most important one",
      "es": "Haré lo más importante",
      "pt": "Farei o mais importante",
      "de": "Ich erledige das Wichtigste",
      "fr": "Je ferai le plus important"
    },
    "b": {
      "ru": "Сделаю то, что интереснее",
      "en": "Do the more interesting one",
      "es": "Haré lo más interesante",
      "pt": "Farei o mais interessante",
      "de": "Ich mache das Interessantere",
      "fr": "Je ferai le plus intéressant"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? Ситуация: первый день на новой работе.",
      "en": "You have two tasks today, but enough time for only one. Which do you choose? Situation: your first day at a new job.",
      "es": "Tienes dos tareas hoy, pero solo tiempo para una. ¿Cuál eliges? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Tens duas tarefas hoje, mas tempo apenas para uma. Qual escolhes? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Du hast heute zwei Aufgaben, aber nur Zeit für eine. Welche wählst du? Situation: dein erster Tag im neuen Job.",
      "fr": "Tu as deux tâches aujourd’hui, mais assez de temps pour une seule. Laquelle choisis-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Сделаю самое важное",
      "en": "Do the most important one",
      "es": "Haré lo más importante",
      "pt": "Farei o mais importante",
      "de": "Ich erledige das Wichtigste",
      "fr": "Je ferai le plus important"
    },
    "b": {
      "ru": "Сделаю то, что интереснее",
      "en": "Do the more interesting one",
      "es": "Haré lo más interesante",
      "pt": "Farei o mais interessante",
      "de": "Ich mache das Interessantere",
      "fr": "Je ferai le plus intéressant"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? Ситуация: после тяжёлой недели.",
      "en": "You find a wallet with money but no identification. What do you do?",
      "es": "Encuentras una cartera con dinero pero sin identificación. ¿Qué haces?",
      "pt": "Encontras uma carteira com dinheiro, mas sem identificação. O que fazes?",
      "de": "Du findest ein Portemonnaie mit Geld, aber ohne Ausweis. Was tust du?",
      "fr": "Tu trouves un portefeuille avec de l’argent, mais sans pièce d’identité. Que fais-tu?"
    },
    "a": {
      "ru": "Попытаюсь найти владельца",
      "en": "I will try to find the owner",
      "es": "Intentaré encontrar al dueño",
      "pt": "Tentarei encontrar o dono",
      "de": "Ich versuche, den Besitzer zu finden",
      "fr": "J’essaierai de retrouver le propriétaire"
    },
    "b": {
      "ru": "Передам находку в официальное место",
      "en": "I will hand it to an official place",
      "es": "Entregaré el objeto a un lugar oficial",
      "pt": "Entregarei o objeto num local oficial",
      "de": "Ich gebe den Fund an eine offizielle Stelle",
      "fr": "Je remettrai l’objet à un service officiel"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? Ситуация: перед важной встречей.",
      "en": "You find a wallet with money but no identification. What do you do?",
      "es": "Encuentras una cartera con dinero pero sin identificación. ¿Qué haces?",
      "pt": "Encontras uma carteira com dinheiro, mas sem identificação. O que fazes?",
      "de": "Du findest ein Portemonnaie mit Geld, aber ohne Ausweis. Was tust du?",
      "fr": "Tu trouves un portefeuille avec de l’argent, mais sans pièce d’identité. Que fais-tu?"
    },
    "a": {
      "ru": "Попытаюсь найти владельца",
      "en": "I will try to find the owner",
      "es": "Intentaré encontrar al dueño",
      "pt": "Tentarei encontrar o dono",
      "de": "Ich versuche, den Besitzer zu finden",
      "fr": "J’essaierai de retrouver le propriétaire"
    },
    "b": {
      "ru": "Передам находку в официальное место",
      "en": "I will hand it to an official place",
      "es": "Entregaré el objeto a un lugar oficial",
      "pt": "Entregarei o objeto num local oficial",
      "de": "Ich gebe den Fund an eine offizielle Stelle",
      "fr": "Je remettrai l’objet à un service officiel"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? Ситуация: когда ты устал.",
      "en": "You find a wallet with money but no identification. What do you do?",
      "es": "Encuentras una cartera con dinero pero sin identificación. ¿Qué haces?",
      "pt": "Encontras uma carteira com dinheiro, mas sem identificação. O que fazes?",
      "de": "Du findest ein Portemonnaie mit Geld, aber ohne Ausweis. Was tust du?",
      "fr": "Tu trouves un portefeuille avec de l’argent, mais sans pièce d’identité. Que fais-tu?"
    },
    "a": {
      "ru": "Попытаюсь найти владельца",
      "en": "I will try to find the owner",
      "es": "Intentaré encontrar al dueño",
      "pt": "Tentarei encontrar o dono",
      "de": "Ich versuche, den Besitzer zu finden",
      "fr": "J’essaierai de retrouver le propriétaire"
    },
    "b": {
      "ru": "Передам находку в официальное место",
      "en": "I will hand it to an official place",
      "es": "Entregaré el objeto a un lugar oficial",
      "pt": "Entregarei o objeto num local oficial",
      "de": "Ich gebe den Fund an eine offizielle Stelle",
      "fr": "Je remettrai l’objet à un service officiel"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? Ситуация: в незнакомой компании.",
      "en": "You find a wallet with money but no identification. What do you do?",
      "es": "Encuentras una cartera con dinero pero sin identificación. ¿Qué haces?",
      "pt": "Encontras uma carteira com dinheiro, mas sem identificação. O que fazes?",
      "de": "Du findest ein Portemonnaie mit Geld, aber ohne Ausweis. Was tust du?",
      "fr": "Tu trouves un portefeuille avec de l’argent, mais sans pièce d’identité. Que fais-tu?"
    },
    "a": {
      "ru": "Попытаюсь найти владельца",
      "en": "I will try to find the owner",
      "es": "Intentaré encontrar al dueño",
      "pt": "Tentarei encontrar o dono",
      "de": "Ich versuche, den Besitzer zu finden",
      "fr": "J’essaierai de retrouver le propriétaire"
    },
    "b": {
      "ru": "Передам находку в официальное место",
      "en": "I will hand it to an official place",
      "es": "Entregaré el objeto a un lugar oficial",
      "pt": "Entregarei o objeto num local oficial",
      "de": "Ich gebe den Fund an eine offizielle Stelle",
      "fr": "Je remettrai l’objet à un service officiel"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? Ситуация: когда планы меняются в последний момент.",
      "en": "You find a wallet with money but no identification. What do you do?",
      "es": "Encuentras una cartera con dinero pero sin identificación. ¿Qué haces?",
      "pt": "Encontras uma carteira com dinheiro, mas sem identificação. O que fazes?",
      "de": "Du findest ein Portemonnaie mit Geld, aber ohne Ausweis. Was tust du?",
      "fr": "Tu trouves un portefeuille avec de l’argent, mais sans pièce d’identité. Que fais-tu?"
    },
    "a": {
      "ru": "Попытаюсь найти владельца",
      "en": "I will try to find the owner",
      "es": "Intentaré encontrar al dueño",
      "pt": "Tentarei encontrar o dono",
      "de": "Ich versuche, den Besitzer zu finden",
      "fr": "J’essaierai de retrouver le propriétaire"
    },
    "b": {
      "ru": "Передам находку в официальное место",
      "en": "I will hand it to an official place",
      "es": "Entregaré el objeto a un lugar oficial",
      "pt": "Entregarei o objeto num local oficial",
      "de": "Ich gebe den Fund an eine offizielle Stelle",
      "fr": "Je remettrai l’objet à un service officiel"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? Ситуация: после тяжёлой недели.",
      "en": "A friend asks you not to share a personal problem. What matters more to you? Situation: after a difficult week.",
      "es": "Un amigo te pide que no cuentes su problema personal. ¿Qué valoras más? Situación: después de una semana difícil.",
      "pt": "Um amigo pede para não contares um problema pessoal. O que valorizas mais? Situação: depois de uma semana difícil.",
      "de": "Ein Freund bittet dich, ein persönliches Problem nicht zu erzählen. Was ist dir wichtiger? Situation: nach einer anstrengenden Woche.",
      "fr": "Un ami te demande de ne pas parler de son problème personnel. Qu’est-ce qui compte le plus? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Сохранить доверие",
      "en": "Protect the trust",
      "es": "Mantener la confianza",
      "pt": "Preservar a confiança",
      "de": "Das Vertrauen bewahren",
      "fr": "Préserver la confiance"
    },
    "b": {
      "ru": "Помочь, даже если придётся рассказать",
      "en": "Help, even if I must tell someone",
      "es": "Aydar, aunque tenga que contarlo",
      "pt": "Ajudar, mesmo que tenha de contar",
      "de": "Helfen, auch wenn ich es erzählen muss",
      "fr": "Aider, même si je dois en parler"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? Ситуация: срочную задачу.",
      "en": "A friend asks you not to share a personal problem. What matters more to you? Situation: an urgent task.",
      "es": "Un amigo te pide que no cuentes su problema personal. ¿Qué valoras más? Situación: una tarea urgente.",
      "pt": "Um amigo pede para não contares um problema pessoal. O que valorizas mais? Situação: uma tarefa urgente.",
      "de": "Ein Freund bittet dich, ein persönliches Problem nicht zu erzählen. Was ist dir wichtiger? Situation: eine dringende Aufgabe.",
      "fr": "Un ami te demande de ne pas parler de son problème personnel. Qu’est-ce qui compte le plus? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Сохранить доверие",
      "en": "Protect the trust",
      "es": "Mantener la confianza",
      "pt": "Preservar a confiança",
      "de": "Das Vertrauen bewahren",
      "fr": "Préserver la confiance"
    },
    "b": {
      "ru": "Помочь, даже если придётся рассказать",
      "en": "Help, even if I must tell someone",
      "es": "Aydar, aunque tenga que contarlo",
      "pt": "Ajudar, mesmo que tenha de contar",
      "de": "Helfen, auch wenn ich es erzählen muss",
      "fr": "Aider, même si je dois en parler"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? Ситуация: в метро.",
      "en": "A friend asks you not to share a personal problem. What matters more to you? Situation: on the subway.",
      "es": "Un amigo te pide que no cuentes su problema personal. ¿Qué valoras más? Situación: en el metro.",
      "pt": "Um amigo pede para não contares um problema pessoal. O que valorizas mais? Situação: no metro.",
      "de": "Ein Freund bittet dich, ein persönliches Problem nicht zu erzählen. Was ist dir wichtiger? Situation: in der U-Bahn.",
      "fr": "Un ami te demande de ne pas parler de son problème personnel. Qu’est-ce qui compte le plus? Situation : dans le métro."
    },
    "a": {
      "ru": "Сохранить доверие",
      "en": "Protect the trust",
      "es": "Mantener la confianza",
      "pt": "Preservar a confiança",
      "de": "Das Vertrauen bewahren",
      "fr": "Préserver la confiance"
    },
    "b": {
      "ru": "Помочь, даже если придётся рассказать",
      "en": "Help, even if I must tell someone",
      "es": "Aydar, aunque tenga que contarlo",
      "pt": "Ajudar, mesmo que tenha de contar",
      "de": "Helfen, auch wenn ich es erzählen muss",
      "fr": "Aider, même si je dois en parler"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? Ситуация: важную новость друга.",
      "en": "A friend asks you not to share a personal problem. What matters more to you? Situation: an important friend’s news.",
      "es": "Un amigo te pide que no cuentes su problema personal. ¿Qué valoras más? Situación: una noticia importante de un amigo.",
      "pt": "Um amigo pede para não contares um problema pessoal. O que valorizas mais? Situação: uma notícia importante de um amigo.",
      "de": "Ein Freund bittet dich, ein persönliches Problem nicht zu erzählen. Was ist dir wichtiger? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Un ami te demande de ne pas parler de son problème personnel. Qu’est-ce qui compte le plus? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Сохранить доверие",
      "en": "Protect the trust",
      "es": "Mantener la confianza",
      "pt": "Preservar a confiança",
      "de": "Das Vertrauen bewahren",
      "fr": "Préserver la confiance"
    },
    "b": {
      "ru": "Помочь, даже если придётся рассказать",
      "en": "Help, even if I must tell someone",
      "es": "Aydar, aunque tenga que contarlo",
      "pt": "Ajudar, mesmo que tenha de contar",
      "de": "Helfen, auch wenn ich es erzählen muss",
      "fr": "Aider, même si je dois en parler"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? Ситуация: первый день на новой работе.",
      "en": "A friend asks you not to share a personal problem. What matters more to you? Situation: your first day at a new job.",
      "es": "Un amigo te pide que no cuentes su problema personal. ¿Qué valoras más? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Um amigo pede para não contares um problema pessoal. O que valorizas mais? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Ein Freund bittet dich, ein persönliches Problem nicht zu erzählen. Was ist dir wichtiger? Situation: dein erster Tag im neuen Job.",
      "fr": "Un ami te demande de ne pas parler de son problème personnel. Qu’est-ce qui compte le plus? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Сохранить доверие",
      "en": "Protect the trust",
      "es": "Mantener la confianza",
      "pt": "Preservar a confiança",
      "de": "Das Vertrauen bewahren",
      "fr": "Préserver la confiance"
    },
    "b": {
      "ru": "Помочь, даже если придётся рассказать",
      "en": "Help, even if I must tell someone",
      "es": "Aydar, aunque tenga que contarlo",
      "pt": "Ajudar, mesmo que tenha de contar",
      "de": "Helfen, auch wenn ich es erzählen muss",
      "fr": "Aider, même si je dois en parler"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? Ситуация: после тяжёлой недели.",
      "en": "You are offered a well-paid job you know little about. What is your first step?",
      "es": "Te ofrecen un trabajo bien pagado que apenas conoces. ¿Cuál es tu primer paso?",
      "pt": "Oferecem-te um trabalho bem pago que conheces pouco. Qual é o teu primeiro passo?",
      "de": "Dir wird ein gut bezahlter Job angeboten, über den du wenig weißt. Was tust du zuerst?",
      "fr": "On te propose un travail bien payé que tu connais mal. Quelle est ta première étape?"
    },
    "a": {
      "ru": "Сначала всё изучу",
      "en": "Research everything first",
      "es": "Investigaré primero",
      "pt": "Vou estudar tudo primeiro",
      "de": "Ich informiere mich zuerst",
      "fr": "Je vais d’abord tout étudier"
    },
    "b": {
      "ru": "Соглашусь и разберусь по ходу",
      "en": "Accept and learn along the way",
      "es": "Aceptar y aprender sobre la marcha",
      "pt": "Aceitar e aprender pelo caminho",
      "de": "Ich sage zu und lerne unterwegs",
      "fr": "J’accepte et j’apprends en chemin"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? Ситуация: перед важной встречей.",
      "en": "You are offered a well-paid job you know little about. What is your first step?",
      "es": "Te ofrecen un trabajo bien pagado que apenas conoces. ¿Cuál es tu primer paso?",
      "pt": "Oferecem-te um trabalho bem pago que conheces pouco. Qual é o teu primeiro passo?",
      "de": "Dir wird ein gut bezahlter Job angeboten, über den du wenig weißt. Was tust du zuerst?",
      "fr": "On te propose un travail bien payé que tu connais mal. Quelle est ta première étape?"
    },
    "a": {
      "ru": "Сначала всё изучу",
      "en": "Research everything first",
      "es": "Investigaré primero",
      "pt": "Vou estudar tudo primeiro",
      "de": "Ich informiere mich zuerst",
      "fr": "Je vais d’abord tout étudier"
    },
    "b": {
      "ru": "Соглашусь и разберусь по ходу",
      "en": "Accept and learn along the way",
      "es": "Aceptar y aprender sobre la marcha",
      "pt": "Aceitar e aprender pelo caminho",
      "de": "Ich sage zu und lerne unterwegs",
      "fr": "J’accepte et j’apprends en chemin"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? Ситуация: когда ты устал.",
      "en": "You are offered a well-paid job you know little about. What is your first step?",
      "es": "Te ofrecen un trabajo bien pagado que apenas conoces. ¿Cuál es tu primer paso?",
      "pt": "Oferecem-te um trabalho bem pago que conheces pouco. Qual é o teu primeiro passo?",
      "de": "Dir wird ein gut bezahlter Job angeboten, über den du wenig weißt. Was tust du zuerst?",
      "fr": "On te propose un travail bien payé que tu connais mal. Quelle est ta première étape?"
    },
    "a": {
      "ru": "Сначала всё изучу",
      "en": "Research everything first",
      "es": "Investigaré primero",
      "pt": "Vou estudar tudo primeiro",
      "de": "Ich informiere mich zuerst",
      "fr": "Je vais d’abord tout étudier"
    },
    "b": {
      "ru": "Соглашусь и разберусь по ходу",
      "en": "Accept and learn along the way",
      "es": "Aceptar y aprender sobre la marcha",
      "pt": "Aceitar e aprender pelo caminho",
      "de": "Ich sage zu und lerne unterwegs",
      "fr": "J’accepte et j’apprends en chemin"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? Ситуация: в незнакомой компании.",
      "en": "You are offered a well-paid job you know little about. What is your first step?",
      "es": "Te ofrecen un trabajo bien pagado que apenas conoces. ¿Cuál es tu primer paso?",
      "pt": "Oferecem-te um trabalho bem pago que conheces pouco. Qual é o teu primeiro passo?",
      "de": "Dir wird ein gut bezahlter Job angeboten, über den du wenig weißt. Was tust du zuerst?",
      "fr": "On te propose un travail bien payé que tu connais mal. Quelle est ta première étape?"
    },
    "a": {
      "ru": "Сначала всё изучу",
      "en": "Research everything first",
      "es": "Investigaré primero",
      "pt": "Vou estudar tudo primeiro",
      "de": "Ich informiere mich zuerst",
      "fr": "Je vais d’abord tout étudier"
    },
    "b": {
      "ru": "Соглашусь и разберусь по ходу",
      "en": "Accept and learn along the way",
      "es": "Aceptar y aprender sobre la marcha",
      "pt": "Aceitar e aprender pelo caminho",
      "de": "Ich sage zu und lerne unterwegs",
      "fr": "J’accepte et j’apprends en chemin"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? Ситуация: когда планы меняются в последний момент.",
      "en": "You are offered a well-paid job you know little about. What is your first step?",
      "es": "Te ofrecen un trabajo bien pagado que apenas conoces. ¿Cuál es tu primer paso?",
      "pt": "Oferecem-te um trabalho bem pago que conheces pouco. Qual é o teu primeiro passo?",
      "de": "Dir wird ein gut bezahlter Job angeboten, über den du wenig weißt. Was tust du zuerst?",
      "fr": "On te propose un travail bien payé que tu connais mal. Quelle est ta première étape?"
    },
    "a": {
      "ru": "Сначала всё изучу",
      "en": "Research everything first",
      "es": "Investigaré primero",
      "pt": "Vou estudar tudo primeiro",
      "de": "Ich informiere mich zuerst",
      "fr": "Je vais d’abord tout étudier"
    },
    "b": {
      "ru": "Соглашусь и разберусь по ходу",
      "en": "Accept and learn along the way",
      "es": "Aceptar y aprender sobre la marcha",
      "pt": "Aceitar e aprender pelo caminho",
      "de": "Ich sage zu und lerne unterwegs",
      "fr": "J’accepte et j’apprends en chemin"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? Ситуация: после тяжёлой недели.",
      "en": "You unexpectedly receive a small amount of money. What would you spend it on? Situation: after a difficult week.",
      "es": "Recibes inesperadamente una pequeña cantidad de dinero. ¿En qué la gastarías? Situación: después de una semana difícil.",
      "pt": "Recebes inesperadamente uma pequena quantia de dinheiro. Em que a gastarias? Situação: depois de uma semana difícil.",
      "de": "Du bekommst unerwartet etwas Geld zurück. Wofür würdest du es ausgeben? Situation: nach einer anstrengenden Woche.",
      "fr": "Tu reçois une petite somme de façon inattendue. Dans quoi la dépenserais-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Отложу",
      "en": "Save it",
      "es": "Lo ahorraré",
      "pt": "Vou guardar o dinheiro",
      "de": "Ich spare es",
      "fr": "Je l’épargne"
    },
    "b": {
      "ru": "Порадую себя",
      "en": "Treat myself",
      "es": "Me daré un capricho",
      "pt": "Vou oferecer-me algo",
      "de": "Ich gönne mir etwas",
      "fr": "Je me fais plaisir"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? Ситуация: срочную задачу.",
      "en": "You unexpectedly receive a small amount of money. What would you spend it on? Situation: an urgent task.",
      "es": "Recibes inesperadamente una pequeña cantidad de dinero. ¿En qué la gastarías? Situación: una tarea urgente.",
      "pt": "Recebes inesperadamente uma pequena quantia de dinheiro. Em que a gastarias? Situação: uma tarefa urgente.",
      "de": "Du bekommst unerwartet etwas Geld zurück. Wofür würdest du es ausgeben? Situation: eine dringende Aufgabe.",
      "fr": "Tu reçois une petite somme de façon inattendue. Dans quoi la dépenserais-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Отложу",
      "en": "Save it",
      "es": "Lo ahorraré",
      "pt": "Vou guardar o dinheiro",
      "de": "Ich spare es",
      "fr": "Je l’épargne"
    },
    "b": {
      "ru": "Порадую себя",
      "en": "Treat myself",
      "es": "Me daré un capricho",
      "pt": "Vou oferecer-me algo",
      "de": "Ich gönne mir etwas",
      "fr": "Je me fais plaisir"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? Ситуация: в метро.",
      "en": "You unexpectedly receive a small amount of money. What would you spend it on? Situation: on the subway.",
      "es": "Recibes inesperadamente una pequeña cantidad de dinero. ¿En qué la gastarías? Situación: en el metro.",
      "pt": "Recebes inesperadamente uma pequena quantia de dinheiro. Em que a gastarias? Situação: no metro.",
      "de": "Du bekommst unerwartet etwas Geld zurück. Wofür würdest du es ausgeben? Situation: in der U-Bahn.",
      "fr": "Tu reçois une petite somme de façon inattendue. Dans quoi la dépenserais-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Отложу",
      "en": "Save it",
      "es": "Lo ahorraré",
      "pt": "Vou guardar o dinheiro",
      "de": "Ich spare es",
      "fr": "Je l’épargne"
    },
    "b": {
      "ru": "Порадую себя",
      "en": "Treat myself",
      "es": "Me daré un capricho",
      "pt": "Vou oferecer-me algo",
      "de": "Ich gönne mir etwas",
      "fr": "Je me fais plaisir"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? Ситуация: важную новость друга.",
      "en": "You unexpectedly receive a small amount of money. What would you spend it on? Situation: an important friend’s news.",
      "es": "Recibes inesperadamente una pequeña cantidad de dinero. ¿En qué la gastarías? Situación: una noticia importante de un amigo.",
      "pt": "Recebes inesperadamente uma pequena quantia de dinheiro. Em que a gastarias? Situação: uma notícia importante de um amigo.",
      "de": "Du bekommst unerwartet etwas Geld zurück. Wofür würdest du es ausgeben? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Tu reçois une petite somme de façon inattendue. Dans quoi la dépenserais-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Отложу",
      "en": "Save it",
      "es": "Lo ahorraré",
      "pt": "Vou guardar o dinheiro",
      "de": "Ich spare es",
      "fr": "Je l’épargne"
    },
    "b": {
      "ru": "Порадую себя",
      "en": "Treat myself",
      "es": "Me daré un capricho",
      "pt": "Vou oferecer-me algo",
      "de": "Ich gönne mir etwas",
      "fr": "Je me fais plaisir"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? Ситуация: первый день на новой работе.",
      "en": "You unexpectedly receive a small amount of money. What would you spend it on? Situation: your first day at a new job.",
      "es": "Recibes inesperadamente una pequeña cantidad de dinero. ¿En qué la gastarías? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Recebes inesperadamente uma pequena quantia de dinheiro. Em que a gastarias? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Du bekommst unerwartet etwas Geld zurück. Wofür würdest du es ausgeben? Situation: dein erster Tag im neuen Job.",
      "fr": "Tu reçois une petite somme de façon inattendue. Dans quoi la dépenserais-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Отложу",
      "en": "Save it",
      "es": "Lo ahorraré",
      "pt": "Vou guardar o dinheiro",
      "de": "Ich spare es",
      "fr": "Je l’épargne"
    },
    "b": {
      "ru": "Порадую себя",
      "en": "Treat myself",
      "es": "Me daré un capricho",
      "pt": "Vou oferecer-me algo",
      "de": "Ich gönne mir etwas",
      "fr": "Je me fais plaisir"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? Ситуация: после тяжёлой недели.",
      "en": "Your travel plans fall apart because of the weather. What do you do?",
      "es": "Tus planes de viaje cambian por el clima. ¿Qué haces?",
      "pt": "Os teus planos de viagem mudam por causa do tempo. O que fazes?",
      "de": "Deine Reisepläne scheitern am Wetter. Was tust du?",
      "fr": "Tes plans de voyage changent à cause de la météo. Que fais-tu?"
    },
    "a": {
      "ru": "Составлю новый план",
      "en": "Make a new plan",
      "es": "Haré un nuevo plan",
      "pt": "Farei um novo plano",
      "de": "Ich mache einen neuen Plan",
      "fr": "Je fais un nouveau plan"
    },
    "b": {
      "ru": "Просто приму ситуацию",
      "en": "Accept the situation",
      "es": "Aceptar la situación",
      "pt": "Aceitar a situação",
      "de": "Ich akzeptiere die Situation",
      "fr": "J’accepte la situation"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? Ситуация: перед важной встречей.",
      "en": "Your travel plans fall apart because of the weather. What do you do?",
      "es": "Tus planes de viaje cambian por el clima. ¿Qué haces?",
      "pt": "Os teus planos de viagem mudam por causa do tempo. O que fazes?",
      "de": "Deine Reisepläne scheitern am Wetter. Was tust du?",
      "fr": "Tes plans de voyage changent à cause de la météo. Que fais-tu?"
    },
    "a": {
      "ru": "Составлю новый план",
      "en": "Make a new plan",
      "es": "Haré un nuevo plan",
      "pt": "Farei um novo plano",
      "de": "Ich mache einen neuen Plan",
      "fr": "Je fais un nouveau plan"
    },
    "b": {
      "ru": "Просто приму ситуацию",
      "en": "Accept the situation",
      "es": "Aceptar la situación",
      "pt": "Aceitar a situação",
      "de": "Ich akzeptiere die Situation",
      "fr": "J’accepte la situation"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? Ситуация: когда ты устал.",
      "en": "Your travel plans fall apart because of the weather. What do you do?",
      "es": "Tus planes de viaje cambian por el clima. ¿Qué haces?",
      "pt": "Os teus planos de viagem mudam por causa do tempo. O que fazes?",
      "de": "Deine Reisepläne scheitern am Wetter. Was tust du?",
      "fr": "Tes plans de voyage changent à cause de la météo. Que fais-tu?"
    },
    "a": {
      "ru": "Составлю новый план",
      "en": "Make a new plan",
      "es": "Haré un nuevo plan",
      "pt": "Farei um novo plano",
      "de": "Ich mache einen neuen Plan",
      "fr": "Je fais un nouveau plan"
    },
    "b": {
      "ru": "Просто приму ситуацию",
      "en": "Accept the situation",
      "es": "Aceptar la situación",
      "pt": "Aceitar a situação",
      "de": "Ich akzeptiere die Situation",
      "fr": "J’accepte la situation"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? Ситуация: в незнакомой компании.",
      "en": "Your travel plans fall apart because of the weather. What do you do?",
      "es": "Tus planes de viaje cambian por el clima. ¿Qué haces?",
      "pt": "Os teus planos de viagem mudam por causa do tempo. O que fazes?",
      "de": "Deine Reisepläne scheitern am Wetter. Was tust du?",
      "fr": "Tes plans de voyage changent à cause de la météo. Que fais-tu?"
    },
    "a": {
      "ru": "Составлю новый план",
      "en": "Make a new plan",
      "es": "Haré un nuevo plan",
      "pt": "Farei um novo plano",
      "de": "Ich mache einen neuen Plan",
      "fr": "Je fais un nouveau plan"
    },
    "b": {
      "ru": "Просто приму ситуацию",
      "en": "Accept the situation",
      "es": "Aceptar la situación",
      "pt": "Aceitar a situação",
      "de": "Ich akzeptiere die Situation",
      "fr": "J’accepte la situation"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? Ситуация: когда планы меняются в последний момент.",
      "en": "Your travel plans fall apart because of the weather. What do you do?",
      "es": "Tus planes de viaje cambian por el clima. ¿Qué haces?",
      "pt": "Os teus planos de viagem mudam por causa do tempo. O que fazes?",
      "de": "Deine Reisepläne scheitern am Wetter. Was tust du?",
      "fr": "Tes plans de voyage changent à cause de la météo. Que fais-tu?"
    },
    "a": {
      "ru": "Составлю новый план",
      "en": "Make a new plan",
      "es": "Haré un nuevo plan",
      "pt": "Farei um novo plano",
      "de": "Ich mache einen neuen Plan",
      "fr": "Je fais un nouveau plan"
    },
    "b": {
      "ru": "Просто приму ситуацию",
      "en": "Accept the situation",
      "es": "Aceptar la situación",
      "pt": "Aceitar a situação",
      "de": "Ich akzeptiere die Situation",
      "fr": "J’accepte la situation"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? Ситуация: после тяжёлой недели.",
      "en": "An argument starts in a group and both sides have strong points. What do you do? Situation: after a difficult week.",
      "es": "Empieza una discusión y ambos lados tienen buenos argumentos. ¿Qué haces? Situación: después de una semana difícil.",
      "pt": "Começa uma discussão e ambos os lados têm bons argumentos. O que fazes? Situação: depois de uma semana difícil.",
      "de": "In einer Gruppe entsteht ein Streit, und beide Seiten haben gute Argumente. Was tust du? Situation: nach einer anstrengenden Woche.",
      "fr": "Une dispute commence et les deux côtés ont de bons arguments. Que fais-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Попытаюсь найти компромисс",
      "en": "Find a compromise",
      "es": "Buscaré un compromiso",
      "pt": "Tentarei encontrar um compromisso",
      "de": "Ich suche einen Kompromiss",
      "fr": "Je chercherai un compromis"
    },
    "b": {
      "ru": "Выберу сторону, которую считаю правильной",
      "en": "Choose the side I believe is right",
      "es": "Elegiré el lado que considero correcto",
      "pt": "Escolherei o lado que considero certo",
      "de": "Ich wähle die Seite, die ich für richtig halte",
      "fr": "Je choisis le côté que je pense juste"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? Ситуация: срочную задачу.",
      "en": "An argument starts in a group and both sides have strong points. What do you do? Situation: an urgent task.",
      "es": "Empieza una discusión y ambos lados tienen buenos argumentos. ¿Qué haces? Situación: una tarea urgente.",
      "pt": "Começa uma discussão e ambos os lados têm bons argumentos. O que fazes? Situação: uma tarefa urgente.",
      "de": "In einer Gruppe entsteht ein Streit, und beide Seiten haben gute Argumente. Was tust du? Situation: eine dringende Aufgabe.",
      "fr": "Une dispute commence et les deux côtés ont de bons arguments. Que fais-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Попытаюсь найти компромисс",
      "en": "Find a compromise",
      "es": "Buscaré un compromiso",
      "pt": "Tentarei encontrar um compromisso",
      "de": "Ich suche einen Kompromiss",
      "fr": "Je chercherai un compromis"
    },
    "b": {
      "ru": "Выберу сторону, которую считаю правильной",
      "en": "Choose the side I believe is right",
      "es": "Elegiré el lado que considero correcto",
      "pt": "Escolherei o lado que considero certo",
      "de": "Ich wähle die Seite, die ich für richtig halte",
      "fr": "Je choisis le côté que je pense juste"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? Ситуация: в метро.",
      "en": "An argument starts in a group and both sides have strong points. What do you do? Situation: on the subway.",
      "es": "Empieza una discusión y ambos lados tienen buenos argumentos. ¿Qué haces? Situación: en el metro.",
      "pt": "Começa uma discussão e ambos os lados têm bons argumentos. O que fazes? Situação: no metro.",
      "de": "In einer Gruppe entsteht ein Streit, und beide Seiten haben gute Argumente. Was tust du? Situation: in der U-Bahn.",
      "fr": "Une dispute commence et les deux côtés ont de bons arguments. Que fais-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Попытаюсь найти компромисс",
      "en": "Find a compromise",
      "es": "Buscaré un compromiso",
      "pt": "Tentarei encontrar um compromisso",
      "de": "Ich suche einen Kompromiss",
      "fr": "Je chercherai un compromis"
    },
    "b": {
      "ru": "Выберу сторону, которую считаю правильной",
      "en": "Choose the side I believe is right",
      "es": "Elegiré el lado que considero correcto",
      "pt": "Escolherei o lado que considero certo",
      "de": "Ich wähle die Seite, die ich für richtig halte",
      "fr": "Je choisis le côté que je pense juste"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? Ситуация: важную новость друга.",
      "en": "An argument starts in a group and both sides have strong points. What do you do? Situation: an important friend’s news.",
      "es": "Empieza una discusión y ambos lados tienen buenos argumentos. ¿Qué haces? Situación: una noticia importante de un amigo.",
      "pt": "Começa uma discussão e ambos os lados têm bons argumentos. O que fazes? Situação: uma notícia importante de um amigo.",
      "de": "In einer Gruppe entsteht ein Streit, und beide Seiten haben gute Argumente. Was tust du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Une dispute commence et les deux côtés ont de bons arguments. Que fais-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Попытаюсь найти компромисс",
      "en": "Find a compromise",
      "es": "Buscaré un compromiso",
      "pt": "Tentarei encontrar um compromisso",
      "de": "Ich suche einen Kompromiss",
      "fr": "Je chercherai un compromis"
    },
    "b": {
      "ru": "Выберу сторону, которую считаю правильной",
      "en": "Choose the side I believe is right",
      "es": "Elegiré el lado que considero correcto",
      "pt": "Escolherei o lado que considero certo",
      "de": "Ich wähle die Seite, die ich für richtig halte",
      "fr": "Je choisis le côté que je pense juste"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? Ситуация: первый день на новой работе.",
      "en": "An argument starts in a group and both sides have strong points. What do you do? Situation: your first day at a new job.",
      "es": "Empieza una discusión y ambos lados tienen buenos argumentos. ¿Qué haces? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Começa uma discussão e ambos os lados têm bons argumentos. O que fazes? Situação: o teu primeiro dia num novo trabalho.",
      "de": "In einer Gruppe entsteht ein Streit, und beide Seiten haben gute Argumente. Was tust du? Situation: dein erster Tag im neuen Job.",
      "fr": "Une dispute commence et les deux côtés ont de bons arguments. Que fais-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Попытаюсь найти компромисс",
      "en": "Find a compromise",
      "es": "Buscaré un compromiso",
      "pt": "Tentarei encontrar um compromisso",
      "de": "Ich suche einen Kompromiss",
      "fr": "Je chercherai un compromis"
    },
    "b": {
      "ru": "Выберу сторону, которую считаю правильной",
      "en": "Choose the side I believe is right",
      "es": "Elegiré el lado que considero correcto",
      "pt": "Escolherei o lado que considero certo",
      "de": "Ich wähle die Seite, die ich für richtig halte",
      "fr": "Je choisis le côté que je pense juste"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? Ситуация: после тяжёлой недели.",
      "en": "You want to post something important but hesitate. What is most likely to stop you?",
      "es": "Quieres publicar algo importante pero dudas. ¿Qué te frenaría?",
      "pt": "Queres publicar algo importante, mas hesitas. O que te travaria?",
      "de": "Du willst etwas Wichtiges posten, zögerst aber. Was würde dich eher stoppen?",
      "fr": "Tu veux publier quelque chose d’important mais tu hésites. Qu’est-ce qui te freinerait?"
    },
    "a": {
      "ru": "Страх реакции людей",
      "en": "Fear of people’s reaction",
      "es": "Miedo a la reacción de la gente",
      "pt": "Medo da reação das pessoas",
      "de": "Angst vor der Reaktion anderer",
      "fr": "La peur de la réaction des autres"
    },
    "b": {
      "ru": "Желание всё ещё доработать",
      "en": "Wanting to improve it more",
      "es": "Querer perfeccionarlo más",
      "pt": "Querer aperfeiçoá-lo mais",
      "de": "Der Wunsch, es weiter zu verbessern",
      "fr": "L’envie de le perfectionner encore"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? Ситуация: перед важной встречей.",
      "en": "You want to post something important but hesitate. What is most likely to stop you?",
      "es": "Quieres publicar algo importante pero dudas. ¿Qué te frenaría?",
      "pt": "Queres publicar algo importante, mas hesitas. O que te travaria?",
      "de": "Du willst etwas Wichtiges posten, zögerst aber. Was würde dich eher stoppen?",
      "fr": "Tu veux publier quelque chose d’important mais tu hésites. Qu’est-ce qui te freinerait?"
    },
    "a": {
      "ru": "Страх реакции людей",
      "en": "Fear of people’s reaction",
      "es": "Miedo a la reacción de la gente",
      "pt": "Medo da reação das pessoas",
      "de": "Angst vor der Reaktion anderer",
      "fr": "La peur de la réaction des autres"
    },
    "b": {
      "ru": "Желание всё ещё доработать",
      "en": "Wanting to improve it more",
      "es": "Querer perfeccionarlo más",
      "pt": "Querer aperfeiçoá-lo mais",
      "de": "Der Wunsch, es weiter zu verbessern",
      "fr": "L’envie de le perfectionner encore"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? Ситуация: когда ты устал.",
      "en": "You want to post something important but hesitate. What is most likely to stop you?",
      "es": "Quieres publicar algo importante pero dudas. ¿Qué te frenaría?",
      "pt": "Queres publicar algo importante, mas hesitas. O que te travaria?",
      "de": "Du willst etwas Wichtiges posten, zögerst aber. Was würde dich eher stoppen?",
      "fr": "Tu veux publier quelque chose d’important mais tu hésites. Qu’est-ce qui te freinerait?"
    },
    "a": {
      "ru": "Страх реакции людей",
      "en": "Fear of people’s reaction",
      "es": "Miedo a la reacción de la gente",
      "pt": "Medo da reação das pessoas",
      "de": "Angst vor der Reaktion anderer",
      "fr": "La peur de la réaction des autres"
    },
    "b": {
      "ru": "Желание всё ещё доработать",
      "en": "Wanting to improve it more",
      "es": "Querer perfeccionarlo más",
      "pt": "Querer aperfeiçoá-lo mais",
      "de": "Der Wunsch, es weiter zu verbessern",
      "fr": "L’envie de le perfectionner encore"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? Ситуация: в незнакомой компании.",
      "en": "You want to post something important but hesitate. What is most likely to stop you?",
      "es": "Quieres publicar algo importante pero dudas. ¿Qué te frenaría?",
      "pt": "Queres publicar algo importante, mas hesitas. O que te travaria?",
      "de": "Du willst etwas Wichtiges posten, zögerst aber. Was würde dich eher stoppen?",
      "fr": "Tu veux publier quelque chose d’important mais tu hésites. Qu’est-ce qui te freinerait?"
    },
    "a": {
      "ru": "Страх реакции людей",
      "en": "Fear of people’s reaction",
      "es": "Miedo a la reacción de la gente",
      "pt": "Medo da reação das pessoas",
      "de": "Angst vor der Reaktion anderer",
      "fr": "La peur de la réaction des autres"
    },
    "b": {
      "ru": "Желание всё ещё доработать",
      "en": "Wanting to improve it more",
      "es": "Querer perfeccionarlo más",
      "pt": "Querer aperfeiçoá-lo mais",
      "de": "Der Wunsch, es weiter zu verbessern",
      "fr": "L’envie de le perfectionner encore"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? Ситуация: когда планы меняются в последний момент.",
      "en": "You want to post something important but hesitate. What is most likely to stop you?",
      "es": "Quieres publicar algo importante pero dudas. ¿Qué te frenaría?",
      "pt": "Queres publicar algo importante, mas hesitas. O que te travaria?",
      "de": "Du willst etwas Wichtiges posten, zögerst aber. Was würde dich eher stoppen?",
      "fr": "Tu veux publier quelque chose d’important mais tu hésites. Qu’est-ce qui te freinerait?"
    },
    "a": {
      "ru": "Страх реакции людей",
      "en": "Fear of people’s reaction",
      "es": "Miedo a la reacción de la gente",
      "pt": "Medo da reação das pessoas",
      "de": "Angst vor der Reaktion anderer",
      "fr": "La peur de la réaction des autres"
    },
    "b": {
      "ru": "Желание всё ещё доработать",
      "en": "Wanting to improve it more",
      "es": "Querer perfeccionarlo más",
      "pt": "Querer aperfeiçoá-lo mais",
      "de": "Der Wunsch, es weiter zu verbessern",
      "fr": "L’envie de le perfectionner encore"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? Ситуация: после тяжёлой недели.",
      "en": "You notice your mistake before submitting your work. What do you do? Situation: after a difficult week.",
      "es": "Notas un error antes de entregar tu trabajo. ¿Qué haces? Situación: después de una semana difícil.",
      "pt": "Notas um erro antes de entregar o trabalho. O que fazes? Situação: depois de uma semana difícil.",
      "de": "Du bemerkst einen Fehler vor der Abgabe. Was tust du? Situation: nach einer anstrengenden Woche.",
      "fr": "Tu remarques une erreur avant de rendre ton travail. Que fais-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Исправлю, даже если опоздаю",
      "en": "Fix it even if I am late",
      "es": "Lo corregiré aunque llegue tarde",
      "pt": "Vou corrigir, mesmo que me atrase",
      "de": "Ich korrigiere es, auch wenn ich zu spät bin",
      "fr": "Je le corrige même si je suis en retard"
    },
    "b": {
      "ru": "Сдам вовремя и объясню ситуацию",
      "en": "Submit on time and explain",
      "es": "Lo entregaré a tiempo y explicaré",
      "pt": "Entregarei a tempo e explicarei",
      "de": "Ich gebe es pünktlich ab und erkläre es",
      "fr": "Je le rends à temps et j’explique"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? Ситуация: срочную задачу.",
      "en": "You notice your mistake before submitting your work. What do you do? Situation: an urgent task.",
      "es": "Notas un error antes de entregar tu trabajo. ¿Qué haces? Situación: una tarea urgente.",
      "pt": "Notas um erro antes de entregar o trabalho. O que fazes? Situação: uma tarefa urgente.",
      "de": "Du bemerkst einen Fehler vor der Abgabe. Was tust du? Situation: eine dringende Aufgabe.",
      "fr": "Tu remarques une erreur avant de rendre ton travail. Que fais-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Исправлю, даже если опоздаю",
      "en": "Fix it even if I am late",
      "es": "Lo corregiré aunque llegue tarde",
      "pt": "Vou corrigir, mesmo que me atrase",
      "de": "Ich korrigiere es, auch wenn ich zu spät bin",
      "fr": "Je le corrige même si je suis en retard"
    },
    "b": {
      "ru": "Сдам вовремя и объясню ситуацию",
      "en": "Submit on time and explain",
      "es": "Lo entregaré a tiempo y explicaré",
      "pt": "Entregarei a tempo e explicarei",
      "de": "Ich gebe es pünktlich ab und erkläre es",
      "fr": "Je le rends à temps et j’explique"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? Ситуация: в метро.",
      "en": "You notice your mistake before submitting your work. What do you do? Situation: on the subway.",
      "es": "Notas un error antes de entregar tu trabajo. ¿Qué haces? Situación: en el metro.",
      "pt": "Notas um erro antes de entregar o trabalho. O que fazes? Situação: no metro.",
      "de": "Du bemerkst einen Fehler vor der Abgabe. Was tust du? Situation: in der U-Bahn.",
      "fr": "Tu remarques une erreur avant de rendre ton travail. Que fais-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Исправлю, даже если опоздаю",
      "en": "Fix it even if I am late",
      "es": "Lo corregiré aunque llegue tarde",
      "pt": "Vou corrigir, mesmo que me atrase",
      "de": "Ich korrigiere es, auch wenn ich zu spät bin",
      "fr": "Je le corrige même si je suis en retard"
    },
    "b": {
      "ru": "Сдам вовремя и объясню ситуацию",
      "en": "Submit on time and explain",
      "es": "Lo entregaré a tiempo y explicaré",
      "pt": "Entregarei a tempo e explicarei",
      "de": "Ich gebe es pünktlich ab und erkläre es",
      "fr": "Je le rends à temps et j’explique"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? Ситуация: важную новость друга.",
      "en": "You notice your mistake before submitting your work. What do you do? Situation: an important friend’s news.",
      "es": "Notas un error antes de entregar tu trabajo. ¿Qué haces? Situación: una noticia importante de un amigo.",
      "pt": "Notas um erro antes de entregar o trabalho. O que fazes? Situação: uma notícia importante de um amigo.",
      "de": "Du bemerkst einen Fehler vor der Abgabe. Was tust du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Tu remarques une erreur avant de rendre ton travail. Que fais-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Исправлю, даже если опоздаю",
      "en": "Fix it even if I am late",
      "es": "Lo corregiré aunque llegue tarde",
      "pt": "Vou corrigir, mesmo que me atrase",
      "de": "Ich korrigiere es, auch wenn ich zu spät bin",
      "fr": "Je le corrige même si je suis en retard"
    },
    "b": {
      "ru": "Сдам вовремя и объясню ситуацию",
      "en": "Submit on time and explain",
      "es": "Lo entregaré a tiempo y explicaré",
      "pt": "Entregarei a tempo e explicarei",
      "de": "Ich gebe es pünktlich ab und erkläre es",
      "fr": "Je le rends à temps et j’explique"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? Ситуация: первый день на новой работе.",
      "en": "You notice your mistake before submitting your work. What do you do? Situation: your first day at a new job.",
      "es": "Notas un error antes de entregar tu trabajo. ¿Qué haces? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Notas um erro antes de entregar o trabalho. O que fazes? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Du bemerkst einen Fehler vor der Abgabe. Was tust du? Situation: dein erster Tag im neuen Job.",
      "fr": "Tu remarques une erreur avant de rendre ton travail. Que fais-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Исправлю, даже если опоздаю",
      "en": "Fix it even if I am late",
      "es": "Lo corregiré aunque llegue tarde",
      "pt": "Vou corrigir, mesmo que me atrase",
      "de": "Ich korrigiere es, auch wenn ich zu spät bin",
      "fr": "Je le corrige même si je suis en retard"
    },
    "b": {
      "ru": "Сдам вовремя и объясню ситуацию",
      "en": "Submit on time and explain",
      "es": "Lo entregaré a tiempo y explicaré",
      "pt": "Entregarei a tempo e explicarei",
      "de": "Ich gebe es pünktlich ab und erkläre es",
      "fr": "Je le rends à temps et j’explique"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя полностью свободный день. Что звучит приятнее? Ситуация: после тяжёлой недели.",
      "en": "You have a completely free day. What sounds better?",
      "es": "Tienes un día completamente libre. ¿Qué te atrae más?",
      "pt": "Tens um dia totalmente livre. O que parece melhor?",
      "de": "Du hast einen völlig freien Tag. Was klingt besser?",
      "fr": "Tu as une journée entièrement libre. Qu’est-ce qui te tente le plus?"
    },
    "a": {
      "ru": "Спокойный день без планов",
      "en": "A calm day with no plans",
      "es": "Un día tranquilo sin planes",
      "pt": "Um dia calmo sem planos",
      "de": "Ein ruhiger Tag ohne Pläne",
      "fr": "Une journée calme sans plans"
    },
    "b": {
      "ru": "День с новым занятием",
      "en": "A day with something new",
      "es": "Un día con algo nuevo",
      "pt": "Um dia com algo novo",
      "de": "Ein Tag mit etwas Neuem",
      "fr": "Une journée avec une nouvelle activité"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя полностью свободный день. Что звучит приятнее? Ситуация: перед важной встречей.",
      "en": "You have a completely free day. What sounds better?",
      "es": "Tienes un día completamente libre. ¿Qué te atrae más?",
      "pt": "Tens um dia totalmente livre. O que parece melhor?",
      "de": "Du hast einen völlig freien Tag. Was klingt besser?",
      "fr": "Tu as une journée entièrement libre. Qu’est-ce qui te tente le plus?"
    },
    "a": {
      "ru": "Спокойный день без планов",
      "en": "A calm day with no plans",
      "es": "Un día tranquilo sin planes",
      "pt": "Um dia calmo sem planos",
      "de": "Ein ruhiger Tag ohne Pläne",
      "fr": "Une journée calme sans plans"
    },
    "b": {
      "ru": "День с новым занятием",
      "en": "A day with something new",
      "es": "Un día con algo nuevo",
      "pt": "Um dia com algo novo",
      "de": "Ein Tag mit etwas Neuem",
      "fr": "Une journée avec une nouvelle activité"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя полностью свободный день. Что звучит приятнее? Ситуация: когда ты устал.",
      "en": "You have a completely free day. What sounds better?",
      "es": "Tienes un día completamente libre. ¿Qué te atrae más?",
      "pt": "Tens um dia totalmente livre. O que parece melhor?",
      "de": "Du hast einen völlig freien Tag. Was klingt besser?",
      "fr": "Tu as une journée entièrement libre. Qu’est-ce qui te tente le plus?"
    },
    "a": {
      "ru": "Спокойный день без планов",
      "en": "A calm day with no plans",
      "es": "Un día tranquilo sin planes",
      "pt": "Um dia calmo sem planos",
      "de": "Ein ruhiger Tag ohne Pläne",
      "fr": "Une journée calme sans plans"
    },
    "b": {
      "ru": "День с новым занятием",
      "en": "A day with something new",
      "es": "Un día con algo nuevo",
      "pt": "Um dia com algo novo",
      "de": "Ein Tag mit etwas Neuem",
      "fr": "Une journée avec une nouvelle activité"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя полностью свободный день. Что звучит приятнее? Ситуация: в незнакомой компании.",
      "en": "You have a completely free day. What sounds better?",
      "es": "Tienes un día completamente libre. ¿Qué te atrae más?",
      "pt": "Tens um dia totalmente livre. O que parece melhor?",
      "de": "Du hast einen völlig freien Tag. Was klingt besser?",
      "fr": "Tu as une journée entièrement libre. Qu’est-ce qui te tente le plus?"
    },
    "a": {
      "ru": "Спокойный день без планов",
      "en": "A calm day with no plans",
      "es": "Un día tranquilo sin planes",
      "pt": "Um dia calmo sem planos",
      "de": "Ein ruhiger Tag ohne Pläne",
      "fr": "Une journée calme sans plans"
    },
    "b": {
      "ru": "День с новым занятием",
      "en": "A day with something new",
      "es": "Un día con algo nuevo",
      "pt": "Um dia com algo novo",
      "de": "Ein Tag mit etwas Neuem",
      "fr": "Une journée avec une nouvelle activité"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "У тебя полностью свободный день. Что звучит приятнее? Ситуация: когда планы меняются в последний момент.",
      "en": "You have a completely free day. What sounds better?",
      "es": "Tienes un día completamente libre. ¿Qué te atrae más?",
      "pt": "Tens um dia totalmente livre. O que parece melhor?",
      "de": "Du hast einen völlig freien Tag. Was klingt besser?",
      "fr": "Tu as une journée entièrement libre. Qu’est-ce qui te tente le plus?"
    },
    "a": {
      "ru": "Спокойный день без планов",
      "en": "A calm day with no plans",
      "es": "Un día tranquilo sin planes",
      "pt": "Um dia calmo sem planos",
      "de": "Ein ruhiger Tag ohne Pläne",
      "fr": "Une journée calme sans plans"
    },
    "b": {
      "ru": "День с новым занятием",
      "en": "A day with something new",
      "es": "Un día con algo nuevo",
      "pt": "Um dia com algo novo",
      "de": "Ein Tag mit etwas Neuem",
      "fr": "Une journée avec une nouvelle activité"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? Ситуация: после тяжёлой недели.",
      "en": "A neighbor regularly makes noise late at night. What do you do? Situation: after a difficult week.",
      "es": "Un vecino hace ruido con frecuencia por la noche. ¿Qué haces? Situación: después de una semana difícil.",
      "pt": "Um vizinho faz barulho regularmente à noite. O que fazes? Situação: depois de uma semana difícil.",
      "de": "Ein Nachbar ist regelmäßig spät laut. Was tust du? Situation: nach einer anstrengenden Woche.",
      "fr": "Un voisin fait régulièrement du bruit tard le soir. Que fais-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Спокойно поговорю",
      "en": "Talk calmly",
      "es": "Hablaré con calma",
      "pt": "Falarei com calma",
      "de": "Ich spreche ruhig mit ihm",
      "fr": "J’en parle calmement"
    },
    "b": {
      "ru": "Сразу обращусь за помощью",
      "en": "Ask for help immediately",
      "es": "Pediré ayuda de inmediato",
      "pt": "Pedirei ajuda imediatamente",
      "de": "Ich hole sofort Hilfe",
      "fr": "Je demande immédiatement de l’aide"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? Ситуация: срочную задачу.",
      "en": "A neighbor regularly makes noise late at night. What do you do? Situation: an urgent task.",
      "es": "Un vecino hace ruido con frecuencia por la noche. ¿Qué haces? Situación: una tarea urgente.",
      "pt": "Um vizinho faz barulho regularmente à noite. O que fazes? Situação: uma tarefa urgente.",
      "de": "Ein Nachbar ist regelmäßig spät laut. Was tust du? Situation: eine dringende Aufgabe.",
      "fr": "Un voisin fait régulièrement du bruit tard le soir. Que fais-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Спокойно поговорю",
      "en": "Talk calmly",
      "es": "Hablaré con calma",
      "pt": "Falarei com calma",
      "de": "Ich spreche ruhig mit ihm",
      "fr": "J’en parle calmement"
    },
    "b": {
      "ru": "Сразу обращусь за помощью",
      "en": "Ask for help immediately",
      "es": "Pediré ayuda de inmediato",
      "pt": "Pedirei ajuda imediatamente",
      "de": "Ich hole sofort Hilfe",
      "fr": "Je demande immédiatement de l’aide"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? Ситуация: в метро.",
      "en": "A neighbor regularly makes noise late at night. What do you do? Situation: on the subway.",
      "es": "Un vecino hace ruido con frecuencia por la noche. ¿Qué haces? Situación: en el metro.",
      "pt": "Um vizinho faz barulho regularmente à noite. O que fazes? Situação: no metro.",
      "de": "Ein Nachbar ist regelmäßig spät laut. Was tust du? Situation: in der U-Bahn.",
      "fr": "Un voisin fait régulièrement du bruit tard le soir. Que fais-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Спокойно поговорю",
      "en": "Talk calmly",
      "es": "Hablaré con calma",
      "pt": "Falarei com calma",
      "de": "Ich spreche ruhig mit ihm",
      "fr": "J’en parle calmement"
    },
    "b": {
      "ru": "Сразу обращусь за помощью",
      "en": "Ask for help immediately",
      "es": "Pediré ayuda de inmediato",
      "pt": "Pedirei ajuda imediatamente",
      "de": "Ich hole sofort Hilfe",
      "fr": "Je demande immédiatement de l’aide"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? Ситуация: важную новость друга.",
      "en": "A neighbor regularly makes noise late at night. What do you do? Situation: an important friend’s news.",
      "es": "Un vecino hace ruido con frecuencia por la noche. ¿Qué haces? Situación: una noticia importante de un amigo.",
      "pt": "Um vizinho faz barulho regularmente à noite. O que fazes? Situação: uma notícia importante de um amigo.",
      "de": "Ein Nachbar ist regelmäßig spät laut. Was tust du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Un voisin fait régulièrement du bruit tard le soir. Que fais-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Спокойно поговорю",
      "en": "Talk calmly",
      "es": "Hablaré con calma",
      "pt": "Falarei com calma",
      "de": "Ich spreche ruhig mit ihm",
      "fr": "J’en parle calmement"
    },
    "b": {
      "ru": "Сразу обращусь за помощью",
      "en": "Ask for help immediately",
      "es": "Pediré ayuda de inmediato",
      "pt": "Pedirei ajuda imediatamente",
      "de": "Ich hole sofort Hilfe",
      "fr": "Je demande immédiatement de l’aide"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? Ситуация: первый день на новой работе.",
      "en": "A neighbor regularly makes noise late at night. What do you do? Situation: your first day at a new job.",
      "es": "Un vecino hace ruido con frecuencia por la noche. ¿Qué haces? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Um vizinho faz barulho regularmente à noite. O que fazes? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Ein Nachbar ist regelmäßig spät laut. Was tust du? Situation: dein erster Tag im neuen Job.",
      "fr": "Un voisin fait régulièrement du bruit tard le soir. Que fais-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Спокойно поговорю",
      "en": "Talk calmly",
      "es": "Hablaré con calma",
      "pt": "Falarei com calma",
      "de": "Ich spreche ruhig mit ihm",
      "fr": "J’en parle calmement"
    },
    "b": {
      "ru": "Сразу обращусь за помощью",
      "en": "Ask for help immediately",
      "es": "Pediré ayuda de inmediato",
      "pt": "Pedirei ajuda imediatamente",
      "de": "Ich hole sofort Hilfe",
      "fr": "Je demande immédiatement de l’aide"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? Ситуация: после тяжёлой недели.",
      "en": "You are invited to an event where you know almost nobody. Would you go?",
      "es": "Te invitan a un evento donde casi no conoces a nadie. ¿Irías?",
      "pt": "És convidado para um evento onde quase não conheces ninguém. Irias?",
      "de": "Du bist zu einer Veranstaltung eingeladen, bei der du kaum jemanden kennst. Gehst du?",
      "fr": "Tu es invité à un événement où tu ne connais presque personne. Iras-tu?"
    },
    "a": {
      "ru": "Да, интересно познакомиться",
      "en": "Yes, meeting people sounds interesting",
      "es": "Sí, me interesa conocer gente",
      "pt": "Sim, quero conhecer pessoas",
      "de": "Ja, neue Menschen kennenlernen klingt interessant",
      "fr": "Oui, j’ai envie de rencontrer du monde"
    },
    "b": {
      "ru": "Только если будет знакомый человек",
      "en": "Only if I know someone there",
      "es": "Solo si conozco a alguien allí",
      "pt": "Só se houver alguém conhecido",
      "de": "Nur wenn ich jemanden kenne",
      "fr": "Seulement si je connais quelqu’un"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? Ситуация: перед важной встречей.",
      "en": "You are invited to an event where you know almost nobody. Would you go?",
      "es": "Te invitan a un evento donde casi no conoces a nadie. ¿Irías?",
      "pt": "És convidado para um evento onde quase não conheces ninguém. Irias?",
      "de": "Du bist zu einer Veranstaltung eingeladen, bei der du kaum jemanden kennst. Gehst du?",
      "fr": "Tu es invité à un événement où tu ne connais presque personne. Iras-tu?"
    },
    "a": {
      "ru": "Да, интересно познакомиться",
      "en": "Yes, meeting people sounds interesting",
      "es": "Sí, me interesa conocer gente",
      "pt": "Sim, quero conhecer pessoas",
      "de": "Ja, neue Menschen kennenlernen klingt interessant",
      "fr": "Oui, j’ai envie de rencontrer du monde"
    },
    "b": {
      "ru": "Только если будет знакомый человек",
      "en": "Only if I know someone there",
      "es": "Solo si conozco a alguien allí",
      "pt": "Só se houver alguém conhecido",
      "de": "Nur wenn ich jemanden kenne",
      "fr": "Seulement si je connais quelqu’un"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? Ситуация: когда ты устал.",
      "en": "You are invited to an event where you know almost nobody. Would you go?",
      "es": "Te invitan a un evento donde casi no conoces a nadie. ¿Irías?",
      "pt": "És convidado para um evento onde quase não conheces ninguém. Irias?",
      "de": "Du bist zu einer Veranstaltung eingeladen, bei der du kaum jemanden kennst. Gehst du?",
      "fr": "Tu es invité à un événement où tu ne connais presque personne. Iras-tu?"
    },
    "a": {
      "ru": "Да, интересно познакомиться",
      "en": "Yes, meeting people sounds interesting",
      "es": "Sí, me interesa conocer gente",
      "pt": "Sim, quero conhecer pessoas",
      "de": "Ja, neue Menschen kennenlernen klingt interessant",
      "fr": "Oui, j’ai envie de rencontrer du monde"
    },
    "b": {
      "ru": "Только если будет знакомый человек",
      "en": "Only if I know someone there",
      "es": "Solo si conozco a alguien allí",
      "pt": "Só se houver alguém conhecido",
      "de": "Nur wenn ich jemanden kenne",
      "fr": "Seulement si je connais quelqu’un"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? Ситуация: в незнакомой компании.",
      "en": "You are invited to an event where you know almost nobody. Would you go?",
      "es": "Te invitan a un evento donde casi no conoces a nadie. ¿Irías?",
      "pt": "És convidado para um evento onde quase não conheces ninguém. Irias?",
      "de": "Du bist zu einer Veranstaltung eingeladen, bei der du kaum jemanden kennst. Gehst du?",
      "fr": "Tu es invité à un événement où tu ne connais presque personne. Iras-tu?"
    },
    "a": {
      "ru": "Да, интересно познакомиться",
      "en": "Yes, meeting people sounds interesting",
      "es": "Sí, me interesa conocer gente",
      "pt": "Sim, quero conhecer pessoas",
      "de": "Ja, neue Menschen kennenlernen klingt interessant",
      "fr": "Oui, j’ai envie de rencontrer du monde"
    },
    "b": {
      "ru": "Только если будет знакомый человек",
      "en": "Only if I know someone there",
      "es": "Solo si conozco a alguien allí",
      "pt": "Só se houver alguém conhecido",
      "de": "Nur wenn ich jemanden kenne",
      "fr": "Seulement si je connais quelqu’un"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? Ситуация: когда планы меняются в последний момент.",
      "en": "You are invited to an event where you know almost nobody. Would you go?",
      "es": "Te invitan a un evento donde casi no conoces a nadie. ¿Irías?",
      "pt": "És convidado para um evento onde quase não conheces ninguém. Irias?",
      "de": "Du bist zu einer Veranstaltung eingeladen, bei der du kaum jemanden kennst. Gehst du?",
      "fr": "Tu es invité à un événement où tu ne connais presque personne. Iras-tu?"
    },
    "a": {
      "ru": "Да, интересно познакомиться",
      "en": "Yes, meeting people sounds interesting",
      "es": "Sí, me interesa conocer gente",
      "pt": "Sim, quero conhecer pessoas",
      "de": "Ja, neue Menschen kennenlernen klingt interessant",
      "fr": "Oui, j’ai envie de rencontrer du monde"
    },
    "b": {
      "ru": "Только если будет знакомый человек",
      "en": "Only if I know someone there",
      "es": "Solo si conozco a alguien allí",
      "pt": "Só se houver alguém conhecido",
      "de": "Nur wenn ich jemanden kenne",
      "fr": "Seulement si je connais quelqu’un"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? Ситуация: после тяжёлой недели.",
      "en": "You receive honest but unpleasant feedback. How do you react? Situation: after a difficult week.",
      "es": "Recibes una opinión sincera pero desagradable. ¿Cómo reaccionas? Situación: después de una semana difícil.",
      "pt": "Recebes uma opinião honesta, mas desagradável. Como reages? Situação: depois de uma semana difícil.",
      "de": "Du bekommst ehrliches, aber unangenehmes Feedback. Wie reagierst du? Situation: nach einer anstrengenden Woche.",
      "fr": "Tu reçois un retour honnête mais désagréable. Comment réagis-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Подумаю, что из этого полезно",
      "en": "Think about what is useful",
      "es": "Pensaré qué puede ser útil",
      "pt": "Vou pensar no que é útil",
      "de": "Ich überlege, was nützlich ist",
      "fr": "Je réfléchis à ce qui est utile"
    },
    "b": {
      "ru": "Сначала защищу свою позицию",
      "en": "Defend my position first",
      "es": "Primero defenderé mi postura",
      "pt": "Primeiro defenderei a minha posição",
      "de": "Ich verteidige zuerst meine Position",
      "fr": "Je défends d’abord ma position"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? Ситуация: срочную задачу.",
      "en": "You receive honest but unpleasant feedback. How do you react? Situation: an urgent task.",
      "es": "Recibes una opinión sincera pero desagradable. ¿Cómo reaccionas? Situación: una tarea urgente.",
      "pt": "Recebes uma opinião honesta, mas desagradável. Como reages? Situação: uma tarefa urgente.",
      "de": "Du bekommst ehrliches, aber unangenehmes Feedback. Wie reagierst du? Situation: eine dringende Aufgabe.",
      "fr": "Tu reçois un retour honnête mais désagréable. Comment réagis-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Подумаю, что из этого полезно",
      "en": "Think about what is useful",
      "es": "Pensaré qué puede ser útil",
      "pt": "Vou pensar no que é útil",
      "de": "Ich überlege, was nützlich ist",
      "fr": "Je réfléchis à ce qui est utile"
    },
    "b": {
      "ru": "Сначала защищу свою позицию",
      "en": "Defend my position first",
      "es": "Primero defenderé mi postura",
      "pt": "Primeiro defenderei a minha posição",
      "de": "Ich verteidige zuerst meine Position",
      "fr": "Je défends d’abord ma position"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? Ситуация: в метро.",
      "en": "You receive honest but unpleasant feedback. How do you react? Situation: on the subway.",
      "es": "Recibes una opinión sincera pero desagradable. ¿Cómo reaccionas? Situación: en el metro.",
      "pt": "Recebes uma opinião honesta, mas desagradável. Como reages? Situação: no metro.",
      "de": "Du bekommst ehrliches, aber unangenehmes Feedback. Wie reagierst du? Situation: in der U-Bahn.",
      "fr": "Tu reçois un retour honnête mais désagréable. Comment réagis-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Подумаю, что из этого полезно",
      "en": "Think about what is useful",
      "es": "Pensaré qué puede ser útil",
      "pt": "Vou pensar no que é útil",
      "de": "Ich überlege, was nützlich ist",
      "fr": "Je réfléchis à ce qui est utile"
    },
    "b": {
      "ru": "Сначала защищу свою позицию",
      "en": "Defend my position first",
      "es": "Primero defenderé mi postura",
      "pt": "Primeiro defenderei a minha posição",
      "de": "Ich verteidige zuerst meine Position",
      "fr": "Je défends d’abord ma position"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? Ситуация: важную новость друга.",
      "en": "You receive honest but unpleasant feedback. How do you react? Situation: an important friend’s news.",
      "es": "Recibes una opinión sincera pero desagradable. ¿Cómo reaccionas? Situación: una noticia importante de un amigo.",
      "pt": "Recebes uma opinião honesta, mas desagradável. Como reages? Situação: uma notícia importante de um amigo.",
      "de": "Du bekommst ehrliches, aber unangenehmes Feedback. Wie reagierst du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Tu reçois un retour honnête mais désagréable. Comment réagis-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Подумаю, что из этого полезно",
      "en": "Think about what is useful",
      "es": "Pensaré qué puede ser útil",
      "pt": "Vou pensar no que é útil",
      "de": "Ich überlege, was nützlich ist",
      "fr": "Je réfléchis à ce qui est utile"
    },
    "b": {
      "ru": "Сначала защищу свою позицию",
      "en": "Defend my position first",
      "es": "Primero defenderé mi postura",
      "pt": "Primeiro defenderei a minha posição",
      "de": "Ich verteidige zuerst meine Position",
      "fr": "Je défends d’abord ma position"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? Ситуация: первый день на новой работе.",
      "en": "You receive honest but unpleasant feedback. How do you react? Situation: your first day at a new job.",
      "es": "Recibes una opinión sincera pero desagradable. ¿Cómo reaccionas? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Recebes uma opinião honesta, mas desagradável. Como reages? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Du bekommst ehrliches, aber unangenehmes Feedback. Wie reagierst du? Situation: dein erster Tag im neuen Job.",
      "fr": "Tu reçois un retour honnête mais désagréable. Comment réagis-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Подумаю, что из этого полезно",
      "en": "Think about what is useful",
      "es": "Pensaré qué puede ser útil",
      "pt": "Vou pensar no que é útil",
      "de": "Ich überlege, was nützlich ist",
      "fr": "Je réfléchis à ce qui est utile"
    },
    "b": {
      "ru": "Сначала защищу свою позицию",
      "en": "Defend my position first",
      "es": "Primero defenderé mi postura",
      "pt": "Primeiro defenderei a minha posição",
      "de": "Ich verteidige zuerst meine Position",
      "fr": "Je défends d’abord ma position"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? Ситуация: после тяжёлой недели.",
      "en": "An opportunity appears to try something you have never done. What matters more?",
      "es": "Aparece la oportunidad de probar algo que nunca has hecho. ¿Qué importa más?",
      "pt": "Surge a oportunidade de experimentar algo que nunca fizeste. O que importa mais?",
      "de": "Du kannst etwas ausprobieren, das du noch nie gemacht hast. Was zählt mehr?",
      "fr": "Une occasion se présente de faire quelque chose que tu n’as jamais fait. Qu’est-ce qui compte le plus?"
    },
    "a": {
      "ru": "Чтобы было интересно",
      "en": "That it is interesting",
      "es": "Que sea interesante",
      "pt": "Que seja interessante",
      "de": "Dass es interessant ist",
      "fr": "Que ce soit intéressant"
    },
    "b": {
      "ru": "Чтобы риск был разумным",
      "en": "That the risk is reasonable",
      "es": "Que el riesgo sea razonable",
      "pt": "Que o risco seja razoável",
      "de": "Dass das Risiko vertretbar ist",
      "fr": "Que le risque reste raisonnable"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? Ситуация: перед важной встречей.",
      "en": "An opportunity appears to try something you have never done. What matters more?",
      "es": "Aparece la oportunidad de probar algo que nunca has hecho. ¿Qué importa más?",
      "pt": "Surge a oportunidade de experimentar algo que nunca fizeste. O que importa mais?",
      "de": "Du kannst etwas ausprobieren, das du noch nie gemacht hast. Was zählt mehr?",
      "fr": "Une occasion se présente de faire quelque chose que tu n’as jamais fait. Qu’est-ce qui compte le plus?"
    },
    "a": {
      "ru": "Чтобы было интересно",
      "en": "That it is interesting",
      "es": "Que sea interesante",
      "pt": "Que seja interessante",
      "de": "Dass es interessant ist",
      "fr": "Que ce soit intéressant"
    },
    "b": {
      "ru": "Чтобы риск был разумным",
      "en": "That the risk is reasonable",
      "es": "Que el riesgo sea razonable",
      "pt": "Que o risco seja razoável",
      "de": "Dass das Risiko vertretbar ist",
      "fr": "Que le risque reste raisonnable"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? Ситуация: когда ты устал.",
      "en": "An opportunity appears to try something you have never done. What matters more?",
      "es": "Aparece la oportunidad de probar algo que nunca has hecho. ¿Qué importa más?",
      "pt": "Surge a oportunidade de experimentar algo que nunca fizeste. O que importa mais?",
      "de": "Du kannst etwas ausprobieren, das du noch nie gemacht hast. Was zählt mehr?",
      "fr": "Une occasion se présente de faire quelque chose que tu n’as jamais fait. Qu’est-ce qui compte le plus?"
    },
    "a": {
      "ru": "Чтобы было интересно",
      "en": "That it is interesting",
      "es": "Que sea interesante",
      "pt": "Que seja interessante",
      "de": "Dass es interessant ist",
      "fr": "Que ce soit intéressant"
    },
    "b": {
      "ru": "Чтобы риск был разумным",
      "en": "That the risk is reasonable",
      "es": "Que el riesgo sea razonable",
      "pt": "Que o risco seja razoável",
      "de": "Dass das Risiko vertretbar ist",
      "fr": "Que le risque reste raisonnable"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? Ситуация: в незнакомой компании.",
      "en": "An opportunity appears to try something you have never done. What matters more?",
      "es": "Aparece la oportunidad de probar algo que nunca has hecho. ¿Qué importa más?",
      "pt": "Surge a oportunidade de experimentar algo que nunca fizeste. O que importa mais?",
      "de": "Du kannst etwas ausprobieren, das du noch nie gemacht hast. Was zählt mehr?",
      "fr": "Une occasion se présente de faire quelque chose que tu n’as jamais fait. Qu’est-ce qui compte le plus?"
    },
    "a": {
      "ru": "Чтобы было интересно",
      "en": "That it is interesting",
      "es": "Que sea interesante",
      "pt": "Que seja interessante",
      "de": "Dass es interessant ist",
      "fr": "Que ce soit intéressant"
    },
    "b": {
      "ru": "Чтобы риск был разумным",
      "en": "That the risk is reasonable",
      "es": "Que el riesgo sea razonable",
      "pt": "Que o risco seja razoável",
      "de": "Dass das Risiko vertretbar ist",
      "fr": "Que le risque reste raisonnable"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? Ситуация: когда планы меняются в последний момент.",
      "en": "An opportunity appears to try something you have never done. What matters more?",
      "es": "Aparece la oportunidad de probar algo que nunca has hecho. ¿Qué importa más?",
      "pt": "Surge a oportunidade de experimentar algo que nunca fizeste. O que importa mais?",
      "de": "Du kannst etwas ausprobieren, das du noch nie gemacht hast. Was zählt mehr?",
      "fr": "Une occasion se présente de faire quelque chose que tu n’as jamais fait. Qu’est-ce qui compte le plus?"
    },
    "a": {
      "ru": "Чтобы было интересно",
      "en": "That it is interesting",
      "es": "Que sea interesante",
      "pt": "Que seja interessante",
      "de": "Dass es interessant ist",
      "fr": "Que ce soit intéressant"
    },
    "b": {
      "ru": "Чтобы риск был разумным",
      "en": "That the risk is reasonable",
      "es": "Que el riesgo sea razonable",
      "pt": "Que o risco seja razoável",
      "de": "Dass das Risiko vertretbar ist",
      "fr": "Que le risque reste raisonnable"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? Ситуация: после тяжёлой недели.",
      "en": "Someone promised to help you but forgot. What do you do? Situation: after a difficult week.",
      "es": "Alguien prometió ayudarte pero lo olvidó. ¿Qué haces? Situación: después de una semana difícil.",
      "pt": "Alguém prometeu ajudar-te, mas esqueceu-se. O que fazes? Situação: depois de uma semana difícil.",
      "de": "Jemand hat dir Hilfe versprochen, aber es vergessen. Was tust du? Situation: nach einer anstrengenden Woche.",
      "fr": "Quelqu’un t’a promis de l’aide mais a oublié. Que fais-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Напомню спокойно",
      "en": "Remind them calmly",
      "es": "Se lo recordaré con calma",
      "pt": "Vou lembrar calmamente",
      "de": "Ich erinnere die Person ruhig",
      "fr": "Je le rappelle calmement"
    },
    "b": {
      "ru": "Сделаю сам и запомню этот опыт",
      "en": "Do it myself and remember the lesson",
      "es": "Lo haré yo y recordaré la lección",
      "pt": "Farei eu e guardarei a lição",
      "de": "Ich mache es selbst und merke mir die Erfahrung",
      "fr": "Je le fais moi-même et retiens la leçon"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? Ситуация: срочную задачу.",
      "en": "Someone promised to help you but forgot. What do you do? Situation: an urgent task.",
      "es": "Alguien prometió ayudarte pero lo olvidó. ¿Qué haces? Situación: una tarea urgente.",
      "pt": "Alguém prometeu ajudar-te, mas esqueceu-se. O que fazes? Situação: uma tarefa urgente.",
      "de": "Jemand hat dir Hilfe versprochen, aber es vergessen. Was tust du? Situation: eine dringende Aufgabe.",
      "fr": "Quelqu’un t’a promis de l’aide mais a oublié. Que fais-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Напомню спокойно",
      "en": "Remind them calmly",
      "es": "Se lo recordaré con calma",
      "pt": "Vou lembrar calmamente",
      "de": "Ich erinnere die Person ruhig",
      "fr": "Je le rappelle calmement"
    },
    "b": {
      "ru": "Сделаю сам и запомню этот опыт",
      "en": "Do it myself and remember the lesson",
      "es": "Lo haré yo y recordaré la lección",
      "pt": "Farei eu e guardarei a lição",
      "de": "Ich mache es selbst und merke mir die Erfahrung",
      "fr": "Je le fais moi-même et retiens la leçon"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? Ситуация: в метро.",
      "en": "Someone promised to help you but forgot. What do you do? Situation: on the subway.",
      "es": "Alguien prometió ayudarte pero lo olvidó. ¿Qué haces? Situación: en el metro.",
      "pt": "Alguém prometeu ajudar-te, mas esqueceu-se. O que fazes? Situação: no metro.",
      "de": "Jemand hat dir Hilfe versprochen, aber es vergessen. Was tust du? Situation: in der U-Bahn.",
      "fr": "Quelqu’un t’a promis de l’aide mais a oublié. Que fais-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Напомню спокойно",
      "en": "Remind them calmly",
      "es": "Se lo recordaré con calma",
      "pt": "Vou lembrar calmamente",
      "de": "Ich erinnere die Person ruhig",
      "fr": "Je le rappelle calmement"
    },
    "b": {
      "ru": "Сделаю сам и запомню этот опыт",
      "en": "Do it myself and remember the lesson",
      "es": "Lo haré yo y recordaré la lección",
      "pt": "Farei eu e guardarei a lição",
      "de": "Ich mache es selbst und merke mir die Erfahrung",
      "fr": "Je le fais moi-même et retiens la leçon"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? Ситуация: важную новость друга.",
      "en": "Someone promised to help you but forgot. What do you do? Situation: an important friend’s news.",
      "es": "Alguien prometió ayudarte pero lo olvidó. ¿Qué haces? Situación: una noticia importante de un amigo.",
      "pt": "Alguém prometeu ajudar-te, mas esqueceu-se. O que fazes? Situação: uma notícia importante de um amigo.",
      "de": "Jemand hat dir Hilfe versprochen, aber es vergessen. Was tust du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Quelqu’un t’a promis de l’aide mais a oublié. Que fais-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Напомню спокойно",
      "en": "Remind them calmly",
      "es": "Se lo recordaré con calma",
      "pt": "Vou lembrar calmamente",
      "de": "Ich erinnere die Person ruhig",
      "fr": "Je le rappelle calmement"
    },
    "b": {
      "ru": "Сделаю сам и запомню этот опыт",
      "en": "Do it myself and remember the lesson",
      "es": "Lo haré yo y recordaré la lección",
      "pt": "Farei eu e guardarei a lição",
      "de": "Ich mache es selbst und merke mir die Erfahrung",
      "fr": "Je le fais moi-même et retiens la leçon"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? Ситуация: первый день на новой работе.",
      "en": "Someone promised to help you but forgot. What do you do? Situation: your first day at a new job.",
      "es": "Alguien prometió ayudarte pero lo olvidó. ¿Qué haces? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Alguém prometeu ajudar-te, mas esqueceu-se. O que fazes? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Jemand hat dir Hilfe versprochen, aber es vergessen. Was tust du? Situation: dein erster Tag im neuen Job.",
      "fr": "Quelqu’un t’a promis de l’aide mais a oublié. Que fais-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Напомню спокойно",
      "en": "Remind them calmly",
      "es": "Se lo recordaré con calma",
      "pt": "Vou lembrar calmamente",
      "de": "Ich erinnere die Person ruhig",
      "fr": "Je le rappelle calmement"
    },
    "b": {
      "ru": "Сделаю сам и запомню этот опыт",
      "en": "Do it myself and remember the lesson",
      "es": "Lo haré yo y recordaré la lección",
      "pt": "Farei eu e guardarei a lição",
      "de": "Ich mache es selbst und merke mir die Erfahrung",
      "fr": "Je le fais moi-même et retiens la leçon"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? Ситуация: после тяжёлой недели.",
      "en": "People online misunderstood you. What do you do?",
      "es": "En internet te han entendido mal. ¿Qué haces?",
      "pt": "Na internet entenderam-te mal. O que fazes?",
      "de": "Im Internet wurdest du missverstanden. Was tust du?",
      "fr": "Sur Internet, on t’a mal compris. Que fais-tu?"
    },
    "a": {
      "ru": "Объясню свою мысль",
      "en": "Explain what I meant",
      "es": "Explicaré lo que quería decir",
      "pt": "Explicarei o que quis dizer",
      "de": "Ich erkläre, was ich meinte",
      "fr": "J’explique ce que je voulais dire"
    },
    "b": {
      "ru": "Не буду тратить на это энергию",
      "en": "I will not spend energy on it",
      "es": "No gastaré energía en ello",
      "pt": "Não gastarei energia nisso",
      "de": "Ich verschwende keine Energie darauf",
      "fr": "Je n’y consacre pas mon énergie"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? Ситуация: перед важной встречей.",
      "en": "People online misunderstood you. What do you do?",
      "es": "En internet te han entendido mal. ¿Qué haces?",
      "pt": "Na internet entenderam-te mal. O que fazes?",
      "de": "Im Internet wurdest du missverstanden. Was tust du?",
      "fr": "Sur Internet, on t’a mal compris. Que fais-tu?"
    },
    "a": {
      "ru": "Объясню свою мысль",
      "en": "Explain what I meant",
      "es": "Explicaré lo que quería decir",
      "pt": "Explicarei o que quis dizer",
      "de": "Ich erkläre, was ich meinte",
      "fr": "J’explique ce que je voulais dire"
    },
    "b": {
      "ru": "Не буду тратить на это энергию",
      "en": "I will not spend energy on it",
      "es": "No gastaré energía en ello",
      "pt": "Não gastarei energia nisso",
      "de": "Ich verschwende keine Energie darauf",
      "fr": "Je n’y consacre pas mon énergie"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? Ситуация: когда ты устал.",
      "en": "People online misunderstood you. What do you do?",
      "es": "En internet te han entendido mal. ¿Qué haces?",
      "pt": "Na internet entenderam-te mal. O que fazes?",
      "de": "Im Internet wurdest du missverstanden. Was tust du?",
      "fr": "Sur Internet, on t’a mal compris. Que fais-tu?"
    },
    "a": {
      "ru": "Объясню свою мысль",
      "en": "Explain what I meant",
      "es": "Explicaré lo que quería decir",
      "pt": "Explicarei o que quis dizer",
      "de": "Ich erkläre, was ich meinte",
      "fr": "J’explique ce que je voulais dire"
    },
    "b": {
      "ru": "Не буду тратить на это энергию",
      "en": "I will not spend energy on it",
      "es": "No gastaré energía en ello",
      "pt": "Não gastarei energia nisso",
      "de": "Ich verschwende keine Energie darauf",
      "fr": "Je n’y consacre pas mon énergie"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? Ситуация: в незнакомой компании.",
      "en": "People online misunderstood you. What do you do?",
      "es": "En internet te han entendido mal. ¿Qué haces?",
      "pt": "Na internet entenderam-te mal. O que fazes?",
      "de": "Im Internet wurdest du missverstanden. Was tust du?",
      "fr": "Sur Internet, on t’a mal compris. Que fais-tu?"
    },
    "a": {
      "ru": "Объясню свою мысль",
      "en": "Explain what I meant",
      "es": "Explicaré lo que quería decir",
      "pt": "Explicarei o que quis dizer",
      "de": "Ich erkläre, was ich meinte",
      "fr": "J’explique ce que je voulais dire"
    },
    "b": {
      "ru": "Не буду тратить на это энергию",
      "en": "I will not spend energy on it",
      "es": "No gastaré energía en ello",
      "pt": "Não gastarei energia nisso",
      "de": "Ich verschwende keine Energie darauf",
      "fr": "Je n’y consacre pas mon énergie"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? Ситуация: когда планы меняются в последний момент.",
      "en": "People online misunderstood you. What do you do?",
      "es": "En internet te han entendido mal. ¿Qué haces?",
      "pt": "Na internet entenderam-te mal. O que fazes?",
      "de": "Im Internet wurdest du missverstanden. Was tust du?",
      "fr": "Sur Internet, on t’a mal compris. Que fais-tu?"
    },
    "a": {
      "ru": "Объясню свою мысль",
      "en": "Explain what I meant",
      "es": "Explicaré lo que quería decir",
      "pt": "Explicarei o que quis dizer",
      "de": "Ich erkläre, was ich meinte",
      "fr": "J’explique ce que je voulais dire"
    },
    "b": {
      "ru": "Не буду тратить на это энергию",
      "en": "I will not spend energy on it",
      "es": "No gastaré energía en ello",
      "pt": "Não gastarei energia nisso",
      "de": "Ich verschwende keine Energie darauf",
      "fr": "Je n’y consacre pas mon énergie"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? Ситуация: после тяжёлой недели.",
      "en": "An important goal suddenly becomes harder. How do you react? Situation: after a difficult week.",
      "es": "Una meta importante se vuelve de repente más difícil. ¿Cómo reaccionas? Situación: después de una semana difícil.",
      "pt": "Um objetivo importante torna-se de repente mais difícil. Como reages? Situação: depois de uma semana difícil.",
      "de": "Ein wichtiges Ziel wird plötzlich schwieriger. Wie reagierst du? Situation: nach einer anstrengenden Woche.",
      "fr": "Un objectif important devient soudainement plus difficile. Comment réagis-tu? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Разобью путь на маленькие шаги",
      "en": "Break the path into small steps",
      "es": "Dividiré el camino en pequeños pasos",
      "pt": "Vou dividir o caminho em pequenos passos",
      "de": "Ich teile den Weg in kleine Schritte",
      "fr": "Je divise le chemin en petites étapes"
    },
    "b": {
      "ru": "Поменяю подход",
      "en": "Change the approach",
      "es": "Cambiaré el enfoque",
      "pt": "Mudarei a abordagem",
      "de": "Ich ändere den Ansatz",
      "fr": "Je change d’approche"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? Ситуация: срочную задачу.",
      "en": "An important goal suddenly becomes harder. How do you react? Situation: an urgent task.",
      "es": "Una meta importante se vuelve de repente más difícil. ¿Cómo reaccionas? Situación: una tarea urgente.",
      "pt": "Um objetivo importante torna-se de repente mais difícil. Como reages? Situação: uma tarefa urgente.",
      "de": "Ein wichtiges Ziel wird plötzlich schwieriger. Wie reagierst du? Situation: eine dringende Aufgabe.",
      "fr": "Un objectif important devient soudainement plus difficile. Comment réagis-tu? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Разобью путь на маленькие шаги",
      "en": "Break the path into small steps",
      "es": "Dividiré el camino en pequeños pasos",
      "pt": "Vou dividir o caminho em pequenos passos",
      "de": "Ich teile den Weg in kleine Schritte",
      "fr": "Je divise le chemin en petites étapes"
    },
    "b": {
      "ru": "Поменяю подход",
      "en": "Change the approach",
      "es": "Cambiaré el enfoque",
      "pt": "Mudarei a abordagem",
      "de": "Ich ändere den Ansatz",
      "fr": "Je change d’approche"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? Ситуация: в метро.",
      "en": "An important goal suddenly becomes harder. How do you react? Situation: on the subway.",
      "es": "Una meta importante se vuelve de repente más difícil. ¿Cómo reaccionas? Situación: en el metro.",
      "pt": "Um objetivo importante torna-se de repente mais difícil. Como reages? Situação: no metro.",
      "de": "Ein wichtiges Ziel wird plötzlich schwieriger. Wie reagierst du? Situation: in der U-Bahn.",
      "fr": "Un objectif important devient soudainement plus difficile. Comment réagis-tu? Situation : dans le métro."
    },
    "a": {
      "ru": "Разобью путь на маленькие шаги",
      "en": "Break the path into small steps",
      "es": "Dividiré el camino en pequeños pasos",
      "pt": "Vou dividir o caminho em pequenos passos",
      "de": "Ich teile den Weg in kleine Schritte",
      "fr": "Je divise le chemin en petites étapes"
    },
    "b": {
      "ru": "Поменяю подход",
      "en": "Change the approach",
      "es": "Cambiaré el enfoque",
      "pt": "Mudarei a abordagem",
      "de": "Ich ändere den Ansatz",
      "fr": "Je change d’approche"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? Ситуация: важную новость друга.",
      "en": "An important goal suddenly becomes harder. How do you react? Situation: an important friend’s news.",
      "es": "Una meta importante se vuelve de repente más difícil. ¿Cómo reaccionas? Situación: una noticia importante de un amigo.",
      "pt": "Um objetivo importante torna-se de repente mais difícil. Como reages? Situação: uma notícia importante de um amigo.",
      "de": "Ein wichtiges Ziel wird plötzlich schwieriger. Wie reagierst du? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Un objectif important devient soudainement plus difficile. Comment réagis-tu? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Разобью путь на маленькие шаги",
      "en": "Break the path into small steps",
      "es": "Dividiré el camino en pequeños pasos",
      "pt": "Vou dividir o caminho em pequenos passos",
      "de": "Ich teile den Weg in kleine Schritte",
      "fr": "Je divise le chemin en petites étapes"
    },
    "b": {
      "ru": "Поменяю подход",
      "en": "Change the approach",
      "es": "Cambiaré el enfoque",
      "pt": "Mudarei a abordagem",
      "de": "Ich ändere den Ansatz",
      "fr": "Je change d’approche"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? Ситуация: первый день на новой работе.",
      "en": "An important goal suddenly becomes harder. How do you react? Situation: your first day at a new job.",
      "es": "Una meta importante se vuelve de repente más difícil. ¿Cómo reaccionas? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Um objetivo importante torna-se de repente mais difícil. Como reages? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Ein wichtiges Ziel wird plötzlich schwieriger. Wie reagierst du? Situation: dein erster Tag im neuen Job.",
      "fr": "Un objectif important devient soudainement plus difficile. Comment réagis-tu? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Разобью путь на маленькие шаги",
      "en": "Break the path into small steps",
      "es": "Dividiré el camino en pequeños pasos",
      "pt": "Vou dividir o caminho em pequenos passos",
      "de": "Ich teile den Weg in kleine Schritte",
      "fr": "Je divise le chemin en petites étapes"
    },
    "b": {
      "ru": "Поменяю подход",
      "en": "Change the approach",
      "es": "Cambiaré el enfoque",
      "pt": "Mudarei a abordagem",
      "de": "Ich ändere den Ansatz",
      "fr": "Je change d’approche"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? Ситуация: после тяжёлой недели.",
      "en": "You are alone in an unfamiliar city. What do you do first?",
      "es": "Estás solo en una ciudad desconocida. ¿Qué haces primero?",
      "pt": "Estás sozinho numa cidade desconhecida. O que fazes primeiro?",
      "de": "Du bist allein in einer unbekannten Stadt. Was tust du zuerst?",
      "fr": "Tu es seul dans une ville inconnue. Que fais-tu en premier?"
    },
    "a": {
      "ru": "Изучу карту и маршрут",
      "en": "Study the map and route",
      "es": "Estudiaré el mapa y la ruta",
      "pt": "Vou estudar o mapa e o percurso",
      "de": "Ich schaue mir Karte und Route an",
      "fr": "J’étudie la carte et l’itinéraire"
    },
    "b": {
      "ru": "Пойду исследовать район",
      "en": "Explore the area",
      "es": "Exploraré la zona",
      "pt": "Vou explorar a zona",
      "de": "Ich erkunde die Gegend",
      "fr": "J’explore le quartier"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? Ситуация: перед важной встречей.",
      "en": "You are alone in an unfamiliar city. What do you do first?",
      "es": "Estás solo en una ciudad desconocida. ¿Qué haces primero?",
      "pt": "Estás sozinho numa cidade desconhecida. O que fazes primeiro?",
      "de": "Du bist allein in einer unbekannten Stadt. Was tust du zuerst?",
      "fr": "Tu es seul dans une ville inconnue. Que fais-tu en premier?"
    },
    "a": {
      "ru": "Изучу карту и маршрут",
      "en": "Study the map and route",
      "es": "Estudiaré el mapa y la ruta",
      "pt": "Vou estudar o mapa e o percurso",
      "de": "Ich schaue mir Karte und Route an",
      "fr": "J’étudie la carte et l’itinéraire"
    },
    "b": {
      "ru": "Пойду исследовать район",
      "en": "Explore the area",
      "es": "Exploraré la zona",
      "pt": "Vou explorar a zona",
      "de": "Ich erkunde die Gegend",
      "fr": "J’explore le quartier"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? Ситуация: когда ты устал.",
      "en": "You are alone in an unfamiliar city. What do you do first?",
      "es": "Estás solo en una ciudad desconocida. ¿Qué haces primero?",
      "pt": "Estás sozinho numa cidade desconhecida. O que fazes primeiro?",
      "de": "Du bist allein in einer unbekannten Stadt. Was tust du zuerst?",
      "fr": "Tu es seul dans une ville inconnue. Que fais-tu en premier?"
    },
    "a": {
      "ru": "Изучу карту и маршрут",
      "en": "Study the map and route",
      "es": "Estudiaré el mapa y la ruta",
      "pt": "Vou estudar o mapa e o percurso",
      "de": "Ich schaue mir Karte und Route an",
      "fr": "J’étudie la carte et l’itinéraire"
    },
    "b": {
      "ru": "Пойду исследовать район",
      "en": "Explore the area",
      "es": "Exploraré la zona",
      "pt": "Vou explorar a zona",
      "de": "Ich erkunde die Gegend",
      "fr": "J’explore le quartier"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? Ситуация: в незнакомой компании.",
      "en": "You are alone in an unfamiliar city. What do you do first?",
      "es": "Estás solo en una ciudad desconocida. ¿Qué haces primero?",
      "pt": "Estás sozinho numa cidade desconhecida. O que fazes primeiro?",
      "de": "Du bist allein in einer unbekannten Stadt. Was tust du zuerst?",
      "fr": "Tu es seul dans une ville inconnue. Que fais-tu en premier?"
    },
    "a": {
      "ru": "Изучу карту и маршрут",
      "en": "Study the map and route",
      "es": "Estudiaré el mapa y la ruta",
      "pt": "Vou estudar o mapa e o percurso",
      "de": "Ich schaue mir Karte und Route an",
      "fr": "J’étudie la carte et l’itinéraire"
    },
    "b": {
      "ru": "Пойду исследовать район",
      "en": "Explore the area",
      "es": "Exploraré la zona",
      "pt": "Vou explorar a zona",
      "de": "Ich erkunde die Gegend",
      "fr": "J’explore le quartier"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? Ситуация: когда планы меняются в последний момент.",
      "en": "You are alone in an unfamiliar city. What do you do first?",
      "es": "Estás solo en una ciudad desconocida. ¿Qué haces primero?",
      "pt": "Estás sozinho numa cidade desconhecida. O que fazes primeiro?",
      "de": "Du bist allein in einer unbekannten Stadt. Was tust du zuerst?",
      "fr": "Tu es seul dans une ville inconnue. Que fais-tu en premier?"
    },
    "a": {
      "ru": "Изучу карту и маршрут",
      "en": "Study the map and route",
      "es": "Estudiaré el mapa y la ruta",
      "pt": "Vou estudar o mapa e o percurso",
      "de": "Ich schaue mir Karte und Route an",
      "fr": "J’étudie la carte et l’itinéraire"
    },
    "b": {
      "ru": "Пойду исследовать район",
      "en": "Explore the area",
      "es": "Exploraré la zona",
      "pt": "Vou explorar a zona",
      "de": "Ich erkunde die Gegend",
      "fr": "J’explore le quartier"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? Ситуация: после тяжёлой недели.",
      "en": "You want to change one habit. What would help most? Situation: after a difficult week.",
      "es": "Quieres cambiar un hábito. ¿Qué ayudaría más? Situación: después de una semana difícil.",
      "pt": "Queres mudar um hábito. O que ajudaria mais? Situação: depois de uma semana difícil.",
      "de": "Du willst eine Gewohnheit ändern. Was hilft am meisten? Situation: nach einer anstrengenden Woche.",
      "fr": "Tu veux changer une habitude. Qu’est-ce qui t’aiderait le plus? Situation : après une semaine difficile."
    },
    "a": {
      "ru": "Чёткий план",
      "en": "A clear plan",
      "es": "Un plan claro",
      "pt": "Um plano claro",
      "de": "Ein klarer Plan",
      "fr": "Un plan clair"
    },
    "b": {
      "ru": "Маленькие действия каждый день",
      "en": "Small actions every day",
      "es": "Pequeñas acciones cada día",
      "pt": "Pequenas ações todos os dias",
      "de": "Kleine Schritte jeden Tag",
      "fr": "De petites actions chaque jour"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? Ситуация: срочную задачу.",
      "en": "You want to change one habit. What would help most? Situation: an urgent task.",
      "es": "Quieres cambiar un hábito. ¿Qué ayudaría más? Situación: una tarea urgente.",
      "pt": "Queres mudar um hábito. O que ajudaria mais? Situação: uma tarefa urgente.",
      "de": "Du willst eine Gewohnheit ändern. Was hilft am meisten? Situation: eine dringende Aufgabe.",
      "fr": "Tu veux changer une habitude. Qu’est-ce qui t’aiderait le plus? Situation : une tâche urgente."
    },
    "a": {
      "ru": "Чёткий план",
      "en": "A clear plan",
      "es": "Un plan claro",
      "pt": "Um plano claro",
      "de": "Ein klarer Plan",
      "fr": "Un plan clair"
    },
    "b": {
      "ru": "Маленькие действия каждый день",
      "en": "Small actions every day",
      "es": "Pequeñas acciones cada día",
      "pt": "Pequenas ações todos os dias",
      "de": "Kleine Schritte jeden Tag",
      "fr": "De petites actions chaque jour"
    },
    "stats": {
      "a": 49,
      "b": 51
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? Ситуация: в метро.",
      "en": "You want to change one habit. What would help most? Situation: on the subway.",
      "es": "Quieres cambiar un hábito. ¿Qué ayudaría más? Situación: en el metro.",
      "pt": "Queres mudar um hábito. O que ajudaria mais? Situação: no metro.",
      "de": "Du willst eine Gewohnheit ändern. Was hilft am meisten? Situation: in der U-Bahn.",
      "fr": "Tu veux changer une habitude. Qu’est-ce qui t’aiderait le plus? Situation : dans le métro."
    },
    "a": {
      "ru": "Чёткий план",
      "en": "A clear plan",
      "es": "Un plan claro",
      "pt": "Um plano claro",
      "de": "Ein klarer Plan",
      "fr": "Un plan clair"
    },
    "b": {
      "ru": "Маленькие действия каждый день",
      "en": "Small actions every day",
      "es": "Pequeñas acciones cada día",
      "pt": "Pequenas ações todos os dias",
      "de": "Kleine Schritte jeden Tag",
      "fr": "De petites actions chaque jour"
    },
    "stats": {
      "a": 51,
      "b": 49
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? Ситуация: важную новость друга.",
      "en": "You want to change one habit. What would help most? Situation: an important friend’s news.",
      "es": "Quieres cambiar un hábito. ¿Qué ayudaría más? Situación: una noticia importante de un amigo.",
      "pt": "Queres mudar um hábito. O que ajudaria mais? Situação: uma notícia importante de um amigo.",
      "de": "Du willst eine Gewohnheit ändern. Was hilft am meisten? Situation: eine wichtige Nachricht eines Freundes.",
      "fr": "Tu veux changer une habitude. Qu’est-ce qui t’aiderait le plus? Situation : une nouvelle importante d’un ami."
    },
    "a": {
      "ru": "Чёткий план",
      "en": "A clear plan",
      "es": "Un plan claro",
      "pt": "Um plano claro",
      "de": "Ein klarer Plan",
      "fr": "Un plan clair"
    },
    "b": {
      "ru": "Маленькие действия каждый день",
      "en": "Small actions every day",
      "es": "Pequeñas acciones cada día",
      "pt": "Pequenas ações todos os dias",
      "de": "Kleine Schritte jeden Tag",
      "fr": "De petites actions chaque jour"
    },
    "stats": {
      "a": 53,
      "b": 47
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
  },
  {
    "question": {
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? Ситуация: первый день на новой работе.",
      "en": "You want to change one habit. What would help most? Situation: your first day at a new job.",
      "es": "Quieres cambiar un hábito. ¿Qué ayudaría más? Situación: tu primer día en un nuevo trabajo.",
      "pt": "Queres mudar um hábito. O que ajudaria mais? Situação: o teu primeiro dia num novo trabalho.",
      "de": "Du willst eine Gewohnheit ändern. Was hilft am meisten? Situation: dein erster Tag im neuen Job.",
      "fr": "Tu veux changer une habitude. Qu’est-ce qui t’aiderait le plus? Situation : ton premier jour dans un nouveau travail."
    },
    "a": {
      "ru": "Чёткий план",
      "en": "A clear plan",
      "es": "Un plan claro",
      "pt": "Um plano claro",
      "de": "Ein klarer Plan",
      "fr": "Un plan clair"
    },
    "b": {
      "ru": "Маленькие действия каждый день",
      "en": "Small actions every day",
      "es": "Pequeñas acciones cada día",
      "pt": "Pequenas ações todos os dias",
      "de": "Kleine Schritte jeden Tag",
      "fr": "De petites actions chaque jour"
    },
    "stats": {
      "a": 47,
      "b": 53
    },
    "analysis": {
      "ru": "Твой выбор показывает, как ты обычно реагируешь на подобные ситуации.",
      "en": "Your choice shows how you tend to react in situations like this.",
      "es": "Tu elección muestra cómo sueles reaccionar ante situaciones así.",
      "pt": "A tua escolha mostra como costumas reagir em situações assim.",
      "de": "Deine Wahl zeigt, wie du in solchen Situationen meist reagierst.",
      "fr": "Ton choix montre comment tu réagis généralement dans ce type de situation."
    }
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
      <div class="fate-question">${loc(d.question)}</div>
      <div class="fate-choices" id="fate-choices">
        <button class="fate-btn" onclick="answerFate(${index}, 'a')"><span class="fate-btn-text">${loc(d.a)}</span></button>
        <button class="fate-btn" onclick="answerFate(${index}, 'b')"><span class="fate-btn-text">${loc(d.b)}</span></button>
      </div>
      <div class="fate-result" id="fate-result" style="display:none;">
        <div class="fate-stats">
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-a" style="width:0%"></div><span class="fate-stat-label">${d.stats.a}%</span></div>
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-b" style="width:0%"></div><span class="fate-stat-label">${d.stats.b}%</span></div>
        </div>
        <div class="fate-analysis">${loc(d.analysis)}</div>
        <button class="fate-next" onclick="nextFateQuestion()">${loc(NEXT_BUTTON_TEXTS[index % NEXT_BUTTON_TEXTS.length])}</button>
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
      <div class="final-channel-note">${t('finalChannel')}</div>
      <div class="final-actions"><button class="fate-next" onclick="restartFateDilemmas()">${t('restart')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div>
    </div>`;
  document.body.appendChild(overlay);
}
function restartFateDilemmas() {
  localStorage.setItem('fate_dilemmas', JSON.stringify({currentIndex:0,answers:[]}));
  const overlay=document.querySelector('.fate-overlay');
  if(overlay){overlay.classList.remove('active');setTimeout(()=>{overlay.remove();openFateDilemmas();},250);}
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
      },
      {
        "ru": "После того как найдёшь неслучайного бога, используй вопросы о том, что он ответил бы на другой вопрос — это снимает проблему с «da» и «ja».",
        "en": "Once you have a non-Random god, use questions about what that god would answer to another question; this neutralizes the unknown meaning of “da” and “ja”.",
        "es": "Cuando encuentres al dios que no es Aleatorio, usa preguntas sobre lo que respondería a otra pregunta; así neutralizas el significado desconocido de «da» y «ja».",
        "pt": "Depois de encontrares o deus que não é Aleatório, usa perguntas sobre o que ele responderia a outra pergunta; isso neutraliza o significado desconhecido de «da» e «ja».",
        "de": "Sobald du einen Nicht-Zufallsgott gefunden hast, frage, was er auf eine andere Frage antworten würde; so neutralisierst du die unbekannte Bedeutung von „da“ und „ja“.",
        "fr": "Une fois le dieu non-Aléatoire trouvé, utilise des questions sur ce qu’il répondrait à une autre question ; cela neutralise le sens inconnu de « da » et « ja »."
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
      <div class="labyrinth-counter">${state.currentRiddle + 1} ${t('countOf')} ${LABYRINTH_RIDDLES.length}</div>
      <div class="labyrinth-riddle">${loc(riddle.riddle)}</div>
      <div class="labyrinth-hints">
        ${[0,1,2].slice(0, state.currentRiddle === LABYRINTH_RIDDLES.length - 1 ? 3 : 2).map(i => `<button class="labyrinth-hint-btn ${state.hintsUsed.includes(i) ? 'used' : ''}" onclick="showLabyrinthHint(${i})"><span>✦</span>${i+1}</button>`).join('')}
      </div>
      <div class="labyrinth-hint-text" id="labyrinth-hint-text"></div>
      <button class="labyrinth-answer-btn" id="labyrinth-answer-btn" onclick="showLabyrinthAnswerConfirm()">${t('lookAnswer')}</button>
      <div class="labyrinth-answer" id="labyrinth-answer" style="display:none;">
        <div class="labyrinth-answer-text">${loc(riddle.answer)}</div>
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
  const text = t('hintConfirm');
  const yes = t('hintYes');
  const no = t('hintNo');
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
  hintText.textContent = loc(riddle.hints[hintIndex]);
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
      <div class="final-channel-note">${t('finalChannel')}</div>
      <div class="final-actions"><button class="labyrinth-next-btn" onclick="restartLabyrinth()">${t('restart')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div>
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
    "question": {
      "ru": "Когда у тебя появляется свободный вечер, что ты чаще выбираешь?",
      "en": "When you get a free evening, what do you usually choose?",
      "es": "Cuando tienes una tarde libre, ¿qué sueles elegir?",
      "pt": "Quando tens uma noite livre, o que costumas escolher?",
      "de": "Wenn du einen freien Abend hast, was wählst du meist?",
      "fr": "Quand une soirée se libère, que choisis-tu le plus souvent ?"
    },
    "options": [
      {
        "text": {
          "ru": "Встретиться с близкими",
          "en": "Meet people close to me",
          "es": "Quedar con gente cercana",
          "pt": "Estar com pessoas próximas",
          "de": "Zeit mit Menschen, die mir nahestehen",
          "fr": "Voir des proches"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0,
          "connector": 2
        }
      },
      {
        "text": {
          "ru": "Заняться своим делом",
          "en": "Work on my own thing",
          "es": "Hacer mis cosas",
          "pt": "Tratar das minhas coisas",
          "de": "Mein eigenes Ding machen",
          "fr": "Faire mes propres activités"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 2,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Пойти куда-нибудь спонтанно",
          "en": "Go somewhere spontaneously",
          "es": "Salir espontáneamente",
          "pt": "Sair espontaneamente",
          "de": "Spontan irgendwohin gehen",
          "fr": "Sortir spontanément"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 2,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Остаться дома и перезагрузиться",
          "en": "Stay home and reset",
          "es": "Quedarme en casa y desconectar",
          "pt": "Ficar em casa e desligar",
          "de": "Zu Hause abschalten",
          "fr": "Rester chez moi pour souffler"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 2,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Если планы на день внезапно меняются, что ты делаешь первым?",
      "en": "When your plans suddenly change, what do you do first?",
      "es": "Si tus planes cambian de repente, ¿qué haces primero?",
      "pt": "Se os teus planos mudarem de repente, o que fazes primeiro?",
      "de": "Wenn sich deine Pläne plötzlich ändern, was tust du zuerst?",
      "fr": "Si tes plans changent soudainement, que fais-tu d’abord ?"
    },
    "options": [
      {
        "text": {
          "ru": "Быстро перестраиваю план",
          "en": "Rebuild my plan",
          "es": "Reorganizar el plan",
          "pt": "Reorganizar o plano",
          "de": "Meinen Plan neu ordnen",
          "fr": "Revoir mon plan"
        },
        "scores": {
          "leader": 0,
          "planner": 2,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Сначала оцениваю варианты",
          "en": "Assess the options",
          "es": "Evaluar las opciones",
          "pt": "Avaliar as opções",
          "de": "Die Möglichkeiten prüfen",
          "fr": "Évaluer les options"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 2,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Действую по ситуации",
          "en": "Act in the moment",
          "es": "Actuar sobre la marcha",
          "pt": "Agir no momento",
          "de": "Im Moment handeln",
          "fr": "Agir selon le moment"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 2
        }
      },
      {
        "text": {
          "ru": "Ищу кого-то, с кем можно обсудить",
          "en": "Talk it through with someone",
          "es": "Hablarlo con alguien",
          "pt": "Falar com alguém",
          "de": "Mit jemandem darüber sprechen",
          "fr": "En parler avec quelqu’un"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0,
          "connector": 2
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Ты получил неожиданную сумму денег. Что тебе ближе?",
      "en": "You receive an unexpected amount of money. What feels right?",
      "es": "Recibes una cantidad inesperada de dinero. ¿Qué prefieres?",
      "pt": "Recebes uma quantia inesperada. O que preferes?",
      "de": "Du bekommst unerwartet Geld. Was passt eher zu dir?",
      "fr": "Tu reçois une somme d’argent inattendue. Que préfères-tu ?"
    },
    "options": [
      {
        "text": {
          "ru": "Отложить большую часть",
          "en": "Save most of it",
          "es": "Ahorrar la mayor parte",
          "pt": "Guardar a maior parte",
          "de": "Den größten Teil sparen",
          "fr": "Épargner la plus grande partie"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 2,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Купить то, что давно хотел",
          "en": "Buy something I wanted",
          "es": "Comprar algo que quería",
          "pt": "Comprar algo que queria",
          "de": "Etwas kaufen, das ich wollte",
          "fr": "Acheter ce dont j’avais envie"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 2,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Вложить в обучение или навык",
          "en": "Invest in learning",
          "es": "Invertir en aprender",
          "pt": "Investir em aprendizagem",
          "de": "In Lernen investieren",
          "fr": "Investir dans l’apprentissage"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 2,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Разделить между несколькими целями",
          "en": "Split it between goals",
          "es": "Repartirlo entre varios objetivos",
          "pt": "Dividir por objetivos",
          "de": "Auf mehrere Ziele verteilen",
          "fr": "Répartir entre plusieurs objectifs"
        },
        "scores": {
          "leader": 0,
          "planner": 2,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      }
    ]
  },
  {
    "question": {
      "ru": "В новой компании ты обычно…",
      "en": "In a new group, you usually…",
      "es": "En un grupo nuevo, normalmente…",
      "pt": "Num grupo novo, normalmente…",
      "de": "In einer neuen Gruppe…",
      "fr": "Dans un nouveau groupe, tu…"
    },
    "options": [
      {
        "text": {
          "ru": "Сам начинаешь разговор",
          "en": "Start the conversation",
          "es": "Empiezo la conversación",
          "pt": "Começo a conversa",
          "de": "Ich beginne das Gespräch",
          "fr": "Je lance la conversation"
        },
        "scores": {
          "leader": 2,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Сначала наблюдаешь",
          "en": "Observe first",
          "es": "Observo primero",
          "pt": "Observo primeiro",
          "de": "Ich beobachte zuerst",
          "fr": "J’observe d’abord"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 2,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Предлагаешь общую активность",
          "en": "Suggest a group activity",
          "es": "Propongo una actividad",
          "pt": "Proponho uma atividade",
          "de": "Ich schlage etwas Gemeinsames vor",
          "fr": "Je propose une activité"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 2,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Быстро находишь одного близкого по духу человека",
          "en": "Find one person I connect with",
          "es": "Encuentro a alguien afín",
          "pt": "Encontro alguém com quem me identifico",
          "de": "Ich finde eine Person, mit der ich mich verbinde",
          "fr": "Je trouve quelqu’un avec qui je me sens bien"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0,
          "connector": 2
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Если кто-то критикует твою идею, ты скорее…",
      "en": "When someone criticizes your idea, you tend to…",
      "es": "Cuando alguien critica tu idea, sueles…",
      "pt": "Quando alguém critica a tua ideia, tu…",
      "de": "Wenn jemand deine Idee kritisiert, dann…",
      "fr": "Quand quelqu’un critique ton idée, tu…"
    },
    "options": [
      {
        "text": {
          "ru": "Спрашиваю, что можно улучшить",
          "en": "Ask what can be improved",
          "es": "Pregunto qué mejorar",
          "pt": "Pergunto o que melhorar",
          "de": "Ich frage, was besser werden kann",
          "fr": "Je demande ce qui peut être amélioré"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 2,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Защищаю то, во что верю",
          "en": "Defend what I believe in",
          "es": "Defiendo lo que creo",
          "pt": "Defendo aquilo em que acredito",
          "de": "Ich verteidige, woran ich glaube",
          "fr": "Je défends ce en quoi je crois"
        },
        "scores": {
          "leader": 2,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Обдумываю критику позже",
          "en": "Think about the criticism later",
          "es": "Lo pienso después",
          "pt": "Penso nisso depois",
          "de": "Ich denke später darüber nach",
          "fr": "J’y réfléchis plus tard"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 2,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Использую замечание как повод сделать иначе",
          "en": "Use it as a reason to do it differently",
          "es": "Lo uso para hacerlo de otra manera",
          "pt": "Uso a crítica para fazer diferente",
          "de": "Ich nutze es, um es anders zu machen",
          "fr": "Je m’en sers pour faire autrement"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 2,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Тебе предлагают попробовать новое занятие, о котором ты ничего не знаешь. Ты…",
      "en": "Someone offers you a new activity you know nothing about. You…",
      "es": "Te proponen una actividad nueva que no conoces. Tú…",
      "pt": "Propõem-te uma atividade nova que desconheces. Tu…",
      "de": "Dir wird eine neue Aktivität angeboten, die du nicht kennst. Du…",
      "fr": "On te propose une activité inconnue. Tu…"
    },
    "options": [
      {
        "text": {
          "ru": "Сразу пробую",
          "en": "Try it immediately",
          "es": "Lo pruebo enseguida",
          "pt": "Experimento logo",
          "de": "Ich probiere es sofort",
          "fr": "J’essaie tout de suite"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 2,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Сначала читаю отзывы",
          "en": "Read reviews first",
          "es": "Leo opiniones",
          "pt": "Leio opiniões",
          "de": "Ich lese zuerst Bewertungen",
          "fr": "Je lis des avis"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 2,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Зову друга",
          "en": "Invite a friend",
          "es": "Invito a un amigo",
          "pt": "Convido um amigo",
          "de": "Ich nehme einen Freund mit",
          "fr": "J’invite un ami"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0,
          "connector": 2
        }
      },
      {
        "text": {
          "ru": "Соглашаюсь, если это поможет мне вырасти",
          "en": "Say yes if it helps me grow",
          "es": "Acepto si me ayuda a crecer",
          "pt": "Aceito se me fizer crescer",
          "de": "Ich sage zu, wenn es mich weiterbringt",
          "fr": "J’accepte si cela m’aide à progresser"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 2,
          "rebel": 0
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Когда нужно принять важное решение, тебе спокойнее…",
      "en": "When making an important decision, you feel calmer when…",
      "es": "Al tomar una decisión importante, estás más tranquilo cuando…",
      "pt": "Ao tomar uma decisão importante, sentes-te mais tranquilo quando…",
      "de": "Bei einer wichtigen Entscheidung fühlst du dich ruhiger, wenn…",
      "fr": "Pour une décision importante, tu te sens plus serein quand…"
    },
    "options": [
      {
        "text": {
          "ru": "Иметь чёткий план",
          "en": "Have a clear plan",
          "es": "Tengo un plan claro",
          "pt": "Ter um plano claro",
          "de": "Einen klaren Plan zu haben",
          "fr": "Avoir un plan clair"
        },
        "scores": {
          "leader": 0,
          "planner": 2,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Собрать максимум информации",
          "en": "Collect as much information as possible",
          "es": "Reúno información",
          "pt": "Reunir informação",
          "de": "Möglichst viele Informationen zu sammeln",
          "fr": "Réunir un maximum d’informations"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 2,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Довериться внутреннему ощущению",
          "en": "Trust my intuition",
          "es": "Confío en mi intuición",
          "pt": "Confiar na intuição",
          "de": "Meiner Intuition zu vertrauen",
          "fr": "Faire confiance à mon intuition"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 2,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Обсудить решение с близким человеком",
          "en": "Discuss it with someone close",
          "es": "Lo hablo con alguien cercano",
          "pt": "Falar com alguém próximo",
          "de": "Mit einer nahestehenden Person zu sprechen",
          "fr": "En parler à un proche"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 2,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Если близкий человек расстроен, ты чаще…",
      "en": "When someone close to you is upset, you usually…",
      "es": "Si alguien cercano está triste, normalmente…",
      "pt": "Quando alguém próximo está triste, normalmente…",
      "de": "Wenn jemand dir nahestehender traurig ist, dann…",
      "fr": "Quand un proche est triste, tu…"
    },
    "options": [
      {
        "text": {
          "ru": "Сначала выслушиваю",
          "en": "Listen first",
          "es": "Escucho primero",
          "pt": "Ouço primeiro",
          "de": "Ich höre zuerst zu",
          "fr": "J’écoute d’abord"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 2,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Пытаюсь найти практическое решение",
          "en": "Look for a practical solution",
          "es": "Busco una solución práctica",
          "pt": "Procuro uma solução prática",
          "de": "Ich suche eine praktische Lösung",
          "fr": "Je cherche une solution pratique"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 2,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Даю пространство",
          "en": "Give them space",
          "es": "Le doy espacio",
          "pt": "Dou espaço",
          "de": "Ich gebe Raum",
          "fr": "Je lui laisse de l’espace"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 2,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Предлагаю отвлечься и сменить обстановку",
          "en": "Suggest a change of scene",
          "es": "Propongo cambiar de ambiente",
          "pt": "Proponho mudar de ambiente",
          "de": "Ich schlage einen Ortswechsel vor",
          "fr": "Je propose de changer d’air"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 2,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Что сильнее всего мотивирует тебя закончить сложное дело?",
      "en": "What motivates you most to finish something difficult?",
      "es": "¿Qué te motiva más a terminar algo difícil?",
      "pt": "O que mais te motiva a terminar algo difícil?",
      "de": "Was motiviert dich am stärksten, etwas Schwieriges zu beenden?",
      "fr": "Qu’est-ce qui te motive le plus à finir quelque chose de difficile ?"
    },
    "options": [
      {
        "text": {
          "ru": "Видимый результат",
          "en": "A visible result",
          "es": "Un resultado visible",
          "pt": "Um resultado visível",
          "de": "Ein sichtbares Ergebnis",
          "fr": "Un résultat visible"
        },
        "scores": {
          "leader": 0,
          "planner": 2,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Интерес к самому процессу",
          "en": "Interest in the process",
          "es": "El interés por el proceso",
          "pt": "Interesse pelo processo",
          "de": "Interesse am Prozess",
          "fr": "L’intérêt du processus"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 2,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Чувство ответственности",
          "en": "A sense of responsibility",
          "es": "El sentido de responsabilidad",
          "pt": "Sentido de responsabilidade",
          "de": "Verantwortungsgefühl",
          "fr": "Le sens des responsabilités"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 2,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Желание доказать себе, что смогу",
          "en": "Proving to myself that I can",
          "es": "Demostrarme que puedo",
          "pt": "Provar a mim próprio que consigo",
          "de": "Mir selbst zu beweisen, dass ich es kann",
          "fr": "Me prouver que j’en suis capable"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 2
        }
      }
    ]
  },
  {
    "question": {
      "ru": "Если ты понимаешь, что привычный путь больше не работает, ты…",
      "en": "If you realize your usual path no longer works, you…",
      "es": "Si tu camino habitual deja de funcionar, tú…",
      "pt": "Se percebes que o teu caminho habitual já não funciona, tu…",
      "de": "Wenn dein bisheriger Weg nicht mehr funktioniert, dann…",
      "fr": "Si ton chemin habituel ne fonctionne plus, tu…"
    },
    "options": [
      {
        "text": {
          "ru": "Меняю стратегию",
          "en": "Change the strategy",
          "es": "Cambio la estrategia",
          "pt": "Mudo a estratégia",
          "de": "Ich ändere die Strategie",
          "fr": "Je change de stratégie"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 2,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Ищу совершенно новый путь",
          "en": "Find a completely new path",
          "es": "Busco un camino nuevo",
          "pt": "Procuro um caminho novo",
          "de": "Ich suche einen völlig neuen Weg",
          "fr": "Je cherche une nouvelle voie"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 2,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Возвращаюсь к основам",
          "en": "Return to the basics",
          "es": "Vuelvo a lo básico",
          "pt": "Volto ao básico",
          "de": "Ich gehe zurück zu den Grundlagen",
          "fr": "Je reviens aux bases"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 2,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0
        }
      },
      {
        "text": {
          "ru": "Спрашиваю совет у того, кому доверяю",
          "en": "Ask someone I trust for advice",
          "es": "Pido consejo a alguien de confianza",
          "pt": "Peço conselho a alguém de confiança",
          "de": "Ich frage jemanden meines Vertrauens",
          "fr": "Je demande conseil à quelqu’un de confiance"
        },
        "scores": {
          "leader": 0,
          "planner": 0,
          "analyst": 0,
          "empath": 0,
          "creator": 0,
          "explorer": 0,
          "realist": 0,
          "dreamer": 0,
          "sage": 0,
          "rebel": 0,
          "connector": 2
        }
      }
    ]
  }
];
const DESTINY_TITLES = {
  leader: { name: {"ru": "Лидер", "en": "Leader", "es": "Líder", "pt": "Líder", "de": "Anführer", "fr": "Leader"}, description: {"ru": "Ты берёшь ответственность и умеешь вести других, когда ситуация требует решения.", "en": "You take responsibility and can lead others when a situation needs a decision.", "es": "Asumes responsabilidades y sabes guiar a otros cuando hace falta decidir.", "pt": "Assumes responsabilidade e sabes liderar quando uma situação exige uma decisão.", "de": "Du übernimmst Verantwortung und kannst andere führen, wenn eine Entscheidung nötig ist.", "fr": "Tu prends tes responsabilités et sais guider les autres quand une décision s’impose."} },
  planner: { name: {"ru": "Стратег", "en": "Strategist", "es": "Estratega", "pt": "Estratega", "de": "Stratege", "fr": "Stratège"}, description: {"ru": "Ты любишь видеть несколько шагов вперёд и превращать хаос в понятный план.", "en": "You like seeing several steps ahead and turning chaos into a clear plan.", "es": "Te gusta ver varios pasos por delante y convertir el caos en un plan claro.", "pt": "Gostas de ver vários passos à frente e transformar o caos num plano claro.", "de": "Du denkst gern mehrere Schritte voraus und machst aus Chaos einen klaren Plan.", "fr": "Tu aimes voir plusieurs étapes à l’avance et transformer le chaos en plan clair."} },
  analyst: { name: {"ru": "Аналитик", "en": "Analyst", "es": "Analista", "pt": "Analista", "de": "Analytiker", "fr": "Analyste"}, description: {"ru": "Ты замечаешь детали, сравниваешь варианты и редко принимаешь важные решения вслепую.", "en": "You notice details, compare options and rarely make important decisions blindly.", "es": "Observas detalles, comparas opciones y rara vez decides a ciegas.", "pt": "Reparas nos detalhes, comparas opções e raramente decides às cegas.", "de": "Du bemerkst Details, vergleichst Möglichkeiten und entscheidest selten blind.", "fr": "Tu remarques les détails, compares les options et décides rarement à l’aveugle."} },
  empath: { name: {"ru": "Эмпат", "en": "Empath", "es": "Empático", "pt": "Empático", "de": "Empath", "fr": "Empathe"}, description: {"ru": "Ты тонко чувствуешь людей и часто понимаешь их состояние раньше, чем они его объяснят.", "en": "You sense people deeply and often understand how they feel before they explain it.", "es": "Percibes a las personas con sensibilidad y a menudo entiendes cómo se sienten antes de que lo digan.", "pt": "Sentes as pessoas com profundidade e muitas vezes percebes o que sentem antes de explicarem.", "de": "Du spürst Menschen gut und verstehst oft, was sie fühlen, bevor sie es erklären.", "fr": "Tu ressens profondément les autres et comprends souvent leur état avant qu’ils ne l’expliquent."} },
  creator: { name: {"ru": "Создатель", "en": "Creator", "es": "Creador", "pt": "Criador", "de": "Schöpfer", "fr": "Créateur"}, description: {"ru": "Тебе важно создавать своё: идеи, проекты, атмосферу и вещи, которых раньше не было.", "en": "You need to create your own ideas, projects, atmosphere and things that did not exist before.", "es": "Necesitas crear lo tuyo: ideas, proyectos, ambientes y cosas nuevas.", "pt": "Precisas de criar o que é teu: ideias, projetos, ambientes e coisas novas.", "de": "Du willst Eigenes schaffen: Ideen, Projekte, Atmosphäre und Neues.", "fr": "Tu as besoin de créer ton propre univers : idées, projets, atmosphère et nouveautés."} },
  explorer: { name: {"ru": "Исследователь", "en": "Explorer", "es": "Explorador", "pt": "Explorador", "de": "Entdecker", "fr": "Explorateur"}, description: {"ru": "Тебя тянет к новому опыту, местам и возможностям, которые расширяют привычные границы.", "en": "You are drawn to new experiences, places and possibilities that expand your familiar boundaries.", "es": "Te atraen las experiencias y posibilidades nuevas que amplían tus límites.", "pt": "És atraído por novas experiências e possibilidades que alargam os teus limites.", "de": "Dich ziehen neue Erfahrungen und Möglichkeiten an, die deine Grenzen erweitern.", "fr": "Tu es attiré par les expériences et possibilités qui élargissent tes limites."} },
  realist: { name: {"ru": "Реалист", "en": "Realist", "es": "Realista", "pt": "Realista", "de": "Realist", "fr": "Réaliste"}, description: {"ru": "Ты ценишь практичность, устойчивость и решения, которые работают не только на словах.", "en": "You value practicality, stability and solutions that work beyond words.", "es": "Valoras la practicidad, la estabilidad y las soluciones que funcionan.", "pt": "Valorizas a praticidade, a estabilidade e soluções que funcionam.", "de": "Du schätzt praktische, stabile Lösungen, die wirklich funktionieren.", "fr": "Tu privilégies le concret, la stabilité et les solutions qui fonctionnent vraiment."} },
  dreamer: { name: {"ru": "Мечтатель", "en": "Dreamer", "es": "Soñador", "pt": "Sonhador", "de": "Träumer", "fr": "Rêveur"}, description: {"ru": "Ты умеешь видеть возможности там, где другие видят только ограничения, и не боишься больших идей.", "en": "You see possibilities where others see limits and are not afraid of big ideas.", "es": "Ves posibilidades donde otros ven límites y no temes a las grandes ideas.", "pt": "Vês possibilidades onde outros veem limites e não tens medo de grandes ideias.", "de": "Du siehst Möglichkeiten, wo andere Grenzen sehen, und hast keine Angst vor großen Ideen.", "fr": "Tu vois des possibilités là où d’autres voient des limites et tu n’as pas peur des grandes idées."} },
  sage: { name: {"ru": "Мудрец", "en": "Sage", "es": "Sabio", "pt": "Sábio", "de": "Weiser", "fr": "Sage"}, description: {"ru": "Ты предпочитаешь сначала понять смысл и последствия, а уже потом действовать.", "en": "You prefer to understand meaning and consequences before acting.", "es": "Prefieres comprender el sentido y las consecuencias antes de actuar.", "pt": "Preferes compreender o sentido e as consequências antes de agir.", "de": "Du möchtest Sinn und Folgen zuerst verstehen und dann handeln.", "fr": "Tu préfères comprendre le sens et les conséquences avant d’agir."} },
  rebel: { name: {"ru": "Свободный Дух", "en": "Free Spirit", "es": "Espíritu Libre", "pt": "Espírito Livre", "de": "Freigeist", "fr": "Esprit Libre"}, description: {"ru": "Ты не любишь жить по чужому шаблону и готов менять правила, если они перестали иметь смысл.", "en": "You dislike living by someone else’s template and will change rules when they stop making sense.", "es": "No te gusta vivir según el molde de otros y cambias las reglas cuando dejan de tener sentido.", "pt": "Não gostas de viver segundo o molde dos outros e mudas regras quando deixam de fazer sentido.", "de": "Du lebst ungern nach fremden Mustern und änderst Regeln, wenn sie keinen Sinn mehr ergeben.", "fr": "Tu n’aimes pas vivre selon le modèle des autres et changes les règles quand elles perdent leur sens."} }
};
function openTrueDestiny() {
  const saved = localStorage.getItem('true_destiny');
  if (saved) {
    const state = JSON.parse(saved);
    const expectedKeys = ['leader','planner','analyst','empath','creator','explorer','realist','dreamer','sage','rebel'];
    if (!state.scores || expectedKeys.some(k => typeof state.scores[k] !== 'number')) {
      localStorage.removeItem('true_destiny');
      return openTrueDestiny();
    }
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
        <p>${t('destinyIntro')}</p>
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
      <div class="destiny-question">${loc(q.question)}</div>
      <div class="destiny-options">
        ${q.options.map((opt, i) => `
          <button class="destiny-option" onclick="answerDestiny(${index}, ${i})" style="animation-delay:${i * 0.1}s">${loc(opt.text)}</button>
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
  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const winner = sorted[0]?.[0] || 'realist';
  const title = DESTINY_TITLES[winner] || DESTINY_TITLES.realist;
  const overlay = document.createElement('div');
  overlay.className = 'destiny-overlay active';
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeDestiny()">&times;</button>
    <div class="destiny-container destiny-result destiny-result-minimal destiny-result-rich">
      <div class="destiny-result-symbol">✦</div>
      <div class="destiny-result-kicker">${t('destinyResultTitle')}</div>
      <div class="destiny-result-title">${loc(title.name)}</div>
      <div class="destiny-result-desc">${loc(title.description)}</div>
      <div class="final-channel-note">${t('finalChannel')}</div>
      <div class="final-actions"><button class="destiny-restart" onclick="restartDestiny()">${t('destinyRestartBtn')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div>
    </div>`;
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

function renderWisdomCard(overlay) {
  let index = parseInt(localStorage.getItem('wisdom_index') || '0');
  if (index >= WISDOM_QUOTES.length) index = 0;
  const quote = WISDOM_QUOTES[index];
  localStorage.setItem('wisdom_index', ((index + 1) % WISDOM_QUOTES.length).toString());
  overlay.innerHTML = `<button class="overlay-close-x" onclick="closeWisdom()">&times;</button>
    <div class="wisdom-container">
      <div class="wisdom-heading">${t('wisdom')}</div>
      <div class="wisdom-quote">${loc(quote)}</div>
      <button class="wisdom-close-btn" onclick="nextWisdom()">${t('wisdomClose')}</button>
    </div>`;
}
function showWisdom() {
  const overlay = document.createElement('div');
  overlay.className = 'wisdom-overlay active';
  document.body.appendChild(overlay);
  renderWisdomCard(overlay);
}
function nextWisdom() {
  const overlay = document.querySelector('.wisdom-overlay');
  if (!overlay) return;
  renderWisdomCard(overlay);
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
  overlay.className = 'fate-overlay active';
  const copy = {
    ru:{lead:'Your Destiny начинается там, где заканчиваются готовые ответы.', body:'Это личное пространство выбора, наблюдений и маленьких испытаний. Здесь ты можешь проверить логику, увидеть собственный стиль решений, остановиться на одной мысли или просто открыть следующий вопрос из любопытства. Проект развивается постепенно: новые истории, загадки и сценарии будут появляться по мере роста вселенной.', note:'Не ищи здесь правильную судьбу. Ищи ту, которую выбрал бы именно ты.'},
    en:{lead:'Your Destiny begins where ready-made answers end.', body:'It is a personal space for choices, observations and small challenges. Test your logic, discover your decision-making style, pause over a thought or simply open the next question out of curiosity. The universe grows gradually as new stories, riddles and scenarios are added.', note:'Do not look for the correct destiny here. Look for the one you would choose yourself.'},
    es:{lead:'Your Destiny comienza donde terminan las respuestas prefabricadas.', body:'Es un espacio personal de elecciones, observaciones y pequeños desafíos. Pon a prueba tu lógica, descubre cómo decides, detente ante una idea o abre la siguiente pregunta por simple curiosidad. El universo crecerá poco a poco con nuevas historias, acertijos y escenarios.', note:'No busques aquí el destino correcto. Busca el que elegirías tú.'},
    pt:{lead:'Your Destiny começa onde terminam as respostas prontas.', body:'É um espaço pessoal de escolhas, observações e pequenos desafios. Testa a tua lógica, descobre a tua forma de decidir, para numa ideia ou abre a próxima pergunta por curiosidade. O universo cresce gradualmente com novas histórias, enigmas e cenários.', note:'Não procures aqui o destino certo. Procura aquele que escolherias.'},
    de:{lead:'Your Destiny beginnt dort, wo fertige Antworten enden.', body:'Es ist ein persönlicher Raum für Entscheidungen, Beobachtungen und kleine Prüfungen. Teste deine Logik, entdecke deine Art zu entscheiden, halte bei einem Gedanken inne oder öffne die nächste Frage aus Neugier. Das Universum wächst nach und nach mit neuen Geschichten, Rätseln und Szenarien.', note:'Suche hier nicht nach dem richtigen Schicksal. Suche nach dem, das du selbst wählen würdest.'},
    fr:{lead:'Your Destiny commence là où les réponses toutes faites s’arrêtent.', body:'C’est un espace personnel de choix, d’observations et de petits défis. Teste ta logique, découvre ta manière de décider, arrête-toi sur une idée ou ouvre simplement la question suivante par curiosité. L’univers grandira progressivement avec de nouvelles histoires, énigmes et scénarios.', note:'Ne cherche pas ici le destin correct. Cherche celui que tu choisirais toi-même.'}
  };
  const c=copy[currentLang]||copy.en;
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container about-card"><div class="fate-final-title">${t('about')}</div><div class="about-lead">${c.lead}</div><div class="about-body">${c.body}</div><div class="about-note">${c.note}</div></div>`;
  document.body.appendChild(overlay);
}

const LEGAL_TERMS = {
  ru:`1. Общие положения. Настоящие условия регулируют доступ к Your Destiny и использование его интерфейса, текстов, историй, загадок, механик, визуальных материалов и иных компонентов. Используя приложение, пользователь подтверждает ознакомление с условиями в пределах, допускаемых применимым законодательством.\n\n2. Назначение. Your Destiny является развлекательным цифровым продуктом. Тесты, архетипы, дилеммы, результаты и иные материалы имеют художественный и развлекательный характер и не являются медицинской, психологической, юридической, финансовой или иной профессиональной рекомендацией.\n\n3. Интеллектуальная собственность. Название, код, дизайн, тексты, графика, структура интерфейса и оригинальные материалы принадлежат правообладателю либо используются на законном основании. Копирование, публикация, продажа, распространение или переработка материалов без разрешения запрещены, кроме случаев, прямо разрешённых законом.\n\n4. Пользователь. Запрещено вмешиваться в работу приложения, обходить технические ограничения, использовать автоматизацию для нарушения работы сервиса, выдавать себя за администрацию или предпринимать действия, способные причинить вред сервису либо другим пользователям.\n\n5. VIP и промокоды. VIP-доступ предоставляется на срок, указанный в приложении. Уже активированный срок не обнуляется при последующей смене промокода. Невалидный, просроченный или отозванный код не даёт права на доступ.\n\n6. Доступность. Функции могут изменяться, обновляться, временно отключаться или прекращаться. Непрерывная доступность не гарантируется из-за технических работ, ошибок браузера, Telegram, хостинга, сети или иных сторонних систем.\n\n7. Ограничение ответственности. В максимально допустимой законом степени правообладатель не отвечает за косвенные убытки, потерю локального прогресса, недоступность сторонних сервисов или последствия использования развлекательных материалов.\n\n8. Изменения. Условия могут обновляться. Продолжение использования после публикации новой редакции означает ознакомление с ней в пределах применимого права.\n\n9. Разделимость. Недействительность отдельного положения не влияет на остальные положения.`,
  en:`1. General provisions. These terms govern access to and use of Your Destiny, including its interface, texts, stories, riddles, mechanics, visual materials and other components. By using the application, the user acknowledges these terms to the extent permitted by applicable law.\n\n2. Purpose. Your Destiny is an entertainment product. Tests, archetypes, dilemmas, results and other materials are fictional or entertainment-oriented and are not medical, psychological, legal, financial or other professional advice.\n\n3. Intellectual property. The name, code, design, texts, graphics, interface structure and original materials belong to the rights holder or are lawfully used. Copying, publishing, selling, distributing or adapting materials without permission is prohibited except where expressly permitted by law.\n\n4. User conduct. Users must not interfere with the application, bypass technical restrictions, use automation to disrupt the service, impersonate administrators or take actions that may harm the service or other users.\n\n5. VIP and promo codes. VIP access is provided for the period stated in the application. An already activated period does not reset when the promo code is later changed. Invalid, expired or revoked codes grant no access.\n\n6. Availability. Features may be changed, updated, suspended or discontinued. Continuous availability is not guaranteed because of maintenance, browser, Telegram, hosting, network or other third-party failures.\n\n7. Limitation of liability. To the maximum extent permitted by law, the rights holder is not liable for indirect losses, loss of local progress, third-party outages or consequences of using entertainment materials.\n\n8. Changes. These terms may be updated. Continued use after publication of a new version constitutes notice of the updated terms to the extent permitted by applicable law.\n\n9. Severability. If any provision is invalid, the remaining provisions remain effective.`,
  es:`1. Disposiciones generales. Estas condiciones regulan el acceso y uso de Your Destiny, incluidos su interfaz, textos, historias, acertijos, mecánicas, materiales visuales y demás componentes. Al usar la aplicación, el usuario reconoce estas condiciones dentro de los límites permitidos por la ley aplicable.\n\n2. Finalidad. Your Destiny es un producto de entretenimiento. Los tests, arquetipos, dilemas, resultados y demás materiales tienen carácter ficticio o de entretenimiento y no constituyen asesoramiento médico, psicológico, jurídico, financiero ni profesional.\n\n3. Propiedad intelectual. El nombre, código, diseño, textos, gráficos, estructura de interfaz y materiales originales pertenecen al titular de los derechos o se utilizan legalmente. Se prohíbe copiar, publicar, vender, distribuir o adaptar materiales sin autorización salvo cuando la ley lo permita expresamente.\n\n4. Conducta del usuario. No se permite interferir con la aplicación, eludir restricciones técnicas, usar automatización para alterar el servicio, hacerse pasar por administradores o causar daños al servicio o a otros usuarios.\n\n5. VIP y códigos. El acceso VIP se concede durante el período indicado. Un período ya activado no se reinicia al cambiar posteriormente el código. Los códigos inválidos, caducados o revocados no conceden acceso.\n\n6. Disponibilidad. Las funciones pueden modificarse, actualizarse, suspenderse o retirarse. No se garantiza disponibilidad continua por fallos de mantenimiento, navegador, Telegram, alojamiento, red u otros terceros.\n\n7. Responsabilidad. En la máxima medida permitida por la ley, el titular no responde por pérdidas indirectas, pérdida del progreso local, interrupciones de terceros o consecuencias del uso de materiales de entretenimiento.\n\n8. Cambios. Estas condiciones pueden actualizarse. El uso continuado tras una nueva versión implica conocimiento de los cambios.\n\n9. Separabilidad. Si una disposición es inválida, las demás conservan su vigencia.`,
  pt:`1. Disposições gerais. Estes termos regulam o acesso e utilização do Your Destiny, incluindo interface, textos, histórias, enigmas, mecânicas, materiais visuais e outros componentes. Ao utilizar a aplicação, o utilizador reconhece estes termos nos limites permitidos pela lei aplicável.\n\n2. Finalidade. Your Destiny é um produto de entretenimento. Testes, arquétipos, dilemas, resultados e outros materiais têm caráter fictício ou de entretenimento e não constituem aconselhamento médico, psicológico, jurídico, financeiro ou profissional.\n\n3. Propriedade intelectual. O nome, código, design, textos, gráficos, estrutura da interface e materiais originais pertencem ao titular dos direitos ou são utilizados legalmente. É proibido copiar, publicar, vender, distribuir ou adaptar materiais sem autorização, salvo quando permitido por lei.\n\n4. Utilizador. Não é permitido interferir com a aplicação, contornar restrições técnicas, utilizar automação para perturbar o serviço, fazer-se passar por administradores ou causar danos ao serviço ou a outros utilizadores.\n\n5. VIP e códigos promocionais. O acesso VIP é concedido pelo período indicado. Um período já ativado não é reiniciado quando o código é alterado. Códigos inválidos, expirados ou revogados não concedem acesso.\n\n6. Disponibilidade. As funções podem ser alteradas, atualizadas, suspensas ou removidas. Não é garantida disponibilidade contínua devido a manutenção, navegador, Telegram, alojamento, rede ou terceiros.\n\n7. Responsabilidade. Na máxima medida permitida pela lei, o titular não responde por perdas indiretas, perda de progresso local, interrupções de terceiros ou consequências do uso de materiais de entretenimento.\n\n8. Alterações. Estes termos podem ser atualizados. A utilização continuada após nova versão constitui conhecimento das alterações.\n\n9. Separabilidade. Se uma disposição for inválida, as restantes continuam em vigor.`,
  de:`1. Allgemeine Bestimmungen. Diese Bedingungen regeln den Zugang zu und die Nutzung von Your Destiny einschließlich Oberfläche, Texten, Geschichten, Rätseln, Mechaniken, visuellen Materialien und weiteren Bestandteilen. Mit der Nutzung erkennt der Nutzer diese Bedingungen im gesetzlich zulässigen Umfang an.\n\n2. Zweck. Your Destiny ist ein Unterhaltungsprodukt. Tests, Archetypen, Dilemmata, Ergebnisse und andere Inhalte sind fiktional oder unterhaltungsbezogen und stellen keine medizinische, psychologische, rechtliche, finanzielle oder sonstige professionelle Beratung dar.\n\n3. Geistiges Eigentum. Name, Code, Design, Texte, Grafiken, Oberflächenstruktur und Originalmaterialien gehören dem Rechteinhaber oder werden rechtmäßig genutzt. Kopieren, Veröffentlichen, Verkaufen, Verbreiten oder Bearbeiten ohne Erlaubnis ist untersagt, soweit gesetzlich nicht erlaubt.\n\n4. Nutzerverhalten. Eingriffe in die Anwendung, Umgehung technischer Beschränkungen, missbräuchliche Automatisierung, Identitätsvortäuschung oder schädliche Handlungen gegenüber Dienst und Nutzern sind untersagt.\n\n5. VIP und Promo-Codes. VIP-Zugang gilt für den angegebenen Zeitraum. Ein bereits aktivierter Zeitraum wird bei einem späteren Codewechsel nicht zurückgesetzt. Ungültige, abgelaufene oder widerrufene Codes gewähren keinen Zugang.\n\n6. Verfügbarkeit. Funktionen können geändert, aktualisiert, ausgesetzt oder eingestellt werden. Eine dauerhafte Verfügbarkeit wird wegen Wartung, Browser-, Telegram-, Hosting-, Netzwerk- oder Drittanbieterfehlern nicht garantiert.\n\n7. Haftung. Soweit gesetzlich zulässig haftet der Rechteinhaber nicht für indirekte Schäden, Verlust lokaler Fortschritte, Ausfälle Dritter oder Folgen der Nutzung von Unterhaltungsinhalten.\n\n8. Änderungen. Diese Bedingungen können aktualisiert werden. Die weitere Nutzung nach Veröffentlichung einer neuen Fassung gilt im gesetzlich zulässigen Umfang als Kenntnisnahme.\n\n9. Salvatorische Klausel. Die Unwirksamkeit einer Bestimmung lässt die übrigen Bestimmungen unberührt.`,
  fr:`1. Dispositions générales. Les présentes conditions régissent l’accès à Your Destiny et son utilisation, y compris l’interface, les textes, histoires, énigmes, mécaniques, éléments visuels et autres composants. L’utilisation vaut prise de connaissance dans les limites prévues par la loi applicable.\n\n2. Objet. Your Destiny est un produit de divertissement. Tests, archétypes, dilemmes, résultats et autres contenus sont fictifs ou destinés au divertissement et ne constituent pas un conseil médical, psychologique, juridique, financier ou professionnel.\n\n3. Propriété intellectuelle. Le nom, le code, le design, les textes, graphiques, structure de l’interface et contenus originaux appartiennent au titulaire des droits ou sont utilisés légalement. Toute copie, publication, vente, distribution ou adaptation non autorisée est interdite sauf disposition légale contraire.\n\n4. Utilisateur. Il est interdit d’interférer avec l’application, de contourner les restrictions techniques, d’utiliser une automatisation pour perturber le service, de se faire passer pour l’administration ou de causer un préjudice au service ou à ses utilisateurs.\n\n5. VIP et codes promo. L’accès VIP est accordé pour la durée indiquée. Une durée déjà activée n’est pas réinitialisée lors d’un changement ultérieur de code. Les codes invalides, expirés ou révoqués ne donnent aucun accès.\n\n6. Disponibilité. Les fonctions peuvent être modifiées, mises à jour, suspendues ou supprimées. Une disponibilité continue n’est pas garantie en cas de maintenance ou de défaillance du navigateur, de Telegram, de l’hébergement, du réseau ou de tiers.\n\n7. Responsabilité. Dans la mesure maximale permise par la loi, le titulaire n’est pas responsable des pertes indirectes, de la perte de progression locale, des interruptions de tiers ou des conséquences liées aux contenus de divertissement.\n\n8. Modifications. Les présentes conditions peuvent être mises à jour. La poursuite de l’utilisation après publication d’une nouvelle version vaut prise de connaissance dans les limites légales.\n\n9. Divisibilité. Si une disposition est invalide, les autres restent applicables.`
};
function showTerms() {
  const overlay = document.createElement('div'); overlay.className = 'fate-overlay active';
  const bodyText = LEGAL_TERMS[currentLang] || LEGAL_TERMS.en;
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container legal-card"><div class="fate-final-title">${t('termsTitle')}</div><div class="legal-text">${bodyText.split('\n\n').map((part)=>`<p>${part}</p>`).join('')}</div></div>`;
  document.body.appendChild(overlay);
}

const LEGAL_PRIVACY = {
  ru:`1. Общая информация. Your Destiny может работать внутри Telegram WebApp или в обычном браузере. Набор технических данных зависит от среды запуска и настроек платформы.\n\n2. Локальные данные. Прогресс, тема, язык, дата первого входа, VIP-состояние и настройки могут храниться в localStorage. Очистка данных браузера или смена устройства может удалить локальные данные.\n\n3. Telegram. При запуске внутри Telegram приложение может получать предоставляемый платформой технический контекст, включая language_code. Приложение не запрашивает пароль Telegram или код подтверждения.\n\n4. Сторонние сервисы. Веб-приложение может использовать Telegram WebApp API, CDN, хостинг и иные технические ресурсы, которые обрабатываются по правилам соответствующих поставщиков.\n\n5. Минимизация. Для работы Your Destiny не требуется отдельный аккаунт. Не вводите в игровые поля пароли, платёжные реквизиты, документы, приватные ключи или иные чувствительные данные.\n\n6. Безопасность. Принимаются разумные технические меры, однако абсолютная безопасность веб-сервиса не гарантируется.\n\n7. Хранение. Локальные данные хранятся до их удаления пользователем, очистки браузера или изменения логики приложения. Данные сторонних платформ регулируются их собственными политиками.\n\n8. Изменения. Политика может обновляться при изменении функций, платформ или требований законодательства.`,
  en:`1. General information. Your Destiny may run inside Telegram WebApp or in a standard browser. Available technical data depends on the launch environment and platform settings.\n\n2. Local data. Progress, theme, language, first-entry date, VIP status and settings may be stored in localStorage. Clearing browser data or changing devices may remove local data.\n\n3. Telegram. When launched inside Telegram, the application may receive platform-provided technical context, including language_code. The application does not request a Telegram password or verification code.\n\n4. Third-party services. The web app may use the Telegram WebApp API, CDN, hosting and other technical resources governed by the relevant providers’ policies.\n\n5. Data minimization. Your Destiny does not require a separate account. Do not enter passwords, payment credentials, identity documents, private keys or other sensitive data into game fields.\n\n6. Security. Reasonable technical measures may be used, but absolute web-service security cannot be guaranteed.\n\n7. Retention. Local data remains until deleted by the user, cleared by the browser or changed by the application. Third-party data is subject to their own policies.\n\n8. Changes. This policy may be updated when features, platforms or legal requirements change.`,
  es:`1. Información general. Your Destiny puede ejecutarse dentro de Telegram WebApp o en un navegador normal. Los datos técnicos disponibles dependen del entorno y de la plataforma.\n\n2. Datos locales. El progreso, tema, idioma, fecha de primera entrada, estado VIP y ajustes pueden guardarse en localStorage. Limpiar el navegador o cambiar de dispositivo puede eliminarlos.\n\n3. Telegram. Dentro de Telegram, la aplicación puede recibir contexto técnico proporcionado por la plataforma, incluido language_code. No solicita contraseñas ni códigos de Telegram.\n\n4. Servicios externos. La aplicación puede utilizar Telegram WebApp API, CDN, alojamiento y otros recursos sujetos a las políticas de sus proveedores.\n\n5. Minimización. Your Destiny no requiere una cuenta independiente. No introduzcas contraseñas, datos de pago, documentos, claves privadas ni información sensible en los campos del juego.\n\n6. Seguridad. Se pueden aplicar medidas razonables, pero no se garantiza una seguridad absoluta.\n\n7. Conservación. Los datos locales permanecen hasta que el usuario los elimina, limpia el navegador o cambia la aplicación. Los datos de terceros se rigen por sus políticas.\n\n8. Cambios. Esta política puede actualizarse cuando cambien las funciones, plataformas o requisitos legales.`,
  pt:`1. Informações gerais. O Your Destiny pode funcionar no Telegram WebApp ou num navegador normal. Os dados técnicos disponíveis dependem do ambiente e da plataforma.\n\n2. Dados locais. Progresso, tema, idioma, data da primeira entrada, estado VIP e definições podem ser guardados no localStorage. Limpar o navegador ou mudar de dispositivo pode eliminá-los.\n\n3. Telegram. Dentro do Telegram, a aplicação pode receber contexto técnico fornecido pela plataforma, incluindo language_code. Não solicita palavras-passe nem códigos do Telegram.\n\n4. Serviços externos. A aplicação pode utilizar Telegram WebApp API, CDN, alojamento e outros recursos sujeitos às políticas dos respetivos fornecedores.\n\n5. Minimização. O Your Destiny não exige uma conta separada. Não introduzas palavras-passe, dados de pagamento, documentos, chaves privadas ou outros dados sensíveis nos campos do jogo.\n\n6. Segurança. Podem ser utilizadas medidas técnicas razoáveis, mas não é garantida segurança absoluta.\n\n7. Retenção. Os dados locais permanecem até serem apagados pelo utilizador, pelo navegador ou pela aplicação. Os dados de terceiros seguem as suas próprias políticas.\n\n8. Alterações. Esta política pode ser atualizada quando mudarem funções, plataformas ou requisitos legais.`,
  de:`1. Allgemeine Informationen. Your Destiny kann in Telegram WebApp oder einem normalen Browser laufen. Verfügbare technische Daten hängen von Umgebung und Plattform ab.\n\n2. Lokale Daten. Fortschritt, Thema, Sprache, Datum des ersten Zugangs, VIP-Status und Einstellungen können in localStorage gespeichert werden. Das Löschen von Browserdaten oder ein Gerätewechsel kann sie entfernen.\n\n3. Telegram. Innerhalb von Telegram kann die Anwendung technischen Kontext der Plattform erhalten, einschließlich language_code. Telegram-Passwörter oder Bestätigungscodes werden nicht abgefragt.\n\n4. Drittanbieter. Die Anwendung kann Telegram WebApp API, CDN, Hosting und weitere Ressourcen nutzen, die den Richtlinien ihrer Anbieter unterliegen.\n\n5. Datenminimierung. Your Destiny benötigt kein separates Konto. Gib keine Passwörter, Zahlungsdaten, Dokumente, privaten Schlüssel oder andere sensible Daten in Spielfelder ein.\n\n6. Sicherheit. Angemessene technische Maßnahmen können eingesetzt werden, absolute Sicherheit wird jedoch nicht garantiert.\n\n7. Speicherung. Lokale Daten bleiben bis zur Löschung durch Nutzer, Browser oder Anwendung erhalten. Daten von Drittanbietern unterliegen deren eigenen Richtlinien.\n\n8. Änderungen. Diese Richtlinie kann bei Änderungen von Funktionen, Plattformen oder gesetzlichen Anforderungen aktualisiert werden.`,
  fr:`1. Informations générales. Your Destiny peut fonctionner dans Telegram WebApp ou dans un navigateur classique. Les données techniques disponibles dépendent de l’environnement et de la plateforme.\n\n2. Données locales. La progression, le thème, la langue, la date de première entrée, le statut VIP et les réglages peuvent être enregistrés dans localStorage. Effacer les données du navigateur ou changer d’appareil peut les supprimer.\n\n3. Telegram. Dans Telegram, l’application peut recevoir un contexte technique fourni par la plateforme, notamment language_code. Aucun mot de passe ni code de confirmation Telegram n’est demandé.\n\n4. Services tiers. L’application peut utiliser l’API Telegram WebApp, un CDN, un hébergement et d’autres ressources soumis aux politiques de leurs fournisseurs.\n\n5. Minimisation. Your Destiny ne nécessite pas de compte séparé. Ne saisis pas de mots de passe, données de paiement, documents, clés privées ou autres informations sensibles dans les champs du jeu.\n\n6. Sécurité. Des mesures techniques raisonnables peuvent être utilisées, mais une sécurité absolue ne peut être garantie.\n\n7. Conservation. Les données locales restent jusqu’à leur suppression par l’utilisateur, le navigateur ou l’application. Les données de tiers suivent leurs propres politiques.\n\n8. Modifications. Cette politique peut être mise à jour en cas de changement des fonctions, plateformes ou exigences légales.`
};
function showPrivacy() {
  const overlay = document.createElement('div'); overlay.className = 'fate-overlay active';
  const bodyText = LEGAL_PRIVACY[currentLang] || LEGAL_PRIVACY.en;
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container legal-card"><div class="fate-final-title">${t('privacyTitle')}</div><div class="legal-text">${bodyText.split('\n\n').map((part)=>`<p>${part}</p>`).join('')}</div></div>`;
  document.body.appendChild(overlay);
}

