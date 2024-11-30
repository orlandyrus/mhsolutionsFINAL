import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';  // Asegúrate de tener el servicio de autenticación configurado
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any = null;  // Guardará los datos del usuario autenticado
  isLoggedIn: boolean = false;  // Controla si el usuario está autenticado

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Verifica si el usuario está autenticado
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
      this.isLoggedIn = !!user;  // Si hay un usuario, está logueado
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/log']);  // Redirige a la página de inicio de sesión
  }
}