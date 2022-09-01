// import React, { Component } from 'react';
// import React, { useState, Suspense } from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import notify from './notify';
import loadable from '@loadable/component';

// const SplitMe = React.lazy(() => import('./SplitMe'));
// 로딩 중에 다른 UI를 보여줌
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  // Loadable Components를 통한 코드 스플리팅
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

/*
function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  // Suspense에서 fallback props를 통해 로딩 중에 보여 줄 JSX를 지정할 수 있음
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}
*/

/*
function App() {
  const onClick = () => { // Hello React!를 누르면 notify 함수가 실행됨
    // notify();
    import('./notify').then(result => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}
*/

/*
class App extends Component {
  state = { // state을 사용한 코드 스플리팅
    SplitMe: null
  };
  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
    </div>
    );
  }
}
*/

export default App;
