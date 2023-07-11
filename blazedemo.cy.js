Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

import SelectCities from '../pages/first.cy'
import ChooseLowestPrice from '../pages/second.cy'
import PurchaseFlight from '../pages/third.cy'
import PurchasConfirmation from '../pages/fourth.cy'

describe('Select Flight and purchase', () => {

   
  
    it('Select the Depature and Destination Cities', () => {
        SelectCities.SelectCities();

    })

   it('Select the lowest Price Flight', () => {
    SelectCities.SelectCities();
    ChooseLowestPrice.LowestFlight();

    })

    it('Fill out the Purchasing form with personal Data', () => {
        SelectCities.SelectCities();
        ChooseLowestPrice.LowestFlight();
        PurchaseFlight.personalData();
        })
    
        it('Check the confirmation message', () => {
            SelectCities.SelectCities();
            ChooseLowestPrice.LowestFlight();
            PurchaseFlight.personalData();
            PurchasConfirmation.confirmed();

        })
       

})

