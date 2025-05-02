import PropTypes from 'prop-types'
import classNames from 'classnames'
import './TabNavigation.css'

const tabs = ['All', 'Discussion', 'News', 'Posts', 'Query', 'Job']

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-navigation">
      {tabs.map(tab => (
        <button
          key={tab}
          className={classNames('tab', { 'active': activeTab === tab })}
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