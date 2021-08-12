import { Routes } from "@angular/router"
import { UsuariosAddComponent } from "./componentes/usuarios-add/usuarios-add.component"
import { UsuarioComponent } from "./componentes/usuarios/usuario.component"
import { HomeComponent } from "./home/home.component"
import { LoginComponent } from "./login/login.component"
import { GuardiaoGuard } from "./service/guardiao.guard"


export const rootRouterConfig: Routes = [


    {
        path: '',
        redirectTo: '/login',
        pathMatch:'full'
    },

    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [GuardiaoGuard]
    },
    {
        path: 'listarUsers',
        component: UsuarioComponent,
        canActivate: [GuardiaoGuard]

    },
    {
        path:'usuarioAdd',
        component: UsuariosAddComponent,
        canActivate: [GuardiaoGuard]

    },
    {
        path:'usuarioAdd/:id',
        component: UsuariosAddComponent,
        canActivate: [GuardiaoGuard]

    }

]
