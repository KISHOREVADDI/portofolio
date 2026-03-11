import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isPlaying = false;

  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMusic() {
    if (!this.bgMusic) return;

    const audio = this.bgMusic.nativeElement;
    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
    } else {
      audio.volume = 0.3; // Default pleasant volume
      audio.play().catch(e => console.error("Audio playback prevented:", e));
      this.isPlaying = true;
    }
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.updateActiveLink(sectionId);
      this.isMenuOpen = false; // Close menu on scroll
    }
  }

  updateActiveLink(sectionId: string) {
    const links = document.querySelectorAll('.ul-list li a');
    links.forEach(link => {
      link.parentElement?.classList.remove('active');
      if (link.getAttribute('href') === '#' + sectionId) {
        link.parentElement?.classList.add('active');
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      if (section instanceof HTMLElement) {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
          if (activeLink) {
            document.querySelectorAll('.ul-list li').forEach(li => li.classList.remove('active'));
            activeLink.parentElement?.classList.add('active');
          }
        }
      }
    });

    // Also handle Back to Top visibility if we implement it here, or distinct component
  }

}
