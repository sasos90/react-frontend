export class GeneralPageObject {
  getLoginNavButton() {
    return cy.get('.login-action button.login');
  }

  getLoginActionButton() {
    return cy.get('button.login-user');
  }

  getMenu() {
    return cy.get('.Menu');
  }

  getLogoutButton() {
    return cy.get('.Menu .logout-item');
  }
}
