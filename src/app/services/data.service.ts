import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const POKE_API = environment.poke_api

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get<any>(`${POKE_API}pokemon?limit=2000`)
  }

  getUrl(url: string) {
    return this.http.get(url)
  }
}
