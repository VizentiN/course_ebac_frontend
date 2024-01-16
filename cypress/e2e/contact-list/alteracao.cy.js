/// <reference types="cypress" />

describe('Testes na alteração de um contato pré existente', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve editar o nome, email e telefone de um contato', () => {
        cy.get('button.edit').first().click()
        cy.get('[type="text"]').clear().type('Teste Edicao')
        cy.get('[type="email"]').clear().type('novo_teste@email.com')
        cy.get('[type="tel"]').clear().type('11 912348785')
        cy.get('.alterar').click()
        cy.get('button.edit').first().click()
        cy.get('[type="text"]').should('have.value', 'Teste Edicao')
    })
})