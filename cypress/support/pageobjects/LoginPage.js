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

}
export default LoginPage