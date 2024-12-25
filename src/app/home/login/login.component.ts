import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = ''

  constructor(private router: Router){}

    login() {
      if(this.username === 'admin' && this.password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/about']);
      }else {
        this.errorMessage = 'Invalid username or password, please try again'
      }
    }



  }


