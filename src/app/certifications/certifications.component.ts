import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Coursera',
      issuedDate: 'Jul 2026',
      credentialId: 'H3QTNX8OBG99',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/H3QTNX8OBG99',
      skills: 'User Experience and UI Design',
      logo: 'assets/coursera-logo.png',
      certificateImage: 'assets/images/foundationnsofux.png',
      summary: 'Comprehensive training in UX research, wireframing, prototyping, and usability testing using modern design principles.'
    },
    {
      title: 'Designing User Interfaces & Experiences (UI/UX)',
      issuer: 'IBM',
      issuedDate: 'May 2026',
      credentialId: 'QZYTZ0J2L0SB',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/QZYTZ0J2L0SB',
      skills: 'Figma (Software), Progressive Web Development and +4 skills',
      logo: 'assets/ibm-logo.png',
      certificateImage: 'assets/images/designing uiux.png',
      summary: 'In-depth course on creating engaging user interfaces and experiences, leveraging Figma and progressive web app strategies.'
    }
  ];

  selectedCertificate: any = null;
  isClosing: boolean = false;

  openModal(cert: any): void {
    this.selectedCertificate = cert;
    this.isClosing = false;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isClosing = true;
    setTimeout(() => {
      this.selectedCertificate = null;
      this.isClosing = false;
      document.body.style.overflow = 'auto';
    }, 400);
  }
}
