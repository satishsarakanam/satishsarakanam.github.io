//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-121961095-1');

var isMobile = window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ? true : false;
var isIOS = (window.navigator.userAgent.match(/(ipad|iphone|ipod)/i) ? true : false);
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
var isIE = false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
var isBlink = (isChrome || isOpera) && !!window.CSS;
var isAndroid = (window.navigator.userAgent.match(/(android)/i) ? true : false);
var isMobileAndOrientationLandscape = false;


// For debugging
var isBrowser = false;

var tSkills = {
    '0': {
        'name': 'ReactJS',
        'url': './images/skills/react.png'
    },
    '1': {
        'name': 'Redux',
        'url': './images/skills/redux.png'
    },
    '2': {
        'name': 'Backbone',
        'url': './images/skills/backbonejs.png'
    },
    '3': {
        'name': 'NodeJS',
        'url': './images/skills/nodejs.png'
    },
    '4': {
        'name': 'RxJS',
        'url': './images/skills/rxjs.png'
    },
    '5': {
        'name': 'JavaScript',
        'url': './images/skills/js.png'
    },
    '6': {
        'name': 'TypeScript',
        'url': './images/skills/ts.png'
    },
    '7': {
        'name': 'Cypress',
        'url': './images/skills/cypress.png'
    },
    '8': {
        'name': 'Playwright',
        'url': './images/skills/playwright.png'
    },
    '9': {
        'name': 'Html',
        'url': './images/skills/html.png'
    },
    '10': {
        'name': 'jQuery',
        'url': './images/skills/jquery.png'
    },
    '11': {
        'name': 'AJAX',
        'url': './images/skills/ajax.png'
    },
    '13': {
        'name': 'Figma',
        'url': './images/skills/figma.png'
    },
    '14': {
        'name': 'OCI',
        'url': './images/skills/oci.png'
    },
    '15': {
        'name': 'Python',
        'url': './images/skills/python.png'
    },
    '16': {
        'name': 'ARIA',
        'url': './images/skills/aria.png'
    }
};

var dTools = {
    '0': {
        'name': 'VisualStudio Code',
        'url': './images/tools/vscode.png'
    },
    '1': {
        'name': 'Sublime',
        'url': './images/tools/sublime.png'
    },
    '2': {
        'name': 'GitHub',
        'url': './images/tools/git.png'
    },
    '3': {
        'name': 'Jira',
        'url': './images/tools/jira.png'
    },
    '4': {
        'name': 'SourceTree',
        'url': './images/tools/sourcetree.png'
    },
    '5': {
        'name': 'aws console',
        'url': './images/tools/aws.png'
    },
    '6': {
        'name': 'Postman',
        'url': './images/tools/postman.png'
    },
    '7': {
        'name': 'NPM',
        'url': './images/tools/npm.png'
    },
    '8': {
        'name': 'Firebase',
        'url': './images/tools/firebase.png'
    },
    '9': {
        'name': 'Xcode',
        'url': './images/tools/xcode.png'
    },
    '10': {
        'name': 'Jenkins',
        'url': './images/tools/jenkins.png'
    },
    '11': {
        'name': 'Android Studio',
        'url': './images/tools/androidstudio.png'
    },
    '12': {
        'name': 'Visual Studio',
        'url': './images/tools/vs.png'
    },
    '13': {
        'name': 'PyCharm',
        'url': './images/tools/pycharm.png'
    },
    '14': {
        'name': 'Experitest',
        'url': './images/tools/experitest.png'
    },
    '15': {
        'name': 'FrogLogic',
        'url': './images/tools/froglogic.png'
    }

};