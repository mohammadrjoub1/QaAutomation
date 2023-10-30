import { CreateFixtrue } from "../support/helpers/CreateFixture";
import { Posts } from "../support/helpers/Posts";
import { Login } from "../support/helpers/login";
import { NavigateToBuzz } from "../support/pageObjects/NavigateToBuzz";
describe("testing posts in Hrm", () => {
  beforeEach("Will Occur Befor Every Test", () => {
    cy.visit("/auth/login").then(() => {
      Login.login("Admin", "admin123"); // Perform the login
    });
  });

  it("testing the post function in the Buzz Area", () => {
    NavigateToBuzz.goToBuzz();
    CreateFixtrue.createFixtrue({ firstName: "Mohammad", lastName: "ahmed", email: "ok@gmail.com" });

    cy.fixture("myData.json").then((data) => {
      Posts.createPost(`Hello My first Name is ${data.firstName} ${data.lastName}`);
    });
  });
});
