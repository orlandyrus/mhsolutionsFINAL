import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent {
  numeroConfirmacion = 'ABC123456';
  productosSeleccionados = [
    { nombre: 'Producto 1', precio: 17.99, cantidad: 1 },
    { nombre: 'Producto 2', precio: 17.99, cantidad: 1 },
    // Otros productos
  ];

  getTotal() {
    return this.productosSeleccionados.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }
}
