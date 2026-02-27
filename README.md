# MKode – High-Converting Premium Website

Premium, minimal, high-conversion website for MKode. Technical systems and AI automation for SMEs.

## Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4 + Framer Motion
- **Backend:** Supabase
- **Icons:** Lucide React

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials.
   ```bash
   cp .env.example .env.local
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment on Hostinger (Node.js)

1. **Prepare Build:**
   Ensure `npm run build` succeeds locally.

2. **Upload Files:**
   Upload the following to your Hostinger server via FTP or Git:
   - `.next` (after running build)
   - `public`
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `.env` (Create this on the server)

3. **Hostinger Panel:**
   - Go to **Websites > Manage > Node.js**.
   - Set the **Application Root** to your project folder.
   - Set **Application URL** to your domain.
   - Set **Application Startup File** to `node_modules/next/dist/bin/next` or use a custom `server.js` if required.
   - Run `npm install` and `npm start` from the panel.

## Supabase Schema

Create a table named `leads` with columns:
- `id`: uuid (primary key)
- `created_at`: timestamptz
- `name`: text
- `email`: text
- `company`: text
- `revenue_range`: text
- `pain`: text
- `message`: text
