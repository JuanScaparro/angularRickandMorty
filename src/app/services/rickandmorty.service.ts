import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/rickandmorty.interface';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  constructor(private http: HttpClient) {}

  getRickandmortyData(): Observable<ResponseApi> {
    return this.http.get(
      'https://rickandmortyapi.com/api/character'
    ) as Observable<ResponseApi>;
  }
}
