describe('GET /usuarios/:id - Buscar usuário por ID', () => {
    it('Deve retornar um usuário existente', () => {
      cy.request('https://serverest.dev/usuarios').then((res) => {
        const id = res.body.usuarios[0]._id
  
        cy.request(`https://serverest.dev/usuarios/${id}`).then((resId) => {
          expect(resId.status).to.eq(200)
          expect(resId.body).to.have.property('nome')
        })
      })
    })
  })
  