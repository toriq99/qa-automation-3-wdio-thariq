const Page = require('./page')


class DetailInventory extends Page {

    get prodTitle () { return $('//*[@id="inventory_item_container"]/div/div/div[2]/div[1]')}

    
}


module.exports = new DetailInventory()