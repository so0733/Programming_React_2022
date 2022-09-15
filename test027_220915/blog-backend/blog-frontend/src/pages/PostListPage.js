import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
// import PostList from '../components/post/PostList';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      {/* <PostList /> */}
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
