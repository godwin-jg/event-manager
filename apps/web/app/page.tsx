export default function HomePage() {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Event Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A simple and efficient way to manage your events
          </p>
          <div className="mt-12">
            <a
              href="/events"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  }
  