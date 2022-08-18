// mysql2 모듈이 설치된 상태에서 sequelize모듈을 설치 후 사용하면 sequelize를 사용할 수 있다.
const Sequelize = require("sequelize");
const config = require("../config");

// users.js에서 불러옴
const User = require("./users");

const sequelize = new Sequelize(
  config.dev2.database,
  config.dev2.username,
  config.dev2.password,
  config.dev2
);

const db = {};

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

module.exports = db;
