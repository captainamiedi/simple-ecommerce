import React from 'react';
import { SearchProps } from '@/utils/types';

export default function Search({ searchQuery, setSearchQuery }: Readonly<SearchProps>) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 pl-8 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <svg
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
