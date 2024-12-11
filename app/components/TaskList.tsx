import { useState } from 'react'
import { Task } from '../types'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/outline'

interface TaskListProps {
  tasks: Task[]
  updateTask: (task: Task) => void
  deleteTask: (id: number) => void
}

export default function TaskList({ tasks, updateTask, deleteTask }: TaskListProps) {
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleEdit = (task: Task) => {
    setEditingId(task.id)
  }

  const handleSave = (task: Task) => {
    updateTask(task)
    setEditingId(null)
  }

  const statusColors = {
    'To Do': 'bg-yellow-200 text-yellow-800',
    'In Progress': 'bg-blue-200 text-blue-800',
    'Done': 'bg-green-200 text-green-800'
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map(task => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={task.title}
                    onChange={(e) => updateTask({ ...task, title: e.target.value })}
                    className="w-full p-1 border rounded"
                  />
                ) : (
                  <div className="text-sm font-medium text-gray-900">{task.title}</div>
                )}
              </td>
              <td className="px-6 py-4">
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={task.description}
                    onChange={(e) => updateTask({ ...task, description: e.target.value })}
                    className="w-full p-1 border rounded"
                  />
                ) : (
                  <div className="text-sm text-gray-500">{task.description}</div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={task.status}
                  onChange={(e) => updateTask({ ...task, status: e.target.value as Task['status'] })}
                  className={`text-sm font-medium px-2 py-1 rounded-full ${statusColors[task.status]}`}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {editingId === task.id ? (
                  <button onClick={() => handleSave(task)} className="text-green-600 hover:text-green-900">
                    <CheckIcon className="h-5 w-5" />
                  </button>
                ) : (
                  <button onClick={() => handleEdit(task)} className="text-blue-600 hover:text-blue-900 mr-2">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                )}
                <button onClick={() => deleteTask(task.id)} className="text-red-600 hover:text-red-900 ml-2">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

