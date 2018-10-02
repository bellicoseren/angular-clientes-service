import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit{
    
    clientes: Cliente[];

    constructor(private clientesService: ClientesService){}

    ngOnInit() {
        this.clientesService.getClientes().subscribe(
            clientes => this.clientes=clientes
            //la linea anterior es lo mismo que
            //function(clientes){
            //    this.clientes=clientes
            //}
            //Y si tiene más lineas que agregarse puede quedar
            // clientes => {
            //   this.clientes=clientes
            //}
            //Y si tiene más de un parámetro se agrega paréntesis
            //(clientes) => this.clientes = clientes
        );
    }
}