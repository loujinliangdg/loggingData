import axios from 'axios'
let host =  process.env.HOST;
if(host == 'dev'){
    host = 'https://aidev.bianla.cn'
}
if(host == 'api'){
    host = 'https://aiapi.bianlan.cn'
}
if(host == 'testapi'){
    host = 'https://aitestapi.bianla.cn'
}
class Req{
    constructor(){
        this['用户列表'] = '/api/heavyWeight/userList'      //http://app.bianla.cn/showdoc/web/#/1?page_id=1658
        this['新增用户'] = '/api/heavyWeight/addUser'       //http://app.bianla.cn/showdoc/web/#/1?page_id=1659
        this['编辑用户'] = '/api/heavyWeight/updateUser'    //http://app.bianla.cn/showdoc/web/#/1?page_id=1660
        this['删除用户'] = '/api/heavyWeight/deleteUser'    //http://app.bianla.cn/showdoc/web/#/1?page_id=1661
        this['新增修改数据'] = '/api/heavyWeight/dealLog'    //http://app.bianla.cn/showdoc/web/#/1?page_id=1662
        this['获取用户最新数据'] = '/api/heavyWeight/selectSingleLog' //http://app.bianla.cn/showdoc/web/#/1?page_id=1663
        this['登录'] = '/api/heavyWeight/login'
        this['投屏'] = '/api/heavyWeight/showOnScreen'
    }
    get(name,data,successCallback,errorCallback){
        let authorization = window.sessionStorage.getItem('authorization');
        if(authorization){
            axios.defaults.headers.authorization = authorization;
        }
        axios.get(`${host}${this[name]}`,{params:data}).then(function(result){
            if(result.headers.authorization){
                window.sessionStorage.setItem('authorization',result.headers.authorization)
            }
            successCallback(result.data)
        }).catch(errorCallback||function(error){console.error(`请求 [${name}] 接口报告错：${error.toString()}`)}.bind(this))
    }
    post(name,data,successCallback,errorCallback){
        let authorization = window.sessionStorage.getItem('authorization');
        if(authorization){
            axios.defaults.headers.authorization = authorization;
        }
        axios.post(`${host}${this[name]}`,data).then(function(result){
            if(result.headers.authorization){
                window.sessionStorage.setItem('authorization',result.headers.authorization)
            }
            successCallback(result.data)
        }).catch(errorCallback||function(error){console.error(`请求 [${name}] 接口报告错：${error.toString()}`)}.bind(this))
    }
}

export default new Req()