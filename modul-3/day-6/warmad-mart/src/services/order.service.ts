// import prisma from "../config/db";

export interface OrderItemInput {
  productId: string;
  quantity: number;
}

export interface CreateOrderInput {
  items: OrderItemInput[];
}

export interface UpdateOrderStatusInput {
  status: "PENDING" | "PAID" | "CANCELLED" | "COMPLETED";
}

/**
 * 1. Membuat Order Baru (Menggunakan Interactive Transaction)
 */
export async function createOrder(data: CreateOrderInput) {
  // TODO: Gunakan prisma.$transaction(async (tx) => { ... })
  // Step 1: Looping items, validasi keberadaan produk & kecukupan stok
  // Step 2: Potong stok produk menggunakan tx.product.update ({ stock: { decrement: ... } })
  // Step 3: Hitung totalAmount dan kumpulkan data order items
  // Step 4: Buat record order beserta relasi items-nya (tx.order.create)

  return null as any; // Temporary return agar controller tidak error
}

/**
 * 2. Memperbarui Status Order & Restock jika Dibatalkan
 */
export async function updateOrderStatus(
  orderId: string,
  status: UpdateOrderStatusInput["status"],
) {
  // TODO: Gunakan prisma.$transaction(async (tx) => { ... })
  // Step 1: Cari order berdasarkan orderId beserta items-nya
  // Step 2: Jika status diubah menjadi 'CANCELLED' dan status sebelumnya bukan 'CANCELLED',
  //        kembalikan stok produk (tx.product.update dengan increment)
  // Step 3: Update status order (tx.order.update)

  return null as any; // Temporary return agar controller tidak error
}

/**
 * 3. Mengambil Detail Order Berdasarkan ID
 */
export async function getOrderById(id: string) {
  // TODO: Gunakan prisma.order.findUnique()
  // Ambil detail order beserta items dan informasi dasar produk terkait (id, title, price)

  return null; // Temporary return agar controller tidak error
}

/**
 * 4. Mengambil Semua Daftar Order
 */
export async function getAllOrders() {
  // TODO: Gunakan prisma.order.findMany()
  // Urutkan berdasarkan createdAt secara descending dan include items-nya

  return []; // Temporary return agar controller tidak error
}
