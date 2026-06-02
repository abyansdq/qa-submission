const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const users = require('../utils/testUsers');

test.describe('Inventory Module', () => {

    test('TC005 - Menampilkan daftar produk', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        const products = page.locator('.inventory_item');

        await expect(products).toHaveCount(6);
    });

    test('TC006 - Sorting produk berdasarkan harga termurah', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventoryPage.sortLowToHigh();

        const prices = await page
            .locator('.inventory_item_price')
            .allTextContents();

        const numericPrices = prices.map(
            price => Number(price.replace('$', ''))
        );

        const sortedPrices = [...numericPrices]
            .sort((a, b) => a - b);

        expect(numericPrices)
            .toEqual(sortedPrices);
    });

    test('TC007 - Sorting produk berdasarkan harga termahal', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventoryPage.sortHighToLow();

        const prices = await page
            .locator('.inventory_item_price')
            .allTextContents();

        const numericPrices = prices.map(
            price => Number(price.replace('$', ''))
        );

        const sortedPrices = [...numericPrices]
            .sort((a, b) => b - a);

        expect(numericPrices)
            .toEqual(sortedPrices);
    });

});