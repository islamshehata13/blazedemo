import blazedemo from '../fixtures/blazedemo.json'
class SelectCities{

    SelectCities(){
        cy.visit(blazedemo.Website);
        this.DepatureCity.select(blazedemo.DepCity);
        this.DestinationCity.select(blazedemo.DestCity);
        this.Confirm.click();

    }




get DepatureCity(){
    return cy.get('[name="fromPort"]');

}

get DestinationCity(){
return cy.get('[name="toPort"]');

}

get Confirm(){
return cy.get('form > .container > .btn');

}
}

export default new SelectCities();

