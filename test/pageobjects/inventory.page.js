const Page = require('./page')


class InventoryPage extends Page {

    get title () { return $('span.title')}
    get descFilterButton () { return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')}
    get btnLogout () { return $('//*[@id="logout_sidebar_link"]')}
    get navMenu () { return $('#react-burger-menu-btn')}

    async openNavMenu () {
        await this.navMenu.click()
    }

   async logout () {
        await this.openNavMenu()
        await this.btnLogout.waitForDisplayed()
        await this.btnLogout.click()
    }

    open() {

        return super.open('inventory.html')
    }

}

module.exports = new InventoryPage()