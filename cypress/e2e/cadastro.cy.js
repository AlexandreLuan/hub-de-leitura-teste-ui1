
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    afterEach(() => {
        cy.screenshot()
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
            cy.url().should('include', 'dashboard')

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

    it('Deve fazer cadastro com sucesso, usando comando customizado', () => {
        let email = `alexandrelus${Date.now()}@gmail.com`
        let nome = faker.person.fullName({ sex: 'male' })
        cy.preencherCadastro(
            nome, email,
            '71981900500',
            'Teste@123',
            'Teste@123'
        )
        cy.url().should('include', '/dashboard')
    });
    
    it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
        const email = `alexandrelus${Date.now()}@gmail.com`
        cadastroPage.preencherFormularioCadastro('Alexandre Luan dos Santos', email, '71981900500', 'Teste@123', 'Teste@123')
        cy.url().should('include', '/dashboard')
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {

        cadastroPage.preencherFormularioCadastro('', 'alexandrelus@gmail.com', '71981900500', 'Teste@123', 'Teste@123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher email', () => {

        cadastroPage.preencherFormularioCadastro('Alexandre Luan dos Santos', '', '71981900500', 'Teste@123', 'Teste@123')
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório')
    });

    it.only('Deve validar mensagem ao tentar cadastrar sem preencher senha', () => {

        cadastroPage.preencherFormularioCadastro('Alexandre Luan dos Santos', 'alexandrelus@gmail.com', '71981900500', '', 'Teste@123')
        cy.get('#password-feedback').should('contain', 'Mínimo 6 caracteres')
    });

});