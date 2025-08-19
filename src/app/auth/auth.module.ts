import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { NgbdAlertBasicComponent } from "../component/alert/alert.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "login",
      urls: [{ title: "Login", url: "/login" }, { title: "Login" }],
    },
    component: LoginComponent,
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
    LoginComponent,
    AuthComponent,
    
  ],
})
export class AuthModule {}
