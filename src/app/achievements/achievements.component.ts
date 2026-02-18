import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'Participation Certificate',
      event: "GGU Hack Fest'26",
      description: '24-HOUR NATIONAL LEVEL HACKATHON',
      date: '12th & 13th February 2026',
      organizer: 'Godavari Global University, Rajamahendravaram',
      image: 'assets/hackathonpartcipationcert.jpeg' // Updated with user provided image
    }
  ];
}
