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
  
  constructor(){
   let userName = localStorage.getItem('userName')?? '';
    console.log("I am home component constructor" + userName);
  }

  ngOnInit(){
    let userName = localStorage.getItem('userName')?? '';
     console.log("I am home component ngOnInit" + userName);
   }
   ngViewInit(){
    let userName = localStorage.getItem('userName')?? '';
     console.log("I am home component ngViewInit" + userName);
   }

}
