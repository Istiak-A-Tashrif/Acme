import { LegalDocument } from '../dto/response.dto';

export const MOCK_LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: '1',
    title: 'Software License Agreement - Commercial Use',
    type: 'License Agreement',
    date: '2024-01-15',
    content: `
      This Software License Agreement ("Agreement") is entered into between Acme Software Corporation and the Licensee.
      
      1. GRANT OF LICENSE
      Subject to the terms and conditions of this Agreement, Acme Software Corporation hereby grants to Licensee a non-exclusive, non-transferable license to use the Software.
      
      2. RESTRICTIONS
      Licensee shall not: (a) reverse engineer, decompile, or disassemble the Software; (b) distribute, sublicense, or transfer the Software; (c) use the Software for any unlawful purpose.
      
      3. INTELLECTUAL PROPERTY
      All intellectual property rights in and to the Software remain the exclusive property of Acme Software Corporation.
      
      4. TERMINATION
      This Agreement may be terminated by either party with 30 days written notice. Upon termination, Licensee must cease all use of the Software.
      
      5. LIABILITY AND WARRANTIES
      THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL ACME SOFTWARE CORPORATION BE LIABLE FOR ANY DAMAGES.
      
      6. GOVERNING LAW
      This Agreement shall be governed by the laws of the State of California.
    `,
    summary: 'Commercial software license agreement outlining usage rights, restrictions, and terms for proprietary software distribution.'
  },
  {
    id: '2',
    title: 'Employment Contract - Senior Developer Position',
    type: 'Employment Contract',
    date: '2024-02-20',
    content: `
      EMPLOYMENT AGREEMENT
      
      This Employment Agreement is made between TechCorp Inc. ("Company") and Jane Smith ("Employee").
      
      1. POSITION AND DUTIES
      Employee shall serve as Senior Software Developer and shall perform duties including but not limited to: software development, code review, technical documentation, and mentoring junior developers.
      
      2. COMPENSATION
      Employee shall receive an annual salary of $120,000, payable in bi-weekly installments. Employee is eligible for performance bonuses and stock options.
      
      3. CONFIDENTIALITY
      Employee agrees to maintain confidentiality of all proprietary information, trade secrets, and confidential business information.
      
      4. NON-COMPETE CLAUSE
      During employment and for 12 months thereafter, Employee shall not engage in any business that directly competes with Company's services.
      
      5. BENEFITS
      Employee is entitled to health insurance, dental coverage, 401(k) matching, and 20 days paid vacation annually.
      
      6. TERMINATION
      Employment may be terminated by either party with two weeks notice. Company may terminate immediately for cause.
      
      7. INTELLECTUAL PROPERTY
      All work product and inventions created during employment shall be the exclusive property of Company.
    `,
    summary: 'Employment agreement for senior developer position including compensation, benefits, confidentiality, and non-compete terms.'
  },
  {
    id: '3',
    title: 'Partnership Agreement - Technology Joint Venture',
    type: 'Partnership Agreement',
    date: '2024-03-10',
    content: `
      PARTNERSHIP AGREEMENT
      
      This Partnership Agreement is entered into between InnovateTech LLC and Digital Solutions Inc. for the purpose of developing AI-powered legal technology solutions.
      
      1. PURPOSE AND SCOPE
      The partnership shall focus on developing, marketing, and distributing artificial intelligence software for legal document analysis and case management.
      
      2. CAPITAL CONTRIBUTIONS
      InnovateTech LLC shall contribute $500,000 in cash and proprietary AI algorithms. Digital Solutions Inc. shall contribute $300,000 and existing client relationships.
      
      3. PROFIT AND LOSS SHARING
      Profits and losses shall be shared 60% to InnovateTech LLC and 40% to Digital Solutions Inc., based on their respective contributions.
      
      4. MANAGEMENT AND DECISION MAKING
      Major decisions require unanimous consent. Day-to-day operations managed jointly with appointed representatives from each partner.
      
      5. INTELLECTUAL PROPERTY
      All jointly developed IP shall be owned equally. Each partner retains ownership of their pre-existing IP.
      
      6. DURATION AND TERMINATION
      Partnership term is 5 years, renewable by mutual agreement. Either party may terminate with 6 months written notice.
      
      7. DISPUTE RESOLUTION
      Any disputes shall be resolved through binding arbitration in accordance with American Arbitration Association rules.
      
      8. CONFIDENTIALITY
      Both parties agree to maintain strict confidentiality of all partnership information and proprietary data.
    `,
    summary: 'Technology partnership agreement for AI legal solutions development with capital contributions, profit sharing, and IP ownership terms.'
  }
];