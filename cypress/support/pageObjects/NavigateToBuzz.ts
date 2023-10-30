export class NavigateToBuzz {
  static goToBuzz() {
    cy.get(":nth-child(12) > .oxd-main-menu-item").click();
  }
}
