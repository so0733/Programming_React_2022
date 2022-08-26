import React from "react";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from './contexts/color';
import SelectColors from "./components/SelectColor";

function App() {
  return (
    // Provider을 사용해 Context의 value를 변경
    // <ColorContext.Provider value={{ color: 'red' }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>

    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
