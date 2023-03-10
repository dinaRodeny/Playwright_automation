const {test, expect}  = require('@playwright/test');
import SearchTrip from '../Pageobject/SearchTrip' ;
import Homepage from '../Pageobject/Homepage';
import FlightList from '../Pageobject/FlightList';

test.describe('Search for a Flight Flow',()=>
{
    let  homepage    :Homepage
    let  searchforTrip:SearchTrip
    let  flightlist   :FlightList

test.beforeEach(async ({page})=>
{
    homepage      = new Homepage(page)
    searchforTrip = new SearchTrip(page)
    flightlist    = new FlightList(page)

    await  homepage.visit()
    await  homepage.cookies()
})
test('Positive scenario for Access Homepage and Search for Flight',async ({page})=>
{
   //await expect(page ).toHaveTitle(/ "Ryanair"/)
   //await expect(page ).toHaveURL('https://www.ryanair.com/ie/en')
   await searchforTrip.pickTrip()
   await flightlist.selectFlight()
   expect( flightlist.selectFare()).toHaveText("20 kg")
})
})

  


