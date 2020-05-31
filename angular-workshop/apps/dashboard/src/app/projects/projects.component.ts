import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../../../libs/core-data/src/lib/projects/projects.service';
import { Project } from 'libs/core-data/src/lib/projects/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectsService) { }

  projects$;

  selectedProject: Project;

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectService.getAll();
  }

  deleteProject(project) {
    this.projectService.deleteProject(project.id).subscribe(result => this.getProjects());
  }

  saveProject(project) {
    if(!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectService.createProject(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
    this.projectService.updateProject(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  cancel() {
    this.resetProject();
  }

  ngOnInit(): void {
    this.getProjects();
    this.resetProject();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false,
    }
    this.selectProject(emptyProject);
  }

}
