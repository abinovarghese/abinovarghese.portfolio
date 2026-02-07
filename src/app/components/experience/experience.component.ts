import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Experience } from '../../services/profile.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences = signal<Experience[]>([]);
  awards = signal<{ title: string; description: string }[]>([]);

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.experiences.set(this.profileService.getExperience());
    this.awards.set(this.profileService.getAwards());
  }
}
