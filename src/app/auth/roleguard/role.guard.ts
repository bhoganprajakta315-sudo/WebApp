import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';

export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const expectedRole = route.data['role']; // from route config
  const userRole = localStorage.getItem('role'); // from login/localStorage

  if (userRole && userRole === expectedRole) {
    return true;
  }
  return router.parseUrl('/login'); // redirect if not authorized
};

