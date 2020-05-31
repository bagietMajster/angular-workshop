import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Project } from 'libs/core-data/src/lib/projects/project';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };
}
