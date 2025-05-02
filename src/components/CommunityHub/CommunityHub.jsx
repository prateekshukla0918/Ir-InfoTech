import PropTypes from 'prop-types'
import SearchBar from '../SearchBar/SearchBar'
import TabNavigation from '../TabNavigation/TabNavigation'
import PostList from '../PostList/PostList'
import './CommunityHub.css'

const CommunityHub = ({ activeTab, setActiveTab }) => {
  return (
    <div className="community-hub">
      <h2 className="community-title">Community Hub</h2>
      <SearchBar />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <PostList />
    </div>
  )
}

CommunityHub.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
}

export default CommunityHub