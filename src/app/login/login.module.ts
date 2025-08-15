import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { SingUpComponent } from "./signUp/singup.component";


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Login",
      urls: [{ title: "Login", url: "/login" }, { title: "login" }],
    },
    component: LoginComponent,
  },
  {
    path: "signUp",
    data: {
      title: "SignUp",
      urls: [{ title: "SignUp", url: "/signUp" }, { title: "Signup" }],
    },
    component: SingUpComponent,
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
    SingUpComponent
  ],
})
export class LoginModule {}
