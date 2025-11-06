# Legal Document Search Portal

A full-stack web application for searching and analyzing legal documents using AI-powered assistance. Built with NestJS backend and React frontend for the Acme AI Ltd Full Stack Developer assignment.

## 🏗️ Architecture

```
Legal Document Search Portal/
├── backend/              # NestJS API server
│   ├── src/
│   │   ├── documents/    # Documents module with search logic
│   │   ├── main.ts       # Application entry point
│   │   └── ...
│   ├── Dockerfile        # Production Docker image
│   ├── Dockerfile.dev    # Development Docker image
│   └── package.json
├── website/              # React frontend with Vite
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API integration
│   │   ├── types/        # TypeScript definitions
│   │   └── App.tsx
│   ├── Dockerfile        # Production Docker image
│   ├── Dockerfile.dev    # Development Docker image
│   ├── nginx.conf        # Nginx configuration
│   └── package.json
├── docker-compose.yml    # Container orchestration
├── package.json          # Root workspace configuration
└── README.md
```

## 🚀 Features

### Backend (NestJS)
- **RESTful API** with `/api/generate` endpoint
- **Mock Legal Documents** - 3 hardcoded legal documents:
  - Software License Agreement
  - Employment Contract  
  - Partnership Agreement
- **Intelligent Search** with relevance scoring
- **CORS Support** for frontend integration
- **Error Handling** with proper HTTP status codes
- **Validation** using class-validator
- **Loading Simulation** for realistic UX (1-3 second processing time)

### Frontend (React + Vite + Tailwind)
- **Modern React** with TypeScript and hooks
- **Tailwind CSS** for styling with `@tailwindcss/vite` plugin
- **Search Interface** with real-time input validation
- **Results Display** with relevance scoring and matched sections
- **Loading States** and error handling
- **Responsive Design** that works on all devices
- **Clean UX** with professional legal portal aesthetics

## � Quick Start (Recommended)

**The fastest way to run the application:**

```bash
git clone https://github.com/Istiak-A-Tashrif/Acme.git
cd Acme
npm run docker:up
```

Then open http://localhost in your browser!

*Uses Docker containers for zero-config setup. No local Node.js installation required.*

## �🛠️ Setup Instructions

### Prerequisites
- Docker and Docker Compose (Recommended)
- Node.js 18+ and npm (For local development)

### Method 1: Docker Production (Recommended)

**✅ Best for: Quick evaluation, demos, and production deployments**
- Zero configuration required
- No local Node.js/npm needed
- Production-optimized builds
- Consistent environment

1. **Clone the repository:**
```bash
git clone https://github.com/Istiak-A-Tashrif/Acme.git
cd Acme
```

2. **Start with Docker Compose:**
```bash
# Build and start production containers
npm run docker:up

# Access the application:
# Frontend: http://localhost (port 80)
# Backend API: http://localhost:3001
```

3. **Stop containers:**
```bash
npm run docker:down
```

### Method 2: Local Development

**⚙️ Best for: Active development and customization**
- Full access to source code
- Direct npm script execution
- Requires Node.js 18+ installed

1. **Clone and install dependencies:**
```bash
git clone https://github.com/Istiak-A-Tashrif/Acme.git
cd Acme

# Install root dependencies
npm install

# Install all workspace dependencies
npm run install:all
```

2. **Set up environment variables:**
```bash
# Copy environment files
cp website/.env.example website/.env
cp backend/.env.example backend/.env

# Edit the .env files if needed (default values should work for local development)
```

3. **Start both services:**
```bash
# Run backend and frontend concurrently
npm run dev

# Or run individually:
npm run backend:dev    # Backend on http://localhost:3001
npm run frontend:dev   # Frontend on http://localhost:5173
```

3. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/api/generat

### Method 3: Docker Development (with hot reload)

**🔧 Best for: Active development with containerized environment**
- Hot reload for both frontend and backend
- Isolated development environment
- Same as local dev but in containers

```bash
# Start development containers with hot reload (ONLY dev services)
npm run docker:dev

# Frontend: http://localhost:5173 (with hot reload)
# Backend: http://localhost:3002 (with hot reload)

# Stop development containers
npm run docker:dev:down
```

**Important**: 
- **Production**: Uses `--profile prod` (only production services)
- **Development**: Uses `--profile dev` (only development services)
- **No conflicts**: Production and development can't run simultaneously

## 📋 Available Scripts

### Root Level
- `npm start` - Start both backend and frontend for production
- `npm run dev` - Start both backend and frontend in development mode with hot reload
- `npm run build` - Build both applications for production
- `npm run install:all` - Install dependencies for all workspaces
- `npm run docker:build` - Build Docker production images
- `npm run docker:up` - Start production containers
- `npm run docker:down` - Stop production containers
- `npm run docker:dev` - Start development containers with hot reload
- `npm run docker:dev:down` - Stop development containers

### Backend Scripts
- `npm run backend:start` - Start backend in production mode
- `npm run backend:dev` - Start backend in development mode with hot reload
- `npm run backend:build` - Build backend for production

### Frontend Scripts  
- `npm run frontend:start` - Start frontend production preview
- `npm run frontend:dev` - Start frontend in development mode with hot reload
- `npm run frontend:build` - Build frontend for production

## 🧪 Testing the Application

### Docker Testing (Recommended)

**For Docker Production Setup:**
1. Start the application: `npm run docker:up`
2. Open http://localhost in your browser
3. Test API directly: `curl -X POST http://localhost:3001/api/generate -H "Content-Type: application/json" -d '{"query": "software license"}'`

**For Docker Development Setup:**
1. Start the application: `npm run docker:dev`
2. Open http://localhost:5173 in your browser
3. Test API directly: `curl -X POST http://localhost:3002/api/generate -H "Content-Type: application/json" -d '{"query": "software license"}'`

### Local Development Testing

**Prerequisites:** Must have Node.js installed and dependencies set up (see Method 2 above)

1. Start the application using `npm run dev`
2. Open http://localhost:5173 in your browser
3. Test API directly: `curl -X POST http://localhost:3001/api/generate -H "Content-Type: application/json" -d '{"query": "software license"}'`

### Common Test Queries (Any Setup)

Try these search queries in the frontend:
   - `"software license"` - Should return Software License Agreement
   - `"employment"` - Should return Employment Contract
   - `"partnership"` - Should return Partnership Agreement
   - `"AI"` - Should return Partnership Agreement (AI development focus)
   - `"invalid query"` - Should return no results

### API Testing Details

**Note:** Use the correct port based on your setup:
- **Docker Production**: `http://localhost:3001`
- **Docker Development**: `http://localhost:3002` 
- **Local Development**: `http://localhost:3001`

```bash
# Example: Test the generate endpoint (adjust port as needed)
curl -X POST http://localhost:3001/api/generate \
  -H "Content-Type: application/json" \
  -d '{"query": "software license"}'
```

Expected response structure:
```json
{
  "query": "software license",
  "results": [
    {
      "document": {
        "id": "1",
        "title": "Software License Agreement - Commercial Use",
        "type": "License Agreement",
        "date": "2024-01-15",
        "content": "...",
        "summary": "..."
      },
      "relevanceScore": 6,
      "matchedSections": ["title", "summary", "content"]
    }
  ],
  "totalResults": 1,
  "processingTime": 1543
}
```

## 🔧 Configuration

### Environment Variables

#### Backend
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment mode (development/production)

#### Frontend
- `VITE_API_URL` - Backend API URL (default: http://localhost:3001)

### Docker Configuration
- Production: Optimized builds with nginx for frontend
- Development: Hot reload with volume mounts
- Network: Isolated Docker network for service communication
- Health checks: Backend health monitoring