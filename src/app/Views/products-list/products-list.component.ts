// src/app/Views/products-list/products-list.component.ts
import { Component, inject } from '@angular/core';
import { IProduct } from '../../Models/product.=mode';
import { ProductService } from '../../Services/product.service';
import { NgFor } from '@angular/common';
import { ProductItemComponent } from '../../Components/product-item/product-item.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductItemComponent, NgFor],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  productService = inject(ProductService);

  listaProductos: IProduct[] = this.productService.getProducts();
}