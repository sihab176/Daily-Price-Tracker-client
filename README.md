# 🛒 Daily Price Tracker

**Daily Price Tracker** is a modern web application that empowers users to monitor, compare, and analyze product prices across local markets. With robust authentication, role-based dashboards, and real-time price tracking, it’s the ultimate tool for smart shopping and efficient market management.

## Live Demo

[Book Bridge](https://assignment12-local-market.netlify.app/)

---

## 🚀 Features

- **Authentication & Authorization**
  - Secure login and registration with Firebase Authentication
  - Protected routes and role-based access (Admin, Vendor, User)

- **Role-Based Dashboards**
  - **Admin:** Manage all users, products, and advertisements
  - **Vendor:** Add, update, and manage own products and ads
  - **User:** Browse products, track price trends, manage watchlist, and place orders

- **Product Management**
  - Add new products with detailed info and images
  - Update product price history
  - Approve/reject products (Admin)

- **Price History & Trends**
  - Visualize price changes over time for each product
  - Compare prices across different markets

- **Watchlist & Orders**
  - Add products to a personal watchlist
  - Place and manage orders

- **Modern UI**
  - Responsive design for desktop and mobile
  - Intuitive navigation and user experience

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, React Query, Tailwind CSS, DaisyUI, Framer Motion, React Hook Form, React Toastify, React Responsive Carousel, Lottie React
- **Authentication:** Firebase
- **Backend:** Node.js, Express, MongoDB

---

## 📦 NPM Packages Used

- [`react`](https://www.npmjs.com/package/react)
- [`react-dom`](https://www.npmjs.com/package/react-dom)
- [`react-router`](https://www.npmjs.com/package/react-router)
- [`@tanstack/react-query`](https://www.npmjs.com/package/@tanstack/react-query)
- [`axios`](https://www.npmjs.com/package/axios)
- [`firebase`](https://www.npmjs.com/package/firebase)
- [`react-hook-form`](https://www.npmjs.com/package/react-hook-form)
- [`sweetalert2`](https://www.npmjs.com/package/sweetalert2)
- [`react-toastify`](https://www.npmjs.com/package/react-toastify)
- [`framer-motion`](https://www.npmjs.com/package/framer-motion)
- [`react-responsive-carousel`](https://www.npmjs.com/package/react-responsive-carousel)
- [`lottie-react`](https://www.npmjs.com/package/lottie-react)
- [`react-datepicker`](https://www.npmjs.com/package/react-datepicker)
- [`daisyui`](https://www.npmjs.com/package/daisyui)
- [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)
- [`react-icons`](https://www.npmjs.com/package/react-icons)
- [`clsx`](https://www.npmjs.com/package/clsx) (if used for conditional classes)

---

## 🌐 Deployment

- **Frontend:** [Netlify](https://www.netlify.com/)
- **Backend:** [Vercel](https://vercel.com/)

---

## ⚡ Getting Started

### Prerequisites

- Node.js & npm
- Firebase project (for authentication)
- MongoDB database

### Installation

```bash
git clone https://github.com/your-username/daily-price-tracker.git
cd daily-price-tracker

cd src
npm install
# Add your Firebase config to .env
npm run dev