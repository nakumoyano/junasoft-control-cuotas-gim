import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado-de-clientes',
  templateUrl: './listado-de-clientes.component.html',
  styleUrls: ['./listado-de-clientes.component.css'],
})
export class ListadoDeClientesComponent implements OnInit {
  clientes: any = [];

  totalRecords: any;
  loading: boolean = false;

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDatos();

    this.clientes = [
      {
        nombre: 'Nahuel Moyano',
        direccion: 'Calle publica 123',
        telefono: '3547123456',
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
  navigateToCliente() {
    this.router.navigate(['/admin/clientes/crear-cliente']);
  }
}
