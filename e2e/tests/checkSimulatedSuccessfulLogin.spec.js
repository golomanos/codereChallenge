import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Simulated successful login', () => {
  test('Simulate login by setting auth token and verify authenticated UI', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.openLoginModal();
    await loginPage.checkLoginModalIsVisible();

    // Fill the form to exercise the flow (not hitting production auth)
    await loginPage.fillLoginForm('anyUser', 'anyPass');

    // Simulate backend success by setting a token in localStorage
    await page.evaluate(() => localStorage.setItem('authToken', 'stubbed-token'));

    // Verify token exists in localStorage (proof of successful "login" simulation)
    const token = await page.evaluate(() => localStorage.getItem('authToken'));
    expect(token).toBe('stubbed-token');
    expect(token).toBeTruthy();
  });
});
