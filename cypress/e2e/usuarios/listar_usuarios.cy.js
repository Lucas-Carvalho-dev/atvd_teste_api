describe('GET /usuarios - Listar usuários', () => {
    it('Deve retornar todos os usuários cadastrados', () => {
      cy.request('https://serverest.dev/usuarios').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('quantidade')
        expect(res.body.usuarios).to.be.an('array')
      })
    })
  
    it('Deve filtrar usuários por nome', () => {
      cy.request('https://serverest.dev/usuarios?nome=Fulano%20da%20Silva').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.usuarios).to.satisfy((usuarios) =>
          usuarios.every((u) => u.nome.includes('Fulano da Silva'))
        )
      })
    })
  
    it('Deve filtrar usuários administradores', () => {
      cy.request('https://serverest.dev/usuarios?administrador=true').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.usuarios).to.satisfy((usuarios) =>
          usuarios.every((u) => u.administrador === 'true')
        )
      })
    })
  })
  