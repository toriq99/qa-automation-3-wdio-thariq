const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const LogoutPage = require('../pageobjects/logout.page')


describe('STORY LOGIN', () => {
    describe('Login dengan username dan password yang valid', () => {

        it('harus muncul judul halaman yang berisi teks produk', async() => {
            
            browser.url('/')

            await LoginPage.loginProcess('standard_user', 'secret_sauce')
            
            await expect(InventoryPage.title).toBeExisting()
            await expect(InventoryPage.title).toHaveTextContaining('Products')
        })
    })
})

describe('STORY LOGOUT', () => {

    it('harus kembali ke loginpage', async() => {
        
        await InventoryPage.btnLogout.click()
        await expect(LoginPage.loginTitle).toHaveTextContaining("Swag Labs")
    })
})

describe.skip('PRODUCT DETAILS', () => {
    describe('as a user i want to view product details', () => {

        it('should navigate to selected product detail', async() => {
            
            await InventoryPage.title.click()
            await expect()
        })
    })

    describe('as a user i want to sort product by descending order', () => {
        
        it('showing all product by descending (Z-A)', async() => {

            await InventoryPage.descFilterButton.click()
            await expect()
        })
    })

    describe('as a user i want to sort product price from high to low', () => {
        
        it('showing all product from highest price to low', () => {

        })
    })
})
