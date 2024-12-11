interface StatusFilterProps {
    setFilter: (filter: string) => void
  }
  
  export default function StatusFilter({ setFilter }: StatusFilterProps) {
    return (
      <div className="mb-4">
        <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
        <select
          id="status-filter"
          onChange={(e) => setFilter(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="all">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    )
  }
  
  