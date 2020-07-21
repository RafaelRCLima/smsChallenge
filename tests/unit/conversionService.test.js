const conversionService = require('../../src/app/services/conversionService')

describe('It should test conversionService functions', () => {
  
  test('Should convert a text to a number sequence', async () => {
    const text = 'Teste de Mesa'
    const response = await conversionService.convertTextToNumber(text)
    expect(response).toBe('833777783303_33063377772')
  })

  test('Should convert a number sequence to a text', async () => {
    const numberSequence = '833777783303_33063377772'
    const response = await conversionService.convertNumberToText(numberSequence)
    expect(response).toBe('teste de mesa')
  })
})