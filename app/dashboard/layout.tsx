'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'All Investigations', href: '/dashboard/investigations' },
    { name: 'New Investigation', href: '/dashboard/investigations/new' },
    { name: 'Ongoing Cases', href: '/dashboard/investigations/ongoing' },
    { name: 'Past Investigations', href: '/dashboard/investigations/past' },
    { name: 'Complaints', href: '/dashboard/complaints' },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:w-64 bg-blue-800 text-white`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Prudential RBS</h1>
          <p className="text-blue-200 text-sm">Case Management</p>
        </div>
        <nav className="mt-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-sm ${
                pathname === item.href
                  ? 'bg-blue-900 border-r-4 border-yellow-400'
                  : 'hover:bg-blue-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Supervisor</span>
              <Link href="/login" className="text-sm text-blue-600 hover:text-blue-800">
                Logout
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}