const smsService = require('../../src/app/services/smsService')

describe('It should tests all sms services functions', () => {

  test('It shoult contain id attribute when saved', async () => {
    const response = await smsService.create('Database test')
    expect(response).toHaveProperty("id")
  })
})

