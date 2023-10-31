import { faker } from "@faker-js/faker";
import { createEmployeeViaApi } from "../support/helpers/createEmployeeViaApi";
import { loginWithEmployeeViaUi } from "../support/helpers/loginWithEmployeeViaUi";
import { addCandidate } from "../support/helpers/addCandidate";
import { loginAsAdmin } from "../support/pageObjects/loginAsAdmin";

describe("senario #1", () => {
  beforeEach(() => {
    loginAsAdmin.loginAdmin();
  });

  it("Create Employee Then Login with the new Employee", () => {
    cy.fixture("employeeData").then((data) => {
      const username = faker.internet.userName();

      createEmployeeViaApi.addEmployeeViaApi(data.empID, data.firstName, data.lastName, data.middleName, username, data.password)
      loginWithEmployeeViaUi.loginViaUi(username, data.password);
    });
  });

  it("create a candidate Then upload file and make the assertion", () => {
    cy.visit("/recruitment/addCandidate");
    addCandidate.createNewCandidate(faker.person.firstName(), faker.person.middleName(), faker.person.lastName());
    addCandidate.uploadFileWithAssertion("cypress/fixtures/RJOUB123.pdf");
  });
});
