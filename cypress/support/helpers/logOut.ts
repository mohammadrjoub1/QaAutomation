export class LogOut {
  static logOut() {
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
  }
}
