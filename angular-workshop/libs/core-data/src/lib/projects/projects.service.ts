import { Injectable } from '@angular/core';
import { Project } from './project';
import {  HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  model = 'projects';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${baseURL}${this.model}`);
  }
}
