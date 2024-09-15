exports.CreationTransporteurPage =  class CreationTransporteurPage {

    constructor (page)
    {
        this.page = page
        this.createCarrierButton = page.locator('span').filter({ hasText: 'CRÉER UN TRANSPORTEUR' }).first()
        this.Carriername = page.locator('span').filter({ hasText: '1TEST TRANSPORTEUR 2...' }).first()
        this.CarrierNameField = page.locator('input').getByLabel(' Nom du transporteur* : ')
        this.receiptId = page.locator('input').getByLabel(' Récépissé ID : ')
        this.validationCarrierButton = page.locator('p').getByText('VALIDER')
        this.DateDrop = page.locator('#createMailleForm').getByRole('textbox')
        this.date = page.locator('#createMailleForm').getByRole('textbox')
        this.DepartementDrop = page.locator('#createMailleForm').getByRole('textbox')
        this.departement = page.locator('#createMailleForm').getByRole('textbox')
        this.EntrepriseDrop = page.locator('#createMailleForm').getByRole('textbox')
        this.EntrepriseName = page.locator('#createMailleForm').getByRole('textbox')
    }

    async CreateCarrier()
    {
        this.createCarrierButton.click();
    }

    async selectCarrier()
    {
        this.Carriername.click();
    }
    

    async writeCarrierName (name){
        await this.CarrierNameField.fill(name);
    }

    async writeReceiptId (id){
        await this.receiptId.fill(id);
    }

    async selectDate(){

        await this.DateDrop.click();
        await this.date.click();
    }
    async selectDepartement(){

        await this.DepartementDrop.click();
        await this.departement.click();
    }

    async selectEntreprise(){

        await this.EntrepriseDrop.click();
        await this.EntrepriseName.click();
        
    }
    async selectCopy(){

        await this.CopyDrop.click();
        await this.Copy.click();
        
    }
    async validate()
    {
        this.validationCarrierButton.click();
    }


    

    
    
    

    
}