import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { StudentComponent } from "./student.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Student",
      urls: [{ title: "Student", url: "/student" }, { title: "Student" }],
    },
    component: StudentComponent,
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
  ],
})
export class StudentModule {}
