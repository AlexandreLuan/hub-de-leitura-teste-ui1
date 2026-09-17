class CadastroPage {

    //Seletores
    campoNome() {
        return cy.get('#name')
    }

    campoEmail() {
        return cy.get('#email')
    }
    campoTelefone() {
        return cy.get('#phone')
    }
    campoSenha() {
        return cy.get('#password')
    }
    campoConfirmarSenha() {
        return cy.get('#confirm-password')
    }
    campoTermos() {
        return cy.get('#terms-agreement')
    }
    botaoCriarConta() {
        return cy.get('#register-btn')
    }

    //Métodos
    

    visitarPaginaCadastro() {

        cy.visit('register.html')

    }

    preencherFormularioCadastro(nome, email, telefone, senha, confirmarSenha) {
        if (nome) this.campoNome().clear().type(nome)
        if (email) this.campoEmail().clear().type(email)
        this.campoTelefone().type(telefone)
        if (senha) this.campoSenha().clear().type(senha)
        this.campoConfirmarSenha().clear().type(confirmarSenha)
        this.campoTermos().check()
        this.botaoCriarConta().click()
    }

}

export default new CadastroPage()