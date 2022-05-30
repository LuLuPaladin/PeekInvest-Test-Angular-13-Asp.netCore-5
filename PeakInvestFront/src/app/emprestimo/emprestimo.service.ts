import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emprestimo } from '../models/Emprestimo';

@Injectable({
  providedIn: 'root',
})
export class EmprestimoService {
  baseUrl = `${environment.UrlPrincipal}/api/Emprestimo`;

  constructor(private http: HttpClient) {}

  post(emprestimo: Emprestimo): Observable<number> {
    var empReturn = this.http.post<number>(`${this.baseUrl}`, emprestimo);
    return empReturn;
  }
}
