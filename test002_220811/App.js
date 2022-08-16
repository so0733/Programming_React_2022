//import React, { Fragment } from 'react';
import React from 'react';
import './App.css';

function App() {
  const name = '리액트';

  return(
    <>
    <div className='react'>{name}</div>
    {/* 주석을 표현하는 방법입니다. */}
    {/* <input></input> */}
      <input />
    </>
  );
  // return <div className='react'>{name}</div>
  
  /*
  const style = {  // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됨
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  };
  return<div style={style}> {name}</div>
  */

  // const name = undefined;
  // return <div>{name || '리액트'}</div>
  // return <div>{name}</div>

  // return name || '값이 undefined 입니다.';

  // const name = '리액트';
  // return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>
  // return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
/*
  return (
    // <Fragment>
    // <h1>리액트 안녕?</h1>
    // <h2>잘 작동하네!</h2>
    // </Fragment>

    // <>
    //   <h1>{name} 안녕?</h1>
    //   <h2>잘 작동하네!</h2>
    // </>

    <div>
    {name === '리액트' ? (
      <h1>리액트입니다.</h1>
    ) : (
      <h2>리액트가 아닙니다.</h2>
    )}
    </div>
  );
*/

}

export default App;
