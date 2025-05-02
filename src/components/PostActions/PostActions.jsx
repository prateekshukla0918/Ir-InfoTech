import PropTypes from 'prop-types';
import { FiThumbsUp, FiThumbsDown, FiMessageSquare, FiShare2 } from 'react-icons/fi';
import './PostActions.css';

const PostActions = ({ upvotes, downvotes, comments }) => {
  return (
    <div className="post-actions">
      <div className="action-button">
        <FiThumbsUp className="action-icon" />
        <span className="action-count">{upvotes}</span>
      </div>

      <div className="action-button">
        <FiThumbsDown className="action-icon" />
        <span className="action-count">{downvotes}</span>
      </div>

      <div className="action-button">
        <FiMessageSquare className="action-icon" />
        <span className="action-count">{comments} Comments</span>
      </div>

      <div className="action-button share">
        <FiShare2 className="action-icon" />
        <span className="action-text">Share</span>
      </div>
    </div>
  );
};

PostActions.propTypes = {
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired
};

export default PostActions; // Ensure default export
