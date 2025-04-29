describe('DELETE /usuarios/:id - Excluir usuário', () => {
    it('Deve excluir um usuário existente', () => {
      const usuario = {
        nome: 'Para Excluir',
        email: `excluir_${Date.now()}@qa.com`,
        password: 'teste',
        administrador: 'false'
      }
  
      // 1. Cadastrar usuário
      cy.request('POST', 'https://serverest.dev/usuarios', usuario).then((res) => {
        const id = res.body._id
  
        // 2. Excluir usuário
        cy.request('DELETE', `https://serverest.dev/usuarios/${id}`).then((resDel) => {
          expect(resDel.status).to.eq(200)
          expect(resDel.body.message).to.eq('Registro excluído com sucesso')
        })
      })
    })
  })
  