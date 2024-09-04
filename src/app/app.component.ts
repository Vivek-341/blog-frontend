import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogComponent,RouterLink,RouterModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-frontend';
  
  constructor() {
    console.log("This is from app component");
  }

  ngOnInit(){
    console.log("I am app component");
  }
}
