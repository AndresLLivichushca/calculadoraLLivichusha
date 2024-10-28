import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionServiceService {

  constructor() { }
   // Add a new course to LocalStorage
   agregarOperacion(curso: any): void {
    const operaciones = this.obtenerOperaciones();
    operaciones.push(curso);
    localStorage.setItem('operaciones', JSON.stringify(operaciones));
  }

  // Get all courses from LocalStorage
  obtenerOperaciones(): any[] {
    const cursosGuardados = localStorage.getItem('operaciones');
    return cursosGuardados ? JSON.parse(cursosGuardados) : [];
  }

  // Get details of a specific course by index
  obtenerDetallesCurso(index: number): any {
    const cursos = this.obtenerOperaciones();
    return cursos[index];
  }

  // Delete a course by index
  eliminarOperacion(index: number): void {
    const cursos = this.obtenerOperaciones();
    cursos.splice(index, 1);
    localStorage.setItem('operaciones', JSON.stringify(cursos));
  }

  obtenerOperacionPorId(id: number): any {
    const cursos = this.obtenerOperaciones();
    return cursos[id];
  }
}
