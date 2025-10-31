'use client'
import Link from 'next/link'

export default function OngoingInvestigations() {
  const ongoingCases = [
    {
      id: 'INV-2024-001',
      title: 'Market Manipulation - XYZ Securities',
      progress: 65,
      nextAction: 'Review trading records',
      dueDate: '2024-02-15',
      assignedTo: 'John Doe'
    },
    {
      id: 'INV-2024-003',
      title: 'Insider Trading Investigation',
      progress: 30,
      nextAction: 'Interview key personnel',
      dueDate: '2024-02-28',
      assignedTo: 'Jane Smith'
    },
    {
      id: 'INV-2024-005',
      title: 'Capital Adequacy Review - ABC Bank',
      progress: 80,
      nextAction: 'Finalize report',
      dueDate: '2024-02-10',
      assignedTo: 'Mike Johnson'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Ongoing Investigations</h1>
        <Link
          href="/dashboard/investigations/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          New Investigation
        </Link>
      </div>

      <div className="grid gap-6">
        {ongoingCases.map((caseItem) => (
          <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{caseItem.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Case ID: {caseItem.id}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                In Progress
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{caseItem.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${caseItem.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Next Action:</span>
                <p className="text-gray-600">{caseItem.nextAction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Due Date:</span>
                <p className="text-gray-600">{caseItem.dueDate}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Assigned To:</span>
                <p className="text-gray-600">{caseItem.assignedTo}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-4">
              <Link
                href={`/dashboard/investigations/${caseItem.id}`}
                className="text-blue-600 hover:text-blue-900 font-medium text-sm"
              >
                View Details
              </Link>
              <button className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                Update Progress
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}