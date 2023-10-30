import { CreateFixtrue } from "./CreateFixture";

export class Posts {
  static createPost(postContent) {
    cy.get(".oxd-buzz-post-input").type(postContent);
    cy.get(".oxd-buzz-post-slot > .oxd-button").click();
    cy.reload();
    cy.get(".orangehrm-buzz-newsfeed").should("contain", postContent);
    Posts.deletCreatedPost();
  }
  static deletCreatedPost() {
    cy.get(":nth-child(1) > .oxd-sheet > .orangehrm-buzz-post > .orangehrm-buzz-post-header > .orangehrm-buzz-post-header-config > li > .oxd-icon-button > .oxd-icon").click({ force: true });
    cy.get(".oxd-dropdown-menu > :nth-child(1) > .oxd-text").click({ force: true });
    cy.get(".oxd-button--label-danger").click({ force: true });
  }
}
