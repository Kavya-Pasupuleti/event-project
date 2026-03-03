# Relay Race Backend

Node.js + Express + MongoDB backend for the Debug Relay Race.

## Prerequisites
- **Node.js**: Installed on your system.
- **MongoDB**: Installed locally or a remote URI (e.g., MongoDB Atlas).

## Folder Structure
```
backend/
├── models/
│   └── Participant.js   # Mongoose Schema
├── .env                 # Environment Variables
├── .env.example         # Example Env Template
├── package.json         # Dependencies
├── server.js            # Main application logic
└── README.md            # Documentation
```

## Setup & Run

1. **Open a terminal** and navigate to the `backend` folder:
   ```powershell
   cd backend
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and update the values:
   - `PORT`: Server port (default: 5000)
   - `MONGODB_URI`: Your MongoDB connection string
   - `FRONTEND_URL`: The URL of your frontend application (for CORS)

4. **Start the server**:
   ```powershell
   npm start
   ```
   The backend will be available at [http://localhost:5000](http://localhost:5000) (or your configured port).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Save registration details (name, email, phone, college) |
| PUT | `/complete/:email` | Save `totalTime` when Level 4 is completed |
| GET | `/admin/participants` | Get all participants sorted by fastest time |
| PUT | `/admin/mark-winner/:id` | Mark a participant as the winner |

## Security Note
This backend uses CORS to allow requests only from the `FRONTEND_URL` defined in your `.env` file.
