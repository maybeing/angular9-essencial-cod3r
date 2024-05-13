import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
    <app-header></app-header>
  `,
  styles: [],
})
export class AppComponent {
  title = 'frontend';
}
