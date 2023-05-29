const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')
const CheckoutPage = require('../pageobjects/checkout.page')
const CartPage = require('../pageobjects/cart.page')


describe('CHECKOUT STORY', () => {
    describe('as a user i want to checkout my order', () => {

        it('should navigate to form page"', async() => {
            
            browser.url('/')

            await LoginPage.loginProcess('standard_user', 'secret_sauce')
            await InventoryPage.addToCart()
            await InventoryPage.cartList()
            await CartPage.clickCheckout()

            expect(CheckoutPage.checkoutInfo).toBeExisting()
        })

        it('filling form with valid data', async() => {

            await CheckoutPage.continueCheckout('Tanjiro', 'Kamado', '81181')

            
        })
    })
})