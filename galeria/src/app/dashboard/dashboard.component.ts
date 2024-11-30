import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = []; // Lista de usuarios
  showForm: boolean = false; // Mostrar/ocultar formulario
  editing: boolean = false; // Indica si estamos editando
  selectedUser: any = {}; // Usuario seleccionado para editar o agregar

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Cargar usuarios desde la API
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data; // Asigna la lista de usuarios
      },
      (error) => {
        console.error('Error al cargar usuarios', error);
      }
    );
  }

  // Mostrar formulario para agregar usuario
  addUser(): void {
    this.selectedUser = {}; // Limpia el usuario seleccionado
    this.editing = false;
    this.showForm = true;
  }

  // Editar un usuario
  editUser(user: any): void {
    this.selectedUser = { ...user }; // Copia los datos del usuario
    this.editing = true;
    this.showForm = true;
  }

  // Guardar (Agregar o Editar) un usuario
  saveUser(): void {
    if (this.editing) {
      // Editar usuario
      this.userService.updateUser(this.selectedUser).subscribe(
        () => {
          this.loadUsers(); // Recarga la lista de usuarios
          this.cancel(); // Oculta el formulario
        },
        (error) => {
          console.error('Error al actualizar usuario', error);
        }
      );
    } else {
      // Agregar usuario
      this.userService.addUser(this.selectedUser).subscribe(
        () => {
          this.loadUsers(); // Recarga la lista de usuarios
          this.cancel(); // Oculta el formulario
        },
        (error) => {
          console.error('Error al agregar usuario', error);
        }
      );
    }
  }

  // Eliminar un usuario
  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.loadUsers(); // Recarga la lista de usuarios
      },
      (error) => {
        console.error('Error al eliminar usuario', error);
      }
    );
  }

  // Cancelar operación y ocultar formulario
  cancel(): void {
    this.showForm = false;
    this.selectedUser = {}; // Limpia el usuario seleccionado
  }
}