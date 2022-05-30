import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = `${environment.UrlPrincipal}/api/Cliente`;

  constructor(private http: HttpClient) {}

  get(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/${id}`, {responseType: 'text'})
  }
}
