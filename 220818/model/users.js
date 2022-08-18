const Sequelize = require("sequelize");
// sequelize 모듈을 확장 한 user 클래스
class User extends Sequelize.Model {
  // 아래 init 함수에서 테이블을 설정해 준다.
  static init(sequelize) {
    // super.init 함수의 매개변수
    //  - 첫번째 테이블 컬럼에 대한 설정
    //  - 두번째 테이블 자체설정
    return super.init(
      // 첫번째 테이블 컬럼에 대한 설정
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false, // Null값을 허용 할 것인지
          unique: true, // 고유키 설정 : true는 값이 중복되지 않고 중복되면 안되는 값들을 쓸때 설정한다.(반드시 입력할 필요는 없음)
          // primarykey : 기본키로 값이 중복되지 않고 반드시 입력해야 하는 값
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        msg: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      // 두번째 테이블 자체설정
      {
        // sequelize : init 함수의 매개변수를 연결시켜주는 옵션
        sequelize,
        // timestamps : true는 createdAt과 updatedAt 두 컬럼을 추가해주고
        // 생성시간과 수정시간을 자동으로 입력해준다.
        timestamps: true,
        // underscored : 시쿼라이즈는 테이블명과 컬럼명을 카멜표기법으로 표시하지만 underscored 설정을
        // true로 한다면 스네이크 표기법으로 바꿔주는 옵션이다.(ex : aaaAa -> aaa_aa 이런식으로)
        underscored: false,
        // modelName : 모델의 이름을 설정
        modelName: "User",
        // tableName : 데이터베이스에 실제로 등록되는 이름(보통 소문자로 작성하고 복수형으로 쓴다.)
        tableName: "users",
        // paranoid : true로 설정하면 deletedAt 이라는 컬럼이 추가된다.(복원이 필요할수도 있는 데이터들에 사용한다.)
        // 삭제하면 컬럼이 지워지는것이 아니라 해당 컬럼에 삭제한 시간이 표기된다.(검색하면 해당 데이터는 검색되지 않음.)
        paranoid: false,
        // charset와 collate의 설정은 아래와 같이 utf-8, utf_general_ci로 설정해야 한글 입력이 가능하다.
        // 이모티콘을 추가로 사용하려면 "utf8md4", "utf8md4_general_ci" 이 값으로 설정해주어야 한다.
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  // 아래 associate 함수에서 다른 모델과 관계를 설정한다.
  // mysql JOIN 기능을 기반으로 여러 테이블 간의 관계를 만들어준다.
  // sequelize에서는 테이블간의 관계성만 알려주면 JOIN 기능이 알아서 구현된다.
  //   static associate(db) {}
}

module.exports = User;
