import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

import { Cliente } from '../cliente'
import { ClientesService } from '../../clientes.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucess: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private service: ClientesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if (this.id) {
          this.service
          .getClienteById(this.id)
          .subscribe(
            response => this.cliente = response , 
            errorResponse => this.cliente = new Cliente()
          )
        }
    })
  }

  voltarParaListagem(){
     this.router.navigate(['/clientes-lista'])
  }

  onSubmit(){
    this.service
    .salvar(this.cliente)
    .subscribe(response => {
      this.sucess = true;
      this.errors = [];
      this.cliente = response;
    } , errorResponse => {
      this.sucess = false;
      this.errors = errorResponse.error.errors;
    })
  }

}
