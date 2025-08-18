import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Event {
  id: string;
  name: string;
  date: string;
}

export const useEventsStore = create(
  persist<{
    events: Event[];
    searchQuery: string;
    addEvent: (name: string, date: string) => void;
    deleteEvent: (id: string) => void;
    setSearchQuery: (query: string) => void;
  }>(
    (set) => ({
      events: [],
      searchQuery: '',
      addEvent: (name, date) => set((state) => ({
        events: [...state.events, { id: Date.now().toString(), name, date }]
      })),
      deleteEvent: (id) => set((state) => ({
        events: state.events.filter(event => event.id !== id)
      })),
      setSearchQuery: (query) => set({ searchQuery: query })
    }),
    { name: 'events-storage' }
  )
);
