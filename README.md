# SafeDoor
<p align="center"><img src="/image/메인화면.png" width="50%" height="50%" alt="메인화면"/></p>    

## 1. 사용기술
+ Node.js   
+ HTML   
+ Mysql   

## 2. 개발 과정
### 2.1 개발 동기
   2018년 12월에 개봉한 영화 중 도어락이라는 영화가 있다. 오피스텔에 혼자 살고 있는 여성의 집에 도어락을 몰래 열고 들어가 범죄를 저지르는 내용을 통해서 우리가 흔히 사용하는 도어락의 보안 취약점에 대해 경각심을 일깨워 주는 영화 였다.    
   
   이 영화를 보고 난 후 많은 생각이 들어 도어락의 보안 취약점에 대해서 검색을 해 보았더니 도어락의 보안이 의외로 쉽게 뚫린다는 점이 있으며, 번호 패드에 남은 지문을 통해서 비밀번호를 유추해 내거나 몰래카메라를 설치하여 번호를 알아내는 등의 방법을 사용한다는 점이다.  
    
   그렇다면 도어락 보안의 취약점을 어떻게 극복할 수 있을까? 단순하게 생각해 보니 자신만이 가지고 있는 물건으로 도어락을 열 수 있게 되면 보안은 해결 될 것 같았다. 하지만 이러한 자신만이 가지고 있는 물건은 도어락 열쇠가 될 수도 있는데 도어락 열쇠는 쉽게 잃어버릴 수 있는 문제점을 가지고 있다. 그렇다면 쉽게 잃어버리지도 않고 자신만이 가지고 있는 물건은 무엇인가 생각을 해 보니 스마트폰이 떠올랐고 스마트폰으로 도어락을 제어할 수 있었으면 좋겠다는 생각이 들었다.
    
### 2.2 구현 기능
#### 2.2.1 서비스 구조도
<img src="/image/서비스전체적인 구조.png" width="70%" height="70%" alt="서비스전체적인 구조"/>   

#### 2.2.2 상세 기능 설명
1. 도어락 원격 제어    
웹서버에 연결이 되어있어 도어락 원격 제어가 가능하다. 어플이나 웹페이지에 들어가서 로그인 후에 화면을 보면 open/close버튼이 있다. 버튼을 클릭하면 도어락이 열리고 닫히는 것을 볼 수 있다.   
<div align="center">
<img width="30%" style="margin-right: 5rem" src="/image/어플암호입력화면.jpg"/>
<img width="30%" style="margin-right: 5rem" src="/image/어플지문인식화면.jpg"/>
<img width="30%" style="margin-right: 1rem" src="/image/어플메인화면.jpg"/>
</div><br>
<div align="center">
<img width="80%" src="/image/mainpage.png"/>
</div><br>

2. 방문자 실시간 확인   
라즈베리파이에 파이캠을 연결하여, 어플과 웹페이지를 통해 실시간으로 방문자의 모습을 확인할 수 있다.    
<div align="center">
<img width="30%" src="/image/어플카메라테스트.PNG"/>
</div><br>

3. 웹페이지 실시간 확인   
모바일 어플과 마찬가지로 웹을 통해서 방문자의 확인이나 도어락의 open/close를 할 수 있다.
<div align="center">
<img width="70%" src="/image/소공전 웹페이지.PNG"/>
</div><br>   

4. 초인종을 눌렀을 때 어플로 푸시알람 보내기   
초인종을 누르면 시리얼 통신을 통해 라즈베리파이에 신호를 보내게 된다. 그리고 이 신호를 socket.io통신을 통해 사용자의 어플에 푸시알림을 보내주어 방문자가 방문한 것을 알려준다.
<div align="center">
<img width="70%" src="/image/초인종푸시알림.png"/>
</div><br>   

## 3. 캡처화면

### 3.1 전면부 사진   
<img src="/image/전면부사진3.jpg" width="70%" height="70%" alt="전면부 사진"/>    

### 3.2 후면부 사진    
<img src="/image/후면부 사진.jpg" width="70%" height="70%" alt="후면부 사진"/>    

### 3.3 어플카메라   
<img src="/image/어플카메라.jpg" width="50%" height="50%" alt="어플카메라"/>   

### 3.4 웹 로그인
<img src="/image/login.png" width="70%" alt="Login"/>

### 3.5 웹 메인페이지
<img src="image/mainpage.png" width="70%" alt = "mainPage"/>

### 3.6 도어락의open close기록    
<img src="/image/도어락의open_close기록.png" width="70%" height="70%" alt="도어락의open_close기록"/>   
