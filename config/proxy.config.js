const isApi = false;
module.exports = {
  '/_ai':{
    target:isApi?'https://aiapi.bianla.cn':'https://aidev.bianla.cn',
    changeOrigin:true,
    pathRewrite:{"^/_ai" : isApi?'https://aiapi.bianla.cn':'https://aidev.bianla.cn/'}
  }
}