import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Emprestimo } from '../models/Emprestimo';
import { EmprestimoService } from './emprestimo.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css'],
})
export class EmprestimoComponent implements OnInit {

  public titulo = 'PeakInvest Emprestimo:';
  public valor!: number;
  public qntParcelas!: number;
  public emprestimoForm!: FormGroup;
  public resultado!: number;
  public simulacaoEmprestimo!: Emprestimo;

  constructor(private fb: FormBuilder,
    private emprestimoService: EmprestimoService) {
    this.criarForm();

  }
  ngOnInit(): void {}

  SubmitEmprestimo(){

   this.simulacaoEmprestimo = {
    valor : this.valor,
    qntParcelas : this.qntParcelas

   };

    this.simulacaoEmprestimo.qntParcelas = this.qntParcelas;
    this.emprestimoService.post(this.simulacaoEmprestimo).subscribe({
      next: (resultadoEmprestimo: number) =>{this.resultado = resultadoEmprestimo},
      error: (error: any) =>{console.error(error);}
    });
  }

  ResultadoEmprestimo(): number {
    let valor = this.valor;
    let qntParcelas = this.qntParcelas;
    let resultado = valor / qntParcelas;
    this.resultado = resultado + (valor / qntParcelas) * 0.05;
    return this.resultado;
  }

  emprestimoSubmit() {
    this.SubmitEmprestimo();
  }

  criarForm() {
    this.emprestimoForm = this.fb.group({
      valor: ['', Validators.required],
      qntParcelas: ['', Validators.required],
    });
  }
}
