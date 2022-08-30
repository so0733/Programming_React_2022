// 카운터 컴포넌트, UI에 관련된 프레젠테이셔널 컴포넌트
import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;