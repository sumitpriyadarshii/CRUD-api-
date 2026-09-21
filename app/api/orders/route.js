import { NextResponse } from 'next/server';
import {
  addOrder,
  getNextId,
  getOrders
} from '../../../lib/orders';

const requiredFields = ['customerName', 'restaurant', 'item', 'amount', 'status'];

function validateOrder(order) {
  const missingFields = requiredFields.filter((field) => order[field] === undefined);

  if (missingFields.length > 0) {
    return `Missing required fields: ${missingFields.join(', ')}`;
  }

  if (typeof order.customerName !== 'string' || typeof order.restaurant !== 'string' || typeof order.item !== 'string' || typeof order.status !== 'string') {
    return 'customerName, restaurant, item, and status must be strings';
  }

  if (typeof order.amount !== 'number' || order.amount < 0) {
    return 'amount must be a non-negative number';
  }

  return null;
}

export async function GET() {
  return NextResponse.json(getOrders());
}

export async function POST(request) {
  const orderData = await request.json();
  const validationError = validateOrder(orderData);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const order = addOrder({
    id: getNextId(),
    customerName: orderData.customerName,
    restaurant: orderData.restaurant,
    item: orderData.item,
    amount: orderData.amount,
    status: orderData.status
  });

  return NextResponse.json(order, { status: 201 });
}
