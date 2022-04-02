import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipallComponent } from './components/pagina-principal/pagina-principall.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "inicio", component: PaginaPrincipallComponent },
  {path: "sucursales", component: SucursalesComponent },
  {path: "empresas", component: EmpresasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
