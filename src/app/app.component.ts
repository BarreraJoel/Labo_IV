import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected edadUno: string = "";
  protected edadDos: string = "";
  protected promedio: number = 0;
  protected suma: number = 0;

  protected Calcular(): void {
    this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);
    this.promedio = this.suma / 2;
  }
  
  protected Limpiar(): void {
    this.edadUno = "";
    this.edadDos = "";
    this.promedio = 0;
    this.suma = 0;
  }

}