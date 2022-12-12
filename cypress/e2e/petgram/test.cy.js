/* global describe, it, cy */

describe('Mi primer test', () => {
  it('para ver si la app functiona', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('si podemos navegar con la navbar a la home', () => {
    cy.visit('/detail/1')
    cy.get('nav a').first().click()
    cy.url().should('inlcude', '/')
  })

  it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
