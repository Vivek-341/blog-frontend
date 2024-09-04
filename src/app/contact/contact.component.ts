import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
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
