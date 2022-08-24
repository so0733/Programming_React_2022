import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략함
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열임
    return (
        <div>
            <h1> 소개(About) </h1>
            <p> 이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다. </p>
            {/* URL 쿼리 활용 http://localhost:3000/about?detail=true 브라우저에서 주소 입력 후 접속 */}
            {showDetail && <p> detail 값을 true로 설정하셨군요! </p>}
        </div>
    );
};

export default About;