'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewInvestigation() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignedTo: '',
    entity: '',
    complaintReference: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, this would call an API
    console.log('Creating investigation:', formData)
    router.push('/dashboard/investigations')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Initiate New Investigation</h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Investigation Title *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter investigation title"
                required
              />
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                Priority *
              </label>
              <select
                id="priority"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label htmlFor="entity" className="block text-sm font-medium text-gray-700 mb-1">
                Entity/Institution *
              </label>
              <input
                type="text"
                id="entity"
                value={formData.entity}
                onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter entity name"
                required
              />
            </div>

            <div>
              <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700 mb-1">
                Assign To
              </label>
              <select
                id="assignedTo"
                value={formData.assignedTo}
                onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select investigator</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Mike Johnson">Mike Johnson</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="complaintReference" className="block text-sm font-medium text-gray-700 mb-1">
                Complaint Reference (if any)
              </label>
              <input
                type="text"
                id="complaintReference"
                value={formData.complaintReference}
                onChange={(e) => setFormData({ ...formData, complaintReference: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter complaint reference number"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Investigation Description *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Provide detailed description of the investigation..."
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
            >
              Create Investigation
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}