import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/value';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor(private http: HttpClient) { }

  getValues() {
    return this.http.get<Value[]>('http://localhost:5000/api/values');
  }
}
