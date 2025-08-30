import { Component } from '@angular/core';

interface Teacher {
  uname: string;
  gmail: string;
  tclass: string;
  subject: string;
  image: string;
}

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
 
})
export class TlistComponent {
  topSelling: Teacher[] = [
    {
      uname: 'John Doe',
      gmail: 'john@gmail.com',
      tclass: '10th',
      subject: 'Mathematics',
      image: 'https://via.placeholder.com/45'
    }
  ];

  addTeacher() {
    const newTeacher: Teacher = {
      uname: 'New Teacher',
      gmail: 'newteacher@gmail.com',
      tclass: '11th',
      subject: 'English',
      image: 'https://via.placeholder.com/45'
    };
    this.topSelling.push(newTeacher);
    alert('New Teacher Added Successfully!');
  }
}
