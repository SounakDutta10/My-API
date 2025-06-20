# Custom API Server

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv, cors

## API Endpoints
- GET `/api/items` - Get all items
- POST `/api/items` - Add new item
- PUT `/api/items/:id` - Update item
- DELETE `/api/items/:id` - Delete item

## How to Run
1. Create `.env` file and add MongoDB URI.
2. Install dependencies:
   ```
   npm install
   ```
3. Start server:
   ```
   node server.js
   ```

## Sample Request Body for POST/PUT
```json
{
  "name": "Sample Item",
  "description": "This is a test item"
}
```
