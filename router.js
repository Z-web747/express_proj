const express = require('express')
const router = express.Router()

router.get('/user', (req, res)=>{
  res.send('hello node')
})

router.post('/login', (req, res) => {
  res.send({
    msg: 'success',
  })
})

router.get('/userinfo', (req, res) => {
  const query = req.query
  res.send({
    code: '0000',
    msg: 'success',
    data: {
      query
    }
  })
})

router.post('/userinfo', (req, res) => {
  const body = req.body
  res.send({
    code: '0000',
    data: body
  })
})


module.exports = router