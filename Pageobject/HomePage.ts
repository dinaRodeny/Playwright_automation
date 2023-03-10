class Homepage
{


    readonly page               :Page
    readonly cookiesBttn        : Locator
    constructor(page:Page)
    {
        this.page          =page;
        this.cookiesBttn   =page.locator('.cookie-popup-with-overlay__button')
    }


 async visit()
    {   
        console.log("is page closed",this.page.isClosed())

        await this.page.goto('https://www.ryanair.com/ie/en')
        
    }
    async cookies()
    {
        await this.cookiesBttn               .click();
    }

}
export default Homepage;