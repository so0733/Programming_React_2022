import React, { Component } from "react";

class EventPractice3 extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => { // 화살표 함수 형태로 메서드를 정의
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeypress = (e) => {   // Enter 키를 눌러 handleClick 메서드를 호출함
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습3</h1>
                <input  // input 여러 개 다루기
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}   // input의 value 값을 state에 있는 값으로 설정함
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeypress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice3;