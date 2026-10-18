# Praveen Kumar M — Portfolio

Personal portfolio site built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 16 (Turbopack)
- Tailwind CSS v4
- Framer Motion for scroll animations
- lucide-react for icons

Requires **Node.js >= 20.9** (this repo pins `20.18.1` via `.nvmrc`).

## Getting Started

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All resume content (profile, skills, experience, projects, education) lives in a single file: [`lib/data.ts`](lib/data.ts). Edit that file to update the site — no need to touch the components.

Your profile photo is at `public/images/profile.jpg`.

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra config needed. Deploy.

Every push to `main` will auto-deploy.
