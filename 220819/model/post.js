const seq = require("sequelize");
class Post extends seq.Model {
  static init(sequelize) {
    return super.init(
      {
        msg: {
          type: seq.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // belongsTo 함수를 사용해서 매개변수로 작성한 테이블과 연결한다.
    // belongsTo (첫번째 테이블,{foreignKey : "Post의 키", targetKey: "연결 테이블 키(User)"})
    db.Post.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
}

module.exports = Post;
