interface SearchBarProps {
    setSearchTerm: (term: string) => void
  }
  
  export default function SearchBar({ setSearchTerm }: SearchBarProps) {
    return (
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Tasks</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          placeholder="Search by title or description"
        />
      </div>
    )
  }
  
  