class addEmployeeViaApi {



    addEmpViaAmpi(firstName: string, middleName: string, lastName: string) {


        cy.request({

            method: 'Post',
            url: '/api/v2/pim/employees',
            body: {

                firstName,
                middleName,

                lastName
            }


        }).then((response) => {

            expect(response).property('status').to.equal(200);
        });

    };







}


export default addEmployeeViaApi;