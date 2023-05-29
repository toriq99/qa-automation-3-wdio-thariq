const InventoryPage = require('../pageobjects/inventory.page')
const DetailInventory = require('../pageobjects/detail-inventory.page')
const LoginPage = require('../pageobjects/login.page')


describe('PRODUCT DETAILS', () => {
    describe('as a user i want to view product details', () => {

        it('should navigate to selected product detail by click product title', async() => {
            
            browser.url('/')

            await LoginPage.loginProcess('standard_user', 'secret_sauce')
            await InventoryPage.openProductByTitle()
            
            await expect(DetailInventory.prodTitle).toHaveTextContaining('Sauce Labs')
        })
    })

    describe.skip('as a user i want to sort product by descending order', () => {
        
        it('showing all product by descending (Z-A)', async() => {

            await InventoryPage.descFilterButton.click()
            await expect()
        })
    })

    describe.skip('as a user i want to sort product price from high to low', () => {
        
        it('showing all product from highest price to low', () => {

        })
    })
})