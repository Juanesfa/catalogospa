// src/app/Services/cart.service.ts
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.mode'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: IProduct; quantity: number }[] = [];

  constructor() {
    this.loadCart();
  }

  addProduct(product: IProduct): void {
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Incrementa la cantidad si ya existe
    } else {
      this.cart.push({ product, quantity: 1 }); // Inicializa la cantidad
    }
    this.saveCart();
  }

  removeProduct(productId: number): void { // Asegúrate de que el tipo sea el correcto
    this.cart = this.cart.filter(item => item.product.id !== productId); // Cambia item.id a item.product.id
    this.saveCart();
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  getCart(): { product: IProduct; quantity: number }[] {
    return this.cart;
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }
}