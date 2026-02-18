import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();

    // REPLACE THESE WITH YOUR ACTUAL KEYS
    // Service ID: e.g., 'service_xyz'
    // Template ID: e.g., 'template_abc'
    // Public Key: e.g., 'user_123'

    emailjs
      .sendForm('service_t0pmfoe', 'template_flg2hj7', e.target as HTMLFormElement, {
        publicKey: 'DJ68MtzBRlDsEaRSJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message Sent Successfully!');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Failed to send message. Please try again or check console.');
        },
      );
  }
}
