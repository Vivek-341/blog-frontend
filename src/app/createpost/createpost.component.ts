import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

interface post {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-createpost',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,ReactiveFormsModule],
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {

  post: post[] = [];
  constructor(private postsService: PostsService, private fb: FormBuilder) {
    
  }

  createForm = this.fb.group({

    title: ['', Validators.required],
    content: ['', Validators.required],


  });

  submit() {
    console.log(this.createForm.value);
    this.postsService.add(this.createForm.value)
  }

}
