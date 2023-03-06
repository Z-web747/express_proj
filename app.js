// const express = require('express')
// const router = require('./router')
// const app = express()
// const cors = require('cors')
// // const customMiddleware = require('./utils/middleWare')
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(cors())
// // app.use(customMiddleware.handleResponseHeader)
// app.use('/api', router)
// app.listen(80, function(){
//   console.log('服务已启动');
// })

const mysql = require('mysql')

mysql.createPool({
  host: '127.0.0.1', // 数据库ip地址
  user: 'root',
  password: '123456',
  database: 'my_db_01'
})