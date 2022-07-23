import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainWindowComponent } from './main-window/main-window.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PuzzelComponent } from './puzzel/puzzel.component';
import { TaskAdminComponent } from './task-admin/task-admin.component';

const routes: Routes = [
  { path: '', component: MainWindowComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'puzzel', component: PuzzelComponent },
  { path: 'task-admin', component: TaskAdminComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
