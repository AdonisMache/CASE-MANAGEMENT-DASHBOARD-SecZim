'use client'
import Link from 'next/link'

export default function Dashboard() {
  const stats = [
    { name: 'Total Investigations', value: '24', change: '+2', changeType: 'positive' },
    { name: 'Ongoing Cases', value: '8', change: '+1', changeType: 'positive' },
    { name: 'Pending Complaints', value: '12', change: '-3', changeType: 'negative' },
    { name: 'Completed This Month', value: '16', change: '+4', changeType: 'positive' },
  ]

  const recentActivities = [
    { id: 1, action: 'New investigation opened', entity: 'Case #INV-2024-001', time: '2 hours ago' },
    { id: 2, action: 'Complaint registered', entity: 'CRM-2024-045', time: '5 hours ago' },
    { id: 3, action: 'Investigation completed', entity: 'Case #INV-2023-156', time: '1 day ago' },
    { id: 4, action: 'Follow-up scheduled', entity: 'Case #INV-2024-008', time: '2 days ago' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Case Management Dashboard</h1>
        <Link
          href="/dashboard/investigations/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          New Investigation
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.entity}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/dashboard/investigations/new"
              className="block w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-150"
            >
              <span className="font-medium text-gray-900">Initiate New Investigation</span>
              <p className="text-sm text-gray-600 mt-1">Start a new case investigation</p>
            </Link>
            <Link
              href="/dashboard/complaints"
              className="block w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-150"
            >
              <span className="font-medium text-gray-900">Review Complaints</span>
              <p className="text-sm text-gray-600 mt-1">Manage and assign complaints</p>
            </Link>
            <Link
              href="/dashboard/investigations/ongoing"
              className="block w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-150"
            >
              <span className="font-medium text-gray-900">Monitor Ongoing Cases</span>
              <p className="text-sm text-gray-600 mt-1">Track active investigations</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}