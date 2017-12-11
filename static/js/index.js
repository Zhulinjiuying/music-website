var router = function(event, page) {
    if (event.target.className.indexOf('active') == -1) {
        var elements = es('.item')
        for (let i = 0; i < elements.length; i++) {
            removeClass(elements[i], 'active')
        }
        event.target.classList.add('active')
        
        switchPage(page)
    }
}

var switchPage = function(page) {
    var body = e('.main')
    if (page == 'index') {
        body.innerHTML = '<img src="images/1.jpg" />'
        document.title = '响铛铛琴行——————专注少儿乐队专业音乐培训'
        pushState(page)
    } else if (page == 'news') {
        body.innerHTML = '<img src="images/2.jpg" />'
        document.title = '响铛铛琴行——————新闻中心'
        pushState(page)
    } else {
        body.innerHTML = '<img src="images/3.jpg" />'
        document.title = '响铛铛琴行——————走进响铛铛'
        pushState(page)
    }
}

var pushState = function(page) {
    // 切换地址栏信息
    // todo-new todo-list
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
}