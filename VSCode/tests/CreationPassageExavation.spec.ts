import { test } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MenuPage } from '../pages/menu';
import { CreationPassagesPage } from '../pages/CreationPassages';
import { creerMatiereModalPage } from '../pages/creerPassage';



test('test', async ({ page }) => {
  
  test.setTimeout(100000);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationPassage = new CreationPassagesPage(page)
  const creerPassage = new creerMatiereModalPage(page)
  
  Login.gotoLoginPage();
  await page.waitForTimeout(10000);
  Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*');
  await page.waitForTimeout(10000);
  Menu.gotoCreationPage();
  await page.waitForTimeout(10000);
  CreationPassage.selecrCreationPassage();
  await page.waitForTimeout( 10000);
  CreationPassage.writeRemplacement('AAA');
  creerPassage.validate();
  //creerPassage.close();
  await page.waitForTimeout(10000);
  
  //await page.waitForTimeout(50000);
  
  });

 


  




