describe('template spec', () => {
  it('passes', () => {
    // Visit the website
    cy.visit('https://stg-fr.rajapack.xyz/');

    // Click on the account icon
    cy.get('.icon-account').click();

    // Enter the username
    cy.get('#UserLoginDropdown').type('tnr_e2e_qstg@raja.fr');

    // Enter the password
    cy.get('#UserPasswordDropdown').type('Aa12345$');

    // Click the login submit button
    cy.get('.js-connexion-submit').click();
  });
});
