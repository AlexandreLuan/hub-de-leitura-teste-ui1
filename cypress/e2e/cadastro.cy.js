
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/register.html')
    });
    +
        it('Deve fazer cadastro com sucesso', () => {
            let email = `alexandrelus${Date.now()}@gmail.com`
            cy.get('#name').type('Alexandre Luan dos Santos')
            cy.get('#email').type(email)
            cy.get('#phone').type('71981900500')
            cy.get('#password').type('Teste@123')
            cy.get('#confirm-password').type('Teste@123')
            cy.get('#terms-agreement').check()
            cy.get('#register-btn').click()
            //Resultado esperado
            cy.url().should('include', '/dashboard')

        });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('71981900500')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', '/dashboard')
        cy.get('#user-name').should('contain', nome)

    });

});