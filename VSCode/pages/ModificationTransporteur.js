exports.ModificationTransporteurPage =  class ModificationTransporteurPage {

    constructor (page)
    {
        this.page = page
        //this.updateCarrierButton = page.locator('#editCreateTransporterModal').getByText('VALIDER');
        this.Carriername = page.locator('td:nth-child(4)').first()
        this.CarrierNameField = page.getByRole('textbox').nth(1)
        this.receiptId = page.getByRole('textbox').nth(2)
        this.validationCarrierButton = page.locator('#editCreateTransporterModal').getByText('VALIDER')
        this.DateDrop = page.locator('#createTransporterForm')
        this.date = page.getByRole('spinbutton')
        //this.DepartementDrop = page.getByRole('spinbutton')
        this.departement = page.locator('#createMailleForm').getByRole('textbox')
        this.EntrepriseDrop = page.locator('#pn_id_430').getByLabel('dropdown trigger')
        this.EntrepriseName = page.getByLabel('2M FRET').getByText('2M FRET')
        this.radioM =page.getByRole('radio').first()
        this.DropMIC =page.locator('#pn_id_428').getByLabel('dropdown trigger')
        this.MIC =page.getByText('option 4')

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

    async selectDate(date){

        await this.date.fill(date);
    }
    async selectDepartement(){

        await this.DepartementDrop.click();
        await this.departement.click();
    }

    async selectEntreprise(){

        await this.EntrepriseDrop.click();
        await this.EntrepriseName.click();
        
    }
    
    async selectDropRadioMosaique(){

        await this.radioM.click();
     
    }
    async selectDropMIC(){

        await this.DropMIC.click();
        await this.MIC.click();
        
    }
    async validate()
    {
        this.validationCarrierButton.click();
    }


    

    
    
    

    
}