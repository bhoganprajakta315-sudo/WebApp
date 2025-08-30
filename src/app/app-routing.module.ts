import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/authLayout.component';
import { RoleGuard } from './auth/roleguard/role.guard';
import { FullComponent } from './layouts/full/full.component';
import { UserInfoComponent } from './user_profile/user_profile.component';

export const Approutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
   
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [RoleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
        canActivate: [RoleGuard],
        data: { role: 'teacher' }
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
        canActivate: [RoleGuard],
        data: { role: 'student' }
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
       {
    path: 'userprofile',
    loadComponent: () =>
      import('./user_profile/user_profile.component').then(m => m.UserInfoComponent)   // ✅ standalone
  },
     
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
