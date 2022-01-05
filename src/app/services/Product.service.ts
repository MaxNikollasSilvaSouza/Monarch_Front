import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    SERVER_URL = 'https://maxmonarch.herokuapp.com';
    constructor(private http: HttpClient) {}
    
    public getProducts(codigo: string)
    {
      //console.log({'CODIGO':codigo})
      return this.http.post(`${this.SERVER_URL}/verificacao`,{'CODIGO':codigo})
      
    }
   
   
  }