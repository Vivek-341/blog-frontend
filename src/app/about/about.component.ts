import { Component } from '@angular/core';
import { AfterheaderComponent } from '../afterheader/afterheader.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AfterheaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  goHome() {
    window.location.href = '/';
  }

}
