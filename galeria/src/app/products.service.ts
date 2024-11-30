import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:8080/products'; // Cambia si es necesario

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar un producto
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // Actualizar un producto
  updateProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/${product.productId}`; // URL con el ID del producto
    return this.http.put<any>(url, product);
  }

  // Eliminar un producto
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
}