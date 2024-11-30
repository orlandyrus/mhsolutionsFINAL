import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // Cambia si es necesario

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Llamada GET
  }

  // Método para agregar un usuario
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user); // Llamada POST
  }

  // Método para actualizar un usuario
  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`; // URL con el ID del usuario
    return this.http.put<any>(url, user); // Llamada PUT
  }

  // Método para eliminar un usuario
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`); // Llamada DELETE
  }
}