import { FiSearch } from 'react-icons/fi'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-icon">
        <FiSearch size={24} color="var(--color-accent)" />
      </div>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search posts here..." 
        aria-label="Search posts"
      />
    </div>
  )
}

export default SearchBar