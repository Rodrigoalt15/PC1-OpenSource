import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getCocktails() {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
