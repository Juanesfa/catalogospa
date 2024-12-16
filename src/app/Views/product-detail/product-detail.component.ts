// src/app/Views/product-detail/product-detail.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/product.=mode';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productSelected!: IProduct;

  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  constructor() {
    this.Aroute.params.subscribe(params => {
      const id = params['id'];
      const product = this.productService.getProductById(Number(id));

      if (!product) {
        this.route.navigate(['not-found', id]);
      } else {
        this.productSelected = product;
      }
    });
  }

  gotoHome(): void {
    this.route.navigate(['']);
  }
}
