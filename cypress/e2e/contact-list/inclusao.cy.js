/// <reference types="cypress" />

describe('Testes em adicionar um contato na lista', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve preencher, adicionar e verificar se existe um novo contato na lista', () => {
        cy.get('[type="text"]').type('Lucas Teste')
        cy.get('[type="email"]').type('lucas_teste@email.com')
        cy.get('[type="tel"]').type('11 912348765')
        cy.get('.adicionar').click()
        
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 4)
    })
})