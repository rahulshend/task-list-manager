import { Task } from '../types'

interface TaskCounterProps {
  tasks: Task[]
}

export default function TaskCounter({ tasks }: TaskCounterProps) {
  const counts = {
    total: tasks.length,
    todo: tasks.filter(task => task.status === 'To Do').length,
    inProgress: tasks.filter(task => task.status === 'In Progress').length,
    done: tasks.filter(task => task.status === 'Done').length,
  }

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <div className="text-2xl font-bold text-gray-800">{counts.total}</div>
        <div className="text-sm text-gray-500">Total Tasks</div>
      </div>
      <div className="bg-yellow-100 rounded-lg shadow p-4 text-center">
        <div className="text-2xl font-bold text-yellow-800">{counts.todo}</div>
        <div className="text-sm text-yellow-600">To Do</div>
      </div>
      <div className="bg-blue-100 rounded-lg shadow p-4 text-center">
        <div className="text-2xl font-bold text-blue-800">{counts.inProgress}</div>
        <div className="text-sm text-blue-600">In Progress</div>
      </div>
      <div className="bg-green-100 rounded-lg shadow p-4 text-center">
        <div className="text-2xl font-bold text-green-800">{counts.done}</div>
        <div className="text-sm text-green-600">Done</div>
      </div>
    </div>
  )
}

