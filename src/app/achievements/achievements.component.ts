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
      description: 'Built scalable full-stack web applications using the MERN stack with responsive UIs and MongoDB backends.',
      date: 'Aug 2026',
      organizer: 'SmartBridge & APSCHE',
      logo: 'assets/logo-smartbridge.png',
      image: 'assets/images/SmartBridge Intern.png'
    },
    {
      title: 'AI for Sustainability Internship',
      event: '1M1B Green Skills Academy',
      description: 'Developed AI for sustainability solutions leveraging Agentic AI, RAG architectures, and IBM SkillsBuild.',
      date: 'May 2026 - Jun 2026',
      organizer: '1M1B & IBM SkillsBuild',
      logo: 'assets/logo-1m1b.png',
      image: 'assets/images/1M1B Intern.png'
    },
    {
      title: 'AWS + Java Full Stack (AWS+JFS)',
      event: 'TECHWING Virtual Internship',
      description: 'Engineered cloud-native full-stack Java solutions integrated with AWS cloud infrastructure and REST APIs.',
      date: 'May 2026 - Aug 2026',
      organizer: 'TECHWING',
      logo: 'assets/logo-techwing.png',
      image: 'assets/images/Internshipcertificateby Techwing.jpeg'
    }
  ];

  participations = [
    {
      title: 'Participation Certificate',
      event: "GGU Hack Fest'26",
      description: '24-Hour National Level Hackathon organized by School of Computing at Godavari Global University.',
      date: '12th & 13th February 2026',
      organizer: 'Godavari Global University, Rajamahendravaram',
      logo: 'assets/logo-ggu.png',
      image: 'assets/hackathonpartcipationcert.jpeg'
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
