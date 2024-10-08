import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MenuPage } from '../pages/menu';
import {  gestionPassagesPage } from '../pages/gestionPassages';


test('test', async ({ page }) => {
  test.setTimeout(160000);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const Gestion = new gestionPassagesPage(page)
  Login.gotoLoginPage();
  Login.login('ragheb.postman','poxerbarubary12');
  await Menu.gotoGestPage();
  await Gestion.clickCell();
  });
