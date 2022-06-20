/* RedefinirSenha.spec.js
 *
 * Como um usuário da netflix
 * Quero poder visualizar a opção de redefinir minha senha
 * Para redefinir minha senha caso tenha perdido a senha anterior
 */

import LoginPage from "../../cypress/support/pageobjects/LoginPage"

describe('Redefinir senha', () => {
  const login = new LoginPage();
  context('Dado que acesso a página inicial', () => {
    beforeEach(() => {
      login.navigate();
    })

    context('Quando clico em login', () => {
      beforeEach(() => {
        login.enterLogin();
      })

      it('Então devo ver a opção "Precisa de ajuda?" ', () => {
        login.VisualizarRecuperarSenha();
      })
    })

  })
})