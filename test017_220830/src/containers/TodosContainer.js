// 리덕스와 연동된 컨테이너 컴포넌트
import React from "react";
// import React, { useCallback } from "react";
// import { connect } from 'react-redux';
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import todos, { changeInput, insert, toggle, remove } from '../modules/todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from "../components/Todos";
import useActions from "../lib/useActions";

// const TodosContainer = ({
//     input, todos, changeInput, insert, toggle, remove,
// }) => {
//     return (
//         <Todos
//             input={input}
//             todos={todos}
//             onchangeInput={changeInput}
//             onInsert={insert}
//             onToggle={toggle}
//             onRemove={remove}
//         />
//     );
// };

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input, todos: todos.todos
    }));
    // const dispatch = useDispatch();
    // const onchangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    const [onchangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove], []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onchangeInput={onchangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

// export default connect(
//     // 비구조화 할당을 통해 todos를 분리하여
//     // state.todos.input 대신 todos.input을 사용
//     ({ todos }) => ({
//         input: todos.input, todos: todos.todos,
//     }),
//     {
//         changeInput, insert, toggle, remove,
//     },
// )(TodosContainer);

export default React.memo(TodosContainer);