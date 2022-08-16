import React from "react";
// import Counter from "./Counter";
import Say from "./Say";
// import MyComponent from "./MyComponent";  // 모듈 불러오기

/*
const App = () => {
  return <MyComponent />;
};
*/
const App = () => {
  return <Say />;
};

/*
// Counter 컴포넌트 불러와 렌더링
const App = () => {
  return <Counter />;
};
*/

/*
const App = () => {
  // return <MyComponent name="React" />; // 컴포넌트를 사용할 때 props 값 지정함
  // return <MyComponent />;
  // return <MyComponent>리액트</MyComponent>; // 태그 사이의 내용을 보여주는 children
  // return <MyComponent name="{3}">리액트</MyComponent>;
  // return <MyComponent name="React">리액트</MyComponent>;
  return (
    <MyComponent name="React" favoriteNumber={7}>리액트</MyComponent>
  );
};
*/

/*
// 클래스형 컴포넌트
class App extends Component {
  render() {              // render 함수가 반드시 필요함
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
*/

export default App;
