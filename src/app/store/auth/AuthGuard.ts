import {inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthState} from "./state/Auth.state";
import {Store} from "@ngxs/store";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  constructor(private router: Router, private store: Store) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated: boolean = this.store.selectSnapshot(AuthState.isAuthenticated);
    if (!isAuthenticated) this.router.navigateByUrl("profile/login");
    return isAuthenticated;
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
