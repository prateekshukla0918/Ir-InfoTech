import PropTypes from 'prop-types'
import './TabNavigation.css'

const tabs = ['All', 'Discussion', 'News', 'Posts', 'Query', 'Job']

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-navigation">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
          aria-pressed={activeTab === tab}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

TabNavigation.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
}

export default TabNavigation