import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Skill } from '../../services/profile.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills = signal<Skill[]>([]);

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.skills.set(this.profileService.getSkills());
  }
}
