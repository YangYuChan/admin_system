import {fetch,post} from '../utils/request'
//登录
export const Login = params => post('/api/Report/CheckLogin',params)
