import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../interfaces/Cliente'; //interface par interagir com a service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clienteForm : FormGroup = new FormGroup({})
  cliente: Cliente[] = []

  //injeção --- nome escolhido --- objeto injetado
  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder){
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['']
    })
  }

  //serve para ir na serice e consumindo as listas dela e atribuimos a uma variavel dessa classe
  list(): void{
    this.cliente = this.clienteService.list()
  }

  //métoo executado ao inicializar a página
  ngOnInit(): void{
    this.list()
  }

  save(){
    if(this.clienteForm.valid)
      alert('saving')
  }

}
