import React from "react";
// import { Link, Route } from 'react-router-dom';
import { NavLink, Route } from 'react-router-dom';
import Profile from "./Page/Profile";
// import WithRouterSample from "./Page/WithRouterSample";

const Profiles = () => {
    // return (
    //     <div>
    //         <h3> 사용자 목록: </h3>
    //         <ul>
    //             <li>
    //                 <Link to="/Profiles/tester">tester</Link>
    //             </li>
    //             <li>
    //                 <Link to="/Profiles/developer">developer</Link>
    //             </li>
    //         </ul>

    //         <Route
    //             path="/profiles"
    //             exact
    //             render={() => <div>사용자를 선택해 주세요.</div>}
    //         />
    //         {/* 서브 라우트 : 라우트 내부에 또 라우트를 정의하는 것 */}
    //         <Route path="/profiles/:username" component={Profile} />
    //         {/* <WithRouterSample /> */}
    // //     </div>
    // );

    const activeStyle = {
        background: 'black', color: 'white'
    };

    return (
        <div>
            <h3> 사용자 목록: </h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/tester">
                        tester
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/developer">
                        developer
                    </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};
export default Profiles;
