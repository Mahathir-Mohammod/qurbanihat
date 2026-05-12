# 🐄 Qurbani Hat

A web platform for browsing and buying Qurbani animals online — making the process simple, transparent, and accessible.

## 🔗 Live URL

[https://qurbanihat-gamma.vercel.app](https://qurbanihat-gamma.vercel.app)

## ✨ Features

- Browse and buy Qurbani animals
- User authentication (Email & Google sign-in)
- Secure account management

## 🛠️ Tech Stack

- **Next.js** — React framework
- **Tailwind CSS** — Styling
- **Better Auth** — Authentication
- **MongoDB** — Database

## 📦 NPM Packages

| Package | Purpose |
|--------|---------|
| [React Spring](https://www.react-spring.dev/docs/components/parallax) | For card fade in (simple and easy) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS styling |
| [Better Auth](https://better-auth.com) | Authentication (email & Google) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env.local` file with the following:

```env
BETTER_AUTH_SECRET=
AUTH_DB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_BETTER_AUTH_URL=
```
