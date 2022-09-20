import { React, useState } from "react";
import { Header, Body } from "../com";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 파라미터 값을 가져오기 위한 방법
// 리액트 훅 함수 useParams 사용(리액트에서 지원해주는 유용한 함수:리액트 훅)
// useParams : url 경로에 있는 파라미터들을 객체의 형태로 불러올 수 있다.
// useParams함수를 실행하여 반환된 객체를 가지고 동작한다.

/*
*** 검색 방법 ***
- input 입력창이 필요함
- 입력했을 경우 입력값에 대한 리액트 값을 들고있어야 하니 useState를 사용하여 저장
- input 값을 serch에 있어 이 데이터를 활용할 수 있다.
- 검색 쿼리문을 만들어 이를 활용한다.(useSearchParams 함수 사용)
- useSearchParams : 함수 실행시 객체 반환
 > ? 뒤의 키값을 기준으로 뒤의 값까지 가져온다.
 >ex) ?q=1 은 {q:1} 이렇게 출력
- useLocation : 현재 경로를 가져와서 사용
*/
const Detail = () => {
  const [serch, setSerch] = useState("");
  const keyInput = (e) => {
    setSerch(e.target.value);
  };
  const location = useLocation();
  console.log(location);
  const [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  const params = useParams();
  //   console.log(params);
  //   const { id, num, name } = useParams();

  return (
    <div>
      <Header title="상세페이지" />
      <div>{serch}</div>
      <div>이거 검색함 : "{query.get("q")}"</div>
      <input onChange={keyInput} />
      <Link to={location.pathname + "?q=" + serch}>검색</Link>
      {/* <Body path="/shop" name="상점페이지" item={params} /> */}
    </div>
  );
};

export default Detail;
