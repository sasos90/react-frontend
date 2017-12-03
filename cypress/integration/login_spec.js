import {GeneralPageObject} from "./page_objects/general_po";

describe('User login, logout', () => {

  const page = new GeneralPageObject();
  const tester = {
    email: 'tester@email.com',
    password: 'somePassword'
  };

  beforeEach(() => {
    // Nothing for now.
  });

  it('should succesfully perform user login action', () => {
    // visit 'baseUrl'
    cy.visit('/');
    // open login modal
    page.getLoginNavButton().click();
    // check if modal was open
    page.getLoginActionButton();
    // submit inputs and click submit button
    cy.get('input[name="username"]').type(tester.email);
    cy.get('input[name="password"]').type(tester.password);
    page.getLoginActionButton().click();
    // verify that we were logged in
    page.getMenu();
  });

  it('should logout the user', () => {
    cy.login(tester.email, tester.password)
    // logout the user
    page.getLogoutButton().click();
    // verify that we are on the homepage again
    page.getLoginNavButton();
  });
});
