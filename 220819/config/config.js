const dot = require("dotenv").config();

// 데이터 베이스 접속에 필요한 설정 값 객체
const config = {
  dev: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "database_2",
    // database가 돌아가고 있는 서버 주소
    host: "127.0.0.1", // 여기에 만약 AWS RDS 쓰거나 지원데이터 베이스 등등 사용을 하면 주소를 넣어주면 됨
    dialect: "mysql",
  },
};
const config2 = {
  dev: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "database_2",
    // database가 돌아가고 있는 서버 주소
    host: "127.0.0.1", // 여기에 만약 AWS RDS 쓰거나 지원데이터 베이스 등등 사용을 하면 주소를 넣어주면 됨
    dialect: "mysql",
  },
};

module.exports = { config, config2 };
