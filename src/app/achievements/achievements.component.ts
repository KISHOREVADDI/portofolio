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
      title: 'Full Stack Developer (MERN Stack)',
      event: 'SmartBridge Virtual Internship',
      description: 'Successfully completed the 2-month (120 hrs) Short-Term Virtual Internship Program in Full Stack Web Development (MERN Stack) organized by SmartBridge in collaboration with APSCHE and MongoDB.',
      date: 'Aug 2026',
      organizer: 'SmartBridge & APSCHE',
      image: 'assets/images/SmartBridge Intern.png'
    },
    {
      title: 'AI for Sustainability Internship',
      event: '1M1B Green Skills Academy',
      description: 'Successfully completed the AI for Sustainability Virtual Internship organized by 1M1B, supported by AICTE in collaboration with IBM SkillsBuild. Gained practical experience in AI, Agentic AI, RAG systems, and sustainability concepts.',
      date: 'May 2026 - Jun 2026',
      organizer: '1M1B & IBM SkillsBuild',
      image: 'assets/images/1M1B Intern.png'
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
