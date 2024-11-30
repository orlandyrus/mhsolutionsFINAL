import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aviso-privacidad',
  templateUrl: './aviso-privacidad.component.html',
  styleUrl: './aviso-privacidad.component.css'
})
export class AvisoPrivacidadComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
