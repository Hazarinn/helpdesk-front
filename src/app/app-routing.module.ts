import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicosListComponent } from './components/tecnico/tecnicos-list/tecnicos-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate:[AuthGuard], children: [

    {path:'home', component: HomeComponent},
    {path: 'tecnicos', component: TecnicosListComponent},
    {path: 'tecnicos/create', component: TecnicoCreateComponent},
    {path: 'tecnicos/update/:id', component: TecnicoUpdateComponent},
    {path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent},

    {path:'home',                 component: HomeComponent},
    {path: 'clientes',            component: ClienteListComponent},
    {path: 'clientes/create',     component:  ClienteListComponent},
    {path: 'clientes/update/:id', component:  ClienteUpdateComponent},
    {path: 'clientes/delete/:id', component: ClienteDeleteComponent},


    {path: 'chamados',            component: ChamadoListComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
