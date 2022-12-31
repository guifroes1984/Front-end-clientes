import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Cliente = new Cliente;
  nome:string = 'Fran';

  constructor() {
    this.cliente = new Cliente();
    this.cliente.nome = 'Guilherme';
   }

  ngOnInit(): void {
  }

  clicar(){
    console.log('Cliquei');
  }

}
