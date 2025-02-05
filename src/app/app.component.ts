import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ProductService } from './Services/product.service'; // Asegúrate de importar el servicio de productos
import { CartService } from './Services/cart.service'; // Asegúrate de importar el servicio del carrito
import { IProduct } from './Models/product.mode'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IonicModule, FormsModule, CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Catálogo de Productos de SPA';
  products: IProduct[] = []; // Asegúrate de declarar la propiedad
  filteredProducts: IProduct[] = []; // Productos filtrados
  searchTerm: string = '';
  showSearch: boolean = false;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts(); // Obtén la lista de productos
    this.filteredProducts = this.products; // Inicialmente, todos los productos son visibles
  }

  toggleSearch() {
    this.showSearch = !this.showSearch; // Alternar la visibilidad de la barra de búsqueda
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product); // Llama al método del servicio del carrito
  }
}