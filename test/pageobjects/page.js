class Page {
    open(path) {
        const baseURL = `https://www.saucedemo.com/${path}`

        browser.open(baseURL + path)
    }
}

module.exports = Page