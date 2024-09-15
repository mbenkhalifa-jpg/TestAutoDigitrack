exports.CreationPassagesPage = class CreationPassagesPage {

    constructor (page)
    {
        this.page = page
        this.creaPassButton = page.getByText('CRÉER UN PASSAGE')
        //this.creaPassButton = page.locator("//button[contains(text(), 'CRÉER UN PASSAGE')]");
        this.chekBoxButton = page.getByRole('combobox').locator('newRegistrationScanModal');
        this.remplacementField = page.locator('#newRegistrationScanModal').getByRole('combobox');
        
        
    }

    async selecrCreationPassage (){

        await this.creaPassButton.click();
        //await this.validationButton.click(); 
         
    }  
    async selectSite (){

        await this.chekBoxButton.click();
       
         
    }  
    async writeRemplacement (Remplacement){
        
        await this.remplacementField.click();
        await this.remplacementField.fill(Remplacement);
    }
    
}