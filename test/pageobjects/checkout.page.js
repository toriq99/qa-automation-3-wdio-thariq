const Page = require('./page')


class CheckoutPage extends Page {

    // get First Name form
    get firstName () { return $('#first-name')}

    // get Last Name form
    get lastName () { return $('#last-name')}

    // get Postal Code form
    get postalCode () { return $('#postal-code')}

    // get continue button
    get continueBtn () { return $('#continue')}

    // get checkout page
    get checkoutInfo () { return $('#checkout_info_container > div > form > div.checkout_info')}
    
    
    async continueCheckout(firstname, lastname, postalcode) {
        await this.firstName.setValue(firstname)
        await this.lastName.setValue(lastname)
        await this.postalCode.setValue(postalcode)

        await this.continueBtn.click()
    }

    open() {
        return super.open('checkout-step-one.html')
    }
}


module.exports = new CheckoutPage()