import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Inventory from './pages/Inventory'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-auto p-6">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'orders' && <Orders />}
        {activePage === 'inventory' && <Inventory />}
      </main>
    </div>
  )
}

export default App