import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

const cases = [
  { name: 'both empty', user: '', pass: '' },
  { name: 'username empty', user: '', pass: 'somePassword' },
  { name: 'password empty', user: 'someUser', pass: '' },
];

test.describe('Empty / partial-empty login validation', () => {
  for (const c of cases) {
    test(c.name, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goToHomePage();
      await loginPage.openLoginModal();
      await loginPage.checkLoginModalIsVisible();

      await loginPage.fillLoginForm(c.user, c.pass);

      // Exact message assertion
      await expect(loginPage.emptyLoginErrorMsg).toHaveText('Revisa que todos los campos estén rellenos');

      // The modal should remain visible (no navigation away)
      await loginPage.checkLoginModalIsVisible();

      // Click OK to dismiss the alert
      await loginPage.okButton.click();
    });
  }
});
