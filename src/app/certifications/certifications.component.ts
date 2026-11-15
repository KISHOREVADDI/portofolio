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
      issuer: 'Google',
      issuedDate: 'Jul 2026',
      credentialId: 'H3QTNX8OBG99',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/H3QTNX8OBG99',
      skills: 'User Experience and UI Design',
      skillsList: ['UX Design', 'User Experience (UX)', 'Wireframing', 'Prototyping'],
      logo: 'assets/logo-google.png',
      certificateImage: 'assets/images/foundationnsofux.png',
      summary: 'Trained in UX research, wireframing, interactive prototyping, and usability testing.'
    },
    {
      title: 'Designing User Interfaces & Experiences (UI/UX)',
      issuer: 'IBM',
      issuedDate: 'May 2026',
      credentialId: 'QZYTZ0J2L0SB',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/QZYTZ0J2L0SB',
      skills: 'Figma (Software), Progressive Web Development and +4 skills',
      skillsList: ['Figma', 'UI/UX Design', 'Design Systems', 'Web Development'],
      logo: 'assets/logo-ibm.png',
      certificateImage: 'assets/images/designing uiux.png',
      summary: 'Designed responsive user interfaces and prototypes using Figma and modern design systems.'
    },
    {
      title: 'Security Operations Center (SOC)',
      issuer: 'Cisco',
      issuedDate: 'Nov 2026',
      credentialId: 'AS191W2X3T5H',
      credentialUrl: 'https://coursera.org/verify/AS191W2X3T5H',
      skills: 'Security Operations Center (SOC), Cybersecurity, Threat Monitoring & Incident Handling',
      skillsList: ['SOC Operations', 'Cybersecurity', 'Threat Analysis', 'Incident Handling'],
      logo: 'assets/logo-cisco.png',
      certificateImage: 'assets/images/soc certificate.png',
      summary: 'Trained in SOC security monitoring, threat detection, alert analysis, and incident response.'
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
