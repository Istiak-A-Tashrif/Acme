export interface LegalDocument {
  id: string;
  title: string;
  content: string;
  type: string;
  date: string;
  summary: string;
}

export interface SearchResult {
  document: LegalDocument;
  relevanceScore: number;
  matchedSections: string[];
}

export interface GenerateResponse {
  query: string;
  results: SearchResult[];
  totalResults: number;
  processingTime: number;
}
