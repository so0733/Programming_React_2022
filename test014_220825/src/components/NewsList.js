// 뉴스 내용을 출력해 보여줌
// import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
    // return (
    //     <NewsListBlock>
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //         <NewsItem article={sampleArticle} />
    //     </NewsListBlock>
    // );

    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c982ca2a1aae4bd3a4071d5a830c7425`,
        );
    }, [category]);

    // useEffect(() => {
    //     // async를 사용하는 함수 따로 선언
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {   // 카테고리 지정
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const response = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c982ca2a1aae4bd3a4071d5a830c7425`,
    //             );
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // }, [category]);

    // 대기 중일 떄
    if (loading) {
        return <NewsListBlock>로딩중입니다.</NewsListBlock>
    }
    // 아직 articles 값이 설정되지 않았을 때
    // if (!articles) {
    //     return null;
    // }
    if (!response) {
        return null;
    }

    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    // articles 값이 유효할 때
    // return (
    //     <NewsListBlock>
    //         {articles.map(article => (
    //             <NewsItem Key={article.url} article={article} />
    //         ))}
    //     </NewsListBlock>
    // );

    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;