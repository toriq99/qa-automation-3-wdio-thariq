const InventoryPage = require('../pageobjects/inventory.page')
const DetailInventory = require('../pageobjects/detail-inventory.page')
const LoginPage = require('../pageobjects/login.page')


describe('ADD TO CART STORY', () => {
    describe('as a user i want to add to cart via product list', () => {

        it('button should change from "add to cart" to "remove"', async() => {
            
            browser.url('/')

            await LoginPage.loginProcess('standard_user', 'secret_sauce')
            await InventoryPage.addToCart()
            
            await expect(InventoryPage.removeCartbtn).toHaveTextContaining('Remove')
            await expect(InventoryPage.numIconCart).toHaveTextContaining('1')
        })

        it('cart icon should be +1"', async() => {
            
            await expect(InventoryPage.numIconCart).toHaveTextContaining('1')
        })
    })
})