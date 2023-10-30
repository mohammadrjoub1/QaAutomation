export class CreateEmployeeViaApi {
  static addEmployeeViaApi(empID, firstName, middleName, lastName, username, password) {
    return new Cypress.Promise((resolve) => {
      let employeeNumber;
  
      cy.log(`username is ${username}`);
  
      cy.request({
        method: "POST",
        url: "/api/v2/pim/employees",
        body: {
          empPicture: null,
          employeeId: empID,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
        },
      }).then((response) => {
        employeeNumber = response.body.data.empNumber;
        cy.log(`the employee number is ${employeeNumber}`);
         cy.request({
          method: "POST",
          url: "/api/v2/admin/users",
          body: {
            empNumber: employeeNumber,
            password: password,
            status: true,
            userRoleId: 2,
            username: username,
          },
        }).then(() => {
          resolve(employeeNumber); // Resolve the Promise with employeeNumber
        });
      });
    });
  }
  }
