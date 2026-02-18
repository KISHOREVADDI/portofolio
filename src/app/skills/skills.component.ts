import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      category: 'Backend & Database',
      items: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'REST APIs']
    },
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Tools & Security',
      items: ['Kali Linux', 'Burp Suite', 'Wireshark', 'VS Code', 'GitHub', 'Firebase']
    }
  ];
}
