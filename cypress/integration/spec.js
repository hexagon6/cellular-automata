describe('Sapper cellular automata', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct <h1>', () => {
    cy.contains('h1', 'CELLULAR AUTOMATA!')
  })

  it('navigates to /gameoflife', () => {
    cy
      .get('nav a')
      .contains('Game of Life')
      .click()
		cy.url().should('include', '/gameoflife')
	})

  it('navigates to /waves', () => {
    cy
      .get('nav a')
      .contains('Waves')
      .click()
		cy.url().should('include', '/waves')
  })

  it('navigates to /about', () => {
    cy
      .get('nav a')
      .contains('about')
      .click()
    cy.url().should('include', '/about')
	})

})
