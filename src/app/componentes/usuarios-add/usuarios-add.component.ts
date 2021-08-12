import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Telefone } from 'src/app/model/telefone';
import { Users } from 'src/app/model/users';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.css']
})
export class UsuariosAddComponent implements OnInit {

  user = new Users();

  telefone = new Telefone()

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      console.log("id: ", id);
      this.userService.getStudant(parseInt(id)).subscribe(data => {
        console.log(data)
        this.user = data;
        console.log(this.user);
      });
    }
  }
  salvarUser(){
    if(this.user.id!= null && this.user.id.toString().trim() !=null){
      this.userService.atualizarUsuario(this.user).subscribe(data =>{
        this.novo();
        console.info("User atualizado " + data);
      })
    }else{
      this.userService.salvarUsuario(this.user).subscribe(data =>{
        this.novo();
        console.info("Gravou User: " + data);
      })
    }
  }
  
  deletarTelefone(id:any, i:any){
    if(id == null){
      this.user.telefones.splice(i,1);
      return 
    }

    if(id !== null && confirm("Deseja  realmente deletar")){
      this.userService.deletarTelefone(id).subscribe( data => {
        this.user.telefones.splice(i,1);

      })
    }

  }

  addFone(){
    if(this.user.telefones === undefined){
      this.user.telefones = new Array<Telefone>();
    }

    this.user.telefones.push(this.telefone);
    this.telefone = new Telefone()
  }

  novo(){
    this.user = new Users();
  }
}
