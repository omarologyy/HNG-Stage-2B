# TicketApp — Vue.js Implementation

## Project Overview

A modular ticket management app built using **Vue 3 + Vite**. Same feature set and visual/UX rules as the React implementation. Uses localStorage (`ticketapp_session`) to simulate authentication.

## Features

- Landing page with wavy SVG hero and decorative shapes
- Login / Signup with validation and toast/snackbar feedback
- Dashboard with key ticket metrics
- Ticket CRUD with inline validations and confirmations
- Protected routes using Navigation Guards
- Responsive design with max-width 1440px

## Tech & Libraries

- Vue 3
- Vite
- Vue Router (v4)
- Vuex for state management
- Tailwind CSS
- Axios / fetch
- alert notification (vue toast caused alot of problems)

## Setup & Run

```bash
git clone https://github.com/omarologyy/HNG-Stage-2B.git HNG-Stage-2B
cd HNG-Stage-2B
npm install
npm run dev
```

## Authentication (Simulated)

Key: ticketapp_session in localStorage

Use Router navigation guards to protect /dashboard and /tickets

Unauthorized attempts redirect to /signup

## Example Test Account

Email: user@example.com
Password: 123456

## Validation & Rules

title and status required

status values: open, in_progress, closed

Inline validation errors + toast messages on network failures

## Accessibility

Use semantic tags, labelled inputs, aria attributes where needed

Ensure contrast for status colors (green/amber/purple)

Keyboard-accessible modal confirmations
