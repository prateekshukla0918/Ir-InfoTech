import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiMoreVertical } from 'react-icons/fi';
import PostActions from '../PostActions/PostActions';
import './PostCard.css';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderPostContent = () => {
    if (expanded || post.content.length <= 100) {
      return <p className="post-text">{post.content}</p>;
    }

    return (
      <>
        <p className="post-text">
          {post.content.substring(0, 100)}...
          <button className="more-button" onClick={toggleExpanded}>
            more
          </button>
        </p>
      </>
    );
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <img src={post.user.avatar} alt="User avatar" className="user-avatar" />
          <div className="user-details">
            <p className="username">{post.user.username}</p>
            <p className="user-handle">{post.user.handle}</p>
          </div>
        </div>
        <button className="more-options" aria-label="More options">
          <FiMoreVertical size={24} />
        </button>
      </div>

      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        {renderPostContent()}

        {post.images && post.images.length > 0 && (
          <div className="post-images">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="post-image"
              />
            ))}
          </div>
        )}
      </div>

      <PostActions
        upvotes={post.upvotes}
        downvotes={post.downvotes}
        comments={post.comments}
      />
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard;  // Make sure this is the last line

