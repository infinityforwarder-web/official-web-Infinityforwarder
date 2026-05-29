# Infinity Freight Forwarder — Official Website

React + Vite single-page site for **Infinity Freight Forwarder Pvt Ltd**, based on the provided HTML design. Uses **Bootstrap 5** for layout and forms, with custom styling for a polished, mobile-app-like experience.

## Features

- Responsive layout (mobile, tablet, desktop)
- Mobile bottom navigation and compact header
- Light / dark theme (saved in `localStorage`)
- Scroll reveals, service pages, and process timeline
- EmailJS-powered quote request form
- WhatsApp and call floating action buttons

## Quick start

```bash
npm install
copy .env.example .env
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## EmailJS setup

Create an EmailJS service and template, then put the IDs in `.env`.

The template should use these variables:

- `{{to_email}}` as the template **To Email**
- `{{from_name}}`, `{{reply_to}}`, `{{phone}}`, `{{city}}`
- `{{service_required}}`, `{{message}}`, `{{submitted_at}}`

The form sends one email request to each address in `VITE_EMAILJS_TO_EMAIL`.

## Build for production

```bash
npm run build
npm run preview
```

## Stack

- React 18
- Vite 6
- Bootstrap 5 + React Bootstrap
- Font Awesome 6 (CDN)
- Google Fonts: Inter, Space Grotesk
