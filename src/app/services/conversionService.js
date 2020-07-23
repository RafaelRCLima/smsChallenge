const smsLettersList = require('../../consts')

let conversionService = {

  async convertTextToNumber(text) {

    const lettersList = text.split('')
    let result = ''

    lettersList.forEach(function (letter) {

      smsLettersList.forEach(function (smsLetters, index) {

        if (smsLetters.indexOf(letter.toLowerCase()) != -1) {
          let cont = smsLetters.indexOf(letter.toLowerCase()) + 1

          if ((index + 2) === parseInt(result[result.length - 1])) result += '_'

          for (let i = 0; i < cont; i++) {
            result += index + 2
          }
        }
      })

      if (letter === ' ') {
        result += 0
      }
    })

    return result
  },

  async convertNumberToText(numberSequence) {

    const numberSequenceList = numberSequence.split('')

    let sequencesOfEqualNumbers = []
    let auxiliary = ''
    let error = false

    numberSequenceList.forEach(function (numberValue, index) {

      if (numberValue === '1') error = true

      if (numberValue === ' ') {
        sequencesOfEqualNumbers.push(numberValue)
      }

      if (numberValue !== numberSequenceList[index - 1]) {
        auxiliary = numberValue
        if (numberValue !== numberSequenceList[index + 1]) {
          sequencesOfEqualNumbers.push(numberValue)
        }
      }

      if (numberValue === numberSequenceList[index + 1]) {
        auxiliary += numberSequenceList[index + 1]
      } 
      else {
        if (numberValue != auxiliary) sequencesOfEqualNumbers.push(auxiliary)
      }
    })

    if (error) return []

    let result = ''
    sequencesOfEqualNumbers.forEach(function (value) {

      if (value !== '0' && value !== '_') {
        result += smsLettersList[parseInt(value[0]) - 2][value.length - 1]
      }
      if (value === '0') result += ' '

    })

    return result
  }
  
}

module.exports = conversionService
