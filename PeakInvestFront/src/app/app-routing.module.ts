import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'emprestimo', component: EmprestimoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
