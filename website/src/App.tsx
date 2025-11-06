import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ErrorMessage from './components/ErrorMessage';
import { searchDocuments } from './services/api';
import type { GenerateResponse } from './types/api';
import { Scale, BookOpen } from 'lucide-react';

function App() {
  const [results, setResults] = useState<GenerateResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await searchDocuments(query);
      setResults(response);
    } catch (err) {
      setError(err instanceof Error ? err?.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white  shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Scale className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Legal Document Search Portal</h1>
              <div className="flex items-center space-x-2 mt-1">
                <BookOpen className="h-4 w-4 text-gray-500" />
                <p className="text-gray-600">AI-powered legal assistant for document search and analysis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        <div className="space-y-6">
          {error && <ErrorMessage message={error} onRetry={handleRetry} />}
          
          {results && !error && (
            <SearchResults
              results={results.results}
              query={results.query}
              totalResults={results.totalResults}
              processingTime={results.processingTime}
            />
          )}

          {!results && !error && !isLoading && (
            <div className="text-center py-12">
              <Scale className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to the Legal Document Search Portal</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Search through our comprehensive database of legal documents including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900">Software License Agreements</h3>
                  <p className="text-sm text-gray-600 mt-1">Commercial licensing terms and conditions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900">Employment Contracts</h3>
                  <p className="text-sm text-gray-600 mt-1">Job agreements and compensation terms</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900">Partnership Agreements</h3>
                  <p className="text-sm text-gray-600 mt-1">Business partnership and joint venture terms</p>
                </div>
              </div>
              <p className="text-gray-500">
                Enter your search query above to get started. Try searching for terms like 
                <span className="font-medium"> "software license"</span>, 
                <span className="font-medium"> "employment"</span>, or 
                <span className="font-medium"> "partnership"</span>.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Acme AI Ltd. All rights reserved.</p>
            <p className="mt-1">Legal Document Search Portal - Full Stack Developer Assignment</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
