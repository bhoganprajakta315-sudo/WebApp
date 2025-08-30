import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { TeacherListComponent } from "./teacherList/teacherList.component";
import { StudentListComponent } from "./studentList/studentList.component";


const routes: Routes = [
  {
    path: "dashboard",
    data: {
      title: "Admin",
      urls: [{ title: "Admin", url: "/admin/dashboard" }, { title: "Admin" }],
    },
    component: AdminComponent,
  },
  {
    path: "teacherList",
    data: {
      title: "TeacherList",
      urls: [{ title: "TeacherList", url: "/teacherList" }, { title: "TeacherList" }],
    },
    component: TeacherListComponent,
  },
  {
    path: "studentList",
    data: {
      title: "StudentList",
      urls: [{ title: "StudentList", url: "/studentList" }, { title: "StudentList" }],
    },
  component:StudentListComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TeacherListComponent,
    AdminComponent,
    StudentListComponent
  ],
})
export class AdminModule {}
