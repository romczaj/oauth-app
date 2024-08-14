import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const requiredRoles = next.data['roles'];
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    return this.oidcSecurityService.checkAuth().pipe(
      switchMap(loginResponse => {
        if (loginResponse.isAuthenticated) {
          return this.oidcSecurityService.getPayloadFromAccessToken().pipe(
            map(decodedToken => {
              const userRoles = decodedToken.roles ? decodedToken.roles.map((r: string) => r.toLowerCase()) : [];
              const userHasPermission = requiredRoles.every((role) => userRoles.includes(role));

              if (userHasPermission) {
                console.log('User has permission')
                return true;
              } else {
                console.log('User does not have permission')
                return false;
              }
            })
          );
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      }),
      catchError(e => {
        console.log('Error in AuthGuard', e);
        return of(false);
      })
    );
  }
}
