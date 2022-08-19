import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');           // useState 함수는 하나의 상태 값만 관리할 수 있음
    const [nickname, setNickname] = useState('');   // useState를 여러 번 사용할 수 있음
    // useEffect(() => {   // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정
    //     console.log('렌더링이 완료되었습니다!');
    //     console.log({name, nickname});
    // });

    // useEffect(() => {   // 마운트 될 때만 실행
    //     console.log('마운트될 때만 실행됩니다.');
    // }, []);

    // useEffect(() => {   // 특정 값이 업데이트될 때만 실행
    //     console.log(name);
    // }, [name]);

    // useEffect(() => {   // 뒷정리하기
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // }, [name]);

    useEffect(() => {   // 뒷정리하기
        console.log('effect');
        return () => {
            console.log('unmount');
        };
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;