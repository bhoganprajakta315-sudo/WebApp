import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { TeacherListComponent } from "./teacher/teacherList.component";

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
      title: "teacherList",
      urls: [{ title: "TeacherList", url: "/teacherList" }, { title: "TeacherList" }],
    },
    component: TeacherListComponent,
  },
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
    AdminComponent
  ],
})
export class AdminModule {}
