// src/app/Components/product-item/product-item.component.ts
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IProduct } from '../../Models/product.mode'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item', 
  standalone: true,
  imports: [IonicModule], // Importa IonicModule para usar los componentes de Ionic
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'], // Cambia a .scss si usas SCSS
})
export class ProductItemComponent {
  @Input() item!: IProduct; // Tipado del producto con IProduct

  constructor(private router: Router) {}

  navigateToID() {
    this.router.navigate(['products', this.item.id]); // Navega al producto por ID
  }
}
