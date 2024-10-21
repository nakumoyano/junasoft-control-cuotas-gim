import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelRightComponent } from './components/panel-right/panel-right.component';
import { CrearPlanComponent } from './panel/planes/crear-plan/crear-plan.component';
import { ListadoDePlanesComponent } from './panel/planes/listado-de-planes/listado-de-planes.component';
import { AgregarCuotaComponent } from './panel/cuotas/agregar-cuota/agregar-cuota.component';
import { DropdownModule } from 'primeng/dropdown';
import { ListadoDeCuotasComponent } from './panel/cuotas/listado-de-cuotas/listado-de-cuotas.component';
import { AgregarClienteComponent } from './panel/clientas/agregar-cliente/agregar-cliente.component';
import { ListadoDeClientesComponent } from './panel/clientas/listado-de-clientes/listado-de-clientes.component';
import { AgregarAdminComponent } from './panel/administradores/agregar-admin/agregar-admin.component';
import { ListadoDeAdministradoresComponent } from './panel/administradores/listado-de-administradores/listado-de-administradores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    PanelRightComponent,
    CrearPlanComponent,
    ListadoDePlanesComponent,
    AgregarCuotaComponent,
    ListadoDeCuotasComponent,
    AgregarClienteComponent,
    ListadoDeClientesComponent,
    AgregarAdminComponent,
    ListadoDeAdministradoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    CardModule,
    DropdownModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
