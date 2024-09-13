import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterheaderComponent } from '../afterheader/afterheader.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,AfterheaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName = localStorage.getItem('userName')?? ''
  email = localStorage.getItem('email')?? ''

  constructor(private router:Router,private users:UsersService) {
    let userName = localStorage.getItem('userName')?? ''
    let email = localStorage.getItem('email')?? ''
  }

}
