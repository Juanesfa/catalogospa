import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { IProduct } from '../../Models/product.mode'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], // Asegúrate de incluir ambos módulos aquí
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: { product: IProduct; quantity: number }[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeItem(product: IProduct) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
  }
}