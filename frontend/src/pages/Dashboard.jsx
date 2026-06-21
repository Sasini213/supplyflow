import { useState, useEffect } from 'react'
import axios from 'axios'

function StatCard({ title, value, icon, color }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  )
}

function Dashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/api/stats')
      .then(res => {
        setStats(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-gray-500">Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📊 Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Orders" value={stats?.total_orders} icon="📦" color="border-blue-500" />
        <StatCard title="Revenue" value={`Rs. ${stats?.total_revenue?.toLocaleString()}`} icon="💰" color="border-green-500" />
        <StatCard title="Pending Orders" value={stats?.pending_orders} icon="⏳" color="border-yellow-500" />
        <StatCard title="Low Stock Items" value={stats?.low_stock_items} icon="⚠️" color="border-red-500" />
      </div>
    </div>
  )
}

export default Dashboard