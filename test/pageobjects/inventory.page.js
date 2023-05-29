const Page = require('./page')


class InventoryPage extends Page {

    get title () { return $('span.title')}
    get descFilterButton () { return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')}
    get btnLogout () {
        const nav = $$('#react-burger-menu-btn')
        return $$('a')[2]
    }

    open() {

        return super.open('inventory.html')
    }

}

module.exports = new InventoryPage()