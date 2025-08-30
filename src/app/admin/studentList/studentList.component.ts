import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface StudentList {
  prn: string;
  name: string;
  sclass: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './studentList.component.html'
})
export class StudentListComponent {
  students: StudentList[] = [];
  studentForm: FormGroup;
  showModal = false;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      prn: ['', Validators.required],
      name: ['', [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+( [a-zA-Z]+)*$/)
      ]],
      sclass: ['', Validators.required]
    });
  }

  openModal() {
    this.showModal = true;
    this.editIndex = null;
    this.studentForm.reset();
  }

  closeModal() {
    this.showModal = false;
  }

  saveStudent() {
    if (!this.studentForm.valid) {
      alert('Please fill all required fields correctly! Full name is required.');
      return;
    }

    const student = this.studentForm.value;

    if (this.editIndex !== null) {
      this.students[this.editIndex] = student;
      alert('Student updated successfully!');
    } else {
      this.students.push(student);
      alert('New student added successfully!');
    }

    this.closeModal();
  }

  editStudent(index: number) {
    const student = this.students[index];
    this.studentForm.patchValue(student);
    this.editIndex = index;
    this.showModal = true;
  }

  deleteStudent(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.students.splice(index, 1);
    }
  }
}
