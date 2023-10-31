export class Login {
  static login(username, password) {
    cy.visit("/auth/login")
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get('.oxd-button').click();
  }
}
