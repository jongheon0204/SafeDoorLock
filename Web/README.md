# SafeDoor Web Page
<p align="center"><img src="/image/메인화면.png" width="50%" height="50%" alt="메인화면"/></p>  

## 1. 사용 언어 및 모듈

1. 사용 언어 및 웹 프레임워크
	- Node.js 
	- Express Generator
2. 사용 모듈
	- express (4.16.1)
	- ejs (2.6.1)
	- express-session (1.17.1)
	- mysql (2.18.1)
	- socket.io (2.3.0)	
	- serialport (8.0.7)
	- dateformat(3.0.3)
	

## 2. 구현 기능

1. 로그인 기능
<p align="center"><img src="/image/login.png" width="700px" alt="Login"/></p>

허락된 유저만 접근이 가능하도록 하기 위해 로그인을 하는 페이지를 만들어 주었다.
<br>GET 방식을 통해서 접근이 가능하며 사용자가 아이디와 비밀번호를 입력 후 로그인 버튼을 누르면 POST방식으로 /login 주소로 정보를 전달한다.
<br>그후, ID 정보를 가지고 Mysql DB에서 정보를 얻어오고 비밀번호가 일치시 메인페이지로 넘어가도록 하였으며 비밀번호가 일치하지 않을시에는 다시 로그인 페이지가 뜨도록 해주었다.

로그인 후 새로고침과 같은 방법으로 접근할때마다 다시 로그인 하는 것을 방지하기 위해서 Session을 통해 로그인 기능이 유지되도록 해 주었다
(Layout은 이 [페이지](https://codepen.io/khadkamhn/pen/ZGvPLo)를 참조하였다) 

2. 도어락 제어 기능
<p align="center"><img src="/image/mainpage.png" width="700px" alt="mainPage"/></p>

사용자가 도어락 제어 버튼을 누를시 소켓 통신을 통해 정보가 서버로 넘어가게 되고 서버에서 정보를 판별한 후 연결되어 있는 아두이노에 정보를 넘겨준다
(Layout은 이 [페이지](https://codepen.io/azouaoui-med/pen/wpBadb)를 참조하였다)
