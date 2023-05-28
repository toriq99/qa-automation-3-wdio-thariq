class Page {
    open(path) {
        const baseURL = 'https://www.saucedemo.com/'

        browser.open(baseURL + path)
    }
}

module.exports = Page