import React, { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); // 버튼 onClick 이벤트가 발생할 때 input에 포커스 주도록 코드 수정
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleButtonClick();
        }
    }

    render() {
        return (
            <div>
                <input ref={(ref) => this.input=ref} type="password" value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress} // input에 ref 달기
                // <input type="password" value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;