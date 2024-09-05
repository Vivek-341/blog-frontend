import { Component } from '@angular/core';
import { AfterheaderComponent } from '../afterheader/afterheader.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AfterheaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  openFacebook() {
    window.open('https://www.facebook.com/', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/', '_blank');
  }

  openWhatsapp() {
    window.open('https://web.whatsapp.com/', '_blank');
  }
}
