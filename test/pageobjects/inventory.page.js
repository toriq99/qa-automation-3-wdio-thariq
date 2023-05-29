const Page = require('./page')


class InventoryPage extends Page {

    // get inventory title
    get title () { return $('span.title')}
    
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

    // get filter button
    get btnFilter () { return $('//*[@id="header_container"]/div[2]/div/span/select') }

    // get descending filter product
    get descOption () { return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')}

    // get inventory container
    get inventoryContainer () { return $('//*[@id="inventory_container"]')}

    // get add to cart button
    get addToCartbtn () { return $('#add-to-cart-sauce-labs-backpack')}

    // get remove from cart button
    get removeCartbtn () { return $('#remove-sauce-labs-backpack')}

    // get span cart list
    get numIconCart () {return $('#shopping_cart_container > a > span')}

    // get cart icon
    get cartList () { return $('')}


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

    descFilterProduct = async() => {
        await this.btnFilter.click()
        await this.descOption.waitForDisplayed()
        await this.descOption.click()

        const title = $$('.inventory_item_name').map(function(element) {return element.innerHTML})

        function isAscending(arr) {
            return arr.every(function (x, i) {
                return i === 0 || x >= arr[i-1]
            })
        }

        await isAscending(title)
    }

    async addToCart () {
        await this.addToCartbtn.click()
        await this.removeCartbtn.waitForDisplayed()
    }

    open() {

        return super.open('inventory.html')
    }

}

module.exports = new InventoryPage()