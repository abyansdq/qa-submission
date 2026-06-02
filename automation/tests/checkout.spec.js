const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const users = require('../utils/testUsers');
const testData = require('../fixtures/testData.json');

test.describe('Checkout Module', () => {

    test('TC010 - Checkout berhasil dengan data valid', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await cartPage.checkout();

        await checkoutPage.fillInformation(
            testData.checkout.firstName,
            testData.checkout.lastName,
            testData.checkout.postalCode
        );

        await checkoutPage.finishOrder();

        await expect(
            page.locator('.complete-header')
        ).toHaveText(
            'Thank you for your order!'
        );
    });

});

test(
'TC011 - Checkout gagal ketika First Name kosong',
async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.checkout();

    await checkoutPage.fillInformation(
        '',
        testData.checkout.lastName,
        testData.checkout.postalCode
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText(
        'First Name is required'
    );

});

test(
'TC012 - Checkout gagal ketika Postal Code kosong',
async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.checkout();

    await checkoutPage.fillInformation(
        testData.checkout.firstName,
        testData.checkout.lastName,
        ''
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText(
        'Postal Code is required'
    );

});