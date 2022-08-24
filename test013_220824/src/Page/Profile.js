import React from "react";
// import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
    tester: {
        name: '테스터',
        description: '리액트를 좋아하는 테스터'
    },
    developer: {
        name: '개발자',
        description: '코딩을 좋아하는 개발자'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const Profile = data[username];
    if (!Profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({Profile.name})
            </h3>
            <p>{Profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;
