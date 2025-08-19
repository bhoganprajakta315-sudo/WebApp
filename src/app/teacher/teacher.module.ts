import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { TeacherComponent } from "./teacher.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Teacher",
      urls: [{ title: "Teacher", url: "/teacher" }, { title: "Teacher" }],
    },
    component: TeacherComponent,
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
export class TeacherModule {}
