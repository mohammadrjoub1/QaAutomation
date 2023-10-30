import { AddTimeSheet } from "../support/helpers/AddTimeSheet";
import { CreateEmployeeViaApi } from "../support/helpers/CreateEmployee";
import { DeletEmployees } from "../support/helpers/deleteEmployee";
import { LogOut } from "../support/helpers/logOut";
import { Login } from "../support/helpers/login";
import { faker } from "@faker-js/faker";

// Given The system has an employee with user login details

// When The employee logs into the system

//   And The employee adds the timesheet  (API)

// And Login with Admin user

// And Open the Employees timesheets table
// Then The employee's timesheet should exist in the table
let empNumber;
let randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
describe("testing time sheet", () => {
  beforeEach("Will Occur Befor Every Test", () => {
    cy.visit("/auth/login").then(() => {
      Login.login("Admin", "admin123");
      cy.fixture("empData.json").then((data) => {
        CreateEmployeeViaApi.addEmployeeViaApi(data.id, data.firstName, data.middleName, data.lastName, `${data.username}${randomNumber}`, data.password).then((employeenumber) => {
          empNumber = employeenumber;
          cy.log(`${empNumber}`);
        });
      });
    });
  });

  it("checking the function of adding a new timesheet ", () => {
    cy.log(empNumber);
    LogOut.logOut();
    cy.fixture("empData.json").then((data) => {
      Login.login(`${data.username}${randomNumber}`, data.password);
      AddTimeSheet.addTimeSheet();
    });
  });
});
