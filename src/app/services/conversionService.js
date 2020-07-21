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
  }
}

module.exports = conversionService
