import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
// import PostViewer from '../components/post/PostViewer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      {/* <PostViewer /> */}
      <PostViewerContainer />
    </>
  )
};

export default PostPage;