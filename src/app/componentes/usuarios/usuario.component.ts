import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/model/users';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public users: Users[]
  public nome: string;
  public p: any
  public total:any

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.usuarioService.getUsuario().subscribe(usuarios =>{
      this.users = usuarios
    },
    error =>  console.log(error))
    
  }
  

  deletarUsuario(id:Number){
    this.usuarioService.deletarUsuario(id).subscribe(usuarios =>{
      console.log("Retorno do  metodo delete: ",usuarios)
      this.usuarioService.getUsuario().subscribe(usuarios =>{
        this.users = usuarios
      },
      error =>  console.log(error))
    })
  }


  consultarUser(){
    this.usuarioService.consultarPorUser(this.nome).subscribe(data=>{
      this.users = data;
    })
  }

}
