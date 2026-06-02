class InventoryPage {

    constructor(page) {

        this.page = page;

        this.sortDropdown =
            '.product_sort_container';

        this.inventoryItems =
            '.inventory_item';

        this.inventoryPrices =
            '.inventory_item_price';

        this.backpackAddButton =
            '[data-test="add-to-cart-sauce-labs-backpack"]';

        this.cartBadge =
            '.shopping_cart_badge';

        this.cartIcon =
            '.shopping_cart_link';

        this.menuButton =
            '#react-burger-menu-btn';

        this.logoutLink =
            '#logout_sidebar_link';
    }

    async sortLowToHigh() {

        await this.page.selectOption(
            this.sortDropdown,
            'lohi'
        );
    }

    async sortHighToLow() {

        await this.page.selectOption(
            this.sortDropdown,
            'hilo'
        );
    }

    async addBackpackToCart() {

        await this.page.click(
            this.backpackAddButton
        );
    }

    async openCart() {

        await this.page.click(
            this.cartIcon
        );
    }

    async logout() {

        await this.page.click(
            this.menuButton
        );

        await this.page.click(
            this.logoutLink
        );
    }

}

module.exports = InventoryPage;