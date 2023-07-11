
class ChooseLowestPrice{

    LowestFlight(){
   cy.wait(5000);
   this.Lowestprice.click();

    }
    get Lowestprice(){
     return   cy.get(':nth-child(3) > :nth-child(2) > .btn');


    }

    
}

export default new ChooseLowestPrice();