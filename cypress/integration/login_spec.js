describe('User login, logout', () => {
  it('should succesfully perform user login action', () => {
    // visit 'baseUrl'
    cy.visit('/');
    // open login modal
    cy.get('.login-action button.login').click();
    // check if modal was open
    cy.get('button.login-user');
    // submit inputs and click submit button
    cy.get('input[name="username"]').type('tester@email.com');
    cy.get('input[name="password"]').type('somePassword');
    cy.get('button.login-user').click();
    // verify that we were logged in
    cy.get('.Menu');
  });
});
