/*
*** sequelize 사용 ***
- 설치 명령어
npm i sequelize

*/

// 폴더 명까지만 작성해도 index.js를 불러올 수 있기 때문에 아래처럼 작성해도 된다.
const { sequelize, User } = require("./model");
// Op연산자를 사용하기 위해 가져와야 한다.
const { Op } = require("sequelize");

// .sync({ force: false }) 구문은 처음에 sequelize와 연결할 때 테이블들의 값을 초기화 할 것인지에 대한 속성이다.
// true면 초기화  /  false면 초기화 안함
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

// 생성
// INSERT INTO 테이블 어쩌구 했었는데 아래처럼 User를 사용하여 추가 할 수 있다.
// create : 쿼리문 생성
// User.create({
//   name: "안녕",
//   age: 23,
//   msg: "헤헤헤헤헤헤",
// });
/*
*** 조회 ***
select * from users
- findAll : User에서 안에 조건에 대한 내용을 찾아온다.
- findOne : findAll과 구성은 같고 하나의 값만 찾아온다.

- attributes : 원하는 컬럼만 가져온다.
- where : 검색 조건 설정
- order : 생성 순서 정렬 DESC, ASC(내림차순, 오름차순) order : [['age','DESC']]
- limit : 조회할 갯수
- offset : 스킵할 갯수
- Op.gt : (greater than, 초과),
- Op.gte : (greater than or equal to, 이상),
- Op.lt : (less than, 미만),
- Op.lte : (less than or equal to, 이하),
- Op.ne : (not equal, 같지 않음),
- Op.or : (or, 또는), => 구조 :   [Op.or]:[{  },{  }]
- Op.in : (in, 배열 요소 중 하나),
- Op.notIn : (not in, 배열 요소와 모두 다름) 등이 있다.

DESC, ASC 이건 자주사용하니 기억해두자!!!
*/
async function select() {
  const user = await User.findAll({
    // where: {
    //   age: {[Op.gt]:23},   => 이렇게 설정하면  age가 23 초과하는 데이터들을 가져온다.
    // },
    order: [["age", "DESC"]],
  });
  const temp = user.map((i) => {
    i.dataBalues;
  });
}

// select();

/*
*** 수정***
UPDATE
*/
// User.update(
//   {
//     msg: "수정할 내용",
//   },
//   // 아래 내용은 아이디가 1번인 내용을 찾아서 수정
//   { where: { id: 1 } }
// );

// /*
// *** 삭제 ***
// DELETE
// */
// User.destroy({
//   where: { id: 1 },
// });

/*
*** 관계 ***
JOIN
*/
