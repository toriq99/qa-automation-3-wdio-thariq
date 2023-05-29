const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')


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
        
        await InventoryPage.logout()

        await expect(LoginPage.loginTitle).toHaveTextContaining("Swag Labs")
    })
})
