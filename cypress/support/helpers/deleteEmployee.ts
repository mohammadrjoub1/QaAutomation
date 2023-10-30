export class DeletEmployees {
  static deleteEmp(empNumber) {
    cy.request({
      method: "DELETE",
      url: "/api/v2/pim/employees",
      body: {
        ids: [empNumber],
      },
    });
  }
}
