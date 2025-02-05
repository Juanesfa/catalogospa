import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.mode'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { product: IProduct; quantity: number }[] = [];

  addToCart(product: IProduct) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: IProduct) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        this.items = this.items.filter(item => item.product.id !== product.id);
      }
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}