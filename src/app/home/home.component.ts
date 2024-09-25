import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AfterheaderComponent } from '../afterheader/afterheader.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,AfterheaderComponent,RouterLink,RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName = localStorage.getItem('userName')?? '';
  constructor(){
   let userName = localStorage.getItem('userName')?? '';
  }

  ngOnInit(){
    let userName = localStorage.getItem('userName')?? '';
   }
   ngViewInit(){
    let userName = localStorage.getItem('userName')?? '';
   }

}
