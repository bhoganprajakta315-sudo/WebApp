import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface TeacherList {
  uname: string;
  gmail: string;
  tclass: string;
  subject: string;
  gender: 'male' | 'female';
  image?: string;
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacherList.component.html'
})
export class TeacherListComponent {
  topSelling: TeacherList[] = [];
  teacherForm: FormGroup;
  showModal = false;
  editIndex: number | null = null; // track index of teacher being edited

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      uname: ['', Validators.required],
      gmail: ['', [Validators.required, Validators.email]],
      tclass: ['', Validators.required],
      subject: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  openModal() {
    this.showModal = true;
    this.editIndex = null; // Reset edit index
    this.teacherForm.reset();
  }

  closeModal() {
    this.showModal = false;
  }

  saveTeacher() {
    if (!this.teacherForm.valid) {
      alert('Please fill all required fields!');
      return;
    }

    const teacher = this.teacherForm.value;
    teacher.image = teacher.gender === 'female' 
      ? 'assets/images/users/user1.jpg' 
      : 'assets/images/users/user4.jpg';

    if (this.editIndex !== null) {
      // Update existing teacher
      this.topSelling[this.editIndex] = teacher;
      alert('Teacher updated successfully!');
    } else {
      // Add new teacher
      this.topSelling.push(teacher);
      alert('New teacher added successfully!');
    }

    this.closeModal();
  }

  editTeacher(index: number) {
    const teacher = this.topSelling[index];
    this.teacherForm.patchValue(teacher);
    this.editIndex = index;
    this.showModal = true;
  }

  deleteTeacher(index: number) {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.topSelling.splice(index, 1);
    }
  }
}
