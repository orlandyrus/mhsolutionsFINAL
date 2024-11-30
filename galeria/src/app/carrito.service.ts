import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private cartItems: any[] = [];

  getCartItems(): any[] {
    return this.cartItems;
  }
  
  addToCart(product: any): void {
    const existingProduct = this.cartItems.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cartItems.push(product);
    }
  }

  incrementQuantity(product: any): void {
    const item = this.cartItems.find((item) => item.name === product.name);
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(product: any): void {
    const item = this.cartItems.find((item) => item.name === product.name);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  removeProduct(index: number): void {
    this.cartItems.splice(index, 1);
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  }
}