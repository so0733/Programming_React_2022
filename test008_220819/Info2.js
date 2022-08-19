import React, { useReducer } from "react";

function reducer(state, action) {   // 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용
    return {    // 불변성을 지키면서 업데이트한 새로운 상태를 반환함
        ...state, [action.name]: action.value
    };
}

const Info2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '', nickname:''
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <b>이름 : </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickname}
            </div>
        </div>
    );
};

export default Info2;