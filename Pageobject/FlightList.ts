class FlightList
{


    readonly page                      :Page
    readonly select_Arr_Ticket         : Locator
    readonly select_Return_Ticket      : Locator
    readonly fares                     : Locator
    
    constructor(page:Page)
    {
        this.page                 =page;
        this.select_Arr_Ticket    =page.locator('flight-list div flight-card:nth-child(1) div div.card-price button').first()
        this.select_Return_Ticket =page.locator('flight-list div flight-card:nth-child(1) div div.card-price button').first()
        this.fares                =page.locator ('fare-card div .fare-card__subtitle').filter({ hasText:"Includes 20kg Check-in Bag"})  
        //this.fares_ExtraWeight    =page.locator ('fare-card')
    }


 async selectFlight()
    {  
        await this.select_Arr_Ticket           .click(); 
        await this.select_Return_Ticket        .click(); 

    }

    selectFare()
    {
        this.fares.click()
         return this.fares

      // this.selectedFare= this.fares.filter({ hasText:"Includes 20kg Check-in Bag"})       
       //return this.selectedFare.getByRole('span', { class: 'subtitle-m-lg fare-card__subtitle' })


    }

}
export default FlightList;