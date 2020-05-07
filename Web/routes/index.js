var mysql = require('mysql');
var express = require('express');
var sesseion = require('express-session');
var crypto = require('./crypt.js');
var router = express.Router();

// 로그인에 필요한 유저 정보를 DB에서 얻어오기 위해 사용
var loginDB = mysql.createConnection({
	host : 'localhost',
	user : 'Login_Access',
	password : 'Safe_Door_Login',
	database : 'Safe_Door'
});

/* GET home page. */
router.get('/', function(req, res, next) {
	var sess = req.session;
	if(sess.user_pwd != undefined){
		var crypto_pwd = '';
		try{crypto_pwd = crypto.Encrypt(sess.user_pwd);}
		catch(Exception){console.log(Exception);} 
		var cur = new Date(),expire = new Date(sess.expire_date);	
		cur.setHours(cur.getHours() + 9);
		if(cur < expire && crypto_pwd == sess.crypto_pwd){
			res.render('index',{user_pwd: sess.user_pwd, user_id : sess.user_id});
		}else{res.render('login');}
	}else{res.render('login');}
});

/* Post home page. */
router.post('/login', function(req, res, next){
	var sess = req.session;
	// post방식으로 들어온 정보를 parsing하여 로그인 정보 확인
	const user_id = req.body['user_id'];
	const user_pwd = req.body['user_pwd'];
	const crypto_pwd = crypto.Encrypt(user_pwd);
	// post방식이지만 user_id와 user_pwd가 없을시 get으로 redirect
	if(user_id == undefined || user_pwd == undefined) res.redirect('/');
	else{
		query = "select * from user_info where user_id = '" +user_id + "'"; 
		loginDB.query(query,function(err, ret, fields){
			try{
				if(!err && ret[0]['user_pwd'] == crypto_pwd){
					curDate = new Date();
					curDate.setHours(curDate.getHours() + 9);
					curDate.setMinutes(curDate.getMinutes() + 15);

					sess.user_id = user_id;
					sess.user_pwd = user_pwd;
					sess.crypto_pwd = ret[0]['user_pwd'];
					// 로그인 정보는 15분 동안만 유지한다
					sess.expire_date = curDate;
				}
			}catch(exception){
				console.log(exception);
			}finally{
				res.redirect('/');
			}
		});
	}
});

// 사용자가 로그아웃한 경우 Session 삭제
router.get('/logout',function(req, res, next){
	var sess = req.session;
	if(sess.user_id){
		req.session.destroy(function(err){
			if(err){}
			else{res.redirect('/');}
		});
	}else{res.redirect('/');}
});

module.exports = router;
