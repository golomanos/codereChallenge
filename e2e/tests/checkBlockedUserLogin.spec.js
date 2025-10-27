import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Check blocked user login attempt', () => {
    test('Attempting to login with blocked user credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToHomePage();
        await loginPage.openLoginModal();
        await loginPage.checkLoginModalIsVisible();
        await loginPage.fillLoginForm('root', 'blockedPassword123');
        await loginPage.checkBlockedUserLogin();
    });
});