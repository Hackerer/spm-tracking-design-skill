// 自适应语言
try {
    var isAdaptive = localStorage.getItem('APP_ADAPTIVE_BROWSER_LANGUAGE') === 'on' || localStorage.getItem('i18nextLng') === null;
    if (isAdaptive) {
        localStorage.setItem('APP_ADAPTIVE_BROWSER_LANGUAGE', 'on');
        var lng = 'en-US';
        if (!navigator.language || navigator.language.includes('zh')) {
            lng = 'zh-CN';
        }
        localStorage.setItem('i18nextLng', lng);
    }
}
catch (error) {
    console.log('adapt language error');
}
// 清理域名下的focus token 认证
try {
    document.cookie = 'focus-token=; max-age=0; path=/;';
    document.cookie = 'focus-team-id=; max-age=0; path=/;';
    document.cookie = 'focus-client=; max-age=0; path=/;';
}
catch (e) {
    console.warn('clear focus-token failed', e);
}
// 流程图环境配置
window.DIAGRAM_PATH = window.location.origin + '/joyspace-public/libs/diagram/0.0.26-2/';
window.RESOURCES_PATH = window.location.origin + '/joyspace-public/libs/diagram/resources';
window.RESOURCE_BASE = window.location.origin + '/joyspace-public/libs/diagram/resources/dia';
window.GRAPH_IMAGE_PATH = window.location.origin + '/joyspace-public/libs/diagram/img';
window.IMAGE_PATH = window.location.origin + '/joyspace-public/libs/diagram/images';
window.STENCIL_PATH = window.location.origin + '/joyspace-public/libs/diagram/stencils';
window.SHAPES_PATH = window.location.origin + '/joyspace-public/libs/diagram/shapes';
window.mxBasePath = window.location.origin + '/joyspace-public/libs/mxgraph';
window.mxImageBasePath = window.location.origin + '/joyspace-public/libs/mxgraph/images';
// 初始化
window.LOAD_USER_STATE = 'INIT';
window.LOAD_USER_CALLBACKS = [];
window.__CURRENT_USER__ = null;
// 加载FocusToken
window.LOAD_FOCUS_TOKEN_STATE = 'INIT';
window.LOAD_FOCUS_TOKEN_CALLBACKS = [];
window.__CURRENT_FOCUS_TOKEN__ = null;
window.FORBIDDEN_USERS = ['oyDAgIsrPXoo1z__k0wG', 'zrgwgAQc_k8eFlHV-965', 'xwJxi0uANYr0eql00OO3'];
try {
    if (window.location.search.indexOf('authToken=focus') >= 0) {
        const searchParams = window.location.search
            .split('&')
            .map((s) => s.split('='))
            .reduce((prev, ele) => {
            prev[ele[0]] = ele.slice(1).join('=');
            return prev;
        }, {});
        console.log('searchParams', searchParams);
        window.__MF_ENV['focus-token'] = searchParams['focus-token'] || '';
        window.__MF_ENV['focus-team-id'] = searchParams['focus-team-id'] || '';
    }
}
catch (e) { }
try {
    if (window.CURRENT_USER &&
        typeof window.CURRENT_USER !== 'string' &&
        window.CURRENT_GRAY_GROUPS &&
        typeof window.CURRENT_GRAY_GROUPS !== 'string') {
        window.__CURRENT_USER__ = window.CURRENT_USER;
        window.__CURRENT_USER__.grayGroups = window.CURRENT_GRAY_GROUPS || [];
        window.LOAD_USER_STATE = 'LOADED';
        window.__sgm_uid__ = window.CURRENT_USER.username || window.CURRENT_USER.id || '';
        if (window.CURRENT_USER.focusToken && window.CURRENT_USER.focusToken.accessToken) {
            window.__CURRENT_FOCUS_TOKEN__ = window.CURRENT_USER.focusToken;
            window.LOAD_FOCUS_TOKEN_STATE = 'LOADED';
        }
    }
}
catch (e) {
    console.error('parse user error', e);
}
try {
    window.getUserInfo = function () {
        return new Promise(function (resolve, reject) {
            if (window.LOAD_USER_STATE === 'LOADED') {
                return resolve(window.__CURRENT_USER__);
            }
            else if (window.LOAD_USER_STATE === 'ERROR') {
                return reject(new Error('load user error'));
            }
            else {
                window.LOAD_USER_CALLBACKS.push([resolve, reject]);
            }
        });
    };
    window.dealWithGetUserInfo = function () {
        var callbacks = window.LOAD_USER_CALLBACKS.slice();
        window.LOAD_USER_CALLBACKS.length = 0;
        callbacks.forEach(([resolve, reject]) => {
            if (window.LOAD_USER_STATE === 'ERROR') {
                reject(new Error('load user error'));
            }
            else {
                resolve(window.__CURRENT_USER__);
            }
        });
    };
}
catch (e) {
    console.log('getUserInfo failed', e);
}
try {
    if (window.LOAD_USER_STATE !== 'LOADED') {
        fetch(window.__MF_ENV['REACT_APP_API_HOST'] + '/v1/user/info' + (location.search || '?_=1'), {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((x) => x.json())
            .then((info) => {
            const user = info.data;
            if (user) {
                window.__sgm_uid__ = user.username || user.id || '';
                window.__CURRENT_USER__ = user;
                window.LOAD_USER_STATE = 'LOADED';
            }
            else {
                window.LOAD_USER_STATE = 'ERROR';
            }
            window.dealWithGetUserInfo();
        })
            .catch((e) => {
            window.LOAD_USER_STATE = 'ERROR';
            window.dealWithGetUserInfo();
        });
    }
}
catch (e) {
    window.LOAD_USER_STATE = 'ERROR';
    window.dealWithGetUserInfo();
    console.error('fetch user failed ->', e);
}
// 加载focus token
try {
    window.getFocusToken = function () {
        return new Promise(function (resolve, reject) {
            if (window.LOAD_FOCUS_TOKEN_STATE === 'LOADED') {
                return resolve(window.__CURRENT_FOCUS_TOKEN__);
            }
            else if (window.LOAD_FOCUS_TOKEN_STATE === 'ERROR') {
                return reject(new Error('load focus token error'));
            }
            else {
                window.LOAD_FOCUS_TOKEN_CALLBACKS.push([resolve, reject]);
            }
        });
    };
    // 处理Focus Token逻辑
    window.dealWithGetFocusToken = function () {
        var callbacks = window.LOAD_FOCUS_TOKEN_CALLBACKS.slice();
        window.LOAD_FOCUS_TOKEN_CALLBACKS.length = 0;
        callbacks.forEach(([resolve, reject]) => {
            if (window.LOAD_FOCUS_TOKEN_STATE === 'ERROR') {
                reject(new Error('load focus token error'));
            }
            else {
                resolve(window.__CURRENT_FOCUS_TOKEN__);
            }
        });
    };
}
catch (e) {
    console.log('getUserInfo ', e);
}
try {
    if (window.LOAD_FOCUS_TOKEN_STATE !== 'LOADED') {
        fetch(window.__MF_ENV['REACT_APP_API_HOST'] + '/v1/auth/exchangeFocusToken' + (location.search || '?_=1'), {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((x) => x.json())
            .then((info) => {
            const user = info.data;
            if (user) {
                window.__CURRENT_FOCUS_TOKEN__ = user;
                window.LOAD_FOCUS_TOKEN_STATE = 'LOADED';
            }
            else {
                window.LOAD_FOCUS_TOKEN_STATE = 'ERROR';
            }
            window.dealWithGetFocusToken();
        })
            .catch((e) => {
            window.LOAD_FOCUS_TOKEN_STATE = 'ERROR';
            window.dealWithGetFocusToken();
        });
    }
}
catch (e) {
    window.LOAD_FOCUS_TOKEN_STATE = 'ERROR';
    window.dealWithGetFocusToken();
    console.error('fetch focus token failed ->', e);
}
try {
    window.sentryBeforeSendTransaction = function (event) {
        var transaction = event.transaction;
        // 私人空间文件夹
        if (/^\/documents\/[A-Z-a-z0-9_-]{20,21}$/.test(transaction)) {
            event.transaction = '/documents/:folderId';
            return event;
        }
        // 团队空间文件夹
        if (/^\/teams\/[A-Z-a-z0-9_-]{20,21}$/.test(transaction)) {
            event.transaction = '/teams/:teamId';
            return event;
        }
        // 团队空间文件夹
        if (/^\/teams\/[A-Z-a-z0-9_-]{20,21}\/[A-Z-a-z0-9_-]{20,21}$/.test(transaction)) {
            event.transaction = '/teams/:teamId/:folderId';
            return event;
        }
        // 团队空间设置页面
        if (/^\/teams\/[A-Z-a-z0-9_-]{20,21}\/(.*)$/.test(transaction)) {
            event.transaction = transaction.replace(/^\/teams\/[A-Z-a-z0-9_-]{20,21}\/(.*)$/, '/teams/:teamId/$1');
            return event;
        }
        // 首页文件
        if (/^\/h\/([^\/]+)\/([^\/]+)\/[A-Z-a-z0-9_-]{20,21}$/.test(transaction)) {
            event.transaction = transaction.replace(/^\/h\/([^\/]+)\/([^\/]+)\/[A-Z-a-z0-9_-]{20,21}$/, '/h/$1/$2/:pageId');
            return event;
        }
        // 文件
        if (/^\/([^\/]+)\/[A-Z-a-z0-9_-]{20,21}$/.test(transaction)) {
            event.transaction = transaction.replace(/^\/([^\/]+)\/[A-Z-a-z0-9_-]{20,21}$/, '/$1/:pageId');
            return event;
        }
        // 文件
        if (/^\/knowledges\/item\/[^/]+$/.test(transaction)) {
            event.transaction = '/knowledges/item/:item';
            return event;
        }
        return event;
    };
}
catch (e) { }
try {
    window.addEventListener('popstate', function (event) {
        window.INIT_TIME_MS = Date.now();
        window.INIT_MODE = 'popstate';
    });
}
catch (e) {
    console.log('popstate change', e);
}
try {
    (function () {
        const HOME_PATHS = [
            '/h/',
            '/collection',
            '/trashes',
            '/teamspace',
            '/knowledge_base',
            '/creation-center',
            '/knowledges',
            '/weekly-report',
            '/km',
            '/tags',
        ];
        // 计算侧边栏宽度
        function calculateSiderWidth() {
            try {
                let width = Number(localStorage.getItem('sider.custom.width'));
                if (Number.isNaN(width) || width < 200 || width > 640) {
                    width = 260;
                }
                const isHome = window.location.pathname === '/' || HOME_PATHS.some((path) => window.location.pathname.startsWith(path));
                const isExpand = localStorage.getItem(`sider.custom.expand${isHome ? '' : '.team'}`);
                // 根据展开状态、是否为首页以及用户自定义的宽度 决定框架宽度
                return isExpand === 'false' ? (isHome ? 74 : 0) : width;
            }
            catch (error) {
                return 260;
            }
        }
        // 设置侧边栏宽度
        function setSiderWidth() {
            const siderWrap = document.getElementsByClassName('joyspace-wrap-jsmf-sider')[0];
            if (siderWrap) {
                const width = calculateSiderWidth();
                siderWrap.style.setProperty('min-width', width + 'px');
                return true;
            }
            return false;
        }
        // 创建观察器
        const observer = new MutationObserver(function (mutations) {
            if (setSiderWidth()) {
                observer.disconnect();
            }
        });
        // 开始观察
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });
        // 设置超时保护
        setTimeout(() => observer.disconnect(), 3000);
    })();
}
catch (error) { }
