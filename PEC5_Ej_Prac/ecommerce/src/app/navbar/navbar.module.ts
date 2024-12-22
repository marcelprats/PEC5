import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessari per directives com *ngIf, *ngFor
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent // Declares el component Navbar
  ],
  imports: [
    CommonModule // Habilita *ngIf, *ngFor, etc.
  ],
  exports: [
    NavbarComponent // Fa el component disponible per altres mòduls
  ]
})
export class NavbarModule { }
