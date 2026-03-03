# Bookify

Transform your books into interactive AI conversations. Bookify is a modern Next.js application that lets users upload PDF books, intelligently extract and segment content, and engage with books through AI-powered voice conversations.

**Live Demo:** [Bookify](http://localhost:3000)

---

## Overview

Bookify revolutionizes how users interact with their favorite books by providing:

- **Smart Book Management**: Upload, organize, and search through your personal library
- **AI Voice Conversations**: Chat with your books using natural language processing
- **Intelligent Content Analysis**: Automatic PDF parsing, text segmentation, and searchable indexing
- **Subscription Plans**: Plan-based access with flexible upload limits
- **Seamless Authentication**: Secure authentication powered by Clerk
- **Responsive Design**: Beautiful, accessible UI built with Tailwind CSS and shadcn/ui

---

## Tech Stack

| Layer              | Technology                           |
| ------------------ | ------------------------------------ |
| **Framework**      | Next.js 16 (App Router), React 19    |
| **Language**       | TypeScript 5                         |
| **Authentication** | Clerk (`@clerk/nextjs` v6.39)        |
| **Database**       | MongoDB + Mongoose 9                 |
| **Storage**        | Vercel Blob (`@vercel/blob`)         |
| **Forms**          | React Hook Form + Zod validation     |
| **UI Components**  | Tailwind CSS v4, shadcn/ui, Radix UI |
| **Notifications**  | Sonner (toast notifications)         |
| **Voice AI**       | Vapi AI (`@vapi-ai/web`)             |
| **PDF Processing** | pdfjs-dist                           |
| **Icons**          | Lucide React                         |
| **Themes**         | next-themes (light/dark mode)        |

---

## Features

### Authentication & Authorization

- OAuth integration with Clerk
- Plan-based access control
- Secure user session management
- Subscription tier validation

### Book Management

- **Upload PDFs** with optional cover images
- **Automatic cover generation** from first PDF page
- **Book metadata** (title, author, persona)
- **Unique slug-based** URL routing
- **Timestamp tracking** (created/updated)

### Content Processing

- **Client-side PDF parsing** with pdfjs-dist
- **Intelligent text segmentation** (500-word chunks with 50-word overlap)
- **Full-text search indexing** on book segments
- **Regex-escaped search** for security
- **MongoDB persistence** for instant retrieval

### Voice Features

- **AI Voice Assistant** powered by Vapi
- **Natural conversation** with book content
- **Voice session tracking**
- **Real-time voice controls** (play/pause/stop)
- **Transcript viewing**

### Search & Discovery

- **Real-time search** across book library
- **Full-text search** on book content
- **Filter by title, author, and content**
- **Instant results** with MongoDB indexing

### Subscription System

- **Free tier** with limited uploads
- **Pro plan** with expanded limits
- **Enterprise tier** scaffolding
- **Usage tracking** per user
- **Plan-based enforcement**

### Comprehensive Error Handling

- **Global error pages** with recovery options
- **Custom error classes** (Auth, Validation, Network, Database)
- **Automatic error classification**
- **Developer-friendly logs** in development mode
- **User-friendly error messages** in production
- **Error boundaries** for component isolation
- **Toast notifications** for error feedback
- See [ERROR_HANDLING_GUIDE.md](./ERROR_HANDLING_GUIDE.md) for details

### Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key

# Database (MongoDB)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookify?retryWrites=true&w=majority

# File Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN=vercel_blob_token_here

# Voice AI (Vapi)
NEXT_PUBLIC_ASSISTANT_ID=your_vapi_assistant_id
```

**Getting Your Credentials:**

- **Clerk**: Visit [Clerk Dashboard](https://dashboard.clerk.com) → API Keys
- **MongoDB**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) → Get Connection String
- **Vercel Blob**: Use [Vercel Dashboard](https://vercel.com) → Storage → Blob Tokens
- **Vapi**: Get from [Vapi Dashboard](https://dashboard.vapi.ai) → Assistants

### Initialize Database

```bash
# Connect to MongoDB (connection from .env.local is used automatically)
npm run dev
```

The app will create necessary MongoDB collections on first run.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Database Schema

### Book Model

```typescript
{
  clerkId: String; // User ID from Clerk
  title: String; // Book title
  slug: String; // URL-friendly identifier (unique)
  author: String; // Author name
  persona: String; // AI persona for conversations
  fileURL: String; // Cloud storage URL
  fileBlobKey: String; // Vercel Blob key
  coverURL: String; // Cover image URL
  coverBlobKey: String; // Cover image blob key
  fileSize: Number; // PDF file size in bytes
  totalSegments: Number; // Text segment count
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  }
}
```

### Book Segment Model

```typescript
{
  bookId: ObjectId; // Reference to Book
  segmentIndex: Number; // Sequential position
  content: String; // Text content (max 1000 words)
  wordCount: Number; // Total words in segment
  searchIndex: String; // Full-text search field
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  }
}
```

### Voice Session Model

```typescript
{
  clerkId: String; // User ID
  bookId: ObjectId; // Book being discussed
  sessionId: String; // Voice session identifier
  duration: Number; // Call duration in seconds
  transcript: String; // Conversation text
  status: String; // 'active' | 'ended'
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  }
}
```

---

## API Routes

### Upload Endpoint

```
POST /api/upload
Content-Type: multipart/form-data

- file: PDF file (required)
- title: Book title (required)
- author: Author name (required)
- cover: Cover image (optional)
- persona: AI persona (optional)

Response: { success: boolean, book: IBook }
```

### Voice AI Endpoint

```
POST /api/vapi/search-book
Content-Type: application/json

Body: {
  bookSlug: string,
  query: string,
  limit?: number
}

Response: { success: boolean, segments: ISegment[] }
```

---

## Available Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run db:migrate      # Run migrations (future)
npm run db:seed         # Seed database (future)
```

---

## Security Features

✅ **Middleware Authentication**: All routes protected with Clerk middleware (`proxy.ts`)  
✅ **Regex Escaping**: Search queries escaped to prevent ReDoS attacks  
✅ **Input Validation**: Zod schemas validate all user inputs  
✅ **CORS Protection**: Configured for secure cross-origin requests  
✅ **Rate Limiting**: Recommended via Vercel Edge Functions  
✅ **Environment Isolation**: Sensitive keys in `.env.local` (excluded from git)

---

## Usage Limits

Default subscription tiers:

| Feature        | Free    | Pro        | Enterprise |
| -------------- | ------- | ---------- | ---------- |
| Books          | 5       | Unlimited  | Custom     |
| Upload Size    | 10MB    | 50MB       | 500MB      |
| API Calls      | 100/day | 10,000/day | Custom     |
| Voice Sessions | Limited | Unlimited  | Unlimited  |

---

## Error Handling

The application includes a comprehensive error handling system with:

- **Global error pages** (`app/error.tsx`, `app/(root)/error.tsx`)
- **Custom error classes** for different error types
- **Automatic error classification** and logging
- **User-friendly error messages**
- **Error boundaries** for component isolation
- **Toast notifications** for feedback

See [ERROR_HANDLING_GUIDE.md](./ERROR_HANDLING_GUIDE.md) for complete documentation and examples.

---

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com/import)
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Or deploy from CLI
npm i -g vercel
vercel
```

### Environment Variables in Vercel

Add all variables from `.env.local` in Vercel project settings:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `MONGODB_URI`
- `BLOB_READ_WRITE_TOKEN`
- `NEXT_PUBLIC_ASSISTANT_ID`

---

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Tailwind CSS for styling
- Write meaningful commit messages

---

## Troubleshooting

### MongoDB Connection Failed

```bash
# Check connection string format
# mongodb+srv://username:password@cluster.mongodb.net/dbname

# Ensure IP is whitelisted on MongoDB Atlas
# Visit: mongodb.com/cloud/atlas → Network Access
```

### Clerk Authentication Issues

```bash
# Verify environment keys are correct
# Check Clerk dashboard for your publishable & secret keys
# Ensure proxy.ts middleware is in root directory
```

### PDF Upload Fails

```bash
# Check file size constraints
# Ensure file is valid PDF
# Check BLOB_READ_WRITE_TOKEN is valid
# Verify MongoDB connection
```

### Voice Conversation Not Working

```bash
# Verify NEXT_PUBLIC_ASSISTANT_ID is correct
# Check Vapi dashboard for assistant settings
# Ensure microphone permissions are granted
```

---

## Author

**Muhammad Rafiq**

---

## Acknowledgments

- [Next.js](https://nextjs.org) - The React framework
- [Clerk](https://clerk.com) - Authentication
- [MongoDB](https://mongodb.com) - Database
- [Vercel Blob](https://vercel.com/storage/blob) - File storage
- [Vapi](https://vapi.ai) - Voice AI
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) - Component library

---

**Made with ❤️ for book lovers and AI enthusiasts**
