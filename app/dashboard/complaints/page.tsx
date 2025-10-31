'use client'
import Link from 'next/link'
import { useState } from 'react'

interface Complaint {
  id: string
  subject: string
  status: 'new' | 'under-review' | 'assigned' | 'resolved'
  priority: 'low' | 'medium' | 'high'
  submittedBy: string
  submittedDate: string
  assignedTo: string
  entity: string
}

export default function Complaints() {
  const [complaints] = useState<Complaint[]>([
    {
      id: 'CRM-2024-045',
      subject: 'Unauthorized account activity',
      status: 'new',
      priority: 'high',
      submittedBy: 'Client A',
      submittedDate: '2024-01-20',
      assignedTo: '',
      entity: 'XYZ Securities'
    },
    {
      id: 'CRM-2024-044',
      subject: 'Delayed fund transfer',
      status: 'under-review',
      priority: 'medium',
      submittedBy: 'Client B',
      submittedDate: '2024-01-19',
      assignedTo: 'John Doe',
      entity: 'ABC Capital'
    },
    {
      id: 'CRM-2024-043',
      subject: 'Misleading investment advice',
      status: 'assigned',
      priority: 'high',
      submittedBy: 'Client C',
      submittedDate: '2024-01-18',
      assignedTo: 'Jane Smith',
      entity: 'DEF Advisors'
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'under-review': return 'bg-yellow-100 text-yellow-800'
      case 'assigned': return 'bg-orange-100 text-orange-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-orange-100 text-orange-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Complaints Management</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
          New Complaint
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Total Complaints</div>
          <div className="text-2xl font-bold text-gray-900">24</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">New</div>
          <div className="text-2xl font-bold text-blue-600">8</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">In Progress</div>
          <div className="text-2xl font-bold text-orange-600">12</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-medium text-gray-600">Resolved</div>
          <div className="text-2xl font-bold text-green-600">4</div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
              All Complaints
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              New
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Under Review
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Assigned
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Complaint ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Entity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complaints.map((complaint) => (
                  <tr key={complaint.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {complaint.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      {complaint.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {complaint.entity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(complaint.status)}`}>
                        {complaint.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(complaint.priority)}`}>
                        {complaint.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {complaint.submittedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {complaint.submittedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        Review
                      </button>
                      <Link
                        href="/dashboard/investigations/new"
                        className="text-green-600 hover:text-green-900"
                      >
                        Create Case
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}