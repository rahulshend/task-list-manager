"use client"

import { Task } from '../types'

interface TaskTableProps {
  tasks: Task[]
  updateTask: (task: Task) => void
  deleteTask: (id: number) => void
}

export default function TaskTable({ tasks, updateTask, deleteTask }: TaskTableProps) {
  const handleUpdateTask = (task: Task) => {
    const updatedTask: Task = {
      ...task,
      status: task.status === 'To Do' ? 'Done' : 'To Do' 
    }
    updateTask(updatedTask)
  }

  const handleDeleteTask = (id: number) => {
    deleteTask(id)
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Task</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="py-2 px-4">{task.title}</td>
              <td className="py-2 px-4">{task.description}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded-full ${
                    task.status === 'Done' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleUpdateTask(task)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  {task.status === 'To Do' ? 'Mark as Done' : 'Mark as To Do'}
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
