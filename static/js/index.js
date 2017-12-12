var router = function(event, page) {
    if (event.target.className.indexOf('active') == -1) {    
        switchPage(page)
        pushState(page)
    }
}

var switchPage = function(page) {
    var body = e('.main')
    var target = 0
    if (page == 'news') {
        target = 1
        body.innerHTML = '<img src="images/2.jpg" />'
        document.title = '响铛铛琴行——————新闻中心'
    } else if (page == 'details') {
        target = 2
        body.innerHTML = '<img src="images/3.jpg" />'
        document.title = '响铛铛琴行——————走进响铛铛'
    } else {
        body.innerHTML = '<img src="images/1.jpg" />'
        document.title = '响铛铛琴行——————专注少儿乐队专业音乐培训'
    }
    var elements = es('.item')
    for (let i = 0; i < elements.length; i++) {
        removeClass(elements[i], 'active')
    }
    elements[target].classList.add('active')
}

var pushState = function(page) {
    // 切换地址栏信息
    var url = ''
    if (page == 'index') {
        url = 'index.html'
    }
    else {
        url = 'index.html?page=' + page
    }
    var state = {
        page: page,
        title: document.title
    }
    history.pushState(state, 'title', url)
    log('push state', state, page)
}

var initApp = function() {
    // 根据地址栏的参数来显示不同的页面
    var query = location.search
    var [k, v] = query.slice(1).split('=')
    var validPages = ['news', 'details']
    if (k == 'page') {
        for (let i = 0; i < validPages.length; i++) {
            if (validPages[i] == v) {
                switchPage(validPages[i])
            }
        }
    } else {
        history.replaceState({ title: document.title }, 'title', 'index.html')
        switchPage('index')
    }
}

var _main = function() {
    initApp()
    window.addEventListener("popstate", function(e) {
        var state = e.state;
        // state 就是 pushState 的第一个参数
        log('pop state', state)
        initApp()
        document.title = state.title
    })
}

_main()