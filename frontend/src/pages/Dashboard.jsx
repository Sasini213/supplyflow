import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'

const monthlyData = [
  { month: 'Jan', orders: 12, revenue: 85000 },
  { month: 'Feb', orders: 18, revenue: 120000 },
  { month: 'Mar', orders: 15, revenue: 98000 },
  { month: 'Apr', orders: 22, revenue: 145000 },
  { month: 'May', orders: 28, revenue: 190000 },
  { month: 'Jun', orders: 5, revenue: 485000 },
]

const supplierData = [
  { name: 'Araliya Foods', orders: 12 },
  { name: 'Pelwatte Sugar', orders: 8 },
  { name: 'Prima Ceylon', orders: 15 },
  { name: 'Kurundu Oils', orders: 6 },
  { name: 'Anchor Lanka', orders: 9 },
]

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

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-700 mb-4">📈 Monthly Orders Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-700 mb-4">🏭 Supplier Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={supplierData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default Dashboard