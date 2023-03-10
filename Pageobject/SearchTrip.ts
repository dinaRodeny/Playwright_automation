import { Locator } from "@playwright/test"

   class SearchTrip
    {
    
        readonly DestTrip         : Locator
        readonly DesairportTrip   : Locator
        readonly month            : Locator
        readonly day              : Locator
        readonly returnMonth      : Locator
        readonly returnDay        : Locator
        readonly Passenger_Adult  : Locator
        readonly Passenger_Child  :Locator
        readonly DoneBttn         : Locator
        readonly searchBttn       : Locator


       constructor(page:Page)
       {
        this.sourceTrip             =page.locator('#input-button__departure')
        //country
        this.countrysourceTrip       =page.locator('fsw-countries div:nth-child(3) div:nth-child(6)')
        this.countryDesairportTrip   =page.locator('fsw-countries div:nth-child(6) div:nth-child(9)')
        //Airport
        this.airportsourceTrip       =page.locator('fsw-airport-item:nth-child(2)')
        this.airportDesairportTrip   =page.locator('fsw-airport-item:nth-child(10)')
       // choose the date
        this.month                   =page.locator('div:nth-of-type(9) > .m-toggle__month')
        this.day                     =page.locator(".datepicker__calendar:nth-of-type(1)>calendar-body>div>div>div[data-value='9']")
        //end Date
        this.returnMonth             =page.locator('div:nth-of-type(10) > .m-toggle__month')
        this.returnDay               =page.locator(".datepicker__calendar:nth-of-type(2)>calendar-body>div>div>div[data-value='9']")
        this.Passenger_Adult         =page.locator(".counter__button-wrapper--enabled").first()
        this.Passenger_Child         =page.locator(" ry-counter:nth-child(5) > .counter > .counter__button-wrapper--enabled")
        this.DoneBttn                =page.locator(".passengers__confirm-button.ry-button--anchor.ry-button--anchor-blue")
        this.searchBttn              =page.locator("button[aria-label='Search']")
    }
    /*
     async visit()
    {   
        console.log("is page closed",this.page.isClosed())

        await this.page.goto('https://www.ryanair.com/ie/en')
        
    }
    */
     
       async pickTrip()
        {
        
            await this.sourceTrip             .click();
            await this.countrysourceTrip      .click();
            await this.airportsourceTrip      .click();
            await this.countryDesairportTrip  .click();
            await this.airportDesairportTrip  .click();
            await this.month                  .click();
            await this.day                    .click();
            await this.returnMonth            .click();
            await this.returnDay              .click();
            await this.Passenger_Adult        .click();
            await this.Passenger_Child        .click();
            await this.DoneBttn               .click();
            await this.searchBttn             .click();
        
           
        }
    
    
    }
    export default SearchTrip;
    
   

    
    
    
    
