# 📢 Shopify Announcement Banner App

A Shopify app built using the **MERN Stack** that allows merchants to create announcement banners from the Shopify Admin dashboard. The announcement is stored in **MongoDB**, synchronized to a **Shop Metafield** using the Shopify Admin GraphQL API, and displayed on every storefront page using a **Theme App Embed**.

---

## 🚀 Features

- ✅ Shopify Embedded Admin App
- ✅ Create announcement banners from Shopify Admin
- ✅ Save announcements to MongoDB with timestamps (Audit History)
- ✅ Sync announcements to Shopify Shop Metafields
- ✅ Display announcements on every storefront page using Theme App Embed
- ✅ Announcement History dashboard
- ✅ Automatically updates the storefront banner after saving

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Shopify App Bridge / Shopify React Router

### Backend
- Node.js
- Express
- Shopify Admin GraphQL API

### Database
- MongoDB (Mongoose)

### Session Storage
- Prisma
- SQLite (Shopify Session Storage)

### Shopify
- Theme App Extension (App Embed)
- Shop Metafields

---

# 📂 Project Structure

```
announcement-banner-app/
│
├── app/
│   ├── components/
│   ├── lib/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── shopify.server.js
│
├── extensions/
│   └── announcement-banner/
│
├── prisma/
│
├── public/
│
├── package.json
├── shopify.app.toml
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/announcement-banner-app.git

cd announcement-banner-app
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
SHOPIFY_API_KEY=YOUR_API_KEY
SHOPIFY_API_SECRET=YOUR_API_SECRET

SHOPIFY_APP_URL=https://your-app-url.com

SCOPES=write_metaobject_definitions,write_metaobjects,write_products

MONGODB_URI=your_mongodb_connection_string
```

---

## 4. Run Database

If using MongoDB Atlas, update the connection string in `.env`.

If using local MongoDB:

```
mongodb://localhost:27017/announcement_app
```

---

## 5. Start Development Server

```bash
shopify app dev
```

or

```bash
npm run dev
```

---

# 🧩 Application Workflow

```
Shopify Admin
       │
       ▼
Enter Announcement
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

```
my_app
```

Key

```
announcement
```

Type

```
single_line_text_field
```

---

# 📸 Screenshots

## Shopify Admin Dashboard

- Create Announcement
- Save Announcement
- View Announcement History

## Storefront

Displays announcement banner across every page using Theme App Embed.

---

# ✨ Features Demonstrated

- Save Announcement
- MongoDB Audit History
- Timestamp Tracking
- Shopify Shop Metafield Sync
- Theme App Embed
- Live Storefront Banner

---

# 📦 Deployment

The application can be deployed using:

- Render
- Fly.io
- Heroku
- Linode

After deployment:

1. Update `SHOPIFY_APP_URL`
2. Update Shopify App URLs
3. Deploy Theme Extension

```bash
shopify app deploy
```

---

# 🧪 Demo

1. Open Shopify Admin App
2. Enter Announcement
3. Click Save
4. Verify MongoDB Record
5. Verify Shop Metafield
6. Open Storefront
7. Announcement appears instantly

---

# 👨‍💻 Author

**Sonu Bhardwaj**

GitHub:
https://github.com/<YOUR_GITHUB_USERNAME>

LinkedIn:
https://www.linkedin.com/in/<YOUR_LINKEDIN_PROFILE>

---

# 📄 License

This project was developed as part of a Shopify App Developer technical assignment.