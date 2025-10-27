import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Check Login response for non-existent user', () => {
    test('Attempting to login with non-existent user credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        try {
          await loginPage.goToHomePage();
        }catch (error) {
          if (error.message.includes('Access Denied - 403')) {
            test.skip(true, 'Skipping test due to access denied error on homepage');
          }}
        
        await loginPage.openLoginModal();
        await loginPage.checkLoginModalIsVisible();
        await loginPage.fillLoginForm('nonExistentUser', 'somePassword123');
        
    }); 
});