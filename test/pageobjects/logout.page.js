const Page = require('./page')


class LogoutPage extends Page {

    get btnLogout () { return $('#logout_sidebar_link')}
    get loginTitle () { return $('#root > div > div.login_logo')}

    open() {
        return super.open('inventory.html')
    }
}


module.exports = new LogoutPage()