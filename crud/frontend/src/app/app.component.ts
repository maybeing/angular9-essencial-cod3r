import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatChipsModule } from '@angular/material/chips';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatChipsModule, FooterComponent],
  template: `
    <app-header></app-header>
    <h1>Welcome to {{course}}!</h1>
    <router-outlet />
    <div>
    <mat-chip-listbox aria-label="Fish selection" class="p-2">
      <mat-chip-option>Opção 1</mat-chip-option>
      <mat-chip-option>Opção 2</mat-chip-option>
      <mat-chip-option>Opção 3</mat-chip-option>
      <mat-chip-option>Opção 4</mat-chip-option>
    </mat-chip-listbox>
    </div>
    <app-footer></app-footer>
  `,
  styles: ['body { padding: 20px; }'],
})
export class AppComponent {
  course = 'Angular course';
}
