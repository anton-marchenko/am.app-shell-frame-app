import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-route',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-route.component.html',
  styleUrls: ['./main-route.component.scss']
})
export class MainRouteComponent {
  nav(path: string) {
    window.parent.postMessage({
      type: 'updatePath',
      path
    }, '*');
  }
}
