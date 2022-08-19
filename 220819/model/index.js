// index.js 가 model 안의 mome
const seq = require("sequelize");

// 여러개 내보낸 것을 받을때는 객체형태로 받으면 된다.
const { config, config2 } = require("../config/config.js");
const User = require("./users");
const Post = require("./post");

console.log(config);

// sequelize객체 생성
// 매개변수로 설정된 옵션을 적용한 객체를 만들어 놓는다.
const sequelize = new seq(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

// 내보낼때 db 객체를 통해 편하게 내보내기 위해 빈객체 만들어 저장한 것임.
const db = {};
// 빈객체에 sequelize 키값으로 객체 만들것을 넣어준다.
db.sequelize = sequelize;
db.User = User;
db.Post = Post;

// 아래 구문으로 인해 테이블이 생성된다.
User.init(sequelize);
Post.init(sequelize);

// 관계형 맺어주는 함수
User.associate(db);
Post.associate(db);

// 내보내고 싶은 객체들을 담은 db 객체를 내보낸다.
module.exports = db;
