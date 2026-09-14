describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')

  });

  it('Deve preencher o formulário de contato com sucesso', () => {

    cy.get('input[name="name"]').type('Alexandre Luan')
    cy.get('input[name="email"]').type('alexandreluand@gmail.com')
    cy.get('select[name="subject"]').select('Sugestões')
    cy.get('textarea[name="message"]').type('Gostaria de sugerir a inclusão de um novo recurso no site.')
    cy.get('button[type="submit"]').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('input[name="name"]').clear()
    cy.get('input[name="email"]').type('alexandreluand@gmail.com')
    cy.get('select[name="subject"]').select('Sugestões')
    cy.get('textarea[name="message"]').type('Gostaria de sugerir a inclusão de um novo recurso no site.')
    cy.get('button[type="submit"]').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('input[name="name"]').type('Alexandre Luan')
    cy.get('input[name="email"]').clear()
    cy.get('select[name="subject"]').select('Sugestões')
    cy.get('textarea[name="message"]').type('Gostaria de sugerir a inclusão de um novo recurso no site.')
    cy.get('button[type="submit"]').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')

  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('input[name="name"]').type('Alexandre Luan')
    cy.get('input[name="email"]').type('alexandreluand@gmail.com')
    //cy.get('select[name="subject"]').select('Sugestões')
    cy.get('textarea[name="message"]').type('Gostaria de sugerir a inclusão de um novo recurso no site.')
    cy.get('button[type="submit"]').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('input[name="name"]').type('Alexandre Luan')
    cy.get('input[name="email"]').type('alexandreluand@gmail.com')
    cy.get('select[name="subject"]').select('Sugestões')
    //cy.get('textarea[name="message"]').type('Gostaria de sugerir a inclusão de um novo recurso no site.')
    cy.get('button[type="submit"]').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')

  });

});