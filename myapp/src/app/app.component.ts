// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importa RouterModule
  template: `<router-outlet></router-outlet>`, // Usa <router-outlet> para renderizar las vistas
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}