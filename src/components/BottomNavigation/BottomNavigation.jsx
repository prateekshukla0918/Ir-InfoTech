import { FiGrid, FiMail, FiLayout, FiUsers, FiCrosshair } from 'react-icons/fi'
import './BottomNavigation.css'

const navigationItems = [
  { icon: <FiGrid size={24} />, label: 'Home' },
  { icon: <FiMail size={24} />, label: 'Messages' },
  { icon: <FiLayout size={24} />, label: 'Explore' },
  { icon: <FiUsers size={24} />, label: 'Groups' },
  { icon: <FiCrosshair size={24} />, label: 'Scan' }
]

const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      {navigationItems.map((item, index) => (
        <button key={index} className="nav-item">
          {item.icon}
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNavigation