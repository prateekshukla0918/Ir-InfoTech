import { useState } from 'react';
import PostCard from '../PostCard/PostCard';  // Correct default import
import { postsData } from '../../data/postsData';
import './PostList.css';

const PostList = () => {
  const [posts] = useState(postsData);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
