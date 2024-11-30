import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrl: './terminos-condiciones.component.css'
})
export class TerminosCondicionesComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
