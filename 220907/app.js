// AWS EC2 배포하기
/*
*** EC2 ubuntu로 인스턴스 하기 ****
1. AWS 페이지에 로그인하고 서비스 탭 옆 EC2 검색

2. 오른쪽 상단 지역은 최대한 가깝게 설정(서울로, 안되면 일본)

3. 인스턴스 클릭해서 인스턴스 창으로 이동

4. 우측 상단 인스턴스 시작

5. 인스턴스 이름 작성 및 우분투 클릭

6. 키페어 생성(키페어 생성시 잘 보관해야 하며, 이동시에는 저장매체에 담아서 옮기는 것이 보안에 좋다 - 메일 카톡 X)

7. 생성 및 시작 ㄱㄱㄱ

8. 상단에 '연결' 누르기
 - 또는 SSH 클라이언트 에서 예: 에 나와있는 내용 복사해서 깃배쉬에 입력
 ssh -i "second_project_key.pem" ubuntu@ec2-54-180-141-97.ap-northeast-2.compute.amazonaws.com
 - key 받은것이 같은 폴더에 있어야 함.

9. EC2 우분투에 mysql 설치
 - 아마존 AWS에서 RDS로 구동할 수 있지만 비용이 발생함.
 1) 우분투 서버 업데이트
  - 명령어 : sudo apt-get update
 2) mysql 설치
  - 명령어 : sudo apt-get install mysql-server
  - y 입력 진행 :)
 3) mysql 접속
  - 명령어 : sudo mysql -u root -p
   (password는 안쓰고 엔터 치면 됨)

10. 데이터베이스 세팅
 1) 사용할 데이터베이스 생성
  - 명령어 : create database 이름
 2) 데이터베이스 확인
  - 명령어 : show databases;

11. 데이터베이스 사용
 1) 접속할때 유저 정보가 있어야 접속이 가능하니 유저 생성하기.
  - create user '유저이름'@'%' identified by '비밀번호';
  ex) create user 'admin'@'%' identified by 'admin1234';
 2) 생성된 유저에게 데이터베이스 권한 주기
  - 명령어 : grant all on 데이터베이스 이름.* to '유저이름'@'%';
  ex) grant all on mydb.* to 'admin'@'%';
 3) 권한이 주어졌는지 확인
  - 명령어 : show grants for '유저이름';
  ex) show grants for 'admin';
 4) mysql 서버 다시 시작해 주기
  - 명령어 : sudo service mysql restart

12. 외부에서 접속해보기
 1) 인스턴스 페이지로 돌아가서 하단 보안 탭 클릭
 2) 보안 그룹 클릭
 3) 규칙 설정 : 트래픽 네트워크 간에 이동을 말한다.
  - 인바운드 규칙 : 네트워크에 들어오는 정보
   (클라이언트에서 서버로 향하는 것)
  - 아웃바운드 규칙 : 네트워크에서 나가는 정보
   (클라이언트에서 요청을 하고 서버에서 클라이언트로 다시 보내주는 것)
 4) 규칙 추가
  - 인바운드 아웃바운드 모두 
  - 유형 :HTTP, HTTPS, MYSQL/Aurora 4개
  - 소스유형 : Anywhere-IPv4
 5) EC2에 설치한 MYSQL 접속 허용 설정을 해준다.(git bash로 돌아와서)
  - mysql에서 나옴
  - 명령어 : sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;
  - 파일의 bind-address의 127.0.0.1 부분을 0.0.0.0으로 설정해 주면 된다.
  - 수정 방법 : i 누르고 아래로 내려보면 있음.
  - 저장 후 종료 : :wq!
  - 종료 : :q!
  - 강제 저장 : :w!
 6) 워크벤치 열기
  가. connection 추가
  나. Name 작성
  다. Hostname은 인스턴스의 퍼블릭IPv4 DNS 주소를 복사하여 입력
  라. Username는 접속할 유저 아이디(여기서 admin으로 함)
  마. password는 Store in vault 버튼 눌러 비밀번호 입력(여기서 admin1234)
 7) git과 연결하기
  가. 본인이 동작할 페이지를 git에 올린다.
  나. config.js에서 데이터베이스 이름, 비밀번호, 유저이름, 호스트 등을 맞게 변경한다.
  다. 우분투에서 git 환경 만들기
   - git init 으로 git 설치
   - git remote add origin 깃주소
   - git pull origin 브랜치이름
  라. node js 설치
   - sudo apt-get update
   - sudo apt-get install -y build-essential
   - sudo apt-get install curl
   - curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash --
   - sudo apt-get install -y nodejs
    * curl : 서버에서 서버 통신을 가능하게 해줌
   - node 버전 확인 : node -v
   - npm 버전 확인 : npm -v
   - npm i
 8) EC2 포트 포워딩
  : HTTP 설정할때 기본으로 80번 포트가 열리는데 우리가 설정한 포트를 바로 연결되도록 하는 방법(3010번에 열어둠)
  - 명령어 : sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3010
      => dport 80, -- to-port 3000 => 80 포트로 접속하면 3000포트로 재매핑
  - 포트포워딩 확인 명령어 : sudo iptables -t nat -L --line-numbers
  - 포트포워딩 삭제 명령어 : sudo iptables -t nat -D PREROUTING 삭제할포트   

  13. PM2를 사용하여 우분투 종료해도 서버 열어놓는 방법
////////////////////////////// 여기서 부터
// pm2 설치 명령어 npm i pm2

// packjson.json에 start 부분을 pm2 start app.js로 변경

// pm2 설치 서버가 종료되어도 노드 서버 실행

// npx pm2 monit : 상태 불러오기. (list, logs, custom metrics, metadata 등이 나옴)

// npx pm2 logs : 모든 로그 불러오기.

// npx pm2 logs --error : 에러 로그 불러오기.

// npx pm2 list : 리스트(npm start 하면 나왔던 표) 불러오기.

// npx pm2 kill : pm2 종료

// npx pm2 start app.js : app.js 실행

// npx pm2 reload all : 서버 재시작

*/
