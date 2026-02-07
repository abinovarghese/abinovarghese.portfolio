import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Project } from '../../services/profile.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects = signal<Project[]>([]);
  featuredProjects = signal<Project[]>([]);
  otherProjects = signal<Project[]>([]);

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const allProjects = this.profileService.getProjects();
    this.projects.set(allProjects);
    this.featuredProjects.set(allProjects.filter(p => p.featured));
    this.otherProjects.set(allProjects.filter(p => !p.featured));
  }
}
