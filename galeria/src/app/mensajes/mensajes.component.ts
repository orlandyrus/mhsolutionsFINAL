import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
})
export class MensajesComponent implements OnInit {
  messages: any[] = [];
  showModal: boolean = false;
  selectedMessage: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  // Cargar los mensajes desde el backend
  loadMessages(): void {
    this.contactService.getMessages().subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => {
        console.error('Error al cargar los mensajes:', error);
      }
    );
  }

  // Eliminar un mensaje
  deleteMessage(id: number): void {
    if (confirm('¿Estás seguro de que deseas borrar este mensaje?')) {
      this.contactService.deleteMessage(id).subscribe(
        () => {
          this.messages = this.messages.filter((message) => message.id !== id);
          alert('Mensaje eliminado con éxito.');
        },
        (error) => {
          console.error('Error al eliminar el mensaje:', error);
        }
      );
    }
  }

  // Ver los detalles de un mensaje
  viewDetails(message: any): void {
    this.selectedMessage = message;
    this.showModal = true;
  }

  // Cerrar el modal de detalles
  closeModal(): void {
    this.showModal = false;
    this.selectedMessage = null;
  }
}