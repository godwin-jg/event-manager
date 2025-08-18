'use client';

import { useEventsStore } from '../stores/useEventsStore';

export function SearchBox() {
  const { searchQuery, setSearchQuery } = useEventsStore();

  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
      suppressHydrationWarning
    />
  );
}
