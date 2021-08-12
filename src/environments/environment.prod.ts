export const environment = {
  production: true,
  baseServidor():string {
    return "http://localhost:8080/"
  },

  baseLogin():string{
    return this.baseServidor +"login/";
  },

   baseUrl(): string {
    return this.baseServidor + "usuario/";
  }



};
