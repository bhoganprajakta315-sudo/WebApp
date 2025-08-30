import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { TeacherComponent } from "./teacher.component";
import { TeacherStudentListComponent } from "./tearcher_studentlist/teacher-studentlist.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "dashboard",
    data: {
      title: "Teacher",
      urls: [{ title: "Teacher", url: "/teacher/dashboard" }, { title: "Teacher" }],
    },
    component: TeacherComponent,
  },
    {
    path: "studentlist",
    data: {
      title: "Teacher",
      urls: [{ title: "Teacher", url: "/teacher/studentlist" }, { title: "Teacher" }],
    },
    component: TeacherStudentListComponent ,
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
    TeacherComponent,
    TeacherStudentListComponent
  ],
})
export class TeacherModule {}
