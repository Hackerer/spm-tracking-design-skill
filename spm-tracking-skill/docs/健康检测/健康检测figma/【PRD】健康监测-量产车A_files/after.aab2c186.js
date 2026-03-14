// 处理频繁重登陆问题,跳转到https
try {
    if (window.location.protocol !== 'https:' && window.location.hostname === 'joyspace.jd.com') {
        window.location.protocol = 'https:';
    }
}
catch (e) { }
try {
    var envTheme = '';
    if (window.meJsBridge || location.search.indexOf('env=timline') >= 0) {
        envTheme = 'env-timline';
    }
    if (window.__jagile__env__ || location.search.indexOf('env=jagile') >= 0) {
        envTheme = 'env-jagile';
    }
    if (envTheme) {
        document.body.classList.add(envTheme);
    }
}
catch (e) {
    console.error('judge env error', e);
}
try {
    // 处理 Windows 系统滚动条样式
    var isWindows = navigator.platform === 'Win32' ||
        navigator.userAgent.indexOf('Win32') >= 0 ||
        navigator.userAgent.indexOf('Win64') >= 0;
    if (isWindows) {
        document.body.classList.add('windows-scrollbar');
    }
    // 处理未捕获的Promise错误
    window.addEventListener('unhandledrejection', (event) => {
        event.preventDefault();
        console.warn('发生未处理的Promise错误：', event);
    });
}
catch (e) {
    console.error(e);
}
// 移动端处理
try {
    if (window.location.pathname.indexOf('/partial') >= 0) {
        window.getUserInfo().then((currentUser) => {
            // add stream config
            const jaq = (window.jaq = window.jaq || []);
            const tenantId = currentUser.team_id || currentUser.tenant_id || '';
            // 设置网站ID
            jaq.push(['account', 'JA2023_1824538']);
            jaq.push(['domain', 'jd.com']);
            jaq.push(['erp_account', currentUser.username || currentUser.user_id || currentUser.id || '']);
            // 设置扩展信息
            jaq.push(['tenant_id', currentUser.team_id || currentUser.tenant_id || '']);
            jaq.push(['extParams', `empId=${currentUser.id}&tenantId=${encodeURIComponent(tenantId)}`]);
            jaq.push(['anchorpvflag', 'true']);
            let ja = document.createElement('script');
            ja.type = 'text/javascript';
            ja.async = true;
            ja.src = '//wl.jd.com/joya.js';
            const s = document.getElementsByTagName('script')[0];
            if (s && s.parentNode) {
                s.parentNode.insertBefore(ja, s);
            }
        });
    }
}
catch (e) {
    console.log('popstate change', e);
}
//@ts-ignore
function getCookieValue(name, defaultValue = '') {
    try {
        const value = document.cookie.split('; ').find((row) => row.startsWith(name + '='));
        if (value) {
            // 使用 substring 而不是 split，避免 cookie 值中包含 = 号时被截断
            const cookieValue = value.substring(name.length + 1);
            return decodeURIComponent(cookieValue);
        }
        return defaultValue;
    }
    catch (error) {
        console.error('获取 cookie 失败:', error);
        return defaultValue;
    }
}
// 增加用研
try {
    if (!navigator.userAgent.includes('Electron')) {
        // 调用
        window.renderUxSceneResearch &&
            window.renderUxSceneResearch({
                app: 'JoySpace',
                appSecret: '978BFAB5C6A3BFEB90EE5111389FD36B',
                sceneId: '1112',
                loginType: getCookieValue('focus-token-type', '15'),
            });
        // 卸载
        window.addEventListener('beforeunload', () => {
            window.renderUxSceneResearch &&
                window.renderUxSceneResearch({
                    app: 'JoySpace',
                    appSecret: '978BFAB5C6A3BFEB90EE5111389FD36B',
                    sceneId: '1112',
                });
        });
    }
}
catch (error) { }
