import { useState } from 'react'
import Header from './components/Header/Header'
import CommunityHub from './components/CommunityHub/CommunityHub'
import BottomNavigation from './components/BottomNavigation/BottomNavigation'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <CommunityHub activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      <BottomNavigation />
    </div>
  )
}

export default App
