import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  if (1 > 2) {
    return true; //kiểm tra điều kiện, đúng thì return true -> cho phép truy cập
  }

  return false; //return false -> không cho truy cập
};
