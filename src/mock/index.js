import Mock from 'mockjs'

const LoginData = function(){
    return {
        code: 200,
        Data: {
            message: 'login success',
            token: '123456789'
        }
    }
}

Mock.mock(/\/api\/Report\/CheckLogin/,'post',LoginData);
export default Mock