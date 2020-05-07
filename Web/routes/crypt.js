const KEY = "SAFEDOOR";
const KLEN = KEY.length;
const aVal = 'a'.charCodeAt(0);
const AVal = 'A'.charCodeAt(0);

exports.Encrypt = function(pwd){
	var ret = '';
	for(var i=0,j=0,len = pwd.length;i<len;i++,j++){
		if(j == KLEN) j=0;
		var cur = pwd[i];
		if('a' <= pwd[i] && pwd[i] <= 'z'){
			cur = pwd.charCodeAt(i) + KEY.charCodeAt(j) - AVal;
			if(cur > 26 + aVal) cur -= 26;
		}else if('A' <= pwd[i] && pwd[i] <= 'Z'){
			cur = pwd.charCodeAt(i) + KEY.charCodeAt(j) - AVal;
			if(cur > 26 + AVal) cur -= 26;
		}else{cur = pwd.charCodeAt(i);}
		ret += String.fromCharCode(cur);
	}
	return ret;
}

exports.Decoding = function(pwd){
	var ret = '';
	for(var i=0,j=0,len = pwd.length;i<len;i++,j++){
		if(j == KLEN) j=0;
		var cur = pwd[i];	
		if('a' <= pwd[i] && pwd[i] <= 'z'){
			cur = pwd.charCodeAt(i) - KEY.charCodeAt(j) + AVal;
			if(cur < aVal) cur += 26;
		}else if('A' <= pwd[i] && pwd[i] <= 'Z'){
			cur = pwd.charCodeAt(i) - KEY.charCodeAt(j) + AVal;
			if(cur < AVal) cur += 26;
		}else{cur = pwd.charCodeAt(i);}
		ret += String.fromCharCode(cur);
	}
	return ret;
}

