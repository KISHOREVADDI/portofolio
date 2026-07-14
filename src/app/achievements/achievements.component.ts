import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../shared/animate-on-scroll.directive';
import { SafeUrlPipe } from '../shared/safe-url.pipe';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, SafeUrlPipe],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})

export class AchievementsComponent {
  internships = [
    {
      title: 'Internship Certificate',
      event: '1M1B Green Skills Academy',
      description: 'Successfully completed the Green Skills Academy program, gaining hands-on experience in sustainability, green technologies, and driving social impact.',
      date: 'Recent',
      organizer: '1M1B',
      image: 'assets/images/1M1B Intern.pdf' 
    }
  ];

  participations = [
    {
      title: 'Participation Certificate',
      event: "GGU Hack Fest'26",
      description: '24-HOUR NATIONAL LEVEL HACKATHON',
      date: '12th & 13th February 2026',
      organizer: 'Godavari Global University, Rajamahendravaram',
      image: 'assets/hackathonpartcipationcert.jpeg' // Updated with user provided image
    }
  ];

  selectedAchievement: any = null;
  isClosing: boolean = false;

  isPdf(url: string): boolean {
    if (!url) return false;
    return url.toLowerCase().endsWith('.pdf');
  }

  openModal(achievement: any): void {
    this.selectedAchievement = achievement;
    this.isClosing = false;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal(): void {
    this.isClosing = true;

    setTimeout(() => {
      this.selectedAchievement = null;
      this.isClosing = false;
      document.body.style.overflow = 'auto'; // Restore background scrolling
    }, 400); // Wait for the fade-out/pop-out animation to finish
  }
}
