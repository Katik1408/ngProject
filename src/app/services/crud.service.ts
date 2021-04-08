import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.apiURL; //http://locahost:3000
const GET_STUDENTS = '/api/students';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(`${API_URL}${GET_STUDENTS}`);
  }
}
