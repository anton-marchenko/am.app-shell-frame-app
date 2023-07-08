import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-shell-mock-app-1';

  goToApp(alias: string) {
    window.parent.postMessage({
      type: 'goToApp',
      alias
    }, '*');
  }
}
