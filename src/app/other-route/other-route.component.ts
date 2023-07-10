import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-other-route',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './other-route.component.html',
  styleUrls: ['./other-route.component.scss']
})
export class OtherRouteComponent {
  nav(path: string) {
    window.parent.postMessage({
      type: 'updatePath',
      path
    }, '*');
  }
}
