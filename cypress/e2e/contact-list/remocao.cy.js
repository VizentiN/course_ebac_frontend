/// <reference types="cypress" />

describe('Testes em adicionar um contato na lista', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve preencher, adicionar e verificar se existe um novo contato na lista', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 2)
    })
})