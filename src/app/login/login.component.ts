import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Login';
  constructor(private logindata: FormBuilder,private loginservice: LoginService,private router:Router) { }
  loginForm = this.logindata.group({
    userName: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })
  validation() {
    if (this.loginForm.value.userName == '' || this.loginForm.value.password == '') {
      alert('Please enter username and password');
      return false;
    }
    return true;
  }

  login() {
    if(!this.validation()){
      return;
    }
    this.loginservice.login(this.loginForm.value).subscribe((data:any) => {
      console.log("Component",data);
      if(data.length==0){
        alert("Invalid username or password");
      }else{
        localStorage.setItem("userName",data[0].name);
        this.router.navigate(['/home']);
      }

    });
  }
}
