// VS CODE로 실행이 되지 않아 https://codesandbox.io/ 사이트에서 실습함

import React from 'react';
import './SassComponent.scss';

const SassComponent = () => {
    return (
        <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
            <div className="box blue" />
            <div className="box indigo" />
            <div className="box violet" />
        </div>
    );
};

export default SassComponent;