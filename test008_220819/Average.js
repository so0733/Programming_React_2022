import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중입니다.');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);   // 함수형 컴포넌트에서 ref를 쉽게 사용할수 있도록 해 줌

    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    const onChange = useCallback(e => { // 렌더링 성능을 최적화함
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // };

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);    // 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 해줌

    return (
        <div>
            {/* <input value={number} onChange={onChange} /> */}
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* <b>평균값:</b> {getAverage(list)} */}
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;