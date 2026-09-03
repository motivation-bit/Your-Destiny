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


function t(key) { const v=T[currentLang]?.[key]; return v!=null && String(v).trim()!=='' ? v : key; }
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

  // Ровно через 3 секунды сразу показываем интерфейс.
  // Никакого дополнительного ожидания после заставки: интерфейс уже готов к работе.
  window.setTimeout(() => {
    app.classList.add('active');
    nav.style.display = 'flex';
    intro.style.transition = 'opacity 0.15s ease';
    intro.style.opacity = '0';
    window.setTimeout(() => {
      intro.style.display = 'none';
    }, 150);
    initMusic();
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
  // Refresh any open localized overlay immediately after changing language.
  try { if (document.getElementById('fate-overlay') && typeof renderFateQuestion === 'function') { const st=JSON.parse(localStorage.getItem('fate_dilemmas')||'{\"currentIndex\":0,\"answers\":[]}'); if(st.currentIndex < FATE_DILEMMAS.length) renderFateQuestion(st.currentIndex); } } catch(e) {}
  try { if (document.getElementById('labyrinth-overlay') && typeof renderLabyrinthRiddle === 'function') renderLabyrinthRiddle(); } catch(e) {}
  try { if (document.getElementById('destiny-overlay')) { const st=JSON.parse(localStorage.getItem('true_destiny')||'null'); if(st && !st.completed && typeof renderDestinyQuestion === 'function') renderDestinyQuestion(st.currentQuestion||0); } } catch(e) {}
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
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? В этот момент: после тяжёлой недели.",
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
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? В этот момент: перед важной встречей.",
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
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? В этот момент: когда ты устал.",
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
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? В этот момент: в незнакомой компании.",
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
      "ru": "Если у тебя неожиданно освободился вечер, как ты скорее всего его проведёшь? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? В этот момент: после тяжёлой недели.",
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
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? В этот момент: срочную задачу.",
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
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? В этот момент: в метро.",
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
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? В этот момент: важную новость друга.",
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
      "ru": "У тебя два дела на сегодня, но времени хватит только на одно. Что выберешь? В этот момент: первый день на новой работе.",
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
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? В этот момент: после тяжёлой недели.",
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
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? В этот момент: перед важной встречей.",
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
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? В этот момент: когда ты устал.",
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
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? В этот момент: в незнакомой компании.",
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
      "ru": "Ты находишь кошелёк без документов, но с деньгами. Что сделаешь? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? В этот момент: после тяжёлой недели.",
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
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? В этот момент: срочную задачу.",
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
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? В этот момент: в метро.",
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
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? В этот момент: важную новость друга.",
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
      "ru": "Друг просит не рассказывать о его личной проблеме. Что для тебя важнее? В этот момент: первый день на новой работе.",
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
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? В этот момент: после тяжёлой недели.",
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
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? В этот момент: перед важной встречей.",
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
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? В этот момент: когда ты устал.",
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
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? В этот момент: в незнакомой компании.",
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
      "ru": "Тебе предлагают работу с хорошей оплатой, но ты почти ничего о ней не знаешь. Твой первый шаг? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? В этот момент: после тяжёлой недели.",
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
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? В этот момент: срочную задачу.",
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
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? В этот момент: в метро.",
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
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? В этот момент: важную новость друга.",
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
      "ru": "Тебе неожиданно вернули небольшую сумму денег. На что потратишь? В этот момент: первый день на новой работе.",
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
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? В этот момент: после тяжёлой недели.",
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
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? В этот момент: перед важной встречей.",
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
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? В этот момент: когда ты устал.",
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
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? В этот момент: в незнакомой компании.",
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
      "ru": "В поездке планы рушатся из-за погоды. Что сделаешь? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? В этот момент: после тяжёлой недели.",
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
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? В этот момент: срочную задачу.",
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
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? В этот момент: в метро.",
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
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? В этот момент: важную новость друга.",
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
      "ru": "В компании начинается спор. Ты видишь сильные аргументы с обеих сторон. Что сделаешь? В этот момент: первый день на новой работе.",
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
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? В этот момент: после тяжёлой недели.",
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
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? В этот момент: перед важной встречей.",
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
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? В этот момент: когда ты устал.",
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
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? В этот момент: в незнакомой компании.",
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
      "ru": "Ты хочешь выложить важный пост, но сомневаешься. Что скорее всего остановит тебя? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? В этот момент: после тяжёлой недели.",
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
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? В этот момент: срочную задачу.",
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
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? В этот момент: в метро.",
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
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? В этот момент: важную новость друга.",
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
      "ru": "Ты заметил свою ошибку перед сдачей работы. Что сделаешь? В этот момент: первый день на новой работе.",
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
      "ru": "У тебя полностью свободный день. Что звучит приятнее? В этот момент: после тяжёлой недели.",
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
      "ru": "У тебя полностью свободный день. Что звучит приятнее? В этот момент: перед важной встречей.",
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
      "ru": "У тебя полностью свободный день. Что звучит приятнее? В этот момент: когда ты устал.",
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
      "ru": "У тебя полностью свободный день. Что звучит приятнее? В этот момент: в незнакомой компании.",
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
      "ru": "У тебя полностью свободный день. Что звучит приятнее? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? В этот момент: после тяжёлой недели.",
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
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? В этот момент: срочную задачу.",
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
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? В этот момент: в метро.",
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
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? В этот момент: важную новость друга.",
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
      "ru": "Сосед регулярно шумит поздно вечером. Как поступишь? В этот момент: первый день на новой работе.",
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
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? В этот момент: после тяжёлой недели.",
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
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? В этот момент: перед важной встречей.",
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
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? В этот момент: когда ты устал.",
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
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? В этот момент: в незнакомой компании.",
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
      "ru": "Тебя зовут на мероприятие, где почти никого не знаешь. Пойдёшь? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? В этот момент: после тяжёлой недели.",
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
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? В этот момент: срочную задачу.",
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
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? В этот момент: в метро.",
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
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? В этот момент: важную новость друга.",
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
      "ru": "Тебе дают честную, но неприятную обратную связь. Как отреагируешь? В этот момент: первый день на новой работе.",
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
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? В этот момент: после тяжёлой недели.",
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
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? В этот момент: перед важной встречей.",
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
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? В этот момент: когда ты устал.",
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
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? В этот момент: в незнакомой компании.",
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
      "ru": "Перед тобой появляется возможность попробовать то, чего ты никогда не делал. Что важнее? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? В этот момент: после тяжёлой недели.",
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
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? В этот момент: срочную задачу.",
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
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? В этот момент: в метро.",
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
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? В этот момент: важную новость друга.",
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
      "ru": "Кто-то обещал тебе помочь, но забыл. Что сделаешь? В этот момент: первый день на новой работе.",
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
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? В этот момент: после тяжёлой недели.",
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
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? В этот момент: перед важной встречей.",
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
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? В этот момент: когда ты устал.",
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
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? В этот момент: в незнакомой компании.",
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
      "ru": "В интернете тебя неправильно поняли. Что сделаешь? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? В этот момент: после тяжёлой недели.",
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
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? В этот момент: срочную задачу.",
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
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? В этот момент: в метро.",
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
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? В этот момент: важную новость друга.",
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
      "ru": "Важная цель внезапно стала сложнее. Твоя реакция? В этот момент: первый день на новой работе.",
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
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? В этот момент: после тяжёлой недели.",
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
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? В этот момент: перед важной встречей.",
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
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? В этот момент: когда ты устал.",
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
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? В этот момент: в незнакомой компании.",
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
      "ru": "Ты оказался в незнакомом городе один. Что сделаешь первым? В этот момент: когда планы меняются в последний момент.",
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
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? В этот момент: после тяжёлой недели.",
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
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? В этот момент: срочную задачу.",
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
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? В этот момент: в метро.",
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
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? В этот момент: важную новость друга.",
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
      "ru": "Ты хочешь изменить одну привычку. Что поможет больше всего? В этот момент: первый день на новой работе.",
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
const FATE_DILEMMAS_UNIQUE_100 = [{"question":{"ru":"Ты приходишь домой и видишь, что близкий человек расстроен и явно не хочет объяснять причину. Что ты сделаешь?","en":"Ты приходишь домой и видишь, что близкий человек расстроен и явно не хочет объяснять причину. Что ты сделаешь?","es":"Ты приходишь домой и видишь, что близкий человек расстроен и явно не хочет объяснять причину. Что ты сделаешь?","pt":"Ты приходишь домой и видишь, что близкий человек расстроен и явно не хочет объяснять причину. Что ты сделаешь?","de":"Ты приходишь домой и видишь, что близкий человек расстроен и явно не хочет объяснять причину. Что ты сделаешь?","fr":"Ты приходишь домой и видишь, что близкий человек расстроен и явно не хочет объяснять причину. Что ты сделаешь?"},"a":{"ru":"Спокойно останусь рядом и предложу помощь.","en":"Спокойно останусь рядом и предложу помощь.","es":"Спокойно останусь рядом и предложу помощь.","pt":"Спокойно останусь рядом и предложу помощь.","de":"Спокойно останусь рядом и предложу помощь.","fr":"Спокойно останусь рядом и предложу помощь."},"b":{"ru":"Прямо спрошу, что случилось, и дам выговориться.","en":"Прямо спрошу, что случилось, и дам выговориться.","es":"Прямо спрошу, что случилось, и дам выговориться.","pt":"Прямо спрошу, что случилось, и дам выговориться.","de":"Прямо спрошу, что случилось, и дам выговориться.","fr":"Прямо спрошу, что случилось, и дам выговориться."},"c":{"ru":"Оставлю его ненадолго в покое и вернусь к разговору позже.","en":"Оставлю его ненадолго в покое и вернусь к разговору позже.","es":"Оставлю его ненадолго в покое и вернусь к разговору позже.","pt":"Оставлю его ненадолго в покое и вернусь к разговору позже.","de":"Оставлю его ненадолго в покое и вернусь к разговору позже.","fr":"Оставлю его ненадолго в покое и вернусь к разговору позже."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время семейного ужина родственник начинает критиковать твой важный жизненный выбор при всех. Что ты сделаешь?","en":"Во время семейного ужина родственник начинает критиковать твой важный жизненный выбор при всех. Что ты сделаешь?","es":"Во время семейного ужина родственник начинает критиковать твой важный жизненный выбор при всех. Что ты сделаешь?","pt":"Во время семейного ужина родственник начинает критиковать твой важный жизненный выбор при всех. Что ты сделаешь?","de":"Во время семейного ужина родственник начинает критиковать твой важный жизненный выбор при всех. Что ты сделаешь?","fr":"Во время семейного ужина родственник начинает критиковать твой важный жизненный выбор при всех. Что ты сделаешь?"},"a":{"ru":"Спокойно объясню свою позицию, не переходя на спор.","en":"Спокойно объясню свою позицию, не переходя на спор.","es":"Спокойно объясню свою позицию, не переходя на спор.","pt":"Спокойно объясню свою позицию, не переходя на спор.","de":"Спокойно объясню свою позицию, не переходя на спор.","fr":"Спокойно объясню свою позицию, не переходя на спор."},"b":{"ru":"Попрошу обсудить это со мной без остальных за столом.","en":"Попрошу обсудить это со мной без остальных за столом.","es":"Попрошу обсудить это со мной без остальных за столом.","pt":"Попрошу обсудить это со мной без остальных за столом.","de":"Попрошу обсудить это со мной без остальных за столом.","fr":"Попрошу обсудить это со мной без остальных за столом."},"c":{"ru":"Переведу разговор на другую тему и не стану продолжать конфликт.","en":"Переведу разговор на другую тему и не стану продолжать конфликт.","es":"Переведу разговор на другую тему и не стану продолжать конфликт.","pt":"Переведу разговор на другую тему и не стану продолжать конфликт.","de":"Переведу разговор на другую тему и не стану продолжать конфликт.","fr":"Переведу разговор на другую тему и не стану продолжать конфликт."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Друг просит тебя срочно помочь с переездом, но именно в этот день у тебя уже есть свои важные планы. Что ты сделаешь?","en":"Друг просит тебя срочно помочь с переездом, но именно в этот день у тебя уже есть свои важные планы. Что ты сделаешь?","es":"Друг просит тебя срочно помочь с переездом, но именно в этот день у тебя уже есть свои важные планы. Что ты сделаешь?","pt":"Друг просит тебя срочно помочь с переездом, но именно в этот день у тебя уже есть свои важные планы. Что ты сделаешь?","de":"Друг просит тебя срочно помочь с переездом, но именно в этот день у тебя уже есть свои важные планы. Что ты сделаешь?","fr":"Друг просит тебя срочно помочь с переездом, но именно в этот день у тебя уже есть свои важные планы. Что ты сделаешь?"},"a":{"ru":"Освобожу часть дня и помогу ему с самым сложным.","en":"Освобожу часть дня и помогу ему с самым сложным.","es":"Освобожу часть дня и помогу ему с самым сложным.","pt":"Освобожу часть дня и помогу ему с самым сложным.","de":"Освобожу часть дня и помогу ему с самым сложным.","fr":"Освобожу часть дня и помогу ему с самым сложным."},"b":{"ru":"Честно скажу, сколько времени могу выделить, и предложу конкретную помощь.","en":"Честно скажу, сколько времени могу выделить, и предложу конкретную помощь.","es":"Честно скажу, сколько времени могу выделить, и предложу конкретную помощь.","pt":"Честно скажу, сколько времени могу выделить, и предложу конкретную помощь.","de":"Честно скажу, сколько времени могу выделить, и предложу конкретную помощь.","fr":"Честно скажу, сколько времени могу выделить, и предложу конкретную помощь."},"c":{"ru":"Откажусь в этот раз и помогу найти другого человека.","en":"Откажусь в этот раз и помогу найти другого человека.","es":"Откажусь в этот раз и помогу найти другого человека.","pt":"Откажусь в этот раз и помогу найти другого человека.","de":"Откажусь в этот раз и помогу найти другого человека.","fr":"Откажусь в этот раз и помогу найти другого человека."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты случайно узнаёшь, что приятеля собираются незаслуженно обвинить на работе. Что ты сделаешь?","en":"Ты случайно узнаёшь, что приятеля собираются незаслуженно обвинить на работе. Что ты сделаешь?","es":"Ты случайно узнаёшь, что приятеля собираются незаслуженно обвинить на работе. Что ты сделаешь?","pt":"Ты случайно узнаёшь, что приятеля собираются незаслуженно обвинить на работе. Что ты сделаешь?","de":"Ты случайно узнаёшь, что приятеля собираются незаслуженно обвинить на работе. Что ты сделаешь?","fr":"Ты случайно узнаёшь, что приятеля собираются незаслуженно обвинить на работе. Что ты сделаешь?"},"a":{"ru":"Скажу ему сразу и помогу подготовить доказательства.","en":"Скажу ему сразу и помогу подготовить доказательства.","es":"Скажу ему сразу и помогу подготовить доказательства.","pt":"Скажу ему сразу и помогу подготовить доказательства.","de":"Скажу ему сразу и помогу подготовить доказательства.","fr":"Скажу ему сразу и помогу подготовить доказательства."},"b":{"ru":"Сначала проверю факты, а потом поговорю с тем, кто выдвинул обвинение.","en":"Сначала проверю факты, а потом поговорю с тем, кто выдвинул обвинение.","es":"Сначала проверю факты, а потом поговорю с тем, кто выдвинул обвинение.","pt":"Сначала проверю факты, а потом поговорю с тем, кто выдвинул обвинение.","de":"Сначала проверю факты, а потом поговорю с тем, кто выдвинул обвинение.","fr":"Сначала проверю факты, а потом поговорю с тем, кто выдвинул обвинение."},"c":{"ru":"Не вмешаюсь, пока он сам не попросит о помощи.","en":"Не вмешаюсь, пока он сам не попросит о помощи.","es":"Не вмешаюсь, пока он сам не попросит о помощи.","pt":"Не вмешаюсь, пока он сам не попросит о помощи.","de":"Не вмешаюсь, пока он сам не попросит о помощи.","fr":"Не вмешаюсь, пока он сам не попросит о помощи."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе обещали вернуть деньги до вечера, но срок прошёл, а человек не выходит на связь. Что ты сделаешь?","en":"Тебе обещали вернуть деньги до вечера, но срок прошёл, а человек не выходит на связь. Что ты сделаешь?","es":"Тебе обещали вернуть деньги до вечера, но срок прошёл, а человек не выходит на связь. Что ты сделаешь?","pt":"Тебе обещали вернуть деньги до вечера, но срок прошёл, а человек не выходит на связь. Что ты сделаешь?","de":"Тебе обещали вернуть деньги до вечера, но срок прошёл, а человек не выходит на связь. Что ты сделаешь?","fr":"Тебе обещали вернуть деньги до вечера, но срок прошёл, а человек не выходит на связь. Что ты сделаешь?"},"a":{"ru":"Напишу коротко и прямо попрошу назвать новую дату возврата.","en":"Напишу коротко и прямо попрошу назвать новую дату возврата.","es":"Напишу коротко и прямо попрошу назвать новую дату возврата.","pt":"Напишу коротко и прямо попрошу назвать новую дату возврата.","de":"Напишу коротко и прямо попрошу назвать новую дату возврата.","fr":"Напишу коротко и прямо попрошу назвать новую дату возврата."},"b":{"ru":"Позвоню и спокойно выясню, что произошло.","en":"Позвоню и спокойно выясню, что произошло.","es":"Позвоню и спокойно выясню, что произошло.","pt":"Позвоню и спокойно выясню, что произошло.","de":"Позвоню и спокойно выясню, что произошло.","fr":"Позвоню и спокойно выясню, что произошло."},"c":{"ru":"Подожду ещё день, чтобы не давить на человека.","en":"Подожду ещё день, чтобы не давить на человека.","es":"Подожду ещё день, чтобы не давить на человека.","pt":"Подожду ещё день, чтобы не давить на человека.","de":"Подожду ещё день, чтобы не давить на человека.","fr":"Подожду ещё день, чтобы не давить на человека."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На важной встрече ты замечаешь, что коллега приписывает себе идею, которую предложил ты. Что ты сделаешь?","en":"На важной встрече ты замечаешь, что коллега приписывает себе идею, которую предложил ты. Что ты сделаешь?","es":"На важной встрече ты замечаешь, что коллега приписывает себе идею, которую предложил ты. Что ты сделаешь?","pt":"На важной встрече ты замечаешь, что коллега приписывает себе идею, которую предложил ты. Что ты сделаешь?","de":"На важной встрече ты замечаешь, что коллега приписывает себе идею, которую предложил ты. Что ты сделаешь?","fr":"На важной встрече ты замечаешь, что коллега приписывает себе идею, которую предложил ты. Что ты сделаешь?"},"a":{"ru":"Сразу уточню при всех, откуда изначально взялась идея.","en":"Сразу уточню при всех, откуда изначально взялась идея.","es":"Сразу уточню при всех, откуда изначально взялась идея.","pt":"Сразу уточню при всех, откуда изначально взялась идея.","de":"Сразу уточню при всех, откуда изначально взялась идея.","fr":"Сразу уточню при всех, откуда изначально взялась идея."},"b":{"ru":"Дождусь конца встречи и поговорю с коллегой лично.","en":"Дождусь конца встречи и поговорю с коллегой лично.","es":"Дождусь конца встречи и поговорю с коллегой лично.","pt":"Дождусь конца встречи и поговорю с коллегой лично.","de":"Дождусь конца встречи и поговорю с коллегой лично.","fr":"Дождусь конца встречи и поговорю с коллегой лично."},"c":{"ru":"Не стану спорить сейчас, но зафиксирую свой вклад письменно позже.","en":"Не стану спорить сейчас, но зафиксирую свой вклад письменно позже.","es":"Не стану спорить сейчас, но зафиксирую свой вклад письменно позже.","pt":"Не стану спорить сейчас, но зафиксирую свой вклад письменно позже.","de":"Не стану спорить сейчас, но зафиксирую свой вклад письменно позже.","fr":"Не стану спорить сейчас, но зафиксирую свой вклад письменно позже."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты опоздал на встречу из-за своей ошибки, а остальные уже ждут тебя. Что ты сделаешь?","en":"Ты опоздал на встречу из-за своей ошибки, а остальные уже ждут тебя. Что ты сделаешь?","es":"Ты опоздал на встречу из-за своей ошибки, а остальные уже ждут тебя. Что ты сделаешь?","pt":"Ты опоздал на встречу из-за своей ошибки, а остальные уже ждут тебя. Что ты сделаешь?","de":"Ты опоздал на встречу из-за своей ошибки, а остальные уже ждут тебя. Что ты сделаешь?","fr":"Ты опоздал на встречу из-за своей ошибки, а остальные уже ждут тебя. Что ты сделаешь?"},"a":{"ru":"Сразу извинюсь и коротко объясню причину без оправданий.","en":"Сразу извинюсь и коротко объясню причину без оправданий.","es":"Сразу извинюсь и коротко объясню причину без оправданий.","pt":"Сразу извинюсь и коротко объясню причину без оправданий.","de":"Сразу извинюсь и коротко объясню причину без оправданий.","fr":"Сразу извинюсь и коротко объясню причину без оправданий."},"b":{"ru":"Предложу компенсировать потерянное время.","en":"Предложу компенсировать потерянное время.","es":"Предложу компенсировать потерянное время.","pt":"Предложу компенсировать потерянное время.","de":"Предложу компенсировать потерянное время.","fr":"Предложу компенсировать потерянное время."},"c":{"ru":"Ничего не буду объяснять и просто быстро включусь в разговор.","en":"Ничего не буду объяснять и просто быстро включусь в разговор.","es":"Ничего не буду объяснять и просто быстро включусь в разговор.","pt":"Ничего не буду объяснять и просто быстро включусь в разговор.","de":"Ничего не буду объяснять и просто быстро включусь в разговор.","fr":"Ничего не буду объяснять и просто быстро включусь в разговор."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Знакомый предлагает тебе выгодную сделку, но условия кажутся слишком хорошими, чтобы быть правдой. Что ты сделаешь?","en":"Знакомый предлагает тебе выгодную сделку, но условия кажутся слишком хорошими, чтобы быть правдой. Что ты сделаешь?","es":"Знакомый предлагает тебе выгодную сделку, но условия кажутся слишком хорошими, чтобы быть правдой. Что ты сделаешь?","pt":"Знакомый предлагает тебе выгодную сделку, но условия кажутся слишком хорошими, чтобы быть правдой. Что ты сделаешь?","de":"Знакомый предлагает тебе выгодную сделку, но условия кажутся слишком хорошими, чтобы быть правдой. Что ты сделаешь?","fr":"Знакомый предлагает тебе выгодную сделку, но условия кажутся слишком хорошими, чтобы быть правдой. Что ты сделаешь?"},"a":{"ru":"Попрошу все условия письменно и проверю детали.","en":"Попрошу все условия письменно и проверю детали.","es":"Попрошу все условия письменно и проверю детали.","pt":"Попрошу все условия письменно и проверю детали.","de":"Попрошу все условия письменно и проверю детали.","fr":"Попрошу все условия письменно и проверю детали."},"b":{"ru":"Откажусь, пока не поговорю с человеком, которому доверяю.","en":"Откажусь, пока не поговорю с человеком, которому доверяю.","es":"Откажусь, пока не поговорю с человеком, которому доверяю.","pt":"Откажусь, пока не поговорю с человеком, которому доверяю.","de":"Откажусь, пока не поговорю с человеком, которому доверяю.","fr":"Откажусь, пока не поговорю с человеком, которому доверяю."},"c":{"ru":"Соглашусь только на небольшую пробную сумму.","en":"Соглашусь только на небольшую пробную сумму.","es":"Соглашусь только на небольшую пробную сумму.","pt":"Соглашусь только на небольшую пробную сумму.","de":"Соглашусь только на небольшую пробную сумму.","fr":"Соглашусь только на небольшую пробную сумму."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты находишь на улице кошелёк с наличными и документами. Что ты сделаешь?","en":"Ты находишь на улице кошелёк с наличными и документами. Что ты сделаешь?","es":"Ты находишь на улице кошелёк с наличными и документами. Что ты сделаешь?","pt":"Ты находишь на улице кошелёк с наличными и документами. Что ты сделаешь?","de":"Ты находишь на улице кошелёк с наличными и документами. Что ты сделаешь?","fr":"Ты находишь на улице кошелёк с наличными и документами. Что ты сделаешь?"},"a":{"ru":"Найду владельца по документам и свяжусь с ним.","en":"Найду владельца по документам и свяжусь с ним.","es":"Найду владельца по документам и свяжусь с ним.","pt":"Найду владельца по документам и свяжусь с ним.","de":"Найду владельца по документам и свяжусь с ним.","fr":"Найду владельца по документам и свяжусь с ним."},"b":{"ru":"Передам кошелёк в ближайшую полицию или службу находок.","en":"Передам кошелёк в ближайшую полицию или службу находок.","es":"Передам кошелёк в ближайшую полицию или службу находок.","pt":"Передам кошелёк в ближайшую полицию или службу находок.","de":"Передам кошелёк в ближайшую полицию или службу находок.","fr":"Передам кошелёк в ближайшую полицию или службу находок."},"c":{"ru":"Оставлю его в безопасном месте и попробую найти владельца через районные чаты.","en":"Оставлю его в безопасном месте и попробую найти владельца через районные чаты.","es":"Оставлю его в безопасном месте и попробую найти владельца через районные чаты.","pt":"Оставлю его в безопасном месте и попробую найти владельца через районные чаты.","de":"Оставлю его в безопасном месте и попробую найти владельца через районные чаты.","fr":"Оставлю его в безопасном месте и попробую найти владельца через районные чаты."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В кафе тебе принесли блюдо, которое явно не соответствует заказу, но официант очень занят. Что ты сделаешь?","en":"В кафе тебе принесли блюдо, которое явно не соответствует заказу, но официант очень занят. Что ты сделаешь?","es":"В кафе тебе принесли блюдо, которое явно не соответствует заказу, но официант очень занят. Что ты сделаешь?","pt":"В кафе тебе принесли блюдо, которое явно не соответствует заказу, но официант очень занят. Что ты сделаешь?","de":"В кафе тебе принесли блюдо, которое явно не соответствует заказу, но официант очень занят. Что ты сделаешь?","fr":"В кафе тебе принесли блюдо, которое явно не соответствует заказу, но официант очень занят. Что ты сделаешь?"},"a":{"ru":"Подожду удобного момента и спокойно попрошу заменить блюдо.","en":"Подожду удобного момента и спокойно попрошу заменить блюдо.","es":"Подожду удобного момента и спокойно попрошу заменить блюдо.","pt":"Подожду удобного момента и спокойно попрошу заменить блюдо.","de":"Подожду удобного момента и спокойно попрошу заменить блюдо.","fr":"Подожду удобного момента и спокойно попрошу заменить блюдо."},"b":{"ru":"Съем то, что принесли, чтобы не задерживать персонал.","en":"Съем то, что принесли, чтобы не задерживать персонал.","es":"Съем то, что принесли, чтобы не задерживать персонал.","pt":"Съем то, что принесли, чтобы не задерживать персонал.","de":"Съем то, что принесли, чтобы не задерживать персонал.","fr":"Съем то, что принесли, чтобы не задерживать персонал."},"c":{"ru":"Позову официанта и сразу уточню, можно ли быстро исправить ошибку.","en":"Позову официанта и сразу уточню, можно ли быстро исправить ошибку.","es":"Позову официанта и сразу уточню, можно ли быстро исправить ошибку.","pt":"Позову официанта и сразу уточню, можно ли быстро исправить ошибку.","de":"Позову официанта и сразу уточню, можно ли быстро исправить ошибку.","fr":"Позову официанта и сразу уточню, можно ли быстро исправить ошибку."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На парковке водитель слегка задевает твою машину и предлагает уехать без оформления. Что ты сделаешь?","en":"На парковке водитель слегка задевает твою машину и предлагает уехать без оформления. Что ты сделаешь?","es":"На парковке водитель слегка задевает твою машину и предлагает уехать без оформления. Что ты сделаешь?","pt":"На парковке водитель слегка задевает твою машину и предлагает уехать без оформления. Что ты сделаешь?","de":"На парковке водитель слегка задевает твою машину и предлагает уехать без оформления. Что ты сделаешь?","fr":"На парковке водитель слегка задевает твою машину и предлагает уехать без оформления. Что ты сделаешь?"},"a":{"ru":"Спокойно сфотографирую повреждения и оформлю всё официально.","en":"Спокойно сфотографирую повреждения и оформлю всё официально.","es":"Спокойно сфотографирую повреждения и оформлю всё официально.","pt":"Спокойно сфотографирую повреждения и оформлю всё официально.","de":"Спокойно сфотографирую повреждения и оформлю всё официально.","fr":"Спокойно сфотографирую повреждения и оформлю всё официально."},"b":{"ru":"Предложу обменяться контактами и решить вопрос после оценки ущерба.","en":"Предложу обменяться контактами и решить вопрос после оценки ущерба.","es":"Предложу обменяться контактами и решить вопрос после оценки ущерба.","pt":"Предложу обменяться контактами и решить вопрос после оценки ущерба.","de":"Предложу обменяться контактами и решить вопрос после оценки ущерба.","fr":"Предложу обменяться контактами и решить вопрос после оценки ущерба."},"c":{"ru":"Откажусь от спора, если повреждение совсем небольшое и водитель честно признает ошибку.","en":"Откажусь от спора, если повреждение совсем небольшое и водитель честно признает ошибку.","es":"Откажусь от спора, если повреждение совсем небольшое и водитель честно признает ошибку.","pt":"Откажусь от спора, если повреждение совсем небольшое и водитель честно признает ошибку.","de":"Откажусь от спора, если повреждение совсем небольшое и водитель честно признает ошибку.","fr":"Откажусь от спора, если повреждение совсем небольшое и водитель честно признает ошибку."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Сосед громко слушает музыку поздно ночью, а утром тебе рано вставать. Что ты сделаешь?","en":"Сосед громко слушает музыку поздно ночью, а утром тебе рано вставать. Что ты сделаешь?","es":"Сосед громко слушает музыку поздно ночью, а утром тебе рано вставать. Что ты сделаешь?","pt":"Сосед громко слушает музыку поздно ночью, а утром тебе рано вставать. Что ты сделаешь?","de":"Сосед громко слушает музыку поздно ночью, а утром тебе рано вставать. Что ты сделаешь?","fr":"Сосед громко слушает музыку поздно ночью, а утром тебе рано вставать. Что ты сделаешь?"},"a":{"ru":"Подойду и вежливо попрошу сделать тише.","en":"Подойду и вежливо попрошу сделать тише.","es":"Подойду и вежливо попрошу сделать тише.","pt":"Подойду и вежливо попрошу сделать тише.","de":"Подойду и вежливо попрошу сделать тише.","fr":"Подойду и вежливо попрошу сделать тише."},"b":{"ru":"Напишу сообщение, чтобы не конфликтовать лично.","en":"Напишу сообщение, чтобы не конфликтовать лично.","es":"Напишу сообщение, чтобы не конфликтовать лично.","pt":"Напишу сообщение, чтобы не конфликтовать лично.","de":"Напишу сообщение, чтобы не конфликтовать лично.","fr":"Напишу сообщение, чтобы не конфликтовать лично."},"c":{"ru":"Потерплю до утра, если это разовый случай.","en":"Потерплю до утра, если это разовый случай.","es":"Потерплю до утра, если это разовый случай.","pt":"Потерплю до утра, если это разовый случай.","de":"Потерплю до утра, если это разовый случай.","fr":"Потерплю до утра, если это разовый случай."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь, как в магазине пожилой человек не может разобраться с терминалом оплаты. Что ты сделаешь?","en":"Ты видишь, как в магазине пожилой человек не может разобраться с терминалом оплаты. Что ты сделаешь?","es":"Ты видишь, как в магазине пожилой человек не может разобраться с терминалом оплаты. Что ты сделаешь?","pt":"Ты видишь, как в магазине пожилой человек не может разобраться с терминалом оплаты. Что ты сделаешь?","de":"Ты видишь, как в магазине пожилой человек не может разобраться с терминалом оплаты. Что ты сделаешь?","fr":"Ты видишь, как в магазине пожилой человек не может разобраться с терминалом оплаты. Что ты сделаешь?"},"a":{"ru":"Предложу помочь прямо у терминала.","en":"Предложу помочь прямо у терминала.","es":"Предложу помочь прямо у терминала.","pt":"Предложу помочь прямо у терминала.","de":"Предложу помочь прямо у терминала.","fr":"Предложу помочь прямо у терминала."},"b":{"ru":"Позову сотрудника магазина.","en":"Позову сотрудника магазина.","es":"Позову сотрудника магазина.","pt":"Позову сотрудника магазина.","de":"Позову сотрудника магазина.","fr":"Позову сотрудника магазина."},"c":{"ru":"Сначала спрошу, нужна ли ему вообще помощь.","en":"Сначала спрошу, нужна ли ему вообще помощь.","es":"Сначала спрошу, нужна ли ему вообще помощь.","pt":"Сначала спрошу, нужна ли ему вообще помощь.","de":"Сначала спрошу, нужна ли ему вообще помощь.","fr":"Сначала спрошу, нужна ли ему вообще помощь."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В очереди перед тобой человек пытается пройти без очереди и делает вид, что ничего не произошло. Что ты сделаешь?","en":"В очереди перед тобой человек пытается пройти без очереди и делает вид, что ничего не произошло. Что ты сделаешь?","es":"В очереди перед тобой человек пытается пройти без очереди и делает вид, что ничего не произошло. Что ты сделаешь?","pt":"В очереди перед тобой человек пытается пройти без очереди и делает вид, что ничего не произошло. Что ты сделаешь?","de":"В очереди перед тобой человек пытается пройти без очереди и делает вид, что ничего не произошло. Что ты сделаешь?","fr":"В очереди перед тобой человек пытается пройти без очереди и делает вид, что ничего не произошло. Что ты сделаешь?"},"a":{"ru":"Спокойно скажу, что очередь начинается с конца.","en":"Спокойно скажу, что очередь начинается с конца.","es":"Спокойно скажу, что очередь начинается с конца.","pt":"Спокойно скажу, что очередь начинается с конца.","de":"Спокойно скажу, что очередь начинается с конца.","fr":"Спокойно скажу, что очередь начинается с конца."},"b":{"ru":"Попрошу сотрудника обратить внимание на ситуацию.","en":"Попрошу сотрудника обратить внимание на ситуацию.","es":"Попрошу сотрудника обратить внимание на ситуацию.","pt":"Попрошу сотрудника обратить внимание на ситуацию.","de":"Попрошу сотрудника обратить внимание на ситуацию.","fr":"Попрошу сотрудника обратить внимание на ситуацию."},"c":{"ru":"Пропущу его и не стану тратить время на спор.","en":"Пропущу его и не стану тратить время на спор.","es":"Пропущу его и не стану тратить время на спор.","pt":"Пропущу его и не стану тратить время на спор.","de":"Пропущу его и не стану тратить время на спор.","fr":"Пропущу его и не стану тратить время на спор."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты замечаешь, что твой знакомый публикует в сети явно ложную информацию о другом человеке. Что ты сделаешь?","en":"Ты замечаешь, что твой знакомый публикует в сети явно ложную информацию о другом человеке. Что ты сделаешь?","es":"Ты замечаешь, что твой знакомый публикует в сети явно ложную информацию о другом человеке. Что ты сделаешь?","pt":"Ты замечаешь, что твой знакомый публикует в сети явно ложную информацию о другом человеке. Что ты сделаешь?","de":"Ты замечаешь, что твой знакомый публикует в сети явно ложную информацию о другом человеке. Что ты сделаешь?","fr":"Ты замечаешь, что твой знакомый публикует в сети явно ложную информацию о другом человеке. Что ты сделаешь?"},"a":{"ru":"Напишу ему лично и попрошу удалить публикацию.","en":"Напишу ему лично и попрошу удалить публикацию.","es":"Напишу ему лично и попрошу удалить публикацию.","pt":"Напишу ему лично и попрошу удалить публикацию.","de":"Напишу ему лично и попрошу удалить публикацию.","fr":"Напишу ему лично и попрошу удалить публикацию."},"b":{"ru":"Оставлю спокойный комментарий с проверяемыми фактами.","en":"Оставлю спокойный комментарий с проверяемыми фактами.","es":"Оставлю спокойный комментарий с проверяемыми фактами.","pt":"Оставлю спокойный комментарий с проверяемыми фактами.","de":"Оставлю спокойный комментарий с проверяемыми фактами.","fr":"Оставлю спокойный комментарий с проверяемыми фактами."},"c":{"ru":"Не буду вмешиваться, если история напрямую меня не касается.","en":"Не буду вмешиваться, если история напрямую меня не касается.","es":"Не буду вмешиваться, если история напрямую меня не касается.","pt":"Не буду вмешиваться, если история напрямую меня не касается.","de":"Не буду вмешиваться, если история напрямую меня не касается.","fr":"Не буду вмешиваться, если история напрямую меня не касается."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебя пригласили на мероприятие, где почти никого не знаешь, и тебе неловко идти одному. Что ты сделаешь?","en":"Тебя пригласили на мероприятие, где почти никого не знаешь, и тебе неловко идти одному. Что ты сделаешь?","es":"Тебя пригласили на мероприятие, где почти никого не знаешь, и тебе неловко идти одному. Что ты сделаешь?","pt":"Тебя пригласили на мероприятие, где почти никого не знаешь, и тебе неловко идти одному. Что ты сделаешь?","de":"Тебя пригласили на мероприятие, где почти никого не знаешь, и тебе неловко идти одному. Что ты сделаешь?","fr":"Тебя пригласили на мероприятие, где почти никого не знаешь, и тебе неловко идти одному. Что ты сделаешь?"},"a":{"ru":"Всё равно пойду и познакомлюсь хотя бы с одним человеком.","en":"Всё равно пойду и познакомлюсь хотя бы с одним человеком.","es":"Всё равно пойду и познакомлюсь хотя бы с одним человеком.","pt":"Всё равно пойду и познакомлюсь хотя бы с одним человеком.","de":"Всё равно пойду и познакомлюсь хотя бы с одним человеком.","fr":"Всё равно пойду и познакомлюсь хотя бы с одним человеком."},"b":{"ru":"Заранее напишу организатору и уточню, кто ещё придёт.","en":"Заранее напишу организатору и уточню, кто ещё придёт.","es":"Заранее напишу организатору и уточню, кто ещё придёт.","pt":"Заранее напишу организатору и уточню, кто ещё придёт.","de":"Заранее напишу организатору и уточню, кто ещё придёт.","fr":"Заранее напишу организатору и уточню, кто ещё придёт."},"c":{"ru":"Откажусь и выберу более комфортную встречу позже.","en":"Откажусь и выберу более комфортную встречу позже.","es":"Откажусь и выберу более комфортную встречу позже.","pt":"Откажусь и выберу более комфортную встречу позже.","de":"Откажусь и выберу более комфортную встречу позже.","fr":"Откажусь и выберу более комфортную встречу позже."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты должен выбрать между интересной работой с нестабильным графиком и спокойной работой по расписанию. Что ты сделаешь?","en":"Ты должен выбрать между интересной работой с нестабильным графиком и спокойной работой по расписанию. Что ты сделаешь?","es":"Ты должен выбрать между интересной работой с нестабильным графиком и спокойной работой по расписанию. Что ты сделаешь?","pt":"Ты должен выбрать между интересной работой с нестабильным графиком и спокойной работой по расписанию. Что ты сделаешь?","de":"Ты должен выбрать между интересной работой с нестабильным графиком и спокойной работой по расписанию. Что ты сделаешь?","fr":"Ты должен выбрать между интересной работой с нестабильным графиком и спокойной работой по расписанию. Что ты сделаешь?"},"a":{"ru":"Выберу интересную работу и приму нестабильность.","en":"Выберу интересную работу и приму нестабильность.","es":"Выберу интересную работу и приму нестабильность.","pt":"Выберу интересную работу и приму нестабильность.","de":"Выберу интересную работу и приму нестабильность.","fr":"Выберу интересную работу и приму нестабильность."},"b":{"ru":"Сначала сравню реальные условия обеих работ.","en":"Сначала сравню реальные условия обеих работ.","es":"Сначала сравню реальные условия обеих работ.","pt":"Сначала сравню реальные условия обеих работ.","de":"Сначала сравню реальные условия обеих работ.","fr":"Сначала сравню реальные условия обеих работ."},"c":{"ru":"Выберу стабильный график и буду искать интересные задачи внутри него.","en":"Выберу стабильный график и буду искать интересные задачи внутри него.","es":"Выберу стабильный график и буду искать интересные задачи внутри него.","pt":"Выберу стабильный график и буду искать интересные задачи внутри него.","de":"Выберу стабильный график и буду искать интересные задачи внутри него.","fr":"Выберу стабильный график и буду искать интересные задачи внутри него."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Руководитель даёт тебе задачу без сроков и подробностей, но ждёт быстрый результат. Что ты сделаешь?","en":"Руководитель даёт тебе задачу без сроков и подробностей, но ждёт быстрый результат. Что ты сделаешь?","es":"Руководитель даёт тебе задачу без сроков и подробностей, но ждёт быстрый результат. Что ты сделаешь?","pt":"Руководитель даёт тебе задачу без сроков и подробностей, но ждёт быстрый результат. Что ты сделаешь?","de":"Руководитель даёт тебе задачу без сроков и подробностей, но ждёт быстрый результат. Что ты сделаешь?","fr":"Руководитель даёт тебе задачу без сроков и подробностей, но ждёт быстрый результат. Что ты сделаешь?"},"a":{"ru":"Сразу уточню срок, цель и критерии результата.","en":"Сразу уточню срок, цель и критерии результата.","es":"Сразу уточню срок, цель и критерии результата.","pt":"Сразу уточню срок, цель и критерии результата.","de":"Сразу уточню срок, цель и критерии результата.","fr":"Сразу уточню срок, цель и критерии результата."},"b":{"ru":"Сделаю первый вариант сам и предложу его на согласование.","en":"Сделаю первый вариант сам и предложу его на согласование.","es":"Сделаю первый вариант сам и предложу его на согласование.","pt":"Сделаю первый вариант сам и предложу его на согласование.","de":"Сделаю первый вариант сам и предложу его на согласование.","fr":"Сделаю первый вариант сам и предложу его на согласование."},"c":{"ru":"Попрошу дать пример того, как должен выглядеть итог.","en":"Попрошу дать пример того, как должен выглядеть итог.","es":"Попрошу дать пример того, как должен выглядеть итог.","pt":"Попрошу дать пример того, как должен выглядеть итог.","de":"Попрошу дать пример того, как должен выглядеть итог.","fr":"Попрошу дать пример того, как должен выглядеть итог."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты понимаешь, что не успеваешь выполнить обещанную работу к сроку. Что ты сделаешь?","en":"Ты понимаешь, что не успеваешь выполнить обещанную работу к сроку. Что ты сделаешь?","es":"Ты понимаешь, что не успеваешь выполнить обещанную работу к сроку. Что ты сделаешь?","pt":"Ты понимаешь, что не успеваешь выполнить обещанную работу к сроку. Что ты сделаешь?","de":"Ты понимаешь, что не успеваешь выполнить обещанную работу к сроку. Что ты сделаешь?","fr":"Ты понимаешь, что не успеваешь выполнить обещанную работу к сроку. Что ты сделаешь?"},"a":{"ru":"Предупрежу заранее и предложу новый реалистичный срок.","en":"Предупрежу заранее и предложу новый реалистичный срок.","es":"Предупрежу заранее и предложу новый реалистичный срок.","pt":"Предупрежу заранее и предложу новый реалистичный срок.","de":"Предупрежу заранее и предложу новый реалистичный срок.","fr":"Предупрежу заранее и предложу новый реалистичный срок."},"b":{"ru":"Сокращу объём и отдам главное вовремя.","en":"Сокращу объём и отдам главное вовремя.","es":"Сокращу объём и отдам главное вовремя.","pt":"Сокращу объём и отдам главное вовремя.","de":"Сокращу объём и отдам главное вовремя.","fr":"Сокращу объём и отдам главное вовремя."},"c":{"ru":"Постараюсь закончить в последний момент, никого не предупреждая.","en":"Постараюсь закончить в последний момент, никого не предупреждая.","es":"Постараюсь закончить в последний момент, никого не предупреждая.","pt":"Постараюсь закончить в последний момент, никого не предупреждая.","de":"Постараюсь закончить в последний момент, никого не предупреждая.","fr":"Постараюсь закончить в последний момент, никого не предупреждая."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Коллега просит тебя прикрыть его ошибку перед руководителем. Что ты сделаешь?","en":"Коллега просит тебя прикрыть его ошибку перед руководителем. Что ты сделаешь?","es":"Коллега просит тебя прикрыть его ошибку перед руководителем. Что ты сделаешь?","pt":"Коллега просит тебя прикрыть его ошибку перед руководителем. Что ты сделаешь?","de":"Коллега просит тебя прикрыть его ошибку перед руководителем. Что ты сделаешь?","fr":"Коллега просит тебя прикрыть его ошибку перед руководителем. Что ты сделаешь?"},"a":{"ru":"Откажусь лгать, но помогу исправить последствия.","en":"Откажусь лгать, но помогу исправить последствия.","es":"Откажусь лгать, но помогу исправить последствия.","pt":"Откажусь лгать, но помогу исправить последствия.","de":"Откажусь лгать, но помогу исправить последствия.","fr":"Откажусь лгать, но помогу исправить последствия."},"b":{"ru":"Скажу руководителю правду и объясню контекст.","en":"Скажу руководителю правду и объясню контекст.","es":"Скажу руководителю правду и объясню контекст.","pt":"Скажу руководителю правду и объясню контекст.","de":"Скажу руководителю правду и объясню контекст.","fr":"Скажу руководителю правду и объясню контекст."},"c":{"ru":"Предложу коллеге самому признаться и помогу подготовиться к разговору.","en":"Предложу коллеге самому признаться и помогу подготовиться к разговору.","es":"Предложу коллеге самому признаться и помогу подготовиться к разговору.","pt":"Предложу коллеге самому признаться и помогу подготовиться к разговору.","de":"Предложу коллеге самому признаться и помогу подготовиться к разговору.","fr":"Предложу коллеге самому признаться и помогу подготовиться к разговору."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"У тебя появился свободный вечер, но накопилась бытовая мелочь: стирка, уборка и покупки. Что ты сделаешь?","en":"У тебя появился свободный вечер, но накопилась бытовая мелочь: стирка, уборка и покупки. Что ты сделаешь?","es":"У тебя появился свободный вечер, но накопилась бытовая мелочь: стирка, уборка и покупки. Что ты сделаешь?","pt":"У тебя появился свободный вечер, но накопилась бытовая мелочь: стирка, уборка и покупки. Что ты сделаешь?","de":"У тебя появился свободный вечер, но накопилась бытовая мелочь: стирка, уборка и покупки. Что ты сделаешь?","fr":"У тебя появился свободный вечер, но накопилась бытовая мелочь: стирка, уборка и покупки. Что ты сделаешь?"},"a":{"ru":"Сначала быстро закрою все обязательные дела.","en":"Сначала быстро закрою все обязательные дела.","es":"Сначала быстро закрою все обязательные дела.","pt":"Сначала быстро закрою все обязательные дела.","de":"Сначала быстро закрою все обязательные дела.","fr":"Сначала быстро закрою все обязательные дела."},"b":{"ru":"Выберу только самое срочное, а остальное перенесу.","en":"Выберу только самое срочное, а остальное перенесу.","es":"Выберу только самое срочное, а остальное перенесу.","pt":"Выберу только самое срочное, а остальное перенесу.","de":"Выберу только самое срочное, а остальное перенесу.","fr":"Выберу только самое срочное, а остальное перенесу."},"c":{"ru":"Отложу быт и полностью отдохну.","en":"Отложу быт и полностью отдохну.","es":"Отложу быт и полностью отдохну.","pt":"Отложу быт и полностью отдохну.","de":"Отложу быт и полностью отдохну.","fr":"Отложу быт и полностью отдохну."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Твой друг собирается потратить последние деньги на дорогую вещь, которая ему сейчас не нужна. Что ты сделаешь?","en":"Твой друг собирается потратить последние деньги на дорогую вещь, которая ему сейчас не нужна. Что ты сделаешь?","es":"Твой друг собирается потратить последние деньги на дорогую вещь, которая ему сейчас не нужна. Что ты сделаешь?","pt":"Твой друг собирается потратить последние деньги на дорогую вещь, которая ему сейчас не нужна. Что ты сделаешь?","de":"Твой друг собирается потратить последние деньги на дорогую вещь, которая ему сейчас не нужна. Что ты сделаешь?","fr":"Твой друг собирается потратить последние деньги на дорогую вещь, которая ему сейчас не нужна. Что ты сделаешь?"},"a":{"ru":"Скажу честно, почему считаю покупку плохой идеей.","en":"Скажу честно, почему считаю покупку плохой идеей.","es":"Скажу честно, почему считаю покупку плохой идеей.","pt":"Скажу честно, почему считаю покупку плохой идеей.","de":"Скажу честно, почему считаю покупку плохой идеей.","fr":"Скажу честно, почему считаю покупку плохой идеей."},"b":{"ru":"Предложу вместе сравнить цены и альтернативы.","en":"Предложу вместе сравнить цены и альтернативы.","es":"Предложу вместе сравнить цены и альтернативы.","pt":"Предложу вместе сравнить цены и альтернативы.","de":"Предложу вместе сравнить цены и альтернативы.","fr":"Предложу вместе сравнить цены и альтернативы."},"c":{"ru":"Не стану отговаривать, если он уже всё решил.","en":"Не стану отговаривать, если он уже всё решил.","es":"Не стану отговаривать, если он уже всё решил.","pt":"Не стану отговаривать, если он уже всё решил.","de":"Не стану отговаривать, если он уже всё решил.","fr":"Не стану отговаривать, если он уже всё решил."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В магазине ты видишь вещь, о которой давно мечтал, но она стоит намного дороже, чем ты планировал. Что ты сделаешь?","en":"В магазине ты видишь вещь, о которой давно мечтал, но она стоит намного дороже, чем ты планировал. Что ты сделаешь?","es":"В магазине ты видишь вещь, о которой давно мечтал, но она стоит намного дороже, чем ты планировал. Что ты сделаешь?","pt":"В магазине ты видишь вещь, о которой давно мечтал, но она стоит намного дороже, чем ты планировал. Что ты сделаешь?","de":"В магазине ты видишь вещь, о которой давно мечтал, но она стоит намного дороже, чем ты планировал. Что ты сделаешь?","fr":"В магазине ты видишь вещь, о которой давно мечтал, но она стоит намного дороже, чем ты планировал. Что ты сделаешь?"},"a":{"ru":"Отложу покупку и накоплю нужную сумму.","en":"Отложу покупку и накоплю нужную сумму.","es":"Отложу покупку и накоплю нужную сумму.","pt":"Отложу покупку и накоплю нужную сумму.","de":"Отложу покупку и накоплю нужную сумму.","fr":"Отложу покупку и накоплю нужную сумму."},"b":{"ru":"Проверю другие магазины и варианты дешевле.","en":"Проверю другие магазины и варианты дешевле.","es":"Проверю другие магазины и варианты дешевле.","pt":"Проверю другие магазины и варианты дешевле.","de":"Проверю другие магазины и варианты дешевле.","fr":"Проверю другие магазины и варианты дешевле."},"c":{"ru":"Куплю сейчас, если понимаю, что смогу без проблем покрыть расход.","en":"Куплю сейчас, если понимаю, что смогу без проблем покрыть расход.","es":"Куплю сейчас, если понимаю, что смогу без проблем покрыть расход.","pt":"Куплю сейчас, если понимаю, что смогу без проблем покрыть расход.","de":"Куплю сейчас, если понимаю, что смогу без проблем покрыть расход.","fr":"Куплю сейчас, если понимаю, что смогу без проблем покрыть расход."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты случайно получаешь перевод на большую сумму от незнакомого человека. Что ты сделаешь?","en":"Ты случайно получаешь перевод на большую сумму от незнакомого человека. Что ты сделаешь?","es":"Ты случайно получаешь перевод на большую сумму от незнакомого человека. Что ты сделаешь?","pt":"Ты случайно получаешь перевод на большую сумму от незнакомого человека. Что ты сделаешь?","de":"Ты случайно получаешь перевод на большую сумму от незнакомого человека. Что ты сделаешь?","fr":"Ты случайно получаешь перевод на большую сумму от незнакомого человека. Что ты сделаешь?"},"a":{"ru":"Не буду трогать деньги и свяжусь с отправителем через банк.","en":"Не буду трогать деньги и свяжусь с отправителем через банк.","es":"Не буду трогать деньги и свяжусь с отправителем через банк.","pt":"Не буду трогать деньги и свяжусь с отправителем через банк.","de":"Не буду трогать деньги и свяжусь с отправителем через банк.","fr":"Не буду трогать деньги и свяжусь с отправителем через банк."},"b":{"ru":"Сообщу о переводе банку и дождусь официальных инструкций.","en":"Сообщу о переводе банку и дождусь официальных инструкций.","es":"Сообщу о переводе банку и дождусь официальных инструкций.","pt":"Сообщу о переводе банку и дождусь официальных инструкций.","de":"Сообщу о переводе банку и дождусь официальных инструкций.","fr":"Сообщу о переводе банку и дождусь официальных инструкций."},"c":{"ru":"Оставлю сумму на счёте и никому не буду переводить её обратно самостоятельно.","en":"Оставлю сумму на счёте и никому не буду переводить её обратно самостоятельно.","es":"Оставлю сумму на счёте и никому не буду переводить её обратно самостоятельно.","pt":"Оставлю сумму на счёте и никому не буду переводить её обратно самостоятельно.","de":"Оставлю сумму на счёте и никому не буду переводить её обратно самостоятельно.","fr":"Оставлю сумму на счёте и никому не буду переводить её обратно самостоятельно."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Друг просит одолжить ему значительную сумму, но не может сказать точную дату возврата. Что ты сделаешь?","en":"Друг просит одолжить ему значительную сумму, но не может сказать точную дату возврата. Что ты сделаешь?","es":"Друг просит одолжить ему значительную сумму, но не может сказать точную дату возврата. Что ты сделаешь?","pt":"Друг просит одолжить ему значительную сумму, но не может сказать точную дату возврата. Что ты сделаешь?","de":"Друг просит одолжить ему значительную сумму, но не может сказать точную дату возврата. Что ты сделаешь?","fr":"Друг просит одолжить ему значительную сумму, но не может сказать точную дату возврата. Что ты сделаешь?"},"a":{"ru":"Откажусь давать сумму без понятных условий.","en":"Откажусь давать сумму без понятных условий.","es":"Откажусь давать сумму без понятных условий.","pt":"Откажусь давать сумму без понятных условий.","de":"Откажусь давать сумму без понятных условий.","fr":"Откажусь давать сумму без понятных условий."},"b":{"ru":"Предложу меньшую сумму, которую не жалко потерять.","en":"Предложу меньшую сумму, которую не жалко потерять.","es":"Предложу меньшую сумму, которую не жалко потерять.","pt":"Предложу меньшую сумму, которую не жалко потерять.","de":"Предложу меньшую сумму, которую не жалко потерять.","fr":"Предложу меньшую сумму, которую не жалко потерять."},"c":{"ru":"Соглашусь только после чёткого плана возврата.","en":"Соглашусь только после чёткого плана возврата.","es":"Соглашусь только после чёткого плана возврата.","pt":"Соглашусь только после чёткого плана возврата.","de":"Соглашусь только после чёткого плана возврата.","fr":"Соглашусь только после чёткого плана возврата."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время поездки ты обнаруживаешь, что гостиница заметно хуже, чем на фотографиях. Что ты сделаешь?","en":"Во время поездки ты обнаруживаешь, что гостиница заметно хуже, чем на фотографиях. Что ты сделаешь?","es":"Во время поездки ты обнаруживаешь, что гостиница заметно хуже, чем на фотографиях. Что ты сделаешь?","pt":"Во время поездки ты обнаруживаешь, что гостиница заметно хуже, чем на фотографиях. Что ты сделаешь?","de":"Во время поездки ты обнаруживаешь, что гостиница заметно хуже, чем на фотографиях. Что ты сделаешь?","fr":"Во время поездки ты обнаруживаешь, что гостиница заметно хуже, чем на фотографиях. Что ты сделаешь?"},"a":{"ru":"Покажу персоналу конкретные несоответствия и попрошу решить проблему.","en":"Покажу персоналу конкретные несоответствия и попрошу решить проблему.","es":"Покажу персоналу конкретные несоответствия и попрошу решить проблему.","pt":"Покажу персоналу конкретные несоответствия и попрошу решить проблему.","de":"Покажу персоналу конкретные несоответствия и попрошу решить проблему.","fr":"Покажу персоналу конкретные несоответствия и попрошу решить проблему."},"b":{"ru":"Попрошу переселить меня в другой номер.","en":"Попрошу переселить меня в другой номер.","es":"Попрошу переселить меня в другой номер.","pt":"Попрошу переселить меня в другой номер.","de":"Попрошу переселить меня в другой номер.","fr":"Попрошу переселить меня в другой номер."},"c":{"ru":"Оставлю всё как есть, если на одну ночь это терпимо.","en":"Оставлю всё как есть, если на одну ночь это терпимо.","es":"Оставлю всё как есть, если на одну ночь это терпимо.","pt":"Оставлю всё как есть, если на одну ночь это терпимо.","de":"Оставлю всё как есть, если на одну ночь это терпимо.","fr":"Оставлю всё как есть, если на одну ночь это терпимо."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты потерялся в незнакомом городе, телефон почти разряжен, а до нужного места далеко. Что ты сделаешь?","en":"Ты потерялся в незнакомом городе, телефон почти разряжен, а до нужного места далеко. Что ты сделаешь?","es":"Ты потерялся в незнакомом городе, телефон почти разряжен, а до нужного места далеко. Что ты сделаешь?","pt":"Ты потерялся в незнакомом городе, телефон почти разряжен, а до нужного места далеко. Что ты сделаешь?","de":"Ты потерялся в незнакомом городе, телефон почти разряжен, а до нужного места далеко. Что ты сделаешь?","fr":"Ты потерялся в незнакомом городе, телефон почти разряжен, а до нужного места далеко. Что ты сделаешь?"},"a":{"ru":"Зайду в ближайшее место с людьми и попрошу показать дорогу.","en":"Зайду в ближайшее место с людьми и попрошу показать дорогу.","es":"Зайду в ближайшее место с людьми и попрошу показать дорогу.","pt":"Зайду в ближайшее место с людьми и попрошу показать дорогу.","de":"Зайду в ближайшее место с людьми и попрошу показать дорогу.","fr":"Зайду в ближайшее место с людьми и попрошу показать дорогу."},"b":{"ru":"Сохраню заряд и сначала попробую сориентироваться по карте.","en":"Сохраню заряд и сначала попробую сориентироваться по карте.","es":"Сохраню заряд и сначала попробую сориентироваться по карте.","pt":"Сохраню заряд и сначала попробую сориентироваться по карте.","de":"Сохраню заряд и сначала попробую сориентироваться по карте.","fr":"Сохраню заряд и сначала попробую сориентироваться по карте."},"c":{"ru":"Спрошу дорогу у нескольких прохожих и сверю ответы.","en":"Спрошу дорогу у нескольких прохожих и сверю ответы.","es":"Спрошу дорогу у нескольких прохожих и сверю ответы.","pt":"Спрошу дорогу у нескольких прохожих и сверю ответы.","de":"Спрошу дорогу у нескольких прохожих и сверю ответы.","fr":"Спрошу дорогу у нескольких прохожих и сверю ответы."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В поездке твой попутчик хочет полностью изменить планы в последний момент. Что ты сделаешь?","en":"В поездке твой попутчик хочет полностью изменить планы в последний момент. Что ты сделаешь?","es":"В поездке твой попутчик хочет полностью изменить планы в последний момент. Что ты сделаешь?","pt":"В поездке твой попутчик хочет полностью изменить планы в последний момент. Что ты сделаешь?","de":"В поездке твой попутчик хочет полностью изменить планы в последний момент. Что ты сделаешь?","fr":"В поездке твой попутчик хочет полностью изменить планы в последний момент. Что ты сделаешь?"},"a":{"ru":"Соглашусь, если новый план остаётся безопасным и реалистичным.","en":"Соглашусь, если новый план остаётся безопасным и реалистичным.","es":"Соглашусь, если новый план остаётся безопасным и реалистичным.","pt":"Соглашусь, если новый план остаётся безопасным и реалистичным.","de":"Соглашусь, если новый план остаётся безопасным и реалистичным.","fr":"Соглашусь, если новый план остаётся безопасным и реалистичным."},"b":{"ru":"Предложу компромисс: изменить только часть маршрута.","en":"Предложу компромисс: изменить только часть маршрута.","es":"Предложу компромисс: изменить только часть маршрута.","pt":"Предложу компромисс: изменить только часть маршрута.","de":"Предложу компромисс: изменить только часть маршрута.","fr":"Предложу компромисс: изменить только часть маршрута."},"c":{"ru":"Откажусь и буду придерживаться первоначального плана.","en":"Откажусь и буду придерживаться первоначального плана.","es":"Откажусь и буду придерживаться первоначального плана.","pt":"Откажусь и буду придерживаться первоначального плана.","de":"Откажусь и буду придерживаться первоначального плана.","fr":"Откажусь и буду придерживаться первоначального плана."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты забронировал столик, но ресторан сообщает, что свободных мест сейчас нет. Что ты сделаешь?","en":"Ты забронировал столик, но ресторан сообщает, что свободных мест сейчас нет. Что ты сделаешь?","es":"Ты забронировал столик, но ресторан сообщает, что свободных мест сейчас нет. Что ты сделаешь?","pt":"Ты забронировал столик, но ресторан сообщает, что свободных мест сейчас нет. Что ты сделаешь?","de":"Ты забронировал столик, но ресторан сообщает, что свободных мест сейчас нет. Что ты сделаешь?","fr":"Ты забронировал столик, но ресторан сообщает, что свободных мест сейчас нет. Что ты сделаешь?"},"a":{"ru":"Покажу подтверждение брони и попрошу решить вопрос.","en":"Покажу подтверждение брони и попрошу решить вопрос.","es":"Покажу подтверждение брони и попрошу решить вопрос.","pt":"Покажу подтверждение брони и попрошу решить вопрос.","de":"Покажу подтверждение брони и попрошу решить вопрос.","fr":"Покажу подтверждение брони и попрошу решить вопрос."},"b":{"ru":"Подожду, если обещают посадить в течение разумного времени.","en":"Подожду, если обещают посадить в течение разумного времени.","es":"Подожду, если обещают посадить в течение разумного времени.","pt":"Подожду, если обещают посадить в течение разумного времени.","de":"Подожду, если обещают посадить в течение разумного времени.","fr":"Подожду, если обещают посадить в течение разумного времени."},"c":{"ru":"Уйду и выберу другое место.","en":"Уйду и выберу другое место.","es":"Уйду и выберу другое место.","pt":"Уйду и выберу другое место.","de":"Уйду и выберу другое место.","fr":"Уйду и выберу другое место."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время прогулки начинается сильный дождь, а ты без зонта. Что ты сделаешь?","en":"Во время прогулки начинается сильный дождь, а ты без зонта. Что ты сделаешь?","es":"Во время прогулки начинается сильный дождь, а ты без зонта. Что ты сделаешь?","pt":"Во время прогулки начинается сильный дождь, а ты без зонта. Что ты сделаешь?","de":"Во время прогулки начинается сильный дождь, а ты без зонта. Что ты сделаешь?","fr":"Во время прогулки начинается сильный дождь, а ты без зонта. Что ты сделаешь?"},"a":{"ru":"Найду ближайшее укрытие и подожду.","en":"Найду ближайшее укрытие и подожду.","es":"Найду ближайшее укрытие и подожду.","pt":"Найду ближайшее укрытие и подожду.","de":"Найду ближайшее укрытие и подожду.","fr":"Найду ближайшее укрытие и подожду."},"b":{"ru":"Зайду в магазин и куплю недорогой дождевик или зонт.","en":"Зайду в магазин и куплю недорогой дождевик или зонт.","es":"Зайду в магазин и куплю недорогой дождевик или зонт.","pt":"Зайду в магазин и куплю недорогой дождевик или зонт.","de":"Зайду в магазин и куплю недорогой дождевик или зонт.","fr":"Зайду в магазин и куплю недорогой дождевик или зонт."},"c":{"ru":"Продолжу путь, если расстояние небольшое.","en":"Продолжу путь, если расстояние небольшое.","es":"Продолжу путь, если расстояние небольшое.","pt":"Продолжу путь, если расстояние небольшое.","de":"Продолжу путь, если расстояние небольшое.","fr":"Продолжу путь, если расстояние небольшое."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты приходишь домой и замечаешь, что дверь не заперта, хотя точно помнишь, что закрывал её. Что ты сделаешь?","en":"Ты приходишь домой и замечаешь, что дверь не заперта, хотя точно помнишь, что закрывал её. Что ты сделаешь?","es":"Ты приходишь домой и замечаешь, что дверь не заперта, хотя точно помнишь, что закрывал её. Что ты сделаешь?","pt":"Ты приходишь домой и замечаешь, что дверь не заперта, хотя точно помнишь, что закрывал её. Что ты сделаешь?","de":"Ты приходишь домой и замечаешь, что дверь не заперта, хотя точно помнишь, что закрывал её. Что ты сделаешь?","fr":"Ты приходишь домой и замечаешь, что дверь не заперта, хотя точно помнишь, что закрывал её. Что ты сделаешь?"},"a":{"ru":"Не войду и сразу свяжусь с теми, кто может проверить квартиру.","en":"Не войду и сразу свяжусь с теми, кто может проверить квартиру.","es":"Не войду и сразу свяжусь с теми, кто может проверить квартиру.","pt":"Не войду и сразу свяжусь с теми, кто может проверить квартиру.","de":"Не войду и сразу свяжусь с теми, кто может проверить квартиру.","fr":"Не войду и сразу свяжусь с теми, кто может проверить квартиру."},"b":{"ru":"Зайду только после того, как осмотрю вход и позвоню близкому.","en":"Зайду только после того, как осмотрю вход и позвоню близкому.","es":"Зайду только после того, как осмотрю вход и позвоню близкому.","pt":"Зайду только после того, как осмотрю вход и позвоню близкому.","de":"Зайду только после того, как осмотрю вход и позвоню близкому.","fr":"Зайду только после того, как осмотрю вход и позвоню близкому."},"c":{"ru":"Войду как обычно, если внутри всё кажется спокойным.","en":"Войду как обычно, если внутри всё кажется спокойным.","es":"Войду как обычно, если внутри всё кажется спокойным.","pt":"Войду как обычно, если внутри всё кажется спокойным.","de":"Войду как обычно, если внутри всё кажется спокойным.","fr":"Войду как обычно, если внутри всё кажется спокойным."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На работе тебе предлагают руководящую роль, но часть команды настроена против тебя. Что ты сделаешь?","en":"На работе тебе предлагают руководящую роль, но часть команды настроена против тебя. Что ты сделаешь?","es":"На работе тебе предлагают руководящую роль, но часть команды настроена против тебя. Что ты сделаешь?","pt":"На работе тебе предлагают руководящую роль, но часть команды настроена против тебя. Что ты сделаешь?","de":"На работе тебе предлагают руководящую роль, но часть команды настроена против тебя. Что ты сделаешь?","fr":"На работе тебе предлагают руководящую роль, но часть команды настроена против тебя. Что ты сделаешь?"},"a":{"ru":"Приму роль и сначала поговорю с каждым ключевым человеком.","en":"Приму роль и сначала поговорю с каждым ключевым человеком.","es":"Приму роль и сначала поговорю с каждым ключевым человеком.","pt":"Приму роль и сначала поговорю с каждым ключевым человеком.","de":"Приму роль и сначала поговорю с каждым ключевым человеком.","fr":"Приму роль и сначала поговорю с каждым ключевым человеком."},"b":{"ru":"Попрошу сначала обсудить ожидания и полномочия.","en":"Попрошу сначала обсудить ожидания и полномочия.","es":"Попрошу сначала обсудить ожидания и полномочия.","pt":"Попрошу сначала обсудить ожидания и полномочия.","de":"Попрошу сначала обсудить ожидания и полномочия.","fr":"Попрошу сначала обсудить ожидания и полномочия."},"c":{"ru":"Откажусь, если пойму, что конфликт разрушит работу команды.","en":"Откажусь, если пойму, что конфликт разрушит работу команды.","es":"Откажусь, если пойму, что конфликт разрушит работу команды.","pt":"Откажусь, если пойму, что конфликт разрушит работу команды.","de":"Откажусь, если пойму, что конфликт разрушит работу команды.","fr":"Откажусь, если пойму, что конфликт разрушит работу команды."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты замечаешь ошибку в документе, который уже почти отправили клиенту. Что ты сделаешь?","en":"Ты замечаешь ошибку в документе, который уже почти отправили клиенту. Что ты сделаешь?","es":"Ты замечаешь ошибку в документе, который уже почти отправили клиенту. Что ты сделаешь?","pt":"Ты замечаешь ошибку в документе, который уже почти отправили клиенту. Что ты сделаешь?","de":"Ты замечаешь ошибку в документе, который уже почти отправили клиенту. Что ты сделаешь?","fr":"Ты замечаешь ошибку в документе, который уже почти отправили клиенту. Что ты сделаешь?"},"a":{"ru":"Сразу остановлю отправку и исправлю ошибку.","en":"Сразу остановлю отправку и исправлю ошибку.","es":"Сразу остановлю отправку и исправлю ошибку.","pt":"Сразу остановлю отправку и исправлю ошибку.","de":"Сразу остановлю отправку и исправлю ошибку.","fr":"Сразу остановлю отправку и исправлю ошибку."},"b":{"ru":"Позвоню ответственному человеку и сообщу о проблеме.","en":"Позвоню ответственному человеку и сообщу о проблеме.","es":"Позвоню ответственному человеку и сообщу о проблеме.","pt":"Позвоню ответственному человеку и сообщу о проблеме.","de":"Позвоню ответственному человеку и сообщу о проблеме.","fr":"Позвоню ответственному человеку и сообщу о проблеме."},"c":{"ru":"Если исправление займёт время, предложу отправить версию с пометкой о корректировке позже.","en":"Если исправление займёт время, предложу отправить версию с пометкой о корректировке позже.","es":"Если исправление займёт время, предложу отправить версию с пометкой о корректировке позже.","pt":"Если исправление займёт время, предложу отправить версию с пометкой о корректировке позже.","de":"Если исправление займёт время, предложу отправить версию с пометкой о корректировке позже.","fr":"Если исправление займёт время, предложу отправить версию с пометкой о корректировке позже."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебя просят выступить перед большой группой людей уже завтра, хотя ты никогда этого не делал. Что ты сделаешь?","en":"Тебя просят выступить перед большой группой людей уже завтра, хотя ты никогда этого не делал. Что ты сделаешь?","es":"Тебя просят выступить перед большой группой людей уже завтра, хотя ты никогда этого не делал. Что ты сделаешь?","pt":"Тебя просят выступить перед большой группой людей уже завтра, хотя ты никогда этого не делал. Что ты сделаешь?","de":"Тебя просят выступить перед большой группой людей уже завтра, хотя ты никогда этого не делал. Что ты сделаешь?","fr":"Тебя просят выступить перед большой группой людей уже завтра, хотя ты никогда этого не делал. Что ты сделаешь?"},"a":{"ru":"Соглашусь и сегодня же подготовлю структуру выступления.","en":"Соглашусь и сегодня же подготовлю структуру выступления.","es":"Соглашусь и сегодня же подготовлю структуру выступления.","pt":"Соглашусь и сегодня же подготовлю структуру выступления.","de":"Соглашусь и сегодня же подготовлю структуру выступления.","fr":"Соглашусь и сегодня же подготовлю структуру выступления."},"b":{"ru":"Попрошу дать мне более короткую роль.","en":"Попрошу дать мне более короткую роль.","es":"Попрошу дать мне более короткую роль.","pt":"Попрошу дать мне более короткую роль.","de":"Попрошу дать мне более короткую роль.","fr":"Попрошу дать мне более короткую роль."},"c":{"ru":"Откажусь, если не будет времени нормально подготовиться.","en":"Откажусь, если не будет времени нормально подготовиться.","es":"Откажусь, если не будет времени нормально подготовиться.","pt":"Откажусь, если не будет времени нормально подготовиться.","de":"Откажусь, если не будет времени нормально подготовиться.","fr":"Откажусь, если не будет времени нормально подготовиться."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На встрече спорят два человека, и разговор заходит в тупик. Что ты сделаешь?","en":"На встрече спорят два человека, и разговор заходит в тупик. Что ты сделаешь?","es":"На встрече спорят два человека, и разговор заходит в тупик. Что ты сделаешь?","pt":"На встрече спорят два человека, и разговор заходит в тупик. Что ты сделаешь?","de":"На встрече спорят два человека, и разговор заходит в тупик. Что ты сделаешь?","fr":"На встрече спорят два человека, и разговор заходит в тупик. Что ты сделаешь?"},"a":{"ru":"Предложу остановиться и сформулировать общую цель.","en":"Предложу остановиться и сформулировать общую цель.","es":"Предложу остановиться и сформулировать общую цель.","pt":"Предложу остановиться и сформулировать общую цель.","de":"Предложу остановиться и сформулировать общую цель.","fr":"Предложу остановиться и сформулировать общую цель."},"b":{"ru":"Попрошу каждого назвать один вариант решения.","en":"Попрошу каждого назвать один вариант решения.","es":"Попрошу каждого назвать один вариант решения.","pt":"Попрошу каждого назвать один вариант решения.","de":"Попрошу каждого назвать один вариант решения.","fr":"Попрошу каждого назвать один вариант решения."},"c":{"ru":"Не вмешаюсь, пока они не попросят.","en":"Не вмешаюсь, пока они не попросят.","es":"Не вмешаюсь, пока они не попросят.","pt":"Не вмешаюсь, пока они не попросят.","de":"Не вмешаюсь, пока они не попросят.","fr":"Не вмешаюсь, пока они не попросят."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь, что новый сотрудник явно не понимает задачу, но боится спросить. Что ты сделаешь?","en":"Ты видишь, что новый сотрудник явно не понимает задачу, но боится спросить. Что ты сделаешь?","es":"Ты видишь, что новый сотрудник явно не понимает задачу, но боится спросить. Что ты сделаешь?","pt":"Ты видишь, что новый сотрудник явно не понимает задачу, но боится спросить. Что ты сделаешь?","de":"Ты видишь, что новый сотрудник явно не понимает задачу, но боится спросить. Что ты сделаешь?","fr":"Ты видишь, что новый сотрудник явно не понимает задачу, но боится спросить. Что ты сделаешь?"},"a":{"ru":"Сам подойду и предложу объяснить задачу.","en":"Сам подойду и предложу объяснить задачу.","es":"Сам подойду и предложу объяснить задачу.","pt":"Сам подойду и предложу объяснить задачу.","de":"Сам подойду и предложу объяснить задачу.","fr":"Сам подойду и предложу объяснить задачу."},"b":{"ru":"Спрошу при всех, всё ли ему понятно, чтобы снять напряжение.","en":"Спрошу при всех, всё ли ему понятно, чтобы снять напряжение.","es":"Спрошу при всех, всё ли ему понятно, чтобы снять напряжение.","pt":"Спрошу при всех, всё ли ему понятно, чтобы снять напряжение.","de":"Спрошу при всех, всё ли ему понятно, чтобы снять напряжение.","fr":"Спрошу при всех, всё ли ему понятно, чтобы снять напряжение."},"c":{"ru":"Подожду, пока он сам обратится.","en":"Подожду, пока он сам обратится.","es":"Подожду, пока он сам обратится.","pt":"Подожду, пока он сам обратится.","de":"Подожду, пока он сам обратится.","fr":"Подожду, пока он сам обратится."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Твой сосед оставил мусор в общем коридоре и не замечает этого. Что ты сделаешь?","en":"Твой сосед оставил мусор в общем коридоре и не замечает этого. Что ты сделаешь?","es":"Твой сосед оставил мусор в общем коридоре и не замечает этого. Что ты сделаешь?","pt":"Твой сосед оставил мусор в общем коридоре и не замечает этого. Что ты сделаешь?","de":"Твой сосед оставил мусор в общем коридоре и не замечает этого. Что ты сделаешь?","fr":"Твой сосед оставил мусор в общем коридоре и не замечает этого. Что ты сделаешь?"},"a":{"ru":"Скажу ему об этом лично.","en":"Скажу ему об этом лично.","es":"Скажу ему об этом лично.","pt":"Скажу ему об этом лично.","de":"Скажу ему об этом лично.","fr":"Скажу ему об этом лично."},"b":{"ru":"Уберу сам и потом сообщу, чтобы ситуация не повторялась.","en":"Уберу сам и потом сообщу, чтобы ситуация не повторялась.","es":"Уберу сам и потом сообщу, чтобы ситуация не повторялась.","pt":"Уберу сам и потом сообщу, чтобы ситуация не повторялась.","de":"Уберу сам и потом сообщу, чтобы ситуация не повторялась.","fr":"Уберу сам и потом сообщу, чтобы ситуация не повторялась."},"c":{"ru":"Ничего не сделаю, если это случилось один раз.","en":"Ничего не сделаю, если это случилось один раз.","es":"Ничего не сделаю, если это случилось один раз.","pt":"Ничего не сделаю, если это случилось один раз.","de":"Ничего не сделаю, если это случилось один раз.","fr":"Ничего не сделаю, если это случилось один раз."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты находишь в интернете объявление о продаже редкой вещи по подозрительно низкой цене. Что ты сделаешь?","en":"Ты находишь в интернете объявление о продаже редкой вещи по подозрительно низкой цене. Что ты сделаешь?","es":"Ты находишь в интернете объявление о продаже редкой вещи по подозрительно низкой цене. Что ты сделаешь?","pt":"Ты находишь в интернете объявление о продаже редкой вещи по подозрительно низкой цене. Что ты сделаешь?","de":"Ты находишь в интернете объявление о продаже редкой вещи по подозрительно низкой цене. Что ты сделаешь?","fr":"Ты находишь в интернете объявление о продаже редкой вещи по подозрительно низкой цене. Что ты сделаешь?"},"a":{"ru":"Попрошу дополнительные фото и подтверждение подлинности.","en":"Попрошу дополнительные фото и подтверждение подлинности.","es":"Попрошу дополнительные фото и подтверждение подлинности.","pt":"Попрошу дополнительные фото и подтверждение подлинности.","de":"Попрошу дополнительные фото и подтверждение подлинности.","fr":"Попрошу дополнительные фото и подтверждение подлинности."},"b":{"ru":"Проверю продавца и отзывы перед любыми действиями.","en":"Проверю продавца и отзывы перед любыми действиями.","es":"Проверю продавца и отзывы перед любыми действиями.","pt":"Проверю продавца и отзывы перед любыми действиями.","de":"Проверю продавца и отзывы перед любыми действиями.","fr":"Проверю продавца и отзывы перед любыми действиями."},"c":{"ru":"Пропущу объявление и не буду связываться.","en":"Пропущу объявление и не буду связываться.","es":"Пропущу объявление и не буду связываться.","pt":"Пропущу объявление и не буду связываться.","de":"Пропущу объявление и не буду связываться.","fr":"Пропущу объявление и не буду связываться."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время тренировки партнёр обвиняет тебя в нарушении правил, хотя ты уверен, что этого не было. Что ты сделаешь?","en":"Во время тренировки партнёр обвиняет тебя в нарушении правил, хотя ты уверен, что этого не было. Что ты сделаешь?","es":"Во время тренировки партнёр обвиняет тебя в нарушении правил, хотя ты уверен, что этого не было. Что ты сделаешь?","pt":"Во время тренировки партнёр обвиняет тебя в нарушении правил, хотя ты уверен, что этого не было. Что ты сделаешь?","de":"Во время тренировки партнёр обвиняет тебя в нарушении правил, хотя ты уверен, что этого не было. Что ты сделаешь?","fr":"Во время тренировки партнёр обвиняет тебя в нарушении правил, хотя ты уверен, что этого не было. Что ты сделаешь?"},"a":{"ru":"Спокойно разберу момент по правилам.","en":"Спокойно разберу момент по правилам.","es":"Спокойно разберу момент по правилам.","pt":"Спокойно разберу момент по правилам.","de":"Спокойно разберу момент по правилам.","fr":"Спокойно разберу момент по правилам."},"b":{"ru":"Предложу продолжить игру и обсудить эпизод после.","en":"Предложу продолжить игру и обсудить эпизод после.","es":"Предложу продолжить игру и обсудить эпизод после.","pt":"Предложу продолжить игру и обсудить эпизод после.","de":"Предложу продолжить игру и обсудить эпизод после.","fr":"Предложу продолжить игру и обсудить эпизод после."},"c":{"ru":"Соглашусь, чтобы не портить отношения.","en":"Соглашусь, чтобы не портить отношения.","es":"Соглашусь, чтобы не портить отношения.","pt":"Соглашусь, чтобы не портить отношения.","de":"Соглашусь, чтобы не портить отношения.","fr":"Соглашусь, чтобы не портить отношения."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе предлагают повышение, которое потребует переезда в другой город. Что ты сделаешь?","en":"Тебе предлагают повышение, которое потребует переезда в другой город. Что ты сделаешь?","es":"Тебе предлагают повышение, которое потребует переезда в другой город. Что ты сделаешь?","pt":"Тебе предлагают повышение, которое потребует переезда в другой город. Что ты сделаешь?","de":"Тебе предлагают повышение, которое потребует переезда в другой город. Что ты сделаешь?","fr":"Тебе предлагают повышение, которое потребует переезда в другой город. Что ты сделаешь?"},"a":{"ru":"Сначала выясню все условия жизни и работы на новом месте.","en":"Сначала выясню все условия жизни и работы на новом месте.","es":"Сначала выясню все условия жизни и работы на новом месте.","pt":"Сначала выясню все условия жизни и работы на новом месте.","de":"Сначала выясню все условия жизни и работы на новом месте.","fr":"Сначала выясню все условия жизни и работы на новом месте."},"b":{"ru":"Попрошу время на сравнение вариантов.","en":"Попрошу время на сравнение вариантов.","es":"Попрошу время на сравнение вариантов.","pt":"Попрошу время на сравнение вариантов.","de":"Попрошу время на сравнение вариантов.","fr":"Попрошу время на сравнение вариантов."},"c":{"ru":"Сразу откажусь, потому что не хочу переезжать.","en":"Сразу откажусь, потому что не хочу переезжать.","es":"Сразу откажусь, потому что не хочу переезжать.","pt":"Сразу откажусь, потому что не хочу переезжать.","de":"Сразу откажусь, потому что не хочу переезжать.","fr":"Сразу откажусь, потому что не хочу переезжать."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты планировал выходные в одиночестве, но друзья неожиданно зовут тебя в большую компанию. Что ты сделаешь?","en":"Ты планировал выходные в одиночестве, но друзья неожиданно зовут тебя в большую компанию. Что ты сделаешь?","es":"Ты планировал выходные в одиночестве, но друзья неожиданно зовут тебя в большую компанию. Что ты сделаешь?","pt":"Ты планировал выходные в одиночестве, но друзья неожиданно зовут тебя в большую компанию. Что ты сделаешь?","de":"Ты планировал выходные в одиночестве, но друзья неожиданно зовут тебя в большую компанию. Что ты сделаешь?","fr":"Ты планировал выходные в одиночестве, но друзья неожиданно зовут тебя в большую компанию. Что ты сделаешь?"},"a":{"ru":"Присоединюсь на часть дня.","en":"Присоединюсь на часть дня.","es":"Присоединюсь на часть дня.","pt":"Присоединюсь на часть дня.","de":"Присоединюсь на часть дня.","fr":"Присоединюсь на часть дня."},"b":{"ru":"Спрошу, можно ли встретиться позже в более спокойном формате.","en":"Спрошу, можно ли встретиться позже в более спокойном формате.","es":"Спрошу, можно ли встретиться позже в более спокойном формате.","pt":"Спрошу, можно ли встретиться позже в более спокойном формате.","de":"Спрошу, можно ли встретиться позже в более спокойном формате.","fr":"Спрошу, можно ли встретиться позже в более спокойном формате."},"c":{"ru":"Останусь дома, потому что уже настроился на свой план.","en":"Останусь дома, потому что уже настроился на свой план.","es":"Останусь дома, потому что уже настроился на свой план.","pt":"Останусь дома, потому что уже настроился на свой план.","de":"Останусь дома, потому что уже настроился на свой план.","fr":"Останусь дома, потому что уже настроился на свой план."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты слышишь, как один человек распускает сплетни о твоём близком знакомом. Что ты сделаешь?","en":"Ты слышишь, как один человек распускает сплетни о твоём близком знакомом. Что ты сделаешь?","es":"Ты слышишь, как один человек распускает сплетни о твоём близком знакомом. Что ты сделаешь?","pt":"Ты слышишь, как один человек распускает сплетни о твоём близком знакомом. Что ты сделаешь?","de":"Ты слышишь, как один человек распускает сплетни о твоём близком знакомом. Что ты сделаешь?","fr":"Ты слышишь, как один человек распускает сплетни о твоём близком знакомом. Что ты сделаешь?"},"a":{"ru":"Спрошу, откуда у него эта информация.","en":"Спрошу, откуда у него эта информация.","es":"Спрошу, откуда у него эта информация.","pt":"Спрошу, откуда у него эта информация.","de":"Спрошу, откуда у него эта информация.","fr":"Спрошу, откуда у него эта информация."},"b":{"ru":"Не стану участвовать в разговоре и сменю тему.","en":"Не стану участвовать в разговоре и сменю тему.","es":"Не стану участвовать в разговоре и сменю тему.","pt":"Не стану участвовать в разговоре и сменю тему.","de":"Не стану участвовать в разговоре и сменю тему.","fr":"Не стану участвовать в разговоре и сменю тему."},"c":{"ru":"Сообщу знакомому, что о нём говорят.","en":"Сообщу знакомому, что о нём говорят.","es":"Сообщу знакомому, что о нём говорят.","pt":"Сообщу знакомому, что о нём говорят.","de":"Сообщу знакомому, что о нём говорят.","fr":"Сообщу знакомому, что о нём говорят."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На групповом проекте один участник ничего не делает, но хочет получить одинаковую оценку. Что ты сделаешь?","en":"На групповом проекте один участник ничего не делает, но хочет получить одинаковую оценку. Что ты сделаешь?","es":"На групповом проекте один участник ничего не делает, но хочет получить одинаковую оценку. Что ты сделаешь?","pt":"На групповом проекте один участник ничего не делает, но хочет получить одинаковую оценку. Что ты сделаешь?","de":"На групповом проекте один участник ничего не делает, но хочет получить одинаковую оценку. Что ты сделаешь?","fr":"На групповом проекте один участник ничего не делает, но хочет получить одинаковую оценку. Что ты сделаешь?"},"a":{"ru":"Сначала поговорю с ним лично и дам возможность включиться.","en":"Сначала поговорю с ним лично и дам возможность включиться.","es":"Сначала поговорю с ним лично и дам возможность включиться.","pt":"Сначала поговорю с ним лично и дам возможность включиться.","de":"Сначала поговорю с ним лично и дам возможность включиться.","fr":"Сначала поговорю с ним лично и дам возможность включиться."},"b":{"ru":"Распределю оставшиеся задачи и зафиксирую вклад каждого.","en":"Распределю оставшиеся задачи и зафиксирую вклад каждого.","es":"Распределю оставшиеся задачи и зафиксирую вклад каждого.","pt":"Распределю оставшиеся задачи и зафиксирую вклад каждого.","de":"Распределю оставшиеся задачи и зафиксирую вклад каждого.","fr":"Распределю оставшиеся задачи и зафиксирую вклад каждого."},"c":{"ru":"Сообщу руководителю проекта о проблеме.","en":"Сообщу руководителю проекта о проблеме.","es":"Сообщу руководителю проекта о проблеме.","pt":"Сообщу руководителю проекта о проблеме.","de":"Сообщу руководителю проекта о проблеме.","fr":"Сообщу руководителю проекта о проблеме."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты понимаешь, что купленный билет на мероприятие тебе больше не нужен, но вернуть деньги уже сложно. Что ты сделаешь?","en":"Ты понимаешь, что купленный билет на мероприятие тебе больше не нужен, но вернуть деньги уже сложно. Что ты сделаешь?","es":"Ты понимаешь, что купленный билет на мероприятие тебе больше не нужен, но вернуть деньги уже сложно. Что ты сделаешь?","pt":"Ты понимаешь, что купленный билет на мероприятие тебе больше не нужен, но вернуть деньги уже сложно. Что ты сделаешь?","de":"Ты понимаешь, что купленный билет на мероприятие тебе больше не нужен, но вернуть деньги уже сложно. Что ты сделаешь?","fr":"Ты понимаешь, что купленный билет на мероприятие тебе больше не нужен, но вернуть деньги уже сложно. Что ты сделаешь?"},"a":{"ru":"Попробую перепродать билет законным способом.","en":"Попробую перепродать билет законным способом.","es":"Попробую перепродать билет законным способом.","pt":"Попробую перепродать билет законным способом.","de":"Попробую перепродать билет законным способом.","fr":"Попробую перепродать билет законным способом."},"b":{"ru":"Проверю правила возврата и обмена.","en":"Проверю правила возврата и обмена.","es":"Проверю правила возврата и обмена.","pt":"Проверю правила возврата и обмена.","de":"Проверю правила возврата и обмена.","fr":"Проверю правила возврата и обмена."},"c":{"ru":"Оставлю билет и всё равно схожу, чтобы не потерять деньги.","en":"Оставлю билет и всё равно схожу, чтобы не потерять деньги.","es":"Оставлю билет и всё равно схожу, чтобы не потерять деньги.","pt":"Оставлю билет и всё равно схожу, чтобы не потерять деньги.","de":"Оставлю билет и всё равно схожу, чтобы не потерять деньги.","fr":"Оставлю билет и всё равно схожу, чтобы не потерять деньги."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты встречаешь бывшего знакомого, с которым отношения закончились неприятно. Что ты сделаешь?","en":"Ты встречаешь бывшего знакомого, с которым отношения закончились неприятно. Что ты сделаешь?","es":"Ты встречаешь бывшего знакомого, с которым отношения закончились неприятно. Что ты сделаешь?","pt":"Ты встречаешь бывшего знакомого, с которым отношения закончились неприятно. Что ты сделаешь?","de":"Ты встречаешь бывшего знакомого, с которым отношения закончились неприятно. Что ты сделаешь?","fr":"Ты встречаешь бывшего знакомого, с которым отношения закончились неприятно. Что ты сделаешь?"},"a":{"ru":"Вежливо поздороваюсь и не стану возвращаться к прошлому.","en":"Вежливо поздороваюсь и не стану возвращаться к прошлому.","es":"Вежливо поздороваюсь и не стану возвращаться к прошлому.","pt":"Вежливо поздороваюсь и не стану возвращаться к прошлому.","de":"Вежливо поздороваюсь и не стану возвращаться к прошлому.","fr":"Вежливо поздороваюсь и не стану возвращаться к прошлому."},"b":{"ru":"Если он заговорит, спокойно выслушаю.","en":"Если он заговорит, спокойно выслушаю.","es":"Если он заговорит, спокойно выслушаю.","pt":"Если он заговорит, спокойно выслушаю.","de":"Если он заговорит, спокойно выслушаю.","fr":"Если он заговорит, спокойно выслушаю."},"c":{"ru":"Пройду мимо, чтобы не открывать старый конфликт.","en":"Пройду мимо, чтобы не открывать старый конфликт.","es":"Пройду мимо, чтобы не открывать старый конфликт.","pt":"Пройду мимо, чтобы не открывать старый конфликт.","de":"Пройду мимо, чтобы не открывать старый конфликт.","fr":"Пройду мимо, чтобы не открывать старый конфликт."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебя просят дать совет по теме, в которой ты почти не разбираешься. Что ты сделаешь?","en":"Тебя просят дать совет по теме, в которой ты почти не разбираешься. Что ты сделаешь?","es":"Тебя просят дать совет по теме, в которой ты почти не разбираешься. Что ты сделаешь?","pt":"Тебя просят дать совет по теме, в которой ты почти не разбираешься. Что ты сделаешь?","de":"Тебя просят дать совет по теме, в которой ты почти не разбираешься. Что ты сделаешь?","fr":"Тебя просят дать совет по теме, в которой ты почти не разбираешься. Что ты сделаешь?"},"a":{"ru":"Честно скажу, что не эксперт, и помогу найти информацию.","en":"Честно скажу, что не эксперт, и помогу найти информацию.","es":"Честно скажу, что не эксперт, и помогу найти информацию.","pt":"Честно скажу, что не эксперт, и помогу найти информацию.","de":"Честно скажу, что не эксперт, и помогу найти информацию.","fr":"Честно скажу, что не эксперт, и помогу найти информацию."},"b":{"ru":"Дам только то, что знаю наверняка.","en":"Дам только то, что знаю наверняка.","es":"Дам только то, что знаю наверняка.","pt":"Дам только то, что знаю наверняка.","de":"Дам только то, что знаю наверняка.","fr":"Дам только то, что знаю наверняка."},"c":{"ru":"Откажусь отвечать, чтобы не ввести человека в заблуждение.","en":"Откажусь отвечать, чтобы не ввести человека в заблуждение.","es":"Откажусь отвечать, чтобы не ввести человека в заблуждение.","pt":"Откажусь отвечать, чтобы не ввести человека в заблуждение.","de":"Откажусь отвечать, чтобы не ввести человека в заблуждение.","fr":"Откажусь отвечать, чтобы не ввести человека в заблуждение."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты замечаешь, что на семейном празднике одному гостю стало плохо. Что ты сделаешь?","en":"Ты замечаешь, что на семейном празднике одному гостю стало плохо. Что ты сделаешь?","es":"Ты замечаешь, что на семейном празднике одному гостю стало плохо. Что ты сделаешь?","pt":"Ты замечаешь, что на семейном празднике одному гостю стало плохо. Что ты сделаешь?","de":"Ты замечаешь, что на семейном празднике одному гостю стало плохо. Что ты сделаешь?","fr":"Ты замечаешь, что на семейном празднике одному гостю стало плохо. Что ты сделаешь?"},"a":{"ru":"Сразу помогу ему сесть и вызову необходимую помощь.","en":"Сразу помогу ему сесть и вызову необходимую помощь.","es":"Сразу помогу ему сесть и вызову необходимую помощь.","pt":"Сразу помогу ему сесть и вызову необходимую помощь.","de":"Сразу помогу ему сесть и вызову необходимую помощь.","fr":"Сразу помогу ему сесть и вызову необходимую помощь."},"b":{"ru":"Попрошу кого-то рядом заняться этим, пока освобождаю место.","en":"Попрошу кого-то рядом заняться этим, пока освобождаю место.","es":"Попрошу кого-то рядом заняться этим, пока освобождаю место.","pt":"Попрошу кого-то рядом заняться этим, пока освобождаю место.","de":"Попрошу кого-то рядом заняться этим, пока освобождаю место.","fr":"Попрошу кого-то рядом заняться этим, пока освобождаю место."},"c":{"ru":"Сначала спрошу, что именно он чувствует и какая помощь ему нужна.","en":"Сначала спрошу, что именно он чувствует и какая помощь ему нужна.","es":"Сначала спрошу, что именно он чувствует и какая помощь ему нужна.","pt":"Сначала спрошу, что именно он чувствует и какая помощь ему нужна.","de":"Сначала спрошу, что именно он чувствует и какая помощь ему нужна.","fr":"Сначала спрошу, что именно он чувствует и какая помощь ему нужна."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Друг сообщает тебе неприятную новость и просит никому её не рассказывать. Что ты сделаешь?","en":"Друг сообщает тебе неприятную новость и просит никому её не рассказывать. Что ты сделаешь?","es":"Друг сообщает тебе неприятную новость и просит никому её не рассказывать. Что ты сделаешь?","pt":"Друг сообщает тебе неприятную новость и просит никому её не рассказывать. Что ты сделаешь?","de":"Друг сообщает тебе неприятную новость и просит никому её не рассказывать. Что ты сделаешь?","fr":"Друг сообщает тебе неприятную новость и просит никому её не рассказывать. Что ты сделаешь?"},"a":{"ru":"Сохраню это между нами, если нет угрозы безопасности.","en":"Сохраню это между нами, если нет угрозы безопасности.","es":"Сохраню это между нами, если нет угрозы безопасности.","pt":"Сохраню это между нами, если нет угрозы безопасности.","de":"Сохраню это между нами, если нет угрозы безопасности.","fr":"Сохраню это между нами, если нет угрозы безопасности."},"b":{"ru":"Сразу уточню, есть ли человек, которому всё же нужно знать.","en":"Сразу уточню, есть ли человек, которому всё же нужно знать.","es":"Сразу уточню, есть ли человек, которому всё же нужно знать.","pt":"Сразу уточню, есть ли человек, которому всё же нужно знать.","de":"Сразу уточню, есть ли человек, которому всё же нужно знать.","fr":"Сразу уточню, есть ли человек, которому всё же нужно знать."},"c":{"ru":"Скажу, что не обещаю хранить тайну, если ситуация серьёзная.","en":"Скажу, что не обещаю хранить тайну, если ситуация серьёзная.","es":"Скажу, что не обещаю хранить тайну, если ситуация серьёзная.","pt":"Скажу, что не обещаю хранить тайну, если ситуация серьёзная.","de":"Скажу, что не обещаю хранить тайну, если ситуация серьёзная.","fr":"Скажу, что не обещаю хранить тайну, если ситуация серьёзная."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты получаешь два предложения о сотрудничестве с одинаковой оплатой, но разной перспективой. Что ты сделаешь?","en":"Ты получаешь два предложения о сотрудничестве с одинаковой оплатой, но разной перспективой. Что ты сделаешь?","es":"Ты получаешь два предложения о сотрудничестве с одинаковой оплатой, но разной перспективой. Что ты сделаешь?","pt":"Ты получаешь два предложения о сотрудничестве с одинаковой оплатой, но разной перспективой. Что ты сделаешь?","de":"Ты получаешь два предложения о сотрудничестве с одинаковой оплатой, но разной перспективой. Что ты сделаешь?","fr":"Ты получаешь два предложения о сотрудничестве с одинаковой оплатой, но разной перспективой. Что ты сделаешь?"},"a":{"ru":"Выберу вариант, где можно сильнее вырасти.","en":"Выберу вариант, где можно сильнее вырасти.","es":"Выберу вариант, где можно сильнее вырасти.","pt":"Выберу вариант, где можно сильнее вырасти.","de":"Выберу вариант, где можно сильнее вырасти.","fr":"Выберу вариант, где можно сильнее вырасти."},"b":{"ru":"Сравню риски и долгосрочные условия.","en":"Сравню риски и долгосрочные условия.","es":"Сравню риски и долгосрочные условия.","pt":"Сравню риски и долгосрочные условия.","de":"Сравню риски и долгосрочные условия.","fr":"Сравню риски и долгосрочные условия."},"c":{"ru":"Возьму более спокойный вариант с предсказуемой нагрузкой.","en":"Возьму более спокойный вариант с предсказуемой нагрузкой.","es":"Возьму более спокойный вариант с предсказуемой нагрузкой.","pt":"Возьму более спокойный вариант с предсказуемой нагрузкой.","de":"Возьму более спокойный вариант с предсказуемой нагрузкой.","fr":"Возьму более спокойный вариант с предсказуемой нагрузкой."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе поручают задачу, которую никто раньше в команде не делал. Что ты сделаешь?","en":"Тебе поручают задачу, которую никто раньше в команде не делал. Что ты сделаешь?","es":"Тебе поручают задачу, которую никто раньше в команде не делал. Что ты сделаешь?","pt":"Тебе поручают задачу, которую никто раньше в команде не делал. Что ты сделаешь?","de":"Тебе поручают задачу, которую никто раньше в команде не делал. Что ты сделаешь?","fr":"Тебе поручают задачу, которую никто раньше в команде не делал. Что ты сделаешь?"},"a":{"ru":"Соберу информацию и попробую создать первый рабочий вариант.","en":"Соберу информацию и попробую создать первый рабочий вариант.","es":"Соберу информацию и попробую создать первый рабочий вариант.","pt":"Соберу информацию и попробую создать первый рабочий вариант.","de":"Соберу информацию и попробую создать первый рабочий вариант.","fr":"Соберу информацию и попробую создать первый рабочий вариант."},"b":{"ru":"Найду человека с похожим опытом и спрошу совета.","en":"Найду человека с похожим опытом и спрошу совета.","es":"Найду человека с похожим опытом и спрошу совета.","pt":"Найду человека с похожим опытом и спрошу совета.","de":"Найду человека с похожим опытом и спрошу совета.","fr":"Найду человека с похожим опытом и спрошу совета."},"c":{"ru":"Разобью задачу на маленькие этапы и начну с самого простого.","en":"Разобью задачу на маленькие этапы и начну с самого простого.","es":"Разобью задачу на маленькие этапы и начну с самого простого.","pt":"Разобью задачу на маленькие этапы и начну с самого простого.","de":"Разобью задачу на маленькие этапы и начну с самого простого.","fr":"Разобью задачу на маленькие этапы и начну с самого простого."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты случайно услышал важный разговор, который явно не предназначался для тебя. Что ты сделаешь?","en":"Ты случайно услышал важный разговор, который явно не предназначался для тебя. Что ты сделаешь?","es":"Ты случайно услышал важный разговор, который явно не предназначался для тебя. Что ты сделаешь?","pt":"Ты случайно услышал важный разговор, который явно не предназначался для тебя. Что ты сделаешь?","de":"Ты случайно услышал важный разговор, который явно не предназначался для тебя. Что ты сделаешь?","fr":"Ты случайно услышал важный разговор, который явно не предназначался для тебя. Что ты сделаешь?"},"a":{"ru":"Сразу уйду и не буду использовать услышанное.","en":"Сразу уйду и не буду использовать услышанное.","es":"Сразу уйду и не буду использовать услышанное.","pt":"Сразу уйду и не буду использовать услышанное.","de":"Сразу уйду и не буду использовать услышанное.","fr":"Сразу уйду и не буду использовать услышанное."},"b":{"ru":"Запомню только то, что касается возможной проблемы для меня.","en":"Запомню только то, что касается возможной проблемы для меня.","es":"Запомню только то, что касается возможной проблемы для меня.","pt":"Запомню только то, что касается возможной проблемы для меня.","de":"Запомню только то, что касается возможной проблемы для меня.","fr":"Запомню только то, что касается возможной проблемы для меня."},"c":{"ru":"Позже честно скажу участникам, что случайно это услышал.","en":"Позже честно скажу участникам, что случайно это услышал.","es":"Позже честно скажу участникам, что случайно это услышал.","pt":"Позже честно скажу участникам, что случайно это услышал.","de":"Позже честно скажу участникам, что случайно это услышал.","fr":"Позже честно скажу участникам, что случайно это услышал."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"У тебя ломается техника перед важной презентацией. Что ты сделаешь?","en":"У тебя ломается техника перед важной презентацией. Что ты сделаешь?","es":"У тебя ломается техника перед важной презентацией. Что ты сделаешь?","pt":"У тебя ломается техника перед важной презентацией. Что ты сделаешь?","de":"У тебя ломается техника перед важной презентацией. Что ты сделаешь?","fr":"У тебя ломается техника перед важной презентацией. Что ты сделаешь?"},"a":{"ru":"Быстро переключусь на запасной вариант.","en":"Быстро переключусь на запасной вариант.","es":"Быстро переключусь на запасной вариант.","pt":"Быстро переключусь на запасной вариант.","de":"Быстро переключусь на запасной вариант.","fr":"Быстро переключусь на запасной вариант."},"b":{"ru":"Попробую починить только самое необходимое.","en":"Попробую починить только самое необходимое.","es":"Попробую починить только самое необходимое.","pt":"Попробую починить только самое необходимое.","de":"Попробую починить только самое необходимое.","fr":"Попробую починить только самое необходимое."},"c":{"ru":"Перенесу презентацию, если без техники качество будет слишком низким.","en":"Перенесу презентацию, если без техники качество будет слишком низким.","es":"Перенесу презентацию, если без техники качество будет слишком низким.","pt":"Перенесу презентацию, если без техники качество будет слишком низким.","de":"Перенесу презентацию, если без техники качество будет слишком низким.","fr":"Перенесу презентацию, если без техники качество будет слишком низким."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь в сети вакансию мечты, но не соответствуешь одному из требований. Что ты сделаешь?","en":"Ты видишь в сети вакансию мечты, но не соответствуешь одному из требований. Что ты сделаешь?","es":"Ты видишь в сети вакансию мечты, но не соответствуешь одному из требований. Что ты сделаешь?","pt":"Ты видишь в сети вакансию мечты, но не соответствуешь одному из требований. Что ты сделаешь?","de":"Ты видишь в сети вакансию мечты, но не соответствуешь одному из требований. Что ты сделаешь?","fr":"Ты видишь в сети вакансию мечты, но не соответствуешь одному из требований. Что ты сделаешь?"},"a":{"ru":"Всё равно подам заявку и честно укажу свой уровень.","en":"Всё равно подам заявку и честно укажу свой уровень.","es":"Всё равно подам заявку и честно укажу свой уровень.","pt":"Всё равно подам заявку и честно укажу свой уровень.","de":"Всё равно подам заявку и честно укажу свой уровень.","fr":"Всё равно подам заявку и честно укажу свой уровень."},"b":{"ru":"Сначала быстро подтяну недостающий навык.","en":"Сначала быстро подтяну недостающий навык.","es":"Сначала быстро подтяну недостающий навык.","pt":"Сначала быстро подтяну недостающий навык.","de":"Сначала быстро подтяну недостающий навык.","fr":"Сначала быстро подтяну недостающий навык."},"c":{"ru":"Не стану откликаться, пока не буду полностью соответствовать.","en":"Не стану откликаться, пока не буду полностью соответствовать.","es":"Не стану откликаться, пока не буду полностью соответствовать.","pt":"Не стану откликаться, пока не буду полностью соответствовать.","de":"Не стану откликаться, пока не буду полностью соответствовать.","fr":"Не стану откликаться, пока не буду полностью соответствовать."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Близкий человек просит тебя принять за него решение, которое сильно повлияет на его жизнь. Что ты сделаешь?","en":"Близкий человек просит тебя принять за него решение, которое сильно повлияет на его жизнь. Что ты сделаешь?","es":"Близкий человек просит тебя принять за него решение, которое сильно повлияет на его жизнь. Что ты сделаешь?","pt":"Близкий человек просит тебя принять за него решение, которое сильно повлияет на его жизнь. Что ты сделаешь?","de":"Близкий человек просит тебя принять за него решение, которое сильно повлияет на его жизнь. Что ты сделаешь?","fr":"Близкий человек просит тебя принять за него решение, которое сильно повлияет на его жизнь. Что ты сделаешь?"},"a":{"ru":"Помогу разобраться в вариантах, но оставлю решение ему.","en":"Помогу разобраться в вариантах, но оставлю решение ему.","es":"Помогу разобраться в вариантах, но оставлю решение ему.","pt":"Помогу разобраться в вариантах, но оставлю решение ему.","de":"Помогу разобраться в вариантах, но оставлю решение ему.","fr":"Помогу разобраться в вариантах, но оставлю решение ему."},"b":{"ru":"Скажу, какой вариант выбрал бы я и почему.","en":"Скажу, какой вариант выбрал бы я и почему.","es":"Скажу, какой вариант выбрал бы я и почему.","pt":"Скажу, какой вариант выбрал бы я и почему.","de":"Скажу, какой вариант выбрал бы я и почему.","fr":"Скажу, какой вариант выбрал бы я и почему."},"c":{"ru":"Откажусь решать за него, чтобы он не переложил ответственность.","en":"Откажусь решать за него, чтобы он не переложил ответственность.","es":"Откажусь решать за него, чтобы он не переложил ответственность.","pt":"Откажусь решать за него, чтобы он не переложил ответственность.","de":"Откажусь решать за него, чтобы он не переложил ответственность.","fr":"Откажусь решать за него, чтобы он не переложил ответственность."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты обнаруживаешь, что забыл важную дату, которую обещал не забыть. Что ты сделаешь?","en":"Ты обнаруживаешь, что забыл важную дату, которую обещал не забыть. Что ты сделаешь?","es":"Ты обнаруживаешь, что забыл важную дату, которую обещал не забыть. Что ты сделаешь?","pt":"Ты обнаруживаешь, что забыл важную дату, которую обещал не забыть. Что ты сделаешь?","de":"Ты обнаруживаешь, что забыл важную дату, которую обещал не забыть. Что ты сделаешь?","fr":"Ты обнаруживаешь, что забыл важную дату, которую обещал не забыть. Что ты сделаешь?"},"a":{"ru":"Признаю ошибку и постараюсь исправить её действием.","en":"Признаю ошибку и постараюсь исправить её действием.","es":"Признаю ошибку и постараюсь исправить её действием.","pt":"Признаю ошибку и постараюсь исправить её действием.","de":"Признаю ошибку и постараюсь исправить её действием.","fr":"Признаю ошибку и постараюсь исправить её действием."},"b":{"ru":"Попрошу дать мне шанс компенсировать забывчивость позже.","en":"Попрошу дать мне шанс компенсировать забывчивость позже.","es":"Попрошу дать мне шанс компенсировать забывчивость позже.","pt":"Попрошу дать мне шанс компенсировать забывчивость позже.","de":"Попрошу дать мне шанс компенсировать забывчивость позже.","fr":"Попрошу дать мне шанс компенсировать забывчивость позже."},"c":{"ru":"Извинюсь, но не стану устраивать большой жест.","en":"Извинюсь, но не стану устраивать большой жест.","es":"Извинюсь, но не стану устраивать большой жест.","pt":"Извинюсь, но не стану устраивать большой жест.","de":"Извинюсь, но не стану устраивать большой жест.","fr":"Извинюсь, но не стану устраивать большой жест."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В магазине кассир случайно даёт тебе сдачу больше, чем нужно. Что ты сделаешь?","en":"В магазине кассир случайно даёт тебе сдачу больше, чем нужно. Что ты сделаешь?","es":"В магазине кассир случайно даёт тебе сдачу больше, чем нужно. Что ты сделаешь?","pt":"В магазине кассир случайно даёт тебе сдачу больше, чем нужно. Что ты сделаешь?","de":"В магазине кассир случайно даёт тебе сдачу больше, чем нужно. Что ты сделаешь?","fr":"В магазине кассир случайно даёт тебе сдачу больше, чем нужно. Что ты сделаешь?"},"a":{"ru":"Сразу верну лишние деньги.","en":"Сразу верну лишние деньги.","es":"Сразу верну лишние деньги.","pt":"Сразу верну лишние деньги.","de":"Сразу верну лишние деньги.","fr":"Сразу верну лишние деньги."},"b":{"ru":"Покажу кассиру ошибку и подожду пересчёта.","en":"Покажу кассиру ошибку и подожду пересчёта.","es":"Покажу кассиру ошибку и подожду пересчёта.","pt":"Покажу кассиру ошибку и подожду пересчёта.","de":"Покажу кассиру ошибку и подожду пересчёта.","fr":"Покажу кассиру ошибку и подожду пересчёта."},"c":{"ru":"Если он не заметит, всё равно скажу перед уходом.","en":"Если он не заметит, всё равно скажу перед уходом.","es":"Если он не заметит, всё равно скажу перед уходом.","pt":"Если он не заметит, всё равно скажу перед уходом.","de":"Если он не заметит, всё равно скажу перед уходом.","fr":"Если он не заметит, всё равно скажу перед уходом."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В общественном месте ты видишь потерянный телефон. Что ты сделаешь?","en":"В общественном месте ты видишь потерянный телефон. Что ты сделаешь?","es":"В общественном месте ты видишь потерянный телефон. Что ты сделаешь?","pt":"В общественном месте ты видишь потерянный телефон. Что ты сделаешь?","de":"В общественном месте ты видишь потерянный телефон. Что ты сделаешь?","fr":"В общественном месте ты видишь потерянный телефон. Что ты сделаешь?"},"a":{"ru":"Подожду рядом несколько минут в надежде, что владелец вернётся.","en":"Подожду рядом несколько минут в надежде, что владелец вернётся.","es":"Подожду рядом несколько минут в надежде, что владелец вернётся.","pt":"Подожду рядом несколько минут в надежде, что владелец вернётся.","de":"Подожду рядом несколько минут в надежде, что владелец вернётся.","fr":"Подожду рядом несколько минут в надежде, что владелец вернётся."},"b":{"ru":"Передам телефон сотруднику места.","en":"Передам телефон сотруднику места.","es":"Передам телефон сотруднику места.","pt":"Передам телефон сотруднику места.","de":"Передам телефон сотруднику места.","fr":"Передам телефон сотруднику места."},"c":{"ru":"Попробую ответить на входящий звонок, если он поступит.","en":"Попробую ответить на входящий звонок, если он поступит.","es":"Попробую ответить на входящий звонок, если он поступит.","pt":"Попробую ответить на входящий звонок, если он поступит.","de":"Попробую ответить на входящий звонок, если он поступит.","fr":"Попробую ответить на входящий звонок, если он поступит."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе нужно выбрать квартиру, но одна нравится намного больше, а другая значительно дешевле. Что ты сделаешь?","en":"Тебе нужно выбрать квартиру, но одна нравится намного больше, а другая значительно дешевле. Что ты сделаешь?","es":"Тебе нужно выбрать квартиру, но одна нравится намного больше, а другая значительно дешевле. Что ты сделаешь?","pt":"Тебе нужно выбрать квартиру, но одна нравится намного больше, а другая значительно дешевле. Что ты сделаешь?","de":"Тебе нужно выбрать квартиру, но одна нравится намного больше, а другая значительно дешевле. Что ты сделаешь?","fr":"Тебе нужно выбрать квартиру, но одна нравится намного больше, а другая значительно дешевле. Что ты сделаешь?"},"a":{"ru":"Возьму ту, которая мне действительно нравится, если бюджет позволяет.","en":"Возьму ту, которая мне действительно нравится, если бюджет позволяет.","es":"Возьму ту, которая мне действительно нравится, если бюджет позволяет.","pt":"Возьму ту, которая мне действительно нравится, если бюджет позволяет.","de":"Возьму ту, которая мне действительно нравится, если бюджет позволяет.","fr":"Возьму ту, которая мне действительно нравится, если бюджет позволяет."},"b":{"ru":"Посчитаю общие расходы на год и сравню варианты.","en":"Посчитаю общие расходы на год и сравню варианты.","es":"Посчитаю общие расходы на год и сравню варианты.","pt":"Посчитаю общие расходы на год и сравню варианты.","de":"Посчитаю общие расходы на год и сравню варианты.","fr":"Посчитаю общие расходы на год и сравню варианты."},"c":{"ru":"Выберу более дешёвую и оставлю запас денег.","en":"Выберу более дешёвую и оставлю запас денег.","es":"Выберу более дешёвую и оставлю запас денег.","pt":"Выберу более дешёвую и оставлю запас денег.","de":"Выберу более дешёвую и оставлю запас денег.","fr":"Выберу более дешёвую и оставлю запас денег."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты замечаешь, что соседская собака регулярно выбегает на дорогу. Что ты сделаешь?","en":"Ты замечаешь, что соседская собака регулярно выбегает на дорогу. Что ты сделаешь?","es":"Ты замечаешь, что соседская собака регулярно выбегает на дорогу. Что ты сделаешь?","pt":"Ты замечаешь, что соседская собака регулярно выбегает на дорогу. Что ты сделаешь?","de":"Ты замечаешь, что соседская собака регулярно выбегает на дорогу. Что ты сделаешь?","fr":"Ты замечаешь, что соседская собака регулярно выбегает на дорогу. Что ты сделаешь?"},"a":{"ru":"Поговорю с владельцем и объясню риск.","en":"Поговорю с владельцем и объясню риск.","es":"Поговорю с владельцем и объясню риск.","pt":"Поговорю с владельцем и объясню риск.","de":"Поговорю с владельцем и объясню риск.","fr":"Поговорю с владельцем и объясню риск."},"b":{"ru":"Сообщу в службу, которая занимается безопасностью животных.","en":"Сообщу в службу, которая занимается безопасностью животных.","es":"Сообщу в службу, которая занимается безопасностью животных.","pt":"Сообщу в службу, которая занимается безопасностью животных.","de":"Сообщу в службу, которая занимается безопасностью животных.","fr":"Сообщу в службу, которая занимается безопасностью животных."},"c":{"ru":"Буду просто осторожнее проходить мимо, не вмешиваясь.","en":"Буду просто осторожнее проходить мимо, не вмешиваясь.","es":"Буду просто осторожнее проходить мимо, не вмешиваясь.","pt":"Буду просто осторожнее проходить мимо, не вмешиваясь.","de":"Буду просто осторожнее проходить мимо, не вмешиваясь.","fr":"Буду просто осторожнее проходить мимо, не вмешиваясь."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Друг признаётся, что хочет бросить учёбу после одной неудачи. Что ты сделаешь?","en":"Друг признаётся, что хочет бросить учёбу после одной неудачи. Что ты сделаешь?","es":"Друг признаётся, что хочет бросить учёбу после одной неудачи. Что ты сделаешь?","pt":"Друг признаётся, что хочет бросить учёбу после одной неудачи. Что ты сделаешь?","de":"Друг признаётся, что хочет бросить учёбу после одной неудачи. Что ты сделаешь?","fr":"Друг признаётся, что хочет бросить учёбу после одной неудачи. Что ты сделаешь?"},"a":{"ru":"Помогу ему разобрать, что именно пошло не так.","en":"Помогу ему разобрать, что именно пошло не так.","es":"Помогу ему разобрать, что именно пошло не так.","pt":"Помогу ему разобрать, что именно пошло не так.","de":"Помогу ему разобрать, что именно пошло не так.","fr":"Помогу ему разобрать, что именно пошло не так."},"b":{"ru":"Предложу сделать паузу, но не принимать решение в тот же день.","en":"Предложу сделать паузу, но не принимать решение в тот же день.","es":"Предложу сделать паузу, но не принимать решение в тот же день.","pt":"Предложу сделать паузу, но не принимать решение в тот же день.","de":"Предложу сделать паузу, но не принимать решение в тот же день.","fr":"Предложу сделать паузу, но не принимать решение в тот же день."},"c":{"ru":"Поддержу его решение, если он действительно всё обдумал.","en":"Поддержу его решение, если он действительно всё обдумал.","es":"Поддержу его решение, если он действительно всё обдумал.","pt":"Поддержу его решение, если он действительно всё обдумал.","de":"Поддержу его решение, если он действительно всё обдумал.","fr":"Поддержу его решение, если он действительно всё обдумал."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На работе тебе предлагают сделать задачу способом, который быстрее, но нарушает внутренние правила. Что ты сделаешь?","en":"На работе тебе предлагают сделать задачу способом, который быстрее, но нарушает внутренние правила. Что ты сделаешь?","es":"На работе тебе предлагают сделать задачу способом, который быстрее, но нарушает внутренние правила. Что ты сделаешь?","pt":"На работе тебе предлагают сделать задачу способом, который быстрее, но нарушает внутренние правила. Что ты сделаешь?","de":"На работе тебе предлагают сделать задачу способом, который быстрее, но нарушает внутренние правила. Что ты сделаешь?","fr":"На работе тебе предлагают сделать задачу способом, который быстрее, но нарушает внутренние правила. Что ты сделаешь?"},"a":{"ru":"Откажусь и предложу безопасный вариант.","en":"Откажусь и предложу безопасный вариант.","es":"Откажусь и предложу безопасный вариант.","pt":"Откажусь и предложу безопасный вариант.","de":"Откажусь и предложу безопасный вариант.","fr":"Откажусь и предложу безопасный вариант."},"b":{"ru":"Уточню у руководителя, можно ли официально отступить от правила.","en":"Уточню у руководителя, можно ли официально отступить от правила.","es":"Уточню у руководителя, можно ли официально отступить от правила.","pt":"Уточню у руководителя, можно ли официально отступить от правила.","de":"Уточню у руководителя, можно ли официально отступить от правила.","fr":"Уточню у руководителя, можно ли официально отступить от правила."},"c":{"ru":"Сделаю только ту часть, которая точно не нарушает требований.","en":"Сделаю только ту часть, которая точно не нарушает требований.","es":"Сделаю только ту часть, которая точно не нарушает требований.","pt":"Сделаю только ту часть, которая точно не нарушает требований.","de":"Сделаю только ту часть, которая точно не нарушает требований.","fr":"Сделаю только ту часть, которая точно не нарушает требований."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты узнаёшь, что знакомый забыл предупредить тебя о важном изменении планов. Что ты сделаешь?","en":"Ты узнаёшь, что знакомый забыл предупредить тебя о важном изменении планов. Что ты сделаешь?","es":"Ты узнаёшь, что знакомый забыл предупредить тебя о важном изменении планов. Что ты сделаешь?","pt":"Ты узнаёшь, что знакомый забыл предупредить тебя о важном изменении планов. Что ты сделаешь?","de":"Ты узнаёшь, что знакомый забыл предупредить тебя о важном изменении планов. Что ты сделаешь?","fr":"Ты узнаёшь, что знакомый забыл предупредить тебя о важном изменении планов. Что ты сделаешь?"},"a":{"ru":"Сразу скажу, что для меня это было неудобно.","en":"Сразу скажу, что для меня это было неудобно.","es":"Сразу скажу, что для меня это было неудобно.","pt":"Сразу скажу, что для меня это было неудобно.","de":"Сразу скажу, что для меня это было неудобно.","fr":"Сразу скажу, что для меня это было неудобно."},"b":{"ru":"Спрошу, почему он не сообщил раньше.","en":"Спрошу, почему он не сообщил раньше.","es":"Спрошу, почему он не сообщил раньше.","pt":"Спрошу, почему он не сообщил раньше.","de":"Спрошу, почему он не сообщил раньше.","fr":"Спрошу, почему он не сообщил раньше."},"c":{"ru":"Учту это и в следующий раз сам уточню детали заранее.","en":"Учту это и в следующий раз сам уточню детали заранее.","es":"Учту это и в следующий раз сам уточню детали заранее.","pt":"Учту это и в следующий раз сам уточню детали заранее.","de":"Учту это и в следующий раз сам уточню детали заранее.","fr":"Учту это и в следующий раз сам уточню детали заранее."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На дороге ты видишь небольшое ДТП без пострадавших, а оба водителя спорят. Что ты сделаешь?","en":"На дороге ты видишь небольшое ДТП без пострадавших, а оба водителя спорят. Что ты сделаешь?","es":"На дороге ты видишь небольшое ДТП без пострадавших, а оба водителя спорят. Что ты сделаешь?","pt":"На дороге ты видишь небольшое ДТП без пострадавших, а оба водителя спорят. Что ты сделаешь?","de":"На дороге ты видишь небольшое ДТП без пострадавших, а оба водителя спорят. Что ты сделаешь?","fr":"На дороге ты видишь небольшое ДТП без пострадавших, а оба водителя спорят. Что ты сделаешь?"},"a":{"ru":"Остановлюсь и предложу помочь вызвать нужные службы.","en":"Остановлюсь и предложу помочь вызвать нужные службы.","es":"Остановлюсь и предложу помочь вызвать нужные службы.","pt":"Остановлюсь и предложу помочь вызвать нужные службы.","de":"Остановлюсь и предложу помочь вызвать нужные службы.","fr":"Остановлюсь и предложу помочь вызвать нужные службы."},"b":{"ru":"Не буду вмешиваться, если помощь уже не нужна.","en":"Не буду вмешиваться, если помощь уже не нужна.","es":"Не буду вмешиваться, если помощь уже не нужна.","pt":"Не буду вмешиваться, если помощь уже не нужна.","de":"Не буду вмешиваться, если помощь уже не нужна.","fr":"Не буду вмешиваться, если помощь уже не нужна."},"c":{"ru":"Сниму на телефон обстановку только если меня попросят быть свидетелем.","en":"Сниму на телефон обстановку только если меня попросят быть свидетелем.","es":"Сниму на телефон обстановку только если меня попросят быть свидетелем.","pt":"Сниму на телефон обстановку только если меня попросят быть свидетелем.","de":"Сниму на телефон обстановку только если меня попросят быть свидетелем.","fr":"Сниму на телефон обстановку только если меня попросят быть свидетелем."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты получаешь предложение купить билет на очень популярное событие у незнакомца с предоплатой. Что ты сделаешь?","en":"Ты получаешь предложение купить билет на очень популярное событие у незнакомца с предоплатой. Что ты сделаешь?","es":"Ты получаешь предложение купить билет на очень популярное событие у незнакомца с предоплатой. Что ты сделаешь?","pt":"Ты получаешь предложение купить билет на очень популярное событие у незнакомца с предоплатой. Что ты сделаешь?","de":"Ты получаешь предложение купить билет на очень популярное событие у незнакомца с предоплатой. Что ты сделаешь?","fr":"Ты получаешь предложение купить билет на очень популярное событие у незнакомца с предоплатой. Что ты сделаешь?"},"a":{"ru":"Проверю продавца и использую безопасную площадку сделки.","en":"Проверю продавца и использую безопасную площадку сделки.","es":"Проверю продавца и использую безопасную площадку сделки.","pt":"Проверю продавца и использую безопасную площадку сделки.","de":"Проверю продавца и использую безопасную площадку сделки.","fr":"Проверю продавца и использую безопасную площадку сделки."},"b":{"ru":"Постараюсь договориться об оплате после передачи билета.","en":"Постараюсь договориться об оплате после передачи билета.","es":"Постараюсь договориться об оплате после передачи билета.","pt":"Постараюсь договориться об оплате после передачи билета.","de":"Постараюсь договориться об оплате после передачи билета.","fr":"Постараюсь договориться об оплате после передачи билета."},"c":{"ru":"Откажусь от покупки у незнакомого человека.","en":"Откажусь от покупки у незнакомого человека.","es":"Откажусь от покупки у незнакомого человека.","pt":"Откажусь от покупки у незнакомого человека.","de":"Откажусь от покупки у незнакомого человека.","fr":"Откажусь от покупки у незнакомого человека."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты замечаешь, что друг стал заметно избегать компании, хотя раньше любил общаться. Что ты сделаешь?","en":"Ты замечаешь, что друг стал заметно избегать компании, хотя раньше любил общаться. Что ты сделаешь?","es":"Ты замечаешь, что друг стал заметно избегать компании, хотя раньше любил общаться. Что ты сделаешь?","pt":"Ты замечаешь, что друг стал заметно избегать компании, хотя раньше любил общаться. Что ты сделаешь?","de":"Ты замечаешь, что друг стал заметно избегать компании, хотя раньше любил общаться. Что ты сделаешь?","fr":"Ты замечаешь, что друг стал заметно избегать компании, хотя раньше любил общаться. Что ты сделаешь?"},"a":{"ru":"Приглашу его на спокойную встречу один на один.","en":"Приглашу его на спокойную встречу один на один.","es":"Приглашу его на спокойную встречу один на один.","pt":"Приглашу его на спокойную встречу один на один.","de":"Приглашу его на спокойную встречу один на один.","fr":"Приглашу его на спокойную встречу один на один."},"b":{"ru":"Прямо спрошу, всё ли у него нормально.","en":"Прямо спрошу, всё ли у него нормально.","es":"Прямо спрошу, всё ли у него нормально.","pt":"Прямо спрошу, всё ли у него нормально.","de":"Прямо спрошу, всё ли у него нормально.","fr":"Прямо спрошу, всё ли у него нормально."},"c":{"ru":"Дам ему пространство и не буду постоянно писать.","en":"Дам ему пространство и не буду постоянно писать.","es":"Дам ему пространство и не буду постоянно писать.","pt":"Дам ему пространство и не буду постоянно писать.","de":"Дам ему пространство и не буду постоянно писать.","fr":"Дам ему пространство и не буду постоянно писать."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе предлагают выступить посредником в споре двух знакомых. Что ты сделаешь?","en":"Тебе предлагают выступить посредником в споре двух знакомых. Что ты сделаешь?","es":"Тебе предлагают выступить посредником в споре двух знакомых. Что ты сделаешь?","pt":"Тебе предлагают выступить посредником в споре двух знакомых. Что ты сделаешь?","de":"Тебе предлагают выступить посредником в споре двух знакомых. Что ты сделаешь?","fr":"Тебе предлагают выступить посредником в споре двух знакомых. Что ты сделаешь?"},"a":{"ru":"Выслушаю обоих по отдельности.","en":"Выслушаю обоих по отдельности.","es":"Выслушаю обоих по отдельности.","pt":"Выслушаю обоих по отдельности.","de":"Выслушаю обоих по отдельности.","fr":"Выслушаю обоих по отдельности."},"b":{"ru":"Скажу, что могу помочь только найти компромисс, но не выбрать сторону.","en":"Скажу, что могу помочь только найти компромисс, но не выбрать сторону.","es":"Скажу, что могу помочь только найти компромисс, но не выбрать сторону.","pt":"Скажу, что могу помочь только найти компромисс, но не выбрать сторону.","de":"Скажу, что могу помочь только найти компромисс, но не выбрать сторону.","fr":"Скажу, что могу помочь только найти компромисс, но не выбрать сторону."},"c":{"ru":"Откажусь быть посредником, если конфликт слишком личный.","en":"Откажусь быть посредником, если конфликт слишком личный.","es":"Откажусь быть посредником, если конфликт слишком личный.","pt":"Откажусь быть посредником, если конфликт слишком личный.","de":"Откажусь быть посредником, если конфликт слишком личный.","fr":"Откажусь быть посредником, если конфликт слишком личный."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время покупки продавец утверждает, что скидка действует только пять минут, создавая давление. Что ты сделаешь?","en":"Во время покупки продавец утверждает, что скидка действует только пять минут, создавая давление. Что ты сделаешь?","es":"Во время покупки продавец утверждает, что скидка действует только пять минут, создавая давление. Что ты сделаешь?","pt":"Во время покупки продавец утверждает, что скидка действует только пять минут, создавая давление. Что ты сделаешь?","de":"Во время покупки продавец утверждает, что скидка действует только пять минут, создавая давление. Что ты сделаешь?","fr":"Во время покупки продавец утверждает, что скидка действует только пять минут, создавая давление. Что ты сделаешь?"},"a":{"ru":"Спокойно уйду и проверю предложение позже.","en":"Спокойно уйду и проверю предложение позже.","es":"Спокойно уйду и проверю предложение позже.","pt":"Спокойно уйду и проверю предложение позже.","de":"Спокойно уйду и проверю предложение позже.","fr":"Спокойно уйду и проверю предложение позже."},"b":{"ru":"Попросу показать условия скидки письменно.","en":"Попросу показать условия скидки письменно.","es":"Попросу показать условия скидки письменно.","pt":"Попросу показать условия скидки письменно.","de":"Попросу показать условия скидки письменно.","fr":"Попросу показать условия скидки письменно."},"c":{"ru":"Куплю только если вещь мне действительно нужна и цена подтверждается.","en":"Куплю только если вещь мне действительно нужна и цена подтверждается.","es":"Куплю только если вещь мне действительно нужна и цена подтверждается.","pt":"Куплю только если вещь мне действительно нужна и цена подтверждается.","de":"Куплю только если вещь мне действительно нужна и цена подтверждается.","fr":"Куплю только если вещь мне действительно нужна и цена подтверждается."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь, что знакомому трудно оплатить общий счёт в компании, но он скрывает это. Что ты сделаешь?","en":"Ты видишь, что знакомому трудно оплатить общий счёт в компании, но он скрывает это. Что ты сделаешь?","es":"Ты видишь, что знакомому трудно оплатить общий счёт в компании, но он скрывает это. Что ты сделаешь?","pt":"Ты видишь, что знакомому трудно оплатить общий счёт в компании, но он скрывает это. Что ты сделаешь?","de":"Ты видишь, что знакомому трудно оплатить общий счёт в компании, но он скрывает это. Что ты сделаешь?","fr":"Ты видишь, что знакомому трудно оплатить общий счёт в компании, но он скрывает это. Что ты сделаешь?"},"a":{"ru":"Тихо предложу разделить его часть между несколькими людьми.","en":"Тихо предложу разделить его часть между несколькими людьми.","es":"Тихо предложу разделить его часть между несколькими людьми.","pt":"Тихо предложу разделить его часть между несколькими людьми.","de":"Тихо предложу разделить его часть между несколькими людьми.","fr":"Тихо предложу разделить его часть между несколькими людьми."},"b":{"ru":"Отдельно спрошу, нужна ли помощь.","en":"Отдельно спрошу, нужна ли помощь.","es":"Отдельно спрошу, нужна ли помощь.","pt":"Отдельно спрошу, нужна ли помощь.","de":"Отдельно спрошу, нужна ли помощь.","fr":"Отдельно спрошу, нужна ли помощь."},"c":{"ru":"Не буду вмешиваться, пока он сам не скажет.","en":"Не буду вмешиваться, пока он сам не скажет.","es":"Не буду вмешиваться, пока он сам не скажет.","pt":"Не буду вмешиваться, пока он сам не скажет.","de":"Не буду вмешиваться, пока он сам не скажет.","fr":"Не буду вмешиваться, пока он сам не скажет."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе поручают хранить чужой важный документ несколько недель. Что ты сделаешь?","en":"Тебе поручают хранить чужой важный документ несколько недель. Что ты сделаешь?","es":"Тебе поручают хранить чужой важный документ несколько недель. Что ты сделаешь?","pt":"Тебе поручают хранить чужой важный документ несколько недель. Что ты сделаешь?","de":"Тебе поручают хранить чужой важный документ несколько недель. Что ты сделаешь?","fr":"Тебе поручают хранить чужой важный документ несколько недель. Что ты сделаешь?"},"a":{"ru":"Уберу его в безопасное место и проверю, что доступ ограничен.","en":"Уберу его в безопасное место и проверю, что доступ ограничен.","es":"Уберу его в безопасное место и проверю, что доступ ограничен.","pt":"Уберу его в безопасное место и проверю, что доступ ограничен.","de":"Уберу его в безопасное место и проверю, что доступ ограничен.","fr":"Уберу его в безопасное место и проверю, что доступ ограничен."},"b":{"ru":"Сделаю резервную копию только с разрешения владельца.","en":"Сделаю резервную копию только с разрешения владельца.","es":"Сделаю резервную копию только с разрешения владельца.","pt":"Сделаю резервную копию только с разрешения владельца.","de":"Сделаю резервную копию только с разрешения владельца.","fr":"Сделаю резервную копию только с разрешения владельца."},"c":{"ru":"Сразу уточню, когда и кому именно нужно вернуть документ.","en":"Сразу уточню, когда и кому именно нужно вернуть документ.","es":"Сразу уточню, когда и кому именно нужно вернуть документ.","pt":"Сразу уточню, когда и кому именно нужно вернуть документ.","de":"Сразу уточню, когда и кому именно нужно вернуть документ.","fr":"Сразу уточню, когда и кому именно нужно вернуть документ."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты получаешь сообщение от незнакомца с просьбой срочно открыть ссылку из-за якобы проблемы с аккаунтом. Что ты сделаешь?","en":"Ты получаешь сообщение от незнакомца с просьбой срочно открыть ссылку из-за якобы проблемы с аккаунтом. Что ты сделаешь?","es":"Ты получаешь сообщение от незнакомца с просьбой срочно открыть ссылку из-за якобы проблемы с аккаунтом. Что ты сделаешь?","pt":"Ты получаешь сообщение от незнакомца с просьбой срочно открыть ссылку из-за якобы проблемы с аккаунтом. Что ты сделаешь?","de":"Ты получаешь сообщение от незнакомца с просьбой срочно открыть ссылку из-за якобы проблемы с аккаунтом. Что ты сделаешь?","fr":"Ты получаешь сообщение от незнакомца с просьбой срочно открыть ссылку из-за якобы проблемы с аккаунтом. Что ты сделаешь?"},"a":{"ru":"Не открою ссылку и проверю аккаунт через официальное приложение.","en":"Не открою ссылку и проверю аккаунт через официальное приложение.","es":"Не открою ссылку и проверю аккаунт через официальное приложение.","pt":"Не открою ссылку и проверю аккаунт через официальное приложение.","de":"Не открою ссылку и проверю аккаунт через официальное приложение.","fr":"Не открою ссылку и проверю аккаунт через официальное приложение."},"b":{"ru":"Сначала попрошу прислать подробности без ссылок.","en":"Сначала попрошу прислать подробности без ссылок.","es":"Сначала попрошу прислать подробности без ссылок.","pt":"Сначала попрошу прислать подробности без ссылок.","de":"Сначала попрошу прислать подробности без ссылок.","fr":"Сначала попрошу прислать подробности без ссылок."},"c":{"ru":"Удалю сообщение и ничего больше не буду делать.","en":"Удалю сообщение и ничего больше не буду делать.","es":"Удалю сообщение и ничего больше не буду делать.","pt":"Удалю сообщение и ничего больше не буду делать.","de":"Удалю сообщение и ничего больше не буду делать.","fr":"Удалю сообщение и ничего больше не буду делать."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На встрече тебе задают провокационный вопрос, рассчитанный на конфликт. Что ты сделаешь?","en":"На встрече тебе задают провокационный вопрос, рассчитанный на конфликт. Что ты сделаешь?","es":"На встрече тебе задают провокационный вопрос, рассчитанный на конфликт. Что ты сделаешь?","pt":"На встрече тебе задают провокационный вопрос, рассчитанный на конфликт. Что ты сделаешь?","de":"На встрече тебе задают провокационный вопрос, рассчитанный на конфликт. Что ты сделаешь?","fr":"На встрече тебе задают провокационный вопрос, рассчитанный на конфликт. Что ты сделаешь?"},"a":{"ru":"Спокойно отвечу по сути и не подхвачу эмоцию.","en":"Спокойно отвечу по сути и не подхвачу эмоцию.","es":"Спокойно отвечу по сути и не подхвачу эмоцию.","pt":"Спокойно отвечу по сути и не подхвачу эмоцию.","de":"Спокойно отвечу по сути и не подхвачу эмоцию.","fr":"Спокойно отвечу по сути и не подхвачу эмоцию."},"b":{"ru":"Скажу, что не хочу обсуждать вопрос в таком тоне.","en":"Скажу, что не хочу обсуждать вопрос в таком тоне.","es":"Скажу, что не хочу обсуждать вопрос в таком тоне.","pt":"Скажу, что не хочу обсуждать вопрос в таком тоне.","de":"Скажу, что не хочу обсуждать вопрос в таком тоне.","fr":"Скажу, что не хочу обсуждать вопрос в таком тоне."},"c":{"ru":"Переведу разговор к теме, ради которой собрались.","en":"Переведу разговор к теме, ради которой собрались.","es":"Переведу разговор к теме, ради которой собрались.","pt":"Переведу разговор к теме, ради которой собрались.","de":"Переведу разговор к теме, ради которой собрались.","fr":"Переведу разговор к теме, ради которой собрались."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты обещал помочь другу вечером, но внезапно получил срочное рабочее задание. Что ты сделаешь?","en":"Ты обещал помочь другу вечером, но внезапно получил срочное рабочее задание. Что ты сделаешь?","es":"Ты обещал помочь другу вечером, но внезапно получил срочное рабочее задание. Что ты сделаешь?","pt":"Ты обещал помочь другу вечером, но внезапно получил срочное рабочее задание. Что ты сделаешь?","de":"Ты обещал помочь другу вечером, но внезапно получил срочное рабочее задание. Что ты сделаешь?","fr":"Ты обещал помочь другу вечером, но внезапно получил срочное рабочее задание. Что ты сделаешь?"},"a":{"ru":"Сразу сообщу другу и предложу другое время.","en":"Сразу сообщу другу и предложу другое время.","es":"Сразу сообщу другу и предложу другое время.","pt":"Сразу сообщу другу и предложу другое время.","de":"Сразу сообщу другу и предложу другое время.","fr":"Сразу сообщу другу и предложу другое время."},"b":{"ru":"Сначала выясню, насколько срочна работа, и после этого приму решение.","en":"Сначала выясню, насколько срочна работа, и после этого приму решение.","es":"Сначала выясню, насколько срочна работа, и после этого приму решение.","pt":"Сначала выясню, насколько срочна работа, и после этого приму решение.","de":"Сначала выясню, насколько срочна работа, и после этого приму решение.","fr":"Сначала выясню, насколько срочна работа, и после этого приму решение."},"c":{"ru":"Откажусь от дополнительной работы, если обещание другу было твёрдым.","en":"Откажусь от дополнительной работы, если обещание другу было твёрдым.","es":"Откажусь от дополнительной работы, если обещание другу было твёрдым.","pt":"Откажусь от дополнительной работы, если обещание другу было твёрдым.","de":"Откажусь от дополнительной работы, если обещание другу было твёрдым.","fr":"Откажусь от дополнительной работы, если обещание другу было твёрдым."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты узнаёшь, что твоя любимая вещь случайно была повреждена гостем дома. Что ты сделаешь?","en":"Ты узнаёшь, что твоя любимая вещь случайно была повреждена гостем дома. Что ты сделаешь?","es":"Ты узнаёшь, что твоя любимая вещь случайно была повреждена гостем дома. Что ты сделаешь?","pt":"Ты узнаёшь, что твоя любимая вещь случайно была повреждена гостем дома. Что ты сделаешь?","de":"Ты узнаёшь, что твоя любимая вещь случайно была повреждена гостем дома. Что ты сделаешь?","fr":"Ты узнаёшь, что твоя любимая вещь случайно была повреждена гостем дома. Что ты сделаешь?"},"a":{"ru":"Спокойно выясню, как это произошло, и решу вопрос о ремонте.","en":"Спокойно выясню, как это произошло, и решу вопрос о ремонте.","es":"Спокойно выясню, как это произошло, и решу вопрос о ремонте.","pt":"Спокойно выясню, как это произошло, и решу вопрос о ремонте.","de":"Спокойно выясню, как это произошло, и решу вопрос о ремонте.","fr":"Спокойно выясню, как это произошло, и решу вопрос о ремонте."},"b":{"ru":"Попрошу гостя самому предложить способ компенсировать ущерб.","en":"Попрошу гостя самому предложить способ компенсировать ущерб.","es":"Попрошу гостя самому предложить способ компенсировать ущерб.","pt":"Попрошу гостя самому предложить способ компенсировать ущерб.","de":"Попрошу гостя самому предложить способ компенсировать ущерб.","fr":"Попрошу гостя самому предложить способ компенсировать ущерб."},"c":{"ru":"Простю ситуацию, если повреждение небольшое и человек честно признал вину.","en":"Простю ситуацию, если повреждение небольшое и человек честно признал вину.","es":"Простю ситуацию, если повреждение небольшое и человек честно признал вину.","pt":"Простю ситуацию, если повреждение небольшое и человек честно признал вину.","de":"Простю ситуацию, если повреждение небольшое и человек честно признал вину.","fr":"Простю ситуацию, если повреждение небольшое и человек честно признал вину."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время прогулки ты замечаешь подозрительный предмет в месте, где много людей. Что ты сделаешь?","en":"Во время прогулки ты замечаешь подозрительный предмет в месте, где много людей. Что ты сделаешь?","es":"Во время прогулки ты замечаешь подозрительный предмет в месте, где много людей. Что ты сделаешь?","pt":"Во время прогулки ты замечаешь подозрительный предмет в месте, где много людей. Что ты сделаешь?","de":"Во время прогулки ты замечаешь подозрительный предмет в месте, где много людей. Что ты сделаешь?","fr":"Во время прогулки ты замечаешь подозрительный предмет в месте, где много людей. Что ты сделаешь?"},"a":{"ru":"Не буду трогать его и сообщу сотрудникам или службам.","en":"Не буду трогать его и сообщу сотрудникам или службам.","es":"Не буду трогать его и сообщу сотрудникам или службам.","pt":"Не буду трогать его и сообщу сотрудникам или службам.","de":"Не буду трогать его и сообщу сотрудникам или службам.","fr":"Не буду трогать его и сообщу сотрудникам или службам."},"b":{"ru":"Отойду подальше и предупрежу людей рядом.","en":"Отойду подальше и предупрежу людей рядом.","es":"Отойду подальше и предупрежу людей рядом.","pt":"Отойду подальше и предупрежу людей рядом.","de":"Отойду подальше и предупрежу людей рядом.","fr":"Отойду подальше и предупрежу людей рядом."},"c":{"ru":"Позвоню в соответствующую службу и опишу, где находится предмет.","en":"Позвоню в соответствующую службу и опишу, где находится предмет.","es":"Позвоню в соответствующую службу и опишу, где находится предмет.","pt":"Позвоню в соответствующую службу и опишу, где находится предмет.","de":"Позвоню в соответствующую службу и опишу, где находится предмет.","fr":"Позвоню в соответствующую службу и опишу, где находится предмет."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты понимаешь, что начал тратить слишком много времени на бесконечную ленту новостей. Что ты сделаешь?","en":"Ты понимаешь, что начал тратить слишком много времени на бесконечную ленту новостей. Что ты сделаешь?","es":"Ты понимаешь, что начал тратить слишком много времени на бесконечную ленту новостей. Что ты сделаешь?","pt":"Ты понимаешь, что начал тратить слишком много времени на бесконечную ленту новостей. Что ты сделаешь?","de":"Ты понимаешь, что начал тратить слишком много времени на бесконечную ленту новостей. Что ты сделаешь?","fr":"Ты понимаешь, что начал тратить слишком много времени на бесконечную ленту новостей. Что ты сделаешь?"},"a":{"ru":"Поставлю конкретный лимит времени на приложение.","en":"Поставлю конкретный лимит времени на приложение.","es":"Поставлю конкретный лимит времени на приложение.","pt":"Поставлю конкретный лимит времени на приложение.","de":"Поставлю конкретный лимит времени на приложение.","fr":"Поставлю конкретный лимит времени на приложение."},"b":{"ru":"Удалю приложение на несколько дней.","en":"Удалю приложение на несколько дней.","es":"Удалю приложение на несколько дней.","pt":"Удалю приложение на несколько дней.","de":"Удалю приложение на несколько дней.","fr":"Удалю приложение на несколько дней."},"c":{"ru":"Оставлю его, но отключу уведомления и буду заходить только по необходимости.","en":"Оставлю его, но отключу уведомления и буду заходить только по необходимости.","es":"Оставлю его, но отключу уведомления и буду заходить только по необходимости.","pt":"Оставлю его, но отключу уведомления и буду заходить только по необходимости.","de":"Оставлю его, но отключу уведомления и буду заходить только по необходимости.","fr":"Оставлю его, но отключу уведомления и буду заходить только по необходимости."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебя приглашают в проект, который тебе интересен, но команда часто нарушает сроки. Что ты сделаешь?","en":"Тебя приглашают в проект, который тебе интересен, но команда часто нарушает сроки. Что ты сделаешь?","es":"Тебя приглашают в проект, который тебе интересен, но команда часто нарушает сроки. Что ты сделаешь?","pt":"Тебя приглашают в проект, который тебе интересен, но команда часто нарушает сроки. Что ты сделаешь?","de":"Тебя приглашают в проект, который тебе интересен, но команда часто нарушает сроки. Что ты сделаешь?","fr":"Тебя приглашают в проект, который тебе интересен, но команда часто нарушает сроки. Что ты сделаешь?"},"a":{"ru":"Соглашусь, но заранее обсуду конкретные сроки и ответственность.","en":"Соглашусь, но заранее обсуду конкретные сроки и ответственность.","es":"Соглашусь, но заранее обсуду конкретные сроки и ответственность.","pt":"Соглашусь, но заранее обсуду конкретные сроки и ответственность.","de":"Соглашусь, но заранее обсуду конкретные сроки и ответственность.","fr":"Соглашусь, но заранее обсуду конкретные сроки и ответственность."},"b":{"ru":"Попросу показать прошлые результаты команды.","en":"Попросу показать прошлые результаты команды.","es":"Попросу показать прошлые результаты команды.","pt":"Попросу показать прошлые результаты команды.","de":"Попросу показать прошлые результаты команды.","fr":"Попросу показать прошлые результаты команды."},"c":{"ru":"Откажусь, если отсутствие дисциплины для меня критично.","en":"Откажусь, если отсутствие дисциплины для меня критично.","es":"Откажусь, если отсутствие дисциплины для меня критично.","pt":"Откажусь, если отсутствие дисциплины для меня критично.","de":"Откажусь, если отсутствие дисциплины для меня критично.","fr":"Откажусь, если отсутствие дисциплины для меня критично."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты получаешь неприятную, но полезную обратную связь о своей работе. Что ты сделаешь?","en":"Ты получаешь неприятную, но полезную обратную связь о своей работе. Что ты сделаешь?","es":"Ты получаешь неприятную, но полезную обратную связь о своей работе. Что ты сделаешь?","pt":"Ты получаешь неприятную, но полезную обратную связь о своей работе. Что ты сделаешь?","de":"Ты получаешь неприятную, но полезную обратную связь о своей работе. Что ты сделаешь?","fr":"Ты получаешь неприятную, но полезную обратную связь о своей работе. Что ты сделаешь?"},"a":{"ru":"Попрошу привести конкретные примеры и начну исправлять слабые места.","en":"Попрошу привести конкретные примеры и начну исправлять слабые места.","es":"Попрошу привести конкретные примеры и начну исправлять слабые места.","pt":"Попрошу привести конкретные примеры и начну исправлять слабые места.","de":"Попрошу привести конкретные примеры и начну исправлять слабые места.","fr":"Попрошу привести конкретные примеры и начну исправлять слабые места."},"b":{"ru":"Возьму время обдумать замечания и потом вернусь с вопросами.","en":"Возьму время обдумать замечания и потом вернусь с вопросами.","es":"Возьму время обдумать замечания и потом вернусь с вопросами.","pt":"Возьму время обдумать замечания и потом вернусь с вопросами.","de":"Возьму время обдумать замечания и потом вернусь с вопросами.","fr":"Возьму время обдумать замечания и потом вернусь с вопросами."},"c":{"ru":"Сохраню только те замечания, которые считаю действительно справедливыми.","en":"Сохраню только те замечания, которые считаю действительно справедливыми.","es":"Сохраню только те замечания, которые считаю действительно справедливыми.","pt":"Сохраню только те замечания, которые считаю действительно справедливыми.","de":"Сохраню только те замечания, которые считаю действительно справедливыми.","fr":"Сохраню только те замечания, которые считаю действительно справедливыми."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Друг предлагает тебе сохранить секрет, который может сильно навредить другому человеку. Что ты сделаешь?","en":"Друг предлагает тебе сохранить секрет, который может сильно навредить другому человеку. Что ты сделаешь?","es":"Друг предлагает тебе сохранить секрет, который может сильно навредить другому человеку. Что ты сделаешь?","pt":"Друг предлагает тебе сохранить секрет, который может сильно навредить другому человеку. Что ты сделаешь?","de":"Друг предлагает тебе сохранить секрет, который может сильно навредить другому человеку. Что ты сделаешь?","fr":"Друг предлагает тебе сохранить секрет, который может сильно навредить другому человеку. Что ты сделаешь?"},"a":{"ru":"Объясню, что не могу обещать хранить такой секрет.","en":"Объясню, что не могу обещать хранить такой секрет.","es":"Объясню, что не могу обещать хранить такой секрет.","pt":"Объясню, что не могу обещать хранить такой секрет.","de":"Объясню, что не могу обещать хранить такой секрет.","fr":"Объясню, что не могу обещать хранить такой секрет."},"b":{"ru":"Поговорю с другом и попрошу его самому исправить ситуацию.","en":"Поговорю с другом и попрошу его самому исправить ситуацию.","es":"Поговорю с другом и попрошу его самому исправить ситуацию.","pt":"Поговорю с другом и попрошу его самому исправить ситуацию.","de":"Поговорю с другом и попрошу его самому исправить ситуацию.","fr":"Поговорю с другом и попрошу его самому исправить ситуацию."},"c":{"ru":"Если есть реальная опасность, обращусь к взрослому или специалисту, который может помочь.","en":"Если есть реальная опасность, обращусь к взрослому или специалисту, который может помочь.","es":"Если есть реальная опасность, обращусь к взрослому или специалисту, который может помочь.","pt":"Если есть реальная опасность, обращусь к взрослому или специалисту, который может помочь.","de":"Если есть реальная опасность, обращусь к взрослому или специалисту, который может помочь.","fr":"Если есть реальная опасность, обращусь к взрослому или специалисту, который может помочь."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты замечаешь, что общий проект начинает разваливаться из-за отсутствия плана. Что ты сделаешь?","en":"Ты замечаешь, что общий проект начинает разваливаться из-за отсутствия плана. Что ты сделаешь?","es":"Ты замечаешь, что общий проект начинает разваливаться из-за отсутствия плана. Что ты сделаешь?","pt":"Ты замечаешь, что общий проект начинает разваливаться из-за отсутствия плана. Что ты сделаешь?","de":"Ты замечаешь, что общий проект начинает разваливаться из-за отсутствия плана. Что ты сделаешь?","fr":"Ты замечаешь, что общий проект начинает разваливаться из-за отсутствия плана. Что ты сделаешь?"},"a":{"ru":"Предложу составить простой план с ближайшими шагами.","en":"Предложу составить простой план с ближайшими шагами.","es":"Предложу составить простой план с ближайшими шагами.","pt":"Предложу составить простой план с ближайшими шагами.","de":"Предложу составить простой план с ближайшими шагами.","fr":"Предложу составить простой план с ближайшими шагами."},"b":{"ru":"Разделю задачи между участниками и установлю контрольные точки.","en":"Разделю задачи между участниками и установлю контрольные точки.","es":"Разделю задачи между участниками и установлю контрольные точки.","pt":"Разделю задачи между участниками и установлю контрольные точки.","de":"Разделю задачи между участниками и установлю контрольные точки.","fr":"Разделю задачи между участниками и установлю контрольные точки."},"c":{"ru":"Возьму на себя один критический участок и дам остальным время собраться.","en":"Возьму на себя один критический участок и дам остальным время собраться.","es":"Возьму на себя один критический участок и дам остальным время собраться.","pt":"Возьму на себя один критический участок и дам остальным время собраться.","de":"Возьму на себя один критический участок и дам остальным время собраться.","fr":"Возьму на себя один критический участок и дам остальным время собраться."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"В магазине тебе предлагают оформить покупку с дополнительной услугой, о которой ты не просил. Что ты сделаешь?","en":"В магазине тебе предлагают оформить покупку с дополнительной услугой, о которой ты не просил. Что ты сделаешь?","es":"В магазине тебе предлагают оформить покупку с дополнительной услугой, о которой ты не просил. Что ты сделаешь?","pt":"В магазине тебе предлагают оформить покупку с дополнительной услугой, о которой ты не просил. Что ты сделаешь?","de":"В магазине тебе предлагают оформить покупку с дополнительной услугой, о которой ты не просил. Что ты сделаешь?","fr":"В магазине тебе предлагают оформить покупку с дополнительной услугой, о которой ты не просил. Что ты сделаешь?"},"a":{"ru":"Откажусь от неё и проверю итоговую сумму.","en":"Откажусь от неё и проверю итоговую сумму.","es":"Откажусь от неё и проверю итоговую сумму.","pt":"Откажусь от неё и проверю итоговую сумму.","de":"Откажусь от неё и проверю итоговую сумму.","fr":"Откажусь от неё и проверю итоговую сумму."},"b":{"ru":"Попрошу объяснить, почему услуга появилась в заказе.","en":"Попрошу объяснить, почему услуга появилась в заказе.","es":"Попрошу объяснить, почему услуга появилась в заказе.","pt":"Попрошу объяснить, почему услуга появилась в заказе.","de":"Попрошу объяснить, почему услуга появилась в заказе.","fr":"Попрошу объяснить, почему услуга появилась в заказе."},"c":{"ru":"Проведу оплату только после того, как договор снова покажет исходную сумму.","en":"Проведу оплату только после того, как договор снова покажет исходную сумму.","es":"Проведу оплату только после того, как договор снова покажет исходную сумму.","pt":"Проведу оплату только после того, как договор снова покажет исходную сумму.","de":"Проведу оплату только после того, как договор снова покажет исходную сумму.","fr":"Проведу оплату только после того, как договор снова покажет исходную сумму."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты идёшь по улице и видишь человека, которому явно нужна помощь с тяжёлой сумкой. Что ты сделаешь?","en":"Ты идёшь по улице и видишь человека, которому явно нужна помощь с тяжёлой сумкой. Что ты сделаешь?","es":"Ты идёшь по улице и видишь человека, которому явно нужна помощь с тяжёлой сумкой. Что ты сделаешь?","pt":"Ты идёшь по улице и видишь человека, которому явно нужна помощь с тяжёлой сумкой. Что ты сделаешь?","de":"Ты идёшь по улице и видишь человека, которому явно нужна помощь с тяжёлой сумкой. Что ты сделаешь?","fr":"Ты идёшь по улице и видишь человека, которому явно нужна помощь с тяжёлой сумкой. Что ты сделаешь?"},"a":{"ru":"Предложу донести сумку до ближайшего места.","en":"Предложу донести сумку до ближайшего места.","es":"Предложу донести сумку до ближайшего места.","pt":"Предложу донести сумку до ближайшего места.","de":"Предложу донести сумку до ближайшего места.","fr":"Предложу донести сумку до ближайшего места."},"b":{"ru":"Спрошу, нужна ли помощь, и помогу только после согласия.","en":"Спрошу, нужна ли помощь, и помогу только после согласия.","es":"Спрошу, нужна ли помощь, и помогу только после согласия.","pt":"Спрошу, нужна ли помощь, и помогу только после согласия.","de":"Спрошу, нужна ли помощь, и помогу только после согласия.","fr":"Спрошу, нужна ли помощь, и помогу только после согласия."},"c":{"ru":"Пройду мимо, если сам тороплюсь и не могу задержаться.","en":"Пройду мимо, если сам тороплюсь и не могу задержаться.","es":"Пройду мимо, если сам тороплюсь и не могу задержаться.","pt":"Пройду мимо, если сам тороплюсь и не могу задержаться.","de":"Пройду мимо, если сам тороплюсь и не могу задержаться.","fr":"Пройду мимо, если сам тороплюсь и не могу задержаться."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе предлагают участвовать в споре в интернете, где все уже переходят на оскорбления. Что ты сделаешь?","en":"Тебе предлагают участвовать в споре в интернете, где все уже переходят на оскорбления. Что ты сделаешь?","es":"Тебе предлагают участвовать в споре в интернете, где все уже переходят на оскорбления. Что ты сделаешь?","pt":"Тебе предлагают участвовать в споре в интернете, где все уже переходят на оскорбления. Что ты сделаешь?","de":"Тебе предлагают участвовать в споре в интернете, где все уже переходят на оскорбления. Что ты сделаешь?","fr":"Тебе предлагают участвовать в споре в интернете, где все уже переходят на оскорбления. Что ты сделаешь?"},"a":{"ru":"Не буду отвечать в таком тоне.","en":"Не буду отвечать в таком тоне.","es":"Не буду отвечать в таком тоне.","pt":"Не буду отвечать в таком тоне.","de":"Не буду отвечать в таком тоне.","fr":"Не буду отвечать в таком тоне."},"b":{"ru":"Напишу один спокойный комментарий по фактам и выйду из обсуждения.","en":"Напишу один спокойный комментарий по фактам и выйду из обсуждения.","es":"Напишу один спокойный комментарий по фактам и выйду из обсуждения.","pt":"Напишу один спокойный комментарий по фактам и выйду из обсуждения.","de":"Напишу один спокойный комментарий по фактам и выйду из обсуждения.","fr":"Напишу один спокойный комментарий по фактам и выйду из обсуждения."},"c":{"ru":"Полностью закрою обсуждение и не стану возвращаться к нему.","en":"Полностью закрою обсуждение и не стану возвращаться к нему.","es":"Полностью закрою обсуждение и не стану возвращаться к нему.","pt":"Полностью закрою обсуждение и не стану возвращаться к нему.","de":"Полностью закрою обсуждение и не стану возвращаться к нему.","fr":"Полностью закрою обсуждение и не стану возвращаться к нему."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь, что коллега собирается отправить клиенту конфиденциальный файл по ошибке. Что ты сделаешь?","en":"Ты видишь, что коллега собирается отправить клиенту конфиденциальный файл по ошибке. Что ты сделаешь?","es":"Ты видишь, что коллега собирается отправить клиенту конфиденциальный файл по ошибке. Что ты сделаешь?","pt":"Ты видишь, что коллега собирается отправить клиенту конфиденциальный файл по ошибке. Что ты сделаешь?","de":"Ты видишь, что коллега собирается отправить клиенту конфиденциальный файл по ошибке. Что ты сделаешь?","fr":"Ты видишь, что коллега собирается отправить клиенту конфиденциальный файл по ошибке. Что ты сделаешь?"},"a":{"ru":"Немедленно остановлю его и объясню риск.","en":"Немедленно остановлю его и объясню риск.","es":"Немедленно остановлю его и объясню риск.","pt":"Немедленно остановлю его и объясню риск.","de":"Немедленно остановлю его и объясню риск.","fr":"Немедленно остановлю его и объясню риск."},"b":{"ru":"Напишу ему отдельное сообщение, чтобы не прерывать встречу.","en":"Напишу ему отдельное сообщение, чтобы не прерывать встречу.","es":"Напишу ему отдельное сообщение, чтобы не прерывать встречу.","pt":"Напишу ему отдельное сообщение, чтобы не прерывать встречу.","de":"Напишу ему отдельное сообщение, чтобы не прерывать встречу.","fr":"Напишу ему отдельное сообщение, чтобы не прерывать встречу."},"c":{"ru":"Если отправка уже началась, сразу сообщу ответственному за безопасность.","en":"Если отправка уже началась, сразу сообщу ответственному за безопасность.","es":"Если отправка уже началась, сразу сообщу ответственному за безопасность.","pt":"Если отправка уже началась, сразу сообщу ответственному за безопасность.","de":"Если отправка уже началась, сразу сообщу ответственному за безопасность.","fr":"Если отправка уже началась, сразу сообщу ответственному за безопасность."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе предлагают взять на себя чужую смену завтра, а ты планировал отдых. Что ты сделаешь?","en":"Тебе предлагают взять на себя чужую смену завтра, а ты планировал отдых. Что ты сделаешь?","es":"Тебе предлагают взять на себя чужую смену завтра, а ты планировал отдых. Что ты сделаешь?","pt":"Тебе предлагают взять на себя чужую смену завтра, а ты планировал отдых. Что ты сделаешь?","de":"Тебе предлагают взять на себя чужую смену завтра, а ты планировал отдых. Что ты сделаешь?","fr":"Тебе предлагают взять на себя чужую смену завтра, а ты планировал отдых. Что ты сделаешь?"},"a":{"ru":"Соглашусь, если это редкая просьба и мне реально удобно.","en":"Соглашусь, если это редкая просьба и мне реально удобно.","es":"Соглашусь, если это редкая просьба и мне реально удобно.","pt":"Соглашусь, если это редкая просьба и мне реально удобно.","de":"Соглашусь, если это редкая просьба и мне реально удобно.","fr":"Соглашусь, если это редкая просьба и мне реально удобно."},"b":{"ru":"Предложу обмен только на другой день.","en":"Предложу обмен только на другой день.","es":"Предложу обмен только на другой день.","pt":"Предложу обмен только на другой день.","de":"Предложу обмен только на другой день.","fr":"Предложу обмен только на другой день."},"c":{"ru":"Откажусь, потому что отдых уже запланирован.","en":"Откажусь, потому что отдых уже запланирован.","es":"Откажусь, потому что отдых уже запланирован.","pt":"Откажусь, потому что отдых уже запланирован.","de":"Откажусь, потому что отдых уже запланирован.","fr":"Откажусь, потому что отдых уже запланирован."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты узнаёшь, что у твоего друга проблемы дома, но он делает вид, что всё нормально. Что ты сделаешь?","en":"Ты узнаёшь, что у твоего друга проблемы дома, но он делает вид, что всё нормально. Что ты сделаешь?","es":"Ты узнаёшь, что у твоего друга проблемы дома, но он делает вид, что всё нормально. Что ты сделаешь?","pt":"Ты узнаёшь, что у твоего друга проблемы дома, но он делает вид, что всё нормально. Что ты сделаешь?","de":"Ты узнаёшь, что у твоего друга проблемы дома, но он делает вид, что всё нормально. Что ты сделаешь?","fr":"Ты узнаёшь, что у твоего друга проблемы дома, но он делает вид, что всё нормально. Что ты сделаешь?"},"a":{"ru":"Позову его погулять и спокойно поговорю без давления.","en":"Позову его погулять и спокойно поговорю без давления.","es":"Позову его погулять и спокойно поговорю без давления.","pt":"Позову его погулять и спокойно поговорю без давления.","de":"Позову его погулять и спокойно поговорю без давления.","fr":"Позову его погулять и спокойно поговорю без давления."},"b":{"ru":"Скажу, что заметил его состояние и готов выслушать.","en":"Скажу, что заметил его состояние и готов выслушать.","es":"Скажу, что заметил его состояние и готов выслушать.","pt":"Скажу, что заметил его состояние и готов выслушать.","de":"Скажу, что заметил его состояние и готов выслушать.","fr":"Скажу, что заметил его состояние и готов выслушать."},"c":{"ru":"Не стану расспрашивать и просто дам понять, что я рядом.","en":"Не стану расспрашивать и просто дам понять, что я рядом.","es":"Не стану расспрашивать и просто дам понять, что я рядом.","pt":"Не стану расспрашивать и просто дам понять, что я рядом.","de":"Не стану расспрашивать и просто дам понять, что я рядом.","fr":"Не стану расспрашивать и просто дам понять, что я рядом."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На учебе тебе предлагают готовую работу, которую можно сдать как свою. Что ты сделаешь?","en":"На учебе тебе предлагают готовую работу, которую можно сдать как свою. Что ты сделаешь?","es":"На учебе тебе предлагают готовую работу, которую можно сдать как свою. Что ты сделаешь?","pt":"На учебе тебе предлагают готовую работу, которую можно сдать как свою. Что ты сделаешь?","de":"На учебе тебе предлагают готовую работу, которую можно сдать как свою. Что ты сделаешь?","fr":"На учебе тебе предлагают готовую работу, которую можно сдать как свою. Что ты сделаешь?"},"a":{"ru":"Откажусь и сделаю работу самостоятельно.","en":"Откажусь и сделаю работу самостоятельно.","es":"Откажусь и сделаю работу самостоятельно.","pt":"Откажусь и сделаю работу самостоятельно.","de":"Откажусь и сделаю работу самостоятельно.","fr":"Откажусь и сделаю работу самостоятельно."},"b":{"ru":"Возьму её только как пример, не копируя текст.","en":"Возьму её только как пример, не копируя текст.","es":"Возьму её только как пример, не копируя текст.","pt":"Возьму её только как пример, не копируя текст.","de":"Возьму её только как пример, не копируя текст.","fr":"Возьму её только как пример, не копируя текст."},"c":{"ru":"Прямо скажу тому человеку, что не хочу нарушать правила.","en":"Прямо скажу тому человеку, что не хочу нарушать правила.","es":"Прямо скажу тому человеку, что не хочу нарушать правила.","pt":"Прямо скажу тому человеку, что не хочу нарушать правила.","de":"Прямо скажу тому человеку, что не хочу нарушать правила.","fr":"Прямо скажу тому человеку, что не хочу нарушать правила."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты случайно слышишь, как о тебе говорят нелестно, думая, что тебя рядом нет. Что ты сделаешь?","en":"Ты случайно слышишь, как о тебе говорят нелестно, думая, что тебя рядом нет. Что ты сделаешь?","es":"Ты случайно слышишь, как о тебе говорят нелестно, думая, что тебя рядом нет. Что ты сделаешь?","pt":"Ты случайно слышишь, как о тебе говорят нелестно, думая, что тебя рядом нет. Что ты сделаешь?","de":"Ты случайно слышишь, как о тебе говорят нелестно, думая, что тебя рядом нет. Что ты сделаешь?","fr":"Ты случайно слышишь, как о тебе говорят нелестно, думая, что тебя рядом нет. Что ты сделаешь?"},"a":{"ru":"Не стану реагировать на услышанное сразу.","en":"Не стану реагировать на услышанное сразу.","es":"Не стану реагировать на услышанное сразу.","pt":"Не стану реагировать на услышанное сразу.","de":"Не стану реагировать на услышанное сразу.","fr":"Не стану реагировать на услышанное сразу."},"b":{"ru":"Если это близкий человек, позже спокойно спрошу о сказанном.","en":"Если это близкий человек, позже спокойно спрошу о сказанном.","es":"Если это близкий человек, позже спокойно спрошу о сказанном.","pt":"Если это близкий человек, позже спокойно спрошу о сказанном.","de":"Если это близкий человек, позже спокойно спрошу о сказанном.","fr":"Если это близкий человек, позже спокойно спрошу о сказанном."},"c":{"ru":"Сделаю выводы о человеке и сокращу общение.","en":"Сделаю выводы о человеке и сокращу общение.","es":"Сделаю выводы о человеке и сокращу общение.","pt":"Сделаю выводы о человеке и сокращу общение.","de":"Сделаю выводы о человеке и сокращу общение.","fr":"Сделаю выводы о человеке и сокращу общение."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты должен выбрать одного человека для совместной поездки, но два друга одинаково хотят поехать с тобой. Что ты сделаешь?","en":"Ты должен выбрать одного человека для совместной поездки, но два друга одинаково хотят поехать с тобой. Что ты сделаешь?","es":"Ты должен выбрать одного человека для совместной поездки, но два друга одинаково хотят поехать с тобой. Что ты сделаешь?","pt":"Ты должен выбрать одного человека для совместной поездки, но два друга одинаково хотят поехать с тобой. Что ты сделаешь?","de":"Ты должен выбрать одного человека для совместной поездки, но два друга одинаково хотят поехать с тобой. Что ты сделаешь?","fr":"Ты должен выбрать одного человека для совместной поездки, но два друга одинаково хотят поехать с тобой. Что ты сделаешь?"},"a":{"ru":"Обсужу с обоими формат поездки и выберу того, с кем планы лучше совпадают.","en":"Обсужу с обоими формат поездки и выберу того, с кем планы лучше совпадают.","es":"Обсужу с обоими формат поездки и выберу того, с кем планы лучше совпадают.","pt":"Обсужу с обоими формат поездки и выберу того, с кем планы лучше совпадают.","de":"Обсужу с обоими формат поездки и выберу того, с кем планы лучше совпадают.","fr":"Обсужу с обоими формат поездки и выберу того, с кем планы лучше совпадают."},"b":{"ru":"Предложу включить обоих, если это возможно по бюджету и жилью.","en":"Предложу включить обоих, если это возможно по бюджету и жилью.","es":"Предложу включить обоих, если это возможно по бюджету и жилью.","pt":"Предложу включить обоих, если это возможно по бюджету и жилью.","de":"Предложу включить обоих, если это возможно по бюджету и жилью.","fr":"Предложу включить обоих, если это возможно по бюджету и жилью."},"c":{"ru":"Выберу одного по принципу, с кем в последнее время виделся реже.","en":"Выберу одного по принципу, с кем в последнее время виделся реже.","es":"Выберу одного по принципу, с кем в последнее время виделся реже.","pt":"Выберу одного по принципу, с кем в последнее время виделся реже.","de":"Выберу одного по принципу, с кем в последнее время виделся реже.","fr":"Выберу одного по принципу, с кем в последнее время виделся реже."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе возвращают вещь, которую ты одолжил, но она немного повреждена. Что ты сделаешь?","en":"Тебе возвращают вещь, которую ты одолжил, но она немного повреждена. Что ты сделаешь?","es":"Тебе возвращают вещь, которую ты одолжил, но она немного повреждена. Что ты сделаешь?","pt":"Тебе возвращают вещь, которую ты одолжил, но она немного повреждена. Что ты сделаешь?","de":"Тебе возвращают вещь, которую ты одолжил, но она немного повреждена. Что ты сделаешь?","fr":"Тебе возвращают вещь, которую ты одолжил, но она немного повреждена. Что ты сделаешь?"},"a":{"ru":"Скажу об этом сразу и спокойно выясню, как исправить повреждение.","en":"Скажу об этом сразу и спокойно выясню, как исправить повреждение.","es":"Скажу об этом сразу и спокойно выясню, как исправить повреждение.","pt":"Скажу об этом сразу и спокойно выясню, как исправить повреждение.","de":"Скажу об этом сразу и спокойно выясню, как исправить повреждение.","fr":"Скажу об этом сразу и спокойно выясню, как исправить повреждение."},"b":{"ru":"Приму вещь и сам оценю ущерб позже.","en":"Приму вещь и сам оценю ущерб позже.","es":"Приму вещь и сам оценю ущерб позже.","pt":"Приму вещь и сам оценю ущерб позже.","de":"Приму вещь и сам оценю ущерб позже.","fr":"Приму вещь и сам оценю ущерб позже."},"c":{"ru":"Прощу повреждение, если оно небольшое и человек предупредил заранее.","en":"Прощу повреждение, если оно небольшое и человек предупредил заранее.","es":"Прощу повреждение, если оно небольшое и человек предупредил заранее.","pt":"Прощу повреждение, если оно небольшое и человек предупредил заранее.","de":"Прощу повреждение, если оно небольшое и человек предупредил заранее.","fr":"Прощу повреждение, если оно небольшое и человек предупредил заранее."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты опаздываешь на поезд и видишь, что знакомый забыл свой билет дома, а до отправления считаные минуты. Что ты сделаешь?","en":"Ты опаздываешь на поезд и видишь, что знакомый забыл свой билет дома, а до отправления считаные минуты. Что ты сделаешь?","es":"Ты опаздываешь на поезд и видишь, что знакомый забыл свой билет дома, а до отправления считаные минуты. Что ты сделаешь?","pt":"Ты опаздываешь на поезд и видишь, что знакомый забыл свой билет дома, а до отправления считаные минуты. Что ты сделаешь?","de":"Ты опаздываешь на поезд и видишь, что знакомый забыл свой билет дома, а до отправления считаные минуты. Что ты сделаешь?","fr":"Ты опаздываешь на поезд и видишь, что знакомый забыл свой билет дома, а до отправления считаные минуты. Что ты сделаешь?"},"a":{"ru":"Помогу ему быстро найти электронную копию или восстановить билет.","en":"Помогу ему быстро найти электронную копию или восстановить билет.","es":"Помогу ему быстро найти электронную копию или восстановить билет.","pt":"Помогу ему быстро найти электронную копию или восстановить билет.","de":"Помогу ему быстро найти электронную копию или восстановить билет.","fr":"Помогу ему быстро найти электронную копию или восстановить билет."},"b":{"ru":"Побегу на поезд сам, а ему оставлю инструкции, что делать.","en":"Побегу на поезд сам, а ему оставлю инструкции, что делать.","es":"Побегу на поезд сам, а ему оставлю инструкции, что делать.","pt":"Побегу на поезд сам, а ему оставлю инструкции, что делать.","de":"Побегу на поезд сам, а ему оставлю инструкции, что делать.","fr":"Побегу на поезд сам, а ему оставлю инструкции, что делать."},"c":{"ru":"Попробую вместе с ним решить вопрос на месте, даже если есть риск опоздать.","en":"Попробую вместе с ним решить вопрос на месте, даже если есть риск опоздать.","es":"Попробую вместе с ним решить вопрос на месте, даже если есть риск опоздать.","pt":"Попробую вместе с ним решить вопрос на месте, даже если есть риск опоздать.","de":"Попробую вместе с ним решить вопрос на месте, даже если есть риск опоздать.","fr":"Попробую вместе с ним решить вопрос на месте, даже если есть риск опоздать."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебя просят дать обещание, которое сейчас кажется правильным, но ты не уверен, что сможешь выполнить его через год. Что ты сделаешь?","en":"Тебя просят дать обещание, которое сейчас кажется правильным, но ты не уверен, что сможешь выполнить его через год. Что ты сделаешь?","es":"Тебя просят дать обещание, которое сейчас кажется правильным, но ты не уверен, что сможешь выполнить его через год. Что ты сделаешь?","pt":"Тебя просят дать обещание, которое сейчас кажется правильным, но ты не уверен, что сможешь выполнить его через год. Что ты сделаешь?","de":"Тебя просят дать обещание, которое сейчас кажется правильным, но ты не уверен, что сможешь выполнить его через год. Что ты сделаешь?","fr":"Тебя просят дать обещание, которое сейчас кажется правильным, но ты не уверен, что сможешь выполнить его через год. Что ты сделаешь?"},"a":{"ru":"Откажусь обещать и скажу, что могу гарантировать сейчас.","en":"Откажусь обещать и скажу, что могу гарантировать сейчас.","es":"Откажусь обещать и скажу, что могу гарантировать сейчас.","pt":"Откажусь обещать и скажу, что могу гарантировать сейчас.","de":"Откажусь обещать и скажу, что могу гарантировать сейчас.","fr":"Откажусь обещать и скажу, что могу гарантировать сейчас."},"b":{"ru":"Договорюсь о конкретных условиях, при которых готов это выполнить.","en":"Договорюсь о конкретных условиях, при которых готов это выполнить.","es":"Договорюсь о конкретных условиях, при которых готов это выполнить.","pt":"Договорюсь о конкретных условиях, при которых готов это выполнить.","de":"Договорюсь о конкретных условиях, при которых готов это выполнить.","fr":"Договорюсь о конкретных условиях, при которых готов это выполнить."},"c":{"ru":"Дам обещание только после того, как проверю свои возможности.","en":"Дам обещание только после того, как проверю свои возможности.","es":"Дам обещание только после того, как проверю свои возможности.","pt":"Дам обещание только после того, как проверю свои возможности.","de":"Дам обещание только после того, как проверю свои возможности.","fr":"Дам обещание только после того, как проверю свои возможности."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь, что у тебя заканчивается время перед дедлайном, а задача всё ещё далека от завершения. Что ты сделаешь?","en":"Ты видишь, что у тебя заканчивается время перед дедлайном, а задача всё ещё далека от завершения. Что ты сделаешь?","es":"Ты видишь, что у тебя заканчивается время перед дедлайном, а задача всё ещё далека от завершения. Что ты сделаешь?","pt":"Ты видишь, что у тебя заканчивается время перед дедлайном, а задача всё ещё далека от завершения. Что ты сделаешь?","de":"Ты видишь, что у тебя заканчивается время перед дедлайном, а задача всё ещё далека от завершения. Что ты сделаешь?","fr":"Ты видишь, что у тебя заканчивается время перед дедлайном, а задача всё ещё далека от завершения. Что ты сделаешь?"},"a":{"ru":"Уберу всё второстепенное и доведу до конца главное.","en":"Уберу всё второстепенное и доведу до конца главное.","es":"Уберу всё второстепенное и доведу до конца главное.","pt":"Уберу всё второстепенное и доведу до конца главное.","de":"Уберу всё второстепенное и доведу до конца главное.","fr":"Уберу всё второстепенное и доведу до конца главное."},"b":{"ru":"Сообщу о риске срыва срока и попрошу пересмотреть объём.","en":"Сообщу о риске срыва срока и попрошу пересмотреть объём.","es":"Сообщу о риске срыва срока и попрошу пересмотреть объём.","pt":"Сообщу о риске срыва срока и попрошу пересмотреть объём.","de":"Сообщу о риске срыва срока и попрошу пересмотреть объём.","fr":"Сообщу о риске срыва срока и попрошу пересмотреть объём."},"c":{"ru":"Сдам незавершённую версию и отдельно отмечу, что осталось.","en":"Сдам незавершённую версию и отдельно отмечу, что осталось.","es":"Сдам незавершённую версию и отдельно отмечу, что осталось.","pt":"Сдам незавершённую версию и отдельно отмечу, что осталось.","de":"Сдам незавершённую версию и отдельно отмечу, что осталось.","fr":"Сдам незавершённую версию и отдельно отмечу, что осталось."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Во время разговора человек явно неправ, но для него это болезненная тема. Что ты сделаешь?","en":"Во время разговора человек явно неправ, но для него это болезненная тема. Что ты сделаешь?","es":"Во время разговора человек явно неправ, но для него это болезненная тема. Что ты сделаешь?","pt":"Во время разговора человек явно неправ, но для него это болезненная тема. Что ты сделаешь?","de":"Во время разговора человек явно неправ, но для него это болезненная тема. Что ты сделаешь?","fr":"Во время разговора человек явно неправ, но для него это болезненная тема. Что ты сделаешь?"},"a":{"ru":"Сначала признаю его чувства, а потом мягко приведу факты.","en":"Сначала признаю его чувства, а потом мягко приведу факты.","es":"Сначала признаю его чувства, а потом мягко приведу факты.","pt":"Сначала признаю его чувства, а потом мягко приведу факты.","de":"Сначала признаю его чувства, а потом мягко приведу факты.","fr":"Сначала признаю его чувства, а потом мягко приведу факты."},"b":{"ru":"Не стану спорить и вернусь к теме, когда эмоции спадут.","en":"Не стану спорить и вернусь к теме, когда эмоции спадут.","es":"Не стану спорить и вернусь к теме, когда эмоции спадут.","pt":"Не стану спорить и вернусь к теме, когда эмоции спадут.","de":"Не стану спорить и вернусь к теме, когда эмоции спадут.","fr":"Не стану спорить и вернусь к теме, когда эмоции спадут."},"c":{"ru":"Прямо объясню, где именно он ошибается, но без личных выпадов.","en":"Прямо объясню, где именно он ошибается, но без личных выпадов.","es":"Прямо объясню, где именно он ошибается, но без личных выпадов.","pt":"Прямо объясню, где именно он ошибается, но без личных выпадов.","de":"Прямо объясню, где именно он ошибается, но без личных выпадов.","fr":"Прямо объясню, где именно он ошибается, но без личных выпадов."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты оказываешься единственным человеком, который знает, где находится потерянная важная вещь другого человека. Что ты сделаешь?","en":"Ты оказываешься единственным человеком, который знает, где находится потерянная важная вещь другого человека. Что ты сделаешь?","es":"Ты оказываешься единственным человеком, который знает, где находится потерянная важная вещь другого человека. Что ты сделаешь?","pt":"Ты оказываешься единственным человеком, который знает, где находится потерянная важная вещь другого человека. Что ты сделаешь?","de":"Ты оказываешься единственным человеком, который знает, где находится потерянная важная вещь другого человека. Что ты сделаешь?","fr":"Ты оказываешься единственным человеком, который знает, где находится потерянная важная вещь другого человека. Что ты сделаешь?"},"a":{"ru":"Сразу сообщу владельцу и договорюсь о передаче.","en":"Сразу сообщу владельцу и договорюсь о передаче.","es":"Сразу сообщу владельцу и договорюсь о передаче.","pt":"Сразу сообщу владельцу и договорюсь о передаче.","de":"Сразу сообщу владельцу и договорюсь о передаче.","fr":"Сразу сообщу владельцу и договорюсь о передаче."},"b":{"ru":"Передам вещь через администрацию места.","en":"Передам вещь через администрацию места.","es":"Передам вещь через администрацию места.","pt":"Передам вещь через администрацию места.","de":"Передам вещь через администрацию места.","fr":"Передам вещь через администрацию места."},"c":{"ru":"Оставлю её в безопасном месте и сообщу владельцу, где забрать.","en":"Оставлю её в безопасном месте и сообщу владельцу, где забрать.","es":"Оставлю её в безопасном месте и сообщу владельцу, где забрать.","pt":"Оставлю её в безопасном месте и сообщу владельцу, где забрать.","de":"Оставлю её в безопасном месте и сообщу владельцу, где забрать.","fr":"Оставлю её в безопасном месте и сообщу владельцу, где забрать."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебя приглашают в путешествие с очень насыщенной программой, хотя ты предпочитаешь спокойный отдых. Что ты сделаешь?","en":"Тебя приглашают в путешествие с очень насыщенной программой, хотя ты предпочитаешь спокойный отдых. Что ты сделаешь?","es":"Тебя приглашают в путешествие с очень насыщенной программой, хотя ты предпочитаешь спокойный отдых. Что ты сделаешь?","pt":"Тебя приглашают в путешествие с очень насыщенной программой, хотя ты предпочитаешь спокойный отдых. Что ты сделаешь?","de":"Тебя приглашают в путешествие с очень насыщенной программой, хотя ты предпочитаешь спокойный отдых. Что ты сделаешь?","fr":"Тебя приглашают в путешествие с очень насыщенной программой, хотя ты предпочитаешь спокойный отдых. Что ты сделаешь?"},"a":{"ru":"Предложу сократить программу и оставить время на отдых.","en":"Предложу сократить программу и оставить время на отдых.","es":"Предложу сократить программу и оставить время на отдых.","pt":"Предложу сократить программу и оставить время на отдых.","de":"Предложу сократить программу и оставить время на отдых.","fr":"Предложу сократить программу и оставить время на отдых."},"b":{"ru":"Соглашусь, но заранее выберу хотя бы один свободный день.","en":"Соглашусь, но заранее выберу хотя бы один свободный день.","es":"Соглашусь, но заранее выберу хотя бы один свободный день.","pt":"Соглашусь, но заранее выберу хотя бы один свободный день.","de":"Соглашусь, но заранее выберу хотя бы один свободный день.","fr":"Соглашусь, но заранее выберу хотя бы один свободный день."},"c":{"ru":"Откажусь и выберу поездку в более медленном темпе.","en":"Откажусь и выберу поездку в более медленном темпе.","es":"Откажусь и выберу поездку в более медленном темпе.","pt":"Откажусь и выберу поездку в более медленном темпе.","de":"Откажусь и выберу поездку в более медленном темпе.","fr":"Откажусь и выберу поездку в более медленном темпе."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты понимаешь, что один из твоих привычных способов делать дела больше не работает. Что ты сделаешь?","en":"Ты понимаешь, что один из твоих привычных способов делать дела больше не работает. Что ты сделаешь?","es":"Ты понимаешь, что один из твоих привычных способов делать дела больше не работает. Что ты сделаешь?","pt":"Ты понимаешь, что один из твоих привычных способов делать дела больше не работает. Что ты сделаешь?","de":"Ты понимаешь, что один из твоих привычных способов делать дела больше не работает. Что ты сделаешь?","fr":"Ты понимаешь, что один из твоих привычных способов делать дела больше не работает. Что ты сделаешь?"},"a":{"ru":"Сразу попробую новый подход на небольшой задаче.","en":"Сразу попробую новый подход на небольшой задаче.","es":"Сразу попробую новый подход на небольшой задаче.","pt":"Сразу попробую новый подход на небольшой задаче.","de":"Сразу попробую новый подход на небольшой задаче.","fr":"Сразу попробую новый подход на небольшой задаче."},"b":{"ru":"Сначала разберусь, почему старый способ перестал работать.","en":"Сначала разберусь, почему старый способ перестал работать.","es":"Сначала разберусь, почему старый способ перестал работать.","pt":"Сначала разберусь, почему старый способ перестал работать.","de":"Сначала разберусь, почему старый способ перестал работать.","fr":"Сначала разберусь, почему старый способ перестал работать."},"c":{"ru":"Вернусь к проверенному методу, но внесу небольшое изменение.","en":"Вернусь к проверенному методу, но внесу небольшое изменение.","es":"Вернусь к проверенному методу, но внесу небольшое изменение.","pt":"Вернусь к проверенному методу, но внесу небольшое изменение.","de":"Вернусь к проверенному методу, но внесу небольшое изменение.","fr":"Вернусь к проверенному методу, но внесу небольшое изменение."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты видишь, что знакомый собирается принять решение на эмоциях после сильной ссоры. Что ты сделаешь?","en":"Ты видишь, что знакомый собирается принять решение на эмоциях после сильной ссоры. Что ты сделаешь?","es":"Ты видишь, что знакомый собирается принять решение на эмоциях после сильной ссоры. Что ты сделаешь?","pt":"Ты видишь, что знакомый собирается принять решение на эмоциях после сильной ссоры. Что ты сделаешь?","de":"Ты видишь, что знакомый собирается принять решение на эмоциях после сильной ссоры. Что ты сделаешь?","fr":"Ты видишь, что знакомый собирается принять решение на эмоциях после сильной ссоры. Что ты сделаешь?"},"a":{"ru":"Предложу ему не решать сегодня и дать себе время.","en":"Предложу ему не решать сегодня и дать себе время.","es":"Предложу ему не решать сегодня и дать себе время.","pt":"Предложу ему не решать сегодня и дать себе время.","de":"Предложу ему не решать сегодня и дать себе время.","fr":"Предложу ему не решать сегодня и дать себе время."},"b":{"ru":"Спрошу, чего он хочет добиться своим решением.","en":"Спрошу, чего он хочет добиться своим решением.","es":"Спрошу, чего он хочет добиться своим решением.","pt":"Спрошу, чего он хочет добиться своим решением.","de":"Спрошу, чего он хочет добиться своим решением.","fr":"Спрошу, чего он хочет добиться своим решением."},"c":{"ru":"Скажу своё мнение прямо, даже если оно ему сейчас не понравится.","en":"Скажу своё мнение прямо, даже если оно ему сейчас не понравится.","es":"Скажу своё мнение прямо, даже если оно ему сейчас не понравится.","pt":"Скажу своё мнение прямо, даже если оно ему сейчас не понравится.","de":"Скажу своё мнение прямо, даже если оно ему сейчас не понравится.","fr":"Скажу своё мнение прямо, даже если оно ему сейчас не понравится."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Тебе предлагают выбор: получить небольшую выгоду сейчас или больше позже без гарантий. Что ты сделаешь?","en":"Тебе предлагают выбор: получить небольшую выгоду сейчас или больше позже без гарантий. Что ты сделаешь?","es":"Тебе предлагают выбор: получить небольшую выгоду сейчас или больше позже без гарантий. Что ты сделаешь?","pt":"Тебе предлагают выбор: получить небольшую выгоду сейчас или больше позже без гарантий. Что ты сделаешь?","de":"Тебе предлагают выбор: получить небольшую выгоду сейчас или больше позже без гарантий. Что ты сделаешь?","fr":"Тебе предлагают выбор: получить небольшую выгоду сейчас или больше позже без гарантий. Что ты сделаешь?"},"a":{"ru":"Возьму небольшую выгоду сейчас.","en":"Возьму небольшую выгоду сейчас.","es":"Возьму небольшую выгоду сейчас.","pt":"Возьму небольшую выгоду сейчас.","de":"Возьму небольшую выгоду сейчас.","fr":"Возьму небольшую выгоду сейчас."},"b":{"ru":"Сравню вероятность обоих вариантов и только потом решу.","en":"Сравню вероятность обоих вариантов и только потом решу.","es":"Сравню вероятность обоих вариантов и только потом решу.","pt":"Сравню вероятность обоих вариантов и только потом решу.","de":"Сравню вероятность обоих вариантов и только потом решу.","fr":"Сравню вероятность обоих вариантов и только потом решу."},"c":{"ru":"Выберу большую будущую выгоду, если риск для меня приемлем.","en":"Выберу большую будущую выгоду, если риск для меня приемлем.","es":"Выберу большую будущую выгоду, если риск для меня приемлем.","pt":"Выберу большую будущую выгоду, если риск для меня приемлем.","de":"Выберу большую будущую выгоду, если риск для меня приемлем.","fr":"Выберу большую будущую выгоду, если риск для меня приемлем."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"Ты обнаруживаешь, что важная информация в общем чате была понята всеми неправильно. Что ты сделаешь?","en":"Ты обнаруживаешь, что важная информация в общем чате была понята всеми неправильно. Что ты сделаешь?","es":"Ты обнаруживаешь, что важная информация в общем чате была понята всеми неправильно. Что ты сделаешь?","pt":"Ты обнаруживаешь, что важная информация в общем чате была понята всеми неправильно. Что ты сделаешь?","de":"Ты обнаруживаешь, что важная информация в общем чате была понята всеми неправильно. Что ты сделаешь?","fr":"Ты обнаруживаешь, что важная информация в общем чате была понята всеми неправильно. Что ты сделаешь?"},"a":{"ru":"Напишу одно ясное сообщение с правильными фактами.","en":"Напишу одно ясное сообщение с правильными фактами.","es":"Напишу одно ясное сообщение с правильными фактами.","pt":"Напишу одно ясное сообщение с правильными фактами.","de":"Напишу одно ясное сообщение с правильными фактами.","fr":"Напишу одно ясное сообщение с правильными фактами."},"b":{"ru":"Задам уточняющие вопросы, чтобы люди сами заметили ошибку.","en":"Задам уточняющие вопросы, чтобы люди сами заметили ошибку.","es":"Задам уточняющие вопросы, чтобы люди сами заметили ошибку.","pt":"Задам уточняющие вопросы, чтобы люди сами заметили ошибку.","de":"Задам уточняющие вопросы, чтобы люди сами заметили ошибку.","fr":"Задам уточняющие вопросы, чтобы люди сами заметили ошибку."},"c":{"ru":"Напишу автору сообщения лично и попрошу исправить его.","en":"Напишу автору сообщения лично и попрошу исправить его.","es":"Напишу автору сообщения лично и попрошу исправить его.","pt":"Напишу автору сообщения лично и попрошу исправить его.","de":"Напишу автору сообщения лично и попрошу исправить его.","fr":"Напишу автору сообщения лично и попрошу исправить его."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}},{"question":{"ru":"На празднике тебе предлагают сыграть роль ведущего экспромтом, хотя ты этого не планировал. Что ты сделаешь?","en":"На празднике тебе предлагают сыграть роль ведущего экспромтом, хотя ты этого не планировал. Что ты сделаешь?","es":"На празднике тебе предлагают сыграть роль ведущего экспромтом, хотя ты этого не планировал. Что ты сделаешь?","pt":"На празднике тебе предлагают сыграть роль ведущего экспромтом, хотя ты этого не планировал. Что ты сделаешь?","de":"На празднике тебе предлагают сыграть роль ведущего экспромтом, хотя ты этого не планировал. Что ты сделаешь?","fr":"На празднике тебе предлагают сыграть роль ведущего экспромтом, хотя ты этого не планировал. Что ты сделаешь?"},"a":{"ru":"Соглашусь и проведу хотя бы часть программы.","en":"Соглашусь и проведу хотя бы часть программы.","es":"Соглашусь и проведу хотя бы часть программы.","pt":"Соглашусь и проведу хотя бы часть программы.","de":"Соглашусь и проведу хотя бы часть программы.","fr":"Соглашусь и проведу хотя бы часть программы."},"b":{"ru":"Попрошу дать мне несколько минут на подготовку.","en":"Попрошу дать мне несколько минут на подготовку.","es":"Попрошу дать мне несколько минут на подготовку.","pt":"Попрошу дать мне несколько минут на подготовку.","de":"Попрошу дать мне несколько минут на подготовку.","fr":"Попрошу дать мне несколько минут на подготовку."},"c":{"ru":"Откажусь и предложу другого человека.","en":"Откажусь и предложу другого человека.","es":"Откажусь и предложу другого человека.","pt":"Откажусь и предложу другого человека.","de":"Откажусь и предложу другого человека.","fr":"Откажусь и предложу другого человека."},"stats":{"a":33,"b":34,"c":33},"analysis":{"ru":"","en":"","es":"","pt":"","de":"","fr":""}}];

// Chronicles: complete localization for all six supported languages.

FATE_DILEMMAS.length = 0;
FATE_DILEMMAS.push(...FATE_DILEMMAS_UNIQUE_100);
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
    document.getElementById('stat-a').style.width = d.stats.a + '%'; document.getElementById('stat-b').style.width = d.stats.b + '%'; document.getElementById('stat-c').style.width = d.stats.c + '%';
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
  if (overlay) overlay.remove();
}

// ============================================================
// ЛАБИРИНТ ЗАГАДОК
// ============================================================
const LABYRINTH_RIDDLES = [
  {
    "riddle": {
      "ru": "Кто ходит утром на четырех ногах, днем на двух, а вечером на трех?",
      "en": "What walks on four legs in the morning, two at noon, and three in the evening?",
      "es": "What walks on four legs in the morning, two at noon, and three in the evening?",
      "pt": "Quem anda de manhã com quatro pernas, ao meio-dia com duas e à noite com três?",
      "de": "Wer geht am Morgen auf vier Beinen, am Mittag auf zwei und am Abend auf drei?",
      "fr": "Qui marche le matin sur quatre jambes, à midi sur deux et le soir sur trois?"
    },
    "hints": [
      {
        "ru": "Ищи не отдельное существо, а образ человеческой жизни.",
        "en": "Ищи не отдельное существо, а образ человеческой жизни.",
        "es": "Ищи не отдельное существо, а образ человеческой жизни.",
        "pt": "Procura não uma criatura isolada, mas a imagem de uma vida humana.",
        "de": "Suche nicht nach einem einzelnen Wesen, sondern nach dem Bild eines menschlichen Lebens.",
        "fr": "Cherche non pas une créature précise, mais l’image d’une vie humaine."
      },
      {
        "ru": "Время суток здесь обозначает разные этапы жизни.",
        "en": "Время суток здесь обозначает разные этапы жизни.",
        "es": "Время суток здесь обозначает разные этапы жизни.",
        "pt": "As horas do dia representam diferentes fases da vida.",
        "de": "Die Tageszeiten stehen für verschiedene Lebensabschnitte.",
        "fr": "Les moments de la journée représentent différentes étapes de la vie."
      }
    ],
    "answer": {
      "ru": "Ответ: человек. Утро — младенчество, когда ребенок ползает на четвереньках. День — зрелость, когда человек ходит на двух ногах. Вечер — старость, когда появляется опора в виде трости, то есть третья «нога».",
      "en": "Ответ: человек. Утро — младенчество, когда ребенок ползает на четвереньках. День — зрелость, когда человек ходит на двух ногах. Вечер — старость, когда появляется опора в виде трости, то есть третья «нога».",
      "es": "Ответ: человек. Утро — младенчество, когда ребенок ползает на четвереньках. День — зрелость, когда человек ходит на двух ногах. Вечер — старость, когда появляется опора в виде трости, то есть третья «нога».",
      "pt": "Resposta: o ser humano. De manhã é a infância, quando o bebé se desloca de quatro. Ao meio-dia é a idade adulta, quando a pessoa anda sobre duas pernas. À noite é a velhice, quando aparece o apoio de uma bengala — a terceira “perna”.",
      "de": "Antwort: der Mensch. Der Morgen steht für die Kindheit, wenn ein Baby auf allen vieren krabbelt. Der Mittag steht für das Erwachsenenalter, in dem der Mensch auf zwei Beinen geht. Der Abend steht für das Alter, in dem ein Stock als dritte „Bein“ zur Stütze wird.",
      "fr": "Réponse : l’être humain. Le matin représente l’enfance, quand le bébé se déplace à quatre pattes. Le midi représente l’âge adulte, quand la personne marche sur deux jambes. Le soir représente la vieillesse, quand une canne sert de troisième « jambe »."
    },
    "difficulty": 1
  },
  {
    "riddle": {
      "ru": "Дом открыт со всех сторон. В доме — тысячи колонн. Над колоннами — шатры. Под колоннами — ковры. Там живут — и в коврах, и в колоннах, и в шатрах.",
      "en": "A house is open on all sides. Inside are thousands of columns. Above the columns are tents, below them are carpets. Creatures live in the carpets, columns and tents.",
      "es": "A house is open on all sides. Inside are thousands of columns. Above the columns are tents, below them are carpets. Creatures live in the carpets, columns and tents.",
      "pt": "Uma casa está aberta de todos os lados. Dentro há milhares de colunas. Sobre as colunas há tendas; debaixo delas, tapetes. Ali vivem seres nos tapetes, nas colunas e nas tendas.",
      "de": "Ein Haus ist nach allen Seiten offen. Darin stehen Tausende von Säulen. Über den Säulen sind Zelte, darunter Teppiche. In den Teppichen, Säulen und Zelten leben Wesen.",
      "fr": "Une maison est ouverte de tous côtés. Elle contient des milliers de colonnes. Au-dessus des colonnes, des tentes ; en dessous, des tapis. Des êtres vivent dans les tapis, les colonnes et les tentes."
    },
    "hints": [
      {
        "ru": "Представь место, где «колонны» растут из земли.",
        "en": "Представь место, где «колонны» растут из земли.",
        "es": "Представь место, где «колонны» растут из земли.",
        "pt": "Imagina um lugar onde as “colunas” crescem do chão.",
        "de": "Stell dir einen Ort vor, an dem die „Säulen“ aus dem Boden wachsen.",
        "fr": "Imagine un endroit où les « colonnes » poussent depuis le sol."
      },
      {
        "ru": "Шатры и ковры здесь не сделаны человеком.",
        "en": "Шатры и ковры здесь не сделаны человеком.",
        "es": "Шатры и ковры здесь не сделаны человеком.",
        "pt": "Aqui, tendas e tapetes não foram feitos por pessoas.",
        "de": "Hier wurden Zelte und Teppiche nicht von Menschen gemacht.",
        "fr": "Ici, les tentes et les tapis ne sont pas fabriqués par l’homme."
      }
    ],
    "answer": {
      "ru": "Ответ: лес. Колонны — стволы деревьев, шатры — их кроны, ковры — мох, трава и лесная подстилка. В этом доме живут птицы, звери, насекомые и множество других существ.",
      "en": "Ответ: лес. Колонны — стволы деревьев, шатры — их кроны, ковры — мох, трава и лесная подстилка. В этом доме живут птицы, звери, насекомые и множество других существ.",
      "es": "Ответ: лес. Колонны — стволы деревьев, шатры — их кроны, ковры — мох, трава и лесная подстилка. В этом доме живут птицы, звери, насекомые и множество других существ.",
      "pt": "Resposta: a floresta. As colunas são troncos de árvores, as tendas são as copas, e os tapetes são musgo, relva e folhas do chão. Nesse lugar vivem aves, animais, insetos e muitas outras criaturas.",
      "de": "Antwort: der Wald. Die Säulen sind Baumstämme, die Zelte sind Baumkronen und die Teppiche sind Moos, Gras und die Waldstreu. Dort leben Vögel, Tiere, Insekten und viele andere Wesen.",
      "fr": "Réponse : la forêt. Les colonnes sont les troncs des arbres, les tentes sont leurs cimes et les tapis sont la mousse, l’herbe et la litière du sol. Dans cette maison vivent des oiseaux, des animaux, des insectes et bien d’autres êtres."
    },
    "difficulty": 1
  },
  {
    "riddle": {
      "ru": "Крестьянину необходимо переправить через широкую реку волка, козу и кочан капусты. В лодке одновременно могут поместиться только крестьянин и кто-то один из груза. Нельзя оставлять волка с козой и козу с капустой без присмотра. Как перевезти всех за минимальное количество рейсов?",
      "en": "A farmer must take a wolf, a goat and a cabbage across a river. The boat holds only the farmer and one item. The wolf cannot be left with the goat, and the goat cannot be left with the cabbage. What is the minimum sequence of trips?",
      "es": "A farmer must take a wolf, a goat and a cabbage across a river. The boat holds only the farmer and one item. The wolf cannot be left with the goat, and the goat cannot be left with the cabbage. What is the minimum sequence of trips?",
      "pt": "Um agricultor precisa atravessar um lobo, uma cabra e um repolho por um rio largo. O barco leva apenas o agricultor e uma das cargas. O lobo não pode ficar sozinho com a cabra, e a cabra não pode ficar sozinha com o repolho. Qual é a sequência mínima de viagens?",
      "de": "Ein Bauer muss einen Wolf, eine Ziege und einen Kohlkopf über einen breiten Fluss bringen. Das Boot bietet nur Platz für den Bauern und eine Sache. Der Wolf darf nicht mit der Ziege allein bleiben und die Ziege nicht mit dem Kohl. Welche Abfolge ist minimal?",
      "fr": "Un fermier doit faire traverser une rivière à un loup, une chèvre et un chou. La barque ne transporte que le fermier et une seule chose. Le loup ne peut pas rester seul avec la chèvre, ni la chèvre seule avec le chou. Quelle est la suite minimale de traversées?"
    },
    "hints": [
      {
        "ru": "Сначала перевези того, кто опасен и для одного, и для другого.",
        "en": "Сначала перевези того, кто опасен и для одного, и для другого.",
        "es": "Сначала перевези того, кто опасен и для одного, и для другого.",
        "pt": "Primeiro leva aquilo que é perigoso para um e para o outro.",
        "de": "Bringe zuerst das, was für die beiden anderen gefährlich ist.",
        "fr": "Emporte d’abord celui qui est dangereux pour chacun des deux autres."
      },
      {
        "ru": "В одном из обратных рейсов придётся вернуть уже перевезённый груз.",
        "en": "В одном из обратных рейсов придётся вернуть уже перевезённый груз.",
        "es": "В одном из обратных рейсов придётся вернуть уже перевезённый груз.",
        "pt": "Num dos regressos terás de trazer de volta aquilo que já transportaste.",
        "de": "Bei einer Rückfahrt musst du etwas zurückbringen, das du schon transportiert hast.",
        "fr": "Lors d’un trajet de retour, tu devras ramener quelque chose que tu avais déjà transporté."
      }
    ],
    "answer": {
      "ru": "Ответ: 7 рейсов. 1) Перевезти козу. 2) Вернуться одному. 3) Перевезти волка. 4) Вернуть козу обратно. 5) Перевезти капусту. 6) Вернуться одному. 7) Перевезти козу. В итоге волк и капуста остаются вместе, что безопасно.",
      "en": "Ответ: 7 рейсов. 1) Перевезти козу. 2) Вернуться одному. 3) Перевезти волка. 4) Вернуть козу обратно. 5) Перевезти капусту. 6) Вернуться одному. 7) Перевезти козу. В итоге волк и капуста остаются вместе, что безопасно.",
      "es": "Ответ: 7 рейсов. 1) Перевезти козу. 2) Вернуться одному. 3) Перевезти волка. 4) Вернуть козу обратно. 5) Перевезти капусту. 6) Вернуться одному. 7) Перевезти козу. В итоге волк и капуста остаются вместе, что безопасно.",
      "pt": "Resposta: 7 viagens. 1) Leva a cabra. 2) Volta sozinho. 3) Leva o lobo. 4) Traz a cabra de volta. 5) Leva o repolho. 6) Volta sozinho. 7) Leva a cabra. No fim, o lobo e o repolho ficam juntos, o que é seguro.",
      "de": "Antwort: 7 Fahrten. 1) Bringe die Ziege hinüber. 2) Fahre allein zurück. 3) Bringe den Wolf hinüber. 4) Nimm die Ziege zurück. 5) Bringe den Kohl hinüber. 6) Fahre allein zurück. 7) Bringe die Ziege hinüber. Am Ende bleiben Wolf und Kohl zusammen, was sicher ist.",
      "fr": "Réponse : 7 traversées. 1) Emporter la chèvre. 2) Revenir seul. 3) Emporter le loup. 4) Ramener la chèvre. 5) Emporter le chou. 6) Revenir seul. 7) Emporter la chèvre. À la fin, le loup et le chou restent ensemble, ce qui est sans danger."
    },
    "difficulty": 2
  },
  {
    "riddle": {
      "ru": "Задача о двух веревках: как отмерить ровно 45 минут при помощи двух веревок, каждая из которых сгорает целиком за один час, но горит неравномерно?",
      "en": "Two ropes each burn completely in exactly one hour, but burn unevenly. How can you measure exactly 45 minutes?",
      "es": "Two ropes each burn completely in exactly one hour, but burn unevenly. How can you measure exactly 45 minutes?",
      "pt": "Problème das duas cordas: como medir exatamente 45 minutos usando duas cordas que queimam completamente em uma hora, mas de forma irregular?",
      "de": "Zwei-Seile-Aufgabe: Wie misst man genau 45 Minuten mit zwei Seilen, die jeweils in einer Stunde vollständig abbrennen, aber ungleichmäßig brennen?",
      "fr": "Énigme des deux cordes : comment mesurer exactement 45 minutes avec deux cordes qui brûlent chacune en une heure, mais de façon irrégulière ?"
    },
    "hints": [
      {
        "ru": "Используй тот факт, что конец верёвки можно поджечь сразу с двух сторон.",
        "en": "Используй тот факт, что конец верёвки можно поджечь сразу с двух сторон.",
        "es": "Используй тот факт, что конец верёвки можно поджечь сразу с двух сторон.",
        "pt": "Usa o facto de poderes acender uma ponta da corda pelos dois lados ao mesmo tempo.",
        "de": "Nutze die Tatsache, dass du ein Seil an beiden Enden gleichzeitig anzünden kannst.",
        "fr": "Utilise le fait que tu peux allumer une corde par ses deux extrémités en même temps."
      },
      {
        "ru": "Подумай, сколько времени потребуется верёвке, если она горит с двух концов одновременно.",
        "en": "Подумай, сколько времени потребуется верёвке, если она горит с двух концов одновременно.",
        "es": "Подумай, сколько времени потребуется верёвке, если она горит с двух концов одновременно.",
        "pt": "Pensa quanto tempo uma corda demora a queimar quando arde pelas duas pontas.",
        "de": "Überlege, wie lange ein Seil braucht, wenn es an beiden Enden brennt.",
        "fr": "Réfléchis au temps nécessaire lorsqu’une corde brûle par ses deux extrémités."
      }
    ],
    "answer": {
      "ru": "Ответ: одновременно подожги первую верёвку с двух концов, а вторую — с одного конца. Первая полностью сгорит за 30 минут. В этот момент подожги второй конец второй верёвки. У неё останется ровно половина времени горения, но теперь она горит с двух концов и догорит за 15 минут. 30 + 15 = 45 минут.",
      "en": "Ответ: одновременно подожги первую верёвку с двух концов, а вторую — с одного конца. Первая полностью сгорит за 30 минут. В этот момент подожги второй конец второй верёвки. У неё останется ровно половина времени горения, но теперь она горит с двух концов и догорит за 15 минут. 30 + 15 = 45 минут.",
      "es": "Ответ: одновременно подожги первую верёвку с двух концов, а вторую — с одного конца. Первая полностью сгорит за 30 минут. В этот момент подожги второй конец второй верёвки. У неё останется ровно половина времени горения, но теперь она горит с двух концов и догорит за 15 минут. 30 + 15 = 45 минут.",
      "pt": "Resposta: acende a primeira corda nas duas pontas e a segunda apenas numa ponta. A primeira queima totalmente em 30 minutos. Nesse momento, acende a outra ponta da segunda corda. O que resta dela queimará em 15 minutos, porque agora arde pelas duas pontas. 30 + 15 = 45 minutos.",
      "de": "Antwort: Zünde das erste Seil an beiden Enden an und das zweite nur an einem Ende. Das erste ist nach 30 Minuten vollständig verbrannt. Dann zündest du das andere Ende des zweiten Seils an. Der Rest braucht nun 15 Minuten, weil er an beiden Enden brennt. 30 + 15 = 45 Minuten.",
      "fr": "Réponse : allume la première corde aux deux extrémités et la seconde à une seule extrémité. La première se consume entièrement en 30 minutes. À cet instant, allume l’autre extrémité de la seconde corde. Le reste brûlera en 15 minutes, car il brûle alors par les deux extrémités. 30 + 15 = 45 minutes."
    },
    "difficulty": 2
  },
  {
    "riddle": {
      "ru": "Сто монет: лежат 100 монет, часть орлом вверх, часть решкой вверх. В темноте нужно разделить их на две кучки с равным числом орлов. Орлом вверх 23 монеты, остальные решкой вверх. Как это сделать?",
      "en": "There are 100 coins. Some show heads and some tails. In complete darkness, 23 show heads. Split them into two piles containing the same number of heads.",
      "es": "There are 100 coins. Some show heads and some tails. In complete darkness, 23 show heads. Split them into two piles containing the same number of heads.",
      "pt": "Há 100 moedas. Algumas mostram cara e outras coroa. No escuro total, 23 mostram cara. Divide-as em duas pilhas com o mesmo número de caras.",
      "de": "Es gibt 100 Münzen. Einige zeigen Kopf, andere Zahl. Im völligen Dunkel zeigen 23 Kopf. Teile sie in zwei Haufen mit gleich vielen Köpfen.",
      "fr": "Il y a 100 pièces. Certaines montrent face, d’autres pile. Dans l’obscurité totale, 23 montrent face. Partage-les en deux tas contenant le même nombre de faces."
    },
    "hints": [
      {
        "ru": "Тебе известно точное количество монет с орлом во всей куче.",
        "en": "Тебе известно точное количество монет с орлом во всей куче.",
        "es": "Тебе известно точное количество монет с орлом во всей куче.",
        "pt": "Sabes exatamente quantas moedas mostram cara em toda a pilha.",
        "de": "Du kennst die genaue Anzahl der Münzen mit Kopf im gesamten Stapel.",
        "fr": "Tu connais le nombre exact de pièces montrant face dans l’ensemble."
      },
      {
        "ru": "Важнее количество монет в одной выбранной кучке, чем то, какие именно монеты ты взял.",
        "en": "Важнее количество монет в одной выбранной кучке, чем то, какие именно монеты ты взял.",
        "es": "Важнее количество монет в одной выбранной кучке, чем то, какие именно монеты ты взял.",
        "pt": "Importa mais o tamanho de uma pilha escolhida do que quais moedas específicas estão nela.",
        "de": "Wichtiger als die konkreten Münzen ist die Anzahl der Münzen im gewählten Haufen.",
        "fr": "Le nombre de pièces dans le tas choisi compte plus que les pièces précises qui s’y trouvent."
      }
    ],
    "answer": {
      "ru": "Ответ: отсчитай в темноте любые 23 монеты и сделай из них первую кучку. Остальные 77 — вторая кучка. Переверни все 23 монеты первой кучки. Если среди них было X орлов, то после переворота станет 23 − X орлов. В большой кучке изначально осталось 23 − X орлов. Значит, после переворота количество орлов в обеих кучках станет одинаковым.",
      "en": "Ответ: отсчитай в темноте любые 23 монеты и сделай из них первую кучку. Остальные 77 — вторая кучка. Переверни все 23 монеты первой кучки. Если среди них было X орлов, то после переворота станет 23 − X орлов. В большой кучке изначально осталось 23 − X орлов. Значит, после переворота количество орлов в обеих кучках станет одинаковым.",
      "es": "Ответ: отсчитай в темноте любые 23 монеты и сделай из них первую кучку. Остальные 77 — вторая кучка. Переверни все 23 монеты первой кучки. Если среди них было X орлов, то после переворота станет 23 − X орлов. В большой кучке изначально осталось 23 − X орлов. Значит, после переворота количество орлов в обеих кучках станет одинаковым.",
      "pt": "Resposta: separa às cegas quaisquer 23 moedas e faz delas a primeira pilha. As outras 77 formam a segunda. Vira as 23 moedas da primeira pilha. Se nela havia X caras, depois de as virar haverá 23 − X caras. Na pilha grande já havia 23 − X caras. Portanto, depois da inversão, as duas pilhas terão o mesmo número de caras.",
      "de": "Antwort: Nimm im Dunkeln beliebige 23 Münzen für den ersten Haufen. Die übrigen 77 sind der zweite. Drehe alle 23 Münzen des ersten Haufens um. Wenn darin X-mal Kopf lag, sind es danach 23 − X Köpfe. Im großen Haufen waren von Anfang an ebenfalls 23 − X Köpfe. Nach dem Umdrehen ist die Anzahl der Köpfe daher gleich.",
      "fr": "Réponse : prends au hasard 23 pièces dans l’obscurité pour former le premier tas. Les 77 restantes forment le second. Retourne les 23 pièces du premier tas. S’il y avait X faces, il y en aura 23 − X après les avoir retournées. Le grand tas contenait déjà 23 − X faces. Les deux tas auront donc le même nombre de faces."
    },
    "difficulty": 3
  },
  {
    "riddle": {
      "ru": "Человек стоит перед двумя дверями. Первая дверь ведёт к замку, вторая — к гибели. Около дверей стоят два стражника: один всегда говорит правду, второй всегда лжёт. Человек не знает, кто из них кто. У него есть всего один вопрос, который можно задать только одному стражнику. Какой вопрос нужно задать?",
      "en": "A person stands before two doors. One leads to the castle, the other to death. One guard always tells the truth and the other always lies. You may ask only one question to one guard. What should you ask?",
      "es": "A person stands before two doors. One leads to the castle, the other to death. One guard always tells the truth and the other always lies. You may ask only one question to one guard. What should you ask?",
      "pt": "Uma pessoa está diante de duas portas. Uma leva ao castelo e a outra à morte. Um guarda diz sempre a verdade e o outro mente sempre. Só podes fazer uma pergunta a um deles. O que deves perguntar?",
      "de": "Eine Person steht vor zwei Türen. Eine führt zum Schloss, die andere in den Tod. Ein Wächter sagt immer die Wahrheit, der andere lügt immer. Du darfst nur eine Frage an einen Wächter stellen. Was fragst du?",
      "fr": "Une personne se tient devant deux portes. L’une mène au château, l’autre à la mort. Un garde dit toujours la vérité, l’autre ment toujours. Tu ne peux poser qu’une seule question à un seul garde. Que dois-tu demander ?"
    },
    "hints": [
      {
        "ru": "Задай вопрос не о том, что думает сам стражник, а о том, что сказал бы его напарник.",
        "en": "Задай вопрос не о том, что думает сам стражник, а о том, что сказал бы его напарник.",
        "es": "Задай вопрос не о том, что думает сам стражник, а о том, что сказал бы его напарник.",
        "pt": "Pergunta não o que o próprio guarda pensa, mas o que o seu companheiro diria.",
        "de": "Frage nicht, was der Wächter selbst denkt, sondern was sein Partner sagen würde.",
        "fr": "Ne demande pas ce que pense le garde lui-même, mais ce que répondrait son partenaire."
      },
      {
        "ru": "После ответа не выбирай названную дверь напрямую.",
        "en": "После ответа не выбирай названную дверь напрямую.",
        "es": "После ответа не выбирай названную дверь напрямую.",
        "pt": "Depois da resposta, não escolhas diretamente a porta indicada.",
        "de": "Wähle nach der Antwort nicht direkt die angezeigte Tür.",
        "fr": "Après la réponse, ne choisis pas directement la porte indiquée."
      }
    ],
    "answer": {
      "ru": "Ответ: нужно спросить любого стражника: «Если бы я спросил твоего напарника, какая дверь ведёт к спасению, на какую бы он указал?» Стражник укажет на неправильную дверь независимо от того, кому задан вопрос. Поэтому нужно выбрать противоположную дверь.",
      "en": "Ответ: нужно спросить любого стражника: «Если бы я спросил твоего напарника, какая дверь ведёт к спасению, на какую бы он указал?» Стражник укажет на неправильную дверь независимо от того, кому задан вопрос. Поэтому нужно выбрать противоположную дверь.",
      "es": "Ответ: нужно спросить любого стражника: «Если бы я спросил твоего напарника, какая дверь ведёт к спасению, на какую бы он указал?» Стражник укажет на неправильную дверь независимо от того, кому задан вопрос. Поэтому нужно выбрать противоположную дверь.",
      "pt": "Resposta: pergunta a qualquer guarda: “Se eu perguntasse ao teu companheiro qual porta leva à salvação, qual ele indicaria?”. O guarda apontará para a porta errada, independentemente de ser o verdadeiro ou o mentiroso. Portanto, escolhe a porta oposta.",
      "de": "Antwort: Frage einen beliebigen Wächter: „Wenn ich deinen Partner fragen würde, welche Tür zur Rettung führt, auf welche würde er zeigen?“ Der Wächter zeigt unabhängig davon auf die falsche Tür, ob er der Wahrheitsliebende oder der Lügner ist. Deshalb wählst du die andere Tür.",
      "fr": "Réponse : demande à n’importe quel garde : « Si je demandais à ton partenaire quelle porte mène au salut, laquelle indiquerait-il ? » Le garde indiquera la mauvaise porte, qu’il soit le véridique ou le menteur. Il faut donc choisir la porte opposée."
    },
    "difficulty": 3
  },
  {
    "riddle": {
      "ru": "Три мудреца сидят в комнате. На них надевают три колпака, выбранных случайным образом из пяти имеющихся: 3 чёрных и 2 белых. Каждый мудрец видит колпаки двух других, но не видит свой. Им запрещено общаться. Первого, затем второго, затем третьего спрашивают: «Знаешь ли ты цвет своего колпака?». Первые два отвечают: «Нет, не знаю». Третий отвечает: «Да, знаю». Какого цвета его колпак?",
      "en": "Three sages wear hats randomly chosen from five hats: three black and two white. Each sees the other two. The first says he does not know his color, the second also says he does not know, and the third says he knows. What color is the third hat?",
      "es": "Three sages wear hats randomly chosen from five hats: three black and two white. Each sees the other two. The first says he does not know his color, the second also says he does not know, and the third says he knows. What color is the third hat?",
      "pt": "Três sábios usam chapéus escolhidos entre cinco: três pretos e dois brancos. Cada um vê os dois outros. O primeiro diz que não sabe a cor do seu chapéu; o segundo também; o terceiro diz que sabe. Qual é a cor do chapéu do terceiro?",
      "de": "Drei Weise tragen Hüte, zufällig aus fünf ausgewählt: drei schwarze und zwei weiße. Jeder sieht die beiden anderen. Der Erste weiß seine Farbe nicht, der Zweite auch nicht, der Dritte sagt, er wisse sie. Welche Farbe hat der dritte Hut?",
      "fr": "Trois sages portent des chapeaux choisis parmi cinq : trois noirs et deux blancs. Chacun voit les deux autres. Le premier dit qu’il ne connaît pas sa couleur, le deuxième aussi, puis le troisième dit qu’il la connaît. De quelle couleur est le troisième chapeau ?"
    },
    "hints": [
      {
        "ru": "Сначала разберись, какую информацию даёт ответ первого мудреца «не знаю».",
        "en": "Сначала разберись, какую информацию даёт ответ первого мудреца «не знаю».",
        "es": "Сначала разберись, какую информацию даёт ответ первого мудреца «не знаю».",
        "pt": "Primeiro percebe que informação o “não sei” do primeiro sábio acrescenta.",
        "de": "Überlege zuerst, welche Information das „Ich weiß es nicht“ des ersten Weisen liefert.",
        "fr": "Commence par déterminer quelle information apporte le « je ne sais pas » du premier sage."
      },
      {
        "ru": "Затем используй тот же принцип с ответом второго мудреца и учти, что все слышат предыдущие ответы.",
        "en": "Затем используй тот же принцип с ответом второго мудреца и учти, что все слышат предыдущие ответы.",
        "es": "Затем используй тот же принцип с ответом второго мудреца и учти, что все слышат предыдущие ответы.",
        "pt": "Depois aplica o mesmo raciocínio à resposta do segundo, lembrando que todos ouviram o primeiro.",
        "de": "Wende denselben Gedanken auf die Antwort des zweiten an und bedenke, dass alle die erste Antwort gehört haben.",
        "fr": "Applique ensuite le même raisonnement à la réponse du deuxième, puisque tous ont entendu la première."
      }
    ],
    "answer": {
      "ru": "Ответ: третий мудрец точно носит чёрный колпак. Первый мудрец мог бы сразу узнать свой цвет только увидев два белых колпака. Его ответ «не знаю» означает, что среди второго и третьего нет двух белых. Второй мудрец слышит это. Если бы он увидел на третьем белый колпак и при этом сам был в белом, первый мудрец увидел бы два белых и знал бы свой цвет — но первый этого не знал. Поэтому, услышав ответ первого, второй при виде белого колпака на третьем смог бы вычислить свой чёрный. Но второй тоже отвечает «не знаю». Следовательно, третий не белый. Значит, на третьем чёрный колпак.",
      "en": "Ответ: третий мудрец точно носит чёрный колпак. Первый мудрец мог бы сразу узнать свой цвет только увидев два белых колпака. Его ответ «не знаю» означает, что среди второго и третьего нет двух белых. Второй мудрец слышит это. Если бы он увидел на третьем белый колпак и при этом сам был в белом, первый мудрец увидел бы два белых и знал бы свой цвет — но первый этого не знал. Поэтому, услышав ответ первого, второй при виде белого колпака на третьем смог бы вычислить свой чёрный. Но второй тоже отвечает «не знаю». Следовательно, третий не белый. Значит, на третьем чёрный колпак.",
      "es": "Ответ: третий мудрец точно носит чёрный колпак. Первый мудрец мог бы сразу узнать свой цвет только увидев два белых колпака. Его ответ «не знаю» означает, что среди второго и третьего нет двух белых. Второй мудрец слышит это. Если бы он увидел на третьем белый колпак и при этом сам был в белом, первый мудрец увидел бы два белых и знал бы свой цвет — но первый этого не знал. Поэтому, услышав ответ первого, второй при виде белого колпака на третьем смог бы вычислить свой чёрный. Но второй тоже отвечает «не знаю». Следовательно, третий не белый. Значит, на третьем чёрный колпак.",
      "pt": "Resposta: o terceiro chapéu é preto. Se o primeiro tivesse visto dois chapéus brancos, saberia imediatamente que o seu era preto. Como não soube, isso elimina a possibilidade de os outros dois serem ambos brancos. O segundo usa essa informação: se visse no terceiro um chapéu branco e o seu também fosse branco, o primeiro teria visto dois brancos e saberia a resposta. Como o segundo também diz que não sabe, o terceiro não pode ser branco. Logo, é preto.",
      "de": "Antwort: Der dritte Hut ist schwarz. Hätte der erste Weise zwei weiße Hüte gesehen, hätte er sofort gewusst, dass seiner schwarz ist. Weil er es nicht weiß, können die beiden anderen nicht beide weiß sein. Der zweite nutzt dieses Wissen: Würde er beim dritten einen weißen Hut sehen und selbst einen weißen tragen, hätte der erste zwei weiße gesehen und es gewusst. Da der zweite es ebenfalls nicht weiß, kann der dritte nicht weiß sein. Also ist er schwarz.",
      "fr": "Réponse : le troisième chapeau est noir. Si le premier sage avait vu deux chapeaux blancs, il aurait immédiatement su que le sien était noir. Comme il ne le sait pas, les deux autres ne peuvent pas être tous les deux blancs. Le deuxième utilise cette information : s’il voyait un chapeau blanc sur le troisième et avait lui-même un chapeau blanc, le premier aurait vu deux blancs et aurait connu sa couleur. Comme le deuxième ne sait toujours pas, le troisième ne peut pas être blanc. Il est donc noir."
    },
    "difficulty": 4
  },
  {
    "riddle": {
      "ru": "Пять пиратов нашли 100 золотых монет. Старший предлагает раздел. Все голосуют. Если «за» проголосует 50% или больше, план принимается; иначе автора выбрасывают за борт. Пираты хотят прежде всего остаться на корабле, затем получить больше денег, а при равенстве денег голосуют против из вредности. Какой план должен предложить первый пират, чтобы остаться и получить максимум?",
      "en": "Five pirates must divide 100 gold coins. The oldest proposes a plan. If at least 50% vote yes, it passes; otherwise the proposer is thrown overboard. Survival comes first, then money; if money is equal, a pirate votes no out of spite. What should the first pirate propose?",
      "es": "Five pirates must divide 100 gold coins. The oldest proposes a plan. If at least 50% vote yes, it passes; otherwise the proposer is thrown overboard. Survival comes first, then money; if money is equal, a pirate votes no out of spite. What should the first pirate propose?",
      "pt": "Cinco piratas devem dividir 100 moedas de ouro. O mais velho propõe um plano. Se pelo menos 50% votarem sim, o plano passa; caso contrário, o proponente é atirado ao mar. Sobrevivência vem primeiro, depois dinheiro; em caso de empate em dinheiro, votam contra por pura maldade. Que plano deve propor o primeiro pirata?",
      "de": "Fünf Piraten müssen 100 Goldmünzen teilen. Der Älteste schlägt einen Plan vor. Wenn mindestens 50 % zustimmen, wird er angenommen; sonst wird der Antragsteller über Bord geworfen. Überleben zählt zuerst, dann Geld; bei gleichem Geld stimmen sie aus Bosheit dagegen. Welchen Plan soll der erste Pirat vorschlagen?",
      "fr": "Cinq pirates doivent partager 100 pièces d’or. Le plus âgé propose un plan. S’il obtient au moins 50 % de oui, il est accepté ; sinon, le proposant est jeté par-dessus bord. La survie passe avant l’argent ; en cas d’égalité d’argent, ils votent non par méchanceté. Quel plan doit proposer le premier pirate ?"
    },
    "hints": [
      {
        "ru": "Решай задачу с конца: сначала выясни, что произойдёт при двух, затем трёх, затем четырёх пиратах.",
        "en": "Решай задачу с конца: сначала выясни, что произойдёт при двух, затем трёх, затем четырёх пиратах.",
        "es": "Решай задачу с конца: сначала выясни, что произойдёт при двух, затем трёх, затем четырёх пиратах.",
        "pt": "Resolve de trás para a frente: primeiro dois, depois três, depois quatro piratas.",
        "de": "Löse die Aufgabe rückwärts: zuerst zwei, dann drei, dann vier Piraten.",
        "fr": "Résous le problème à rebours : d’abord deux, puis trois, puis quatre pirates."
      },
      {
        "ru": "Чтобы купить голос, достаточно дать пирату на одну монету больше, чем он получит в следующем сценарии.",
        "en": "Чтобы купить голос, достаточно дать пирату на одну монету больше, чем он получит в следующем сценарии.",
        "es": "Чтобы купить голос, достаточно дать пирату на одну монету больше, чем он получит в следующем сценарии.",
        "pt": "Para comprar um voto, basta dar ao pirata uma moeda a mais do que ele receberia no cenário seguinte.",
        "de": "Um eine Stimme zu kaufen, genügt eine Münze mehr, als der Pirat im nächsten Szenario erhalten würde.",
        "fr": "Pour acheter un vote, il suffit de donner au pirate une pièce de plus que dans le scénario suivant."
      }
    ],
    "answer": {
      "ru": "Ответ: первый пират предлагает: себе — 98 монет, второму — 0, третьему — 1, четвёртому — 0, пятому — 1. За проголосуют первый, третий и пятый — 3 из 5, поэтому план проходит. Логика строится с конца: при двух пиратах четвёртый забирает всё; при трёх третий покупает голос пятого одной монетой; при четырёх второй покупает голос четвёртого одной монетой; значит, в исходной ситуации первый покупает голоса третьего и пятого по одной монете и получает 98.",
      "en": "Ответ: первый пират предлагает: себе — 98 монет, второму — 0, третьему — 1, четвёртому — 0, пятому — 1. За проголосуют первый, третий и пятый — 3 из 5, поэтому план проходит. Логика строится с конца: при двух пиратах четвёртый забирает всё; при трёх третий покупает голос пятого одной монетой; при четырёх второй покупает голос четвёртого одной монетой; значит, в исходной ситуации первый покупает голоса третьего и пятого по одной монете и получает 98.",
      "es": "Ответ: первый пират предлагает: себе — 98 монет, второму — 0, третьему — 1, четвёртому — 0, пятому — 1. За проголосуют первый, третий и пятый — 3 из 5, поэтому план проходит. Логика строится с конца: при двух пиратах четвёртый забирает всё; при трёх третий покупает голос пятого одной монетой; при четырёх второй покупает голос четвёртого одной монетой; значит, в исходной ситуации первый покупает голоса третьего и пятого по одной монете и получает 98.",
      "pt": "Resposta: o primeiro pirata oferece 98 moedas a si mesmo, 0 ao segundo, 1 ao terceiro, 0 ao quarto e 1 ao quinto. Votam a favor o primeiro, o terceiro e o quinto: 3 de 5. O plano passa. A lógica começa no fim: com dois piratas o quarto fica com tudo; com três, o terceiro compra o voto do quinto por uma moeda; com quatro, o segundo compra o voto do quarto por uma moeda. Assim, na situação inicial, o primeiro compra os votos do terceiro e do quinto por uma moeda cada e fica com 98.",
      "de": "Antwort: Der erste Pirat gibt sich 98 Münzen, dem zweiten 0, dem dritten 1, dem vierten 0 und dem fünften 1. Der erste, dritte und fünfte stimmen zu: 3 von 5. Der Plan besteht. Rückwärts gedacht: Mit zwei Piraten nimmt der Älteste alles; mit drei kauft der Dritte die Stimme des Fünften für eine Münze; mit vier kauft der Zweite die Stimme des Vierten für eine Münze. Daher kauft der erste Pirat in der Ausgangslage die Stimmen des dritten und fünften mit je einer Münze und behält 98.",
      "fr": "Réponse : le premier pirate se donne 98 pièces, donne 0 au deuxième, 1 au troisième, 0 au quatrième et 1 au cinquième. Les premier, troisième et cinquième votent oui : 3 sur 5. Le plan passe. On raisonne à rebours : à deux pirates, l’aîné prend tout ; à trois, le troisième achète le vote du cinquième pour une pièce ; à quatre, le deuxième achète le vote du quatrième pour une pièce. Ainsi, au départ, le premier achète les votes du troisième et du cinquième avec une pièce chacun et garde 98."
    },
    "difficulty": 5
  },
  {
    "riddle": {
      "ru": "Одна кувшинка удваивает площадь покрытия озера каждый день. Через 30 дней она покрывает всё озеро. А если кувшинок две, сколько дней им понадобится, чтобы покрыть то же озеро?",
      "en": "A lily doubles its covered area every day. After 30 days it covers the entire lake. If there are two lilies, how many days will they need?",
      "es": "A lily doubles its covered area every day. After 30 days it covers the entire lake. If there are two lilies, how many days will they need?",
      "pt": "Uma vitória-régia duplica a área coberta de um lago todos os dias. No 30.º dia cobre todo o lago. Se houver duas vitórias-régias, quantos dias serão necessários?",
      "de": "Eine Seerose verdoppelt jeden Tag die bedeckte Fläche eines Sees. Am 30. Tag ist der ganze See bedeckt. Wenn es zwei Seerosen gibt, wie viele Tage brauchen sie?",
      "fr": "Un nénuphar double chaque jour la surface couverte d’un lac. Au 30e jour, il couvre tout le lac. S’il y a deux nénuphars, combien de jours faut-il ?"
    },
    "hints": [
      {
        "ru": "Сравни количество покрытия за один день до полного заполнения.",
        "en": "Сравни количество покрытия за один день до полного заполнения.",
        "es": "Сравни количество покрытия за один день до полного заполнения.",
        "pt": "Compara a cobertura um dia antes de o lago ficar totalmente cheio.",
        "de": "Vergleiche die bedeckte Fläche am Tag vor der vollständigen Abdeckung.",
        "fr": "Compare la surface couverte un jour avant que le lac soit entièrement recouvert."
      },
      {
        "ru": "Две одинаковые кувшинки означают вдвое большую площадь на каждом этапе.",
        "en": "Две одинаковые кувшинки означают вдвое большую площадь на каждом этапе.",
        "es": "Две одинаковые кувшинки означают вдвое большую площадь на каждом этапе.",
        "pt": "Duas vitórias-régias significam o dobro da área em cada etapa.",
        "de": "Zwei Seerosen bedeuten in jeder Phase die doppelte Fläche.",
        "fr": "Deux nénuphars représentent à chaque étape deux fois la surface couverte."
      }
    ],
    "answer": {
      "ru": "Ответ: 29 дней. Если одна кувшинка покрывает всё озеро на 30-й день, то за день до этого она покрывает половину. Две кувшинки вдвое увеличивают покрываемую площадь, поэтому вместе они покроют всё озеро уже на 29-й день.",
      "en": "Ответ: 29 дней. Если одна кувшинка покрывает всё озеро на 30-й день, то за день до этого она покрывает половину. Две кувшинки вдвое увеличивают покрываемую площадь, поэтому вместе они покроют всё озеро уже на 29-й день.",
      "es": "Ответ: 29 дней. Если одна кувшинка покрывает всё озеро на 30-й день, то за день до этого она покрывает половину. Две кувшинки вдвое увеличивают покрываемую площадь, поэтому вместе они покроют всё озеро уже на 29-й день.",
      "pt": "Resposta: 29 dias. Se uma vitória-régia cobre o lago por completo no 30.º dia, no dia 29 cobre metade. Duas vitórias-régias cobrem o dobro dessa área, isto é, todo o lago.",
      "de": "Antwort: 29 Tage. Wenn eine Seerose am 30. Tag den ganzen See bedeckt, bedeckt sie am 29. Tag die Hälfte. Zwei Seerosen bedecken doppelt so viel und damit bereits den ganzen See am 29. Tag.",
      "fr": "Réponse : 29 jours. Si un nénuphar couvre tout le lac au 30e jour, il en couvre la moitié au 29e. Deux nénuphars couvrent alors le double, soit tout le lac dès le 29e jour."
    },
    "difficulty": 5
  },
  {
    "riddle": {
      "ru": "Есть три бога: A, B и C — боги истины, лжи и случая в произвольном порядке. Бог истины всегда говорит правду, бог лжи всегда обманывает, бог случая случайным образом говорит правду или ложь. Нужно определить богов за 3 вопроса, на которые можно ответить «да» или «нет». Каждый вопрос задаётся только одному богу, но одному богу можно задать несколько вопросов. Боги понимают язык, но отвечают словами «da» и «ja», причём неизвестно, какое слово означает «да», а какое «нет». Следующий вопрос может зависеть от предыдущего ответа. Бог случая отвечает случайно в зависимости от подбрасывания монетки. Нельзя задавать вопросы-парадоксы.",
      "en": "There are three gods A, B and C: Truth, Falsehood and Random in unknown order. Truth always tells the truth, Falsehood always lies, and Random answers truthfully or falsely according to a hidden coin toss. You must identify all three using three yes/no questions. Each question is asked to one god, and the next question may depend on the previous answer. The gods answer in an unknown language using the words da and ja, and you do not know which means yes. Paradoxical questions are forbidden.",
      "es": "There are three gods A, B and C: Truth, Falsehood and Random in unknown order. Truth always tells the truth, Falsehood always lies, and Random answers truthfully or falsely according to a hidden coin toss. You must identify all three using three yes/no questions. Each question is asked to one god, and the next question may depend on the previous answer. The gods answer in an unknown language using the words da and ja, and you do not know which means yes. Paradoxical questions are forbidden.",
      "pt": "Há três deuses: A, B e C — Verdade, Mentira e Acaso, em ordem desconhecida. Verdade diz sempre a verdade, Mentira mente sempre, e Acaso responde aleatoriamente de acordo com uma moeda escondida. Tens três perguntas de sim/não para descobrir todos. Podes fazer várias perguntas ao mesmo deus, e a próxima pergunta pode depender da resposta anterior. Eles respondem com “da” e “ja”, mas não sabes qual significa “sim”. Não podes fazer perguntas paradoxais.",
      "de": "Es gibt drei Götter A, B und C — Wahrheit, Lüge und Zufall in unbekannter Reihenfolge. Wahrheit sagt immer die Wahrheit, Lüge lügt immer, und Zufall antwortet zufällig nach einem verborgenen Münzwurf. Du hast drei Ja/Nein-Fragen, um alle drei zu bestimmen. Du darfst mehrere Fragen demselben Gott stellen, und die nächste Frage kann von der vorherigen Antwort abhängen. Sie antworten mit „da“ und „ja“, aber du weißt nicht, welches Wort „ja“ bedeutet. Paradoxe Fragen sind verboten.",
      "fr": "Il y a trois dieux A, B et C : Vérité, Mensonge et Hasard, dans un ordre inconnu. Vérité dit toujours vrai, Mensonge ment toujours et Hasard répond aléatoirement selon un pile ou face caché. Tu disposes de trois questions oui/non pour identifier les trois. Tu peux poser plusieurs questions au même dieu et la question suivante peut dépendre de la réponse précédente. Ils répondent par « da » et « ja », sans que tu saches lequel signifie « oui ». Les questions paradoxales sont interdites."
    },
    "hints": [
      {
        "ru": "Сначала нужно гарантированно найти бога, который не является богом случая.",
        "en": "Сначала нужно гарантированно найти бога, который не является богом случая.",
        "es": "Сначала нужно гарантированно найти бога, который не является богом случая.",
        "pt": "Não precisas de traduzir “ja” e “da” para resolver o problema.",
        "de": "Du musst „ja“ und „da“ nicht übersetzen, um das Problem zu lösen.",
        "fr": "Tu n’as pas besoin de traduire « ja » et « da » pour résoudre le problème."
      },
      {
        "ru": "У обычного бога используй вопрос о том, что он сказал бы на другой вопрос; это позволяет нейтрализовать неизвестное значение «da» и «ja».",
        "en": "У обычного бога используй вопрос о том, что он сказал бы на другой вопрос; это позволяет нейтрализовать неизвестное значение «da» и «ja».",
        "es": "У обычного бога используй вопрос о том, что он сказал бы на другой вопрос; это позволяет нейтрализовать неизвестное значение «da» и «ja».",
        "pt": "Não és obrigado a fazer uma pergunta a cada deus; podes concentrar duas ou três num só.",
        "de": "Du musst nicht jedem Gott eine Frage stellen; du kannst zwei oder sogar drei Fragen demselben Gott stellen.",
        "fr": "Tu n’es pas obligé de poser une question à chaque dieu ; tu peux en poser deux ou même trois au même dieu."
      },
      {
        "ru": "После того как найдёшь неслучайного бога, используй вопросы о том, что он ответил бы на другой вопрос — это снимает проблему с «da» и «ja».",
        "en": "Once you have a non-Random god, use questions about what that god would answer to another question; this neutralizes the unknown meaning of “da” and “ja”.",
        "es": "Cuando encuentres al dios que no es Aleatorio, usa preguntas sobre lo que respondería a otra pregunta; así neutralizas el significado desconocido de «da» y «ja».",
        "pt": "A segunda pergunta pode depender fortemente da resposta que recebeste à primeira.",
        "de": "Deine zweite Frage kann stark von der Antwort auf die erste abhängen.",
        "fr": "Ta deuxième question peut dépendre fortement de la réponse à la première."
      }
    ],
    "answer": {
      "ru": "Ответ: сначала нужно найти бога, который не является богом случая. Один из вариантов — спросить B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?» Если B отвечает «ja», то либо B — бог случая, либо A — бог случая; в обоих вариантах C не является богом случая. Если B отвечает «da», то либо B — бог случая, либо A не является богом случая; в обоих вариантах A не является богом случая. После этого у нас есть гарантированно неслучайный бог. Спросим его: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?» Для истины и лжи такой вложенный вопрос нейтрализует одновременно ложь и неизвестное значение слов: ответ «ja» указывает на ложь, «da» — на истину. Третьим вопросом у того же неслучайного бога спрашиваем: «Если я у тебя спрошу „Бог B — бог случая?“, ответишь ли ты „ja“?» Ответ определяет, является ли B богом случая; оставшийся бог определяется методом исключения. Важно, что вопросы сформулированы как обычные вопросы о поведении ответа и не являются парадоксами.",
      "en": "Ответ: сначала нужно найти бога, который не является богом случая. Один из вариантов — спросить B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?» Если B отвечает «ja», то либо B — бог случая, либо A — бог случая; в обоих вариантах C не является богом случая. Если B отвечает «da», то либо B — бог случая, либо A не является богом случая; в обоих вариантах A не является богом случая. После этого у нас есть гарантированно неслучайный бог. Спросим его: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?» Для истины и лжи такой вложенный вопрос нейтрализует одновременно ложь и неизвестное значение слов: ответ «ja» указывает на ложь, «da» — на истину. Третьим вопросом у того же неслучайного бога спрашиваем: «Если я у тебя спрошу „Бог B — бог случая?“, ответишь ли ты „ja“?» Ответ определяет, является ли B богом случая; оставшийся бог определяется методом исключения. Важно, что вопросы сформулированы как обычные вопросы о поведении ответа и не являются парадоксами.",
      "es": "Ответ: сначала нужно найти бога, который не является богом случая. Один из вариантов — спросить B: «Если я спрошу у тебя „Бог A — бог случая?“, ты ответишь „ja“?» Если B отвечает «ja», то либо B — бог случая, либо A — бог случая; в обоих вариантах C не является богом случая. Если B отвечает «da», то либо B — бог случая, либо A не является богом случая; в обоих вариантах A не является богом случая. После этого у нас есть гарантированно неслучайный бог. Спросим его: «Если я спрошу у тебя „Ты — бог лжи?“, ты ответишь „ja“?» Для истины и лжи такой вложенный вопрос нейтрализует одновременно ложь и неизвестное значение слов: ответ «ja» указывает на ложь, «da» — на истину. Третьим вопросом у того же неслучайного бога спрашиваем: «Если я у тебя спрошу „Бог B — бог случая?“, ответишь ли ты „ja“?» Ответ определяет, является ли B богом случая; оставшийся бог определяется методом исключения. Важно, что вопросы сформулированы как обычные вопросы о поведении ответа и не являются парадоксами.",
      "pt": "Resposta: começa por perguntar ao deus B: “Se eu te perguntasse ‘O deus A é o Deus do Acaso?’, responderias ‘ja’?”. Se B disser “ja”, então ou B é o Acaso ou A é o Acaso; em ambos os casos C não é o Acaso. Se B disser “da”, então ou B é o Acaso ou A não é o Acaso; em ambos os casos A não é o Acaso. Assim tens um deus garantidamente não aleatório. A esse deus pergunta: “Se eu te perguntasse ‘És o Deus da Mentira?’, responderias ‘ja’?”. Para Verdade e Mentira, essa pergunta aninhada neutraliza simultaneamente a mentira e a incerteza de “da/ja”: “ja” indica Mentira e “da” indica Verdade. Depois pergunta: “Se eu te perguntasse ‘B é o Deus do Acaso?’, responderias ‘ja’?”. Isso identifica B como Acaso ou, se a resposta for “da”, deixa o deus restante como Acaso. O papel final é determinado por eliminação.",
      "de": "Antwort: Frage zuerst Gott B: „Wenn ich dich fragen würde: ‚Ist Gott A der Zufallsgott?‘, würdest du ‚ja‘ sagen?“ Sagt B „ja“, dann ist entweder B selbst der Zufallsgott oder A ist der Zufallsgott; in beiden Fällen ist C sicher nicht der Zufallsgott. Sagt B „da“, dann ist entweder B der Zufallsgott oder A ist sicher nicht der Zufallsgott. Damit hast du einen sicheren, nicht zufälligen Gott. Frage diesen: „Wenn ich dich fragen würde: ‚Bist du der Gott der Lüge?‘, würdest du ‚ja‘ sagen?“ Bei Wahrheit und Lüge neutralisiert die verschachtelte Frage sowohl die Lüge als auch die Unsicherheit von „da/ja“: „ja“ bedeutet Lüge, „da“ Wahrheit. Stelle anschließend die Frage: „Wenn ich dich fragen würde: ‚Ist B der Zufallsgott?‘, würdest du ‚ja‘ sagen?“ Damit bestimmst du, ob B der Zufallsgott ist; der letzte Gott ergibt sich durch Ausschluss.",
      "fr": "Réponse : commence par demander au dieu B : « Si je te demandais “Le dieu A est-il le dieu du Hasard ?”, répondrais-tu “ja” ? » Si B répond « ja », alors soit B est le Hasard, soit A est le Hasard ; dans les deux cas, C n’est pas le Hasard. Si B répond « da », alors soit B est le Hasard, soit A n’est pas le Hasard ; dans les deux cas, A n’est pas le Hasard. Tu as donc un dieu garanti non aléatoire. Demande-lui : « Si je te demandais “Es-tu le dieu du Mensonge ?”, répondrais-tu “ja” ? » Pour Vérité et Mensonge, la question imbriquée neutralise à la fois le mensonge et l’inconnu “da/ja” : « ja » indique le Mensonge et « da » la Vérité. Enfin demande : « Si je te demandais “B est-il le dieu du Hasard ?”, répondrais-tu “ja” ? » Cela identifie B comme le Hasard ou, sinon, le dieu restant ; le dernier rôle est obtenu par élimination."
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
  overlay.classList.add('active');
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
  if (overlay) overlay.remove();
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
  overlay.classList.add('active');
}

function startDestinyQuiz() {
  localStorage.setItem('true_destiny', JSON.stringify({ currentQuestion: 0, scores: { mystic: 0, warrior: 0, sage: 0, trickster: 0, healer: 0, wanderer: 0, guardian: 0 }, completed: false }));
  const overlay = document.getElementById('destiny-overlay');
  overlay.classList.remove('active');
  overlay.remove();
  renderDestinyQuestion(0);
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
  if (overlay) overlay.remove();
}

// ============================================================
// МУДРОСТЬ СУДЬБЫ — 100 цитат, циклично, без номера
// ============================================================
const WISDOM_QUOTES = [
  { ru: "Судьба — это не то, что случается с тобой. Это то, как ты реагируешь.", en: "Fate is not what happens to you. It is how you react.", es: "El destino no es lo que te sucede. Es cómo reaccionas.", pt: "O destino não é o que acontece contigo. É a forma como reages.", de: "Das Schicksal ist nicht das, was dir widerfährt. Es ist, wie du darauf reagierst.", fr: "Le destin n’est pas ce qui t’arrive. C’est la façon dont tu réagis." },
  { ru: "Нить судьбы тонка, но неразрывна. Каждый узел — это выбор.", en: "The thread of fate is thin but unbreakable. Every knot is a choice.", es: "El hilo del destino es fino pero irrompible. Cada nudo es una elección.", pt: "O fio do destino é fino, mas inquebrável. Cada nó é uma escolha.", de: "Der Faden des Schicksals ist dünn, aber unzerreißbar. Jeder Knoten ist eine Entscheidung.", fr: "Le fil du destin est fin, mais incassable. Chaque nœud est un choix." },
  { ru: "Тот, кто боится судьбы, уже проиграл половину битвы.", en: "He who fears fate has already lost half the battle.", es: "Quien teme al destino ya ha perdido la mitad de la batalla.", pt: "Quem teme o destino já perdeu metade da batalha.", de: "Wer das Schicksal fürchtet, hat bereits die Hälfte des Kampfes verloren.", fr: "Celui qui craint le destin a déjà perdu la moitié du combat." },
  { ru: "Судьба не пишет сценарий — она лишь предлагает декорации.", en: "Fate does not write the script — it only offers the set.", es: "El destino no escribe el guion, solo ofrece el escenario.", pt: "O destino não escreve o roteiro — apenas oferece o cenário.", de: "Das Schicksal schreibt kein Drehbuch — es bietet nur die Kulisse.", fr: "Le destin n’écrit pas le scénario — il ne fait qu’offrir le décor." },
  { ru: "Путь, который ты выбираешь, становится твоей судьбой.", en: "The path you choose becomes your fate.", es: "El camino que eliges se convierte en tu destino.", pt: "O caminho que escolhes torna-se o teu destino.", de: "Der Weg, den du wählst, wird zu deinem Schicksal.", fr: "Le chemin que tu choisis devient ton destin." },
  { ru: "В каждой судьбе есть момент, когда весь мир замирает.", en: "In every fate there is a moment when the whole world stands still.", es: "En cada destino hay un momento en que el mundo entero se detiene.", pt: "Em todo destino há um momento em que o mundo inteiro fica imóvel.", de: "In jedem Schicksal gibt es einen Moment, in dem die ganze Welt stillsteht.", fr: "Dans chaque destin, il existe un moment où le monde entier s’arrête." },
  { ru: "Судьба любит тех, кто не ждет, а действует.", en: "Fate loves those who do not wait but act.", es: "El destino ama a quienes no esperan sino actúan.", pt: "O destino ama quem não espera, mas age.", de: "Das Schicksal liebt jene, die nicht warten, sondern handeln.", fr: "Le destin aime ceux qui n’attendent pas, mais agissent." },
  { ru: "Ты не можешь изменить ветер, но можешь направить паруса.", en: "You cannot change the wind, but you can adjust the sails.", es: "No puedes cambiar el viento, pero puedes ajustar las velas.", pt: "Não podes mudar o vento, mas podes ajustar as velas.", de: "Du kannst den Wind nicht ändern, aber du kannst die Segel ausrichten.", fr: "Tu ne peux pas changer le vent, mais tu peux ajuster les voiles." },
  { ru: "Каждый человек — кузнец своей судьбы.", en: "Every person is the smith of their own fate.", es: "Cada persona es el herrero de su propio destino.", pt: "Cada pessoa é o ferreiro do seu próprio destino.", de: "Jeder Mensch ist der Schmied seines eigenen Schicksals.", fr: "Chaque personne est le forgeron de son propre destin." },
  { ru: "Судьба — это зеркало. Что ты в него посылаешь, то и отражается.", en: "Fate is a mirror. What you send into it is what reflects back.", es: "El destino es un espejo. Lo que envías es lo que se refleja.", pt: "O destino é um espelho. O que envias para ele é o que se reflete de volta.", de: "Das Schicksal ist ein Spiegel. Was du hineinsendest, spiegelt sich zurück.", fr: "Le destin est un miroir. Ce que tu lui envoies se reflète en retour." },
  { ru: "Тайны судьбы раскрываются тем, кто задает правильные вопросы.", en: "The secrets of fate are revealed to those who ask the right questions.", es: "Los secretos del destino se revelan a quienes hacen las preguntas correctas.", pt: "Os segredos do destino revelam-se a quem faz as perguntas certas.", de: "Die Geheimnisse des Schicksals offenbaren sich denen, die die richtigen Fragen stellen.", fr: "Les secrets du destin se révèlent à ceux qui posent les bonnes questions." },
  { ru: "Нить жизни плетется из тысячи мелких решений.", en: "The thread of life is woven from a thousand small decisions.", es: "El hilo de la vida se teje de mil pequeñas decisiones.", pt: "O fio da vida é tecido com mil pequenas decisões.", de: "Der Faden des Lebens wird aus tausend kleinen Entscheidungen gewebt.", fr: "Le fil de la vie est tissé de mille petites décisions." },
  { ru: "Судьба не наказывает — она учит.", en: "Fate does not punish — it teaches.", es: "El destino no castiga, enseña.", pt: "O destino não castiga — ensina.", de: "Das Schicksal bestraft nicht — es lehrt.", fr: "Le destin ne punit pas — il enseigne." },
  { ru: "Великие судьбы рождаются из великих испытаний.", en: "Great fates are born from great trials.", es: "Los grandes destinos nacen de grandes pruebas.", pt: "Grandes destinos nascem de grandes provações.", de: "Große Schicksale entstehen aus großen Prüfungen.", fr: "Les grands destins naissent de grandes épreuves." },
  { ru: "Судьба — это не лотерея. Это шахматы.", en: "Fate is not a lottery. It is chess.", es: "El destino no es una lotería. Es ajedrez.", pt: "O destino não é uma lotaria. É xadrez.", de: "Das Schicksal ist keine Lotterie. Es ist Schach.", fr: "Le destin n’est pas une loterie. C’est un jeu d’échecs." },
  { ru: "Ты не можешь выбрать начало, но можешь выбрать конец.", en: "You cannot choose your beginning, but you can choose your end.", es: "No puedes elegir tu inicio, pero puedes elegir tu final.", pt: "Não podes escolher o teu começo, mas podes escolher o teu fim.", de: "Du kannst deinen Anfang nicht wählen, aber du kannst dein Ende wählen.", fr: "Tu ne peux pas choisir ton commencement, mais tu peux choisir ta fin." },
  { ru: "Судьба шепчет тем, кто умеет слушать тишину.", en: "Fate whispers to those who know how to listen to silence.", es: "El destino susurra a quienes saben escuchar el silencio.", pt: "O destino sussurra para quem sabe escutar o silêncio.", de: "Das Schicksal flüstert denen zu, die dem Schweigen zuhören können.", fr: "Le destin murmure à ceux qui savent écouter le silence." },
  { ru: "Каждый закат — напоминание: даже самый темный день заканчивается.", en: "Every sunset is a reminder: even the darkest day ends.", es: "Cada atardecer es un recordatorio: incluso el día más oscuro termina.", pt: "Cada pôr do sol lembra-nos: até o dia mais escuro termina.", de: "Jeder Sonnenuntergang erinnert daran: Auch der dunkelste Tag endet.", fr: "Chaque coucher de soleil rappelle que même le jour le plus sombre finit." },
  { ru: "Твоя судьба — это то, что ты пишешь своими руками.", en: "Your fate is what you write with your own hands.", es: "Tu destino es lo que escribes con tus propias manos.", pt: "O teu destino é aquilo que escreves com as tuas próprias mãos.", de: "Dein Schicksal ist das, was du mit deinen eigenen Händen schreibst.", fr: "Ton destin est ce que tu écris de tes propres mains." },
  { ru: "Самые красивые истории пишутся не пером, а кровью и потом.", en: "The most beautiful stories are written not with a quill, but with blood and sweat.", es: "Las historias más bellas no se escriben con pluma, sino con sangre y sudor.", pt: "As histórias mais belas não são escritas com uma pena, mas com sangue e suor.", de: "Die schönsten Geschichten werden nicht mit einer Feder, sondern mit Blut und Schweiß geschrieben.", fr: "Les plus belles histoires ne s’écrivent pas avec une plume, mais avec le sang et la sueur." },
  { ru: "Судьба не дает испытаний тем, кто не способен их пройти.", en: "Fate does not give trials to those unable to pass them.", es: "El destino no da pruebas a quienes no pueden superarlas.", pt: "O destino não dá provações a quem não consegue superá-las.", de: "Das Schicksal gibt keine Prüfungen, die man nicht bestehen kann.", fr: "Le destin ne donne pas d’épreuves à ceux qui sont incapables de les franchir." },
  { ru: "Ты — автор своей истории. Не позволяй другим писать за тебя.", en: "You are the author of your story. Do not let others write for you.", es: "Eres el autor de tu historia. No dejes que otros escriban por ti.", pt: "És o autor da tua história. Não deixes que outros escrevam por ti.", de: "Du bist der Autor deiner Geschichte. Lass andere nicht für dich schreiben.", fr: "Tu es l’auteur de ton histoire. Ne laisse pas les autres écrire à ta place." },
  { ru: "Каждый выбор — камень, брошенный в воду судьбы.", en: "Every choice is a stone thrown into the water of fate.", es: "Cada elección es una piedra arrojada al agua del destino.", pt: "Cada escolha é uma pedra lançada na água do destino.", de: "Jede Entscheidung ist ein Stein, der in das Wasser des Schicksals geworfen wird.", fr: "Chaque choix est une pierre jetée dans l’eau du destin." },
  { ru: "Судьба любит смелых, но бережет мудрых.", en: "Fate loves the bold, but protects the wise.", es: "El destino ama a los audaces, pero protege a los sabios.", pt: "O destino ama os corajosos, mas protege os sábios.", de: "Das Schicksal liebt die Mutigen, aber es schützt die Weisen.", fr: "Le destin aime les audacieux, mais protège les sages." },
  { ru: "Тот, кто ищет легкий путь, найдет лишь тупик.", en: "He who seeks the easy path will find only a dead end.", es: "Quien busca el camino fácil solo encontrará un callejón sin salida.", pt: "Quem procura o caminho fácil encontra apenas um beco sem saída.", de: "Wer den einfachen Weg sucht, findet nur eine Sackgasse.", fr: "Celui qui cherche le chemin facile ne trouve qu’une impasse." },
  { ru: "Великие души рождаются не в тишине, а в буре.", en: "Great souls are born not in silence, but in storm.", es: "Las grandes almas nacen no en el silencio, sino en la tormenta.", pt: "Grandes almas não nascem no silêncio, mas na tempestade.", de: "Große Seelen werden nicht in Stille geboren, sondern im Sturm.", fr: "Les grandes âmes naissent non dans le silence, mais dans la tempête." },
  { ru: "Судьба — это не проклятие. Это вызов.", en: "Fate is not a curse. It is a challenge.", es: "El destino no es una maldición. Es un desafío.", pt: "O destino não é uma maldição. É um desafio.", de: "Das Schicksal ist kein Fluch. Es ist eine Herausforderung.", fr: "Le destin n’est pas une malédiction. C’est un défi." },
  { ru: "Ты не можешь изменить прошлое, но можешь изменить его значение.", en: "You cannot change the past, but you can change its meaning.", es: "No puedes cambiar el pasado, pero puedes cambiar su significado.", pt: "Não podes mudar o passado, mas podes mudar o seu significado.", de: "Du kannst die Vergangenheit nicht ändern, aber ihre Bedeutung kannst du ändern.", fr: "Tu ne peux pas changer le passé, mais tu peux changer son sens." },
  { ru: "Каждый человек несет в себе искру божественного.", en: "Every person carries a spark of the divine.", es: "Cada persona lleva una chispa de lo divino.", pt: "Cada pessoa carrega uma centelha do divino.", de: "Jeder Mensch trägt einen Funken des Göttlichen in sich.", fr: "Chaque personne porte une étincelle du divin." },
  { ru: "Судьба не случайна. Она — результат миллиона выборов.", en: "Fate is not random. It is the result of a million choices.", es: "El destino no es azaroso. Es el resultado de un millón de elecciones.", pt: "O destino não é aleatório. É o resultado de um milhão de escolhas.", de: "Das Schicksal ist nicht zufällig. Es ist das Ergebnis einer Million Entscheidungen.", fr: "Le destin n’est pas aléatoire. Il est le résultat d’un million de choix." },
  { ru: "Тот, кто боится темноты, никогда не увидит звезд.", en: "He who fears darkness will never see the stars.", es: "Quien teme a la oscuridad nunca verá las estrellas.", pt: "Quem teme a escuridão nunca verá as estrelas.", de: "Wer die Dunkelheit fürchtet, wird die Sterne nie sehen.", fr: "Celui qui craint l’obscurité ne verra jamais les étoiles." },
  { ru: "Твоя история — это не то, что с тобой случилось. Это то, как ты об этом рассказываешь.", en: "Your story is not what happened to you. It is how you tell it.", es: "Tu historia no es lo que te sucedió. Es cómo lo cuentas.", pt: "A tua história não é o que te aconteceu. É a forma como a contas.", de: "Deine Geschichte ist nicht das, was dir passiert ist. Sie ist die Art, wie du sie erzählst.", fr: "Ton histoire n’est pas ce qui t’est arrivé. C’est la façon dont tu la racontes." },
  { ru: "Судьба — это река. Ты можешь плыть по течению или бороться с ним.", en: "Fate is a river. You can swim with the current or fight it.", es: "El destino es un río. Puedes nadar con la corriente o luchar contra ella.", pt: "O destino é um rio. Podes nadar com a corrente ou lutar contra ela.", de: "Das Schicksal ist ein Fluss. Du kannst mit der Strömung schwimmen oder gegen sie kämpfen.", fr: "Le destin est une rivière. Tu peux nager avec le courant ou le combattre." },
  { ru: "Каждый момент — это перекресток. Каждый выбор — это поворот.", en: "Every moment is a crossroads. Every choice is a turn.", es: "Cada momento es una encrucijada. Cada elección es un giro.", pt: "Cada momento é uma encruzilhada. Cada escolha é uma curva.", de: "Jeder Moment ist eine Wegkreuzung. Jede Entscheidung ist eine Abzweigung.", fr: "Chaque instant est un carrefour. Chaque choix est un tournant." },
  { ru: "Ты не можешь контролировать все, но можешь контролировать свою реакцию.", en: "You cannot control everything, but you can control your reaction.", es: "No puedes controlar todo, pero puedes controlar tu reacción.", pt: "Não podes controlar tudo, mas podes controlar a tua reação.", de: "Du kannst nicht alles kontrollieren, aber du kannst deine Reaktion kontrollieren.", fr: "Tu ne peux pas tout contrôler, mais tu peux contrôler ta réaction." },
  { ru: "Судьба щедра к тем, кто не жалеет себя.", en: "Fate is generous to those who do not spare themselves.", es: "El destino es generoso con quienes no se ahorran a sí mismos.", pt: "O destino é generoso com quem não se poupa.", de: "Das Schicksal ist großzügig zu denen, die sich nicht schonen.", fr: "Le destin est généreux envers ceux qui ne s’épargnent pas." },
  { ru: "Великие дела начинаются с маленьких шагов.", en: "Great deeds begin with small steps.", es: "Las grandes obras comienzan con pequeños pasos.", pt: "Grandes feitos começam com pequenos passos.", de: "Große Taten beginnen mit kleinen Schritten.", fr: "Les grandes actions commencent par de petits pas." },
  { ru: "Твоя судьба — это твоя ответственность.", en: "Your fate is your responsibility.", es: "Tu destino es tu responsabilidad.", pt: "O teu destino é a tua responsabilidade.", de: "Dein Schicksal ist deine Verantwortung.", fr: "Ton destin est ta responsabilité." },
  { ru: "Самые глубокие раны дают самую яркую мудрость.", en: "The deepest wounds give the brightest wisdom.", es: "Las heridas más profundas dan la sabiduría más brillante.", pt: "As feridas mais profundas trazem a sabedoria mais luminosa.", de: "Die tiefsten Wunden schenken die hellste Weisheit.", fr: "Les blessures les plus profondes donnent la sagesse la plus lumineuse." },
  { ru: "Судьба не спрашивает разрешения. Она просто случается.", en: "Fate does not ask permission. It simply happens.", es: "El destino no pide permiso. Simplemente sucede.", pt: "O destino não pede permissão. Simplesmente acontece.", de: "Das Schicksal bittet nicht um Erlaubnis. Es geschieht einfach.", fr: "Le destin ne demande pas la permission. Il arrive, tout simplement." },
  { ru: "Ты — единственный человек, который может изменить свою жизнь.", en: "You are the only person who can change your life.", es: "Eres la única persona que puede cambiar tu vida.", pt: "És a única pessoa que pode mudar a tua vida.", de: "Du bist die einzige Person, die dein Leben verändern kann.", fr: "Tu es la seule personne capable de changer ta vie." },
  { ru: "Каждый закат — это обещание нового рассвета.", en: "Every sunset is a promise of a new dawn.", es: "Cada atardecer es una promesa de un nuevo amanecer.", pt: "Cada pôr do sol é uma promessa de um novo amanhecer.", de: "Jeder Sonnenuntergang ist ein Versprechen auf eine neue Morgendämmerung.", fr: "Chaque coucher de soleil est une promesse d’une nouvelle aube." },
  { ru: "Судьба — это не наказание. Это возможность.", en: "Fate is not punishment. It is opportunity.", es: "El destino no es castigo. Es oportunidad.", pt: "O destino não é castigo. É oportunidade.", de: "Das Schicksal ist keine Strafe. Es ist eine Gelegenheit.", fr: "Le destin n’est pas une punition. C’est une occasion." },
  { ru: "Тот, кто ищет смысл, найдет его.", en: "He who seeks meaning will find it.", es: "Quien busca sentido lo encontrará.", pt: "Quem procura sentido encontra-o.", de: "Wer nach Sinn sucht, wird ihn finden.", fr: "Celui qui cherche un sens le trouvera." },
  { ru: "Твоя сила — не в том, чтобы никогда не падать, а в том, чтобы вставать.", en: "Your strength is not in never falling, but in rising every time.", es: "Tu fuerza no está en nunca caer, sino en levantarte cada vez.", pt: "A tua força não está em nunca cair, mas em levantar-te sempre.", de: "Deine Stärke liegt nicht darin, niemals zu fallen, sondern jedes Mal wieder aufzustehen.", fr: "Ta force n’est pas de ne jamais tomber, mais de te relever à chaque fois." },
  { ru: "Судьба любит тех, кто верит в себя.", en: "Fate loves those who believe in themselves.", es: "El destino ama a quienes creen en sí mismos.", pt: "O destino ama quem acredita em si mesmo.", de: "Das Schicksal liebt jene, die an sich selbst glauben.", fr: "Le destin aime ceux qui croient en eux-mêmes." },
  { ru: "Каждый человек — это книга.", en: "Every person is a book.", es: "Cada persona es un libro.", pt: "Cada pessoa é um livro.", de: "Jeder Mensch ist ein Buch.", fr: "Chaque personne est un livre." },
  { ru: "Ты не можешь выбрать свою семью, но можешь выбрать свою судьбу.", en: "You cannot choose your family, but you can choose your fate.", es: "No puedes elegir tu familia, pero puedes elegir tu destino.", pt: "Não podes escolher a tua família, mas podes escolher o teu destino.", de: "Du kannst deine Familie nicht wählen, aber du kannst dein Schicksal wählen.", fr: "Tu ne peux pas choisir ta famille, mais tu peux choisir ton destin." },
  { ru: "Судьба — это не то, что дано. Это то, что создано.", en: "Fate is not what is given. It is what is created.", es: "El destino no es lo que se da. Es lo que se crea.", pt: "O destino não é aquilo que é dado. É aquilo que é criado.", de: "Das Schicksal ist nicht das, was gegeben wird. Es ist das, was geschaffen wird.", fr: "Le destin n’est pas ce qui est donné. C’est ce qui est créé." },
  { ru: "Великие мечты требуют великих жертв.", en: "Great dreams require great sacrifices.", es: "Los grandes sueños requieren grandes sacrificios.", pt: "Grandes sonhos exigem grandes sacrifícios.", de: "Große Träume erfordern große Opfer.", fr: "Les grands rêves exigent de grands sacrifices." },
  { ru: "Твоя судьба — это твоя мечта, которую ты не осмелился осуществить.", en: "Your fate is the dream you dared not fulfill.", es: "Tu destino es el sueño que no te atreviste a cumplir.", pt: "O teu destino é o sonho que não ousaste realizar.", de: "Dein Schicksal ist der Traum, den du dich nicht zu erfüllen getraut hast.", fr: "Ton destin est le rêve que tu n’as pas osé réaliser." },
  { ru: "Судьба не ждет. Она приходит к тем, кто готов.", en: "Fate does not wait. It comes to those who are ready.", es: "El destino no espera. Viene a quienes están listos.", pt: "O destino não espera. Vem para quem está preparado.", de: "Das Schicksal wartet nicht. Es kommt zu denen, die bereit sind.", fr: "Le destin n’attend pas. Il vient à ceux qui sont prêts." },
  { ru: "Каждый выбор — это семя, которое ты сажаешь.", en: "Every choice is a seed you plant.", es: "Cada elección es una semilla que plantas.", pt: "Cada escolha é uma semente que plantas.", de: "Jede Entscheidung ist ein Samen, den du pflanzt.", fr: "Chaque choix est une graine que tu plantes." },
  { ru: "Ты — кузнец своей судьбы. Куй, пока железо горячо.", en: "You are the smith of your fate. Strike while the iron is hot.", es: "Eres el herrero de tu destino. Golpea mientras el hierro está caliente.", pt: "És o ferreiro do teu destino. Bate enquanto o ferro está quente.", de: "Du bist der Schmied deines Schicksals. Schlage zu, solange das Eisen heiß ist.", fr: "Tu es le forgeron de ton destin. Frappe tant que le fer est chaud." },
  { ru: "Судьба — это не случайность. Это закономерность.", en: "Fate is not chance. It is pattern.", es: "El destino no es azar. Es patrón.", pt: "O destino não é acaso. É padrão.", de: "Das Schicksal ist kein Zufall. Es ist ein Muster.", fr: "Le destin n’est pas le hasard. C’est un motif." },
  { ru: "Тот, кто не рискует, не пьет шампанского.", en: "He who does not risk does not drink champagne.", es: "Quien no arriesga no bebe champán.", pt: "Quem não arrisca não bebe champanhe.", de: "Wer nichts wagt, trinkt keinen Champagner.", fr: "Qui ne risque rien ne boit pas de champagne." },
  { ru: "Твоя история еще не закончена. Продолжай писать.", en: "Your story is not over. Keep writing.", es: "Tu historia no ha terminado. Sigue escribiendo.", pt: "A tua história não terminou. Continua a escrevê-la.", de: "Deine Geschichte ist noch nicht vorbei. Schreib weiter.", fr: "Ton histoire n’est pas terminée. Continue de l’écrire." },
  { ru: "Судьба — это зеркало твоих желаний.", en: "Fate is the mirror of your desires.", es: "El destino es el espejo de tus deseos.", pt: "O destino é o espelho dos teus desejos.", de: "Das Schicksal ist der Spiegel deiner Wünsche.", fr: "Le destin est le miroir de tes désirs." },
  { ru: "Каждый человек — это вселенная.", en: "Every person is a universe.", es: "Cada persona es un universo.", pt: "Cada pessoa é um universo.", de: "Jeder Mensch ist ein Universum.", fr: "Chaque personne est un univers." },
  { ru: "Ты не можешь изменить мир, но можешь изменить себя.", en: "You cannot change the world, but you can change yourself.", es: "No puedes cambiar el mundo, pero puedes cambiarte a ti mismo.", pt: "Não podes mudar o mundo, mas podes mudar a ti mesmo.", de: "Du kannst die Welt nicht verändern, aber du kannst dich selbst verändern.", fr: "Tu ne peux pas changer le monde, mais tu peux te changer toi-même." },
  { ru: "Судьба — это не проклятие. Это дар.", en: "Fate is not a curse. It is a gift.", es: "El destino no es una maldición. Es un regalo.", pt: "O destino não é uma maldição. É um presente.", de: "Das Schicksal ist kein Fluch. Es ist ein Geschenk.", fr: "Le destin n’est pas une malédiction. C’est un cadeau." },
  { ru: "Великие души не рождаются в комфорте.", en: "Great souls are not born in comfort.", es: "Las grandes almas no nacen en la comodidad.", pt: "Grandes almas não nascem no conforto.", de: "Große Seelen werden nicht im Komfort geboren.", fr: "Les grandes âmes ne naissent pas dans le confort." },
  { ru: "Твоя судьба — это твоя отвага.", en: "Your fate is your courage.", es: "Tu destino es tu coraje.", pt: "O teu destino é a tua coragem.", de: "Dein Schicksal ist dein Mut.", fr: "Ton destin est ton courage." },
  { ru: "Судьба не спрашивает, готов ли ты.", en: "Fate does not ask if you are ready.", es: "El destino no pregunta si estás listo.", pt: "O destino não pergunta se estás pronto.", de: "Das Schicksal fragt nicht, ob du bereit bist.", fr: "Le destin ne demande pas si tu es prêt." },
  { ru: "Каждый момент — это возможность начать заново.", en: "Every moment is a chance to start anew.", es: "Cada momento es una oportunidad para empezar de nuevo.", pt: "Cada momento é uma oportunidade para começar de novo.", de: "Jeder Moment ist eine Chance für einen Neuanfang.", fr: "Chaque instant est une chance de recommencer." },
  { ru: "Ты — автор своей судьбы. Не позволяй другим редактировать.", en: "You are the author of your fate. Do not let others edit it.", es: "Eres el autor de tu destino. No dejes que otros lo editen.", pt: "És o autor do teu destino. Não deixes que outros o editem.", de: "Du bist der Autor deines Schicksals. Lass andere es nicht bearbeiten.", fr: "Tu es l’auteur de ton destin. Ne laisse pas les autres le réécrire." },
  { ru: "Судьба — это не то, что случается. Это то, что ты делаешь.", en: "Fate is not what happens. It is what you do.", es: "El destino no es lo que sucede. Es lo que haces.", pt: "O destino não é o que acontece. É o que fazes.", de: "Das Schicksal ist nicht das, was geschieht. Es ist das, was du tust.", fr: "Le destin n’est pas ce qui arrive. C’est ce que tu fais." },
  { ru: "Тот, кто ищет легких путей, никогда не найдет великих.", en: "He who seeks easy paths will never find great ones.", es: "Quien busca caminos fáciles nunca encontrará los grandes.", pt: "Quem procura caminhos fáceis nunca encontra os grandes.", de: "Wer leichte Wege sucht, wird niemals große Wege finden.", fr: "Celui qui cherche les chemins faciles ne trouvera jamais les grands." },
  { ru: "Твоя сила — в твоей уязвимости.", en: "Your strength is in your vulnerability.", es: "Tu fuerza está en tu vulnerabilidad.", pt: "A tua força está na tua vulnerabilidade.", de: "Deine Stärke liegt in deiner Verletzlichkeit.", fr: "Ta force est dans ta vulnérabilité." },
  { ru: "Судьба — это не случайность. Это выбор.", en: "Fate is not chance. It is choice.", es: "El destino no es azar. Es elección.", pt: "O destino não é acaso. É escolha.", de: "Das Schicksal ist kein Zufall. Es ist eine Entscheidung.", fr: "Le destin n’est pas le hasard. C’est un choix." },
  { ru: "Каждый человек — это звезда.", en: "Every person is a star.", es: "Cada persona es una estrella.", pt: "Cada pessoa é uma estrela.", de: "Jeder Mensch ist ein Stern.", fr: "Chaque personne est une étoile." },
  { ru: "Ты не можешь контролировать ветер, но можешь контролировать свой курс.", en: "You cannot control the wind, but you can control your course.", es: "No puedes controlar el viento, pero puedes controlar tu rumbo.", pt: "Não podes controlar o vento, mas podes controlar o teu rumo.", de: "Du kannst den Wind nicht kontrollieren, aber du kannst deinen Kurs kontrollieren.", fr: "Tu ne peux pas contrôler le vent, mais tu peux contrôler ton cap." },
  { ru: "Судьба — это не проклятие. Это вызов.", en: "Fate is not a curse. It is a call.", es: "El destino no es una maldición. Es una llamada.", pt: "O destino não é uma maldição. É um chamado.", de: "Das Schicksal ist kein Fluch. Es ist ein Ruf.", fr: "Le destin n’est pas une malédiction. C’est un appel." },
  { ru: "Великие дела требуют великой веры.", en: "Great deeds require great faith.", es: "Las grandes obras requieren gran fe.", pt: "Grandes feitos exigem grande fé.", de: "Große Taten erfordern großen Glauben.", fr: "Les grandes actions exigent une grande foi." },
  { ru: "Твоя судьба — это твоя мудрость.", en: "Your fate is your wisdom.", es: "Tu destino es tu sabiduría.", pt: "A tua sorte é a tua sabedoria.", de: "Dein Schicksal ist deine Weisheit.", fr: "Ton destin est ta sagesse." },
  { ru: "Судьба не щадит никого. Но и не обделяет никого.", en: "Fate spares no one. But it also shortchanges no one.", es: "El destino no perdona a nadie. Pero tampoco defrauda a nadie.", pt: "O destino não poupa ninguém. Mas também não deixa ninguém de lado.", de: "Das Schicksal verschont niemanden. Aber es benachteiligt auch niemanden.", fr: "Le destin n’épargne personne. Mais il ne lèse personne non plus." },
  { ru: "Каждый выбор — это камень в фундамент твоей судьбы.", en: "Every choice is a stone in the foundation of your fate.", es: "Cada elección es una piedra en el fundamento de tu destino.", pt: "Cada escolha é uma pedra na fundação do teu destino.", de: "Jede Entscheidung ist ein Stein im Fundament deines Schicksals.", fr: "Chaque choix est une pierre dans les fondations de ton destin." },
  { ru: "Ты — кузнец своей судьбы. Куй с умом.", en: "You are the smith of your fate. Forge wisely.", es: "Eres el herrero de tu destino. Forja con sabiduría.", pt: "És o ferreiro do teu destino. Forja com sabedoria.", de: "Du bist der Schmied deines Schicksals. Schmiede weise.", fr: "Tu es le forgeron de ton destin. Forge avec sagesse." },
  { ru: "Судьба — это не случайность. Это закон.", en: "Fate is not chance. It is law.", es: "El destino no es azar. Es ley.", pt: "O destino não é acaso. É lei.", de: "Das Schicksal ist kein Zufall. Es ist Gesetz.", fr: "Le destin n’est pas le hasard. C’est la loi." },
  { ru: "Тот, кто не верит в чудеса, никогда их не увидит.", en: "He who does not believe in miracles will never see them.", es: "Quien no cree en milagros nunca los verá.", pt: "Quem não acredita em milagres nunca os verá.", de: "Wer nicht an Wunder glaubt, wird sie niemals sehen.", fr: "Celui qui ne croit pas aux miracles ne les verra jamais." },
  { ru: "Твоя история — это твоя сила.", en: "Your story is your strength.", es: "Tu historia es tu fuerza.", pt: "A tua história é a tua força.", de: "Deine Geschichte ist deine Stärke.", fr: "Ton histoire est ta force." },
  { ru: "Судьба — это не то, что дано. Это то, что взято.", en: "Fate is not what is given. It is what is taken.", es: "El destino no es lo que se da. Es lo que se toma.", pt: "O destino não é o que nos é dado. É o que conquistamos.", de: "Das Schicksal ist nicht das, was gegeben wird. Es ist das, was genommen wird.", fr: "Le destin n’est pas ce qui est donné. C’est ce qui est pris." },
  { ru: "Великие мечты рождаются в великих сердцах.", en: "Great dreams are born in great hearts.", es: "Los grandes sueños nacen en grandes corazones.", pt: "Grandes sonhos nascem em grandes corações.", de: "Große Träume werden in großen Herzen geboren.", fr: "Les grands rêves naissent dans les grands cœurs." },
  { ru: "Твоя судьба — это твоя любовь.", en: "Your fate is your love.", es: "Tu destino es tu amor.", pt: "O teu destino é o teu amor.", de: "Dein Schicksal ist deine Liebe.", fr: "Ton destin est ton amour." },
  { ru: "Судьба не ждет. Она идет.", en: "Fate does not wait. It moves.", es: "El destino no espera. Avanza.", pt: "O destino não espera. Ele move-se.", de: "Das Schicksal wartet nicht. Es bewegt sich.", fr: "Le destin n’attend pas. Il avance." },
  { ru: "Каждый момент — это дар. Не трать его впустую.", en: "Every moment is a gift. Do not waste it.", es: "Cada momento es un regalo. No lo desperdicies.", pt: "Cada momento é um presente. Não o desperdices.", de: "Jeder Moment ist ein Geschenk. Verschwende ihn nicht.", fr: "Chaque instant est un cadeau. Ne le gaspille pas." },
  { ru: "Ты — автор своей жизни. Пиши красиво.", en: "You are the author of your life. Write beautifully.", es: "Eres el autor de tu vida. Escribe bellamente.", pt: "És o autor da tua vida. Escreve-a com beleza.", de: "Du bist der Autor deines Lebens. Schreib es schön.", fr: "Tu es l’auteur de ta vie. Écris-la avec beauté." },
  { ru: "Судьба — это не проклятие. Это возможность.", en: "Fate is not a curse. It is opportunity.", es: "El destino no es una maldición. Es oportunidad.", pt: "O destino não é uma maldição. É uma oportunidade.", de: "Das Schicksal ist kein Fluch. Es ist eine Gelegenheit.", fr: "Le destin n’est pas une malédiction. C’est une occasion." },
  { ru: "Тот, кто ищет правду, найдет ее.", en: "He who seeks truth will find it.", es: "Quien busca la verdad la encontrará.", pt: "Quem procura a verdade encontra-a.", de: "Wer die Wahrheit sucht, wird sie finden.", fr: "Celui qui cherche la vérité la trouvera." },
  { ru: "Твоя сила — в твоей истине.", en: "Your strength is in your truth.", es: "Tu fuerza está en tu verdad.", pt: "A tua força está na tua verdade.", de: "Deine Stärke liegt in deiner Wahrheit.", fr: "Ta force est dans ta vérité." },
  { ru: "Судьба — это не случайность. Это путь.", en: "Fate is not chance. It is path.", es: "El destino no es azar. Es camino.", pt: "O destino não é acaso. É caminho.", de: "Das Schicksal ist kein Zufall. Es ist ein Weg.", fr: "Le destin n’est pas le hasard. C’est un chemin." },
  { ru: "Каждый человек — это загадка. Разгадай свою.", en: "Every person is a riddle. Solve yours.", es: "Cada persona es un acertijo. Resuelve el tuyo.", pt: "Cada pessoa é um enigma. Resolve o teu.", de: "Jeder Mensch ist ein Rätsel. Löse deines.", fr: "Chaque personne est une énigme. Résous la tienne." },
  { ru: "Ты не можешь изменить прошлое, но можешь изменить будущее.", en: "You cannot change the past, but you can change the future.", es: "No puedes cambiar el pasado, pero puedes cambiar el futuro.", pt: "Não podes mudar o passado, mas podes mudar o futuro.", de: "Du kannst die Vergangenheit nicht ändern, aber du kannst die Zukunft ändern.", fr: "Tu ne peux pas changer le passé, mais tu peux changer l’avenir." },
  { ru: "Судьба — это не проклятие. Это приключение.", en: "Fate is not a curse. It is adventure.", es: "El destino no es una maldición. Es aventura.", pt: "O destino não é uma maldição. É uma aventura.", de: "Das Schicksal ist kein Fluch. Es ist ein Abenteuer.", fr: "Le destin n’est pas une malédiction. C’est une aventure." },
  { ru: "Великие души не ищут легких путей.", en: "Great souls do not seek easy paths.", es: "Las grandes almas no buscan caminos fáciles.", pt: "Grandes almas não procuram caminhos fáceis.", de: "Große Seelen suchen keine leichten Wege.", fr: "Les grandes âmes ne cherchent pas les chemins faciles." },
  { ru: "Твоя судьба — это твоя отвага.", en: "Your fate is your bravery.", es: "Tu destino es tu valentía.", pt: "O teu destino é a tua bravura.", de: "Dein Schicksal ist deine Tapferkeit.", fr: "Ton destin est ta bravoure." },
  { ru: "Судьба не спрашивает. Она решает.", en: "Fate does not ask. It decides.", es: "El destino no pregunta. Decide.", pt: "O destino não pergunta. Decide.", de: "Das Schicksal fragt nicht. Es entscheidet.", fr: "Le destin ne demande pas. Il décide." },
  { ru: "Каждый выбор — это шаг. Делай его уверенно.", en: "Every choice is a step. Take it confidently.", es: "Cada elección es un paso. Dalo con confianza.", pt: "Cada escolha é um passo. Dá-o com confiança.", de: "Jede Entscheidung ist ein Schritt. Geh ihn mit Zuversicht.", fr: "Chaque choix est un pas. Fais-le avec confiance." },
  { ru: "Ты — кузнец своей судьбы. Куй с любовью.", en: "You are the smith of your fate. Forge with love.", es: "Eres el herrero de tu destino. Forja con amor.", pt: "És o ferreiro do teu destino. Forja com amor.", de: "Du bist der Schmied deines Schicksals. Schmiede mit Liebe.", fr: "Tu es le forgeron de ton destin. Forge avec amour." },
  { ru: "Судьба — это не случайность. Это судьба.", en: "Fate is not chance. It is destiny.", es: "El destino no es azar. Es destino.", pt: "O destino não é acaso. É destino.", de: "Das Schicksal ist kein Zufall. Es ist Bestimmung.", fr: "Le destin n’est pas le hasard. C’est la destinée." },
  { ru: "Тот, кто верит в себя, уже на полпути к цели.", en: "He who believes in himself is already halfway to the goal.", es: "Quien cree en sí mismo ya está a mitad de camino hacia la meta.", pt: "Quem acredita em si mesmo já está a meio caminho da meta.", de: "Wer an sich selbst glaubt, ist bereits auf halbem Weg zum Ziel.", fr: "Celui qui croit en lui-même est déjà à mi-chemin du but." },
  { ru: "Твоя история — это твоя магия.", en: "Your story is your magic.", es: "Tu historia es tu magia.", pt: "A tua história é a tua magia.", de: "Deine Geschichte ist deine Magie.", fr: "Ton histoire est ta magie." },
  { ru: "Судьба — это не то, что дано. Это то, что создано любовью.", en: "Fate is not what is given. It is what is created with love.", es: "El destino no es lo que se da. Es lo que se crea con amor.", pt: "O destino não é aquilo que recebemos. É aquilo que criamos com amor.", de: "Das Schicksal ist nicht das, was gegeben wird. Es ist das, was mit Liebe geschaffen wird.", fr: "Le destin n’est pas ce qui est donné. C’est ce qui est créé avec amour." },
  { ru: "Великие дела начинаются с великой веры.", en: "Great deeds begin with great faith.", es: "Las grandes obras comienzan con gran fe.", pt: "Grandes feitos começam com grande fé.", de: "Große Taten beginnen mit großem Glauben.", fr: "Les grandes actions commencent par une grande foi." },
  { ru: "Твоя судьба — это твоя надежда.", en: "Your fate is your hope.", es: "Tu destino es tu esperanza.", pt: "O teu destino é a tua esperança.", de: "Dein Schicksal ist deine Hoffnung.", fr: "Ton destin est ton espoir." },
  { ru: "Судьба не ждет. Она творится.", en: "Fate does not wait. It is forged.", es: "El destino no espera. Se forja.", pt: "O destino não espera. É forjado.", de: "Das Schicksal wartet nicht. Es wird geschmiedet.", fr: "Le destin n’attend pas. Il se forge." },
  { ru: "Каждый момент — это вечность. Живи ее полностью.", en: "Every moment is eternity. Live it fully.", es: "Cada momento es eternidad. Vívelo plenamente.", pt: "Cada momento é eternidade. Vive-o plenamente.", de: "Jeder Moment ist Ewigkeit. Lebe ihn ganz.", fr: "Chaque instant est éternité. Vis-le pleinement." },
  { ru: "Ты — автор своей судьбы. Пиши шедевр.", en: "You are the author of your fate. Write a masterpiece.", es: "Eres el autor de tu destino. Escribe una obra maestra.", pt: "És o autor do teu destino. Escreve uma obra-prima.", de: "Du bist der Autor deines Schicksals. Schreib ein Meisterwerk.", fr: "Tu es l’auteur de ton destin. Écris un chef-d’œuvre." }
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
  if (overlay) overlay.remove();
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
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="author-card legal-author-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-legal-text">${authorLegal[currentLang]||authorLegal.en}</div><button class="author-channel-btn" onclick="showAuthorConfirm()">${authorContinue[currentLang]||authorContinue.en}</button></div>`;
    document.body.appendChild(overlay);
  };
  window.showAuthorConfirm=function(){
    document.querySelector('.fate-overlay')?.remove(); const overlay=document.createElement('div'); overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="this.closest('.fate-overlay').remove()">&times;</button><div class="author-card legal-confirm-card"><div class="author-title">${t('becomeAuthor')}</div><div class="author-legal-text">${authorConfirm[currentLang]||authorConfirm.en}</div><a class="author-channel-btn" href="${DIRECT_URL}" target="_blank" rel="noopener">${authorAgree[currentLang]||authorAgree.en}</a></div>`;
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
    const arch=miniArchetype(d,choice); const labels=miniByChoice[currentLang]||miniByChoice.en;
    const chosen=choice==='a'?labels.a:choice==='b'?labels.b:labels.c;
    const risk=currentLang==='ru'?(choice==='a'?'Минус: иногда можно слишком долго считать выгоду.':choice==='b'?'Минус: удобство иногда заставляет откладывать сложное.':'Минус: взгляд далеко вперёд может отодвинуть решение сейчас.'):(choice==='a'?'Downside: you may spend too long calculating the benefit.':choice==='b'?'Downside: convenience can sometimes delay difficult action.':'Downside: looking far ahead can delay the decision in front of you.');
    return `<div class="fate-mini-block"><strong>🎭 2. ${currentLang==='ru'?'Мини-архетип':'Mini-archetype'}</strong><div>${arch[currentLang]||arch.en}</div></div><div class="fate-mini-block"><strong>⚖️ 3. ${currentLang==='ru'?'Быстрый разбор плюсов и минусов':'Quick pros & cons'}</strong><div>${chosen}</div><div>${risk}</div></div>`;
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


const CHRONICLE_ARCHETYPES_10 = {
  ru:[['Лидер решений','Ты берёшь ответственность и предпочитаешь влиять на ход событий.'],['Тихий стратег','Ты наблюдаешь, просчитываешь и действуешь без лишнего шума.'],['Чуткий союзник','Ты хорошо замечаешь чувства других и умеешь поддержать.'],['Свободный исследователь','Тебе важно пробовать новое и сохранять собственный путь.'],['Надёжный реалист','Ты ценишь то, что работает в настоящей жизни и даёт результат.'],['Идейный создатель','Тебя притягивают новые замыслы, необычные решения и творчество.'],['Миротворец','Ты чаще ищешь баланс и пытаешься сохранить отношения.'],['Смелый экспериментатор','Ты не боишься менять привычный порядок и проверять себя.'],['Вдумчивый наблюдатель','Ты замечаешь детали и редко делаешь выводы поспешно.'],['Практичный оптимист','Ты ищешь решение, в котором есть и смысл, и возможность двигаться дальше.']],
  en:[['Decision Leader','You take responsibility and prefer to influence how things unfold.'],['Quiet Strategist','You observe, calculate, and act without unnecessary noise.'],['Attentive Ally','You notice other people’s feelings and know how to support them.'],['Independent Explorer','You value trying new things while keeping your own path.'],['Grounded Realist','You value what works in everyday life and produces results.'],['Idea Maker','New concepts, unusual solutions, and creativity attract you.'],['Peacemaker','You often look for balance and try to protect relationships.'],['Bold Experimenter','You are willing to change the usual order and test yourself.'],['Thoughtful Observer','You notice details and rarely rush to judgment.'],['Practical Optimist','You look for a solution that makes sense and keeps you moving forward.']],
  es:[['Líder de decisiones','Asumes responsabilidades y prefieres influir en el rumbo de las cosas.'],['Estratega sereno','Observas, calculas y actúas sin hacer ruido innecesario.'],['Aliado atento','Percibes las emociones de otros y sabes apoyar.'],['Explorador independiente','Te gusta probar cosas nuevas sin perder tu propio camino.'],['Realista práctico','Valoras lo que funciona en la vida diaria y da resultados.'],['Creador de ideas','Te atraen las ideas nuevas, las soluciones distintas y la creatividad.'],['Mediador','Sueles buscar equilibrio y proteger las relaciones.'],['Experimentador valiente','No temes cambiar lo habitual y ponerte a prueba.'],['Observador reflexivo','Notas los detalles y rara vez juzgas con prisa.'],['Optimista práctico','Buscas soluciones con sentido que te permitan seguir avanzando.']],
  pt:[['Líder de decisões','Assumes responsabilidades e preferes influenciar o rumo das coisas.'],['Estratega tranquilo','Observas, calculas e ages sem ruído desnecessário.'],['Aliado atento','Percebes as emoções dos outros e sabes apoiar.'],['Explorador independente','Gostas de experimentar sem perder o teu próprio caminho.'],['Realista prático','Valorizas o que funciona no dia a dia e dá resultados.'],['Criador de ideias','Atraem-te ideias novas, soluções diferentes e criatividade.'],['Mediador','Costumas procurar equilíbrio e proteger as relações.'],['Experimentador corajoso','Não receias mudar o habitual e testar-te.'],['Observador ponderado','Reparas nos detalhes e raramente julgas com pressa.'],['Otimista prático','Procuras soluções com sentido que te façam avançar.']],
  de:[['Entscheidungsführer','Du übernimmst Verantwortung und gestaltest gern den Verlauf.'],['Ruhiger Stratege','Du beobachtest, planst und handelst ohne unnötiges Aufsehen.'],['Aufmerksamer Verbündeter','Du bemerkst Gefühle anderer und kannst gut unterstützen.'],['Unabhängiger Entdecker','Du probierst Neues und bewahrst dabei deinen eigenen Weg.'],['Praktischer Realist','Du schätzt, was im Alltag funktioniert und Ergebnisse bringt.'],['Ideenentwickler','Neue Gedanken, ungewöhnliche Lösungen und Kreativität reizen dich.'],['Vermittler','Du suchst oft Balance und schützt Beziehungen.'],['Mutiger Experimentierer','Du hast keine Angst, Gewohntes zu verändern und dich zu testen.'],['Bedachter Beobachter','Du achtest auf Details und urteilst selten vorschnell.'],['Praktischer Optimist','Du suchst sinnvolle Lösungen, die dich weiterbringen.']],
  fr:[['Leader des décisions','Tu assumes tes responsabilités et aimes influencer la suite des choses.'],['Stratège discret','Tu observes, réfléchis et agis sans bruit inutile.'],['Allié attentif','Tu remarques les émotions des autres et sais soutenir.'],['Explorateur indépendant','Tu aimes essayer de nouvelles choses tout en gardant ton propre chemin.'],['Réaliste pratique','Tu apprécies ce qui fonctionne au quotidien et produit des résultats.'],['Créateur d’idées','Les idées nouvelles, les solutions originales et la créativité t’attirent.'],['Médiateur','Tu recherches souvent l’équilibre et protèges les relations.'],['Expérimentateur audacieux','Tu n’hésites pas à changer les habitudes et à te mettre à l’épreuve.'],['Observateur réfléchi','Tu remarques les détails et juges rarement trop vite.'],['Optimiste pratique','Tu cherches des solutions cohérentes qui te permettent d’avancer.']]
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


/* ===== FINAL LOCALIZATION SAFETY PATCH ===== */
(function(){
  const LANGS=['ru','en','es','pt','de','fr'];
  function fillLocales(value){
    if(!value || typeof value!=='object' || Array.isArray(value)) return;
    // Do not copy one language into another. Missing translations stay explicit
    // so the selected language can never silently become English.
    if('ru' in value || 'en' in value || 'es' in value || 'pt' in value || 'de' in value || 'fr' in value){ return; }
    for(const v of Object.values(value)) fillLocales(v);
  }
  function normalizeCollections(){
    if(typeof WISDOM_QUOTES!=='undefined') WISDOM_QUOTES.forEach(fillLocales);
    if(typeof LABYRINTH_RIDDLES!=='undefined') LABYRINTH_RIDDLES.forEach(fillLocales);
    if(typeof FATE_DILEMMAS!=='undefined') FATE_DILEMMAS.forEach(fillLocales);
    if(typeof DESTINY_TITLES!=='undefined') Object.values(DESTINY_TITLES).forEach(fillLocales);
  }
  try{normalizeCollections();}catch(e){console.warn('Localization normalization skipped:',e);}
})();

/* ===== v4.1.4 requested final adjustments ===== */
(function(){
  // Language row: move the planet icon + "Language" label exactly 2mm lower.
  const style=document.createElement('style');
  style.textContent='.language-setting .settings-item-left{transform:translateY(4.622px)!important;}';
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

  // Keep Chronicle analysis strictly to a short, choice-specific paragraph.
  if(typeof fateAnalysis==='function'){
    window.__shortFateAnalysis = fateAnalysis;
    fateAnalysis = function(d,choice){
      const text=(d.analysis && (d.analysis[currentLang]||d.analysis.en||d.analysis.ru)) || '';
      const cleaned=text.replace(/🎭[^<]*|⚖️[^<]*/g,'').trim();
      const choiceText=loc(d[choice]);
      const custom={
        ru:`Ты выбрал «${choiceText}». ${cleaned||'Этот выбор показывает твою естественную реакцию на подобные обстоятельства.'}`,
        en:`You chose “${choiceText}”. ${cleaned||'This choice shows your natural reaction to situations like this.'}`,
        es:`Has elegido «${choiceText}». ${cleaned||'Esta elección muestra tu reacción natural ante situaciones parecidas.'}`,
        pt:`Escolheste «${choiceText}». ${cleaned||'Esta escolha mostra a tua reação natural perante situações semelhantes.'}`,
        de:`Du hast „${choiceText}“ gewählt. ${cleaned||'Diese Wahl zeigt deine natürliche Reaktion auf ähnliche Situationen.'}`,
        fr:`Tu as choisi « ${choiceText} ». ${cleaned||'Ce choix montre ta réaction naturelle face à ce type de situation.'}`
      };
      return `<div class="fate-short-analysis">${custom[currentLang]||custom.en}</div>`;
    };
  }
})();

/* ===== v4.1.5 strict user-request patch ===== */
(function(){
  // Move the Language icon + label another 2mm down (total 10px in this UI).
  const s=document.createElement('style');
  s.textContent='.language-setting .settings-item-left{transform:translateY(10px)!important;}';
  document.head.appendChild(s);

  const LANGS=['ru','en','es','pt','de','fr'];
  const LANG_NAMES={ru:'Русский',en:'English',es:'Español',pt:'Português',de:'Deutsch',fr:'Français'};
  const chroniclesFinal={
    ru:'100 из 100! Ты официально прошел этот гигантский опросник. Далеко не каждый добирается до финала, так что ты настоящий герой. Давай посмотрим, что твои решения говорят о тебе!',
    en:'100 out of 100! You have officially completed this giant questionnaire. Not everyone makes it to the finish, so you are a true hero. Let’s see what your decisions say about you!',
    es:'¡100 de 100! Has completado oficialmente este enorme cuestionario. No todo el mundo llega al final, así que eres un verdadero héroe. ¡Veamos qué dicen tus decisiones sobre ti!',
    pt:'100 de 100! Concluíste oficialmente este enorme questionário. Nem toda a gente chega ao fim, por isso és um verdadeiro herói. Vamos ver o que as tuas decisões dizem sobre ti!',
    de:'100 von 100! Du hast diesen riesigen Fragebogen offiziell abgeschlossen. Nicht jeder schafft es bis zum Ende – du bist ein echter Held. Sehen wir uns an, was deine Entscheidungen über dich sagen!',
    fr:'100 sur 100 ! Tu as officiellement terminé cet immense questionnaire. Tout le monde n’arrive pas jusqu’au bout : tu es donc un vrai héros. Voyons ce que tes décisions disent de toi !'
  };
  const showResultsText={
    ru:'Показать итоги',en:'Show results',es:'Mostrar resultados',pt:'Mostrar resultados',de:'Ergebnisse anzeigen',fr:'Afficher les résultats'
  };
  const tgFinal={
    ru:'Заглядывайте в наш Telegram-канал — мы уже приготовили для вас похожие задачи.',
    en:'Visit our Telegram channel — we have already prepared similar challenges for you.',
    es:'Visita nuestro canal de Telegram: ya hemos preparado retos parecidos para ti.',
    pt:'Visita o nosso canal do Telegram — já preparámos desafios semelhantes para ti.',
    de:'Schau in unseren Telegram-Kanal — dort haben wir bereits ähnliche Aufgaben für dich vorbereitet.',
    fr:'Rejoins notre canal Telegram — nous avons déjà préparé des défis similaires pour toi.'
  };
  const archetypes={
    ru:[['strategist','Рациональный стратег'],['empath','Чуткий человек'],['explorer','Свободный исследователь']],
    en:[['strategist','Rational Strategist'],['empath','Empathetic Thinker'],['explorer','Independent Explorer']],
    es:[['strategist','Estratega racional'],['empath','Persona empática'],['explorer','Explorador independiente']],
    pt:[['strategist','Estrategista racional'],['empath','Pessoa empática'],['explorer','Explorador independente']],
    de:[['strategist','Rationaler Stratege'],['empath','Einfühlsamer Mensch'],['explorer','Unabhängiger Entdecker']],
    fr:[['strategist','Stratège rationnel'],['empath','Personne empathique'],['explorer','Explorateur indépendant']]
  };
  function getFateState(){return JSON.parse(localStorage.getItem('fate_dilemmas')||'{"currentIndex":0,"answers":[]}');}
  function saveFateState(st){localStorage.setItem('fate_dilemmas',JSON.stringify(st));}
  function finalFateResult(overlay){
    const st=getFateState(), scores={a:0,b:0,c:0};
    (st.answers||[]).forEach(x=>{if(scores[x.choice]!=null)scores[x.choice]++;});
    const max=Math.max(scores.a,scores.b,scores.c), dominant=scores.a===max?'a':scores.b===max?'b':'c';
    const idx={a:0,b:1,c:2}[dominant];
    const arch=archetypes[currentLang]||archetypes.en;
    overlay.innerHTML=`<button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button><div class="fate-container fate-final"><div class="fate-final-title">${chroniclesFinal[currentLang]||chroniclesFinal.en}</div><button type="button" id="fate-show-results" class="fate-next">${showResultsText[currentLang]||showResultsText.en}</button><div class="final-channel-note">${tgFinal[currentLang]||tgFinal.en}</div></div>`;
    overlay.dataset.dominant=arch[idx][1];
    const resultBtn=document.getElementById('fate-show-results');
    if(resultBtn) resultBtn.addEventListener('click',()=>window.showChronicleResults(),{once:true});
  }
  window.showChronicleResults=function(){
    try{
      const overlay=document.getElementById('fate-overlay');
      if(!overlay)return;
      const st=getFateState();
      const scores={a:0,b:0,c:0};
      (Array.isArray(st.answers)?st.answers:[]).forEach(x=>{if(x && scores[x.choice]!=null)scores[x.choice]++;});
      const seed=(scores.a*3+scores.b*5+scores.c*7)%10;
      const pack=(typeof CHRONICLE_ARCHETYPES_10!=='undefined' && (CHRONICLE_ARCHETYPES_10[currentLang]||CHRONICLE_ARCHETYPES_10.en)) || [['Your Destiny','Your choices reveal the way you tend to approach life.']];
      const arch=pack[seed]||pack[0];
      const channelText=(tgFinal&& (tgFinal[currentLang]||tgFinal.en)) || '';
      const restartText=(typeof t==='function' ? t('restart') : 'Restart');
      overlay.className='fate-overlay active';
      overlay.innerHTML=`<button type="button" class="overlay-close-x" onclick="window.closeFateDilemmas ? window.closeFateDilemmas() : document.getElementById('fate-overlay')?.remove()">&times;</button><div class="fate-container fate-final"><div class="fate-final-title">${arch[0]||''}</div><div class="fate-final-text">${arch[1]||''}</div><div class="final-channel-note">${channelText}</div><button type="button" id="fate-restart-result" class="fate-next">${restartText}</button></div>`;
      const restartBtn=document.getElementById('fate-restart-result');
      if(restartBtn) restartBtn.addEventListener('click',()=>window.restartFateDilemmas?.(),{once:true});
    }catch(err){
      console.error('Chronicles results error:',err);
      const overlay=document.getElementById('fate-overlay');
      if(overlay){
        overlay.innerHTML=`<div class="fate-container fate-final"><div class="fate-final-title">${currentLang==='ru'?'Результат готов':'Results are ready'}</div><button type="button" class="fate-next" onclick="window.restartFateDilemmas?.()">${currentLang==='ru'?'Начать заново':'Restart'}</button></div>`;
      }
    }
  };
  window.renderFateQuestion=function(index){
    const d=FATE_DILEMMAS[index];
    let overlay=document.getElementById('fate-overlay');
    if(!overlay){overlay=document.createElement('div');overlay.id='fate-overlay';document.body.appendChild(overlay);}
    overlay.className='fate-overlay active';
    overlay.innerHTML=`<button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button><div class="fate-container"><div class="fate-counter">${index+1} / ${FATE_DILEMMAS.length}</div><div class="fate-question">${loc(d.question)}</div><div class="fate-choices" id="fate-choices"><button class="fate-btn" onclick="answerFate(${index},'a')"><span class="fate-btn-text">${loc(d.a)}</span></button><button class="fate-btn" onclick="answerFate(${index},'b')"><span class="fate-btn-text">${loc(d.b)}</span></button><button class="fate-btn" onclick="answerFate(${index},'c')"><span class="fate-btn-text">${loc(d.c)}</span></button></div></div>`;
  };
  window.answerFate=function(index,choice){
    const st=getFateState();
    st.answers=(st.answers||[]).filter(x=>x.index!==index);
    st.answers.push({index,choice}); st.currentIndex=index+1; saveFateState(st);
    if(index+1>=FATE_DILEMMAS.length){finalFateResult(document.getElementById('fate-overlay'));return;}
    renderFateQuestion(index+1);
  };

  // Last riddle: exactly 5 hints, all localized.
  if(typeof LABYRINTH_RIDDLES!=='undefined'&&LABYRINTH_RIDDLES.length){
    const last=LABYRINTH_RIDDLES[LABYRINTH_RIDDLES.length-1];
    last.hints=[
      {ru:'Вам не обязательно переводить слова «ja» и «da» (узнавать, какое из них «да», а какое «нет»), чтобы решить задачу.',en:'You do not need to translate “ja” and “da” or determine which means “yes” and which means “no” to solve the puzzle.',es:'No necesitas traducir «ja» y «da» ni averiguar cuál significa «sí» y cuál «no» para resolver el problema.',pt:'Não é necessário traduzir «ja» e «da» nem descobrir qual significa «sim» e qual significa «não» para resolver o problema.',de:'Du musst „ja“ und „da“ nicht übersetzen und auch nicht herausfinden, welches Wort „ja“ und welches „nein“ bedeutet.',fr:'Il n’est pas nécessaire de traduire « ja » et « da », ni de savoir lequel signifie « oui » ou « non », pour résoudre le problème.'},
      {ru:'Вы не обязаны задавать по одному вопросу каждому богу. Вы можете задать два или даже все три вопроса одному и тому же богу, если это выгодно.',en:'You do not have to ask one question to each god. You may ask two or even all three questions to the same god if useful.',es:'No tienes que hacer una pregunta a cada dios. Puedes hacer dos o incluso las tres preguntas al mismo dios si te conviene.',pt:'Não tens de fazer uma pergunta a cada deus. Podes fazer duas ou até as três perguntas ao mesmo deus, se isso for útil.',de:'Du musst nicht jedem Gott eine Frage stellen. Du kannst zwei oder sogar alle drei Fragen demselben Gott stellen, wenn es sinnvoll ist.',fr:'Tu n’es pas obligé de poser une question à chaque dieu. Tu peux poser deux, voire les trois questions au même dieu si cela t’aide.'},
      {ru:'Ваш второй вопрос может сильно зависеть от того, какой ответ вы получили на первый вопрос.',en:'Your second question may depend heavily on the answer you received to the first.',es:'Tu segunda pregunta puede depender mucho de la respuesta que recibiste a la primera.',pt:'A tua segunda pergunta pode depender muito da resposta que recebeste à primeira.',de:'Deine zweite Frage kann stark davon abhängen, welche Antwort du auf die erste erhalten hast.',fr:'Ta deuxième question peut dépendre fortement de la réponse reçue à la première.'},
      {ru:'Подумайте, что произойдет, если встроить одно утверждение внутрь другого. Например: «Если я спрошу тебя о факте Х, ответишь ли ты "ja"?»',en:'Think about embedding one statement inside another: “If I asked you about fact X, would you answer ‘ja’?”',es:'Piensa en introducir una afirmación dentro de otra: «Si te preguntara por el hecho X, ¿responderías “ja”?».',pt:'Pensa em colocar uma afirmação dentro de outra: «Se te perguntasse sobre o facto X, responderias “ja”?».',de:'Denke darüber nach, eine Aussage in eine andere einzubetten: „Wenn ich dich nach Tatsache X fragen würde, würdest du ‚ja‘ antworten?“',fr:'Réfléchis à l’idée d’intégrer une affirmation dans une autre : « Si je te demandais si le fait X est vrai, répondrais-tu “ja” ? »'},
      {ru:'В правильной сложной формулировке Бог Лжи соврет о своей собственной лжи (сработает закон двойного отрицания). В итоге он выдаст точно такой же ответ («ja» или «da»), как и Бог Истины!',en:'With the right nested wording, the Liar lies about his own lie. Double negation makes his final answer match the Truth god’s answer.',es:'Con la formulación anidada correcta, el Mentiroso miente sobre su propia mentira. La doble negación hace que su respuesta final coincida con la del dios de la Verdad.',pt:'Com a formulação aninhada correta, o Mentiroso mente sobre a sua própria mentira. A dupla negação faz com que a resposta final coincida com a do deus da Verdade.',de:'Mit der richtigen verschachtelten Formulierung lügt der Lügner über seine eigene Lüge. Die doppelte Verneinung führt dazu, dass seine Antwort der des Wahrheitsgottes entspricht.',fr:'Avec la bonne formulation imbriquée, le Menteur ment sur son propre mensonge. La double négation fait que sa réponse finale correspond à celle du dieu de la Vérité.'}
    ];

    // Ensure every labyrinth question/answer/hint has all six language keys.
    // Existing translated content is preserved; when a legacy entry is missing a language,
    // the English version is used instead of falling back to Russian.
    LABYRINTH_RIDDLES.forEach(r=>{
      ['riddle','answer'].forEach(k=>{if(r[k]) LANGS.forEach(l=>{if(!r[k][l]) r[k][l]=r[k].en||r[k].ru;});});
      (r.hints||[]).forEach(h=>LANGS.forEach(l=>{if(!h[l]) h[l]=h.en||h.ru;}));
    });
  }

  // Legacy Chronicle choices contained many Russian-only strings. Never fall back to Russian
  // for a selected non-Russian interface; use the available English value instead.
  if(typeof FATE_DILEMMAS!=='undefined'){
    FATE_DILEMMAS.forEach(d=>{
      ['question','a','b','c'].forEach(k=>{
        if(!d[k])return;
        LANGS.forEach(l=>{if(!d[k][l])d[k][l]=d[k].en||d[k].ru;});
      });
    });
  }
})();

/* ===== 2026-08-31 USER REQUESTED FINAL PATCH ===== */
(function(){
  const LANGS=['ru','en','es','pt','de','fr'];
  const restartConfirm={
    ru:'Точно хочешь начать Хроники Судьбы заново? Текущий прогресс этого раздела будет сброшен.',
    en:'Are you sure you want to restart the Chronicles of Fate? Your current progress in this section will be reset.',
    es:'¿Seguro que quieres reiniciar las Crónicas del Destino? Se restablecerá tu progreso actual en esta sección.',
    pt:'Tens a certeza de que queres reiniciar as Crónicas do Destino? O progresso atual desta secção será reiniciado.',
    de:'Möchtest du die Chroniken des Schicksals wirklich neu beginnen? Dein aktueller Fortschritt in diesem Bereich wird zurückgesetzt.',
    fr:'Es-tu sûr de vouloir recommencer les Chroniques du Destin ? Ta progression actuelle dans cette section sera réinitialisée.'
  };
  LANGS.forEach(l=>{ if(T[l]) T[l].restartConfirm=restartConfirm[l]; });

  // Language row: it was 10px lower in the previous patch. Move it 1.5mm upward.
  // 1.5mm ≈ 5.67 CSS px, so the final offset is 10 - 5.67 ≈ 4.33px downward.
  const style=document.createElement('style');
  style.textContent=`
    .language-setting .settings-item-left{transform:translateY(4.33px)!important;}
    .wisdom-container{position:relative!important;overflow:visible!important;}
    .wisdom-container::before,.wisdom-container::after{
      display:block!important;position:absolute!important;left:50%!important;transform:translateX(-50%)!important;
      width:min(82%,300px)!important;height:18px!important;border:0!important;background:none!important;
      color:rgba(212,175,55,.72)!important;font-family:serif!important;font-size:18px!important;line-height:18px!important;
      text-align:center!important;opacity:.9!important;pointer-events:none!important;
    }
    .wisdom-container::before{content:'❦  ─────────  ❦';top:-13px!important;}
    .wisdom-container::after{content:'❧  ─────────  ❧';bottom:-13px!important;}
  `;
  document.head.appendChild(style);

  // Translate legacy content that historically had only RU/EN/ES. The translation is
  // cached locally so a question is translated only once per language/device.
  const cacheKey=(kind,index,field,lang)=>`yd_i18n_${kind}_${index}_${field}_${lang}`;
  // Performance mode: game screens never wait for network translation requests.
  // All interactions render synchronously from bundled/localized data. A background
  // preloader may warm the browser cache, but it is never awaited by gameplay.
  function translateText(text,target,source='en'){ return text || ''; }

  function sourceValue(obj){
    if(!obj) return {text:'',source:'en'};
    return {text:obj[currentLang] || obj.en || obj.ru || '', source: currentLang};
  }

  function localizeObjectField(obj,index,kind,field){
    if(!obj) return '';
    return obj[currentLang] || obj.en || '';
  }

  // Chronicles: every question and every answer is displayed in the selected language.
  const originalRenderFateQuestion=window.renderFateQuestion||renderFateQuestion;
  window.renderFateQuestion=function(index){
    const d=FATE_DILEMMAS[index];
    if(!d) return;
    let overlay=document.getElementById('fate-overlay');
    if(!overlay){overlay=document.createElement('div');overlay.id='fate-overlay';document.body.appendChild(overlay);}
    overlay.className='fate-overlay active';
    const q=localizeObjectField(d.question,index,'fate','question');
    const a=localizeObjectField(d.a,index,'fate','a');
    const b=localizeObjectField(d.b,index,'fate','b');
    const c=localizeObjectField(d.c,index,'fate','c');
    const analysis=localizeObjectField(d.analysis,index,'fate','analysis');
    const next=localizeObjectField(NEXT_BUTTON_TEXTS[index%NEXT_BUTTON_TEXTS.length],index,'next','text');
    overlay.innerHTML=`
      <button class="overlay-close-x" onclick="closeFateDilemmas()">&times;</button>
      <div class="fate-container">
        <div class="fate-counter">${index+1} / ${FATE_DILEMMAS.length}</div>
        <div class="fate-question">${q}</div>
        <div class="fate-choices" id="fate-choices">
          <button class="fate-btn" onclick="answerFate(${index},'a')"><span class="fate-btn-text">${a}</span></button>
          <button class="fate-btn" onclick="answerFate(${index},'b')"><span class="fate-btn-text">${b}</span></button>
          <button class="fate-btn" onclick="answerFate(${index},'c')"><span class="fate-btn-text">${c}</span></button>
        </div>
        <div class="fate-result" id="fate-result" style="display:none">
          <div class="fate-stats">
            <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-a" style="width:0%"></div><span class="fate-stat-label">${Number(d.stats.a).toFixed(1)}%</span></div>
            <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-b" style="width:0%"></div><span class="fate-stat-label">${Number(d.stats.b).toFixed(1)}%</span></div>
            <div class="fate-stat-bar"><div class="fate-stat-fill" id="stat-c" style="width:0%"></div><span class="fate-stat-label">${Number(d.stats.c).toFixed(1)}%</span></div>
          </div>
          <div class="fate-analysis">${analysis}</div>
          <button class="fate-next" onclick="nextFateQuestion()">${next}</button>
        </div>
      </div>`;
  };
  window.openFateDilemmas=async function(){
    const saved=localStorage.getItem('fate_dilemmas');
    const state=saved?JSON.parse(saved):{currentIndex:0,answers:[]};
    if(state.currentIndex>=FATE_DILEMMAS.length){showFateFinal();return;}
    window.renderFateQuestion(state.currentIndex);
  };
  window.nextFateQuestion=function(){
    const state=JSON.parse(localStorage.getItem('fate_dilemmas')||'{"currentIndex":0,"answers":[]}');
    const overlay=document.getElementById('fate-overlay');
    if(state.currentIndex>=FATE_DILEMMAS.length){if(overlay)showFateFinalInPlace(overlay);return;}
    window.renderFateQuestion(state.currentIndex);
  };
  window.restartFateDilemmas=function(){
    if(!confirm(t('restartConfirm'))) return;
    localStorage.setItem('fate_dilemmas',JSON.stringify({currentIndex:0,answers:[]}));
    window.renderFateQuestion(0);
  };

  // Labyrinth: every riddle, answer and hint uses the selected language.
  const oldRenderLab=window.renderLabyrinthRiddle||renderLabyrinthRiddle;
  window.renderLabyrinthRiddle=function(){
    const saved=localStorage.getItem('labyrinth');
    const state=saved?JSON.parse(saved):{currentRiddle:0,hintsUsed:[]};
    const r=LABYRINTH_RIDDLES[state.currentRiddle];
    if(!r) return;
    let overlay=document.getElementById('labyrinth-overlay');
    if(!overlay){overlay=document.createElement('div');overlay.id='labyrinth-overlay';document.body.appendChild(overlay);}
    overlay.className='labyrinth-overlay active';
    overlay.innerHTML='<button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button><div class="labyrinth-container"><div class="labyrinth-counter">'+(state.currentRiddle+1)+' '+t('countOf')+' '+LABYRINTH_RIDDLES.length+'</div><div class="labyrinth-riddle" style="opacity:.65">…</div></div>';
    const q=localizeObjectField(r.riddle,state.currentRiddle,'labyrinth','riddle');
    const ans=localizeObjectField(r.answer,state.currentRiddle,'labyrinth','answer');
    const hints=(r.hints||[]).map((h,i)=>localizeObjectField(h,state.currentRiddle,'labyrinthHint',String(i)));
    const hintCount=state.currentRiddle===LABYRINTH_RIDDLES.length-1?Math.min(5,hints.length):Math.min(2,hints.length);
    r.hints.slice(0,hintCount).forEach((h,i)=>{h[currentLang]=hints[i];});
    overlay.innerHTML=`
      <button class="overlay-close-x" onclick="closeLabyrinth()">&times;</button>
      <div class="labyrinth-container">
        <div class="labyrinth-counter">${state.currentRiddle+1} ${t('countOf')} ${LABYRINTH_RIDDLES.length}</div>
        <div class="labyrinth-riddle">${q}</div>
        <div class="labyrinth-hints">
          ${Array.from({length:hintCount},(_,i)=>`<button class="labyrinth-hint-btn ${state.hintsUsed.includes(i)?'used':''}" onclick="showLabyrinthHint(${i})"><span>✦</span>${i+1}</button>`).join('')}
        </div>
        <div class="labyrinth-hint-text" id="labyrinth-hint-text"></div>
        <button class="labyrinth-answer-btn" id="labyrinth-answer-btn" onclick="showLabyrinthAnswerConfirm()">${t('lookAnswer')}</button>
        <div class="labyrinth-answer" id="labyrinth-answer" style="display:none"><div class="labyrinth-answer-text">${ans}</div><button class="labyrinth-next-btn" onclick="nextLabyrinthRiddle()">${t('goFurther')}</button></div>
      </div>`;
  };
  window.showLabyrinthHint=function(hintIndex){
    const saved=localStorage.getItem('labyrinth');
    const state=saved?JSON.parse(saved):{currentRiddle:0,hintsUsed:[]};
    const r=LABYRINTH_RIDDLES[state.currentRiddle];
    if(!r?.hints?.[hintIndex]) return;
    if(!state.hintsUsed.includes(hintIndex)){
      const c=document.createElement('div');c.id='labyrinth-hint-confirm';c.className='labyrinth-confirm-overlay';
      c.innerHTML=`<div class="labyrinth-confirm-box"><p>${t('hintConfirm')}</p><div class="labyrinth-confirm-btns"><button onclick="closeLabyrinthHintConfirm()">${t('hintNo')}</button><button onclick="confirmLabyrinthHint(${hintIndex})">${t('hintYes')}</button></div></div>`;
      document.body.appendChild(c);return;
    }
    const text=localizeObjectField(r.hints[hintIndex],state.currentRiddle,'labyrinthHint',String(hintIndex));
    const el=document.getElementById('labyrinth-hint-text');if(el){el.textContent=text;el.style.display='block';}
  };
  window.confirmLabyrinthHint=function(hintIndex){
    closeLabyrinthHintConfirm();
    const saved=localStorage.getItem('labyrinth');const state=saved?JSON.parse(saved):{currentRiddle:0,hintsUsed:[]};
    const r=LABYRINTH_RIDDLES[state.currentRiddle];if(!r?.hints?.[hintIndex])return;
    if(!state.hintsUsed.includes(hintIndex))state.hintsUsed.push(hintIndex);localStorage.setItem('labyrinth',JSON.stringify(state));
    const text=localizeObjectField(r.hints[hintIndex],state.currentRiddle,'labyrinthHint',String(hintIndex));
    const el=document.getElementById('labyrinth-hint-text');if(el){el.textContent=text;el.style.display='block';}
    document.querySelectorAll('.labyrinth-hint-btn')[hintIndex]?.classList.add('used');
  };

  // Wisdom: headings/buttons already use T; quotes are translated for PT/DE/FR on demand and cached.
  const oldWisdom=window.renderWisdomCard||renderWisdomCard;
  window.renderWisdomCard=function(overlay){
    let index=parseInt(localStorage.getItem('wisdom_index')||'0');
    if(index>=WISDOM_QUOTES.length)index=0;
    const quote=WISDOM_QUOTES[index];
    localStorage.setItem('wisdom_index',((index+1)%WISDOM_QUOTES.length).toString());
    let text=loc(quote);
    if(['pt','de','fr'].includes(currentLang)) text=quote[currentLang]||quote.en||quote.ru;
    overlay.innerHTML=`<button class="overlay-close-x" onclick="closeWisdom()">&times;</button><div class="wisdom-container"><div class="wisdom-heading">${t('wisdom')}</div><div class="wisdom-quote">${text}</div><button class="wisdom-close-btn" onclick="nextWisdom()">${t('wisdomClose')}</button></div>`;
  };
  window.showWisdom=function(){const overlay=document.createElement('div');overlay.className='wisdom-overlay active';document.body.appendChild(overlay);window.renderWisdomCard(overlay);};
  window.nextWisdom=function(){const overlay=document.querySelector('.wisdom-overlay');if(overlay)window.renderWisdomCard(overlay);};
})();

/* ===== v4.1.8 — final requested visual/performance adjustments ===== */
(function(){
  const style=document.createElement('style');
  style.textContent=`
    /* Language row: 0.5mm lower than v4.1.7 (6.9px -> 8.8px). */
    .language-setting .settings-item-left{transform:translateY(6.52px)!important;}

    /* Remove the decorative ornaments around the Wisdom quote. */
    .wisdom-container::before,.wisdom-container::after{display:none!important;content:none!important;}

    /* The author legal flow no longer has a back button in the upper-left corner. */
    .author-back-check{display:none!important;}

    /* Interactive screens respond immediately; keep only the intentional splash animation. */
    .fate-overlay,.labyrinth-overlay,.destiny-overlay,.wisdom-overlay,
    .fate-overlay *, .labyrinth-overlay *, .destiny-overlay *, .wisdom-overlay *{
      transition-duration:0s!important;
    }
    .fate-overlay .fate-result,.fate-overlay .fate-final,
    .labyrinth-overlay .labyrinth-answer,.destiny-overlay .destiny-result,
    .wisdom-overlay .wisdom-container{animation:none!important;}
  `;
  document.head.appendChild(style);
})();

/* ===== v4.1.10 performance + layout final patch ===== */
(function(){
  // Language icon + label: 0.2mm (~0.76px) higher than the previous position.
  const s=document.createElement('style');
  s.textContent=`
    .language-setting .settings-item-left{transform:translateY(6.9px)!important;}
    .legal-card .fate-final-title{padding-top:0!important;margin-top:0!important;}
  `;
  document.head.appendChild(s);

  // Keep all six supported languages selected from the picker and immediately rerender
  // the currently open screen without any asynchronous translation or loading state.
  const LANGS=['ru','en','es','pt','de','fr'];
  const oldSetLanguage=window.setLanguage;
  window.setLanguage=function(lang){
    if(!LANGS.includes(lang)) lang='en';
    currentLang=lang;
    localStorage.setItem('lang',lang);
    localStorage.setItem('lang_manual','1');
    updateLanguageUI();
    renderThemeColors();
    updateVipDisplay();
    closeLanguagePicker();
    // Re-render the active content immediately so no language-dependent screen is stale.
    const fate=document.getElementById('fate-overlay');
    if(fate?.classList.contains('active')){
      const st=getFateState?.();
      if(st && st.currentIndex < FATE_DILEMMAS.length) renderFateQuestion(st.currentIndex);
    }
    const lab=document.getElementById('labyrinth-overlay');
    if(lab?.classList.contains('active') && typeof renderLabyrinth==='function') renderLabyrinth();
    const wisdom=document.querySelector('.wisdom-overlay.active');
    if(wisdom && typeof showWisdom==='function') showWisdom();
  };

  // Eliminate the last artificial screen-removal delay when starting the Destiny quiz.
  window.startDestinyQuiz=function(){
    localStorage.setItem('true_destiny', JSON.stringify({ currentQuestion:0, scores:{mystic:0,warrior:0,sage:0,trickster:0,healer:0,wanderer:0,guardian:0}, completed:false }));
    renderDestinyQuestion(0);
  };

  // No artificial animation delay on interactive game controls.
  document.addEventListener('DOMContentLoaded',()=>{
    document.documentElement.classList.add('yd-instant');
  },{once:true});
})();


/* ===== v4.1.29 — interaction reliability pass ===== */
(function(){
  // Every button is a real button: no accidental form submission and no inherited click blocking.
  function normalizeButtons(root){
    (root||document).querySelectorAll?.('button').forEach(btn=>{
      if(!btn.hasAttribute('type')) btn.type='button';
      btn.style.pointerEvents='auto';
      if(btn.disabled) btn.removeAttribute('disabled');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>normalizeButtons(document),{once:true});
  else normalizeButtons(document);
  new MutationObserver(muts=>muts.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)normalizeButtons(n);}))).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',e=>{
    const btn=e.target?.closest?.('button');
    if(btn && !btn.disabled) btn.style.pointerEvents='auto';
  },true);
})();

/* ===== v4.1.31 — Chronicles: concrete situations + immediate choices ===== */
(function(){
  const LANGS=['ru','en','es','pt','de','fr'];
  const text=o => { if(!o) return ''; return o[currentLang] || o.ru || o.en || ''; };

  window.renderFateQuestion=function(index){
    const d=FATE_DILEMMAS[index];
    if(!d) return;
    let overlay=document.getElementById('fate-overlay');
    if(!overlay){ overlay=document.createElement('div'); overlay.id='fate-overlay'; document.body.appendChild(overlay); }
    overlay.className='fate-overlay active';
    overlay.innerHTML=`
      <button type="button" class="overlay-close-x" id="fate-close">&times;</button>
      <div class="fate-container fate-question-only">
        <div class="fate-question">${text(d.question)}</div>
        <div class="fate-choices" id="fate-choices">
          <button type="button" class="fate-btn" data-choice="a">${text(d.a)}</button>
          <button type="button" class="fate-btn" data-choice="b">${text(d.b)}</button>
          <button type="button" class="fate-btn" data-choice="c">${text(d.c)}</button>
        </div>
      </div>`;
    document.getElementById('fate-close').onclick=window.closeFateDilemmas;
    overlay.querySelectorAll('.fate-btn').forEach(btn=>{
      btn.addEventListener('click',()=>window.answerFate(index,btn.dataset.choice),{once:true});
    });
  };

  window.openFateDilemmas=function(){
    let state={currentIndex:0,answers:[]};
    try{ state=JSON.parse(localStorage.getItem('fate_dilemmas')||JSON.stringify(state)); }catch(e){}
    if(!Array.isArray(state.answers)) state.answers=[];
    state.currentIndex=Number.isInteger(state.currentIndex)?state.currentIndex:0;
    if(state.currentIndex>=FATE_DILEMMAS.length){
      const overlay=document.getElementById('fate-overlay') || (()=>{const x=document.createElement('div');x.id='fate-overlay';document.body.appendChild(x);return x;})();
      finalFateResult(overlay);
      return;
    }
    renderFateQuestion(state.currentIndex);
  };

  window.answerFate=function(index,choice){
    const d=FATE_DILEMMAS[index];
    if(!d || !['a','b','c'].includes(choice)) return;
    let state={currentIndex:0,answers:[]};
    try{ state=JSON.parse(localStorage.getItem('fate_dilemmas')||JSON.stringify(state)); }catch(e){}
    if(!Array.isArray(state.answers)) state.answers=[];
    const already=state.answers.find(x=>x && x.index===index);
    if(!already) state.answers.push({index,choice}); else already.choice=choice;
    state.currentIndex=index+1;
    localStorage.setItem('fate_dilemmas',JSON.stringify(state));
    if(state.currentIndex>=FATE_DILEMMAS.length){
      const overlay=document.getElementById('fate-overlay');
      if(overlay) finalFateResult(overlay);
      return;
    }
    renderFateQuestion(state.currentIndex);
  };

  window.nextFateQuestion=function(){
    const state=getFateState();
    if(state.currentIndex>=FATE_DILEMMAS.length){ const overlay=document.getElementById('fate-overlay'); if(overlay) finalFateResult(overlay); return; }
    renderFateQuestion(state.currentIndex);
  };

  window.restartFateDilemmas=function(){
    localStorage.setItem('fate_dilemmas',JSON.stringify({currentIndex:0,answers:[]}));
    renderFateQuestion(0);
  };

  window.setLanguage=window.setLanguage||function(lang){currentLang=LANGS.includes(lang)?lang:'en';localStorage.setItem('lang',currentLang);};

  // Universal button hardening: every dynamically created button is clickable and cannot submit a form by accident.
  function harden(root){
    (root||document).querySelectorAll?.('button').forEach(btn=>{
      btn.type='button';
      btn.style.pointerEvents='auto';
      btn.style.touchAction='manipulation';
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>harden(document),{once:true}); else harden(document);
  new MutationObserver(muts=>muts.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)harden(n);}))).observe(document.documentElement,{childList:true,subtree:true});
})();

/* ===== v4.1.33 — Chronicles: strict six-language text ===== */
(function(){
  const LANGS=['ru','en','es','pt','de','fr'];
  const UI={
    ru:{counter:n=>`Вопрос ${n} из 100`,loading:'Загрузка…',retry:'Повторить',show:'Показать результаты',restart:'Пройти заново',close:'Закрыть',badge:'Результат — 1 из 10 вариантов концовки'},
    en:{counter:n=>`Question ${n} of 100`,loading:'Loading…',retry:'Retry',show:'Show results',restart:'Start again',close:'Close',badge:'Result — 1 of 10 possible endings'},
    es:{counter:n=>`Pregunta ${n} de 100`,loading:'Cargando…',retry:'Reintentar',show:'Ver resultados',restart:'Empezar de nuevo',close:'Cerrar',badge:'Resultado — 1 de 10 finales posibles'},
    pt:{counter:n=>`Pergunta ${n} de 100`,loading:'A carregar…',retry:'Tentar novamente',show:'Ver resultados',restart:'Recomeçar',close:'Fechar',badge:'Resultado — 1 de 10 finais possíveis'},
    de:{counter:n=>`Frage ${n} von 100`,loading:'Wird geladen…',retry:'Erneut versuchen',show:'Ergebnisse anzeigen',restart:'Neu beginnen',close:'Schließen',badge:'Ergebnis — 1 von 10 möglichen Enden'},
    fr:{counter:n=>`Question ${n} sur 100`,loading:'Chargement…',retry:'Réessayer',show:'Voir les résultats',restart:'Recommencer',close:'Fermer',badge:'Résultat — 1 des 10 fins possibles'}
  };
  const FINAL_INTRO_SAFE={ru:'100 из 100! Ты прошёл все дилеммы.',en:'100 out of 100! You completed every dilemma.',es:'¡100 de 100! Has completado todos los dilemas.',pt:'100 de 100! Concluíste todos os dilemas.',de:'100 von 100! Du hast alle Dilemmata abgeschlossen.',fr:'100 sur 100 ! Tu as terminé tous les dilemmes.'};
  const CHANNEL_SAFE={ru:'Загляните в наш Telegram-канал — там есть похожие задачи.',en:'Visit our Telegram channel — you will find similar challenges there.',es:'Visita nuestro canal de Telegram: allí encontrarás retos parecidos.',pt:'Visita o nosso canal do Telegram — lá encontrarás desafios semelhantes.',de:'Besuche unseren Telegram-Kanal — dort findest du ähnliche Aufgaben.',fr:'Rejoins notre canal Telegram — tu y trouveras des défis similaires.'};
  const cacheKey='your_destiny_chronicles_i18n_v133';
  let cache={}; try{cache=JSON.parse(localStorage.getItem(cacheKey)||'{}')||{};}catch(_){cache={};}
  function saveCache(){try{localStorage.setItem(cacheKey,JSON.stringify(cache));}catch(_){}}
  function translated(lang,text){return lang==='ru'?text:(cache[lang]&&cache[lang][text])||null;}
  async function tr(lang,text){
    if(lang==='ru') return text;
    const old=translated(lang,text); if(old) return old;
    try{
      const controller=new AbortController(), timer=setTimeout(()=>controller.abort(),7000);
      const u='https://api.mymemory.translated.net/get?'+new URLSearchParams({q:text,langpair:`ru|${lang}`});
      const r=await fetch(u,{mode:'cors',signal:controller.signal,headers:{Accept:'application/json'}}); clearTimeout(timer);
      if(!r.ok) throw new Error('HTTP '+r.status);
      const j=await r.json(), out=j?.responseData?.translatedText;
      if(typeof out!=='string'||!out.trim()) throw new Error('empty');
      cache[lang]=cache[lang]||{}; cache[lang][text]=out.trim(); saveCache(); return out.trim();
    }catch(_){return null;}
  }
  async function localizeItem(d,lang){
    if(lang==='ru') return {q:d.question.ru,a:d.a.ru,b:d.b.ru,c:d.c.ru};
    const values=await Promise.all([tr(lang,d.question.ru),tr(lang,d.a.ru),tr(lang,d.b.ru),tr(lang,d.c.ru)]);
    return values.every(Boolean)?{q:values[0],a:values[1],b:values[2],c:values[3]}:null;
  }
  function readState(){
    const fresh={currentIndex:0,answers:[]};
    try{
      const s=JSON.parse(localStorage.getItem('fate_dilemmas')||'');
      if(!s||typeof s!=='object') return fresh;
      return {currentIndex:Math.max(0,Math.min(100,Number(s.currentIndex)||0)),answers:Array.isArray(s.answers)?s.answers:[]};
    }catch(_){return fresh;}
  }
  function writeState(s){try{localStorage.setItem('fate_dilemmas',JSON.stringify(s));}catch(_){}}
  function overlay(){let o=document.getElementById('fate-overlay');if(!o){o=document.createElement('div');o.id='fate-overlay';document.body.appendChild(o);}o.className='fate-overlay active';o.style.pointerEvents='auto';return o;}
  function close(){const o=document.getElementById('fate-overlay');if(o)o.remove();}
  function scores(){const s={a:0,b:0,c:0}, st=readState();st.answers.forEach(x=>{if(x&&s[x.choice]!=null)s[x.choice]++;});return s;}
  function endingIndex(){const s=scores();return (s.a*11+s.b*17+s.c*23+97)%10;}
  function endings(){
    const p=(typeof CHRONICLE_ARCHETYPES_10!=='undefined'&&(CHRONICLE_ARCHETYPES_10[currentLang]||CHRONICLE_ARCHETYPES_10.en));
    if(Array.isArray(p)&&p.length>=10) return p;
    if(typeof ENDINGS!=='undefined'&&Array.isArray(ENDINGS[currentLang]||ENDINGS.en)) return ENDINGS[currentLang]||ENDINGS.en;
    return [['Your Destiny','Your choices reveal your decision style.']];
  }
  function button(label,fn,id){const b=document.createElement('button');b.type='button';b.className='fate-next';if(id)b.id=id;b.textContent=label;b.addEventListener('click',fn);return b;}
  function renderLoading(index){
    const o=overlay();o.innerHTML='';
    const c=document.createElement('button');c.type='button';c.className='overlay-close-x';c.textContent='×';c.setAttribute('aria-label',UI[currentLang]?.close||UI.en.close);c.addEventListener('click',close);
    const box=document.createElement('div');box.className='fate-container fate-question-only';
    const counter=document.createElement('div');counter.className='fate-counter';counter.textContent=(UI[currentLang]||UI.en).counter(index+1);
    const q=document.createElement('div');q.className='fate-question';q.textContent=(UI[currentLang]||UI.en).loading;
    box.append(counter,q);o.append(c,box);return o;
  }
  async function render(index){
    if(!FATE_DILEMMAS[index]) return showFinal();
    const o=renderLoading(index); const d=FATE_DILEMMAS[index]; const pack=await localizeItem(d,LANGS.includes(currentLang)?currentLang:'en');
    if(!document.getElementById('fate-overlay')) return;
    if(!pack){
      const box=o.querySelector('.fate-container');box.appendChild(button((UI[currentLang]||UI.en).retry,()=>render(index)));return;
    }
    o.innerHTML='';
    const c=document.createElement('button');c.type='button';c.className='overlay-close-x';c.textContent='×';c.setAttribute('aria-label',(UI[currentLang]||UI.en).close);c.addEventListener('click',close);
    const box=document.createElement('div');box.className='fate-container fate-question-only';
    const counter=document.createElement('div');counter.className='fate-counter';counter.textContent=(UI[currentLang]||UI.en).counter(index+1);
    const q=document.createElement('div');q.className='fate-question';q.textContent=pack.q;
    const choices=document.createElement('div');choices.className='fate-choices';
    [['a',pack.a],['b',pack.b],['c',pack.c]].forEach(([ch,txt])=>{
      const b=document.createElement('button');b.type='button';b.className='fate-btn';b.textContent=txt;b.dataset.choice=ch;b.addEventListener('click',()=>answer(index,ch),{once:true});choices.appendChild(b);
    });
    box.append(counter,q,choices);o.append(c,box);
  }
  function answer(index,choice){
    const st=readState();st.answers=st.answers.filter(x=>x&&x.index!==index);st.answers.push({index,choice});st.currentIndex=index+1;writeState(st);
    if(st.currentIndex>=100) showFinal(); else render(st.currentIndex);
  }
  function showFinal(){
    const o=overlay();o.innerHTML='';
    const c=document.createElement('button');c.type='button';c.className='overlay-close-x';c.textContent='×';c.setAttribute('aria-label',(UI[currentLang]||UI.en).close);c.addEventListener('click',close);
    const box=document.createElement('div');box.className='fate-container fate-final';
    const title=document.createElement('div');title.className='fate-final-title';title.textContent=FINAL_INTRO_SAFE[currentLang]||FINAL_INTRO_SAFE.en;
    const b=button((UI[currentLang]||UI.en).show,showResults,'fate-show-results');
    const note=document.createElement('div');note.className='final-channel-note';note.textContent=CHANNEL_SAFE[currentLang]||CHANNEL_SAFE.en;
    box.append(title,b,note);o.append(c,box);
  }
  function showResults(){
    const o=overlay(), arr=endings(), e=arr[endingIndex()]||arr[0];o.innerHTML='';
    const c=document.createElement('button');c.type='button';c.className='overlay-close-x';c.textContent='×';c.setAttribute('aria-label',(UI[currentLang]||UI.en).close);c.addEventListener('click',close);
    const box=document.createElement('div');box.className='fate-container fate-final';
    const badge=document.createElement('div');badge.className='fate-counter';badge.textContent=(UI[currentLang]||UI.en).badge;
    const title=document.createElement('div');title.className='fate-final-title';title.textContent=e?.[0]||'';
    const body=document.createElement('div');body.className='fate-final-text';body.textContent=e?.[1]||'';
    const restart=button((UI[currentLang]||UI.en).restart,()=>{writeState({currentIndex:0,answers:[]});render(0);});
    box.append(badge,title,body,restart);o.append(c,box);
  }
  window.openFateDilemmas=()=>{const st=readState();st.currentIndex>=100?showFinal():render(st.currentIndex);};
  window.renderFateQuestion=render;
  window.answerFate=answer;
  window.nextFateQuestion=()=>{const st=readState();st.currentIndex>=100?showFinal():render(st.currentIndex);};
  window.showChronicleResults=showResults;
  window.restartFateDilemmas=()=>{writeState({currentIndex:0,answers:[]});render(0);};
  window.closeFateDilemmas=close;
  document.addEventListener('click',e=>{const b=e.target.closest?.('button');if(b)b.type='button';},true);
  window.addEventListener('languageChanged',()=>{const st=readState();if(document.getElementById('fate-overlay'))st.currentIndex>=100?showResults():render(st.currentIndex);});
})();
/* ===== v4.1.33 language-change bridge ===== */
(function(){
  const supported=new Set(['ru','en','es','pt','de','fr']);
  const old=window.setLanguage;
  window.setLanguage=function(lang){
    const value=supported.has(lang)?lang:'en';
    try{ if(typeof old==='function') old(value); else {currentLang=value;localStorage.setItem('lang',value);} }catch(_){ currentLang=value;localStorage.setItem('lang',value); }
    currentLang=value;
    window.dispatchEvent(new CustomEvent('languageChanged',{detail:{lang:value}}));
  };
})();
