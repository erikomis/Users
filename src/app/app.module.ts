import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from "@angular/forms"
import {HttpClientModule}  from "@angular/common/http";

import { NgxPaginationModule } from 'ngx-pagination';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './componentes/usuarios/usuario.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuariosAddComponent } from './componentes/usuarios-add/usuarios-add.component';


export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuariosAddComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig)],
    HttpInterceptorModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
