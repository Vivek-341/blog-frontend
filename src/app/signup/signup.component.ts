import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private userservice: UsersService, private fb: FormBuilder) { }

  signupForm = this.fb.group({

    userName: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })

  register() {
    this.userservice.add(this.signupForm.value);
  }
}
