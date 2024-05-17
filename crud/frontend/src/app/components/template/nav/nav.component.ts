import { Component, OnInit } from '@angular/core';

type SectionKey = 'invoicing' | 'accountPro';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  sections: Record<SectionKey, boolean> = {
    invoicing: false,
    accountPro: false,
  };

  toggleSection(section: SectionKey) {
    this.sections[section] = !this.sections[section];
  }

}
