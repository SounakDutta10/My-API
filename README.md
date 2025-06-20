# 📦 Custom API Server with Node.js, Express & MongoDB

A simple RESTful API server built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. It supports full **CRUD** operations: Create, Read, Update, and Delete items stored in a MongoDB database.

---

## 🚀 Features

- ✅ REST API with CRUD operations
- ✅ MongoDB integration using Mongoose
- ✅ Environment variable support via `.env`
- ✅ Clean and modular project structure
- ✅ CORS-enabled for frontend interaction

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Tools/Libraries**: dotenv, cors, nodemon (optional)

---

## 📁 Project Structure

```
my-api-server/
├── models/            # Mongoose data schemas
│   └── Item.js
├── routes/            # API route definitions
│   └── itemRoutes.js
├── server.js          # Main server entry point
├── db.js              # MongoDB connection logic
├── .env               # Environment variables (Mongo URI)
├── package.json       # Project metadata and dependencies
└── README.md          # Documentation
```

---

## 🌐 API Endpoints

### 🔹 `GET /api/items`
- **Purpose**: Retrieve all items
- **Response**:
```json
[
  {
    "_id": "abc123",
    "name": "Sample",
    "description": "A test item",
    "createdAt": "2025-06-20T10:00:00Z"
  }
]
```

---

### 🔹 `POST /api/items`
- **Purpose**: Create a new item
- **Request Body**:
```json
{
  "name": "Notebook",
  "description": "A ruled notebook"
}
```
- **Response**: `201 Created`

---

### 🔹 `PUT /api/items/:id`
- **Purpose**: Update an item by ID
- **Request Body**:
```json
{
  "name": "Notebook (Updated)",
  "description": "A ruled notebook with hard cover"
}
```
- **Response**: `200 OK`

---

### 🔹 `DELETE /api/items/:id`
- **Purpose**: Delete an item by ID
- **Response**:
```json
{
  "message": "Deleted successfully"
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/my-api-server.git
cd my-api-server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
In the root directory, create a `.env` file and add your MongoDB URI:
```
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the Server
```bash
node server.js
```
The server will start on: `http://localhost:5000`

---

## 🧪 API Testing Tools

You can test your API using tools like:
- [Postman](https://postman.com)
- [curl](https://curl.se)
- Thunder Client (VS Code extension)

### Example:
```bash
curl http://localhost:5000/api/items
```

---

## 📌 Sample Request Format

### POST / PUT Request Body:
```json
{
  "name": "Example Item",
  "description": "This is a test item"
}
```

---

## ✍️ Author

Built by [Sounak Dutta]  
GitHub: [@SounakDutta10](https://github.com/SounakDutta10)

---

## 📜 License

This project is licensed under the MIT License.
