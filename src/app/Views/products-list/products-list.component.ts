import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';
import { IProduct } from '../../Models/product.mode';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  searchTerm: string = '';
  showSearch: boolean = false;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }
}