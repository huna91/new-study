const seq = require("sequelize");

// User 클래스에 sequelize모듈의 Model객체의 기능을 상속시켜 준다.
// => User 클래스에 seq.Model 기능을 준다.
class User extends seq.Model {
  // static init 메서드의 역할은 테이블을 생성해 주는 것이다.
  // => 테이블 생성 및 연결(매핑) 까지 구성
  static init(sequelize) {
    // 상속받은 함수를 쓰려면 super를 사용해야 한다.
    // super.init 함수의 매개변수
    // - 첫번째 : 테이블 안에 있는 컬럼에 대한 속성 (테이블의 구성)
    // - 두번째 : 테이블 자체에 대한 설정
    /*
    테이블 자료형 참조 사이트
    https://pjt3591oo.github.io/sequelizejs_translate/build/html/CoreConcepts/DateTypes.html
    */
    return super.init(
      // 첫번째
      {
        // name 컬럼 설정
        name: {
          // sequelize model 안에 있는 데이터 타입을 사용 => STRING 객체 사용하여 데이터 타입은 문자열로 설정함.
          type: seq.STRING(20),
          // 해당 컬럼의 값이 무조건 있어야 하는지 설정 (false면 꼭 있어야한다고 알려줌)
          allowNull: false,
          //   primaryKey: true
          // 기본키로 설정할 것에 대한 설정(컬럼에 기본키는 하나 무조건 있어야 한다.)
          // - 중복되면 안되는 것들에 대해 설정

          // 중복되지 않는 값들로 이뤄진 컬럼으로 만들 것인지에 대한 설정
          // - ex) 주민등록번호/휴대폰번호 같은 데이터들
          unique: true,
        },
        // age 컬럼 설정
        age: {
          // age 값은 숫자로 받으려 숫자열로 설정
          type: seq.INTEGER,
          // 해당 컬럼의 값이 필수인지
          allowNull: false,
        },
        msg: {
          // 긴문자 형태의 타입
          type: seq.TEXT,
          // 컬럼 값이 비어있어도 됨(필수는 아님)
          allowNull: true,
        },
        // 컬럼이 만들어진 시간을 나타내는 항목(생성시간이 필요하다면 사용)
        // 아래와 같이 컬럼으로 따로 만들어주지 않아도 두번째 테이블 자체 설정에서 timestamps:true 설정을 통해 자동 생성할 수 있다.
        created_at: {
          // 시간 타입으로
          type: seq.DATE,
          allowNull: false,
          // 칼럼에 데이터 값이 안들어오면 defaultValue 값이 기본으로 들어간다.
          // seq.NOW : 지금 현재 시간을 가져오는 메서드
          defaultValue: seq.NOW,
        },
      },
      // 두번쨰
      {
        // db => 위의 static init 매개변수 받음
        sequelize,
        // 생성시간과 업데이트시간을 나타내주는 컬럼 자동 생성
        timestamps: true,
        // underscored : true로 설정할 시, sequelize는 기본적으로 카멜표기법으로 씌여있는데 스네이크표기법으로 바꿔주는 옵션이다.
        // ex) userData -> user_data
        underscored: false,
        // 모델의 이름 설정
        // 모델의 이름은 관계형을 구성할 때 사용한다.
        modelName: "User",
        // 데이터베이스의 테이블 이름을 설정한다.
        tableName: "users",
        // paranoid 를 true로 설정하면 deletedAt이라는 컬럼이 만들어진다.
        // deletedAt : 삭제시간을 나타내는 컬럼이다.
        // 컬럼을 삭제할 경우 값은 남아있고 삭제 시간이 표기된다.(데이터 복구에 용이)
        paranoid: false,
        // 한글 입력을 위한 설정
        // 이모티콘을 사용하려면 뒤에 mb4를 붙인다. "utf8mb4", "u"
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
    // 1:N 외래키(foreignkey)
  }
  static associate(db) {
    // 1:N 관계를 생성한다. (hasMany(부모), belongsTo(자식))
    // sequelize에서 1:N 관계를 hasMany 함수로 정의한다.
    // hasMany : 테이블간 관계를 정의하는 함수 / 매개변수 (첫번째 연결 테이블, {
    // foreingKey : 첫번째 연결 테이블에 연결되어 생성되는 키 , sourceKey : User에서 연결할 키  })
    db.User.hasMany(db.Post, {
      foreignKey: "user_id", // Post에 생길 키
      sourceKey: "id", // User에서 연결할 키
    });
  }
}

module.exports = User;
