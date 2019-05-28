import axios from 'axios'
import { Loading , Message } from 'element-ui'

const Signature = ''
const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://www.baidu.com' : 'http:// 192.168.1.107:8082',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Signature': `${Signature}`
    }
})
const loadingInstance = '';
instance.interceptors.request.use(function(config){
    loadingInstance = Loading.service({
        lock: true,
        text: '数据加载中，请稍微...',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.7)'
    })
/**
 * 每次发送清洁之前判断vuex中是否存在token,如果存在，则统一在http请求的
 * headers都加上token,这样后台根据token判断你的登录情况，即使本地存在token
 * 也有可能是过期的，所以在相应拦截器中要对返回状态进行判断
 */
    // const token = store.state.token;
    // if(token){
    //     config.headers.Authorization = token;
    // } else {
    //     router.push('/login')
    // }
    return config
},function(error){
    loadingInstance.close();
    return Promise.reject(error);
})

//相应拦截器
instance.interceptors.response.use(function(res){
    loadingInstance.close();
    return Promise.resolve(res);
},function(error){
    loadingInstance.close();
    Message.error('请求失败，请稍后再试')
    return Promise.reject(error);
});

/**
 * @param {String} method
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise}
 */
export function fetch(url,params={}){
    return new Promise((resolve,reject) =>{
        axios.get(url,{
            params: params
        }).then(response => {
            resolve(response.data)
        }).catch(err =>{
            reject(err)
        })
    })
}
/**
 * @param {String} method
 * @param {String} url 
 * @param {Object} data 
 * @returns {Promise}
 */
export function post(url, data = {}){
    return new Promise((resolve,reject) =>{
        axios.post(url,data).then(response =>{
            resolve(response.data)
        }).catch(err=>{
            reject(err)
        })
    })
}