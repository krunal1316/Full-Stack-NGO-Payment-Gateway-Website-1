 🌍 NGO Donation Website (MERN + Stripe + Dockerized)

A full-stack NGO donation platform built using the MERN stack (MongoDB, Express, React, Node.js) with secure Stripe payment integration. The entire application is containerized using Docker and deployable to AWS EC2.

---

## 🚀 Features

- 💳 Secure payments via Stripe Checkout
- 📦 Dockerized frontend & backend
- 🌐 Deployed on AWS EC2
- 🧾 Donations stored in MongoDB
- ✅ Clean and modern UI
- 📊 Dynamic donation form with custom amount input

---

## 🛠️ Tech Stack

| Frontend  | Backend   | Database | Deployment | Other Tools       |
|-----------|-----------|----------|------------|-------------------|
| React.js  | Node.js   | MongoDB  | AWS EC2    | Docker, Stripe API |

---

## 📁 Project Structure

Ngo_Payment_gateway-using-react/
├── client/ # React frontend
├── server/ # Node.js backend with Express
├── docker-compose.yml
├── .env # Environment variables (not committed)
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/krunal1316/Ngo_Payment_gateway-using-react.git
cd Ngo_Payment_gateway-using-react
2. Create .env file in root (for Docker Compose)
Or pass environment variables directly while running Docker

env
Copy code
# Used in docker-compose.yml if applicable
STRIPE_SECRET_KEY=your_stripe_secret_key
MONGODB_URI=mongodb://mongo:27017/ngo-donations
FRONTEND_URL=http://localhost:3000
3. Run Locally with Docker
bash
Copy code
docker-compose up --build
Then open: http://localhost:3000

🐳 Docker Images
You can also pull prebuilt images from Docker Hub:

bash
Copy code
# Backend
docker pull krunal1316/ngo_donation_website_usingreact:backend

# Frontend
docker pull krunal1316/ngo_donation_website_usingreact:frontend
🌐 Live Deployment (on AWS EC2)
EC2 Ubuntu instance

Docker installed & configured

Pulled backend & frontend images from Docker Hub

Hosted MongoDB as a container

To access:

cpp
Copy code
http://<your-ec2-public-ip>
💳 Test Stripe Card for Checkout
yaml
Copy code
Card: 4242 4242 4242 4242
Date: Any future date
CVV: 123
ZIP: 12345

🙌 Author
Krunal Kamble
🔗 GitHub


