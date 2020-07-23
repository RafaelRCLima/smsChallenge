const app = require ('../../src/app')
const request = require ('supertest')
const mongoose = require ('mongoose')

describe('It should test smsController endpoints', () => {

  test('Should respond status code 200 when a number is converted to a text', async () => {
    const response = await request(app)
      .post('/convertSms')
      .send({ sms: 'Teste de Mesa' })
    expect(response.statusCode).toBe(200)
  })

  test('Should respond status code 200 when a text is converted to a number', async () => {
    const response = await request(app)
      .post('/convertSms')
      .send({ sms: '833777783303_33063377772' })
    expect(response.statusCode).toBe(200)
  })

  test('Should respond status code 404 for an invalid entry', async () => {
    const response = await request(app)
      .post('/convertSms')
      .send({ sms: 123 })
    expect(response.statusCode).toBe(400)
  })

  test("Should list all converted SMS's", async () => {
    const response = await request(app)
      .get('/listSms')
    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBeLessThan(11)
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})