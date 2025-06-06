This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration

- installation all components/ui used shadcn
- installation react-icon
- installation clerk ( for authentification )
- use sonner instead of toast
- use Loader2 instead of ReactLoader from spinnging button
- installation zod library
- installation SupaBase
- installation Prisma
  - npx prisma init
  - npx prisma db push
  - npx prisma migrate dev --name init
  - npx prisma studio
- npm install @supabase/supabase-js
- npm i world-countries
- npx shadcn@latest add skeleton
- npm i use-debounce
- npm i react-sharenpm install react react-dom leaflet react-leaflet 
- npm install -D @types/leaflet
- deploy vercel  "build": "next build" => "build": "npx prisma generate && next build",
- npm install  zustand --force 
- npm install recharts --force
- npm install --save @stripe/react-stripe-js @stripe/stripe-js stripe axios --force