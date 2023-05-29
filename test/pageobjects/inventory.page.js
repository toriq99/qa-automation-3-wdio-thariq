const Page = require('./page')


class InventoryPage extends Page {

    get title () { return $('span.title')}
    get descFilterButton () { return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')}
    get btnLogout () { return $('//*[@id="logout_sidebar_link"]')}

    open() {

        return super.open('inventory.html')
    }

}

module.exports = new InventoryPage()