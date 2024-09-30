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
  _id: number;
  comments: string;
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
  post: post[] = [];
  comments:comment[]=[];
  userName = localStorage.getItem('userName')?? '';
  
  constructor(private postsservice: PostsService,private fb: FormBuilder,private router:ActivatedRoute, private commentservice:CommentsService) {}

  viewForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  })

  commentForm = this.fb.group({
    blogId: [this.router.snapshot.params['id'], Validators.required],
    comments: ['', Validators.required]
  })
  
  ngOnInit() {
    let blogId=this.router.snapshot.params['id'];
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
      this.viewForm = this.fb.group({
        title: [this.title, Validators.required],
        content: [this.content, Validators.required],
      })
    })
    this.commentservice.getall(blogId).subscribe((data:any) => {
      console.log(data);
      this.comments = data;
      console.log(this.comments)
      console.log(this.comments[0].comments);
      console.log(this.comments[0]._id);
      

      // this.comments = data;
      // this.comment=data.comments;
      // this.commentForm = this.fb.group({
      //   comment: [this.comment, Validators.required]
      // })
      // console.log(this.comments);
    })
  }

  submit(){
    alert("Thread added successfully.Refresh to see changes");
    console.log(this.commentForm.value);
    this.commentservice.add(this.commentForm.value);
    this.ngOnInit();
  }

  delete(id:any){
    alert("Thread deleted successfully.Refresh to see changes");
    console.log(id);
    this.commentservice.delete(id).subscribe();
    this.ngOnInit();
  }
  
}
