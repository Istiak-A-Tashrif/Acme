import { Injectable } from '@nestjs/common';
import { MOCK_LEGAL_DOCUMENTS } from './data/mock-documents';
import { GenerateResponse, SearchResult } from './dto/response.dto';

@Injectable()
export class DocumentsService {
  async searchDocuments(query: string): Promise<GenerateResponse> {
    const startTime = Date.now();
    
    // comment thi  out in real  prod its just an  artificial   delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000),
    );

    const searchTerms = query
      .toLowerCase()
      .split(' ')
      .filter((term) => term.length > 2);

    const results: SearchResult[] = MOCK_LEGAL_DOCUMENTS.map((document) => {
      const content = document.content.toLowerCase();
      const title = document.title.toLowerCase();
      const summary = document.summary.toLowerCase();

      let relevanceScore = 0;
      const matchedSections: string[] = [];

      searchTerms.forEach((term) => {
        const titleMatches = (title.match(new RegExp(term, 'g')) || []).length;
        const contentMatches = (content.match(new RegExp(term, 'g')) || [])
          .length;
        const summaryMatches = (summary.match(new RegExp(term, 'g')) || [])
          .length;

        relevanceScore +=
          titleMatches * 3 + summaryMatches * 2 + contentMatches;

        if (titleMatches > 0) matchedSections.push('title');
        if (summaryMatches > 0) matchedSections.push('summary');
        if (contentMatches > 0) matchedSections.push('content');
      });

      return {
        document,
        relevanceScore,
        matchedSections: [...new Set(matchedSections)],
      };
    })
      .filter((result) => result.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore);

    const processingTime = Date.now() - startTime;

    return {
      query,
      results,
      totalResults: results.length,
      processingTime,
    };
  }
}
