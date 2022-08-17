import React, { useState } from "react";

const IterationSample2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 새로운 항목을 추가할 때 사용하는 id

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1);  // nextId 값에 1을 더해 줌
        setNames(nextNames);    // names 값을 업데이트함
        setInputText('');       // inputText를 비움
    };

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>)    // map 함수를 사용할 때 key 값을 index 대신 name.id값으로 지정함
    return (
        <>  
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
};

export default IterationSample2;