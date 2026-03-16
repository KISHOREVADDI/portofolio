import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
