import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

type SectionKey = 'invoicing' | 'accountPro';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  sections: Record<SectionKey, boolean> = {
    invoicing: false,
    accountPro: false,
  };

  toggleSection(section: SectionKey) {
    this.sections[section] = !this.sections[section];
  }
}
