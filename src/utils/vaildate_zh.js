export function validUsername(rule,value,callback){ // rule必须要
    if(!value) {
		return callback(new Error('请输入账号'));
	} else if  (value.length > 26)  {
	    return callback(new Error('账号不能大于26位'));
	}
}
export function validPassword(rule,value,callback){
    if(!value) {
		return callback(new Error('请输入密码'));
	} else if  (value.length > 6 && value.length < 24 )  {
	    return callback(new Error('密码不能少于6位大于24位'));
	}
}