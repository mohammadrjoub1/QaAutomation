import { Login } from "../support/helpers/login";

describe("testing posts in Hrm", () => {
  beforeEach("Will Occur Befor Every Test", () => {
    cy.visit("/auth/login").then(() => {
      Login.login("Admin", "admin123"); // Perform the login
    });
  });

  it("testing the post function in the Buzz Area", () => {
  });
});
