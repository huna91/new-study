// 사용 모듈 : express, ejs, path, sequelize 개발용 nodemon
// path는 기본 경로를 다룰 수 있게 도와주는 모듈임( 기본 내장 되어있음)

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { sequelize } = require("./model"); // => 아래와 같다(index.js는 자동으로 잡아줌)
// const {sequelize} = require("./model/index.js");

const app = express();

// path.join() : 매개변수로 받은 문자열들을 주소처럼 합쳐준다.
// ex) path.join("a","b")  =>  a/b   이런 주소처럼
// __dirname : app2.js 파일이 있는 위치
// app.views에 view 폴더까지의 경로를 기본값으로 해줌(여기서는 렌더링할 파일을 view에 모아둘 거당)
app.set("views", path.join(__dirname, "view"));

// app.get("/",(req,res)=>{
//     // fs모듈로 파일을 가져왔다고 가정
//     res.send(
//         ejs.render(data,{e})
//     )
// })
// app.get 형태로 가져왔던 뷰 엔진을 ejs 랜더링 방식으로 아래와 같이 engine을 쓴 형태로 사용 할 것임.

// ㅜ 랜더링하는 기본 엔진을 ejs처럼 사용 할 것이라는 구문
// engine : ("파일을 타입", )
app.engine("html", ejs.renderFile);

// view engine을 html을 랜더링 할 때 사용 하겠다.
app.set("view engine", "html");
// console.log(app);

// body객체 사용
app.use(express.urlencoded({ extended: false }));

// 아래로 sequelize 구성 해본다.(연결 및 테이블 생성[첫 맵핑])
sequelize
  // sync 함수: 데이터 베이스 동기화에 사용하며, 필요한 테이블을 생성해준다.(필요한 테이블들이 생기고 매핑됨)
  //  => 매핑을 처음부터 하고 들어가기 때문에 데이터들이 어긋날 일이 없다.(테이블의 내용이 다르면 오류를 출력한다.)
  //  -> CREATE TABLE 문이 여기서 실행된다고 보면 된다.
  // force는 테이블 내용을 강제로 초기화 할것인지 아닌지를 설정해 준다.
  .sync({ force: false })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.render("page", { data: 1 });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`${PORT}번 포트 연결`);
});
