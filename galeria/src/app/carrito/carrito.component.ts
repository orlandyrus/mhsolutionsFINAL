import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  products: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Inicializa los productos obteniéndolos desde el servicio
    this.products = this.carritoService.getCartItems();
  }

  incrementQuantity(product: any): void {
    this.carritoService.incrementQuantity(product);
  }

  decrementQuantity(product: any): void {
    this.carritoService.decrementQuantity(product);
  }

  removeProduct(index: number): void {
    this.carritoService.removeProduct(index);
  }

  getTotal(): number {
    return this.carritoService.getTotal();
  }
}