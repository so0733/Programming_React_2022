// import React, { useState, Component, Suspense } from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import notify from './notify';
import loadable from '@loadable/component';

// const SplitMe = React.lazy(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>로딩중...</div>
});

// Suspense에서 fallback props를 통해 '로딩 중...'을 보여줄 JSX를 지정함
function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
    // import('./notify').then(result => result.default());
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}> Hello React! </p>
        {visible && <SplitMe />}
        {/* <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense> */}
      </header>
    </div>
  );
}

// SplitMe 컴포넌트를 렌더링

// class App extends Component {
//   state = {
//     SplitMe: null
//   };
//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}> Hello React! </p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
