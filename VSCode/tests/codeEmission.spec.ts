import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MenuPage } from '../pages/menu';
import { MatierePage } from '../pages/matiere';
import { creerMatiereModalPage } from '../pages/creerMatiereModal';


test('test', async ({ page }) => {
  
  test.setTimeout(100000);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const Matiere = new MatierePage(page)
  const creerMatiereModal = new creerMatiereModalPage(page);
  Login.gotoLoginPage();
  Login.login('ragheb.postman','poxerbarubary12')
  await page.waitForTimeout(15000);
  Menu.gotoMatPage();
  Matiere.clickCreaButton();
  creerMatiereModal.typeSelect("Matériau");
  await page.waitForTimeout(3000);
  creerMatiereModal.familleSelect("Bitume");
  await page.waitForTimeout(6000);
  creerMatiereModal.codeMateriauSelect("Bitume pur");
  await page.waitForTimeout(6000);
  await expect(creerMatiereModal.emissionChamp).toHaveValue('248')
  });

 

  




