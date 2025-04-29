describe('PUT /usuarios/:id - Editar usuário', () => {
    it('Deve editar um usuário existente com sucesso', () => {
      const novoUsuario = {
        nome: 'Editado QA',
        email: `editado_${Date.now()}@qa.com`,
        password: 'teste',
        administrador: 'true'
      }
  
      // 1. Buscar usuário
      cy.request('https://serverest.dev/usuarios').then((res) => {
        const id = res.body.usuarios[0]._id
  
        // 2. Editar usuário
        cy.request({
          method: 'PUT',
          url: `https://serverest.dev/usuarios/${id}`,
          body: novoUsuario
        }).then((resPut) => {
          expect(resPut.status).to.eq(200)
          expect(resPut.body.message).to.eq('Registro alterado com sucesso')
        })
      })
    })
  })
  