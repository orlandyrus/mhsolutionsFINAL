import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Ruta al servicio de autenticación

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Lógica de inicialización si es necesario
  }

  login(): void {
    // Verifica las credenciales para el usuario Orlando y OrlandoAdmin
    if (this.email === 'orlando@gmail.com' && this.password === 'orlando0024') {
      this.authService.login({ email: this.email, type: 'Orlando' });
      this.router.navigate(['/']); // Redirige al home o donde se desee
    } else if (this.email === 'orlandoAdmin@gmail.com' && this.password === 'orlando0024') {
      this.authService.login({ email: this.email, type: 'OrlandoAdmin' });
      this.router.navigate(['/']); // Redirige al home o donde se desee
    } else {
      this.errorMessage = 'Credenciales incorrectas'; // Muestra un mensaje de error si las credenciales no coinciden
    }
  }
}