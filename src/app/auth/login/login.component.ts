import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  user: any;
  visible: boolean;
  changetype: boolean = true;

  loading = false;

  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dni: ['', Validators.required],
    });
  }

  mostrarPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  login() {
    // if (this.formulario.valid) {
    //   this.loading = true;
    //   const email = this.formulario.get('email')?.value;
    //   const clave = this.formulario.get('clave')?.value;
    //   this.authService.login(email, clave).subscribe(
    //     (response: any) => {
    //       if (response && response.isExitoso) {
    //         if (response.resultado && response.resultado.email) {
    //           localStorage.setItem('email', response.resultado.email);
    //         } else {
    //           console.error('Email no encontrado en el resultado');
    //         }
    //         this.toastr.success('¡Bienvenido!');
    //         this.router.navigate(['/admin/dashboard']);
    //       } else {
    //         this.toastr.error(
    //           'Credenciales incorrectas. Por favor, revise los datos ingresados e intente nuevamente.'
    //         );
    //       }
    //       this.loading = false;
    //     },
    //     (error: any) => {
    //       console.error(error);
    //       if (error.status === 401) {
    //         this.toastr.error(
    //           'La contraseña es incorrecta. Corrobore el dato.'
    //         );
    //       } else {
    //         this.toastr.error(
    //           'Error al iniciar sesión. Por favor, revise los datos ingresados e intente nuevamente.'
    //         );
    //       }
    //       this.loading = false;
    //     }
    //   );
    // } else {
    //   Object.values(this.formulario.controls).forEach((control) => {
    //     control.markAsTouched();
    //   });
    //   this.toastr.error('Complete los campos obligatorios.');
    // }
    // this.router.navigate(['/admin/dashboard']);
    // this.toastr.success('¡Bienvenido!');
    // this.router.navigate(['/admin/dashboard']);
  }

  // d********************************** FUNCION PARA ABRIR DIALOG ****************************
  showDialog() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
      this.formulario.reset();
    }, 3000);
  }

  get controlEmail(): FormControl {
    return this.formulario.controls['dni'] as FormControl;
  }
}
