import { NextResponse } from 'next/server';
import { getOrderById, updateOrder, removeOrder } from '../../../../lib/orders';

function getId(params) {
  const id = Number(params.id);
  return Number.isInteger(id) ? id : null;
}

export async function GET(request, { params }) {
  const id = getId(params);
  const order = id === null ? null : getOrderById(id);

  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  return NextResponse.json(order);
}

export async function PUT(request, { params }) {
  const id = getId(params);

  if (id === null || !getOrderById(id)) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  const orderData = await request.json();
  const updatedOrder = updateOrder(id, orderData);

  return NextResponse.json(updatedOrder);
}

export async function DELETE(request, { params }) {
  const id = getId(params);

  if (id === null || !removeOrder(id)) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  return new NextResponse(null, { status: 204 });
}
