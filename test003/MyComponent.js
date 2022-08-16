// import React, { Component } from "react";
// import PropTypes from 'prop-types';

// /*
// // 화살표 함수
// const MyComponent = () => {
//     return <div><h1>나의 새롭고 멋진 컴포넌트</h1></div>
// };
// */

// // 클래스형 컴포넌트에서 props 사용
// class MyComponent extends Component {
//     static defaultProps = { // class 내부에서 지정하는 방법
//         name : '기본 이름'
//     };
//     static propTypes = {    // class 내부에서 지정하는 방법
//         name : PropTypes.string,
//         favoriteNumber : PropTypes.number.isRequired
//     };

//     render() {
//         const { name, favoriteNumber, children } = this.props;  // 비구조화 할당
//         return (
//             <div>
//                 <h1>안녕하세요. 제 이름은 {name} 입니다.</h1> <br />
//                 <h2>children 값은 {children} 입니다.</h2> <br />
//                 <h3>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</h3>                
//             </div>
//         );
//     }
// }

// // isRequired를 사용해 필수 propTypes 설정함
// // const MyComponent = ({ name, favoriteNumber, children }) => {
// //     return (
// //         <div>
// //             <h1>안녕하세요. 제 이름은 {name} 입니다.</h1> <br />
// //             <h2>children 값은 {children} 입니다.</h2> <br />
// //             <h3>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</h3>
// //         </div>
// //     );
// // };

// // const MyComponent = props => {
// //     // return <div><h1>안녕하세요. 제 이름은 {props.name} 입니다.</h1></div>
    
// //     const { name, children } = props;

// //     return (
// //         <div>
// //             {/* <h1>안녕하세요. 제 이름은 {props.name} 입니다.</h1> <br />
// //             <h1>children 값은 {props.children} 입니다.</h1> */} {/* 태그 사이의 내용을 보여주는 children */}
// //             <h1>안녕하세요. 제 이름은 {name} 입니다.</h1> <br /> {/* 비구조화 할당 문법을 통해 props 내부 값 추출 */}
// //             <h1>children 값은 {children} 입니다.</h1>
// //         </div>
// //     )
// // };

// MyComponent.defaultProps = {    // props 값을 따로 지정하지 않았을 떄 보여 줄 기본값을 설정
//     name: '기본 이름'
// };

// MyComponent.propTypes = {       // props를 지정하거나 props의 타입을 지정함
//     name : PropTypes.string,
//     favoriteNumber : PropTypes.number.isRequired
// };

// export default MyComponent; // 모듈 내보내기(export)
