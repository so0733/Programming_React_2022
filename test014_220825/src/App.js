// import React, { useState } from "react";
// import axios from 'axios';
import React from "react";
// import React, { useState, useCallback } from "react";
// import Categories from "./components/Categories";
// import NewsList from "./components/NewsList";
import { Route } from 'react-router-dom';
import NewsPage from "./pages/NewsPage";

const App = () => {
  // const [data, setData] = useState(null);

  // const onClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
  //     setData(response.data);
  //   });
  // };

  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/todos/1',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c982ca2a1aae4bd3a4071d5a830c7425',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };


  // JSONPlaceholder에서 제공하는 가짜 API를 호출해 응답을 컴포넌트 상태에서 넣어서 보여줌
  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  //   </div>
  // );

  // return <NewsList />;
  
  // return (
  //   <>
  //     <Categories />
  //     <NewsList />
  //   </>
  // );

  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
