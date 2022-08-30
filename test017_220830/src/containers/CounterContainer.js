// 리덕스와 연동된 컨테이너 컴포넌트
import React, { useCallback } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     );
// };

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);  // 리덕스 상태를 조회
    const dispatch = useDispatch();                             // 컴포넌트 내부에서 스토어의 내장함수 dispatch를 사용함
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

/* 
const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
    // // 임시 함수
    // increase: () => {
    //     console.log('increase');
    // },
    // decrease: () => {
    //     console.log('decrease');
    // },
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);
*/

/*
export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
    }),
)(CounterContainer);
*/

/*
export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => 
        bindActionCreators(
            { increase, decrease }, dispatch,
        ),
)(CounterContainer);
*/

// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     {
//         increase, decrease,
//     },
// )(CounterContainer);

export default CounterContainer;