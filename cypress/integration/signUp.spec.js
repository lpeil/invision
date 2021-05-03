/* eslint-disable no-undef */
import { clearUsers, createNewUser } from '../../src/store/modules/users/actions';

const user = {
  name: 'Test',
  email: 'test@example.com',
  password: '123456',
};

describe('<Sign Up />', () => {
  it('Visit', () => {
    cy.visit(Cypress.env().baseURL);
    cy.get('.to-sign-up').click();
  });

  it('Create a mock user', () => {
    cy.window()
      .its('store')
      .invoke('dispatch', clearUsers());

    cy.window()
      .its('store')
      .invoke('dispatch', createNewUser(user));
  });

  it('Check with empty fields', () => {
    cy.get('.MuiButton-label').contains('Sign Up').click();

    cy.get('input[name="name"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.empty);

    cy.get('input[name="email"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.empty);

    cy.get('input[name="password"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.passwordMin);
  });

  it('Check with invalid email', () => {
    cy.get('input[name="email"]')
      .invoke('attr', 'value', 'invalid')
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign Up').click();

    cy.get('input[name="email"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.invalidEmail);
  });

  it('Check with password with less than 6 characters', () => {
    cy.get('input[name="password"]')
      .invoke('attr', 'value', '1234')
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign Up').click();

    cy.get('input[name="password"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.passwordMin);
  });

  it('Check create an existing email', () => {
    cy.get('input[name="name"]')
      .invoke('attr', 'value', user.email)
      .trigger('change');

    cy.get('input[name="email"]')
      .invoke('attr', 'value', user.email)
      .trigger('change');

    cy.get('input[name="password"]')
      .invoke('attr', 'value', `${user.password}`)
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign Up').click();

    cy.get('input[name="email"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.emailUsed);
  });

  it('Check Sign Up', () => {
    const newUser = {
      name: 'Luan',
      email: 'luan@email.com',
      password: '123123',
    };

    cy.get('input[name="name"]')
      .invoke('attr', 'value', newUser.name)
      .trigger('change');

    cy.get('input[name="email"]')
      .invoke('attr', 'value', newUser.email)
      .trigger('change');

    cy.get('input[name="password"]')
      .invoke('attr', 'value', newUser.password)
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign Up').click();

    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .its('name')
      .should('equal', newUser.name);

    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .its('email')
      .should('equal', newUser.email);

    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .its('id')
      .should('exist');
  });
});
