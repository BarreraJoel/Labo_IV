import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../classes/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[] = [];
  nombre?: string;
  clave?: string;

  ngOnInit(): void {
    let aux = localStorage.getItem('usuarios');
    this.usuarios = aux ? JSON.parse(aux) : [];
  }

  // Ejercicio 04
  loguear() {
    if (this.nombre && this.clave) {
      console.log(`Usuario ingresado: ${this.nombre}, ${this.clave}`);

      if (this.usuarios.length > 0) {
        for (const usuario of this.usuarios) {
          if (usuario.nombre == this.nombre && usuario.clave == this.clave) {
            console.log("El usuario existe, login exitoso!");
            return;
          }
        };
      }
      console.log('El usuario ingresado no coincide con algun registro');
    }
    else {
      console.log("Debe ingresar el nombre y la clave");
    }
  }

  registrar() {
    if (this.nombre && this.clave) {
      const usuario = new Usuario(this.nombre, this.clave);

      if (this.usuarios.length > 0) {
        for (const elemento of this.usuarios) {
          if (elemento.nombre === usuario.nombre) {
            console.log('El usuario ingresado ya se encuentra registrado');
            return;
          }
        }
      }
      this.usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      console.log("Registro exitoso!");
      console.log(localStorage.getItem('usuarios'));
    }
    else {
      console.log("Debe ingresar el nombre y la clave");
    }
  }

}