import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../Models/product.=mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  route = inject(Router);
  @Input() item!: IProduct;

  navigateToID() {
    this.route.navigate(['products', this.item.id]);
  }
}
