class CartPage {

    constructor(page) {

        this.page = page;

        this.removeButton =
            '[data-test="remove-sauce-labs-backpack"]';

        this.checkoutButton =
            '[data-test="checkout"]';
    }

    async removeProduct() {

        await this.page.click(
            this.removeButton
        );
    }

    async checkout() {

        await this.page.click(
            this.checkoutButton
        );
    }

}

module.exports = CartPage;