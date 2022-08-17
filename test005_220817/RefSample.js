import React, { Component } from "react";

class RefSample extends Component {
    input = React.createRef();  // createRef 함수를 사용

    hanldeFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input} />  {/* ref설정 */}
            </div>
        );
    }
}

export default RefSample;