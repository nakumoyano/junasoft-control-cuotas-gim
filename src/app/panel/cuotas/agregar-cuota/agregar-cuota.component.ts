import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-cuota',
  templateUrl: './agregar-cuota.component.html',
  styleUrls: ['./agregar-cuota.component.css'],
})
export class AgregarCuotaComponent implements OnInit {
  mostrarSkeleton = false;

  isEdit = false;
  loading = false;

  // OPCIONES SELECCIONADAS DE DROPDOWNS
  selectedEstado: string;
  selectedProyecto: string;

  idUser: any;

  planes: any = [];
  clientes: any = [];
  modoPagos: any = [];

  private subscription = new Subscription();

  frmAddEditTarea: FormGroup;

  constructor(
    private formBuilder: FormBuilder // private toastr: ToastrService, // private proyectoService: ProyectosService, // private activatedRoute: ActivatedRoute, // private router: Router, // private estadoService: EstadosService, // private tareaService: TareasService, // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mostrarSkeleton = false;

    this.planes = [
      { idPlan: 1, plan: 'Musculación' },
      { idPlan: 2, plan: 'CrossFit' },
    ];

    this.clientes = [
      { idCliente: 1, nombre: 'Nahuel Moyano' },
      { idCliente: 2, nombre: 'Juan Cruz Breppe' },
    ];

    this.modoPagos = [
      { idModo: 1, modo: 'Efectivo' },
      { idModo: 2, modo: 'Transferencia' },
    ];

    this.createForm();
  }

  // f************************************** FUNCION PARA INICIALIZAR FORM ***************************
  createForm() {
    this.frmAddEditTarea = this.formBuilder.group({
      idRequerimiento: [0],
      cuota: ['', Validators.required],
      precio: [''],
      dias: [''],
      idPlan: [''],
      idCliente: [''],
      idModo: [''],
      fechaCreacion: [''],
    });
  }

  // f************************************** GETS PARA OBTENER EL VALOR DE LOS CAMPOS DEL FORMULARIO ***************************
  get controlNombre(): FormControl {
    return this.frmAddEditTarea.controls['nombre'] as FormControl;
  }
}
