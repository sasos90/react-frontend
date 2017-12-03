import {GeneralPageObject} from "./page_objects/general_po";

describe('User login, logout', () => {

  const page = new GeneralPageObject();

  beforeEach(() => {
    // Nothing for now.
  });

  it('should succesfully perform user login/logout action', () => {
    // visit 'baseUrl'
    cy.visit('/');
    // open login modal
    page.getLoginNavButton().click();
    // check if modal was open
    page.getLoginActionButton();
    // submit inputs and click submit button
    cy.get('input[name="username"]').type('tester@email.com');
    cy.get('input[name="password"]').type('somePassword');
    page.getLoginActionButton().click();
    // verify that we were logged in
    page.getMenu();

    // logout the user
    page.getLogoutButton().click();
    // verify that we are on the homepage again
    page.getLoginNavButton();
  });
});
