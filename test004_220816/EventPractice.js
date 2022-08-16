import React, { Component } from "react";

class EventPractice extends Component { // 컴포넌트 생성

    state = {
        message: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {   // 임의 메서드 만듬
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1> 이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}  // input의 value 값을 state에 있는 값으로 설정함
                    onChange={this.handleChange}
                    /*
                    onChange={  // onChange 이벤트 핸들링
                        (e) => { 
                            // console.log(e);
                            // console.log(e.target.value);    // 값이 바뀔 때마다 값을 콘솔에 기록
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                    */
                />

                <button onClick={this.handleClick}>확인</button>
                {/* <button onClick={   // 버튼을 누를 때 comment 값을 공백으로 설정함
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button> */}
            </div>
        );
    }
}

export default EventPractice;