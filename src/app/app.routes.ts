import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Views/products-list/products-list.component').then(m => m.ProductsListComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./Views/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    },
    {
        path: 'not-found/:id',
        loadComponent: () => import('./Views/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: 'cart', // Nueva ruta para el carrito
        loadComponent: () => import('./Components/cart/cart.component').then(m => m.CartComponent) // Asegúrate de que esta ruta sea correcta
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];