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

  getURL() {
    return `${baseURL}${this.model}`;
  }

  getURLForId(id) {
    return `${this.getURL()}/${id}`;
  }

  getAll() {
    return this.httpClient.get(this.getURL());
  }

  createProject(project) {
    return this.httpClient.post(this.getURL(), project);
  }

  updateProject(project) {
    return this.httpClient.patch(this.getURLForId(project.id), project);
  }

  deleteProject(projectId) {
    return this.httpClient.delete(this.getURLForId(projectId));
  }
}
