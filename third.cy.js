import blazedemo from '../fixtures/blazedemo.json'

class PurchaseFlight{

    personalData(){

        cy.wait(500);
        this.Nameinput.type(blazedemo.name);
        this.Adress.type(blazedemo.adress);
        this.City.type(blazedemo.city);
        this.State.type(blazedemo.state);
        this.ZipCode.type(blazedemo.zipCode);
        this.CreditCardNumber.type(blazedemo.creditCardnumber);
        this.CreditCardMonth.type(blazedemo.month);
        this.CreditCardYear.type(blazedemo.year);
        this.NameOnCard.type(blazedemo.nameoncard);
        this.CheckBox.click();
        this.Confirm.click();

}


get Nameinput(){
   return cy.get('#inputName');

}
      
get Adress(){
    return cy.get('#address');
}

get City(){

    return  cy.get('#city');
}

get State(){

    return cy.get('#state');
}
      
get ZipCode(){

    return cy.get('#zipCode');
}
     
get CreditCardNumber(){

    return cy.get('#creditCardNumber');
}

get CreditCardMonth(){

    return cy.get('#creditCardMonth');
}
      
 get CreditCardYear(){
    return cy.get('#creditCardYear');

 } 
 get NameOnCard(){
 return cy.get('#nameOnCard');
 }     
    
 get CheckBox(){

    return  cy.get('#rememberMe');
 }
     
 get Confirm(){

    return cy.get('.controls > .btn');
 }
     
      

}

export default new PurchaseFlight();