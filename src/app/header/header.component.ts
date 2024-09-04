import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  userName:string='';

  constructor() { 
    console.log("I am header component from constructor");
  }

  ngOnInit(){
    this.userName = localStorage.getItem('userName')?? '';
    console.log("I am header component");
  }
  logout(){
    localStorage.removeItem('userName');
    window.location.reload();
    this.userName = '';
  }

}
