import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'anguler_example';

   constructor(private router: Router) {}

  get showLayout(): boolean {
    // Adjust the condition based on your actual login route
    return this.router.url !== '/login';
  }
}
