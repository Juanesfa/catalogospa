import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonCardContent, IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Asegura que el componente sea independiente
  imports: [RouterOutlet, IonicModule, IonHeader, IonTitle, IonToolbar, CommonModule, IonContent, ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corregido aquí para que use estilos apropiados
})
export class AppComponent {
  title = 'Catálogo de Productos de SPA'; // Título actualizado para coincidir con el HTML
}
