import { useState, useEffect } from 'react'
import API_URL from '../api'
import axios from 'axios'

function StockBadge({ status }) {
  const colors = {
    OK: 'bg-green-100 text-green-700',
    Low: 'bg-red-100 text-red-700',
  }
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
      {status === 'Low' ? '⚠️ Low Stock' : '✅ OK'}
    </span>
  )
}

function Inventory() {
  const [inventory, setInventory] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API_URL}/api/inventory`)
      .then(res => {
        setInventory(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const filtered = inventory.filter(i =>
    i.product.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p className="text-gray-500">Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">🏭 Inventory</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Min Stock</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-400">{item.id}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{item.product}</td>
                <td className="px-6 py-4 text-gray-600">{item.stock}</td>
                <td className="px-6 py-4 text-gray-600">{item.min_stock}</td>
                <td className="px-6 py-4"><StockBadge status={item.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Inventory