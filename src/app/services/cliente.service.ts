import { Injectable } from '@angular/core';
//importamos pois vamos usar
import { Cliente } from '../interfaces/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Criar uma lista fake
  clientes: Cliente[]=[
    {id:"ehbifegierge", nome: "Thiago", telefone:"1195076-8876"},
    {id:"chswicfbwief", nome: "Maria", telefone:"1194483-7498"},
    {id:"ehbifegierge", nome: "Luiza", telefone:"1194837-4757"},
  ]

  constructor() { }

  //retornar a lista de clientes
  list(): Cliente[]{
    return this.clientes;
  }

  //método para remover um cliente
  remove(id:string){
    const cliente = this.clientes.find(c => c.id == id) //buscar cliente na lista

    if(cliente){ // se encontra o cliente
      const index = this.clientes.indexOf(cliente)
      //remove da lista
      this.clientes.splice(index,1)
    }
  }

  //método para adicionar cliente
  add(cliente:Cliente){
    //O push adiciona um item (objeto) dentro de uma array (lista)
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  update(id:string, cliente:Cliente){
    const index = this.clientes.findIndex(c => c.id == id)

    if(index !== -1){
      this.clientes[index]=
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }


}
