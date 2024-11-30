import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css'],
})
export class DashboardProductsComponent implements OnInit {
  products: any[] = []; // Lista de productos
  showForm: boolean = false; // Mostrar/ocultar formulario
  editing: boolean = false; // Indica si estamos editando
  selectedProduct: any = {}; // Producto seleccionado para editar o agregar

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Cargar productos desde la API
  loadProducts(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data; // Asigna la lista de productos
      },
      (error) => {
        console.error('Error al cargar productos', error);
      }
    );
  }

  // Mostrar formulario para agregar producto
  addProduct(): void {
    this.selectedProduct = {}; // Limpia el producto seleccionado
    this.editing = false;
    this.showForm = true;
  }

  // Editar un producto
  editProduct(product: any): void {
    this.selectedProduct = { ...product }; // Copia los datos del producto
    this.editing = true;
    this.showForm = true;
  }

  // Guardar (Agregar o Editar) un producto
  saveProduct(): void {
    if (this.editing) {
      // Editar producto
      this.productsService.updateProduct(this.selectedProduct).subscribe(
        () => {
          this.loadProducts(); // Recarga la lista de productos
          this.cancel(); // Oculta el formulario
        },
        (error) => {
          console.error('Error al actualizar producto', error);
        }
      );
    } else {
      // Agregar producto
      this.productsService.addProduct(this.selectedProduct).subscribe(
        () => {
          this.loadProducts(); // Recarga la lista de productos
          this.cancel(); // Oculta el formulario
        },
        (error) => {
          console.error('Error al agregar producto', error);
        }
      );
    }
  }

  // Eliminar un producto
  deleteProduct(productId: number): void {
    this.productsService.deleteProduct(productId).subscribe(
      () => {
        this.loadProducts(); // Recarga la lista de productos
      },
      (error) => {
        console.error('Error al eliminar producto', error);
      }
    );
  }

  // Cancelar operación y ocultar formulario
  cancel(): void {
    this.showForm = false;
    this.selectedProduct = {}; // Limpia el producto seleccionado
  }
}