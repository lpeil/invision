/* eslint-disable no-undef */
import { clearUsers, createNewUser } from '../../src/store/modules/users/actions';

const user = {
  name: 'Test',
  email: 'test@example.com',
  password: '123456',
};

describe('<Sign In />', () => {
  it('Visit', () => {
    cy.visit(Cypress.env().baseURL);
  });

  it('Check with empty fields', () => {
    cy.get('.MuiButton-label').contains('Sign In').click();

    cy.get('input[name="email"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.empty);

    cy.get('input[name="password"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.empty);
  });

  it('Check with invalid email', () => {
    cy.get('input[name="email"]')
      .invoke('attr', 'value', 'invalid')
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign In').click();

    cy.get('input[name="email"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.invalidEmail);
  });

  it('Create a new user', () => {
    cy.window()
      .its('store')
      .invoke('dispatch', clearUsers());

    cy.window()
      .its('store')
      .invoke('dispatch', createNewUser(user));
  });

  it('Check with nonexistent email', () => {
    cy.get('input[name="email"]')
      .invoke('attr', 'value', 'carlos@gmail.com')
      .trigger('change');

    cy.get('input[name="password"]')
      .invoke('attr', 'value', '123456')
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign In').click();

    cy.get('input[name="email"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.nonexistentEmail);
  });

  it('Check with invalid password', () => {
    cy.get('input[name="email"]')
      .invoke('attr', 'value', user.email)
      .trigger('change');

    cy.get('input[name="password"]')
      .invoke('attr', 'value', `${user.password}wrong`)
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign In').click();

    cy.get('input[name="password"]')
      .parent()
      .siblings('p')
      .should('have.text', Cypress.env().errors.invalidPassword);
  });

  it('Check sign in', () => {
    cy.get('input[name="email"]')
      .invoke('attr', 'value', user.email)
      .trigger('change');

    cy.get('input[name="password"]')
      .invoke('attr', 'value', user.password)
      .trigger('change');

    cy.get('.MuiButton-label').contains('Sign In').click();

    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .should('deep.equal', user);
  });
});
