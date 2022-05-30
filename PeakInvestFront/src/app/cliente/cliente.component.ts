import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '../models/Cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  public titulo = 'PeakInvest Clientes:';
  public clienteForm!: FormGroup;
  public nome!: string;
  public id!: number;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.criarForm();
  }

  ngOnInit(): void {}

  SubmitCliente(){
      console.log(this.id);
     this.clienteService.get(this.id).subscribe({
       next: (nome: any) =>{this.nome = nome},
       error: (error: any) =>{console.error(error);}
     });
   }


  clienteSubmit() {
    this.SubmitCliente();
  }

  criarForm() {
    this.clienteForm = this.fb.group({
      id: [''],
      nome: [''],
    });
  }
}
