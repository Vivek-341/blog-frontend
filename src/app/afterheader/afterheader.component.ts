import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-afterheader',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterModule,FormsModule,CommonModule],
  templateUrl: './afterheader.component.html',
  styleUrl: './afterheader.component.css'
})
export class AfterheaderComponent {

  userName:string='';

  constructor(private router:Router) {
    this.userName = localStorage.getItem('userName')?? '';
    console.log("I am afterheader component constructor" + this.userName);
  }

  ngOnInit(){
    this.userName = localStorage.getItem('userName')?? '';
    console.log("I am afterheader component ngOnInit" + this.userName);
  }
  logout(){
    alert("Are you sure you want to logout?");
    localStorage.removeItem('userName');
    this.router.navigate(['/']);

  }
}
