import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUsuario(): Observable<Users[]>{
    return this.http.get<Users[]>(AppConstants.baseUrl)
  }

  deletarUsuario(id:Number): Observable<any>{
    return this.http.delete(AppConstants.baseUrl + id,{responseType: 'text'})
  }

  consultarPorUser(nome:String): Observable<any>{
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

  getStudant(id:Number):Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  salvarUsuario(user:any): Observable<any>{
    return this.http.post<any>(AppConstants.baseUrl,user);
  }
  atualizarUsuario(user:any): Observable<any>{
    return this.http.put<any>(AppConstants.baseUrl,user);
  }

  deletarTelefone(id:Number):Observable<any>{
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/"+ id ,{responseType: 'text'})
  }

  userAutenticacao(){
    if(localStorage.getItem('token') !== null && localStorage.getItem('token')?.toString().trim() !== null){
      return true;
    }else{
      return false;
    }
  }
}
