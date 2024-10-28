import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { OperacionServiceService } from '../../services/operacion-service.service';

@Component({
  selector: 'app-operaciones-component',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './operaciones-component.component.html',
  styleUrl: './operaciones-component.component.scss'
})
export class OperacionesComponentComponent {
  numero1=0;
  numero2=0;
  resultado=0;
  suma=0;
  resta=0;
  multiplicacion=0;
  division=0;

  operaciones: any[] = [];
  cursoSeleccionadoId: number | null = null;

  constructor(private operacionService: OperacionServiceService, private router: Router) {
    this.operaciones = this.operacionService.obtenerOperaciones();
  }

  agregarOperacion(event: Event): void {
    event.preventDefault();
  

    // Create a new course object
    const nuevoOperacion = {
      numero1: this.numero1,
      numero2: this.numero2,
      suma: this.numero1+this.numero2,
      resta: this.numero1-this.numero2,
    multiplicacion: this.numero1*this.numero2,
    division: this.numero1/this.numero2,
    };
  
    // Save the course using the service
    this.operacionService.agregarOperacion(nuevoOperacion);
    this.operaciones = this.operacionService.obtenerOperaciones(); // Refresh the course list
    this.limpiarFormulario();
  }



  limpiarFormulario(): void {
    this.numero1 =0;
    this.numero2 =0;
  }

  eliminarOperacion(index: number): void {
    this.operacionService.eliminarOperacion(index); // Delete the course using the service
    this.operaciones = this.operacionService.obtenerOperaciones(); // Refresh the list
  }

  verDetalles(index: number): void {
    // Navigate to the details page with the index as a parameter
    this.router.navigate(['/detalle', index]);
  }
}
