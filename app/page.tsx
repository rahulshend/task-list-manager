"use client"

import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import StatusFilter from './components/StatusFilter'
import TaskCounter from './components/TaskCounter'
import SearchBar from './components/SearchBar'
import { Task } from './types'

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    filterAndSearchTasks()
  }, [tasks, filter, searchTerm])

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      const formattedTasks = data.slice(0, 20).map((task: any) => ({
        id: task.id,
        title: task.title,
        description: 'Click to edit description',
        status: task.completed ? 'Done' : 'To Do'
      }))
      setTasks(formattedTasks)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const filterAndSearchTasks = () => {
    let result = tasks
    if (filter !== 'all') {
      result = result.filter(task => task.status === filter)
    }
    if (searchTerm) {
      result = result.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setFilteredTasks(result)
  }

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Task Manager</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <AddTaskForm addTask={addTask} />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <StatusFilter setFilter={setFilter} />
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        <TaskCounter tasks={filteredTasks} />
        <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

