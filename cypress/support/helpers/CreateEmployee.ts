export class CreateEmployee {
  static createEmployee(data) {
    cy.request({
      method: "POST",
      url: "/api/v2/pim/employees",
      body: {
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        empPicture: null,
        employeeId: "0599"
      },
    }).then((response)=>{

    })
  }
}
