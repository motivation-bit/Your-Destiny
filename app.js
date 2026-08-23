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
    promoHint: 'Промокод можно найти в Telegram-канале', vipStatus: 'Premium', freeVersion: 'Ограничен', vipActive: 'Доступно',
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
    promoHint: 'Find promo codes in our Telegram channel', vipStatus: 'Premium', freeVersion: 'Restricted', vipActive: 'Available',
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
    promoHint: 'Encuentra códigos en nuestro canal de Telegram', vipStatus: 'Premium', freeVersion: 'Restringido', vipActive: 'Disponible',
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
  vipStatus:'Premium', freeVersion:'Limitado', vipActive:'Disponível', timeLeft:'Restante', days:'d', hours:'h', minutes:'min', timeCapsule:'Cápsula do Tempo', rateApp:'Avaliar aplicação', storySchedule:'Calendário de Histórias',
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
  music:'Musik', theme:'Themenfarbe', language:'Sprache', promo:'Promo-Code', activate:'Aktivieren', promoPlaceholder:'Promo-Code eingeben...', promoHint:'Promo-Codes findest du im Telegram-Kanal', vipStatus:'Premium', freeVersion:'Eingeschränkt', vipActive:'Verfügbar', timeLeft:'Verbleibend', days:'T', hours:'Std.', minutes:'Min.', timeCapsule:'Zeitkapsel', rateApp:'App bewerten', storySchedule:'Geschichtenplan',
  supportAuthor:'Autor unterstützen', becomeAuthor:'Autor werden', wisdom:'Weisheit des Schicksals', chronicles:'Chroniken des Schicksals', labyrinth:'Labyrinth der Rätsel', trueDestiny:'Was ist dein wahres Schicksal?', about:'Über das Spiel', terms:'Nutzungsbedingungen', privacy:'Datenschutzerklärung', community:'Community-Kanal', back:'Zurück', close:'Schließen', continue:'Weiter', restart:'Neu beginnen', exit:'Zum Menü', pause:'Pause', lockTitle:'VIP erforderlich', lockText:'Du hast 2 kostenlose Kapitel abgeschlossen. Aktiviere VIP für alle Kapitel.', goToChannel:'Zum Kanal', enterPromo:'Promo-Code eingeben', toMenu:'Zum Menü', wallet:'Unterstützungs-Wallet', copy:'Kopieren', copied:'Kopiert', soon:'Bald', thanks:'Danke', wisdomClose:'Weiter', destinyStart:'Vorhersage starten', destinyRestart:'Neu starten',
  riddleEnter:'Labyrinth betreten', riddleReady:'Bereit? Das Labyrinth wartet.', riddleRules1:'Eines nach dem anderen: Jedes Rätsel wird nach der vorherigen Antwort freigeschaltet.', riddleRules2:'Nimm dir Zeit und denke in Ruhe nach.', riddleRules3:'Hilfe: zwei Hinweise. Sie geben nur eine Denkrichtung vor.', lookAnswer:'Antwort anzeigen', answerConfirm:'Möchtest du die Antwort wirklich anzeigen?', backToRiddle:'Zurück zum Rätsel', yesOpen:'Ja, anzeigen', goFurther:'Weiter', riddleComplete:'Glückwunsch', riddleCompleteText:'Du hast das Rätsellabyrinth gemeistert!', fateComplete:'Chroniken abgeschlossen', fateCompleteText:'Alle Dilemmata wurden abgeschlossen. Neue erscheinen mit Updates.',
  aboutText1:'Your Destiny ist ein interaktiver Raum aus Geschichten, Entscheidungen, Rätseln und Reflexionen über das Schicksal.', aboutText2:'Geschichten, in denen deine Entscheidungen unterschiedliche Wege eröffnen.', aboutText3:'Chroniken des Schicksals — Dilemmata, die schwierige Entscheidungen stellen.', aboutText4:'Rätsellabyrinth — logische Herausforderungen mit steigender Schwierigkeit.', aboutText5:'Wahres Schicksal — ein Archetypen-Test, der deine Entscheidungen auswertet.', aboutText6:'Weisheit des Schicksals — Gedanken zum Innehalten, Beobachten und Weitergehen.', termsTitle:'Nutzungsbedingungen', privacyTitle:'Datenschutzerklärung', stepIntoUnknown:'Ins Unbekannte...', next:'Weiter', hint:'Hinweis', hintUsed:'Verwendet', destinyResultTitle:'Dein wahres Schicksal', destinyResultDesc:'Archetyp enthüllt', destinyRestartBtn:'Neu starten', empty:'Derzeit leer...'
};
T.fr = {
  ...T.en,
  novels:'Romans', surveys:'Questionnaires', contacts:'Contacts', favorites:'Favoris', settings:'Paramètres', loading:'Chargement des histoires...', emptyNovels:'Les histoires arriveront bientôt...', emptySurveys:'Questionnaires en développement...', emptyContacts:'Contacts en développement...', emptyFavorites:'Tes moments précieux apparaîtront ici...',
  music:'Musique', theme:'Couleur du thème', language:'Langue', promo:'Code promo', activate:'Activer', promoPlaceholder:'Entrer le code promo...', promoHint:'Les codes promo sont disponibles sur notre canal Telegram', vipStatus:'Premium', freeVersion:'Limité', vipActive:'Disponible', timeLeft:'Restant', days:'j', hours:'h', minutes:'min', timeCapsule:'Capsule temporelle', rateApp:"Évaluer l’application", storySchedule:'Calendrier des histoires',
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
  vipStatus:'Premium', freeVersion:'Limitado', vipActive:'Disponível', timeLeft:'Restante', days:'d', hours:'h', minutes:'min', timeCapsule:'Cápsula do Tempo', rateApp:'Avaliar aplicação', storySchedule:'Calendário de Histórias',
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
  music:'Musik', theme:'Themenfarbe', language:'Sprache', promo:'Promo-Code', activate:'Aktivieren', promoPlaceholder:'Promo-Code eingeben...', promoHint:'Promo-Codes findest du im Telegram-Kanal', vipStatus:'Premium', freeVersion:'Eingeschränkt', vipActive:'Verfügbar', timeLeft:'Verbleibend', days:'T', hours:'Std.', minutes:'Min.', timeCapsule:'Zeitkapsel', rateApp:'App bewerten', storySchedule:'Geschichtenplan',
  supportAuthor:'Autor unterstützen', becomeAuthor:'Autor werden', wisdom:'Weisheit des Schicksals', chronicles:'Chroniken des Schicksals', labyrinth:'Labyrinth der Rätsel', trueDestiny:'Was ist dein wahres Schicksal?', about:'Über das Spiel', terms:'Nutzungsbedingungen', privacy:'Datenschutzerklärung', community:'Community-Kanal', back:'Zurück', close:'Schließen', continue:'Weiter', restart:'Neu beginnen', exit:'Zum Menü', pause:'Pause', lockTitle:'VIP erforderlich', lockText:'Du hast 2 kostenlose Kapitel abgeschlossen. Aktiviere VIP für alle Kapitel.', goToChannel:'Zum Kanal', enterPromo:'Promo-Code eingeben', toMenu:'Zum Menü', wallet:'Unterstützungs-Wallet', copy:'Kopieren', copied:'Kopiert', soon:'Bald', thanks:'Danke', wisdomClose:'Weiter', destinyStart:'Vorhersage starten', destinyRestart:'Neu starten',
  riddleEnter:'Labyrinth betreten', riddleReady:'Bereit? Das Labyrinth wartet.', riddleRules1:'Eines nach dem anderen: Jedes Rätsel wird nach der vorherigen Antwort freigeschaltet.', riddleRules2:'Nimm dir Zeit und denke in Ruhe nach.', riddleRules3:'Hilfe: zwei Hinweise. Sie geben nur eine Denkrichtung vor.', lookAnswer:'Antwort anzeigen', answerConfirm:'Möchtest du die Antwort wirklich anzeigen?', backToRiddle:'Zurück zum Rätsel', yesOpen:'Ja, anzeigen', goFurther:'Weiter', riddleComplete:'Glückwunsch', riddleCompleteText:'Du hast das Rätsellabyrinth gemeistert!', fateComplete:'Chroniken abgeschlossen', fateCompleteText:'Alle Dilemmata wurden abgeschlossen. Neue erscheinen mit Updates.',
  aboutText1:'Your Destiny ist ein interaktiver Raum aus Geschichten, Entscheidungen, Rätseln und Reflexionen über das Schicksal.', aboutText2:'Geschichten, in denen deine Entscheidungen unterschiedliche Wege eröffnen.', aboutText3:'Chroniken des Schicksals — Dilemmata, die schwierige Entscheidungen stellen.', aboutText4:'Rätsellabyrinth — logische Herausforderungen mit steigender Schwierigkeit.', aboutText5:'Wahres Schicksal — ein Archetypen-Test, der deine Entscheidungen auswertet.', aboutText6:'Weisheit des Schicksals — Gedanken zum Innehalten, Beobachten und Weitergehen.', termsTitle:'Nutzungsbedingungen', privacyTitle:'Datenschutzerklärung', stepIntoUnknown:'Ins Unbekannte...', next:'Weiter', hint:'Hinweis', hintUsed:'Verwendet', destinyResultTitle:'Dein wahres Schicksal', destinyResultDesc:'Archetyp enthüllt', destinyRestartBtn:'Neu starten', empty:'Derzeit leer...'
};
T.fr = {
  ...T.en,
  novels:'Romans', surveys:'Questionnaires', contacts:'Contacts', favorites:'Favoris', settings:'Paramètres', loading:'Chargement des histoires...', emptyNovels:'Les histoires arriveront bientôt...', emptySurveys:'Questionnaires en développement...', emptyContacts:'Contacts en développement...', emptyFavorites:'Tes moments précieux apparaîtront ici...',
  music:'Musique', theme:'Couleur du thème', language:'Langue', promo:'Code promo', activate:'Activer', promoPlaceholder:'Entrer le code promo...', promoHint:'Les codes promo sont disponibles sur notre canal Telegram', vipStatus:'Premium', freeVersion:'Limité', vipActive:'Disponible', timeLeft:'Restant', days:'j', hours:'h', minutes:'min', timeCapsule:'Capsule temporelle', rateApp:"Évaluer l’application", storySchedule:'Calendrier des histoires',
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
Object.assign(T.ru,{promoHint:'Актуальные промокоды — в нашем Telegram-канале.',premiumAvailable:'Доступно',premiumRestricted:'Ограничен'});
Object.assign(T.en,{promoHint:'Current promo codes are in our Telegram channel.',premiumAvailable:'Available',premiumRestricted:'Restricted'});
Object.assign(T.es,{promoHint:'Códigos promocionales actuales — en nuestro canal de Telegram.',premiumAvailable:'Disponible',premiumRestricted:'Restringido'});
Object.assign(T.pt,{promoHint:'Códigos promocionais atuais — no nosso canal do Telegram.',premiumAvailable:'Disponível',premiumRestricted:'Limitado'});
Object.assign(T.de,{promoHint:'Aktuelle Promo-Codes gibt es in unserem Telegram-Kanal.',premiumAvailable:'Verfügbar',premiumRestricted:'Eingeschränkt'});
Object.assign(T.fr,{promoHint:'Les codes promo actuels sont sur notre canal Telegram.',premiumAvailable:'Disponible',premiumRestricted:'Limité'});
Object.assign(T.ru,{authorDesc:'Если хочешь оживить собственную историю, здесь можно передать её Your Destiny. Прочитай условия ниже: после принятия материала проект получает права на его использование и развитие. Если условия подходят — продолжай.'});
Object.assign(T.en,{authorDesc:'If you want to bring your own story to life, you can submit it to Your Destiny here. Read the terms below: once accepted, the project receives the rights needed to use and develop the material. If you agree, continue.'});
Object.assign(T.es,{authorDesc:'Si quieres dar vida a tu propia historia, puedes enviarla a Your Destiny aquí. Lee las condiciones: una vez aceptado el material, el proyecto recibe los derechos necesarios para utilizarlo y desarrollarlo. Si estás de acuerdo, continúa.'});
Object.assign(T.pt,{authorDesc:'Se quiseres dar vida à tua própria história, podes enviá-la para o Your Destiny aqui. Lê as condições: depois de o material ser aceite, o projeto recebe os direitos necessários para o utilizar e desenvolver. Se concordares, continua.'});
Object.assign(T.de,{authorDesc:'Wenn du deine eigene Geschichte zum Leben erwecken möchtest, kannst du sie hier an Your Destiny senden. Lies die Bedingungen: Nach Annahme erhält das Projekt die erforderlichen Rechte zur Nutzung und Weiterentwicklung. Wenn du zustimmst, fahre fort.'});
Object.assign(T.fr,{authorDesc:'Si vous souhaitez donner vie à votre propre histoire, vous pouvez l’envoyer ici à Your Destiny. Lisez les conditions : après acceptation, le projet reçoit les droits nécessaires pour utiliser et développer le contenu. Si vous acceptez, continuez.'});

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
  if (el) { const d=new Date(firstVisit); el.textContent=d.toLocaleString(DATE_LOCALES[currentLang]||'en-GB',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}); }
}

function showTimeCapsule() {
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
      <div class="capsule-text">${texts[currentLang] || texts.en}</div>
      <div class="capsule-date">${datePart}</div>
      <div class="capsule-time">${timePart}</div>
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
  const storedTheme = localStorage.getItem('theme');
  const savedTheme = (storedTheme && storedTheme !== 'kaleidoscope' && THEMES.some(x => x.id === storedTheme)) ? storedTheme : 'purple';
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
  container.innerHTML = THEMES.filter(th => th.id !== 'kaleidoscope').map(th => `
    <button class="color-option ${th.id === currentTheme ? 'active' : ''} theme-${th.id}" data-theme="${th.id}" aria-label="${loc(th.name)}" onclick="event.stopPropagation();setTheme('${th.id}')" style="--swatch:${th.swatch}"><span></span></button>
  `).join('');
}

function toggleLanguagePicker() {
  const panel = document.getElementById('language-picker-panel');
  if (!panel) return;
  panel.classList.toggle('open');
}
function toggleThemePicker() {
  // Theme choices are intentionally always visible; this function is kept for compatibility.
  document.getElementById('theme-picker-panel')?.classList.add('open');
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
  const languagePanelTitle=document.getElementById('language-panel-title'); if(languagePanelTitle) languagePanelTitle.textContent=(T[currentLang]?.language||'Language');
  const promoHint=document.getElementById('promo-hint'); if(promoHint){ const text=t('promoHint'); const parts=text.split('Telegram'); promoHint.innerHTML=parts.length>1 ? `${parts[0]}<a href="${CHANNEL_URL}" target="_blank" rel="noopener">Telegram${parts.slice(1).join('Telegram')}</a>` : text; }
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
    vipStatus.textContent = t('premiumAvailable');
    vipStatus.classList.add('premium-status');
    if (time) vipDays.textContent = `${t('timeLeft')}: ${time.d}${t('days')} ${time.h}${t('hours')} ${time.m}${t('minutes')}`;
    if (promoSection) promoSection.style.display = 'none';
  } else {
    vipStatus.textContent = t('premiumRestricted');
    vipStatus.classList.remove('premium-status');
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
  const overlay=document.createElement('div');
  overlay.className='fate-overlay active';
  const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en;
  const saved=Number(localStorage.getItem('your_destiny_rating')||0);
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
    <div class="rating-card ${saved ? 'has-rating' : 'compact'}" id="rating-card">
      <div class="rating-title">${texts.title}</div>
      <div class="rating-stars" role="radiogroup" aria-label="${texts.title}">${[1,2,3,4,5].map(i=>`<button class="rating-star ${i<=saved?'selected':''}" data-rating="${i}" aria-label="${i}" onclick="selectRating(${i})"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.7l2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.27l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.7z"/></svg></button>`).join('')}</div>
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

function showStorySchedule() {
  const overlay=document.createElement('div'); overlay.className='fate-overlay active';
  const copy={
    ru:{title:'Расписание Историй',lead:'Грядущие миры, синопсисы будущих историй и точные даты релизов новых глав Your Destiny.',note:'Следи за обновлениями — новые истории будут открываться постепенно.'},
    en:{title:'Story Schedule',lead:'Upcoming worlds, synopses of future stories and exact release dates for new Your Destiny chapters.',note:'Stay tuned — new stories will open gradually.'},
    es:{title:'Calendario de Historias',lead:'Mundos próximos, sinopsis de futuras historias y fechas exactas de lanzamiento de nuevos capítulos de Your Destiny.',note:'Sigue las novedades: las nuevas historias se abrirán gradualmente.'},
    pt:{title:'Calendário de Histórias',lead:'Mundos futuros, sinopses das próximas histórias e datas exatas de lançamento dos novos capítulos de Your Destiny.',note:'Acompanha as novidades — novas histórias serão abertas gradualmente.'},
    de:{title:'Geschichtenplan',lead:'Kommende Welten, Zusammenfassungen zukünftiger Geschichten und genaue Veröffentlichungstermine neuer Your-Destiny-Kapitel.',note:'Bleib dabei — neue Geschichten werden nach und nach geöffnet.'},
    fr:{title:'Calendrier des histoires',lead:'Mondes à venir, synopsis des futures histoires et dates exactes de sortie des nouveaux chapitres de Your Destiny.',note:'Restez à l’écoute — les nouvelles histoires seront dévoilées progressivement.'}
  };
  const c=copy[currentLang]||copy.en;
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button>
  <div class="schedule-card"><div class="schedule-title">${c.title}</div><div class="schedule-divider"></div><div class="schedule-lead">${c.lead}</div><div class="schedule-note">${c.note}</div></div>`;
  document.body.appendChild(overlay);
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
      <div class="author-title">${({ru:'Поддержать проект',en:'Support the project',es:'Apoyar el proyecto',pt:'Apoiar o projeto',de:'Projekt unterstützen',fr:'Soutenir le projet'})[currentLang]}</div>
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
    ru:'Отправляя материал в Your Destiny, вы подтверждаете, что имеете необходимые права на его передачу. Если материал принят, вы безвозмездно и без ограничения территории передаёте Your Destiny исключительные имущественные права на материал в максимально полном объёме, допускаемом законом, включая право воспроизводить, изменять, сокращать, дополнять, перерабатывать, адаптировать, переводить, объединять с другими материалами, публиковать, распространять, размещать, лицензировать и монетизировать его любым способом. Вы соглашаетесь, что после передачи не сохраняете имущественных требований к Your Destiny в отношении принятого материала и не вправе требовать его удаления, прекращения использования, запрета переработки, дополнительной оплаты, роялти, доли дохода или обязательного указания имени, кроме прав и ограничений, от которых нельзя отказаться по императивному законодательству. Передача не является обещанием публикации: проект самостоятельно решает, использовать материал или нет, в каком виде, когда и где. Вы также гарантируете отсутствие нарушений прав третьих лиц и самостоятельно отвечаете за связанные с этим претензии. Нажимая «Продолжить», вы подтверждаете, что прочитали и принимаете эти условия.',
    en:'By submitting material to Your Destiny, you confirm that you hold the rights required to submit it. If the material is accepted, you grant Your Destiny, without compensation and without territorial limitation, the exclusive economic rights to the material to the fullest extent permitted by law, including the rights to reproduce, edit, shorten, expand, adapt, translate, combine, publish, distribute, display, license and monetize it in any manner. After the transfer, you agree not to assert economic claims against Your Destiny concerning the accepted material and not to demand its removal, cessation of use, prohibition of adaptation, additional payment, royalties, revenue share or mandatory attribution, except for rights or limits that cannot legally be waived. Submission does not promise publication: the project decides whether, when, where and in what form the material is used. You also warrant that the material does not infringe third-party rights and accept responsibility for related claims. By pressing “Continue”, you confirm that you have read and accepted these terms.',
    es:'Al enviar material a Your Destiny, confirmas que tienes los derechos necesarios para entregarlo. Si el material es aceptado, concedes a Your Destiny, sin remuneración y sin limitación territorial, los derechos patrimoniales exclusivos sobre el material en la máxima medida permitida por la ley, incluidos reproducir, editar, reducir, ampliar, adaptar, traducir, combinar, publicar, distribuir, mostrar, licenciar y monetizar el material. Tras la cesión, aceptas no reclamar derechos económicos frente a Your Destiny sobre el material aceptado ni exigir su retirada, cese de uso, prohibición de adaptación, pago adicional, regalías, participación en ingresos o atribución obligatoria, salvo derechos irrenunciables por ley. El envío no garantiza publicación: el proyecto decide si, cuándo, dónde y en qué forma utilizará el material. Garantizas además que no infringe derechos de terceros y asumes las reclamaciones relacionadas. Al pulsar «Continuar», confirmas que has leído y aceptas estas condiciones.',
    pt:'Ao enviar material para o Your Destiny, confirmas que tens os direitos necessários para o entregar. Se o material for aceite, concedes ao Your Destiny, sem remuneração e sem limitação territorial, os direitos patrimoniais exclusivos sobre o material na máxima medida permitida pela lei, incluindo reproduzir, editar, reduzir, ampliar, adaptar, traduzir, combinar, publicar, distribuir, exibir, licenciar e monetizar o material. Após a cessão, concordas em não apresentar reivindicações económicas contra o Your Destiny relativamente ao material aceite nem exigir remoção, cessação de utilização, proibição de adaptação, pagamento adicional, royalties, participação em receitas ou atribuição obrigatória, salvo direitos que a lei não permita renunciar. O envio não garante publicação: o projeto decide se, quando, onde e de que forma o material será utilizado. Garantires ainda que não viola direitos de terceiros e assumes as reclamações relacionadas. Ao premir «Continuar», confirmas que leste e aceitas estas condições.',
    de:'Mit der Einreichung von Material bei Your Destiny bestätigst du, dass du über die erforderlichen Rechte zur Übermittlung verfügst. Wird das Material angenommen, räumst du Your Destiny unentgeltlich und ohne territoriale Beschränkung die ausschließlichen vermögensrechtlichen Rechte daran im gesetzlich zulässigen Umfang ein, einschließlich Vervielfältigung, Bearbeitung, Kürzung, Erweiterung, Anpassung, Übersetzung, Verbindung mit anderen Materialien, Veröffentlichung, Verbreitung, Darstellung, Lizenzierung und Monetarisierung. Nach der Übertragung verpflichtest du dich, keine vermögensrechtlichen Ansprüche gegen Your Destiny bezüglich des angenommenen Materials geltend zu machen und keine Entfernung, Nutzungsbeendigung, Untersagung der Bearbeitung, zusätzliche Zahlung, Tantiemen, Umsatzbeteiligung oder verpflichtende Namensnennung zu verlangen, soweit ein Verzicht gesetzlich zulässig ist. Die Einreichung garantiert keine Veröffentlichung: Das Projekt entscheidet selbst, ob, wann, wo und in welcher Form das Material verwendet wird. Du garantierst außerdem, dass keine Rechte Dritter verletzt werden, und übernimmst entsprechende Ansprüche. Mit «Weiter» bestätigst du, diese Bedingungen gelesen und akzeptiert zu haben.',
    fr:'En envoyant un contenu à Your Destiny, vous confirmez disposer des droits nécessaires à sa transmission. Si le contenu est accepté, vous accordez à Your Destiny, sans rémunération et sans limitation territoriale, les droits patrimoniaux exclusifs sur ce contenu dans la mesure maximale permise par la loi, notamment pour le reproduire, le modifier, le réduire, l’étendre, l’adapter, le traduire, le combiner, le publier, le distribuer, l’afficher, le concéder sous licence et le monétiser. Après la cession, vous acceptez de ne pas formuler de revendication patrimoniale contre Your Destiny concernant le contenu accepté ni d’exiger son retrait, la cessation de son utilisation, l’interdiction de son adaptation, un paiement supplémentaire, des redevances, une part des revenus ou une attribution obligatoire, sauf pour les droits auxquels la loi interdit de renoncer. L’envoi ne garantit pas la publication : le projet décide librement si, quand, où et sous quelle forme le contenu est utilisé. Vous garantissez également l’absence d’atteinte aux droits de tiers et assumez les réclamations correspondantes. En appuyant sur « Continuer », vous confirmez avoir lu et accepté ces conditions.'
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
  overlay.innerHTML = `<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><button class="author-back-check" onclick="this.closest('.fate-overlay').remove();showBecomeAuthor()" aria-label="Back">✓</button><div class="author-card legal-confirm-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-legal-text">${text[currentLang]||text.en}</div><a class="author-channel-btn" href="${DIRECT_URL}" target="_blank" rel="noopener">${yes[currentLang]||yes.en}</a></div>`;
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
const FATE_DILEMMAS_UNIQUE_100 = [{"question":{"ru":"Тебе предлагают работу мечты, но переезд неизбежен. Что перевесит при решении?","en":"You are offered your dream job, but moving is unavoidable. What matters most in your decision?"},"a":{"ru":"Карьерный рост","en":"Карьерный рост"},"b":{"ru":"Стабильность привычной жизни","en":"Стабильность привычной жизни"},"c":{"ru":"Возможность начать всё заново","en":"Возможность начать всё заново"},"stats":{"a":37,"b":31,"c":32},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если член семьи попросит о помощи в день, когда у тебя уже всё расписано?","en":"What would you do if a family member asked for help on a day when your schedule was already full?"},"a":{"ru":"Перенесу часть своих дел","en":"Перенесу часть своих дел"},"b":{"ru":"Попрошу помочь найти другой вариант","en":"Попрошу помочь найти другой вариант"},"c":{"ru":"Помогу, даже если придётся отказаться от планов","en":"Помогу, даже если придётся отказаться от планов"},"stats":{"a":44,"b":36,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Друг признался, что совершил серьёзную ошибку. Что ты сделаешь первым?","en":"A friend admits making a serious mistake. What do you do first?"},"a":{"ru":"Спокойно выслушаю","en":"Спокойно выслушаю"},"b":{"ru":"Сразу предложу решение","en":"Сразу предложу решение"},"c":{"ru":"Спрошу, чего он ждёт от меня","en":"Спрошу, чего он ждёт от меня"},"stats":{"a":51,"b":29,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты получил неожиданную крупную сумму денег. На что потратишь её в первую очередь?","en":"You receive an unexpected large sum of money. What do you spend it on first?"},"a":{"ru":"Закрою важные расходы","en":"Закрою важные расходы"},"b":{"ru":"Отложу большую часть","en":"Отложу большую часть"},"c":{"ru":"Куплю то, о чём давно мечтал","en":"Куплю то, о чём давно мечтал"},"stats":{"a":58,"b":22,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Твой близкий человек выбирает путь, который тебе кажется ошибочным. Как поступишь?","en":"Someone close to you chooses a path you think is wrong. What do you do?"},"a":{"ru":"Объясню свои опасения","en":"Объясню свои опасения"},"b":{"ru":"Дам ему самому принять решение","en":"Дам ему самому принять решение"},"c":{"ru":"Постараюсь показать последствия на примере","en":"Постараюсь показать последствия на примере"},"stats":{"a":40,"b":40,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"В компании обсуждают человека, которого нет рядом. Ты замечаешь, что разговор становится неприятным. Что сделаешь?","en":"People are discussing someone who is absent, and the conversation turns unpleasant. What do you do?"},"a":{"ru":"Переведу разговор","en":"Переведу разговор"},"b":{"ru":"Скажу, что это несправедливо","en":"Скажу, что это несправедливо"},"c":{"ru":"Останусь нейтральным","en":"Останусь нейтральным"},"stats":{"a":47,"b":33,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты обещал себе отдохнуть, но появляется срочная возможность заработать. Что выберешь?","en":"You promised yourself a day off, but an urgent opportunity to earn money appears. What do you choose?"},"a":{"ru":"Останусь отдыхать","en":"Останусь отдыхать"},"b":{"ru":"Возьмусь за возможность","en":"Возьмусь за возможность"},"c":{"ru":"Попробую совместить оба варианта","en":"Попробую совместить оба варианта"},"stats":{"a":54,"b":26,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты реагируешь, когда твой план неожиданно рушится утром?","en":"How do you react when your plan suddenly falls apart in the morning?"},"a":{"ru":"Быстро строю новый план","en":"Быстро строю новый план"},"b":{"ru":"Делаю только самое необходимое","en":"Делаю только самое необходимое"},"c":{"ru":"Сначала беру паузу и успокаиваюсь","en":"Сначала беру паузу и успокаиваюсь"},"stats":{"a":61,"b":19,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно выбрать квартиру: дороже, но ближе к центру, или дешевле, но дальше. Что важнее?","en":"You must choose between a more expensive central apartment and a cheaper one farther away. What matters more?"},"a":{"ru":"Экономия","en":"Экономия"},"b":{"ru":"Удобство каждый день","en":"Удобство каждый день"},"c":{"ru":"Перспектива района","en":"Перспектива района"},"stats":{"a":43,"b":32,"c":25},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты видишь, что коллега присвоил себе результат твоей работы. Что сделаешь?","en":"You notice a colleague taking credit for your work. What do you do?"},"a":{"ru":"Спокойно обозначу свой вклад","en":"Спокойно обозначу свой вклад"},"b":{"ru":"Сначала поговорю с ним лично","en":"Сначала поговорю с ним лично"},"c":{"ru":"Сразу обращусь к руководителю","en":"Сразу обращусь к руководителю"},"stats":{"a":50,"b":30,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если тебе не ответили на важное сообщение весь день?","en":"What do you do when an important message gets no reply all day?"},"a":{"ru":"Напишу ещё раз","en":"Напишу ещё раз"},"b":{"ru":"Подожду до завтра","en":"Подожду до завтра"},"c":{"ru":"Позвоню, если вопрос срочный","en":"Позвоню, если вопрос срочный"},"stats":{"a":57,"b":23,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают дружбу после конфликта, но доверие ещё не восстановилось. Что выберешь?","en":"Someone offers friendship after a conflict, but trust has not returned. What do you choose?"},"a":{"ru":"Дам шанс постепенно","en":"Дам шанс постепенно"},"b":{"ru":"Сначала потребую честного разговора","en":"Сначала потребую честного разговора"},"c":{"ru":"Оставлю отношения в прошлом","en":"Оставлю отношения в прошлом"},"stats":{"a":39,"b":36,"c":25},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если ребёнок спрашивает тебя о том, чего ты сам не знаешь, что скажешь?","en":"If a child asks you something you do not know, what do you say?"},"a":{"ru":"Честно признаюсь","en":"Честно признаюсь"},"b":{"ru":"Предложу найти ответ вместе","en":"Предложу найти ответ вместе"},"c":{"ru":"Скажу, что узнаю позже","en":"Скажу, что узнаю позже"},"stats":{"a":46,"b":34,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе дают один свободный месяц без обязательств. Как используешь его?","en":"You get one free month with no obligations. How do you use it?"},"a":{"ru":"Путешествую","en":"Путешествую"},"b":{"ru":"Учусь чему-то новому","en":"Учусь чему-то новому"},"c":{"ru":"Отдыхаю и восстанавливаюсь","en":"Отдыхаю и восстанавливаюсь"},"stats":{"a":53,"b":27,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты узнаёшь, что твой старый знакомый добился большого успеха. Что чувствуешь первым?","en":"You learn that an old acquaintance achieved great success. What do you feel first?"},"a":{"ru":"Искреннюю радость","en":"Искреннюю радость"},"b":{"ru":"Мотивацию сравнить себя с ним","en":"Мотивацию сравнить себя с ним"},"c":{"ru":"Любопытство к его пути","en":"Любопытство к его пути"},"stats":{"a":60,"b":20,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"В споре ты понимаешь, что твоя позиция слабее. Как поступишь?","en":"During an argument you realize your position is weaker. What do you do?"},"a":{"ru":"Признаю это","en":"Признаю это"},"b":{"ru":"Попробую найти компромисс","en":"Попробую найти компромисс"},"c":{"ru":"Продолжу спорить до новых аргументов","en":"Продолжу спорить до новых аргументов"},"stats":{"a":42,"b":38,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты можешь изменить одну вещь в своём распорядке. Что выберешь?","en":"You can change one thing in your daily routine. What do you choose?"},"a":{"ru":"Больше сна","en":"Больше сна"},"b":{"ru":"Больше времени на важные цели","en":"Больше времени на важные цели"},"c":{"ru":"Меньше бесполезных дел","en":"Меньше бесполезных дел"},"stats":{"a":49,"b":31,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты относишься к человеку, который редко проявляет эмоции?","en":"How do you view someone who rarely shows emotions?"},"a":{"ru":"Не делаю выводов","en":"Не делаю выводов"},"b":{"ru":"Пытаюсь понять его характер","en":"Пытаюсь понять его характер"},"c":{"ru":"Держу дистанцию, пока не узнаю его лучше","en":"Держу дистанцию, пока не узнаю его лучше"},"stats":{"a":56,"b":24,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе поручили дело без чётких инструкций. Что сделаешь?","en":"You are given a task with no clear instructions. What do you do?"},"a":{"ru":"Уточню ожидания","en":"Уточню ожидания"},"b":{"ru":"Начну и скорректирую по ходу","en":"Начну и скорректирую по ходу"},"c":{"ru":"Сам составлю план","en":"Сам составлю план"},"stats":{"a":38,"b":42,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если твой друг переезжает далеко, что для тебя важнее сохранить?","en":"If your friend moves far away, what matters most to preserve?"},"a":{"ru":"Регулярное общение","en":"Регулярное общение"},"b":{"ru":"Общие традиции","en":"Общие традиции"},"c":{"ru":"Готовность встретиться при возможности","en":"Готовность встретиться при возможности"},"stats":{"a":45,"b":35,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты нашёл старую фотографию человека, с которым давно не общаешься. Что сделаешь?","en":"You find an old photo of someone you no longer talk to. What do you do?"},"a":{"ru":"Оставлю её себе","en":"Оставлю её себе"},"b":{"ru":"Напишу этому человеку","en":"Напишу этому человеку"},"c":{"ru":"Просто улыбнусь воспоминанию","en":"Просто улыбнусь воспоминанию"},"stats":{"a":52,"b":28,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Какой подарок тебе приятнее получить от близкого человека?","en":"Which gift is more meaningful to receive from someone close?"},"a":{"ru":"Полезный","en":"Полезный"},"b":{"ru":"Сделанный специально для меня","en":"Сделанный специально для меня"},"c":{"ru":"Связанный с общим воспоминанием","en":"Связанный с общим воспоминанием"},"stats":{"a":59,"b":21,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты опоздал на встречу по своей вине. Как поступишь?","en":"You are late to a meeting because of your own mistake. What do you do?"},"a":{"ru":"Сразу извинюсь","en":"Сразу извинюсь"},"b":{"ru":"Коротко объясню причину","en":"Коротко объясню причину"},"c":{"ru":"Предложу компенсировать неудобство","en":"Предложу компенсировать неудобство"},"stats":{"a":41,"b":39,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно провести день без телефона. Что будет самым сложным?","en":"You have to spend a day without your phone. What would be hardest?"},"a":{"ru":"Не проверять сообщения","en":"Не проверять сообщения"},"b":{"ru":"Не пользоваться картами и сервисами","en":"Не пользоваться картами и сервисами"},"c":{"ru":"Не отвлекаться привычным способом","en":"Не отвлекаться привычным способом"},"stats":{"a":48,"b":32,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если сосед попросит присмотреть за его питомцем, но ты не уверен в своих силах?","en":"If a neighbor asks you to look after a pet but you are unsure you can handle it?"},"a":{"ru":"Честно откажусь","en":"Честно откажусь"},"b":{"ru":"Попробую помочь с инструкциями","en":"Попробую помочь с инструкциями"},"c":{"ru":"Предложу найти другого человека","en":"Предложу найти другого человека"},"stats":{"a":55,"b":25,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты выбираешь ресторан в новом городе?","en":"How do you choose a restaurant in a new city?"},"a":{"ru":"По отзывам","en":"По отзывам"},"b":{"ru":"По атмосфере и виду","en":"По атмосфере и виду"},"c":{"ru":"Спрашиваю местных","en":"Спрашиваю местных"},"stats":{"a":37,"b":43,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты заметил ошибку в счёте магазина в свою пользу. Что сделаешь?","en":"You notice a checkout error that benefits you. What do you do?"},"a":{"ru":"Сообщу кассиру","en":"Сообщу кассиру"},"b":{"ru":"Проверю чек ещё раз","en":"Проверю чек ещё раз"},"c":{"ru":"Исправлю ошибку, даже если это неудобно","en":"Исправлю ошибку, даже если это неудобно"},"stats":{"a":44,"b":36,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают выступить перед большой аудиторией. Что сильнее всего влияет на решение?","en":"You are asked to speak before a large audience. What affects your decision most?"},"a":{"ru":"Интерес к теме","en":"Интерес к теме"},"b":{"ru":"Страх оценки","en":"Страх оценки"},"c":{"ru":"Возможность попробовать себя","en":"Возможность попробовать себя"},"stats":{"a":51,"b":29,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты реагируешь на человека, который постоянно перебивает?","en":"How do you react to someone who constantly interrupts?"},"a":{"ru":"Спокойно остановлю его","en":"Спокойно остановлю его"},"b":{"ru":"Дам договорить и продолжу","en":"Дам договорить и продолжу"},"c":{"ru":"Сменю формат разговора","en":"Сменю формат разговора"},"stats":{"a":58,"b":22,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если тебе нужно научиться новому навыку за неделю, как начнёшь?","en":"If you need to learn a new skill in a week, how do you start?"},"a":{"ru":"Составлю программу","en":"Составлю программу"},"b":{"ru":"Сразу начну практиковаться","en":"Сразу начну практиковаться"},"c":{"ru":"Найду человека, который уже умеет","en":"Найду человека, который уже умеет"},"stats":{"a":40,"b":31,"c":29},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты можешь сохранить только одну вещь из старого дома. Что выберешь?","en":"You can keep only one thing from an old home. What do you choose?"},"a":{"ru":"Фотографии","en":"Фотографии"},"b":{"ru":"Предмет с историей","en":"Предмет с историей"},"c":{"ru":"Что-то действительно полезное","en":"Что-то действительно полезное"},"stats":{"a":47,"b":33,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что ты сделаешь, если случайно услышишь чужой личный разговор?","en":"What do you do if you accidentally overhear a private conversation?"},"a":{"ru":"Сделаю вид, что не слышал","en":"Сделаю вид, что не слышал"},"b":{"ru":"Уйду подальше","en":"Уйду подальше"},"c":{"ru":"Запомню только то, что нужно для безопасности","en":"Запомню только то, что нужно для безопасности"},"stats":{"a":54,"b":26,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Твой знакомый просит честную оценку своей работы. Что скажешь?","en":"An acquaintance asks for an honest assessment of their work. What do you say?"},"a":{"ru":"Сначала отмечу сильные стороны","en":"Сначала отмечу сильные стороны"},"b":{"ru":"Прямо укажу на слабые места","en":"Прямо укажу на слабые места"},"c":{"ru":"Дам конкретные шаги для улучшения","en":"Дам конкретные шаги для улучшения"},"stats":{"a":61,"b":19,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты должен выбрать между быстрым результатом и более качественным, но долгим вариантом.","en":"You must choose between a quick result and a slower but better one."},"a":{"ru":"Выберу качество","en":"Выберу качество"},"b":{"ru":"Выберу скорость","en":"Выберу скорость"},"c":{"ru":"Сравню последствия","en":"Сравню последствия"},"stats":{"a":43,"b":37,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты реагируешь, когда кто-то неожиданно отменяет ваши планы?","en":"How do you react when someone unexpectedly cancels plans?"},"a":{"ru":"Предлагаю другой день","en":"Предлагаю другой день"},"b":{"ru":"Использую время для себя","en":"Использую время для себя"},"c":{"ru":"Сначала хочу понять причину","en":"Сначала хочу понять причину"},"stats":{"a":50,"b":30,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают попробовать экстремальное развлечение. Что решит твой ответ?","en":"You are offered an extreme activity. What determines your answer?"},"a":{"ru":"Уровень риска","en":"Уровень риска"},"b":{"ru":"Интерес к новому","en":"Интерес к новому"},"c":{"ru":"Наличие надёжной компании","en":"Наличие надёжной компании"},"stats":{"a":57,"b":23,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты замечаешь, что близкий человек стал тише обычного. Что сделаешь?","en":"You notice someone close has become quieter than usual. What do you do?"},"a":{"ru":"Спрошу напрямую","en":"Спрошу напрямую"},"b":{"ru":"Дам время и буду рядом","en":"Дам время и буду рядом"},"c":{"ru":"Предложу отвлечься вместе","en":"Предложу отвлечься вместе"},"stats":{"a":39,"b":41,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если тебе дали возможность задать один вопрос человеку из прошлого, что выберешь?","en":"If you could ask one question to someone from your past, what would you choose?"},"a":{"ru":"Почему всё произошло так","en":"Почему всё произошло так"},"b":{"ru":"Что бы ты изменил","en":"Что бы ты изменил"},"c":{"ru":"Счастлив ли ты сейчас","en":"Счастлив ли ты сейчас"},"stats":{"a":46,"b":32,"c":22},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты принимаешь решение о крупной покупке?","en":"How do you make a decision about a major purchase?"},"a":{"ru":"Сравниваю цены","en":"Сравниваю цены"},"b":{"ru":"Проверяю качество","en":"Проверяю качество"},"c":{"ru":"Жду, пока решение станет очевидным","en":"Жду, пока решение станет очевидным"},"stats":{"a":53,"b":27,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают переехать в город, где ты никого не знаешь. Что привлекает больше всего?","en":"You are offered a move to a city where you know nobody. What attracts you most?"},"a":{"ru":"Новый опыт","en":"Новый опыт"},"b":{"ru":"Новые возможности","en":"Новые возможности"},"c":{"ru":"Свобода начать заново","en":"Свобода начать заново"},"stats":{"a":60,"b":20,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что для тебя важнее в дружбе после десяти лет знакомства?","en":"What matters most in a friendship after ten years?"},"a":{"ru":"Доверие","en":"Доверие"},"b":{"ru":"Общие воспоминания","en":"Общие воспоминания"},"c":{"ru":"Возможность быть собой","en":"Возможность быть собой"},"stats":{"a":42,"b":36,"c":22},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты получил критику от человека, которого уважаешь. Как поступишь?","en":"You receive criticism from someone you respect. What do you do?"},"a":{"ru":"Обдумаю её","en":"Обдумаю её"},"b":{"ru":"Попрошу конкретные примеры","en":"Попрошу конкретные примеры"},"c":{"ru":"Проверю результат на практике","en":"Проверю результат на практике"},"stats":{"a":49,"b":31,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если тебе нужно выбрать подарок человеку, которого плохо знаешь?","en":"If you need to choose a gift for someone you barely know?"},"a":{"ru":"Что-то универсальное","en":"Что-то универсальное"},"b":{"ru":"Что-то связанное с его интересами","en":"Что-то связанное с его интересами"},"c":{"ru":"Сначала расспрошу знакомых","en":"Сначала расспрошу знакомых"},"stats":{"a":56,"b":24,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как поступишь, если случайно испортил чужую вещь?","en":"What do you do if you accidentally damage someone else’s property?"},"a":{"ru":"Сразу признаюсь","en":"Сразу признаюсь"},"b":{"ru":"Предложу заменить","en":"Предложу заменить"},"c":{"ru":"Попробую сначала исправить","en":"Попробую сначала исправить"},"stats":{"a":38,"b":40,"c":22},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно организовать поездку для нескольких людей. Что сделаешь первым?","en":"You need to organize a trip for several people. What do you do first?"},"a":{"ru":"Уточню бюджет","en":"Уточню бюджет"},"b":{"ru":"Соберу пожелания","en":"Соберу пожелания"},"c":{"ru":"Намечу маршрут","en":"Намечу маршрут"},"stats":{"a":45,"b":35,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что ты делаешь, когда долго не можешь уснуть из-за мыслей?","en":"What do you do when thoughts keep you awake?"},"a":{"ru":"Записываю их","en":"Записываю их"},"b":{"ru":"Встаю и занимаюсь чем-то спокойным","en":"Встаю и занимаюсь чем-то спокойным"},"c":{"ru":"Пытаюсь просто отпустить их","en":"Пытаюсь просто отпустить их"},"stats":{"a":52,"b":28,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты узнаёшь, что знакомый говорит о тебе неправду. Что выберешь?","en":"You learn that an acquaintance is spreading a false story about you. What do you choose?"},"a":{"ru":"Поговорю с ним","en":"Поговорю с ним"},"b":{"ru":"Не стану реагировать","en":"Не стану реагировать"},"c":{"ru":"Объясню ситуацию тем, кого это касается","en":"Объясню ситуацию тем, кого это касается"},"stats":{"a":59,"b":21,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты относишься к человеку, который часто меняет планы и интересы?","en":"How do you view someone who often changes plans and interests?"},"a":{"ru":"Как к любопытному человеку","en":"Как к любопытному человеку"},"b":{"ru":"Как к непостоянному","en":"Как к непостоянному"},"c":{"ru":"Пока просто наблюдаю","en":"Пока просто наблюдаю"},"stats":{"a":41,"b":39,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе дают шанс начать проект, но результат никто не гарантирует. Что решит твой выбор?","en":"You can start a project with no guaranteed result. What decides your choice?"},"a":{"ru":"Потенциал","en":"Потенциал"},"b":{"ru":"Ресурсы","en":"Ресурсы"},"c":{"ru":"Личный интерес","en":"Личный интерес"},"stats":{"a":48,"b":32,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как поступишь, если заметишь, что кто-то одинок на общем мероприятии?","en":"What do you do if you notice someone is alone at a gathering?"},"a":{"ru":"Подойду первым","en":"Подойду первым"},"b":{"ru":"Познакомлю его с кем-то","en":"Познакомлю его с кем-то"},"c":{"ru":"Не буду вмешиваться без причины","en":"Не буду вмешиваться без причины"},"stats":{"a":55,"b":25,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если у тебя появляется новый сосед, что поможет быстрее привыкнуть друг к другу?","en":"If you get a new neighbor, what helps you become comfortable with each other?"},"a":{"ru":"Поздороваться и познакомиться","en":"Поздороваться и познакомиться"},"b":{"ru":"Предложить небольшую помощь","en":"Предложить небольшую помощь"},"c":{"ru":"Дать время привыкнуть","en":"Дать время привыкнуть"},"stats":{"a":37,"b":43,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты видишь очень красивый закат, но рядом никто не смотрит. Что сделаешь?","en":"You see a beautiful sunset while nobody around is watching. What do you do?"},"a":{"ru":"Сфотографирую","en":"Сфотографирую"},"b":{"ru":"Просто посмотрю","en":"Просто посмотрю"},"c":{"ru":"Позову близкого человека","en":"Позову близкого человека"},"stats":{"a":44,"b":36,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если твоя идея на работе не получила поддержки?","en":"What do you do when your idea at work gets no support?"},"a":{"ru":"Уточню причины","en":"Уточню причины"},"b":{"ru":"Доработаю её","en":"Доработаю её"},"c":{"ru":"Переключусь на другую идею","en":"Переключусь на другую идею"},"stats":{"a":51,"b":29,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно выбрать новое хобби. Что привлечёт тебя сильнее?","en":"You need to choose a new hobby. What attracts you most?"},"a":{"ru":"Творчество","en":"Творчество"},"b":{"ru":"Движение","en":"Движение"},"c":{"ru":"Возможность знакомиться с людьми","en":"Возможность знакомиться с людьми"},"stats":{"a":58,"b":22,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если ты случайно встретил человека, с которым был конфликт, как поступишь?","en":"If you unexpectedly meet someone you had a conflict with, what do you do?"},"a":{"ru":"Поздороваюсь спокойно","en":"Поздороваюсь спокойно"},"b":{"ru":"Сделаю вид, что не заметил","en":"Сделаю вид, что не заметил"},"c":{"ru":"Поговорю, если будет подходящий момент","en":"Поговорю, если будет подходящий момент"},"stats":{"a":40,"b":40,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты реагируешь, когда младший человек даёт тебе хороший совет?","en":"How do you react when a younger person gives you good advice?"},"a":{"ru":"Слушаю без предубеждения","en":"Слушаю без предубеждения"},"b":{"ru":"Проверяю совет на практике","en":"Проверяю совет на практике"},"c":{"ru":"Уточняю его опыт","en":"Уточняю его опыт"},"stats":{"a":47,"b":33,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают взять на себя чужую обязанность на один день. Что выберешь?","en":"You are asked to take someone else’s responsibility for one day. What do you choose?"},"a":{"ru":"Помогу, если могу","en":"Помогу, если могу"},"b":{"ru":"Попрошу заранее объяснить задачу","en":"Попрошу заранее объяснить задачу"},"c":{"ru":"Откажусь, если это мешает моим делам","en":"Откажусь, если это мешает моим делам"},"stats":{"a":54,"b":26,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что важнее при выборе места для жизни: люди вокруг или само место?","en":"What matters more when choosing where to live: the people around you or the place itself?"},"a":{"ru":"Люди","en":"Люди"},"b":{"ru":"Инфраструктура и удобство","en":"Инфраструктура и удобство"},"c":{"ru":"Атмосфера","en":"Атмосфера"},"stats":{"a":61,"b":19,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если увидишь потерянного ребёнка в общественном месте?","en":"What do you do if you see a lost child in a public place?"},"a":{"ru":"Сразу обращусь к сотрудникам","en":"Сразу обращусь к сотрудникам"},"b":{"ru":"Останусь рядом и помогу найти родителей","en":"Останусь рядом и помогу найти родителей"},"c":{"ru":"Позвоню в службу помощи","en":"Позвоню в службу помощи"},"stats":{"a":43,"b":31,"c":26},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно объяснить сложную вещь человеку, который ничего о ней не знает. Как начнёшь?","en":"You need to explain something complex to someone who knows nothing about it. How do you start?"},"a":{"ru":"С простого примера","en":"С простого примера"},"b":{"ru":"С основной идеи","en":"С основной идеи"},"c":{"ru":"С вопроса о том, что ему уже известно","en":"С вопроса о том, что ему уже известно"},"stats":{"a":50,"b":30,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты выбираешь, кому доверять важную личную информацию?","en":"How do you decide whom to trust with important personal information?"},"a":{"ru":"По прошлым поступкам","en":"По прошлым поступкам"},"b":{"ru":"По ощущению безопасности","en":"По ощущению безопасности"},"c":{"ru":"По тому, как человек хранит чужие секреты","en":"По тому, как человек хранит чужие секреты"},"stats":{"a":57,"b":23,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если тебе предлагают работу с высокой зарплатой, но без свободного времени?","en":"If you are offered a high-paying job with almost no free time?"},"a":{"ru":"Соглашусь на время","en":"Соглашусь на время"},"b":{"ru":"Откажусь ради баланса","en":"Откажусь ради баланса"},"c":{"ru":"Попробую договориться об условиях","en":"Попробую договориться об условиях"},"stats":{"a":39,"b":35,"c":26},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Твой друг забыл о твоём важном событии. Как воспримешь это?","en":"Your friend forgets an important event in your life. How do you take it?"},"a":{"ru":"Скажу, что мне было неприятно","en":"Скажу, что мне было неприятно"},"b":{"ru":"Постараюсь понять причину","en":"Постараюсь понять причину"},"c":{"ru":"Не буду делать выводов по одному случаю","en":"Не буду делать выводов по одному случаю"},"stats":{"a":46,"b":34,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты можешь провести вечер с одним человеком: с тем, кто тебя вдохновляет, или с тем, кто тебя хорошо понимает. Кого выберешь?","en":"You can spend an evening with one person: someone who inspires you or someone who understands you deeply. Who do you choose?"},"a":{"ru":"Того, кто вдохновляет","en":"Того, кто вдохновляет"},"b":{"ru":"Того, кто понимает","en":"Того, кто понимает"},"c":{"ru":"Выберу по настроению","en":"Выберу по настроению"},"stats":{"a":53,"b":27,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как поступишь, если тебе доверили секрет, который может предотвратить чужую опасность?","en":"What do you do if you are trusted with a secret that could prevent someone’s danger?"},"a":{"ru":"Сначала оценю риск","en":"Сначала оценю риск"},"b":{"ru":"Предупрежу того, кому угрожает опасность","en":"Предупрежу того, кому угрожает опасность"},"c":{"ru":"Попрошу совета у компетентного человека","en":"Попрошу совета у компетентного человека"},"stats":{"a":60,"b":20,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты заметил, что твоя привычка отнимает слишком много времени. Что сделаешь?","en":"You notice a habit taking too much of your time. What do you do?"},"a":{"ru":"Установлю ограничение","en":"Установлю ограничение"},"b":{"ru":"Заменю её другой привычкой","en":"Заменю её другой привычкой"},"c":{"ru":"Буду отслеживать её несколько дней","en":"Буду отслеживать её несколько дней"},"stats":{"a":42,"b":38,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что ты выберешь для выходного: заранее составленный день или полную свободу?","en":"For a day off, do you choose a planned schedule or complete freedom?"},"a":{"ru":"План","en":"План"},"b":{"ru":"Свободу","en":"Свободу"},"c":{"ru":"Небольшой план и пространство для спонтанности","en":"Небольшой план и пространство для спонтанности"},"stats":{"a":49,"b":31,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если кто-то незнакомый делает тебе комплимент, как реагируешь?","en":"If a stranger compliments you, how do you react?"},"a":{"ru":"Просто благодарю","en":"Просто благодарю"},"b":{"ru":"Поддерживаю разговор","en":"Поддерживаю разговор"},"c":{"ru":"Смущаюсь и улыбаюсь","en":"Смущаюсь и улыбаюсь"},"stats":{"a":56,"b":24,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно принять решение за пять минут. Что поможет?","en":"You must make a decision in five minutes. What helps most?"},"a":{"ru":"Факты","en":"Факты"},"b":{"ru":"Интуиция","en":"Интуиция"},"c":{"ru":"Совет человека, которому доверяю","en":"Совет человека, которому доверяю"},"stats":{"a":38,"b":42,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если твой любимый фильм оказался не таким хорошим при повторном просмотре?","en":"What do you do if a favorite movie feels less impressive on a rewatch?"},"a":{"ru":"Приму новое впечатление","en":"Приму новое впечатление"},"b":{"ru":"Попробую понять, что изменилось во мне","en":"Попробую понять, что изменилось во мне"},"c":{"ru":"Вспомню, почему он был важен тогда","en":"Вспомню, почему он был важен тогда"},"stats":{"a":45,"b":35,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если ты видишь красивую вещь, которую можешь купить, но она тебе не нужна?","en":"If you see something beautiful you can afford but do not need?"},"a":{"ru":"Не куплю","en":"Не куплю"},"b":{"ru":"Возьму время подумать","en":"Возьму время подумать"},"c":{"ru":"Куплю, если это действительно порадует","en":"Куплю, если это действительно порадует"},"stats":{"a":52,"b":28,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты относишься к переменам в городе, где живёшь?","en":"How do you feel about changes in the city where you live?"},"a":{"ru":"Люблю обновления","en":"Люблю обновления"},"b":{"ru":"Сначала сравниваю с прошлым","en":"Сначала сравниваю с прошлым"},"c":{"ru":"Предпочитаю знакомое","en":"Предпочитаю знакомое"},"stats":{"a":59,"b":21,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно выбрать между путешествием одному и поездкой с друзьями. Что привлекает?","en":"You must choose between traveling alone and traveling with friends. What attracts you?"},"a":{"ru":"Свобода","en":"Свобода"},"b":{"ru":"Компания","en":"Компания"},"c":{"ru":"Зависит от места","en":"Зависит от места"},"stats":{"a":41,"b":39,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если твой знакомый просит совета, но уже принял решение?","en":"What do you do when someone asks for advice after already making a decision?"},"a":{"ru":"Скажу своё мнение без давления","en":"Скажу своё мнение без давления"},"b":{"ru":"Помогу проверить решение","en":"Помогу проверить решение"},"c":{"ru":"Спрошу, зачем ему мой совет","en":"Спрошу, зачем ему мой совет"},"stats":{"a":48,"b":32,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты обнаружил старую записку, которую написал сам несколько лет назад. Что сделаешь?","en":"You find an old note you wrote years ago. What do you do?"},"a":{"ru":"Перечитаю внимательно","en":"Перечитаю внимательно"},"b":{"ru":"Сравню себя тогда и сейчас","en":"Сравню себя тогда и сейчас"},"c":{"ru":"Уберу обратно как память","en":"Уберу обратно как память"},"stats":{"a":55,"b":25,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что ты выберешь, если можешь бесплатно освоить один язык?","en":"Which language-learning opportunity would you choose if one were free?"},"a":{"ru":"Язык для путешествий","en":"Язык для путешествий"},"b":{"ru":"Язык для работы","en":"Язык для работы"},"c":{"ru":"Язык, который просто нравится","en":"Язык, который просто нравится"},"stats":{"a":37,"b":43,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты реагируешь, если человек долго принимает решение?","en":"How do you react when someone takes a long time to decide?"},"a":{"ru":"Даю время","en":"Даю время"},"b":{"ru":"Предлагаю варианты","en":"Предлагаю варианты"},"c":{"ru":"Переходу к своему решению","en":"Переходу к своему решению"},"stats":{"a":44,"b":36,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если ты потерял вещь, которая дорога эмоционально, что сделаешь?","en":"If you lose something with emotional value, what do you do?"},"a":{"ru":"Буду искать до конца","en":"Буду искать до конца"},"b":{"ru":"Приму потерю и сохраню воспоминание","en":"Приму потерю и сохраню воспоминание"},"c":{"ru":"Попробую восстановить похожую вещь","en":"Попробую восстановить похожую вещь"},"stats":{"a":51,"b":29,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают вести блог, но ты не хочешь быть публичным. Что выберешь?","en":"You are offered a chance to run a blog, but you dislike being public. What do you choose?"},"a":{"ru":"Оставлю идею","en":"Оставлю идею"},"b":{"ru":"Буду вести анонимно","en":"Буду вести анонимно"},"c":{"ru":"Сделаю контент без личного образа","en":"Сделаю контент без личного образа"},"stats":{"a":58,"b":22,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если заметишь, что твой друг слишком много работает?","en":"What do you do if you notice your friend is working too much?"},"a":{"ru":"Скажу прямо","en":"Скажу прямо"},"b":{"ru":"Предложу совместный отдых","en":"Предложу совместный отдых"},"c":{"ru":"Подожду, пока он сам заговорит","en":"Подожду, пока он сам заговорит"},"stats":{"a":40,"b":40,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если у тебя есть один день, чтобы исправить давнюю ошибку, что выберешь?","en":"If you had one day to fix an old mistake, what would you choose?"},"a":{"ru":"Извиниться","en":"Извиниться"},"b":{"ru":"Исправить последствия","en":"Исправить последствия"},"c":{"ru":"Объяснить свою сторону","en":"Объяснить свою сторону"},"stats":{"a":47,"b":33,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают купить вещь сильно дешевле рынка, но происхождение неясно. Что сделаешь?","en":"You are offered an item far below market price, but its origin is unclear. What do you do?"},"a":{"ru":"Откажусь","en":"Откажусь"},"b":{"ru":"Проверю происхождение","en":"Проверю происхождение"},"c":{"ru":"Куплю только при полной уверенности","en":"Куплю только при полной уверенности"},"stats":{"a":54,"b":26,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если близкий человек не согласен с твоим важным решением?","en":"What do you do if someone close disagrees with an important decision you made?"},"a":{"ru":"Выслушаю аргументы","en":"Выслушаю аргументы"},"b":{"ru":"Оставлю решение за собой","en":"Оставлю решение за собой"},"c":{"ru":"Попробую найти середину","en":"Попробую найти середину"},"stats":{"a":61,"b":19,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что тебе ближе в новом месте: сразу исследовать его или сначала освоиться?","en":"In a new place, do you prefer exploring immediately or settling in first?"},"a":{"ru":"Сразу исследовать","en":"Сразу исследовать"},"b":{"ru":"Сначала освоиться","en":"Сначала освоиться"},"c":{"ru":"Найти местного проводника","en":"Найти местного проводника"},"stats":{"a":43,"b":37,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если тебе дают возможность бесплатно попробовать профессию на неделю, какую мотивацию выберешь?","en":"If you can try a profession for free for one week, what motivates you most?"},"a":{"ru":"Любопытство","en":"Любопытство"},"b":{"ru":"Проверка будущей карьеры","en":"Проверка будущей карьеры"},"c":{"ru":"Новый опыт","en":"Новый опыт"},"stats":{"a":50,"b":30,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты относишься к человеку, который признаёт свою ошибку первым?","en":"How do you view someone who admits their mistake first?"},"a":{"ru":"Уважаю за честность","en":"Уважаю за честность"},"b":{"ru":"Смотрю на последствия","en":"Смотрю на последствия"},"c":{"ru":"Готов быстрее продолжить разговор","en":"Готов быстрее продолжить разговор"},"stats":{"a":57,"b":23,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Ты можешь вернуть один момент из детства на один час. Что выберешь?","en":"You can return to one childhood moment for one hour. What do you choose?"},"a":{"ru":"Семейный день","en":"Семейный день"},"b":{"ru":"Праздник с друзьями","en":"Праздник с друзьями"},"c":{"ru":"Обычный спокойный день","en":"Обычный спокойный день"},"stats":{"a":39,"b":41,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как поступишь, если твоя цель стала неинтересной после того, как ты её почти достиг?","en":"What do you do when a goal stops feeling interesting just before you reach it?"},"a":{"ru":"Завершу начатое","en":"Завершу начатое"},"b":{"ru":"Пересмотрю цель","en":"Пересмотрю цель"},"c":{"ru":"Поищу новый смысл","en":"Поищу новый смысл"},"stats":{"a":46,"b":31,"c":23},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают выбрать одно качество для себя на ближайший год. Что выберешь?","en":"You can choose one quality to strengthen over the next year. Which one?"},"a":{"ru":"Терпение","en":"Терпение"},"b":{"ru":"Смелость","en":"Смелость"},"c":{"ru":"Дисциплина","en":"Дисциплина"},"stats":{"a":53,"b":27,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если ты видишь человека, который явно волнуется перед выступлением, что сделаешь?","en":"If you see someone clearly nervous before speaking, what do you do?"},"a":{"ru":"Подбодрю","en":"Подбодрю"},"b":{"ru":"Дам пространство","en":"Дам пространство"},"c":{"ru":"Предложу практическую помощь","en":"Предложу практическую помощь"},"stats":{"a":60,"b":20,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если новый знакомый слишком быстро рассказывает личные вещи?","en":"What do you do if a new acquaintance shares very personal things too quickly?"},"a":{"ru":"Внимательно выслушаю","en":"Внимательно выслушаю"},"b":{"ru":"Мягко поставлю границу","en":"Мягко поставлю границу"},"c":{"ru":"Сменю тему","en":"Сменю тему"},"stats":{"a":42,"b":35,"c":23},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что ты выберешь для вечера после очень насыщенного дня?","en":"What do you choose for an evening after a very busy day?"},"a":{"ru":"Тишину и отдых","en":"Тишину и отдых"},"b":{"ru":"Встречу с близкими","en":"Встречу с близкими"},"c":{"ru":"Любимое занятие","en":"Любимое занятие"},"stats":{"a":49,"b":31,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если ты можешь узнать правду о любом одном событии прошлого, что выберешь?","en":"If you could learn the truth about one past event, what would you choose?"},"a":{"ru":"О личной истории","en":"О личной истории"},"b":{"ru":"О важном историческом событии","en":"О важном историческом событии"},"c":{"ru":"О собственной ошибке","en":"О собственной ошибке"},"stats":{"a":56,"b":24,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе предлагают шанс начать учиться чему-то с нуля вместе с друзьями. Что важнее?","en":"You can start learning something from scratch with friends. What matters most?"},"a":{"ru":"Компания","en":"Компания"},"b":{"ru":"Сам предмет","en":"Сам предмет"},"c":{"ru":"Общий результат","en":"Общий результат"},"stats":{"a":38,"b":39,"c":23},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты реагируешь, когда кто-то делает работу иначе, чем ты?","en":"How do you react when someone does a task differently from you?"},"a":{"ru":"Смотрю на результат","en":"Смотрю на результат"},"b":{"ru":"Интересуюсь его методом","en":"Интересуюсь его методом"},"c":{"ru":"Предлагаю сравнить подходы","en":"Предлагаю сравнить подходы"},"stats":{"a":45,"b":35,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если у тебя появился дополнительный час каждый день, куда направишь его?","en":"If you gained an extra hour every day, where would you put it?"},"a":{"ru":"Здоровье и отдых","en":"Здоровье и отдых"},"b":{"ru":"Учёба","en":"Учёба"},"c":{"ru":"Личный проект","en":"Личный проект"},"stats":{"a":52,"b":28,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Тебе нужно выбрать, что оставить в жизни: старую привычку или старую вещь. Что легче отпустить?","en":"You must choose what to let go of: an old habit or an old possession. Which is easier?"},"a":{"ru":"Вещь","en":"Вещь"},"b":{"ru":"Привычку","en":"Привычку"},"c":{"ru":"Зависит от воспоминаний","en":"Зависит от воспоминаний"},"stats":{"a":59,"b":21,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Как ты поступишь, если обещал сохранить нейтралитет в споре друзей?","en":"What do you do if you promised to stay neutral in a dispute between friends?"},"a":{"ru":"Сдержу обещание","en":"Сдержу обещание"},"b":{"ru":"Выскажусь только при просьбе","en":"Выскажусь только при просьбе"},"c":{"ru":"Помогу им поговорить спокойно","en":"Помогу им поговорить спокойно"},"stats":{"a":41,"b":39,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Если твоя мечта требует нескольких лет работы, что поможет не бросить её?","en":"If your dream requires years of work, what helps you keep going?"},"a":{"ru":"Разбить путь на этапы","en":"Разбить путь на этапы"},"b":{"ru":"Напоминать себе о цели","en":"Напоминать себе о цели"},"c":{"ru":"Видеть маленький результат","en":"Видеть маленький результат"},"stats":{"a":48,"b":32,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}},{"question":{"ru":"Что для тебя сильнее влияет на первое впечатление о человеке?","en":"What affects your first impression of someone most?"},"a":{"ru":"Манера общения","en":"Манера общения"},"b":{"ru":"Поступки","en":"Поступки"},"c":{"ru":"Отношение к другим","en":"Отношение к другим"},"stats":{"a":55,"b":25,"c":20},"analysis":{"ru":"Твой выбор отражает один из возможных способов смотреть на эту ситуацию. Здесь нет единственно правильного ответа.","en":"Your choice reflects one possible way of looking at this situation. There is no single correct answer."}}];
FATE_DILEMMAS.splice(0,FATE_DILEMMAS.length,...FATE_DILEMMAS_UNIQUE_100);

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
  let overlay = document.getElementById('fate-overlay');
  if (!overlay) { overlay = document.createElement('div'); overlay.id = 'fate-overlay'; overlay.className = 'fate-overlay active'; document.body.appendChild(overlay); }
  overlay.innerHTML = `
    <button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button>
    <div class="fate-container">
      <div class="fate-counter">${index + 1} / ${FATE_DILEMMAS.length}</div>
      <div class="fate-question">${loc(d.question)}</div>
      <div class="fate-choices" id="fate-choices">
        <button class="fate-btn" onclick="answerFate(${index}, 'a')"><span class="fate-btn-text">${loc(d.a)}</span></button>
        <button class="fate-btn" onclick="answerFate(${index}, 'b')"><span class="fate-btn-text">${loc(d.b)}</span></button>
        <button class="fate-btn" onclick="answerFate(${index}, 'c')"><span class="fate-btn-text">${loc(d.c)}</span></button>
      </div>
      <div class="fate-result" id="fate-result" style="display:none;">
        <div class="fate-stats">
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-a" style="width:0%"></div><span class="fate-stat-label">${d.stats.a}%</span></div>
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-b" style="width:0%"></div><span class="fate-stat-label">${d.stats.b}%</span></div>
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-c" style="width:0%"></div><span class="fate-stat-label">${d.stats.c}%</span></div>
        </div>
        <div class="fate-analysis">${loc(d.analysis)}</div>
        <button class="fate-next" onclick="nextFateQuestion()">${loc(NEXT_BUTTON_TEXTS[index % NEXT_BUTTON_TEXTS.length])}</button>
      </div>
    </div>
  `;
}

function answerFate(index, choice) {
  const d = FATE_DILEMMAS[index];
  const choicesDiv = document.getElementById('fate-choices');
  const resultDiv = document.getElementById('fate-result');
  createGoldExplosion();
  choicesDiv.style.opacity = '0'; choicesDiv.style.transform = 'scale(0.9)'; choicesDiv.style.transition = 'all 0.5s ease';
  setTimeout(() => {
    choicesDiv.style.display = 'none'; resultDiv.style.display = 'block';
    setTimeout(() => { document.getElementById('stat-a').style.width = d.stats.a + '%'; document.getElementById('stat-b').style.width = d.stats.b + '%'; document.getElementById('stat-c').style.width = d.stats.c + '%'; }, 100);
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
  if (!overlay) return;
  const state = JSON.parse(localStorage.getItem('fate_dilemmas') || '{"currentIndex":0,"answers":[]}');
  if (state.currentIndex >= FATE_DILEMMAS.length) { showFateFinalInPlace(overlay); return; }
  renderFateQuestion(state.currentIndex);
}
function showFateFinalInPlace(overlay) {
  overlay.innerHTML = `<button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button><div class="fate-container fate-final"><div class="fate-final-title">${t('fateComplete')}</div><div class="fate-final-text">${t('fateCompleteText')}</div><div class="final-channel-note">${t('finalChannel')}</div><div class="final-actions"><button class="fate-next" onclick="restartFateDilemmas()">${t('restart')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div></div>`;
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
  const overlay=document.getElementById('fate-overlay');
  if(overlay) renderFateQuestion(0);
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
  if (overlay) renderLabyrinthRiddle();
}

function renderLabyrinthRiddle() {
  const saved = localStorage.getItem('labyrinth');
  let state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  const riddle = LABYRINTH_RIDDLES[state.currentRiddle];
  let overlay = document.getElementById('labyrinth-overlay');
  if (!overlay) { overlay=document.createElement('div'); overlay.id='labyrinth-overlay'; overlay.className='labyrinth-overlay active'; document.body.appendChild(overlay); }
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
}

function showLabyrinthHint(hintIndex) {
  const saved = localStorage.getItem('labyrinth');
  const state = saved ? JSON.parse(saved) : { currentRiddle: 0, hintsUsed: [] };
  if (state.hintsUsed.includes(hintIndex)) {
    const riddle = LABYRINTH_RIDDLES[state.currentRiddle];
    const hintText = document.getElementById('labyrinth-hint-text');
    if (hintText) { hintText.textContent = loc(riddle.hints[hintIndex]); hintText.style.display = 'block'; }
    document.querySelectorAll('.labyrinth-hint-btn')[hintIndex]?.classList.add('used');
    return;
  }
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
  if (!overlay) return;
  if (state.currentRiddle >= LABYRINTH_RIDDLES.length) showLabyrinthFinalInPlace(overlay);
  else renderLabyrinthRiddle();
}
function showLabyrinthFinalInPlace(overlay) {
  overlay.innerHTML=`<button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button><div class="labyrinth-container labyrinth-final"><div class="labyrinth-final-title">${t('riddleComplete')}</div><div class="labyrinth-final-text">${t('riddleCompleteText')}</div><div class="final-channel-note">${t('finalChannel')}</div><div class="final-actions"><button class="labyrinth-next-btn" onclick="restartLabyrinth()">${t('restart')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div></div>`;
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
  const overlay = document.getElementById('labyrinth-overlay');
  if (overlay) renderLabyrinthRiddle();
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
  let overlay = document.getElementById('destiny-overlay');
  if (!overlay) { overlay=document.createElement('div'); overlay.id='destiny-overlay'; overlay.className='destiny-overlay active'; document.body.appendChild(overlay); }
  overlay.className='destiny-overlay active';
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
}

function answerDestiny(qIndex, optIndex) {
  const q = DESTINY_QUESTIONS[qIndex];
  const scores = q.options[optIndex].scores;
  let state = JSON.parse(localStorage.getItem('true_destiny'));
  state.currentQuestion = qIndex + 1;
  for (let key in scores) state.scores[key] += scores[key];
  localStorage.setItem('true_destiny', JSON.stringify(state));
  const overlay = document.getElementById('destiny-overlay');
  if (!overlay) return;
  if (state.currentQuestion >= DESTINY_QUESTIONS.length) {
    state.completed = true;
    localStorage.setItem('true_destiny', JSON.stringify(state));
    showDestinyResultInPlace(overlay, state.scores);
  } else renderDestinyQuestion(state.currentQuestion);
}

function showDestinyResult(scores) {
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

function restartDestiny() {
  localStorage.removeItem('true_destiny');
  const overlay = document.getElementById('destiny-overlay');
  if (overlay) renderDestinyQuestion(0);
  else openTrueDestiny();
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
    ru:{lead:'Добро пожаловать в Your Destiny.',body:'Это уютный интерактивный путеводитель по историям, выборам, загадкам и маленьким открытиям. Здесь можно идти в своём темпе: читать, выбирать, размышлять и возвращаться к тем разделам, которые хочется пройти ещё раз. Ничего не нужно успевать — просто открывай следующий путь и смотри, куда он приведёт.',note:''},
    en:{lead:'Welcome to Your Destiny.',body:'This is a warm interactive guide through stories, choices, riddles and small discoveries. Move at your own pace: read, choose, think and return to the sections you want to explore again. There is nothing to rush — simply open the next path and see where it leads.',note:''},
    es:{lead:'Bienvenido a Your Destiny.',body:'Es una guía interactiva y acogedora de historias, decisiones, acertijos y pequeños descubrimientos. Avanza a tu ritmo: lee, elige, reflexiona y vuelve a los apartados que quieras recorrer otra vez. No hay prisa: abre el siguiente camino y descubre adónde te lleva.',note:''},
    pt:{lead:'Bem-vindo ao Your Destiny.',body:'É um guia interativo e acolhedor por histórias, escolhas, enigmas e pequenas descobertas. Avança ao teu ritmo: lê, escolhe, pensa e volta às secções que quiseres explorar novamente. Não há pressa — abre o próximo caminho e vê onde te leva.',note:''},
    de:{lead:'Willkommen bei Your Destiny.',body:'Dies ist ein warmer interaktiver Wegweiser durch Geschichten, Entscheidungen, Rätsel und kleine Entdeckungen. Gehe in deinem Tempo: lesen, wählen, nachdenken und Bereiche erneut besuchen. Du musst nichts überstürzen — öffne einfach den nächsten Weg und sieh, wohin er führt.',note:''},
    fr:{lead:'Bienvenue dans Your Destiny.',body:'C’est un guide interactif et chaleureux à travers des histoires, des choix, des énigmes et de petites découvertes. Avance à ton rythme : lis, choisis, réfléchis et retrouve les sections que tu veux parcourir encore. Rien ne presse — ouvre simplement le prochain chemin et découvre où il mène.',note:''}
  };
  const c=copy[currentLang]||copy.en;
  overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container about-card"><div class="fate-final-title">${t('about')}</div><div class="about-lead">${c.lead}</div><div class="about-body">${c.body}</div>${c.note ? `<div class="about-note">${c.note}</div>` : ''}</div>`;
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


// ===== Final behavior pass =====
function detectLanguage(){
  const code=(tg?.initDataUnsafe?.user?.language_code||navigator.language||navigator.userLanguage||'en').toLowerCase().split('-')[0].split('_')[0];
  if(['ru','kk','be','ky'].includes(code)) return 'ru';
  if(['en','es','pt','de','fr'].includes(code)) return code;
  return 'en';
}
function closeLanguagePicker(){
  document.getElementById('language-picker-panel')?.classList.remove('open');
  document.getElementById('lang-backdrop')?.remove();
}
function toggleLanguagePicker(){
  const panel=document.getElementById('language-picker-panel'); if(!panel)return;
  if(panel.classList.contains('open')){closeLanguagePicker();return;}
  panel.dataset.title=(T[currentLang]?.languageTitle||T[currentLang]?.language||'Language');
  const title=document.getElementById('language-panel-title'); if(title) title.textContent=panel.dataset.title;
  panel.classList.add('open');
}
function setLanguage(lang){
  if(!T[lang])lang='en';currentLang=lang;localStorage.setItem('lang',lang);localStorage.setItem('lang_manual','1');
  updateLanguageUI();renderThemeColors();updateVipDisplay();closeLanguagePicker();
}
function resetAllForTesting(){
  if(confirm(t('resetConfirm')||'Reset all local game data?')){localStorage.clear();location.reload();}
}

Object.assign(T.ru,{resetAll:'Очистить всё'});Object.assign(T.en,{resetAll:'Clear everything'});Object.assign(T.es,{resetAll:'Borrar todo'});Object.assign(T.pt,{resetAll:'Limpar tudo'});Object.assign(T.de,{resetAll:'Alles löschen'});Object.assign(T.fr,{resetAll:'Tout effacer'});

// Last labyrinth riddle: the three hints become progressively more direct.
if (typeof LABYRINTH_RIDDLES !== 'undefined' && LABYRINTH_RIDDLES.length) {
  const last = LABYRINTH_RIDDLES[LABYRINTH_RIDDLES.length - 1];
  last.hints = [
    {ru:'Обрати внимание на ключевое слово в формулировке загадки.',en:'Pay attention to the key word in the wording.',es:'Presta atención a la palabra clave de la formulación.',pt:'Presta atenção à palavra-chave da formulação.',de:'Achte auf das Schlüsselwort in der Formulierung.',fr:'Fais attention au mot-clé dans la formulation.'},
    {ru:'Не воспринимай текст буквально: подумай, какую идею описывают сразу все детали.',en:'Do not take it literally: think about the idea described by all the details together.',es:'No lo tomes literalmente: piensa en la idea que describen todos los detalles.',pt:'Não interpretes literalmente: pensa na ideia descrita por todos os detalhes.',de:'Lies es nicht wörtlich: Denke an die Idee hinter allen Details.',fr:'Ne le prends pas au sens littéral : pense à l’idée décrite par tous les détails.'},
    {ru:'Сопоставь последнюю деталь с первой: она почти напрямую указывает, какой ответ нужно выбрать.',en:'Connect the last detail with the first: it almost directly points to the answer.',es:'Relaciona el último detalle con el primero: casi indica directamente la respuesta.',pt:'Liga o último detalhe ao primeiro: ele quase indica diretamente a resposta.',de:'Verbinde das letzte Detail mit dem ersten: Es weist fast direkt auf die Antwort.',fr:'Relie le dernier détail au premier : il indique presque directement la réponse.'}
  ];
}

// Clearer explanations for the two puzzles that previously caused confusion.
if (typeof LABYRINTH_RIDDLES !== 'undefined') {
  LABYRINTH_RIDDLES[4].answer = {
    ru:'Ответ: возьми любые 23 монеты и переверни каждую из них. Например, если среди этих 23 монет случайно оказалось 8 орлов, после переворота в этой кучке будет 15 орлов. В остальных 77 монетах тогда тоже останется 15 орлов, потому что всего орлов было 23. Значит, обе кучки содержат одинаковое число орлов — 15.',
    en:'Answer: take any 23 coins and flip all of them. For example, if 8 of those 23 coins were heads, after flipping there will be 15 heads in that pile. The other 77 coins also contain 15 heads, because there were 23 heads in total. So both piles contain the same number of heads.',
    es:'Respuesta: toma 23 monedas cualesquiera y dales la vuelta. Por ejemplo, si 8 de esas 23 monedas muestran cara, después de girarlas habrá 15 caras en esa pila. En las otras 77 monedas también quedarán 15 caras, porque en total había 23. Así ambas pilas tienen el mismo número de caras.',
    pt:'Resposta: pega em quaisquer 23 moedas e vira todas. Por exemplo, se 8 dessas 23 moedas tiverem cara, depois de as virar haverá 15 caras nessa pilha. Nas outras 77 moedas também ficarão 15 caras, porque havia 23 caras no total. Assim, as duas pilhas terão o mesmo número de caras.',
    de:'Antwort: Nimm beliebige 23 Münzen und drehe alle um. Wenn zum Beispiel 8 davon Kopf zeigen, sind danach 15 Köpfe in dieser Gruppe. In den übrigen 77 Münzen bleiben ebenfalls 15 Köpfe, weil es insgesamt 23 Köpfe gab. Beide Gruppen haben also gleich viele Köpfe.',
    fr:'Réponse : prends 23 pièces au hasard et retourne-les toutes. Par exemple, si 8 de ces 23 pièces montrent face, il y aura ensuite 15 faces dans ce groupe. Dans les 77 autres pièces, il restera également 15 faces, puisque le total était de 23. Les deux groupes ont donc le même nombre de faces.'
  };
  LABYRINTH_RIDDLES[0].hints = [
    {ru:'Речь идёт об одном и том же человеке в разные периоды жизни, а не о трёх разных существах.',en:'It is the same person at different stages of life, not three different creatures.',es:'Es la misma persona en distintas etapas de la vida, no tres criaturas diferentes.',pt:'É a mesma pessoa em diferentes fases da vida, não três criaturas.',de:'Es geht um dieselbe Person in verschiedenen Lebensabschnitten.',fr:'Il s’agit de la même personne à différents âges.'},
    {ru:'Утро — начало жизни, день — взрослая жизнь, вечер — старость. Подумай, что может стать дополнительной опорой человеку.',en:'Morning is the beginning of life, noon is adulthood, and evening is old age. Think of what can become an extra support.',es:'La mañana es el comienzo de la vida, el mediodía la adultez y la tarde la vejez. Piensa en una ayuda adicional.',pt:'A manhã é o início da vida, o dia é a idade adulta e a noite é a velhice. Pensa numa ajuda extra.',de:'Morgen steht für den Anfang des Lebens, Mittag für das Erwachsenenalter und Abend für das Alter. Denke an eine zusätzliche Stütze.',fr:'Le matin représente le début de la vie, le midi l’âge adulte et le soir la vieillesse. Pense à un soutien supplémentaire.'},
    {ru:'Третья «нога» — не настоящая нога. Это предмет, который помогает пожилому человеку ходить.',en:'The third “leg” is not a real leg. It is an object that helps an elderly person walk.',es:'La tercera «pata» no es una pata real: es un objeto que ayuda a una persona mayor a caminar.',pt:'A terceira “perna” não é uma perna real: é um objeto que ajuda uma pessoa idosa a caminhar.',de:'Das dritte „Bein“ ist kein echtes Bein, sondern ein Gegenstand, der einem älteren Menschen beim Gehen hilft.',fr:'La troisième « jambe » n’est pas une vraie jambe : c’est un objet qui aide une personne âgée à marcher.'}
  ];
  LABYRINTH_RIDDLES[8].hints = [
    {ru:'Если одна кувшинка заполняет всё озеро за 30 дней, то на 29-й день она заполняет только половину.',en:'If one lily fills the lake in 30 days, on day 29 it fills only half.',es:'Si un nenúfar llena el lago en 30 días, el día 29 solo cubre la mitad.',pt:'Se um nenúfar cobre o lago em 30 dias, no dia 29 cobre apenas metade.',de:'Wenn eine Seerose den See in 30 Tagen bedeckt, bedeckt sie am 29. Tag nur die Hälfte.',fr:'Si un nénuphar couvre le lac en 30 jours, il n’en couvre que la moitié au 29e jour.'},
    {ru:'Две кувшинки одинаково быстро удваивают свою площадь. Сравни их с одной кувшинкой на 29-й день.',en:'Two lilies double their covered area at the same rate. Compare them with one lily on day 29.',es:'Dos nenúfares duplican su área al mismo ritmo. Compáralos con uno solo el día 29.',pt:'Dois nenúfares duplicam a área à mesma velocidade. Compara-os com um no dia 29.',de:'Zwei Seerosen verdoppeln ihre Fläche gleich schnell. Vergleiche sie am 29. Tag mit einer.',fr:'Deux nénuphars doublent leur surface au même rythme. Compare-les à un seul au 29e jour.'},
    {ru:'Если одна кувшинка на 29-й день занимает половину озера, две такие кувшинки вместе займут всё озеро.',en:'If one lily covers half the lake on day 29, two identical lilies cover the whole lake.',es:'Si un nenúfar cubre la mitad del lago el día 29, dos cubren todo el lago.',pt:'Se um nenúfar cobre metade do lago no dia 29, dois cobrem o lago inteiro.',de:'Wenn eine Seerose am 29. Tag die Hälfte bedeckt, bedecken zwei das ganze Gebiet.',fr:'Si un nénuphar couvre la moitié du lac au 29e jour, deux couvrent tout le lac.'}
  ];
  LABYRINTH_RIDDLES[9].hints = [
    {ru:'Здесь три персонажа имеют три разных роли: истина, ложь и случай.',en:'There are three roles: truth, falsehood and randomness.',es:'Hay tres roles: verdad, mentira y azar.',pt:'Existem três papéis: verdade, mentira e acaso.',de:'Es gibt drei Rollen: Wahrheit, Lüge und Zufall.',fr:'Il y a trois rôles : vérité, mensonge et hasard.'},
    {ru:'Сначала тебе не нужно узнавать всех. Твоя первая цель — гарантированно найти того, кто не является богом случая.',en:'You do not need to identify everyone first. Your first goal is to find someone who is definitely not Random.',es:'No necesitas identificar a todos primero. Tu primer objetivo es hallar a alguien que no sea Azar.',pt:'Não precisas identificar todos primeiro. O primeiro objetivo é encontrar alguém que não seja o Acaso.',de:'Du musst nicht alle zuerst bestimmen. Zuerst brauchst du jemanden, der sicher nicht Zufall ist.',fr:'Tu n’as pas besoin d’identifier tout le monde d’abord. Trouve d’abord quelqu’un qui n’est pas le Hasard.'},
    {ru:'Используй вопрос о том, что бог ответил бы на другой вопрос. Такая форма нейтрализует одновременно ложь и неизвестное значение da/ja.',en:'Ask what the god would answer to another question. This form neutralizes both lying and the unknown meaning of da/ja.',es:'Pregunta qué respondería el dios a otra pregunta. Esta forma neutraliza la mentira y el significado desconocido de da/ja.',pt:'Pergunta o que o deus responderia a outra pergunta. Esta forma neutraliza a mentira e o significado desconhecido de da/ja.',de:'Frage, was der Gott auf eine andere Frage antworten würde. So werden Lüge und die Bedeutung von da/ja neutralisiert.',fr:'Demande ce que le dieu répondrait à une autre question. Cette forme neutralise le mensonge et le sens inconnu de da/ja.'},
    {ru:'Представь, что ты спрашиваешь: «Если бы я задал тебе вопрос X, ты ответил бы ja?» — это ключ к одинаковой интерпретации ответа.',en:'Imagine asking: “If I asked you X, would you answer ja?” This is the key to interpreting the answer consistently.',es:'Imagina preguntar: «Si te preguntara X, ¿responderías ja?». Esa es la clave para interpretar la respuesta.',pt:'Imagina perguntar: “Se te perguntasse X, responderias ja?”. Essa é a chave para interpretar a resposta.',de:'Stell dir vor: „Wenn ich dich X fragen würde, würdest du ja sagen?“ Das ist der Schlüssel zur einheitlichen Deutung.',fr:'Imagine demander : « Si je te demandais X, répondrais-tu ja ? » C’est la clé pour interpréter la réponse.'},
    {ru:'Пусть B отвечает на вопрос о том, является ли A случайным. По ответу можно выбрать персонажа, который точно не случайный.',en:'Let B answer a question about whether A is Random. From the answer you can choose someone who is definitely not Random.',es:'Haz que B responda sobre si A es Azar. Con esa respuesta puedes elegir a alguien que no sea Azar.',pt:'Faz B responder se A é o Acaso. A resposta permite escolher alguém que não seja o Acaso.',de:'Lass B beantworten, ob A der Zufall ist. Daraus kannst du jemanden wählen, der sicher nicht Zufall ist.',fr:'Fais répondre B à la question de savoir si A est le Hasard. Tu peux alors choisir quelqu’un qui n’est pas le Hasard.'},
    {ru:'После того как найден неслучайный бог, не трать вопросы на определение слова da. Вложенная формулировка обходит эту проблему.',en:'Once you have a non-Random god, do not waste a question on the meaning of da. The nested wording bypasses that problem.',es:'Una vez encontrado un dios que no sea Azar, no gastes una pregunta en el significado de da. La formulación anidada lo evita.',pt:'Depois de encontrares um deus que não seja o Acaso, não gastes uma pergunta com o significado de da. A formulação indireta resolve isso.',de:'Wenn du einen Nicht-Zufallsgott hast, verschwende keine Frage auf die Bedeutung von da. Die verschachtelte Form umgeht das Problem.',fr:'Une fois le dieu non-Aléatoire trouvé, ne gaspille pas de question sur le sens de da. La formulation imbriquée contourne le problème.'},
    {ru:'Дальше спроси неслучайного бога, является ли конкретный персонаж богом случая, используя ту же вложенную форму.',en:'Then ask the non-Random god whether a specific character is Random, using the same nested form.',es:'Luego pregunta al dios no aleatorio si un personaje concreto es Azar, usando la misma forma indirecta.',pt:'Depois pergunta ao deus não aleatório se uma personagem específica é o Acaso, usando a mesma forma indireta.',de:'Frage danach den Nicht-Zufallsgott, ob eine bestimmte Person Zufall ist, mit derselben verschachtelten Form.',fr:'Demande ensuite au dieu non-Aléatoire si un personnage précis est le Hasard, avec la même formulation.'},
    {ru:'Если узнаешь, кто случайный, две оставшиеся роли определяются методом исключения.',en:'Once you know who is Random, the remaining two roles are determined by elimination.',es:'Cuando sepas quién es Azar, las otras dos funciones se determinan por eliminación.',pt:'Quando souberes quem é o Acaso, os outros dois papéis são determinados por eliminação.',de:'Wenn du weißt, wer Zufall ist, ergeben sich die beiden übrigen Rollen durch Ausschluss.',fr:'Une fois le Hasard identifié, les deux autres rôles se déduisent par élimination.'},
    {ru:'Не пытайся задавать парадокс вроде «ты ответишь да?». Спрашивай о том, что бог сказал бы на обычный вопрос.',en:'Do not use a paradox such as “would you answer yes?”. Ask what the god would say to an ordinary question.',es:'No uses una paradoja como «¿responderías sí?». Pregunta qué diría el dios a una pregunta normal.',pt:'Não uses um paradoxo como “responderias sim?”. Pergunta o que o deus diria a uma pergunta normal.',de:'Verwende kein Paradoxon wie „Würdest du ja sagen?“. Frage, was der Gott auf eine normale Frage sagen würde.',fr:'N’utilise pas de paradoxe comme « répondrais-tu oui ? ». Demande ce que le dieu dirait à une question normale.'},
    {ru:'Итоговая схема: найти неслучайного → нейтрализовать da/ja вложенным вопросом → определить случайного → распределить две оставшиеся роли.',en:'The full plan: find a non-Random god → neutralize da/ja with a nested question → identify Random → assign the two remaining roles.',es:'Plan final: hallar un dios no aleatorio → neutralizar da/ja con una pregunta indirecta → identificar a Azar → asignar los otros dos roles.',pt:'Plano final: encontrar um deus não aleatório → neutralizar da/ja com uma pergunta indireta → identificar o Acaso → atribuir os dois papéis restantes.',de:'Gesamtplan: Nicht-Zufallsgott finden → da/ja mit verschachtelter Frage neutralisieren → Zufall bestimmen → übrige Rollen zuweisen.',fr:'Plan final : trouver un dieu non-Aléatoire → neutraliser da/ja par une question imbriquée → identifier le Hasard → attribuer les deux rôles restants.'}
  ];
  LABYRINTH_RIDDLES[9].answer = {
    ru:'Разбор по шагам. 1) Сначала нужно гарантированно найти бога, который не является богом случая. Например, спроси B: «Если я спрошу тебя “A — бог случая?”, ты ответишь “ja”?». Если B случайный, его ответ непредсказуем, но тогда A и C оба не являются случайными, поэтому C точно подходит. Если B не случайный, вложенный вопрос позволяет понять отношение B к A и выбрать подходящего персонажа. 2) Когда у тебя есть неслучайный бог, спрашивай его в той же вложенной форме: «Если бы я спросил тебя X, ты ответил бы ja?». Для правдивого и лживого богов такая конструкция даёт устойчивую интерпретацию, не требуя заранее знать, означает ли da «да», а ja «нет» или наоборот. 3) С помощью оставшихся вопросов определяй, кто из двух других — бог случая. 4) Последняя роль определяется автоматически: если один известен как Истина, а другой как Случай, третий — Ложь, и наоборот. Пример: ты установил, что C не случайный, а затем выяснил через вложенный вопрос, что A — Случай. Тогда B и C остаются Истиной и Ложью; ещё одним вопросом различаешь их. Ключ здесь не в угадывании слов da/ja, а в правильной вложенной формулировке вопросов.',
    en:'Step-by-step. 1) First guarantee that you have a god who is not Random. For example, ask B: “If I asked you ‘Is A Random?’, would you answer ja?” If B is Random, the other two are non-Random, so C is safe. If B is not Random, the nested wording lets you reason about A while neutralizing truth/falsehood and the unknown meaning of da/ja. 2) Once you have a non-Random god, use the same nested form: “If I asked you X, would you answer ja?” This gives a stable interpretation without first learning which word means yes. 3) Use the remaining questions to determine which other god is Random. 4) The last role follows by elimination. The key is the nested question, not guessing the meaning of da/ja.'
  };
}


/* ============================================================
   FINAL PRECISION PASS — 2026-08-22
   ============================================================ */
(function(){
  const LANG_NAMES={ru:'Русский',en:'English',es:'Español',pt:'Português',de:'Deutsch',fr:'Français'};

  // Language picker is a standalone panel; the underlying interface is not dimmed. Switching language is immediate and persistent.
  window.closeLanguagePicker=function(){
    document.getElementById('language-picker-panel')?.classList.remove('open');
    document.getElementById('lang-backdrop')?.remove();
  };
  window.toggleLanguagePicker=function(){
    const panel=document.getElementById('language-picker-panel'); if(!panel)return;
    if(panel.classList.contains('open')) return closeLanguagePicker();
    const title=document.getElementById('language-panel-title');
    if(title) title.textContent=(T[currentLang]?.language||'Language');
    panel.classList.add('open');
  };
  window.setLanguage=function(lang){
    if(!T[lang]) lang='en';
    currentLang=lang;
    localStorage.setItem('lang',lang); localStorage.setItem('lang_manual','1');
    updateLanguageUI(); renderThemeColors(); updateVipDisplay();
    closeLanguagePicker();
  };

  // Five fixed themes only. No kaleidoscope.
  if(Array.isArray(THEMES)){
    THEMES.splice(5);
  }
  window.renderThemeColors=function(){
    const container=document.querySelector('.theme-colors'); if(!container)return;
    container.innerHTML=THEMES.map(th=>`<button class="color-option ${th.id===currentTheme?'active':''} theme-${th.id}" data-theme="${th.id}" aria-label="${loc(th.name)}" onclick="event.stopPropagation();setTheme('${th.id}')" style="--swatch:${th.swatch}"><span></span></button>`).join('');
  };
  window.setTheme=function(theme){
    if(!THEMES.some(x=>x.id===theme)) theme='purple';
    document.body.className='theme-'+theme; currentTheme=theme; localStorage.setItem('theme',theme);
    const th=THEMES.find(x=>x.id===theme); const name=document.getElementById('theme-name');
    if(name) name.textContent=th?loc(th.name):theme;
    renderThemeColors();
  };

  // Premium wording.
  Object.assign(T.ru,{premiumAvailable:'Доступно',premiumRestricted:'Ограничен'});
  Object.assign(T.en,{premiumAvailable:'Available',premiumRestricted:'Restricted'});
  Object.assign(T.es,{premiumAvailable:'Disponible',premiumRestricted:'Limitado'});
  Object.assign(T.pt,{premiumAvailable:'Disponível',premiumRestricted:'Limitado'});
  Object.assign(T.de,{premiumAvailable:'Verfügbar',premiumRestricted:'Eingeschränkt'});
  Object.assign(T.fr,{premiumAvailable:'Disponible',premiumRestricted:'Limité'});

  // Promo wording with the whole Telegram-channel phrase linked and gold.
  const promoTexts={
    ru:'Актуальные промокоды — в нашем Telegram-канале.',
    en:'Current promo codes are in our Telegram channel.',
    es:'Códigos promocionales actuales — en nuestro canal de Telegram.',
    pt:'Códigos promocionais atuais — no nosso canal do Telegram.',
    de:'Aktuelle Promo-Codes gibt es in unserem Telegram-Kanal.',
    fr:'Les codes promo actuels sont sur notre canal Telegram.'
  };
  function renderPromoHint(){
    const el=document.getElementById('promo-hint'); if(!el)return;
    const raw=promoTexts[currentLang]||promoTexts.en;
    const idx=raw.toLowerCase().indexOf('telegram');
    if(idx<0){el.textContent=raw;return;}
    let end=idx+'telegram'.length;
    const tail=raw.slice(end);
    const suffixMatch=tail.match(/^(?:[- ](?:канале|канал|channel|canal|Kanal|chaîne))?/i);
    if(suffixMatch&&suffixMatch[0]) end+=suffixMatch[0].length;
    const phrase=raw.slice(idx,end);
    el.innerHTML=raw.slice(0,idx)+`<a href="${CHANNEL_URL}" target="_blank" rel="noopener">${phrase}</a>`+raw.slice(end);
  }

  const oldUpdateLanguageUI=window.updateLanguageUI;
  window.updateLanguageUI=function(){
    if(typeof oldUpdateLanguageUI==='function') oldUpdateLanguageUI();
    const cur=document.getElementById('language-current'); if(cur) cur.textContent=LANG_NAMES[currentLang]||LANG_NAMES.en;
    const title=document.getElementById('language-panel-title'); if(title) title.textContent=T[currentLang]?.language||'Language';
    renderPromoHint();
    document.documentElement.lang=currentLang;
  };

  // Capsule: setting row never shows the date; modal has sentence -> date/time -> closing line.
  window.initFirstVisit=function(){
    let firstVisit=localStorage.getItem('first_visit_at');
    if(!firstVisit){firstVisit=new Date().toISOString();localStorage.setItem('first_visit_at',firstVisit);}
    const el=document.getElementById('first-visit-date'); if(el) el.textContent='';
  };
  window.showTimeCapsule=function(){
    initFirstVisit();
    const d=new Date(localStorage.getItem('first_visit_at'));
    const datePart=d.toLocaleDateString(DATE_LOCALES[currentLang]||'en-GB',{day:'2-digit',month:'long',year:'numeric'});
    const timePart=d.toLocaleTimeString(DATE_LOCALES[currentLang]||'en-GB',{hour:'2-digit',minute:'2-digit',hour12:false});
    const copy={
      ru:{first:'Ты впервые вошёл в Your Destiny:',after:'С этого момента началась твоя история в этом мире.'},
      en:{first:'You first entered Your Destiny:',after:'From this moment, your story in this world began.'},
      es:{first:'Entraste por primera vez en Your Destiny:',after:'Desde este momento comenzó tu historia en este mundo.'},
      pt:{first:'Entraste pela primeira vez no Your Destiny:',after:'A partir deste momento começou a tua história neste mundo.'},
      de:{first:'Du bist erstmals in Your Destiny eingetreten:',after:'Von diesem Moment an begann deine Geschichte in dieser Welt.'},
      fr:{first:'Tu es entré pour la première fois dans Your Destiny :',after:'À partir de cet instant, ton histoire dans cet univers a commencé.'}
    }[currentLang]||{};
    const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="time-capsule-card"><div class="capsule-title">${t('timeCapsule')}</div><div class="capsule-text">${copy.first}</div><div class="capsule-date">${datePart}</div><div class="capsule-time">${timePart}</div><div class="capsule-text capsule-after">${copy.after}</div></div>`;
    document.body.appendChild(overlay);
  };

  // Rating: large stars inside one elegant outline, no per-star boxes.
  window.showRatingModal=function(){
    const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en; const saved=Number(localStorage.getItem('your_destiny_rating')||0);
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="rating-card ${saved?'has-rating':'compact'}" id="rating-card"><div class="rating-title">${texts.title}</div><div class="rating-stars" role="radiogroup" aria-label="${texts.title}">${[1,2,3,4,5].map(i=>`<button class="rating-star ${i<=saved?'selected':''}" data-rating="${i}" aria-label="${i}" onclick="selectRating(${i})"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.7l2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.27l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.7z"/></svg></button>`).join('')}</div><div class="rating-feedback" id="rating-feedback" ${saved?'':'hidden'}><div class="rating-thanks">${texts.thanks}</div><div class="rating-text" id="rating-text">${saved?(texts[saved]||texts[5]):''}</div><a class="rating-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${texts.open}</a></div></div>`;
    document.body.appendChild(overlay);
  };
  window.selectRating=function(value){
    localStorage.setItem('your_destiny_rating',String(value));
    const card=document.getElementById('rating-card'); const stars=document.querySelectorAll('.rating-star');
    stars.forEach(star=>star.classList.toggle('selected',Number(star.dataset.rating)<=value));
    card?.classList.remove('compact'); card?.classList.add('has-rating');
    const feedback=document.getElementById('rating-feedback'); if(feedback) feedback.hidden=false;
    const texts=RATING_TEXTS[currentLang]||RATING_TEXTS.en;
    const text=document.getElementById('rating-text'); if(text) text.textContent=texts[value]||texts[5];
    const thanks=document.querySelector('.rating-thanks'); if(thanks) thanks.textContent=texts.thanks;
    const channel=document.querySelector('.rating-channel-btn'); if(channel) channel.textContent=texts.open;
  };

  // Schedule is intentionally sourced from its own editable file.
  window.showStorySchedule=function(){
    const c=(window.STORY_SCHEDULE_COPY&&window.STORY_SCHEDULE_COPY[currentLang])||window.STORY_SCHEDULE_COPY.en;
    const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="schedule-card"><div class="schedule-title">${c.title}</div><div class="schedule-lead">${c.lead}</div><div class="schedule-divider"></div><div class="schedule-future"></div><div class="schedule-note">${c.note}</div></div>`;
    document.body.appendChild(overlay);
  };

  // Support page remains clean in the settings list; wallet is only visible after opening it.
  // Author flow: attractive introduction -> strict transfer terms -> final confirmation.
  const authorIntro={
    ru:'Есть история, сцена, загадка или идея, которую хочется увидеть внутри Your Destiny? Поделитесь ею с нами. Возможно, именно ваш замысел однажды станет частью мира игры.',
    en:'Have a story, scene, riddle or idea you would like to see inside Your Destiny? Share it with us. Your idea may one day become part of the game world.',
    es:'¿Tienes una historia, escena, acertijo o idea que te gustaría ver en Your Destiny? Compártela con nosotros. Tu idea puede convertirse algún día en parte del mundo del juego.',
    pt:'Tens uma história, cena, enigma ou ideia que gostarias de ver no Your Destiny? Partilha-a connosco. A tua ideia pode um dia tornar-se parte do mundo do jogo.',
    de:'Du hast eine Geschichte, Szene, ein Rätsel oder eine Idee, die du in Your Destiny sehen möchtest? Teile sie mit uns. Deine Idee könnte eines Tages Teil der Spielwelt werden.',
    fr:'Vous avez une histoire, une scène, une énigme ou une idée que vous aimeriez voir dans Your Destiny ? Partagez-la avec nous. Votre idée pourrait un jour devenir une partie du monde du jeu.'
  };
  const authorLegal={
    ru:'Отправляя материал, вы подтверждаете, что вправе его передать. С момента отправки и принятия материала все исключительные имущественные права на него передаются Your Destiny безвозмездно и без ограничения территории: право использовать, изменять, сокращать, дополнять, перерабатывать, переводить, адаптировать, объединять с другими материалами, публиковать, распространять, размещать, лицензировать, передавать третьим лицам и монетизировать материал любым способом. Вы не требуете за этот материал оплату, роялти, долю дохода, обязательное указание имени, удаление материала или прекращение его использования. Your Destiny самостоятельно решает, использовать ли материал, когда и в каком виде. Отправляя материал, вы также подтверждаете отсутствие претензий третьих лиц и берёте на себя ответственность за права на предоставленный материал.',
    en:'By submitting material, you confirm that you are entitled to submit it. From submission and acceptance, all exclusive economic rights in the material are transferred to Your Destiny without compensation and without territorial limitation, including the right to use, edit, shorten, expand, adapt, translate, combine, publish, distribute, display, license, transfer to third parties and monetize the material in any manner. You do not claim payment, royalties, revenue share, mandatory attribution, removal of the material or cessation of its use. Your Destiny independently decides whether, when and in what form the material is used. You also confirm that no third-party claims prevent the submission and accept responsibility for the rights to the material.',
    es:'Al enviar material, confirmas que tienes derecho a entregarlo. Desde su envío y aceptación, todos los derechos patrimoniales exclusivos sobre el material se transfieren a Your Destiny sin remuneración y sin limitación territorial, incluido el derecho a usarlo, modificarlo, reducirlo, ampliarlo, adaptarlo, traducirlo, combinarlo, publicarlo, distribuirlo, mostrarlo, licenciarlo, transferirlo a terceros y monetizarlo de cualquier forma. No reclamarás pago, regalías, participación en ingresos, atribución obligatoria, retirada del material ni cese de su uso. Your Destiny decide por sí mismo si, cuándo y en qué forma utilizará el material. También confirmas que no existen reclamaciones de terceros que impidan su entrega y asumes la responsabilidad por los derechos sobre el material.',
    pt:'Ao enviar material, confirmas que tens o direito de o entregar. A partir do envio e aceitação, todos os direitos patrimoniais exclusivos sobre o material são transferidos para o Your Destiny sem remuneração e sem limitação territorial, incluindo o direito de usar, editar, reduzir, ampliar, adaptar, traduzir, combinar, publicar, distribuir, exibir, licenciar, transferir a terceiros e monetizar o material de qualquer forma. Não reclamarás pagamento, royalties, participação em receitas, atribuição obrigatória, remoção do material ou cessação da sua utilização. O Your Destiny decide autonomamente se, quando e em que forma utilizará o material. Confirmas ainda que não existem reclamações de terceiros que impeçam o envio e assumes a responsabilidade pelos direitos sobre o material.',
    de:'Mit der Einreichung bestätigst du, dass du zur Übermittlung berechtigt bist. Mit Einreichung und Annahme werden sämtliche ausschließlichen vermögensrechtlichen Rechte am Material unentgeltlich und ohne territoriale Begrenzung auf Your Destiny übertragen, einschließlich Nutzung, Bearbeitung, Kürzung, Erweiterung, Anpassung, Übersetzung, Verbindung, Veröffentlichung, Verbreitung, Darstellung, Lizenzierung, Übertragung an Dritte und Monetarisierung. Du verlangst dafür keine Zahlung, Tantiemen, Umsatzbeteiligung, verpflichtende Namensnennung, Entfernung oder Beendigung der Nutzung. Your Destiny entscheidet selbst, ob, wann und in welcher Form das Material verwendet wird. Du bestätigst außerdem, dass keine Rechte Dritter der Übermittlung entgegenstehen, und übernimmst die Verantwortung für die Rechte am Material.',
    fr:'En envoyant un contenu, vous confirmez être autorisé à le transmettre. Dès son envoi et son acceptation, l’ensemble des droits patrimoniaux exclusifs sur le contenu est transféré à Your Destiny sans rémunération et sans limitation territoriale, notamment le droit de l’utiliser, modifier, réduire, compléter, adapter, traduire, combiner, publier, distribuer, afficher, concéder sous licence, transférer à des tiers et monétiser de toute manière. Vous ne réclamez ni paiement, ni redevances, ni part des revenus, ni attribution obligatoire, ni retrait du contenu, ni cessation de son utilisation. Your Destiny décide librement si, quand et sous quelle forme le contenu est utilisé. Vous confirmez également qu’aucun droit de tiers ne s’oppose à l’envoi et assumez la responsabilité des droits sur le contenu.'
  };
  const authorContinue={ru:'Продолжить',en:'Continue',es:'Continuar',pt:'Continuar',de:'Weiter',fr:'Continuer'};
  const authorConfirm={ru:'Подтвердите ещё раз: вы прочитали условия, понимаете, что после принятия материала права переходят Your Destiny без выплаты и дальнейших имущественных требований с вашей стороны, и хотите перейти к отправке материала.',en:'Confirm once more: you have read the terms, understand that after acceptance the rights transfer to Your Destiny without payment or further economic claims from you, and want to proceed to submission.',es:'Confirma una vez más: has leído las condiciones, entiendes que tras la aceptación los derechos pasan a Your Destiny sin pago ni futuras reclamaciones económicas por tu parte y quieres continuar.',pt:'Confirma novamente: leste as condições, compreendes que após a aceitação os direitos passam para o Your Destiny sem pagamento nem futuras reivindicações económicas da tua parte e queres continuar.',de:'Bestätige erneut: Du hast die Bedingungen gelesen, verstehst, dass die Rechte nach Annahme ohne Zahlung und ohne weitere vermögensrechtliche Ansprüche auf Your Destiny übergehen, und möchtest fortfahren.',fr:'Confirmez à nouveau : vous avez lu les conditions, comprenez qu’après acceptation les droits sont transférés à Your Destiny sans paiement ni autres revendications patrimoniales de votre part, et souhaitez continuer.'};
  const authorAgree={ru:'Согласен — написать',en:'I agree — write',es:'Acepto — escribir',pt:'Aceito — escrever',de:'Ich stimme zu — schreiben',fr:"J’accepte — écrire"};
  window.showBecomeAuthor=function(){
    const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="author-card legal-author-card author-intro-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-subtitle">${authorIntro[currentLang]||authorIntro.en}</div><button class="author-channel-btn" onclick="showAuthorLegal()">${authorContinue[currentLang]||authorContinue.en}</button></div>`;
    document.body.appendChild(overlay);
  };
  window.showAuthorLegal=function(){
    document.querySelector('.fate-overlay')?.remove(); const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><button class="author-back-check" onclick="this.closest('.fate-overlay').remove();showBecomeAuthor()" aria-label="Back">↩</button><div class="author-card legal-author-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-legal-text">${authorLegal[currentLang]||authorLegal.en}</div><button class="author-channel-btn" onclick="showAuthorConfirm()">${authorContinue[currentLang]||authorContinue.en}</button></div>`;
    document.body.appendChild(overlay);
  };
  window.showAuthorConfirm=function(){
    document.querySelector('.fate-overlay')?.remove(); const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><button class="author-back-check" onclick="this.closest('.fate-overlay').remove();showAuthorLegal()" aria-label="Back">↩</button><div class="author-card legal-confirm-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-legal-text">${authorConfirm[currentLang]||authorConfirm.en}</div><a class="author-channel-btn" href="${DIRECT_URL}" target="_blank" rel="noopener">${authorAgree[currentLang]||authorAgree.en}</a></div>`;
    document.body.appendChild(overlay);
  };

  // About: explicitly explains what is inside the game, without the old wording.
  window.showAbout=function(){
    const copy={
      ru:'Здесь ты можешь проходить истории и принимать решения, отвечать на вопросы, разгадывать логические задачи, открывать разные варианты своей судьбы и читать короткие мысли о выборе. Каждый раздел устроен по-своему, поэтому можно просто выбрать то, что интересно сейчас, и продолжить с того места, где остановился.',
      en:'Here you can play through stories and make choices, answer questions, solve logic challenges, explore different versions of your destiny and read short thoughts about choice. Each section works differently, so simply open whatever interests you now and continue from where you stopped.',
      es:'Aquí puedes recorrer historias y tomar decisiones, responder preguntas, resolver retos de lógica, descubrir distintas versiones de tu destino y leer pensamientos breves sobre las decisiones. Cada sección funciona de forma diferente, así que puedes abrir lo que te interese y continuar donde lo dejaste.',
      pt:'Aqui podes percorrer histórias e tomar decisões, responder a perguntas, resolver desafios de lógica, descobrir diferentes versões do teu destino e ler pensamentos breves sobre escolhas. Cada secção funciona de forma diferente, por isso podes abrir o que te interessa e continuar de onde paraste.',
      de:'Hier kannst du Geschichten erleben und Entscheidungen treffen, Fragen beantworten, Logikaufgaben lösen, verschiedene Facetten deines Schicksals entdecken und kurze Gedanken über Entscheidungen lesen. Jeder Bereich funktioniert etwas anders, sodass du einfach das öffnen kannst, was dich gerade interessiert.',
      fr:'Ici, vous pouvez parcourir des histoires et faire des choix, répondre à des questions, résoudre des défis logiques, découvrir différentes facettes de votre destin et lire de courtes pensées sur les décisions. Chaque section fonctionne différemment : ouvrez simplement ce qui vous intéresse et reprenez là où vous vous êtes arrêté.'
    };
    const overlay=document.createElement('div'); overlay.className='fate-overlay active'; overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="fate-container about-card about-card-final"><div class="fate-final-title">${t('about')}</div><div class="about-body">${copy[currentLang]||copy.en}</div></div>`; document.body.appendChild(overlay);
  };

  // Wisdom: immediate in-place switching; no modal replacement/lag.
  window.showWisdom=function(){
    const overlay=document.createElement('div'); overlay.className='wisdom-overlay active';
    document.body.appendChild(overlay); renderWisdomCard(overlay);
  };
  window.nextWisdom=function(){
    const overlay=document.querySelector('.wisdom-overlay'); if(!overlay)return;
    renderWisdomCard(overlay);
  };

  // Better final channel copy.
  const finalChannel={
    ru:'Заглядывайте в наш Telegram-канал — мы уже приготовили для вас похожие задачи.',
    en:'Visit our Telegram channel — we have already prepared similar challenges for you.',
    es:'Visita nuestro canal de Telegram — ya hemos preparado retos parecidos para ti.',
    pt:'Visita o nosso canal do Telegram — já preparámos desafios semelhantes para ti.',
    de:'Besuche unseren Telegram-Kanal — wir haben bereits ähnliche Aufgaben für dich vorbereitet.',
    fr:'Rejoignez notre canal Telegram — nous avons déjà préparé des défis similaires pour vous.'
  };
  Object.keys(finalChannel).forEach(k=>{T[k].finalChannel=finalChannel[k];});

  // Chronicles: one decimal place, always exactly 100.0%; immediate answer result;
  // no generic disclaimer text. Mini-archetype + light pros/cons.
  function normalizedStats(st){
    const vals=[Number(st.a)||0,Number(st.b)||0,Number(st.c)||0], sum=vals.reduce((a,b)=>a+b,0)||1;
    let out=vals.map(v=>Math.round(v/sum*1000)/10); const diff=Math.round((100-out.reduce((a,b)=>a+b,0))*10)/10; out[2]=Math.round((out[2]+diff)*10)/10; return out;
  }
  function miniArchetype(d,choice){
    const text=String(loc(d[choice])).toLowerCase();
    if(/эконом|сэконом|дешев|сберег|save|cheap|econom|économ|spar/.test(text)) return {ru:'Рациональный Стратег',en:'Rational Strategist'};
    if(/удоб|комфорт|отдых|comfort|rest|confort|komfort/.test(text)) return {ru:'Ценитель Комфорта',en:'Comfort Seeker'};
    if(/персп|будущ|рост|career|future|growth|perspect/.test(text)) return {ru:'Инвестор-Провидец',en:'Future Investor'};
    if(/помог|поддерж|выслуш|listen|help|support|aide|hilf/.test(text)) return {ru:'Внимательный Союзник',en:'Attentive Ally'};
    if(/план|plan|strateg|стратег/.test(text)) return {ru:'Системный Планировщик',en:'Systematic Planner'};
    if(/нов|спонтан|путеш|explor|new|voyag|neu|nouveau/.test(text)) return {ru:'Исследователь Возможностей',en:'Opportunity Explorer'};
    return {ru:'Практичный Наблюдатель',en:'Practical Observer'};
  }
  const miniByChoice={
    ru:{a:'Экономия часто даёт контроль над ресурсами.',b:'Удобство снижает ежедневное напряжение.',c:'Перспектива помогает смотреть дальше текущего момента.'},
    en:{a:'Saving often gives you control over resources.',b:'Convenience reduces daily friction.',c:'Perspective helps you look beyond the current moment.'}
  };
  function fateAnalysis(d,choice){
    const choiceText=loc(d[choice]);
    const fallback={
      ru:`Ты выбрал «${choiceText}». Этот ответ показывает твою естественную реакцию на подобные ситуации.`,
      en:`You chose “${choiceText}”. This answer shows your natural reaction to situations like this.`,
      es:`Has elegido «${choiceText}». Esta respuesta muestra tu reacción natural ante situaciones parecidas.`,
      pt:`Escolheste «${choiceText}». Esta resposta mostra a tua reação natural perante situações semelhantes.`,
      de:`Du hast „${choiceText}“ gewählt. Diese Antwort zeigt deine natürliche Reaktion auf ähnliche Situationen.`,
      fr:`Tu as choisi « ${choiceText} ». Cette réponse montre ta réaction naturelle face à ce type de situation.`
    };
    return `<div class="fate-short-analysis">${fallback[currentLang]||fallback.en}</div>`;
  }
  window.renderFateQuestion=function(index){
    const d=FATE_DILEMMAS[index]; let overlay=document.getElementById('fate-overlay');
    if(!overlay){overlay=document.createElement('div');overlay.id='fate-overlay';overlay.className='fate-overlay active';document.body.appendChild(overlay);} overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button><div class="fate-container"><div class="fate-counter">${index+1} / ${FATE_DILEMMAS.length}</div><div class="fate-question">${loc(d.question)}</div><div class="fate-choices" id="fate-choices"><button class="fate-btn" onclick="answerFate(${index},'a')"><span class="fate-btn-text">${loc(d.a)}</span></button><button class="fate-btn" onclick="answerFate(${index},'b')"><span class="fate-btn-text">${loc(d.b)}</span></button><button class="fate-btn" onclick="answerFate(${index},'c')"><span class="fate-btn-text">${loc(d.c)}</span></button></div><div class="fate-result" id="fate-result" style="display:none"><div class="fate-stats">${['a','b','c'].map(k=>`<div class="fate-stat-bar"><div class="fate-stat-fill" style="width:${normalizedStats(d.stats)[k==='a'?0:k==='b'?1:2]}%"></div><span class="fate-stat-label">${normalizedStats(d.stats)[k==='a'?0:k==='b'?1:2].toFixed(1)}%</span></div>`).join('')}</div><div class="fate-analysis" id="fate-analysis"></div><button class="fate-next" onclick="nextFateQuestion()">${loc(NEXT_BUTTON_TEXTS[index%NEXT_BUTTON_TEXTS.length])}</button></div></div>`;
  };
  window.answerFate=function(index,choice){
    const d=FATE_DILEMMAS[index]; const state=JSON.parse(localStorage.getItem('fate_dilemmas')||'{"currentIndex":0,"answers":[]}'); state.answers.push({index,choice}); state.currentIndex=index+1; localStorage.setItem('fate_dilemmas',JSON.stringify(state));
    const result=document.getElementById('fate-result'), choices=document.getElementById('fate-choices'); if(!result||!choices)return;
    choices.style.display='none'; result.style.display='block'; const analysis=document.getElementById('fate-analysis'); if(analysis)analysis.innerHTML=fateAnalysis(d,choice);
  };

  // True Destiny: 23 questions and exactly 8 result types; restart works immediately.
  const Q=(q,opts)=>({question:q,options:opts});
  const tr=(ru,en,es,pt,de,fr)=>({ru,en,es,pt,de,fr});
  const opt=(txt,scores)=>({text:txt,scores});
  const S=(k)=>({leader:k==='leader'?2:0,planner:k==='planner'?2:0,analyst:k==='analyst'?2:0,empath:k==='empath'?2:0,creator:k==='creator'?2:0,explorer:k==='explorer'?2:0,realist:k==='realist'?2:0,dreamer:k==='dreamer'?2:0});
  const extra=[
    Q(tr('Тебе нужно выбрать подарок близкому человеку. Что важнее всего?','You need to choose a gift for someone close. What matters most?','Tienes que elegir un regalo para alguien cercano. ¿Qué importa más?','Precisas de escolher um presente para alguém próximo. O que importa mais?','Du musst ein Geschenk für einen nahestehenden Menschen wählen. Was ist am wichtigsten?','Tu dois choisir un cadeau pour un proche. Qu’est-ce qui compte le plus?'),[
      opt(tr('Практичность','Practicality','Practicidad','Praticidade','Praktikabilität','Praticité'),S('realist')),opt(tr('Личная история','Personal meaning','Significado personal','Significado pessoal','Persönliche Bedeutung','Signification personnelle'),S('empath')),opt(tr('Эффект неожиданности','Surprise factor','Factor sorpresa','Efeito surpresa','Überraschungseffekt','Effet de surprise'),S('creator')),opt(tr('Что-то совсем необычное','Something unusual','Algo inusual','Algo fora do comum','Etwas Ungewöhnliches','Quelque chose d’inhabituel'),S('explorer'))]),
    Q(tr('Если в споре друзей оба уверены в своей правоте, что ты сделаешь?','If two friends are both sure they are right, what do you do?','Si dos amigos están seguros de tener razón, ¿qué haces?','Se dois amigos têm a certeza de ter razão, o que fazes?','Wenn zwei Freunde überzeugt sind, recht zu haben, was tust du?','Si deux amis sont certains d’avoir raison, que fais-tu?'),[
      opt(tr('Разберу факты','Look at the facts','Revisar los hechos','Analisar os factos','Fakten prüfen','Examiner les faits'),S('analyst')),opt(tr('Попробую их примирить','Try to reconcile them','Intentar reconciliarlos','Tentar reconciliá-los','Sie versöhnen','Les réconcilier'),S('empath')),opt(tr('Предложу конкретное решение','Offer a concrete solution','Proponer una solución concreta','Propor uma solução concreta','Eine konkrete Lösung vorschlagen','Proposer une solution concrète'),S('leader')),opt(tr('Оставлю им пространство самим разобраться','Give them space','Darles espacio','Dar-lhes espaço','Ihnen Raum geben','Leur laisser de l’espace'),S('analyst'))]),
    Q(tr('Ты замечаешь, что дома давно пора что-то изменить. С чего начнёшь?','You notice that something at home should have been changed long ago. Where do you start?','Notas que en casa hace tiempo que algo necesita cambiar. ¿Por dónde empiezas?','Notas que em casa algo já devia ter mudado. Por onde começas?','Du merkst, dass zu Hause längst etwas verändert werden sollte. Wo beginnst du?','Tu remarques qu’une chose à la maison devrait changer depuis longtemps. Par quoi commences-tu?'),[
      opt(tr('Составлю список','Make a list','Hacer una lista','Fazer uma lista','Eine Liste erstellen','Faire une liste'),S('planner')),opt(tr('Начну сразу с самого заметного','Start with the most visible thing','Empezar por lo más visible','Começar pelo mais visível','Mit dem Auffälligsten beginnen','Commencer par le plus visible'),S('leader')),opt(tr('Поищу красивую идею','Find a creative idea','Buscar una idea creativa','Procurar uma ideia criativa','Eine kreative Idee suchen','Chercher une idée créative'),S('creator')),opt(tr('Посмотрю варианты и сравню','Compare options','Comparar opciones','Comparar opções','Möglichkeiten vergleichen','Comparer les options'),S('analyst'))]),
    Q(tr('Что ты скорее выберешь для свободного дня в незнакомом городе?','What would you choose for a free day in an unfamiliar city?','¿Qué elegirías para un día libre en una ciudad desconocida?','O que escolherias para um dia livre numa cidade desconhecida?','Was würdest du an einem freien Tag in einer unbekannten Stadt wählen?','Que choisirais-tu pour une journée libre dans une ville inconnue?'),[
      opt(tr('Заранее составлю маршрут','Plan a route in advance','Planear una ruta','Planear um percurso','Eine Route planen','Préparer un itinéraire'),S('planner')),opt(tr('Просто пойду куда интересно','Just wander','Ir donde parezca interesante','Ir onde parecer interessante','Einfach losgehen','Flâner selon l’envie'),S('explorer')),opt(tr('Найду места с необычной историей','Find places with unusual stories','Buscar lugares con historias curiosas','Procurar lugares com histórias curiosas','Orte mit ungewöhnlichen Geschichten suchen','Chercher des lieux aux histoires étonnantes'),S('dreamer')),opt(tr('Выберу самое удобное и известное','Choose the convenient known places','Elegir lugares cómodos y conocidos','Escolher lugares conhecidos e convenientes','Bekannte und bequeme Orte wählen','Choisir des lieux connus et pratiques'),S('realist'))]),
    Q(tr('Если тебе предлагают выступить перед людьми без подготовки, что сильнее всего мешает?','If you are asked to speak to people without preparation, what gets in your way most?','Si te piden hablar ante personas sin preparación, ¿qué te frena más?','Se te pedirem para falar sem preparação, o que mais te trava?','Wenn du unvorbereitet vor Menschen sprechen sollst, was hindert dich am meisten?','Si on te demande de parler sans préparation, qu’est-ce qui te freine le plus?'),[
      opt(tr('Страх ошибиться','Fear of making a mistake','Miedo a equivocarme','Medo de errar','Angst vor Fehlern','Peur de me tromper'),S('analyst')),opt(tr('Боязнь разочаровать людей','Fear of disappointing people','Miedo a decepcionar','Medo de desiludir','Angst, Menschen zu enttäuschen','Peur de décevoir'),S('empath')),opt(tr('Не люблю ограничения без подготовки','I dislike being unprepared','No me gustan las limitaciones sin preparación','Não gosto de limitações sem preparação','Ich mag unvorbereitete Einschränkungen nicht','Je n’aime pas les contraintes sans préparation'),S('explorer')),opt(tr('Наоборот, нравится импровизация','I actually like improvising','Me gusta improvisar','Na verdade gosto de improvisar','Ich improvisiere gern','J’aime improviser'),S('creator'))]),
    Q(tr('У тебя появился шанс бесплатно научиться одному новому навыку. Что выберешь?','You get a free chance to learn one new skill. What do you choose?','Puedes aprender gratis una nueva habilidad. ¿Cuál eliges?','Podes aprender gratuitamente uma nova competência. Qual escolhes?','Du kannst kostenlos eine neue Fähigkeit lernen. Welche wählst du?','Tu peux apprendre gratuitement une nouvelle compétence. Laquelle choisis-tu?'),[
      opt(tr('То, что пригодится в работе','Something useful for work','Algo útil para el trabajo','Algo útil para o trabalho','Etwas Nützliches für die Arbeit','Quelque chose d’utile au travail'),S('realist')),opt(tr('То, что давно интересно','Something I have long been curious about','Algo que me interesa desde hace tiempo','Algo que me interessa há muito','Etwas, das mich schon lange interessiert','Quelque chose qui m’intéresse depuis longtemps'),S('explorer')),opt(tr('То, что поможет создать свой проект','Something that helps me create a project','Algo que ayude a crear mi proyecto','Algo que ajude a criar um projeto','Etwas für ein eigenes Projekt','Quelque chose pour créer mon projet'),S('creator')),opt(tr('То, что расширит мой кругозор','Something that broadens my view','Algo que amplíe mi visión','Algo que amplie os meus horizontes','Etwas, das meinen Horizont erweitert','Quelque chose qui élargit mon horizon'),S('dreamer'))]),
    Q(tr('Если утром всё идёт не по плану, что помогает тебе быстрее прийти в себя?','When your morning goes off plan, what helps you recover fastest?','Cuando tu mañana sale mal, ¿qué te ayuda a recuperarte?','Quando a manhã corre mal, o que te ajuda a recuperar mais depressa?','Wenn dein Morgen aus dem Plan läuft, was hilft dir am schnellsten?','Quand ta matinée déraille, qu’est-ce qui t’aide à te reprendre?'),[
      opt(tr('Новый план на день','A new plan','Un nuevo plan','Um novo plano','Ein neuer Plan','Un nouveau plan'),S('planner')),opt(tr('Пауза и тишина','A pause and quiet','Una pausa y silencio','Uma pausa e silêncio','Eine Pause und Ruhe','Une pause et du calme'),S('realist')),opt(tr('Разговор с близким','Talk to someone close','Hablar con alguien cercano','Falar com alguém próximo','Mit jemandem Nahestehendem sprechen','Parler à un proche'),S('empath')),opt(tr('Переключиться на что-то интересное','Switch to something interesting','Cambiar a algo interesante','Mudar para algo interessante','Zu etwas Interessantem wechseln','Passer à quelque chose d’intéressant'),S('explorer'))]),
    Q(tr('Ты видишь старую фотографию, которая вызывает сильное воспоминание. Что хочется сделать?','You see an old photo that brings back a strong memory. What do you want to do?','Ves una foto antigua que despierta un recuerdo fuerte. ¿Qué quieres hacer?','Vês uma fotografia antiga que traz uma memória forte. O que te apetece fazer?','Du siehst ein altes Foto, das eine starke Erinnerung weckt. Was möchtest du tun?','Tu vois une vieille photo qui réveille un souvenir fort. Que veux-tu faire?'),[
      opt(tr('Рассмотреть детали','Study the details','Mirar los detalles','Observar os detalhes','Details betrachten','Regarder les détails'),S('analyst')),opt(tr('Позвонить человеку с фото','Call someone from the photo','Llamar a alguien de la foto','Ligar a alguém da fotografia','Jemanden auf dem Foto anrufen','Appeler quelqu’un de la photo'),S('empath')),opt(tr('Придумать, как сохранить воспоминание','Find a way to preserve it','Buscar cómo conservar el recuerdo','Pensar em como guardar a memória','Eine Erinnerung bewahren','Trouver comment préserver le souvenir'),S('creator')),opt(tr('Представить, что было до и после','Imagine before and after','Imaginar el antes y el después','Imaginar o antes e o depois','Davor und danach vorstellen','Imaginer avant et après'),S('dreamer'))]),
    Q(tr('Если нужно выбрать между двумя одинаково хорошими вариантами, что тебе помогает?','If two options are equally good, what helps you choose?','Si dos opciones son igual de buenas, ¿qué te ayuda a elegir?','Se duas opções são igualmente boas, o que te ajuda a escolher?','Wenn zwei Optionen gleich gut sind, was hilft dir?','Si deux options se valent, qu’est-ce qui t’aide à choisir?'),[
      opt(tr('Плюсы и минусы','Pros and cons','Pros y contras','Prós e contras','Vor- und Nachteile','Pour et contre'),S('analyst')),opt(tr('Первое внутреннее ощущение','First gut feeling','Primera sensación','Primeira sensação','Erstes Bauchgefühl','Première intuition'),S('dreamer')),opt(tr('Что будет проще реализовать','What will be easier to implement','Qué será más fácil de realizar','O que será mais fácil de concretizar','Was leichter umzusetzen ist','Ce qui sera plus facile à réaliser'),S('realist')),opt(tr('Что даст больше нового опыта','What gives more new experience','Qué dará más experiencia nueva','O que dará mais experiência nova','Was mehr neue Erfahrung bringt','Ce qui apporte plus d’expérience'),S('explorer'))]),
    Q(tr('Как ты относишься к человеку, который полностью поменял профессию?','How do you feel about someone who completely changed careers?','¿Cómo ves a alguien que cambió de profesión por completo?','Como vês alguém que mudou totalmente de profissão?','Wie siehst du jemanden, der den Beruf komplett gewechselt hat?','Que penses-tu de quelqu’un qui a complètement changé de métier?'),[
      opt(tr('Смело','Brave','Valiente','Corajoso','Mutig','Courageux'),S('explorer')),opt(tr('Разумно, если есть план','Reasonable with a plan','Razonable con un plan','Razoável com um plano','Vernünftig mit Plan','Raisonnable avec un plan'),S('planner')),opt(tr('Главное — чтобы человек был счастлив','What matters is happiness','Lo importante es que sea feliz','O importante é ser feliz','Hauptsache glücklich','L’important est d’être heureux'),S('empath')),opt(tr('Зависит от причин','Depends on the reasons','Depende de las razones','Depende das razões','Hängt von den Gründen ab','Cela dépend des raisons'),S('analyst'))]),
    Q(tr('Тебе предлагают изменить привычный порядок дня на неделю. Что думаешь первым?','You are asked to change your daily routine for a week. What do you think first?','Te proponen cambiar tu rutina durante una semana. ¿Qué piensas primero?','Propõem-te mudar a rotina durante uma semana. O que pensas primeiro?','Du sollst eine Woche lang deine Routine ändern. Was denkst du zuerst?','On te propose de changer ta routine pendant une semaine. À quoi penses-tu d’abord?'),[
      opt(tr('Как это скажется на результате','How it will affect results','Cómo afectará al resultado','Como afetará o resultado','Wie es das Ergebnis beeinflusst','Comment cela affectera le résultat'),S('realist')),opt(tr('Что можно попробовать нового','What new thing I can try','Qué cosa nueva puedo probar','O que posso experimentar','Was Neues ich ausprobieren kann','Ce que je peux essayer de nouveau'),S('explorer')),opt(tr('Как лучше всё организовать','How to organize it','Cómo organizarlo mejor','Como organizar tudo','Wie man alles organisiert','Comment tout organiser'),S('planner')),opt(tr('Может быть, это вдохновит','Maybe it will inspire me','Quizá me inspire','Talvez me inspire','Vielleicht inspiriert es mich','Cela pourrait peut-être m’inspirer'),S('dreamer'))]),
    Q(tr('Если твой знакомый боится начать новое дело, что ты скажешь?','If someone you know is afraid to start something new, what do you say?','Si alguien que conoces teme empezar algo nuevo, ¿qué le dices?','Se alguém que conheces tem medo de começar algo novo, o que dizes?','Wenn jemand, den du kennst, Angst vor etwas Neuem hat, was sagst du?','Si quelqu’un que tu connais a peur de commencer quelque chose de nouveau, que lui dis-tu?'),[
      opt(tr('Начни с маленького шага','Start with a small step','Empieza con un pequeño paso','Começa por um pequeno passo','Mit einem kleinen Schritt beginnen','Commence par un petit pas'),S('planner')),opt(tr('Ты не узнаешь, пока не попробуешь','You will not know until you try','No lo sabrás hasta probar','Não saberás até tentar','Du weißt es erst, wenn du es versuchst','Tu ne sauras qu’en essayant'),S('explorer')),opt(tr('Я помогу тебе разобраться','I will help you figure it out','Te ayudaré a entenderlo','Eu ajudo-te a perceber','Ich helfe dir dabei','Je t’aiderai à y voir clair'),S('empath')),opt(tr('Представь, что всё получится','Imagine it working out','Imagina que todo sale bien','Imagina que corre bem','Stell dir vor, es klappt','Imagine que tout fonctionne'),S('dreamer'))]),
    Q(tr('Когда ты выбираешь фильм на вечер, что чаще решает?','When choosing a movie for the evening, what decides most often?','Al elegir una película para la noche, ¿qué pesa más?','Ao escolher um filme para a noite, o que pesa mais?','Bei der Filmauswahl für den Abend, was entscheidet?','Pour choisir un film le soir, qu’est-ce qui compte le plus?'),[
      opt(tr('Рейтинг и отзывы','Ratings and reviews','Valoraciones y reseñas','Avaliações e críticas','Bewertungen und Rezensionen','Notes et avis'),S('analyst')),opt(tr('Настроение сейчас','My mood','Mi estado de ánimo','O meu estado de espírito','Meine Stimmung','Mon humeur'),S('empath')),opt(tr('Жанр, который люблю','A genre I like','Un género que me gusta','Um género de que gosto','Ein Genre, das ich mag','Un genre que j’aime'),S('realist')),opt(tr('Что-то, чего ещё не видел','Something new to me','Algo que no haya visto','Algo que ainda não vi','Etwas, das ich noch nicht kenne','Quelque chose que je n’ai jamais vu'),S('explorer'))]),
    Q(tr('Если ты можешь один раз изменить прошлое, что тебе важнее получить от этого?','If you could change one thing in the past, what would you want most?','Si pudieras cambiar una cosa del pasado, ¿qué querrías obtener?','Se pudesses mudar uma coisa do passado, o que gostarias de obter?','Wenn du eine Sache in der Vergangenheit ändern könntest, was wäre dir wichtig?','Si tu pouvais changer une chose du passé, qu’aimerais-tu obtenir?'),[
      opt(tr('Исправить ошибку','Fix a mistake','Corregir un error','Corrigir um erro','Einen Fehler korrigieren','Corriger une erreur'),S('analyst')),opt(tr('Сохранить важный момент','Preserve an important moment','Conservar un momento importante','Guardar um momento importante','Einen wichtigen Moment bewahren','Préserver un moment important'),S('empath')),opt(tr('Открыть другой путь','Open a different path','Abrir otro camino','Abrir outro caminho','Einen anderen Weg öffnen','Ouvrir un autre chemin'),S('explorer')),opt(tr('Узнать, что было бы','Know what might have been','Saber qué habría pasado','Saber o que poderia ter acontecido','Wissen, was hätte sein können','Savoir ce qui aurait pu arriver'),S('dreamer'))])
  ];
  // Map the existing 10 questions to the eight result types and append 13 new everyday questions.
  const mapScore=(scores)=>{const o={leader:0,planner:0,analyst:0,empath:0,creator:0,explorer:0,realist:0,dreamer:0}; for(const [k,v] of Object.entries(scores||{})){const m={sage:'analyst',rebel:'explorer',connector:'empath'}[k]||k;if(o[m]!=null)o[m]+=Number(v)||0;} return o;};
  DESTINY_QUESTIONS.forEach(q=>q.options.forEach(o=>o.scores=mapScore(o.scores)));
  DESTINY_QUESTIONS.push(...extra); DESTINY_QUESTIONS.splice(23);
  const allowed=['leader','planner','analyst','empath','creator','explorer','realist','dreamer'];
  for(const key of Object.keys(DESTINY_TITLES)) if(!allowed.includes(key)) delete DESTINY_TITLES[key];
  const oldStart=window.startDestinyQuiz;
  window.startDestinyQuiz=function(){const scores={};allowed.forEach(k=>scores[k]=0);localStorage.setItem('true_destiny',JSON.stringify({currentQuestion:0,scores,completed:false}));const overlay=document.getElementById('destiny-overlay');if(overlay)renderDestinyQuestion(0);};
  window.restartDestiny=function(){const scores={};allowed.forEach(k=>scores[k]=0);localStorage.setItem('true_destiny',JSON.stringify({currentQuestion:0,scores,completed:false}));const overlay=document.getElementById('destiny-overlay');if(overlay)renderDestinyQuestion(0);else openTrueDestiny();};
  window.openTrueDestiny=function(){
    const saved=localStorage.getItem('true_destiny'); if(saved){try{const st=JSON.parse(saved);if(st.completed){showDestinyResult(st.scores);return;}if(typeof st.currentQuestion==='number'&&st.currentQuestion>0){renderDestinyQuestion(st.currentQuestion);return;}}catch(e){localStorage.removeItem('true_destiny');}}
    const overlay=document.createElement('div');overlay.id='destiny-overlay';overlay.className='destiny-overlay active';overlay.innerHTML=`<button class="overlay-close-x" onclick="closeDestiny()">&times;</button><div class="destiny-container"><div class="destiny-title">${t('trueDestiny')}</div><div class="destiny-intro"><p>${t('destinyIntro')}</p></div><button class="destiny-start-btn" onclick="startDestinyQuiz()">${t('destinyStart')}</button></div>`;document.body.appendChild(overlay);
  };
  window.answerDestiny=function(qIndex,optIndex){const q=DESTINY_QUESTIONS[qIndex];let st=JSON.parse(localStorage.getItem('true_destiny'));if(!st){startDestinyQuiz();st=JSON.parse(localStorage.getItem('true_destiny'));}st.currentQuestion=qIndex+1;for(const k of Object.keys(st.scores))st.scores[k]+=(Number(q.options[optIndex].scores[k])||0);if(st.currentQuestion>=DESTINY_QUESTIONS.length)st.completed=true;localStorage.setItem('true_destiny',JSON.stringify(st));const overlay=document.getElementById('destiny-overlay');if(!overlay)return;if(st.completed)showDestinyResultInPlace(overlay,st.scores);else renderDestinyQuestion(st.currentQuestion);};
  // Result text gets the requested Telegram sentence.
  window.showDestinyResultInPlace=function(overlay,scores){const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]);const winner=sorted[0]?.[0]||'realist';const title=DESTINY_TITLES[winner]||DESTINY_TITLES.realist;overlay.className='destiny-overlay active';overlay.innerHTML=`<button class="overlay-close-x" onclick="closeDestiny()">&times;</button><div class="destiny-container destiny-result destiny-result-minimal destiny-result-rich"><div class="destiny-result-symbol">✦</div><div class="destiny-result-kicker">${t('destinyResultTitle')}</div><div class="destiny-result-title">${loc(title.name)}</div><div class="destiny-result-desc">${loc(title.description)}</div><div class="final-channel-note">${t('finalChannel')}</div><div class="final-actions"><button class="destiny-restart" onclick="restartDestiny()">${t('destinyRestartBtn')}</button><a class="fate-channel-btn" href="${CHANNEL_URL}" target="_blank" rel="noopener">${t('openTelegram')}</a></div></div>`;};

  // Labyrinth: first and ninth hints are suggestive, not answers; last riddle has 10 hints already.
  if(typeof LABYRINTH_RIDDLES!=='undefined'){
    LABYRINTH_RIDDLES[0].hints=[
      {ru:'Посмотри на три части суток как на три разных периода одного человеческого пути.',en:'Treat the three parts of the day as three stages of one human journey.',es:'Mira las tres partes del día como tres etapas de un mismo recorrido humano.',pt:'Vê as três partes do dia como três fases de uma mesma vida.',de:'Betrachte die drei Tageszeiten als drei Phasen eines menschlichen Weges.',fr:'Considère les trois moments de la journée comme trois étapes d’une même vie.'},
      {ru:'В начале человеку нужна одна форма опоры, позже — другая. Что меняется с возрастом?',en:'At the beginning a person needs one kind of support, later another. What changes with age?',es:'Al principio una persona necesita un tipo de apoyo y después otro. ¿Qué cambia con la edad?',pt:'No início a pessoa precisa de um tipo de apoio e depois de outro. O que muda com a idade?',de:'Am Anfang braucht ein Mensch eine Art von Stütze, später eine andere. Was verändert sich mit dem Alter?',fr:'Au début, une personne a besoin d’un type de soutien, puis d’un autre. Qu’est-ce qui change avec l’âge?'},
      {ru:'Третья «нога» здесь означает не часть тела, а дополнительную опору. Подумай о том, чем пользуются пожилые люди.',en:'The third “leg” is not a body part but an extra support. Think of what older people may use.',es:'La tercera «pata» no es una parte del cuerpo, sino un apoyo adicional. Piensa en lo que usan algunas personas mayores.',pt:'A terceira “perna” não é uma parte do corpo, mas um apoio extra. Pensa no que algumas pessoas idosas usam.',de:'Das dritte „Bein“ ist kein Körperteil, sondern eine zusätzliche Stütze. Denke daran, was ältere Menschen benutzen können.',fr:'La troisième « jambe » n’est pas une partie du corps, mais un soutien supplémentaire. Pense à ce que peuvent utiliser les personnes âgées.'}
    ];
    LABYRINTH_RIDDLES[8].hints=[
      {ru:'Здесь важен не размер кувшинок, а то, как меняется покрытая ими площадь с каждым днём.',en:'The key is not the lilies’ size but how the covered area changes each day.',es:'La clave no es el tamaño, sino cómo cambia el área cubierta cada día.',pt:'O importante não é o tamanho, mas como a área coberta muda a cada dia.',de:'Entscheidend ist nicht die Größe, sondern wie sich die bedeckte Fläche täglich verändert.',fr:'Le point clé n’est pas la taille, mais l’évolution de la surface couverte chaque jour.'},
      {ru:'Если рост происходит вдвое за один и тот же промежуток времени, один день назад площадь была вдвое меньше.',en:'If the covered area doubles over the same interval, one day earlier it was half as large.',es:'Si el área se duplica en el mismo intervalo, un día antes era la mitad.',pt:'Se a área duplica no mesmo intervalo, um dia antes era metade.',de:'Wenn sich die Fläche im gleichen Zeitraum verdoppelt, war sie einen Tag zuvor halb so groß.',fr:'Si la surface double dans le même intervalle, elle était deux fois plus petite la veille.'},
      {ru:'Сравни состояние озера на предпоследний и последний день и только потом оцени две кувшинки вместе.',en:'Compare the lake on the penultimate and final day, then consider the two lilies together.',es:'Compara el lago el penúltimo y último día y después considera las dos plantas juntas.',pt:'Compara o lago no penúltimo e no último dia e só depois pensa nos dois nenúfares juntos.',de:'Vergleiche den vorletzten und letzten Tag und betrachte dann beide Seerosen zusammen.',fr:'Compare le lac l’avant-dernier et le dernier jour, puis considère les deux nénuphars ensemble.'}
    ];
    // Repeatedly opened hints are shown in place; only the first use asks for confirmation.
    window.showLabyrinthHint=function(hintIndex){const st=JSON.parse(localStorage.getItem('labyrinth')||'{"currentRiddle":0,"hintsUsed":[]}');const r=LABYRINTH_RIDDLES[st.currentRiddle];if(st.hintsUsed.includes(hintIndex)){const el=document.getElementById('labyrinth-hint-text');if(el){el.textContent=loc(r.hints[hintIndex]);el.style.display='block';}return;}const c=document.createElement('div');c.id='labyrinth-hint-confirm';c.className='labyrinth-confirm-overlay';c.innerHTML=`<div class="labyrinth-confirm-box"><p>${t('hintConfirm')}</p><div class="labyrinth-confirm-btns"><button onclick="closeLabyrinthHintConfirm()">${t('hintNo')}</button><button onclick="confirmLabyrinthHint(${hintIndex})">${t('hintYes')}</button></div></div>`;document.body.appendChild(c);};
    window.restartLabyrinth=function(){localStorage.setItem('labyrinth',JSON.stringify({currentRiddle:0,hintsUsed:[]}));const o=document.getElementById('labyrinth-overlay');if(o)renderLabyrinthRiddle();else openLabyrinth();};
  }
})();


// ===== USER REQUESTED PRECISION PATCH 2026-08-23 =====
// Keep the language row compact and let the existing picker handle real language switching.
// The picker backdrop is separate, so only the page behind the picker is dimmed.

// Chronicles: show one-decimal percentages and a short answer-specific interpretation.
function fateOneDecimalStats(stats){
  const vals=[Number(stats.a)||0,Number(stats.b)||0,Number(stats.c)||0];
  const total=vals.reduce((a,b)=>a+b,0)||100;
  let rounded=vals.map(v=>Math.floor((v/total*1000))/10);
  let remainder=Math.round((100-rounded.reduce((a,b)=>a+b,0))*10)/10;
  const order=vals.map((v,i)=>({i,v})).sort((x,y)=>y.v-x.v).map(x=>x.i);
  let k=0;
  while(remainder>0.0001){ rounded[order[k%3]]=Math.round((rounded[order[k%3]]+0.1)*10)/10; remainder=Math.round((remainder-0.1)*10)/10; k++; }
  return {a:rounded[0],b:rounded[1],c:rounded[2]};
}
function fateShortAnalysis(d,choice){
  const answer=loc(d[choice]);
  const templates={
    ru:`Ты выбрал «${answer}». Этот вариант показывает, какой подход тебе ближе в этом вопросе.`,
    en:`You chose “${answer}”. This shows which approach feels closer to you in this question.`,
    es:`Has elegido «${answer}». Esta opción muestra qué enfoque te resulta más cercano en esta pregunta.`,
    pt:`Escolheste «${answer}». Esta escolha mostra qual abordagem te é mais próxima nesta questão.`,
    de:`Du hast „${answer}“ gewählt. Diese Wahl zeigt, welcher Ansatz dir bei dieser Frage näherliegt.`,
    fr:`Tu as choisi « ${answer} ». Ce choix montre quelle approche te correspond le mieux dans cette question.`
  };
  return templates[currentLang]||templates.en;
}
function renderFateQuestion(index) {
  const d=FATE_DILEMMAS[index];
  let overlay=document.getElementById('fate-overlay');
  if(!overlay){ overlay=document.createElement('div'); overlay.id='fate-overlay'; overlay.className='fate-overlay active'; document.body.appendChild(overlay); }
  const st=fateOneDecimalStats(d.stats);
  overlay.innerHTML=`
    <button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button>
    <div class="fate-container">
      <div class="fate-counter">${index+1} / ${FATE_DILEMMAS.length}</div>
      <div class="fate-question">${loc(d.question)}</div>
      <div class="fate-choices" id="fate-choices">
        <button class="fate-btn" onclick="answerFate(${index}, 'a')"><span class="fate-btn-text">${loc(d.a)}</span></button>
        <button class="fate-btn" onclick="answerFate(${index}, 'b')"><span class="fate-btn-text">${loc(d.b)}</span></button>
        <button class="fate-btn" onclick="answerFate(${index}, 'c')"><span class="fate-btn-text">${loc(d.c)}</span></button>
      </div>
      <div class="fate-result" id="fate-result" style="display:none;">
        <div class="fate-stats">
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-a" style="width:0%"></div><span class="fate-stat-label">${st.a.toFixed(1)}%</span></div>
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-b" style="width:0%"></div><span class="fate-stat-label">${st.b.toFixed(1)}%</span></div>
          <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-c" style="width:0%"></div><span class="fate-stat-label">${st.c.toFixed(1)}%</span></div>
        </div>
        <div class="fate-analysis" id="fate-analysis"></div>
        <button class="fate-next" onclick="nextFateQuestion()">${loc(NEXT_BUTTON_TEXTS[index % NEXT_BUTTON_TEXTS.length])}</button>
      </div>
    </div>`;
}
function answerFate(index,choice){
  const d=FATE_DILEMMAS[index], st=fateOneDecimalStats(d.stats);
  const choicesDiv=document.getElementById('fate-choices'), resultDiv=document.getElementById('fate-result');
  choicesDiv.style.display='none';
  resultDiv.style.display='block';
  document.getElementById('stat-a').style.width=st.a+'%';
  document.getElementById('stat-b').style.width=st.b+'%';
  document.getElementById('stat-c').style.width=st.c+'%';
  const analysis=document.getElementById('fate-analysis'); if(analysis) analysis.textContent=fateShortAnalysis(d,choice);
  let state=JSON.parse(localStorage.getItem('fate_dilemmas')||'{"currentIndex":0,"answers":[]}');
  state.answers.push({index,choice}); state.currentIndex=index+1; localStorage.setItem('fate_dilemmas',JSON.stringify(state));
}

// Last Labyrinth riddle: exactly ten user-specified hints and a detailed answer.
if(typeof LABYRINTH_RIDDLES!=='undefined' && LABYRINTH_RIDDLES.length){
  const last=LABYRINTH_RIDDLES[LABYRINTH_RIDDLES.length-1];
  last.hints=[
    {ru:'Вам не обязательно переводить слова «ja» и «da» (узнавать, какое из них «да», а какое «нет»), чтобы решить задачу.',en:'You do not need to translate “ja” and “da” or determine which means “yes” and which means “no” to solve the puzzle.',es:'No necesitas traducir «ja» y «da» ni averiguar cuál significa «sí» y cuál «no» para resolver el problema.',pt:'Não é necessário traduzir «ja» e «da» nem descobrir qual significa «sim» e qual significa «não» para resolver o problema.',de:'Du musst „ja“ und „da“ nicht übersetzen und auch nicht herausfinden, welches Wort „ja“ und welches „nein“ bedeutet.',fr:'Il n’est pas nécessaire de traduire « ja » et « da », ni de savoir lequel signifie « oui » ou « non », pour résoudre le problème.'},
    {ru:'Вы не обязаны задавать по одному вопросу каждому богу. Вы можете задать два или даже все три вопроса одному и тому же богу, если это выгодно.',en:'You do not have to ask one question to each god. You may ask two or even all three questions to the same god if that is useful.',es:'No tienes que hacer una pregunta a cada dios. Puedes hacer dos o incluso las tres preguntas al mismo dios si te conviene.',pt:'Não tens de fazer uma pergunta a cada deus. Podes fazer duas ou até as três perguntas ao mesmo deus, se isso for vantajoso.',de:'Du musst nicht jedem Gott eine Frage stellen. Du kannst zwei oder sogar alle drei Fragen demselben Gott stellen, wenn das sinnvoll ist.',fr:'Tu n’es pas obligé de poser une question à chaque dieu. Tu peux poser deux, voire les trois questions au même dieu si cela t’aide.'},
    {ru:'Ваш второй вопрос может сильно зависеть от того, какой ответ вы получили на первый вопрос.',en:'Your second question may depend heavily on the answer you received to the first question.',es:'Tu segunda pregunta puede depender mucho de la respuesta que recibiste a la primera.',pt:'A tua segunda pergunta pode depender muito da resposta que recebeste à primeira.',de:'Deine zweite Frage kann stark davon abhängen, welche Antwort du auf die erste Frage erhalten hast.',fr:'Ta deuxième question peut dépendre fortement de la réponse reçue à la première.'},
    {ru:'Подумайте, что произойдет, если встроить одно утверждение внутрь другого. Например, использовать конструкцию: «Если я спрошу тебя о факте Х, ответишь ли ты "ja"?»',en:'Think about what happens when one statement is embedded inside another. For example: “If I asked you about fact X, would you answer ‘ja’?”',es:'Piensa qué ocurre cuando una afirmación se introduce dentro de otra. Por ejemplo: «Si te preguntara por el hecho X, ¿responderías “ja”?».',pt:'Pensa no que acontece quando uma afirmação é colocada dentro de outra. Por exemplo: «Se te perguntasse sobre o facto X, responderias “ja”?».',de:'Überlege, was passiert, wenn eine Aussage in eine andere eingebettet wird. Zum Beispiel: „Wenn ich dich nach Tatsache X fragen würde, würdest du ‚ja‘ antworten?“',fr:'Réfléchis à ce qui se passe lorsqu’une affirmation est intégrée dans une autre. Par exemple : « Si je te demandais si le fait X est vrai, répondrais-tu “ja” ? »'},
    {ru:'В правильной сложной формулировке вопроса Бог Лжи соврет о своей собственной лжи (сработает закон двойного отрицания). В итоге он выдаст точно такой же ответ («ja» или «da»), как и Бог Истины!',en:'With the right nested wording, the Liar lies about his own lie (double negation). As a result, he gives exactly the same answer (“ja” or “da”) as the Truth god.',es:'Con la formulación anidada correcta, el dios de la Mentira miente sobre su propia mentira (doble negación). Como resultado, da exactamente la misma respuesta («ja» o «da») que el dios de la Verdad.',pt:'Com a formulação correta, o deus da Mentira mente sobre a própria mentira (dupla negação). Assim, dá exatamente a mesma resposta («ja» ou «da») que o deus da Verdade.',de:'Bei der richtigen verschachtelten Formulierung lügt der Lügner über seine eigene Lüge (doppelte Verneinung). Dadurch gibt er genau dieselbe Antwort („ja“ oder „da“) wie der Wahrheitsgott.',fr:'Avec la bonne formulation imbriquée, le dieu du Mensonge ment sur son propre mensonge (double négation). Il donne donc exactement la même réponse (« ja » ou « da ») que le dieu de la Vérité.'},
    {ru:'Если вы составите вопрос по принципу из Подсказки 4, то ответ «ja» всегда будет означать, что факт Х — это правда, а ответ «da» — что факт Х — это ложь. При этом вам всё еще плевать, как «ja» и «da» переводятся на самом деле.',en:'If you build the question using Hint 4, “ja” will mean that fact X is true, while “da” will mean that fact X is false. You still do not need to know which word literally means yes or no.',es:'Si formulas la pregunta según la pista 4, «ja» significará que el hecho X es verdadero y «da» que es falso. Aun así no necesitas saber qué palabra significa literalmente sí o no.',pt:'Se formulares a pergunta segundo a pista 4, «ja» significará que o facto X é verdadeiro e «da» que é falso. Continuas sem precisar de saber qual palavra significa literalmente sim ou não.',de:'Wenn du die Frage nach Hinweis 4 formulierst, bedeutet „ja“, dass Tatsache X wahr ist, und „da“, dass X falsch ist. Du musst trotzdem nicht wissen, welches Wort wörtlich ja oder nein bedeutet.',fr:'Si tu formules la question selon l’indice 4, « ja » signifiera que le fait X est vrai et « da » qu’il est faux. Tu n’as toujours pas besoin de connaître la traduction réelle des deux mots.'},
    {ru:'Главный враг в задаче — Бог Случая. Его ответы не несут логики. Если вы потратите вопросы на него, вы проиграете. Поэтому ваша главная цель на первом шаге — избежать его.',en:'The main enemy is the Random god. His answers have no reliable logic. If you spend your questions on him, you lose. Your first goal is therefore to avoid him.',es:'El principal enemigo es el dios del Azar. Sus respuestas no son fiables. Si gastas tus preguntas con él, pierdes. Por eso el primer objetivo es evitarlo.',pt:'O principal inimigo é o deus do Acaso. As respostas dele não são fiáveis. Se gastares as perguntas com ele, perdes. Por isso o primeiro objetivo é evitá-lo.',de:'Der Hauptgegner ist der Zufallsgott. Seine Antworten sind nicht zuverlässig. Wenn du Fragen an ihn verschwendest, verlierst du. Dein erstes Ziel ist daher, ihn zu vermeiden.',fr:'Le principal ennemi est le dieu du Hasard. Ses réponses ne sont pas fiables. Si tu gaspilles tes questions sur lui, tu perds. Ton premier objectif est donc de l’éviter.'},
    {ru:'Первый вопрос нужно сформулировать так, чтобы ответ на него гарантированно указал вам на бога, который НЕ является Случаем (то есть является либо Истиной, либо Ложью).',en:'The first question must be phrased so that its answer guarantees that you can identify a god who is NOT Random, meaning either Truth or Lie.',es:'La primera pregunta debe formularse de modo que su respuesta te permita identificar con seguridad a un dios que NO sea Azar, sino Verdad o Mentira.',pt:'A primeira pergunta deve ser formulada de modo que a resposta permita identificar com certeza um deus que NÃO seja o Acaso, ou seja, a Verdade ou a Mentira.',de:'Die erste Frage muss so formuliert sein, dass ihre Antwort garantiert einen Gott identifiziert, der NICHT Zufall ist, also Wahrheit oder Lüge.',fr:'La première question doit être formulée de manière à identifier avec certitude un dieu qui N’EST PAS le Hasard, donc la Vérité ou le Mensonge.'},
    {ru:'Спросите бога B о боге A (является ли А Случаем), используя хитрую формулировку из Подсказки 4. Любой ответ («ja» или «da») методом исключения укажет, кто из оставшихся богов точно «безопасен».',en:'Ask god B about god A (whether A is Random), using the nested wording from Hint 4. Either answer (“ja” or “da”) lets you identify a remaining god who is definitely safe by elimination.',es:'Pregunta al dios B por el dios A (si A es Azar) usando la formulación de la pista 4. Cualquiera de las respuestas («ja» o «da») permite identificar por eliminación a otro dios que es seguro.',pt:'Pergunta ao deus B sobre o deus A (se A é o Acaso), usando a formulação da pista 4. Qualquer resposta («ja» ou «da») permite, por eliminação, identificar outro deus que é seguramente seguro.',de:'Frage Gott B nach Gott A (ob A Zufall ist) mit der verschachtelten Formulierung aus Hinweis 4. Jede Antwort („ja“ oder „da“) zeigt durch Ausschluss, welcher der übrigen Götter sicher ist.',fr:'Demande au dieu B si le dieu A est le Hasard, avec la formulation de l’indice 4. Quelle que soit la réponse (« ja » ou « da »), l’élimination permet d’identifier un autre dieu qui est forcément fiable.'},
    {ru:'Как только вторым вопросом вы вычислите «безопасного» бога (узнаете, Истина он или Ложь), третий вопрос этому же богу мгновенно раскроет роли двух оставшихся.',en:'Once your second question identifies the “safe” god and tells you whether he is Truth or Lie, the third question to that same god reveals the roles of the remaining two.',es:'Cuando la segunda pregunta te permita identificar al dios «seguro» y saber si es Verdad o Mentira, la tercera pregunta al mismo dios revela los papeles de los otros dos.',pt:'Assim que a segunda pergunta identificar o deus “seguro” e disser se ele é Verdade ou Mentira, a terceira pergunta ao mesmo deus revela os papéis dos outros dois.',de:'Sobald die zweite Frage den „sicheren“ Gott identifiziert und zeigt, ob er Wahrheit oder Lüge ist, enthüllt die dritte Frage an denselben Gott die Rollen der beiden übrigen.',fr:'Dès que la deuxième question identifie le dieu « fiable » et indique s’il est Vérité ou Mensonge, la troisième question posée au même dieu révèle les rôles des deux autres.'}
  ];
  last.answer={
    ru:'Ответ по шагам. 1) Сначала нужно найти бога, который точно не является богом Случая. Спросите бога B: «Если я спрошу у тебя „Бог А — бог случая?“, ты ответишь „ja“?». Если B — бог Случая, его ответ случаен, но тогда A и C оба не являются Случаем, поэтому C точно безопасен. Если B не является Случаем, вложенная формулировка нейтрализует разницу между Богом Истины и Богом Лжи и одновременно не требует знать перевод слов «ja» и «da»; по ответу можно выбрать A или C как неслучайного бога. 2) Теперь задайте найденному неслучайному богу вопрос: «Если я спрошу у тебя: „Ты — бог лжи?“, ты ответишь „ja“?». Ответ «ja» означает, что он Ложь, а «da» — что он Истина. 3) Третьим вопросом этому же богу спросите: «Если я у тебя спрошу: „Бог B — бог случая?“, ответишь ли ты „ja“?». Если ответ «ja», B — бог Случая. Если ответ «da», бог Случая — тот из A или C, с которым вы ещё не разобрались. Оставшаяся роль определяется методом исключения. Например, если вы установили, что C — неслучайный, затем выяснили, что C — Истина, и третьим вопросом узнали, что B — Случай, то A автоматически становится Ложью. Важная идея всей задачи: не нужно угадывать, что означает «ja» или «da»; вложенная формулировка превращает ответы Истины и Лжи в единый надёжный механизм.',
    en:'Detailed answer. 1) First find a god who is definitely not Random. Ask B: “If I asked you ‘Is A Random?’, would you answer ‘ja’?” If B is Random, the answer is unreliable, but then A and C are both non-Random, so C is safe. If B is not Random, the nested wording neutralizes the difference between Truth and Lie and removes the need to know the literal meaning of “ja” and “da”; the answer lets you select a non-Random god. 2) Ask that non-Random god: “If I asked you ‘Are you the Liar?’, would you answer ‘ja’?” A “ja” identifies Lie; “da” identifies Truth. 3) Ask the same god: “If I asked you ‘Is B Random?’, would you answer ‘ja’?” “Ja” means B is Random; “da” means the remaining unresolved god is Random. The final role follows by elimination. Example: if C is confirmed non-Random, then C is identified as Truth, and the third question shows B is Random, A must be Lie. The key is that the nested wording makes Truth and Lie answer in the same reliable way without translating “ja” and “da”.'
  };
}

/* ===== v4.1.4 requested final adjustments ===== */
(function(){
  // Language row: move the planet icon + "Language" label exactly 2mm lower.
  const style=document.createElement('style');
  style.textContent='.language-setting .settings-item-left{transform:translateY(5px)!important;}';
  document.head.appendChild(style);

  // The last Labyrinth riddle gets two additional hints (5 total in this build).
  if (typeof LABYRINTH_RIDDLES !== 'undefined' && LABYRINTH_RIDDLES.length) {
    const last=LABYRINTH_RIDDLES[LABYRINTH_RIDDLES.length-1];
    const extra=[
      {ru:'После первого вопроса вам уже не нужно выяснять всё сразу: определите одного бога, который точно не Случай, и продолжайте спрашивать его.',en:'After the first question you do not need to determine everything at once: identify one god who is definitely not Random, then continue with that god.',es:'Después de la primera pregunta no necesitas determinarlo todo de inmediato: identifica a un dios que no sea Azar y continúa preguntándole.',pt:'Depois da primeira pergunta, não precisas de descobrir tudo de uma vez: identifica um deus que não seja o Acaso e continua a perguntar-lhe.',de:'Nach der ersten Frage musst du nicht alles sofort bestimmen: Finde einen Gott, der sicher nicht der Zufall ist, und frage ihn weiter.',fr:'Après la première question, inutile de tout déterminer immédiatement : identifie un dieu qui n’est certainement pas le Hasard, puis continue avec lui.'},
      {ru:'Когда надёжный бог уже найден, используй вопрос с «если я спрошу тебя…». Он одновременно обходится с правдой, ложью и неизвестным значением «ja/da».',en:'Once you have a reliable god, use the “If I asked you…” construction. It neutralizes truth, lies, and the unknown meaning of “ja/da” at the same time.',es:'Cuando hayas encontrado un dios fiable, usa la construcción «Si te preguntara…». Así neutralizas a la vez la verdad, la mentira y el significado desconocido de «ja/da».',pt:'Depois de encontrares um deus fiável, usa a construção «Se eu te perguntasse…». Ela neutraliza ao mesmo tempo a verdade, a mentira e o significado desconhecido de «ja/da».',de:'Wenn du einen zuverlässigen Gott gefunden hast, verwende die Formulierung „Wenn ich dich fragen würde …“. Damit neutralisierst du Wahrheit, Lüge und die unbekannte Bedeutung von „ja/da“ gleichzeitig.',fr:'Une fois le dieu fiable trouvé, utilise la formulation « Si je te demandais… ». Elle neutralise à la fois la vérité, le mensonge et le sens inconnu de « ja/da ».'}
    ];
    last.hints = (last.hints||[]).concat(extra);
    // Ensure the final answer is localized in all six supported languages.
    last.answer={
      ru:'Ответ: сначала найдите бога, который не является богом Случая. Спросите B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?». Если ответ «ja», безопасным будет C; если «da», безопасным будет A. Затем спросите найденного безопасного бога: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?». Ответ «ja» означает, что он бог лжи, а «da» — бог истины. Третьим вопросом спросите его, является ли B богом Случая, используя ту же конструкцию. После этого последняя роль определяется методом исключения.',
      en:'Answer: first identify a god who is not Random. Ask B: “If I asked you whether God A is Random, would you answer ‘ja’?” If the answer is “ja”, C is the safe god; if it is “da”, A is the safe god. Then ask that safe god: “If I asked you whether you are the Liar, would you answer ‘ja’?” A “ja” means Liar; “da” means Truth. With the third question, ask the same god whether B is Random, using the same construction. The final role is then determined by elimination.',
      es:'Respuesta: primero identifica a un dios que no sea Azar. Pregunta a B: «Si te preguntara si el dios A es Azar, ¿responderías “ja”?». Si responde «ja», C es el dios seguro; si responde «da», A es el dios seguro. Después pregunta al dios seguro: «Si te preguntara si eres el dios de la mentira, ¿responderías “ja”?». «Ja» significa que es el Mentiroso; «da» significa que es el dios de la Verdad. Con la tercera pregunta, pregúntale si B es Azar usando la misma construcción. La última identidad se determina por eliminación.',
      pt:'Resposta: primeiro identifica um deus que não seja o Acaso. Pergunta a B: «Se eu te perguntasse se o deus A é o Acaso, responderias “ja”?». Se responder «ja», C é o deus seguro; se responder «da», A é o deus seguro. Depois pergunta ao deus seguro: «Se eu te perguntasse se és o deus da Mentira, responderias “ja”?». «Ja» significa Mentira; «da» significa Verdade. Na terceira pergunta, pergunta-lhe se B é o Acaso usando a mesma construção. A última identidade é determinada por eliminação.',
      de:'Antwort: Bestimme zuerst einen Gott, der nicht der Zufall ist. Frage B: „Wenn ich dich fragen würde, ob Gott A der Zufall ist, würdest du mit ‚ja‘ antworten?“ Bei „ja“ ist C der sichere Gott; bei „da“ ist A der sichere Gott. Frage dann den sicheren Gott: „Wenn ich dich fragen würde, ob du der Lügner bist, würdest du mit ‚ja‘ antworten?“ „Ja“ bedeutet Lügner, „da“ bedeutet Wahrheitsgott. Mit der dritten Frage fragst du denselben Gott, ob B der Zufall ist, wieder mit derselben Konstruktion. Die letzte Rolle ergibt sich durch Ausschluss.',
      fr:'Réponse : commence par identifier un dieu qui n’est pas le Hasard. Demande à B : « Si je te demandais si le dieu A est le Hasard, répondrais-tu “ja” ? ». Si la réponse est « ja », C est le dieu fiable ; si c’est « da », A est le dieu fiable. Demande ensuite à ce dieu fiable : « Si je te demandais si tu es le dieu du Mensonge, répondrais-tu “ja” ? ». « Ja » signifie Mensonge et « da » signifie Vérité. Pour la troisième question, demande-lui si B est le Hasard avec la même construction. Le dernier rôle se déduit par élimination.'
    };
  }

})();
