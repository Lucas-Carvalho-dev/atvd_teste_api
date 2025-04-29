describe('POST /usuarios - Cadastrar usuário', () => {
    it('Deve cadastrar usuário com sucesso', () => {
      const usuario = {
        nome: 'Usuário Teste',
        email: `teste_${Date.now()}@qa.com`,
        password: 'teste',
        administrador: 'true'
      }
  
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: usuario
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
        expect(res.body).to.have.property('_id')
      })
    })
  
    it('Deve falhar ao cadastrar usuário com e-mail já existente', () => {
      const usuario = {
        nome: 'Fulano da Silva',
        email: 'fulano@qa.com',
        password: 'teste',
        administrador: 'true'
      }
  
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false,
        body: usuario
      }).then((res) => {
        expect(res.status).to.eq(400)
        expect(res.body.message).to.eq('Este email já está sendo usado')
      })
    })
  })
  