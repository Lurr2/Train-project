import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('assets/products.json');
  }
  getProducts(type: string): Observable<any[]> {
    return this.getData().pipe(
      map((data) => data.filter((item: any) => item.type === type))
    );
  }
}
