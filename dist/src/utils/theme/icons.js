"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//Primary
var addCell = 'add-cell';
var addColumn = 'add-column';
var addRole = 'add-role';
var addRow = 'add-row';
var adjust = 'adjust';
var alignCenter = 'align-center';
var alignImageCenter = 'align-image-center';
var alignImageLeft = 'align-image-left';
var alignImageRight = 'align-image-right';
var alignJustify = 'align-justify';
var alignLeft = 'align-left';
var alignRight = 'align-right';
var analytics = 'analytics';
var angleDown = 'angle-down';
var angleUp = 'angle-up';
var angleLeft = 'angle-left';
var angleRight = 'angle-right';
var announcement = 'announcement';
var apiLock = 'api-lock';
var apiWeb = 'api-web';
var archive = 'archive';
var arrowUpFull = 'arrow-up-full';
var asterisk = 'asterisk';
var audio = 'audio';
var autoSize = 'autosize';
var bars = 'bars';
var bellOff = 'bell-off';
var bellOn = 'bell-on';
var blogs = 'blogs';
var bold = 'bold';
var bookMarks = 'bookmarks';
var boxContainer = 'box-container';
var breadCrumb = 'breadcrumb';
var calendar = 'calendar';
var camera = 'camera';
var cards = 'cards';
var cards2 = 'cards2';
var caretBottomL = 'caret-bottom-l';
var caretBottom = 'caret-bottom';
var caretDoubleL = 'caret-double-l';
var caretDouble = 'caret-double';
var caretDown = 'caret-down';
var caretLeftL = 'caret-left-l';
var caretLeft = 'caret-left';
var caretRightL = 'caret-right-l';
var caretRight = 'caret-right';
var caretTopL = 'caret-top-l';
var caretTop = 'caret-top';
var categories = 'categories';
var chainBroken = 'chain-broken';
var change = 'change';
var checkCircleFull = 'check-circle-full';
var checkCircle = 'check-circle';
var checkSquare = 'check-square';
var check = 'check';
var chip = 'chip';
var code = 'code';
var cog = 'cog';
var columns = 'columns';
var comments = 'comments';
var community = 'community';
var compress = 'compress';
var controlPanel = 'control-panel';
var customField = 'custom-field';
var customSize = 'custom-size';
var cut = 'cut';
var date = 'date';
var decimal = 'decimal';
var desktop = 'desktop';
var devices = 'devices';
var diagram = 'diagram';
var diary = 'diary';
var document = 'document';
var documentsAndMedia = 'documents-and-media';
var download = 'download';
var drag = 'drag';
var dynamicDataList = 'dynamic-data-list';
var dynamicDataMapping = 'dynamic-data-mapping';
var editLayout = 'edit-layout';
var effects = 'effects';
var ellipsisH = 'ellipsis-h';
var ellipsisV = 'ellipsis-v';
var embed = 'embed';
var envelopeClosed = 'envelope-closed';
var envelopeOpen = 'envelope-open';
var environmentConnected = 'environment-connected';
var environmentDisconnected = 'environment-disconnected';
var environment = 'environment';
var exclamationCircle = 'exclamation-circle';
var exclamationFull = 'exclamation-full';
var expand = 'expand';
var fileScript = 'file-script';
var fileTemplate = 'file-template';
var fileXsl = 'file-xsl';
var filter = 'filter';
var flagEmpty = 'flag-empty';
var flagFull = 'flag-full';
var folder = 'folder';
var format = 'format';
var forms = 'forms';
var fullSize = 'full-size';
var geoLocation = 'geolocation';
var globe = 'globe';
var grid = 'grid';
var hashTag = 'hashtag';
var heart = 'heart';
var hidden = 'hidden';
var home = 'home';
var horizontalScroll = 'horizontal-scroll';
var hr = 'hr';
var importExport = 'import-export';
var indentLess = 'indent-less';
var indentMore = 'indent-more';
var infoBook = 'info-book';
var infoCircleOpen = 'info-circle-open';
var infoCircle = 'info-circle';
var infoPanelClosed = 'info-panel-closed';
var infoPanelOpen = 'info-panel-open';
var informationLive = 'information-live';
var integer = 'integer';
var italic = 'italic';
var link = 'link';
var list = 'list';
var live = 'live';
var lockDots = 'lock-dots';
var lock = 'lock';
var logout = 'logout';
var magic = 'magic';
var markAsAnswer = 'mark-as-answer';
var markAsQuestion = 'mark-as-question';
var merge = 'merge';
var messageBoards = 'message-boards';
var message = 'message';
var mobileDeviceRules = 'mobile-device-rules';
var mobileLandscape = 'mobile-landscape';
var mobilePortrait = 'mobile-portrait';
var moon = 'moon';
var move = 'move';
var mySpace = 'myspace';
var number = 'number';
var oauth = 'oauth';
var openId = 'open-id';
var orderArrowDown = 'order-arrow-down';
var orderArrowUp = 'order-arrow-up';
var orderArrow = 'order-arrow';
var organizations = 'organizations';
var pageTemplate = 'page-template';
var page = 'page';
var pagesTree = 'pages-tree';
var paperclip = 'paperclip';
var paragraph = 'paragraph';
var passwordPolicies = 'password-policies';
var paste = 'paste';
var pause = 'pause';
var pencil = 'pencil';
var phone = 'phone';
var picture = 'picture';
var play = 'play';
var plug = 'plug';
var plusSquares = 'plus-squares';
var plus = 'plus';
var polls = 'polls';
var print = 'print';
var productMenuClosed = 'product-menu-closed';
var productMenuOpen = 'product-menu-open';
var productMenu = 'product-menu';
var propagation = 'propagation';
var questionCircleFull = 'question-circle-full';
var questionCircle = 'question-circle';
var quoteLeft = 'quote-left';
var quoteRight = 'quote-right';
var radioButton = 'radio-button';
var redo = 'redo';
var reload = 'reload';
var removeRole = 'remove-role';
var removeStyle = 'remove-style';
var reply = 'reply';
var repository = 'repository';
var restore = 'restore';
var rssFull = 'rss-full';
var rss = 'rss';
var rules = 'rules';
var search = 'search';
var selectFromList = 'select-from-list';
var select = 'select';
var separator = 'separator';
var shareAlt = 'share-alt';
var share = 'share';
var sheets = 'sheets';
var shoppingCart = 'shopping-cart';
var shortcut = 'shortcut';
var simulationMenuClosed = 'simulation-menu-closed';
var simulationMenuOpen = 'simulation-menu-open';
var simulationMenu = 'simulation-menu';
var siteTemplate = 'site-template';
var sites = 'sites';
var socialFacebook = 'social-facebook';
var socialLinkedin = 'social-linkedin';
var staging = 'staging';
var starHalf = 'star-half';
var starO = 'star-o';
var star = 'star';
var sticky = 'sticky';
var strikeThrough = 'strikethrough';
var subscript = 'subscript';
var suitcase = 'suitcase';
var sun = 'sun';
var superscript = 'superscript';
var table = 'table';
var table2 = 'table2';
var tabletLandscape = 'tablet-landscape';
var tabletPortrait = 'tablet-portrait';
var tag = 'tag';
var textEditor = 'text-editor';
var text = 'text';
var textBox = 'textbox';
var thirdParty = 'third-party';
var thumbsDown = 'thumbs-down';
var thumbsUpArrow = 'thumbs-up-arrow';
var thumbsUp = 'thumbs-up';
var time = 'time';
var timesCircle = 'times-circle';
var times = 'times';
var transform = 'transform';
var trash = 'trash';
var twitter = 'twitter';
var underline = 'underline';
var undo = 'undo';
var unlock = 'unlock';
var upload = 'upload';
var urgent = 'urgent';
var user = 'user';
var users = 'users';
var verticalScroll = 'vertical-scroll';
var video = 'video';
var view = 'view';
var vocabulary = 'vocabulary';
var warningFull = 'warning-full';
var warning = 'warning';
var webContent = 'web-content';
var wikiPage = 'wiki-page';
var wiki = 'wiki';
var workFlow = 'workflow';
var Icons = {
  icons: {
    addCell: addCell,
    addColumn: addColumn,
    addRole: addRole,
    addRow: addRow,
    adjust: adjust,
    alignCenter: alignCenter,
    alignImageCenter: alignImageCenter,
    alignImageLeft: alignImageLeft,
    alignImageRight: alignImageRight,
    alignJustify: alignJustify,
    alignLeft: alignLeft,
    alignRight: alignRight,
    analytics: analytics,
    angleDown: angleDown,
    angleUp: angleUp,
    angleLeft: angleLeft,
    angleRight: angleRight,
    announcement: announcement,
    apiLock: apiLock,
    apiWeb: apiWeb,
    archive: archive,
    arrowUpFull: arrowUpFull,
    asterisk: asterisk,
    audio: audio,
    autoSize: autoSize,
    bars: bars,
    bellOff: bellOff,
    bellOn: bellOn,
    blogs: blogs,
    bold: bold,
    bookMarks: bookMarks,
    boxContainer: boxContainer,
    breadCrumb: breadCrumb,
    calendar: calendar,
    camera: camera,
    cards: cards,
    cards2: cards2,
    caretBottomL: caretBottomL,
    caretBottom: caretBottom,
    caretDoubleL: caretDoubleL,
    caretDouble: caretDouble,
    caretDown: caretDown,
    caretLeftL: caretLeftL,
    caretLeft: caretLeft,
    caretRightL: caretRightL,
    caretRight: caretRight,
    caretTopL: caretTopL,
    caretTop: caretTop,
    categories: categories,
    chainBroken: chainBroken,
    change: change,
    checkCircleFull: checkCircleFull,
    checkCircle: checkCircle,
    checkSquare: checkSquare,
    check: check,
    chip: chip,
    code: code,
    cog: cog,
    columns: columns,
    comments: comments,
    community: community,
    compress: compress,
    controlPanel: controlPanel,
    customField: customField,
    customSize: customSize,
    cut: cut,
    date: date,
    decimal: decimal,
    desktop: desktop,
    devices: devices,
    diagram: diagram,
    diary: diary,
    document: document,
    documentsAndMedia: documentsAndMedia,
    download: download,
    drag: drag,
    dynamicDataList: dynamicDataList,
    dynamicDataMapping: dynamicDataMapping,
    editLayout: editLayout,
    effects: effects,
    ellipsisH: ellipsisH,
    ellipsisV: ellipsisV,
    embed: embed,
    envelopeClosed: envelopeClosed,
    envelopeOpen: envelopeOpen,
    environmentConnected: environmentConnected,
    environmentDisconnected: environmentDisconnected,
    environment: environment,
    exclamationCircle: exclamationCircle,
    exclamationFull: exclamationFull,
    expand: expand,
    fileScript: fileScript,
    fileTemplate: fileTemplate,
    fileXsl: fileXsl,
    filter: filter,
    flagEmpty: flagEmpty,
    flagFull: flagFull,
    folder: folder,
    format: format,
    forms: forms,
    fullSize: fullSize,
    geoLocation: geoLocation,
    globe: globe,
    grid: grid,
    hashTag: hashTag,
    heart: heart,
    hidden: hidden,
    home: home,
    horizontalScroll: horizontalScroll,
    hr: hr,
    importExport: importExport,
    indentLess: indentLess,
    indentMore: indentMore,
    infoBook: infoBook,
    infoCircleOpen: infoCircleOpen,
    infoCircle: infoCircle,
    infoPanelClosed: infoPanelClosed,
    infoPanelOpen: infoPanelOpen,
    informationLive: informationLive,
    integer: integer,
    italic: italic,
    link: link,
    list: list,
    live: live,
    lockDots: lockDots,
    lock: lock,
    logout: logout,
    magic: magic,
    markAsAnswer: markAsAnswer,
    markAsQuestion: markAsQuestion,
    merge: merge,
    messageBoards: messageBoards,
    message: message,
    mobileDeviceRules: mobileDeviceRules,
    mobileLandscape: mobileLandscape,
    mobilePortrait: mobilePortrait,
    moon: moon,
    move: move,
    mySpace: mySpace,
    number: number,
    oauth: oauth,
    openId: openId,
    orderArrowDown: orderArrowDown,
    orderArrowUp: orderArrowUp,
    orderArrow: orderArrow,
    organizations: organizations,
    pageTemplate: pageTemplate,
    page: page,
    pagesTree: pagesTree,
    paperclip: paperclip,
    paragraph: paragraph,
    passwordPolicies: passwordPolicies,
    paste: paste,
    pause: pause,
    pencil: pencil,
    phone: phone,
    picture: picture,
    play: play,
    plug: plug,
    plusSquares: plusSquares,
    plus: plus,
    polls: polls,
    print: print,
    productMenuClosed: productMenuClosed,
    productMenuOpen: productMenuOpen,
    productMenu: productMenu,
    propagation: propagation,
    questionCircleFull: questionCircleFull,
    questionCircle: questionCircle,
    quoteLeft: quoteLeft,
    quoteRight: quoteRight,
    radioButton: radioButton,
    redo: redo,
    reload: reload,
    removeRole: removeRole,
    removeStyle: removeStyle,
    reply: reply,
    repository: repository,
    restore: restore,
    rssFull: rssFull,
    rss: rss,
    rules: rules,
    search: search,
    selectFromList: selectFromList,
    select: select,
    separator: separator,
    shareAlt: shareAlt,
    share: share,
    sheets: sheets,
    shoppingCart: shoppingCart,
    shortcut: shortcut,
    simulationMenuClosed: simulationMenuClosed,
    simulationMenuOpen: simulationMenuOpen,
    simulationMenu: simulationMenu,
    siteTemplate: siteTemplate,
    sites: sites,
    socialFacebook: socialFacebook,
    socialLinkedin: socialLinkedin,
    staging: staging,
    starHalf: starHalf,
    starO: starO,
    star: star,
    sticky: sticky,
    strikeThrough: strikeThrough,
    subscript: subscript,
    suitcase: suitcase,
    sun: sun,
    superscript: superscript,
    table: table,
    table2: table2,
    tabletLandscape: tabletLandscape,
    tabletPortrait: tabletPortrait,
    tag: tag,
    textEditor: textEditor,
    text: text,
    textBox: textBox,
    thirdParty: thirdParty,
    thumbsDown: thumbsDown,
    thumbsUpArrow: thumbsUpArrow,
    thumbsUp: thumbsUp,
    time: time,
    timesCircle: timesCircle,
    times: times,
    transform: transform,
    trash: trash,
    twitter: twitter,
    underline: underline,
    undo: undo,
    unlock: unlock,
    upload: upload,
    urgent: urgent,
    user: user,
    users: users,
    verticalScroll: verticalScroll,
    video: video,
    view: view,
    vocabulary: vocabulary,
    warningFull: warningFull,
    warning: warning,
    webContent: webContent,
    wikiPage: wikiPage,
    wiki: wiki,
    workFlow: workFlow
  }
};
var _default = Icons;
exports.default = _default;

//# sourceMappingURL=icons.js.map