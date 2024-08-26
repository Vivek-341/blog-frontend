import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface post {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-editpost',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './editpost.component.html',
  styleUrl: './editpost.component.css'
})
export class EditpostComponent {

  title:string = '';
  content :string= '';
  Title:string = '';
  Content :string= '';
  post: post[] = [];
  
  constructor(private postsservice: PostsService,private fb: FormBuilder,private router:ActivatedRoute) {}

  editForm = this.fb.group({
    id: [-1, Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  })
  
  ngOnInit() {
    this.postsservice.get(this.router.snapshot.params['id']).subscribe((data:any) => {
      this.post = data;
      this.title = this.post[0].title;
      this.content = this.post[0].content;
      console.log(this.title);
      console.log(this.content);
      console.log("THis is from edit post",this.post);
      console.log(this.postsservice.get(this.router.snapshot.params['id']))
      this.editForm = this.fb.group({
        id: [this.post[0].id, Validators.required],
        title: [this.title, Validators.required],
        content: [this.content, Validators.required],
      })
    })
    
  }

  update() {
    console.log(this.editForm.value);
    this.postsservice.edit(this.editForm.value)
    
  }
  

}
