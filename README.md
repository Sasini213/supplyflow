# ⚡ SupplyFlow — Supply Chain Dashboard

A full-stack supply chain management dashboard built with React and Flask.

## 🚀 Live Demo
- **Frontend:** https://supplyflow-red.vercel.app/
- **Backend API:** https://supplyflow-backend.onrender.com

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18, Tailwind CSS, Recharts |
| Backend | Python, Flask, Flask-CORS |
| Deployment | Vercel (Frontend), Render (Backend) |

## 📊 Features
- KPI Dashboard — Total Orders, Revenue, Pending, Low Stock
- Monthly Orders Trend (Line Chart)
- Supplier Performance (Bar Chart)
- Orders Management with Search & Status Badges
- Inventory Tracking with Low Stock Alerts

## 🏃 Run Locally

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```