import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user_profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user_profile.component.html',
  styleUrls: ['./user_profile.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any = {};

  ngOnInit(): void {
  
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
 
      this.user = {
        name: 'Prajakta Bhogan',
        email: 'bhoganprajakta@gmail.com',
        role: 'Student',
        department: 'MCA',
        contact: 8767783574,
        prn:2024075499,
        subject :'DA'
      };
    }
  }
}
