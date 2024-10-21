import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado-de-cuotas',
  templateUrl: './listado-de-cuotas.component.html',
  styleUrls: ['./listado-de-cuotas.component.css'],
})
export class ListadoDeCuotasComponent implements OnInit {
  cuotas: any = [];

  totalRecords: any;
  loading: boolean = false;

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDatos();

    this.cuotas = [
      {
        nCuota: 3,
        plan: 'Musculación',
        cliente: 'Nahuel Moyano',
        modoPago: 'Efectivo',
        fechaPago: '21/10/2024',
        precio: 14000,
      },
    ];
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
  navigateToCuota() {
    this.router.navigate(['/admin/cuotas/agregar-cuota']);
  }
}
