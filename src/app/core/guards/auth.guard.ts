import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn) {
    router.navigate(['/']);
    return false;
  }

  // if (auth.role !== 'admin') {
  //   router.navigate(['/']);
  //   return false;
  // }

  return true;
};
