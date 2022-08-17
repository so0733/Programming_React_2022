import React from "react";

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>)    // 콜백 함수의 인수인 index 값을 사용
    // const nameList = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>
};

export default IterationSample;