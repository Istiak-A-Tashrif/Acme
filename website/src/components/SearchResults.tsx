import React from "react";
import { FileText, Clock, Target } from "lucide-react";
import type { SearchResult } from "../types/api";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  totalResults: number;
  processingTime: number;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  totalResults,
  processingTime,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-900">
              Found {totalResults} result{totalResults !== 1 ? "s" : ""} for "
              {query}"
            </span>
          </div>
          <div className="flex items-center space-x-2 text-blue-700">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Processed in {processingTime}ms</span>
          </div>
        </div>
      </div>

      {results?.length > 0 ? (
        <div className="space-y-4">
          {results?.map((result) => (
            <div
              key={result?.document?.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-gray-600 shrink-0" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {result?.document?.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {result?.document?.type}
                    </span>
                    <span>{result?.document?.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {result?.document?.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium text-gray-600">
                        Relevance:
                      </span>
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{
                              width: `${Math.min(
                                100,
                                (result?.relevanceScore / 10) * 100
                              )}%`,
                            }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {result?.relevanceScore}
                        </span>
                      </div>
                    </div>

                    {result?.matchedSections?.length > 0 && (
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-600">
                          Matches:
                        </span>
                        <div className="flex space-x-1">
                          {result?.matchedSections?.map((section) => (
                            <span
                              key={section}
                              className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                            >
                              {section}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-yellow-800 mb-2">
            No results found
          </h3>
          <p className="text-yellow-700">
            Try refining your search with different keywords or terms.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
