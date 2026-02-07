import { Component, OnInit, OnDestroy, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  profile = signal<Profile | null>(null);
  typedText = signal('');

  private roles = ['Senior Software Engineer', 'Cloud & AI Engineer', 'Full-Stack Developer', 'Problem Solver'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: any = null;
  private isBrowser: boolean;

  constructor(
    private profileService: ProfileService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.profile.set(this.profileService.getProfile());
    if (this.isBrowser) {
      this.typedText.set(this.roles[0]);
      this.typeEffect();
    } else {
      this.typedText.set(this.roles[0]);
    }
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  private typeEffect() {
    const currentRole = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.typedText.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.typedText.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    this.timerId = setTimeout(() => this.typeEffect(), typeSpeed);
  }
}
