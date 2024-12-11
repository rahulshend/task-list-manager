"use client"

import { useEffect, useRef } from 'react'
import { Task } from '../types'

interface TaskTableProps {
  tasks: Task[]
  updateTask: (task: Task) => void
  deleteTask: (id: number) => void
}

export default function TaskTable({ tasks, updateTask, deleteTask }: TaskTableProps) {
  const tableRef = useRef(null)

  useEffect(() => {
    if (tableRef.current) {
      // Initialize Tabulator here
      // You'll need to implement this part
    }
  }, [tasks])

  return <div ref={tableRef}></div>
}

