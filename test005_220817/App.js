import React, { Component } from "react";
// import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      // <ValidationSample/>
      // <ScrollBox/>  // ScrollBox 컴포넌트 렌더링
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
