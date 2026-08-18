// keranjang belanja & transaksi

class Product {
  constructor(
    public readonly name: string,
    public readonly price: number,
  ) {
    if (price < 0) {
      throw new Error("Price cannot be negative.");
    }
  }
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface TransactionSummary {
  items: CartItem[];
  total: number;
  checkoutAt: Date;
}

class Transaction {
  private products: CartItem[] = [];

  /**
   * Adds product and quantity to the transaction cart.
   */
  public addToCart(product: Product, qty: number): void {
    if (qty <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingProduct = this.products.find(
      (item) => item.product.name === product.name,
    );

    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.products.push({ product, qty });
    }
  }

  /**
   * Returns current total cost of all products in cart.
   */
  public showTotal(): number {
    return this.products.reduce(
      (total, item) => total + item.product.price * item.qty,
      0,
    );
  }

  /**
   * Finalizes current transaction and resets cart.
   */
  public checkout(): TransactionSummary {
    const summary: TransactionSummary = {
      items: [...this.products],
      total: this.showTotal(),
      checkoutAt: new Date(),
    };

    // Reset cart state after checkout
    this.products = [];

    return summary;
  }
}

const laptop = new Product("Laptop Gaming", 15000000);
const mouse = new Product("Wireless Mouse", 350000);

const cart = new Transaction();
cart.addToCart(laptop, 1);
cart.addToCart(mouse, 2);

console.log("Current Total:", cart.showTotal()); // Output: 15700000

const receipt = cart.checkout();
console.log("Checkout Receipt:", JSON.stringify(receipt, null, 2));
