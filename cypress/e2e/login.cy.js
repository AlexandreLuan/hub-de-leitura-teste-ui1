// <reference types="cypress" />
import user from "../fixtures/usuario.json"
describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/login.html')
    
  });

    it('Deve fazer login com sucesso', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')

    });

    it('Deve fazer login com sucesso - Usando comando customizado', () => {
    cy.login('usuario@teste.com', 'user123')

    });

    it('Deve fazer login com sucesso com conta Admin - Usando comando customizado', () => {
    cy.login(user.email, user.senha)

    });

});
