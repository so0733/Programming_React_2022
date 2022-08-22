import React, { Component } from 'react';
import SassComponent from './SassComponent';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    // VS CODE로 실행이 되지 않아 https://codesandbox.io/ 사이트에서 실습함
    return <SassComponent />;
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <img src={logo} className="logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
export default App;
