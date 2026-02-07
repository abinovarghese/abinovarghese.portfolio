import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  profile = signal<Profile | null>(null);

  stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '5+', label: 'Production Services' },
    { value: 'Top 5%', label: 'Performance Rating' },
    { value: '5', label: 'Awards Won' }
  ];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile.set(this.profileService.getProfile());
  }
}
