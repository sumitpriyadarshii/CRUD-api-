const initialOrders = [
  {
    id: 1,
    customerName: 'Aarav Sharma',
    restaurant: 'Spice Garden',
    item: 'Paneer Biryani',
    amount: 14.99,
    status: 'Preparing'
  },
  {
    id: 2,
    customerName: 'Mia Johnson',
    restaurant: 'Burger Corner',
    item: 'Classic Cheeseburger',
    amount: 11.5,
    status: 'Out for delivery'
  },
  {
    id: 3,
    customerName: 'Noah Williams',
    restaurant: 'Green Bowl',
    item: 'Chicken Caesar Salad',
    amount: 12.75,
    status: 'Delivered'
  },
  {
    id: 4,
    customerName: 'Emma Brown',
    restaurant: 'Pasta Place',
    item: 'Margherita Pasta',
    amount: 13.25,
    status: 'Pending'
  },
  {
    id: 5,
    customerName: 'Liam Davis',
    restaurant: 'Sushi House',
    item: 'Salmon Sushi Roll',
    amount: 18,
    status: 'Delivered'
  }
];

const orderStore = globalThis.__foodDeliveryOrderStore || {
  orders: initialOrders
};

globalThis.__foodDeliveryOrderStore = orderStore;

function getOrders() {
  return orderStore.orders;
}

function getOrderById(id) {
  return orderStore.orders.find((order) => order.id === id);
}

function addOrder(order) {
  orderStore.orders.push(order);
  return order;
}

function updateOrder(id, orderData) {
  const orderIndex = orderStore.orders.findIndex((order) => order.id === id);

  if (orderIndex === -1) {
    return null;
  }

  orderStore.orders[orderIndex] = { ...orderStore.orders[orderIndex], ...orderData, id };
  return orderStore.orders[orderIndex];
}

function removeOrder(id) {
  const orderIndex = orderStore.orders.findIndex((order) => order.id === id);

  if (orderIndex === -1) {
    return false;
  }

  orderStore.orders.splice(orderIndex, 1);
  return true;
}

function getNextId() {
  return orderStore.orders.length === 0 ? 1 : Math.max(...orderStore.orders.map((order) => order.id)) + 1;
}

module.exports = {
  getOrders,
  getOrderById,
  addOrder,
  updateOrder,
  removeOrder,
  getNextId
};
