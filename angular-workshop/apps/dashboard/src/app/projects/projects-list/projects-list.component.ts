import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'libs/core-data/src/lib/projects/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() projects: Project[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
