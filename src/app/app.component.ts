import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly router: Router
  ){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.parent.postMessage({
          type: 'updatePath',
          path: event.urlAfterRedirects
        }, '*');
      }
    });
  }

  goToApp(alias: string) {
    window.parent.postMessage({
      type: 'goToApp',
      alias
    }, '*');
  }
}
