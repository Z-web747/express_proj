module.exports = {
  handleResponseHeader(req, res, next){
    console.log('执行中间件');
    // 设置响应头
    res.set({
      'Access-Control-Allow-Origin': '*'
    })
    next()
  }
}