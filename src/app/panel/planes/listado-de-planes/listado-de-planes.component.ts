import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado-de-planes',
  templateUrl: './listado-de-planes.component.html',
  styleUrls: ['./listado-de-planes.component.css'],
})
export class ListadoDePlanesComponent implements OnInit {
  planes: any = [];

  totalRecords: any;
  loading: boolean = false;

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDatos();

    this.planes = [{ plan: 'Musculación', dias: 3, precio: 14000 }];
  }

  // d***************************************** FUNCION PARA OBTENER TODOS LOS DATOS ***********************************
  getAllDatos() {}

  // d***************************************** FUNCION PARA ELIMINAR ***********************************
  // eliminar(proyecto: any) {
  //   this.proyectosService.deleteData(proyecto).subscribe({
  //     next: (response: any) => {
  //       if (response.statusCode === 204) {
  //         this.toastr.success('¡El proyecto se ha eliminado correctamente!');
  //         this.getAllDatos();
  //       } else {
  //       }
  //     },
  //     error: (error: any) => {
  //       this.toastr.error(
  //         'Ha ocurrido un error al intentar eliminar proyecto.'
  //       );
  //     },
  //   });
  // }

  // d***************************************** FUNCION PARA OBTENER EL TOTAL DE DATOS ***********************************
  // obtenerTotalResultados(): number {
  //   return this.proyectos?.length;
  // }

  // d***************************************** FUNCION PARA REDIRECCIONAR A AGREGAR PROYECTO ***********************************
  navigateToPlan() {
    this.router.navigate(['/admin/planes/crear-plan']);
  }
}
