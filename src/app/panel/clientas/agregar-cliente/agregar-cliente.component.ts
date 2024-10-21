import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
})
export class AgregarClienteComponent implements OnInit {
  mostrarSkeleton = false;

  isEdit = false;
  loading = false;

  // OPCIONES SELECCIONADAS DE DROPDOWNS
  selectedEstado: string;
  selectedProyecto: string;

  idUser: any;

  private subscription = new Subscription();

  frmAddEditTarea: FormGroup;

  constructor(
    private formBuilder: FormBuilder // private toastr: ToastrService, // private proyectoService: ProyectosService, // private activatedRoute: ActivatedRoute, // private router: Router, // private estadoService: EstadosService, // private tareaService: TareasService,
  ) // private authService: AuthService
  {}

  ngOnInit(): void {
    this.mostrarSkeleton = false;

    this.createForm();
  }

  // f************************************** FUNCION PARA INICIALIZAR FORM ***************************
  createForm() {
    this.frmAddEditTarea = this.formBuilder.group({
      idRequerimiento: [0],
      nombre: ['', Validators.required],
      direccion: [''],
      telefono: [''],
    });
  }

  // f************************************** GETS PARA OBTENER EL VALOR DE LOS CAMPOS DEL FORMULARIO ***************************
  get controlNombre(): FormControl {
    return this.frmAddEditTarea.controls['nombre'] as FormControl;
  }
}
