// src/app/Views/not-found/not-found.component.ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  id: number = 0;
  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);

  constructor() {
    this.Aroute.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
  }

  gotoHome(): void {
    this.route.navigate(['']);
  }
}
