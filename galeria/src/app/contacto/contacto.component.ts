import { Component } from '@angular/core';
import { ContactService } from '../contact.service';  // Correcta la ruta e importación del servicio.

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contactData = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',  // Asegúrate de que coincida con el campo "mensaje"
  };

  constructor(private contactService: ContactService) {}  // Usamos el nombre correcto del servicio

  submitContactForm(): void {
    if (!this.contactData.nombre || !this.contactData.email) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    // Llamar al servicio para enviar los datos al backend
    this.contactService.sendContactMessage(this.contactData).subscribe(
      (response) => {
        console.log('Mensaje enviado con éxito:', response);
        alert('¡Gracias por contactarnos! Hemos recibido tu información.');
        this.resetForm(); // Resetear el formulario tras el envío
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
      }
    );
  }

  // Función para resetear el formulario
  resetForm(): void {
    this.contactData = {
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      empresa: '',
      mensaje: '',
    };
  }
}