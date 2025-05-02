import { FiMenu } from 'react-icons/fi'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <button className="menu-button" aria-label="Menu">
        <FiMenu size={24} />
      </button>
      <div className="logo">
        <h1>Samriddhi Setu</h1>
      </div>
      <div className="profile">
        <img 
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Profile" 
          className="profile-image" 
        />
      </div>
    </header>
  )
}

export default Header