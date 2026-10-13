# Apple Enterprise ERP Portals

A clean, modern, and lightweight Enterprise Resource Planning (ERP) portal interface inspired by unified global enterprise architecture, customized for **Apple**.

## Features

- **17 Role Portals**: Super Admin, Executive, Finance, HR, Procurement, R&D, Production, Quality, Warehouse, Sales, Logistics, After-Sales, Legal, IT Admin, Employee, Supplier, Customer.
- **Dedicated Role Pages**: Logging into any role navigates directly into that role's live dashboard page with tailored KPIs and activity records.
- **Clean & Simple Design**: Minimal corporate aesthetic with clean light theme (default) and dark theme support.
- **Client-Side Hash Routing**: Supports seamless bookmarking and browser back/forward navigation (`#/portal/finance`, `#/portal/production`, etc.).
- **Zero Sound Effects**: Quiet, professional enterprise interface.

## Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Server runs locally at: `http://localhost:5173/`

## Project Structure

```text
├── index.html        # HTML structure for Portals Hub & Role Dashboard
├── style.css         # Modern vanilla CSS design system
├── app.js            # Routing, role data, and modal logic
├── public/           # Static assets and favicon
├── package.json      # Vite configuration
└── .gitignore        # Ignored build & node files
```
