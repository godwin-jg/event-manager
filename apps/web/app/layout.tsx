import type { ReactNode } from 'react';
import './globals.css';
type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-gray-50">
        <div className="min-h-screen">
          <header className="bg-red shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <h1 className="text-2xl font-bold text-gray-900">Event Manager</h1>
                <nav className="flex space-x-8">
                  <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
                  <a href="/events" className="text-gray-500 hover:text-gray-900">Events</a>
                </nav>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
