﻿import { Login } from "../support/helpers/login";
import { faker } from "@faker-js/faker";

describe("seneario#1", () => {
  beforeEach("Will Occur Befor Every Test", () => {
    cy.visit("/auth/login").then(() => {
      Login.login("Admin", "admin123"); // Perform the login
    });
  });

  it("testing ", () => {
  });
});
