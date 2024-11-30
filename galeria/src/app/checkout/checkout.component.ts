import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  // Productos obtenidos desde el CarritoService
  products: Product[] = [];
  total: number = 0; // Total de la compra

  // Variables de control
  condicionCumplida: boolean = false;
  selectedPaymentMethod: string | null = null;
  showCardInfo: boolean = false;

  // Datos de formulario de tarjeta
  cardNumber: string = '';
  expiryMonth: string = '';
  expiryYear: string = '';
  cvv: string = '';

  // Opciones para meses y años
  months: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  years: string[] = Array.from({ length: 10 }, (_, i) =>
    (new Date().getFullYear() + i).toString()
  );

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit(): void {
    // Obtiene los productos del carrito de compras desde el servicio
    this.products = this.carritoService.getCartItems();
    // Calcula el total usando el método del servicio
    this.total = this.carritoService.getTotal();
  }

  confirmarCompra(): void {
    // Aquí podrías añadir lógica para procesar el pedido, como enviarlo a un servidor.
    console.log('Compra confirmada', this.products);
    this.router.navigate(['/confirmacion']);
  }

  getTotal(): number {
    // Calcula el total de la compra
    return this.total;
  }

  onPaymentMethodChange(paymentMethod: string, requiresCardInfo: boolean): void {
    this.selectedPaymentMethod = paymentMethod;
    this.showCardInfo = requiresCardInfo;
    this.condicionCumplida = true; // Habilitar el botón si se selecciona una opción
  }

  irAConfirmacion(): void {
    if (this.condicionCumplida) {
      this.router.navigate(['/confirmacion']);
    } else {
      alert('Por favor, selecciona una opción antes de continuar.');
    }
  }
}