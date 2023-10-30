export class AddTimeSheet {
  static addTimeSheet() {
    cy.request({
      method: "POST",
      url: "/api/v2/time/timesheets",
      body: {
        date: "2023-10-09",
      },
    }).then((response) => {
        cy.log(`status is ${response.body.data.status.name} and id is ${response.body.data.id}`);
       

      });
  }
}
