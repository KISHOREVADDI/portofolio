import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  profiles = [
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      description: 'Code repositories and projects',
      link: 'https://github.com/KISHOREVADDI'
    },
    {
      name: 'LeetCode',
      icon: 'fa-solid fa-code',
      description: 'Algorithm challenges and solutions',
      link: 'https://leetcode.com/u/Kishore-1204/'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      description: 'Professional network and connections',
      link: 'https://www.linkedin.com/in/kishorevaddi'
    },
    {
      name: 'CodeChef',
      icon: 'fa-solid fa-laptop-code',
      description: 'Competitive programming platform',
      link: 'https://www.codechef.com/users/kishore_1204'
    },
    {
      name: 'HackerRank',
      icon: 'fa-brands fa-hackerrank',
      description: 'Coding challenges and skills',
      link: 'https://www.hackerrank.com/profile/kishorevaddi1204'
    },
    {
      name: 'TryHackMe',
      icon: 'fa-solid fa-shield-halved',
      description: 'Cybersecurity learning platform',
      link: 'https://tryhackme.com/p/kishore1204'
    }
  ];
}
