export class loginAsAdmin {
    static loginAdmin() {
      cy.visit("/auth/login");
  
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
      cy.get(".oxd-button").click();
    }
  }
  