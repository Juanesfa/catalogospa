import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { IProduct } from '../../Models/product.mode'; // Asegúrate de que la ruta sea correcta
import { ProductService } from '../../Services/product.service'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, IonicModule], // Asegúrate de incluir ambos módulos aquí
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct; // Usamos el operador de aserción no nula

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router // Agregamos el router para la navegación
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id'); // productId puede ser string | null
    if (productId) {
      const id = Number(productId); // Convertimos a número
      const foundProduct = this.productService.getProductById(id); // Buscamos el producto

      if (foundProduct) {
        this.product = foundProduct; // Asignamos el producto encontrado
      } else {
        // Manejo de caso en que el producto no se encuentra
        console.error('Producto no encontrado');
        this.router.navigate(['/not-found']); // Redirigir a una página de no encontrado
      }
    } else {
      console.error('ID de producto no válido');
      this.router.navigate(['/not-found']); // Redirigir a una página de no encontrado
    }
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
    alert(`${product.name} ha sido agregado al carrito.`);
  }

  gotoHome() {
    this.router.navigate(['/']); // Navega a la página principal
  }
}