// 색상 선택 컴포넌트 만들기
import React, { Component } from "react";
// import { ColorConsumer } from "../contexts/color";
import ColorContext from "../contexts/color";

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };
    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {color.map(color => (
                        <div 
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상을 선택하세요.</h2>
//             <ColorConsumer>
//                 {({ actions }) => (
//                     <div style={{ display: 'flex' }}>
//                         {color.map(color => (
//                             <div 
//                                 key={color}
//                                 style={{
//                                     background: color,
//                                     width: '24px',
//                                     height: '24px',
//                                     cursor: 'pointer'
//                                 }}
//                                 onClick={() => actions.setColor(color)}
//                                 onContextMenu={e => {
//                                     e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
//                                     actions.setSubcolor(color);
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </ColorConsumer>
//             <hr />
//         </div>
//     );
// };

export default SelectColors;
