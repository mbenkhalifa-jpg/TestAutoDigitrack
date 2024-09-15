import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MenuPage } from '../pages/menu';
import { MatierePage } from '../pages/matiere';


test('test', async ({ page }) => {
  test.setTimeout(100000);

  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const Matiere = new MatierePage(page)
  Login.gotoLoginPage();
  Login.login('ragheb.postman','poxerbarubary12')
  await page.waitForTimeout(15000);
  Menu.gotoMatPage();
  Matiere.clickClosedTab();
  Matiere.clickOpenTab();
  Matiere.clickClosedTab();

  
  await page.locator('#createDumpingForm').getByRole('textbox').first().click();
  await page.locator('#createDumpingForm').getByRole('textbox').first().fill('ttesttt');
  await page.locator('#createDumpingForm').getByRole('textbox').nth(1).click();
  await page.locator('#createDumpingForm').getByRole('textbox').nth(1).fill('AB');
  await page.locator('#wording').click();
  await page.locator('#wording').fill('12 rue');
  await page.locator('a').filter({ hasText: 'modifier la localisation' }).click();
  await page.getByText('Rue Pelleport 33800 Bordeaux').click();
  await page.locator('app-form-company').getByLabel('dropdown trigger').click();
  await page.getByText('transporteur_maelle').click();
  await page.getByRole('dialog').click();
  await page.locator('html').click();
  await page.locator('#editCreateTransporterModal').getByText('VALIDER').click();
  });


