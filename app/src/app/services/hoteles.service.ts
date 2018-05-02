import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelesService {

  constructor(private http: HttpClient) { }
  getHotels() {
    return this.http.get('hoteles');
  }
  getHotelsFilter(query) {
    return this.http.get(`hoteles/${query}`);
  }
}
