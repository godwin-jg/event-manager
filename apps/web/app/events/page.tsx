'use client';

import { EventForm } from '../../components/EventForm';
import { SearchBox } from '../../components/SearchBox';
import { EventsList } from '../../components/EventsList';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Event Manager
        </h1>
        
        <EventForm />
        <SearchBox />
        <EventsList />
      </div>
    </div>
  );
}
