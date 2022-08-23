// import React, { useState, useRef, useCallback } from 'react';
import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {  // 데이터 2500개를 자동 생성함
  const array = [];
  for (let i=1;i<=2500;i++) {
    array.push({
      id: i,
      text: `할 일 ${i} 번째 입니다.`,
      checked: false,
    });
  }
  return array;
}

/* 데이터 2500개를 자동 생성하고 난 후 체크 버튼 반응이 느려진 원인 분석
  ※ 리렌더링이 발생하는 상황
  1. 자신이 전달받은 props가 변경될 때
  2. 자신의 state가 바뀔 때
  3. 부모 컴포넌트가 리렌더링될 때
  4. forceUpdate 함수가 실행될 때
*/

/*
// 1. 함수형 업데이트 - useState의 함수형 업데이트 기능을 사용
const App = () => {

  const [todos, setTodos] = useState(createBulkTodos); // 함수형 업데이트

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback( // todos 배열에 새 객체를 추가함
    text => {
      const todo = {
        id: nextId.current, text, checked: false,
      };
      setTodos(todos => todos.concat(todo));  
      nextId.current += 1;  // nextId 1씩 더하기
    }, []);

  const onRemove = useCallback(
    id => { // id를 파라미터로 받아와 같은 id를 가진 항목을 todos 배열에서 지우는 함수
      setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

  const onToggle = useCallback( // 수정 기능
    id => {
      setTodos(
        todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo,),
      );
    }, []);
*/

// 2. useReducer 사용하기

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
    // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
    return todos.concat(action.todo);
    case 'REMOVE': // 제거
    // { type: 'REMOVE', id: 1 }
    return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글
    // { type: 'REMOVE', id: 1 }
    return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo, );
    default:
      return todos;
  }
}

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(text => { // todos 배열에 새 객체를 추가함
    const todo = {
        id: nextId.current, text, checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;  // nextId 1씩 더하기
    }, []);

  const onRemove = useCallback(
    id => { // id를 파라미터로 받아와 같은 id를 가진 항목을 todos 배열에서 지우는 함수
      dispatch({ type: 'REMOVE', id });
    }, []);

  const onToggle = useCallback( // 수정 기능
    id => {
      dispatch({ type: 'TOGGLE', id });
    }, []);

  return (
    <TodoTemplate>
      {/* <TodoInsert /> <TodoList todos={todos} /> */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
