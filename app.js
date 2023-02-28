const express = require('express')
const router = require('./router')
const app = express()
const customMiddleware = require('./utils/middleWare')
app.use(express.json())
app.use(customMiddleware.handleResponseHeader)
app.use('/api', router)
app.listen(80, function(){
  console.log('服务已启动');
})