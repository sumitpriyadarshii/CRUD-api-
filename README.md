# Food Delivery Order Management API

A simple REST API built with Next.js App Router and JavaScript. Orders are stored in an in-memory JavaScript array.

## Run the project

```bash
npm install
npm run dev
```

The API runs at `http://localhost:3000`.

## Endpoints

- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get one order
- `POST /api/orders` - Create an order
- `PUT /api/orders/:id` - Update an order
- `DELETE /api/orders/:id` - Delete an order

The API starts with five sample orders. Data resets when the server restarts.

## Request body

Use this JSON body for `POST /api/orders` and `PUT /api/orders/:id`:

```json
{
  "customerName": "Alex Smith",
  "restaurant": "Pizza House",
  "item": "Large Pizza",
  "amount": 15.99,
  "status": "Pending"
}
```

A missing order returns a JSON error with HTTP status `404`.
