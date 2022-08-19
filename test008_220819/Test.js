import React, { Component } from "react";

class Test extends Component {
    id = 1
    setId = (n) => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }

    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export default Test;