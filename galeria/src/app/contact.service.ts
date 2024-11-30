import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/messages';

  constructor(private http: HttpClient) {}

  // Método para enviar un mensaje
  sendContactMessage(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }

  // Método para obtener todos los mensajes
  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para eliminar un mensaje por ID
  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}