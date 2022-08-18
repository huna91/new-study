const dot = require("dotenv").config();

const config = {
  dev: {
    // 사용자 이름
    user: "root",
    // 비밀번호
    password: process.env.DB_PASSWORD,
    // 연결할 데이터 베이스명
    database: "test3",
    // 다중 쿼리문 사용 속성
    multipleStatements: true,
  },
  dev2: {
    // 사용자 이름
    username: "root",
    // 비밀번호
    password: process.env.DB_PASSWORD,
    // 연결할 데이터 베이스명
    database: "test4",
    // 호스트 주소
    host: "127.0.0.1",
    // 사용하는 데이터 베이스
    dialect: "mysql",
  },
};

module.exports = config;
