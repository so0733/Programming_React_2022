// Consumer 사용하기
// import React from "react";
import React, { useContext } from "react";
import ColorContext from "../contexts/color";
// import { ColorConsumer } from "../contexts/color";

// useContext Hook 사용
const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        // <ColorContext.Consumer>
        //     {value => (
        //         <div
        //             style={{
        //                 width: '64px', height: '64px', background: value.color
        //             }}
        //         />
        //     )}
        // </ColorContext.Consumer>

        // <ColorConsumer>
        //     {/* {value => ( */}

        //     {/* 객체 비구조화 할당 문법 */}
        //     {({ state }) => ( 
        //         <>
        //             <div style={{
        //                 width: '64px',
        //                 height: '64px',
        //                 // background: value.state.color
        //                 background: state.color
        //             }}
        //             />
        //             <div style={{
        //                 width: '32px',
        //                 height: '32px',
        //                 // background: value.state.subcolor
        //                 background: state.subcolor
        //             }}
        //             />
        //         </>
        //     )}
        // </ColorConsumer>
        <>
            <div style={{
                width: '64px',
                height: '64px',
                background: state.color
            }}
            />
            <div style={{
                width: '32px',
                height: '32px',
                background: state.subcolor
            }}
            />
        </>
    );
};

export default ColorBox;