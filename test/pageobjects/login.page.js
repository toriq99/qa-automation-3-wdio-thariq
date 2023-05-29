const Page = require('./page')


class LoginPage extends Page {

    get UsernameInput () { return $('#user-name')}
    get PasswordInput () { return $('#password')}
    get LoginButton () { return $('#login-button')}
    get loginTitle () { return $('#root > div > div.login_logo')}

    async loginProcess (username, password) {
        await this.UsernameInput.setValue(username)
        await this.PasswordInput.setValue(password)
        await this.LoginButton.click()
    }

    open() {

        return super.open('inventory.html')
    }
}

module.exports = new LoginPage()