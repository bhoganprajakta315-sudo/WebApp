import { Component } from '@angular/core';

@Component({
  selector: 'app-teacherstudList',
  templateUrl: './teacher-studentlist.component.html',
})
export class TeacherStudentListComponent  {
  students = [
    { prn: '101', name: 'John Doe' },
    { prn: '102', name: 'Jane Smith' },
    { prn: '103', name: 'Amit Kumar' },
    { prn: '104', name: 'Priya Sharma' }
  ];
}
