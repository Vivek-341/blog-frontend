import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { AfterheaderComponent } from '../afterheader/afterheader.component';

interface post {
  id: number;
  title: string;
  content: string;
}
interface comment {
  id: number;
  description: string;
  modified_date: string;
  create_by: string;
}

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink,RouterModule,RouterOutlet,NgForOf,AfterheaderComponent],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css'
})
export class BlogpostComponent {

  title:string = '';
  content :string= '';
  Title:string = '';
  Content :string= '';
  post: post[] = [];
  comments:comment[]=[];
  userName = localStorage.getItem('userName')?? '';
  
  constructor(private postsservice: PostsService,private fb: FormBuilder,private router:ActivatedRoute, private commentservice:CommentsService) {}

  viewForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  })
  
  ngOnInit() {
    let blogId=this.router.snapshot.params['id'];
    console.log(blogId);
    // this.postsservice.get(blogId).subscribe((data:any) => {
    //   this.post = data;
    //   this.title = this.post[0].title;
    //   this.content = this.post[0].content;
    //   // this.viewForm = this.fb.group({
    //   //   title: [this.title, Validators.required],
    //   //   content: [this.content, Validators.required],
    //   // })
    // })
    this.postsservice.get(blogId).subscribe((data:any) => {
      this.title = data.title;
      this.content = data.content;
      console.log(this.title);
      console.log(this.content);
      this.viewForm = this.fb.group({
        title: [this.title, Validators.required],
        content: [this.content, Validators.required],
      })
    })
    // this.commentservice.getall(blogId).subscribe((data:any) => {
    //   this.comments = data;
    //   console.log(this.comments);
    // })
  }

  // submit(){
  //   console.log(this.viewForm.value);
  //   this.commentservice.add(this.viewForm.value)
  // }

  // delete(id:any){
  //   this.commentservice.delete(id);
  // }
}
