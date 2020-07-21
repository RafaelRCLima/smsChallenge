const app = require ('../../src/app')
const request = require ('supertest')

describe('It should test smsController endpoints', () => {

  test('Should respond status code 200 when a number is converted to a text', async () => {
    const response = await request(app)
      .post('/sms')
      .send({ sms: 'Teste de Mesa' })
    expect(response.statusCode).toBe(200)
  })

  test('Should respond status code 200 when a text is converted to a number', async () => {
    const response = await request(app)
      .post('/sms')
      .send({ sms: '833777783303_33063377772' })
    expect(response.statusCode).toBe(200)
  })

  test('Should respond status code 404 for an invalid entry', async () => {
    const response = await request(app)
      .post('/sms')
      .send({ sms: 'Caça-Palavra$' })
    expect(response.statusCode).toBe(400)
  })

  test("Should list all converted SMS's", async () => {
    const response = await request(app)
      .get('/sms')
    expect(response.statusCode).toBe(200)
  })
})
