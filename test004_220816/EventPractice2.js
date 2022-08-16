import React, { Component } from "react";

class EventPractice2 extends Component { // 컴포넌트 생성
    state = {
        message: ''
    }

    handleChange = (e) => { // 화살표 함수 형태로 메서드를 정의
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {   // 바벨의 transform-class-propertiies 문법을 사용해 화살표 함수 형태로 메서드를 정의
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1> 이벤트 연습2</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}  // input의 value 값을 state에 있는 값으로 설정함
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice2;