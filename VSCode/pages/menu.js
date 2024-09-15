exports.MenuPage =  class MenuPage {

    constructor (page)
    {

        this.page = page
        this.menuButton = page.locator('span').filter({ hasText: 'Menu' }).first()
        this.creaButton = page.getByRole('button', { name: 'CRÉATION DES PASSAGES' })
        this.gestButton = page.getByRole('button', { name: 'SUIVI DES PASSAGES' })
        this.recotButton = page.getByRole('button', { name: 'DOCUMENTS IMPORTÉS' })
        this.vdsButton = page.getByRole('button', { name: 'VUE DE SYNTHÈSE' })
        this.envButton = page.getByRole('button', { name: 'BILAN ENVIRONNEMENTAL' })
        this.dataButton = page.getByRole('button', { name: 'DONNÉES INCOMPLÈTES' })
        this.confButton = page.getByRole('button', { name: 'CONFIGURATION' })
        this.matButton = page.getByRole('button', { name: 'MATÉRIAUX' })
        this.provButton = page.getByRole('button', { name: 'PROVENANCES' })
        this.truckButton = page.getByRole('button', { name: 'CAMIONS' })
        this.transButton = page.getByRole('button', { name: 'TRANSPORTEURS' })
        this.entButton = page.getByRole('button', { name: 'ENTREPRISES' })
        this.filButton = page.getByRole('button', { name: 'FILIÈRES' })
       

    }
    
    async gotoCreationPage(){
        await this.menuButton.click()
        await this.creaButton.click();
        
    }

    async gotoGestPage()
    {
        await this.menuButton.click()
        await this.gestButton.click();
    }

    async gotoRecotPage()
    {
        await this.menuButton.click()
        await this.recotButton.click();
    }

    async gotoVdsPage()
    {
        await this.menuButton.click()
        await this.vdsButton.click();
    }

    async gotoEnvPage()
    {
        await this.menuButton.click()
        await this.envButton.click();
    }

    async gotoDataPage()
    {
        await this.menuButton.click()
        await this.dataButton.click();
    }

    async gotoMatPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.matButton.click();
    }

    async gotoProvPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.provButton.click();
    }

    async gotoTruckPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.truckButton.click();
    }

    async gotoTransPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.transButton.click();
    }

    async gotoEntPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.entButton.click();
    }

    async gotoFilPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.filButton.click();
    }
}


