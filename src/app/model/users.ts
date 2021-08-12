import { Telefone } from "./telefone";

export class Users {

    id:any;
    login: String;
    senha:String
    nome: String;
    cpf: String;
    cep:string;
    telefones: Array<Telefone>;
}
