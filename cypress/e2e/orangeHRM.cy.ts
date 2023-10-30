import { Login } from "../support/helpers/login";
import { faker } from "@faker-js/faker";


// Given The system has an employee with user login details
 
// When The employee logs into the system

//   And The employee adds the timesheet  (API)

// And Login with Admin user

// And Open the Employees timesheets table 
// Then The employee's timesheet should exist in the table

describe("testing time sheet", () => {
  beforeEach("Will Occur Befor Every Test", () => {
    cy.visit("/auth/login").then(() => {
      Login.login("Admin", "admin123"); // Perform the login
    });

  });

  it("checking the function of adding a new timesheet ", () => {
  });
});

