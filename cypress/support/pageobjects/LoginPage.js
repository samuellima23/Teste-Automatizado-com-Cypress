class LoginPage {
    navigate() {
        cy.visit('https://www.netflix.com/br/')
    }

    enterLogin() {
        return cy.get('.authLinks').click();
    }

    VisualizarRecuperarSenha() {
        return cy.get('.link').should('contain', 'Precisa de ajuda?');
    }

    submit() {
        return cy.get('[type=submit]')
    }
}
export default LoginPage