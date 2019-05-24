export function validUsername(rule,value,callback){ // rule必须要
    if(!value) {
		return callback(new Error('Please enter your account number.'));
	} else if  (value.length > 26)  {
	    return callback(new Error('Account length should not be greater than 26 digits'));
	}
}
export function validPassword(rule,value,callback){
    if(!value) {
		return callback(new Error('Please input a password'));
	} else if  (value.length > 6 && value.length < 24 )  {
	    return callback(new Error('Passwords must be no less than 6 bits and no more than 24 bits'));
	}
}