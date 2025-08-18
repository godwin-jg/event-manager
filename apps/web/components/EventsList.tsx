'use client';

import { useEventsStore } from '../stores/useEventsStore';

export function EventsList() {
  const { events, searchQuery, deleteEvent } = useEventsStore();
  
  const filteredEvents = events.filter(event => 
    typeof event.name === 'string' &&
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredEvents.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center">
          {searchQuery ? 'No events match your search.' : 'No events yet.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Events ({filteredEvents.length})
      </h2>
      
      <div className="space-y-3">
        {filteredEvents.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
            <div>
              <h3 className="font-medium">{event.name}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
            <button
              onClick={() => deleteEvent(event.id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
