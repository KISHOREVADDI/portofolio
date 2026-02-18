import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();

  isLoading = true;
  showMainIcon = false;
  showLoadingText = false;
  showSubIcons = [false, false, false];
  showDesignerText = false;

  ngOnInit() {
    // Sequence based on original main.js
    setTimeout(() => {
      this.showLoadingText = true;
    }, 0);

    setTimeout(() => {
      this.showMainIcon = true;
    }, 800);

    setTimeout(() => {
        this.showSubIcons[0] = true;
    }, 1600);
    setTimeout(() => {
        this.showSubIcons[1] = true;
    }, 2000);
    setTimeout(() => {
        this.showSubIcons[2] = true;
    }, 2400);

    setTimeout(() => {
      this.showDesignerText = true;
    }, 2800);

    setTimeout(() => {
      // Fade out logic is handled by CSS transition on the host or parent usually, 
      // but here we can just emit the event and let AppComponent handle the main page reveal.
      // However, to mimic the exact behavior, we might want to fade out 'this' component.
      
      // Let's emit first.
      this.loadingComplete.emit();
      
      // And then hide self after fade out
      // For now, let's assuming AppComponent handles the "visible" class on main content
      // and we just hide this component after a short delay for smooth transition if needed.
      // The original had loadingScreen.style.opacity = '0' then display 'none'.
      
      const screen = document.getElementById('loading-screen');
      if(screen) {
        screen.style.opacity = '0';
        setTimeout(() => {
          this.isLoading = false; 
        }, 500);
      }
    }, 4000);
  }
}
