

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PuzzelComponent } from './puzzel/puzzel.component';
import { TaskAdminComponent } from './task-admin/task-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    MainWindowComponent,
    CalculadoraComponent,
    PuzzelComponent,
    TaskAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
