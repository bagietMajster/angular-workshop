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

  projects: Project[];

  selectedProject: Project;

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projectService.getAll().subscribe((result: any) => this.projects=result);
  }

  deleteProject(project) {
    this.projectService.deleteProject(project.id).subscribe(result => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
