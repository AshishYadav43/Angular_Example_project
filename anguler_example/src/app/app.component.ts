import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    isSidenavOpen = true;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) {}

  get showLayout(): boolean {
    return this.router.url !== '/login';
  }

  // toggleSidebar(): void {
  //   this.sidenav.toggle();
  // }
    toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
