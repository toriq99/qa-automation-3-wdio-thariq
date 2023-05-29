const Page = require('./page')


class CartPage extends Page {

    // get cart item
    get cartItemList () { return $('#cart_contents_container > div > div.cart_list > div.cart_item')}
    
    // get deleted cart item 
    get deletedCartList () {return $('#cart_contents_container > div > div.cart_list > div.removed_cart_item')}


    async delCartItem () {
        await this.deletedCartList.click()
    }


    open() {
        return super.open('cart.html')
    }
}


module.exports = CartPage