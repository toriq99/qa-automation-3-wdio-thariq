const Page = require('./page')


class InventoryPage extends Page {

    // get inventory title
    get title () { return $('span.title')}

    // get filter button
    get descFilterButton () { return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')}
    
    // get navbar menu
    get navMenu () { return $('#react-burger-menu-btn')}
    
    // get logout button inside navbar menu
    get btnLogout () { return $('//*[@id="logout_sidebar_link"]')}
    
    // get product name
    get productName () { 
        const selector = $('//*[@id="item_4_title_link"]/div')
        const productTitle = selector.getText()
        const prodNameDetail = [selector, productTitle]

        return prodNameDetail
    }

    // get product image


    async openNavMenu () {
        await this.navMenu.click()
    }

   logout = async() => {
        await this.openNavMenu()
        await this.btnLogout.waitForDisplayed()
        await this.btnLogout.click()
    }

    openProductByTitle = async() => {
        await this.productName[0].click()
    }

    open() {

        return super.open('inventory.html')
    }

}

module.exports = new InventoryPage()