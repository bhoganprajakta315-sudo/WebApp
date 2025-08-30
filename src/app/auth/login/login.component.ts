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
  loginData = { username: '', password: '' , role: ''};
  signupData = { username: '', email: '', password: '' };

  constructor(private router: Router) {}

  // Dummy admin login
  login() {
    localStorage.clear();

    if (this.loginData.username === 'admin' && this.loginData.password === 'admin123') {
      alert('Admin login successful ✅');      
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin/dashboard']);   // redirect after login
    }
     else if(this.loginData.username === 'student' && this.loginData.password === 'admin123') {
      alert('student login successful ✅');      
      localStorage.setItem('role', 'student');
      this.router.navigate(['/student/dashboard']);   // redirect after login
    }
     else if (this.loginData.username === 'teacher' && this.loginData.password === 'admin123') {
      alert('Teacher login successful ✅');      
      localStorage.setItem('role', 'teacher');
      this.router.navigate(['/teacher/dashboard']);   // redirect after login
    }
     else {
      alert('Invalid login ❌');
      window.location.reload();
    }
  }

  signup() {
    console.log('User registered:', this.signupData);
    alert('Signup successful ✅, you can now login!');
    this.isLoginMode = true; // go back to login form
  }

}
