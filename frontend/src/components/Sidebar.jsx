function Sidebar({ activePage, setActivePage }) {
  const links = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'orders', label: '📦 Orders' },
    { id: 'inventory', label: '🏭 Inventory' },
  ]

  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-6 border-b border-blue-700">
        <h1 className="text-xl font-bold">⚡ SupplyFlow</h1>
        <p className="text-blue-300 text-sm mt-1">v1.0</p>
      </div>
      <nav className="flex-1 p-4">
        {links.map(link => (
          <button
            key={link.id}
            onClick={() => setActivePage(link.id)}
            className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all ${
              activePage === link.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-blue-200 hover:bg-blue-800'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-blue-700 text-blue-300 text-xs">
        Sysco LABS Portfolio Project
      </div>
    </div>
  )
}

export default Sidebar