import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  words = ["Java Full Stack Developer", "Cybersecurity Specialist", "Angular Developer", "Backend Engineer"];
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  displayedText = '';
  timeoutId: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  type() {
    const currentWord = this.words[this.wordIndex];
    if (this.isDeleting) {
      this.displayedText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayedText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
      typingElement.textContent = this.displayedText;
    }

    let speed = this.typingSpeed;
    if (this.isDeleting) {
      speed /= 2;
    }

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      speed = 1000; // Pause at end of word
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      speed = 500; // Pause before typing next word
    }

    this.timeoutId = setTimeout(() => this.type(), speed);
  }
}
