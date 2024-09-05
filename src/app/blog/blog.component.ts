import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CreatepostComponent } from '../createpost/createpost.component';
import { AfterheaderComponent } from '../afterheader/afterheader.component';


interface post {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule,RouterOutlet,CreatepostComponent,AfterheaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: post[] = [];
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getAll().subscribe((data:any) => {
      this.posts = data;
      console.log(this.posts);
    })
  }
  

  deletePost(post: post) {
    this.postsService.delete(post.id).subscribe();
    this.posts = this.posts.filter(p => p !== post);
  }

  edit(post: post) {
    // console.log(post);  
  }
  

}
