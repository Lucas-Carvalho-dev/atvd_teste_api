describe('API de Login - ServeRest', () => {
    const baseUrl = 'https://serverest.dev/login'
  
    it('POST /login - sucesso', () => {
      cy.request({
        method: 'POST',
        url: baseUrl,
        body: {
          email: 'fulano@qa.com',
          password: 'teste'
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.message).to.eq('Login realizado com sucesso')
        expect(res.body).to.have.property('authorization')
      })
    })
  
    it('POST /login - falha (senha incorreta)', () => {
      cy.request({
        method: 'POST',
        url: baseUrl,
        failOnStatusCode: false,
        body: {
          email: 'fulano@qa.com',
          password: 'errado'
        }
      }).then((res) => {
        expect(res.status).to.eq(401)
        expect(res.body.message).to.eq('Email e/ou senha inválidos')
      })
    })
  
    it('POST /login - falha (email inexistente)', () => {
      cy.request({
        method: 'POST',
        url: baseUrl,
        failOnStatusCode: false,
        body: {
          email: 'naoexiste@email.com',
          password: 'teste'
        }
      }).then((res) => {
        expect(res.status).to.eq(401)
        expect(res.body.message).to.eq('Email e/ou senha inválidos')
      })
    })
  })
  