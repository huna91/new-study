// 사용 모듈 : express, ejs, path, sequelize 개발용 nodemon
// path는 기본 경로를 다룰 수 있게 도와주는 모듈임( 기본 내장 되어있음)

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { sequelize, User, Post } = require("./model"); // => 아래와 같다(index.js는 자동으로 잡아줌)
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

// app.get("/", (req, res) => {
//   res.render("page", { data: 1 });
// });

app.get("/", (req, res) => {
  res.render("create");
});

app.post("/create", (req, res) => {
  const { name, age, msg } = req.body;
  // create함수를 사용하면 해당 테이블에 컬럼을 추가할 수 있다.(객체형태의 데이터 넘겨받기)
  const create = User.create({
    // name 컬럼의 값
    name: name,
    // age 컬럼의 값
    age: age,
    // msg 컬럼의 값
    msg: msg,
  });
  //위의 객체를 전달해서 컬럼을 추가할 수 있다.
  // => 자바스크립트 구문으로 SQL 동작을 시킬 수 있다.
  // => 쿼리문을 작성할 필요가 없다.
});

app.get("/user", (req, res) => {
  // 추가된 유저들을 확인함
  // findAll을 사용하여 전체 데이터를 찾는다.
  // findAll : 매개변수로 검색할 옵션을 전달한다.(옵션이 없으면 다 가져옴)
  User.findAll({})
    .then((e) => {
      res.render("page", { data: e });
    })
    .catch(() => {
      res.render("err");
    });
});

app.post("/create_post", (req, res) => {
  const { name, text } = req.body;
  console.log(name + text);
  // User와 Post 테이블과 연결되어 있음.
  // User는 id 키 Post user_id 키가 연결되어있음.
  // findOne, findAll 은 매개변수로 검색할 옵션을 넣어줌
  User.findOne({
    where: { name: name },
  }).then((e) => {
    Post.create({
      msg: text,
      // foreingKey는 user_id 이고 User의 id와 연결한다고 정의하였기 때문에
      user_id: e.id,
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`${PORT}번 포트 연결`);
});
