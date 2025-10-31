'use client'
import Link from 'next/link'

export default function PastInvestigations() {
  const pastCases = [
    {
      id: 'INV-2023-156',
      title: 'Compliance Breach - ABC Capital',
      status: 'completed',
      conclusion: 'Violation confirmed, sanctions applied',
      completedDate: '2024-01-19',
      resolution: 'Fined $50,000 and mandatory compliance training'
    },
    {
      id: 'INV-2023-142',
      title: 'Licensing Documentation Review',
      status: 'closed',
      conclusion: 'All documentation in order',
      completedDate: '2023-12-15',
      resolution: 'No action required'
    },
    {
      id: 'INV-2023-128',
      title: 'Client Complaint - Mis-selling',
      status: 'completed',
      conclusion: 'Partial merit in complaint',
      completedDate: '2023-11-30',
      resolution: 'Client compensation ordered'
    }
  ]

  const getStatusColor = (status: string) => {
    return status === 'completed' 
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Past Investigations</h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Case ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conclusion
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resolution
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completed Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pastCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {caseItem.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {caseItem.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(caseItem.status)}`}>
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      {caseItem.conclusion}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      {caseItem.resolution}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {caseItem.completedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/dashboard/investigations/${caseItem.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View Details
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