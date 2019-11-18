import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiEndpoint = 'http://localhost:8080/api/shopping_cart';

  constructor(private http: HttpClient) { }

  getCart(): Observable<any> {
    return this.http.get<any>(`${this.apiEndpoint}/carts`);
  }

  getItems(): Observable<any> {
    return this.http.get<any>(`${this.apiEndpoint}/items`);
  }
}
