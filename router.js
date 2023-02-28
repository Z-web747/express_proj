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


module.exports = router