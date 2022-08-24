import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import About from './Page/About';
import Home from './Page/Home';
// import Profile from './Page/Profile';
import Profiles from './Profiles';
import HistorySample from './Page/HistorySample';

function App() {
  return (
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">홈</Link>
    //     </li>
    //     <li>
    //       <Link to="/About">소개</Link>
    //     </li>
    //   </ul>
    //   <hr />
    //   {/* Route 컴포넌트로 특정 주소에 컴포넌트 연결함 */}
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path="/about" component={About} />
    // </div>

    // <div>
    //   <Route path="/" component={Home} exact={true} />
    //   {/* <Route path="/about" component={About} />
    //   <Route path="/info" component={About} /> */}

    //   {/* Route 하나에 여러 개의 path 설정함 */}
    //   <Route path={['/about','/info']} component={About} />
    // </div>

    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">홈</Link>
    //     </li>
    //     <li>
    //       <Link to="/About">소개</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile/tester">tester 프로필</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile/developer">developer 프로필</Link>
    //     </li>
    //   </ul>

    //   <hr />
      
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path={['/about','/info']} component={About} />
    //   {/* URL 파라미터 이용 */}
    //   <Route path="/profile/:username" component={Profile} />
    // </div>

    <div>
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/About">소개</Link>
      </li>
      <li>
        <Link to="/profiles">프로필</Link>
      </li>
      <li>
        <Link to="/history">history 예제</Link>
      </li>
    </ul>

    <hr />

    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about','/info']} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />  
      <Route
        // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        )}
        />
    </Switch>
  </div>
  );
};

export default App;