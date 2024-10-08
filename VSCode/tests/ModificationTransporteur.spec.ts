import {test} from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MenuPage } from '../pages/menu';
import { ModificationTransporteurPage } from '../pages/ModificationTransporteur';


test('test', async ({ page }) => {
  
  test.setTimeout(100000);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const ModificationTransporteur = new ModificationTransporteurPage(page) 
  Login.gotoLoginPage();
  await page.waitForTimeout(30000);
  Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*')
  await page.waitForTimeout(10000);
  Menu.gotoTransPage();
  await page.waitForTimeout(10000);
  ModificationTransporteur.selectCarrier();
  ModificationTransporteur.writeCarrierName ('TestUpdate');
  ModificationTransporteur.writeReceiptId('12');
  ModificationTransporteur.selectDate();
  ModificationTransporteur.selectDepartement ();
  ModificationTransporteur.selectEntreprise();
  ModificationTransporteur.selectDropRadioMosaique();
  ModificationTransporteur.selectDropMIC();
  ModificationTransporteur.validate();
  await page.waitForTimeout( 10000);
 
  
  });

 


  




