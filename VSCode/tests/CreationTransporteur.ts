import {test} from '@playwright/test' ;
import { LoginPage } from '../pages/login'
import { MenuPage } from '../pages/menu';
import { CreationTransporteurPage } from '../pages/transporteur';


test('test', async ({ page }) => {
  
  test.setTimeout(100000);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationTransporteur = new CreationTransporteurPage(page)
  
  
  Login.gotoLoginPage();
  Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*')
  await page.waitForTimeout(10000);
  Menu.gotoTransPage();
  await page.waitForTimeout(10000);
  CreationTransporteur.CreateCarrier();
  CreationTransporteur.selectCarrier();
  CreationTransporteur.writeCarrierName ('marwa');
  CreationTransporteur.writeReceiptId('5');
  //CreationTransporteur.CreateCarrier();
  await page.waitForTimeout( 10000);
 
  //creerPassage.close();
  await page.waitForTimeout(10000);
  
  //await page.waitForTimeout(50000);
  
  });

 


  




