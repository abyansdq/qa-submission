const { test, expect } =
require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const users =
require('../utils/testUsers');

test(
'TC001 Login dengan akun valid',
async ({ page }) => {

    const login =
        new LoginPage(page);

    await login.goto();

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await expect(page)
        .toHaveURL(/inventory/);

});

test('TC002 Login gagal dengan password salah', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        users.invalidUser.username,
        users.invalidUser.password
    );

    const errorMessage =
        page.locator('[data-test="error"]');

    await expect(errorMessage)
        .toBeVisible();

    await expect(errorMessage)
        .toContainText(
            'Username and password do not match'
        );
});

test(
'TC013 - Login gagal menggunakan akun locked_out_user',
async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText(
        'Sorry, this user has been locked out.'
    );

});