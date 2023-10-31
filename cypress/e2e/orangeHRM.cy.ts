import { Login } from "../support/helpers/login";
import { faker } from "@faker-js/faker";

describe("testing", () => {
  beforeEach("senarion #1", () => {
    Login.login("Admin", "admin123"); // Perform the login

  });

  it("TC #1", () => {
  });
});
