import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

 // Crear una instancia de HttpClient
constructor(private http: HttpClient) { }

// Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
apiUser = environment.apiURL + 'posts/';


  // Metodo GET para el Interceptor
  //Solicitando un perdido para 
  getPostAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser, {observe: 'response'});
    }
  }



