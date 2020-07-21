const { Router } = require('express')

const router = new Router()

router.get('/home', (req, res) => {
  return res.json({ result: 'It works' })
})

module.exports = router