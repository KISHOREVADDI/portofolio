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
  showAlert1 = false;
  showAlert2 = false;
  showAlert3 = false;
  showWelcome = false;
  progressWidth = 0;

  ngOnInit() {
    // Start progress animation
    setTimeout(() => { this.showAlert1 = true; this.progressWidth = 20; }, 200);
    setTimeout(() => { this.showAlert2 = true; this.progressWidth = 50; }, 1200);
    setTimeout(() => { this.showAlert3 = true; this.progressWidth = 80; }, 2200);
    setTimeout(() => { this.showWelcome = true; this.progressWidth = 100; }, 3200);

    setTimeout(() => {
      this.loadingComplete.emit();
      const screen = document.getElementById('loading-screen');
      if (screen) {
        screen.style.opacity = '0';
        setTimeout(() => { this.isLoading = false; }, 600);
      }
    }, 4500);
  }
}
