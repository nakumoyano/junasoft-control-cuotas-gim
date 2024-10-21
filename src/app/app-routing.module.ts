import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { CrearPlanComponent } from './panel/planes/crear-plan/crear-plan.component';
import { ListadoDePlanesComponent } from './panel/planes/listado-de-planes/listado-de-planes.component';
import { AgregarCuotaComponent } from './panel/cuotas/agregar-cuota/agregar-cuota.component';
import { ListadoDeCuotasComponent } from './panel/cuotas/listado-de-cuotas/listado-de-cuotas.component';
import { AgregarClienteComponent } from './panel/clientas/agregar-cliente/agregar-cliente.component';
import { ListadoDeClientesComponent } from './panel/clientas/listado-de-clientes/listado-de-clientes.component';
import { AgregarAdminComponent } from './panel/administradores/agregar-admin/agregar-admin.component';
import { ListadoDeAdministradoresComponent } from './panel/administradores/listado-de-administradores/listado-de-administradores.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },

  //F ************************************* PLANES **********************************
  { path: 'admin/planes/crear-plan', component: CrearPlanComponent },
  {
    path: 'admin/planes/listado-de-planes',
    component: ListadoDePlanesComponent,
  },
  //F ************************************* CUOTAS **********************************
  { path: 'admin/cuotas/agregar-cuota', component: AgregarCuotaComponent },
  {
    path: 'admin/cuotas/listado-de-cuotas',
    component: ListadoDeCuotasComponent,
  },
  //F ************************************* CLIENTES **********************************
  { path: 'admin/clientes/crear-cliente', component: AgregarClienteComponent },
  {
    path: 'admin/clientes/listado-de-clientes',
    component: ListadoDeClientesComponent,
  },
  //F ************************************* ADMINISTRADORES **********************************
  {
    path: 'admin/administradores/crear-administrador',
    component: AgregarAdminComponent,
  },
  {
    path: 'admin/administradores/listado-de-administradores',
    component: ListadoDeAdministradoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
