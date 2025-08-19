import { Component, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // switch between login/signup
  isLoginMode: boolean = true;

  // form models
  loginData = { username: '', password: '' };
  signupData = { username: '', email: '', password: '' };

  constructor(private router: Router) {}

  // Dummy admin login
  login() {
    if (this.loginData.username === 'admin' && this.loginData.password === 'admin123') {
      alert('Admin login successful ✅');
      this.router.navigate(['/admin/dashboard']);   // redirect after login
    } else {
      alert('Invalid login ❌');
    }
  }

  signup() {
    console.log('User registered:', this.signupData);
    alert('Signup successful ✅, you can now login!');
    this.isLoginMode = true; // go back to login form
  }

}
