export class CreateFixtrue {
  static createFixtrue(myJson) {
    cy.writeFile("cypress/fixtures/myData.json", myJson);
  }
}
