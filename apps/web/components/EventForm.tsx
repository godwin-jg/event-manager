'use client';

import { useForm } from 'react-hook-form';
import { useEventsStore } from '../stores/useEventsStore';

export function EventForm() {
  const addEvent = useEventsStore((state) => state.addEvent);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    addEvent(data.name, data.date);
    reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Event</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('name')}
          placeholder="Event name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
          suppressHydrationWarning
        />
        
        <input
          {...register('date')}
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
          suppressHydrationWarning
        />
        
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-150 transform hover:scale-[1.01] focus:scale-[1.01]" //took a little of effort to get the hover and focus effects right
        >
          Add Event
        </button>
      </form>
    </div>
  );
}
