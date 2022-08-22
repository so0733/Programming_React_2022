import React from "react";
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {    // 화면을 가운데 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여 줌
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;
