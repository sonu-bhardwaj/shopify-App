# 📢 Shopify Announcement Banner App

A Shopify Embedded App that allows merchants to create and manage announcement banners directly from the Shopify Admin dashboard. Announcements are stored in **MongoDB** for audit history, synchronized to **Shopify Shop Metafields** using the Shopify Admin GraphQL API, and displayed across the storefront using a **Theme App Embed**.

---

# 🚀 Features

- ✅ Shopify Embedded Admin App
- ✅ Create announcement banners from Shopify Admin
- ✅ Store announcement history in MongoDB
- ✅ Timestamp tracking (Audit History)
- ✅ Synchronize announcements to Shopify Shop Metafields
- ✅ Display announcements across all storefront pages
- ✅ Theme App Embed support
- ✅ Reuse previous announcements
- ✅ Live deployment on Render

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Shopify App Bridge
- Shopify React Router

## Backend

- Node.js
- Shopify Admin GraphQL API

## Database

- MongoDB (Mongoose)
- PostgreSQL (Prisma) – Shopify Session Storage

## Shopify

- Shopify Embedded App
- Theme App Extension
- Shop Metafields

## Deployment

- Render

---

# 📂 Project Structure

```text
announcement-banner-app
│
├── app
│   ├── components
│   ├── lib
│   ├── models
│   ├── routes
│   ├── services
│   └── shopify.server.js
│
├── extensions
│   └── announcement-banner
│
├── prisma
├── public
├── package.json
├── shopify.app.toml
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/sonu-bhardwaj/announcement-banner-app.git

cd announcement-banner-app
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
SHOPIFY_API_KEY=

SHOPIFY_API_SECRET=

SHOPIFY_APP_URL=https://your-render-url.onrender.com

SCOPES=write_products,write_metaobjects,write_metaobject_definitions

DATABASE_URL=postgresql://....

MONGODB_URI=mongodb+srv://....

NODE_ENV=development
```

---

## 4. Start Development

```bash
shopify app dev
```

or

```bash
npm run dev
```

---

# 🧩 Application Workflow

```text
Shopify Admin
       │
       ▼
Merchant Creates Announcement
       │
       ▼
Save Button
       │
       ▼
MongoDB
(Audit History)
       │
       ▼
Shopify Admin GraphQL API
       │
       ▼
Shop Metafield
(my_app.announcement)
       │
       ▼
Theme App Embed
       │
       ▼
Storefront Banner
```

---

# 🗄 MongoDB Schema

```javascript
{
  text: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

# 🛍 Shopify Metafield

Namespace

```text
my_app
```

Key

```text
announcement
```

Type

```text
single_line_text_field
```

---

# 🧪 Running the Application

### Start Development

```bash
shopify app dev
```

### Deploy to Shopify

```bash
shopify app deploy
```

### Deploy to Render

1. Connect GitHub Repository
2. Create PostgreSQL Database
3. Configure Environment Variables
4. Deploy Web Service
5. Update `SHOPIFY_APP_URL`
6. Release the latest Shopify App Version
7. Reinstall the app

---

# 🛒 Theme App Extension

After installing the app:

1. Open **Online Store → Themes**
2. Click **Customize**
3. Open **App Embeds**
4. Enable **Announcement Banner**
5. Save

The latest announcement will now appear across all storefront pages.

---

# 📸 Screenshots

## Shopify Admin

- Announcement Dashboard
- Save Announcement
- Announcement History

## Storefront

- Live Announcement Banner

---

# ✅ Features Demonstrated

- Shopify Embedded App
- MongoDB Integration
- PostgreSQL Session Storage
- Shopify OAuth Authentication
- Shopify Admin GraphQL API
- Theme App Extension
- Shop Metafield Synchronization
- Announcement History
- Render Deployment

---

# 🌐 Live Demo

### Render

https://announcement-banner-app-yi77.onrender.com

---

# 💻 GitHub Repository

https://github.com/sonu-bhardwaj/announcement-banner-app

---

# 👨‍💻 Author

**Sonu Bhardwaj**

GitHub

https://github.com/sonu-bhardwaj

LinkedIn

https://www.linkedin.com/in/sonubhardwaj

---

# 📄 License

This project was developed as part of a Shopify App Developer technical assignment.
