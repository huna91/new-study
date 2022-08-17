// crypto 암호화
/*
*** 암호방식 ***
 : 단방향은 복호화해서 원래의 값을 알 수 없고, 양방향은 복호화해서 원래의 값을 알 수 있다.
 ex) 네이버 같은 페이지에서 비밀번호 찾기를 시도할 시 비밀번호를 알려주지 않고 비밀번호를 변경 시켜준다.
  * 복호화 : 암호문을 편문으로 변환하는 과정( 부호화(=인코딩)된 데이터를 부호화 되기 전 형태로 바꿔서 사람이 읽을 수 있는 형태로 되돌리는 것. )

1. 단방향
 : 암호를 복호화해서 원래의 비밀번호는 알 수 없도록 하고 복호화해서 암호를 해독한다.
 
 - 비교 검증 방법
  : 데이터베이스에 저장된 비밀번호 암호화 데이터
  : 로그인할때 입력받은 비밀번호를 암호화 시켜 데이터베이스에 저장하고, 이 암호화된 문자열을 비교하며 사용한다.

 - 암호화 방법
  : 해쉬 알고리즘을 사용해서 문자열을 고정된 길이의 문자열로 암호화 시킨다.
 ex) 1234123과 412321431123 이 두 숫자의 길이가 다른데 해쉬 알고리즘으로 길이를 5자로 정해 놓으면 둘다 5자의 문자로된 암호가 만들어진다.


2. 양방향
*/

// crypto 모듈 가져오기
const crypto = require("crypto");

// 임의의 비밀번호
const pw = "33442";
const pw2 = "33442";

// 단순 해싱으로 비밀번호 해싱
let hashAlgor = crypto.createHash("sha512");
// 사용할 해시 알고리즘은 sha512 암호 알고리즘 사용
// sha512 알고리즘은 국가안보국(NSA)이 설계한 암호 해쉬함수이다.
// sha-512 알고리즘은 512비트(64qkdlxm) 해시값을 생성하며 일반적으로 길이가 128자리인 16진수로 렌더링 된다.
/*
*** 알고리즘 종류 ***
- md5
- sha1
- sha256
- sha512 등등
*** 암호화 사용 이유 ***
: 해커가 뚫기 힘들게 하려고
*/

// 해싱 실행 : update()함수를 사용하며, 매개변수로 암호화 시킬 문자열을 사용
let hashing = hashAlgor.update(pw);
// let hashing2 = hashAlgor.update(pw2);

// 인코딩할 base64 알고리즘을 넣어준다.(digest함수를 사용해서 해싱된 객체를 base64 문자열로 반환해준다.)
let hasString = hashing.digest("base64");
// let hasString2 = hashing2.digest("base64");

// console.log(hasString);
// console.log(hasString2);

/*
같은 값을 암호화 하면 출력되는 문자열도 계속 같기 떄문에 해킹을 방지하기 위해 salt 기법을 사용 한다.
*** salt 기법 ***
: 암호화 하려는 문자(비밀번호)열에 추가로 랜덤한 문자를 붙여서 다른 해시값을 출력되도록 만든다.
 - salt값은 항상 비밀번호에 매번 추가 시켜서 사용되니 salt 값을 .env에서 관리하도록 한다.

*** salt 생성 ***
- 크립트의 랜덤 바이트 생성 함수를 통해 바이트 생성
- 32바이트 이상이어야지 방해를 줄수 있다.
*/

// randomBytes함수를 통해 랜덤한 바이트 생성, 매개변수 : 바이트 사이즈와 생성후 콜백함수
// crypto.randomBytes(32, function (err, byte) {
//   // 32bit 길이의 랜덤한 byte생성
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(byte);
//   }
// });

// crypto의 randomBytes 함수로 salt값을 만들어서 데이터 베이스에 저장한 후,
// 모든 패스워드가 고유의 salt값을 가지고 있을 수 있다.

/*
*** 키 스트레칭 ***
 : salt와 패스워드를 해시 함수에 넣는 과정을 반복시켜서 해커가 복호화 하는 과정을 힘들게 하는 방법이다.
  => 계산량을 늘려서 값 출력을 임의적으로 느리게 만드는 방법

 - 암호화 시켜주는 모듈
  * pbkdf 
   : 해시함수의 컨테이너 역할을 하며, 해시함수에 salt를 적용해서 해시함수의 반복횟수를 지정하여 암호화 할 수 있다.
     또한 IOS표쥰에 적합하며 NIST에서 승인된 알고리즘이다.
  * scrypto
   : 암호화 부분에서 강력하지만 많은 메모리와 cpu를 잡아먹기때문에 부하가 걸릴 수 있다.
     (오프라인 공격에 많이 강력하지만 자원을 많이 써서 위험)
    - OpenSSL 1.1 이상을 제공하는 시스템에서만 사용 할 수 있다.
    - 주어진 자원에서 공격자가 사용할 수 있는 병렬 처리 양이 한정되어 있다.
  * bcrypto
   : 보안에 집착하기로 유명한 OpenBSD에서 사용함.
    - .NET 및 자바를 포함한 많은 플랫폼 언어에서도 사용 할 수 있다.
    - 반복횟수를 늘려 연산속도를 늦출 수 있으며, 연산능력이 높은 공격도 대비할 수 있다.
    - 암호화된 string 중에서 일부분을 salt로 사용하여 그 데이터를 얻어온 후에 PW와 같이 보내서 비교한다.



  => 이 세개중 bcrypto가 좀 좋고 핫해서 많이 사용한다.

*/

// pbkdf 사용
// crypto.randomBytes(32, function (err, byte) {
//   crypto.pbkdf2(
//     pw, // 해싱하려 한 문자열(패스워드)
//     byte.toString("base64"), // 인코딩 방식 base64를 사용하여 문자열로 변환
//     12345, // 반복 횟수 지정(반복횟수가 많아질수록 복호화 하기 어려워짐, 대신 시간도 오래 걸림)
//     64, // 문자 길이 설정
//     "sha512", // 암호화 알고리즘 설정
//     // 마지막 콜백함수
//     function (err, hashed) {
//       console.log(hashed);
//     }
//   );
// });

// 암호화 하는데 시간이 걸리기 때문에 아래와 같이 salt기능을 수행하는 함수를 따로 생성해준다.
const createSalt = () => {
  // Promise를 사용해 비동기 처리를 한다.
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, byte) => {
      if (err) {
        // 실패시 err값 반환
        console.log("바이트no" + byte);
        reject(err);
      } else {
        // 성공 시 resolve 함수로 반환
        resolve(byte.toString("base64"));
      }
    });
  });
};

// 비밀번호를 해싱 해주는 함수
const pwHashed = (userId, password) => {
  // Promise를 사용하여 비동기 처리
  return new Promise((resolve, reject) => {
    // users 테이블에서 user_id 넣은 값이 있는지
    const sql = "SELECT * FROM users WHERE user_id=?";
    // 쿼리문 실행 -> 유저 아이디 찾음
    client.query(sql, [userId], async (err, result) => {
      if (result[0]?.salt) {
        // 결과에 값(객체)이 있는지 확인 -> 해당유저의 객체 안에 salt값을 가져옴
        const salt = await result[0].salt;
        // 위에 pbkdf2 예제 보고 의마 알기
        // password를 pbkdf2 암호화 하는데 해싱 알고리즘은 sha512이고 길이 64, 반복횟수 7182367번
        crypto.pbkdf2(password, salt, 82367, 64, "sha512", (err, key) => {
          if (key.toString("base64") === result[0].password) {
            resolve(key.toString("base64"));
          } else {
            reject("err");
          }
        });
      } else {
        reject("err");
      }
    });
  });
};

// 가입했을때 salt값 가져오려고 만드는 함수
const createPwHashed = (password) => {
  console.log(password);
  return new Promise(async (resolve, reject) => {
    // 여기서 salt값 생성
    const salt = await createSalt();
    // 1235234번 반복시키는 키 스트레칭으로 비밀번호에 문자를 더해서 암호화시키는 기법(salt)
    crypto.pbkdf2(password, salt, 135234, 64, "sha512", (err, key) => {
      if (err) {
        reject("err");
      } else {
        // 비밀번호 마다 고유의 salt 값을 가지고 있을 수 있도록 암호화한 비밀번호와 salt값을 둘다 데이터 베이스에 저장함
        resolve({
          password: key.toString("base64"),
          salt,
        });
      }
    });
  });
};

// 간단 로그인 만들어본다.
// 모듈 express, fs, mysql2

const express = require("express");
const fs = require("fs");
const dot = require("dotenv").config();
const app = express();
const mysql = require("mysql2");

const client = mysql.createConnection({
  user: "root",
  password: "huna91",
  database: "test_hash",
  multipleStatements: true,
});
// const sql = `CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), user_PW VARCHAR(255), salt VARCHAR(255))`;
// client.query(sql);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  fs.readFile("view/join_page.html", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.get("/login", (req, res) => {
  fs.readFile("view/login_page.html", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.post("/join", async (req, res) => {
  const { password, salt } = await createPwHashed(req.body.userPW);
  const sql = "INSERT INTO users (user_id, user_pw, salt)VALUE (?,?,?)";
  console.log("dhdhdh");
  client.query(sql, [req.body.userID, password, salt], () => {
    res.redirect("/login");
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { userID, userPW } = req.body;
  pwHashed(userID, userPW)
    .then((result) => {
      res.send(result + "로그인 됨");
    })
    .catch((err) => {
      res.send(err + "로그인 안됨");
    });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`${PORT}번 포트 연결`);
});
