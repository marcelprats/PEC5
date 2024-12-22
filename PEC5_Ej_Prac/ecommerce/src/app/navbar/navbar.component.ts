import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  componentActual: string = 'inici';

  mostrarComponent(component: string): void {
    this.componentActual = component;
  }
}
