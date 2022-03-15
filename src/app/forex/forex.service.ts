import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForexService {
  public demo = 5;
  constructor(private http: HttpClient) {}

  getRates(src: string): Observable<any> {
    console.log('fetched' + src);
    return this.http.get('https://api.exchangerate-api.com/v4/latest/' + src);
  }
}
