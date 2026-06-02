const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

const users = require('../utils/testUsers');

test.describe('Cart Module', () => {

    test('TC008 - Menambahkan produk ke keranjang', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventoryPage.addBackpackToCart();

        await expect(
            page.locator('.shopping_cart_badge')
        ).toHaveText('1');
    });

    test('TC009 - Menghapus produk dari keranjang', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await cartPage.removeProduct();

        await expect(
            page.locator('.cart_item')
        ).toHaveCount(0);
    });

});