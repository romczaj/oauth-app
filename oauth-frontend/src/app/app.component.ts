import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);


  ngOnInit(): void {
    console.log(`OnInit AppComponent`)
    this.oidcSecurityService
      .checkAuth()
      .subscribe({
        next: value => console.log(`login response ${JSON.stringify(value)}`),
        complete: () => console.log('finish ngOnInit')
      });
  }
  title = 'oauth-frontend';

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }

  userDashboard() {
    this.router.navigate(['/user-dashboard']);
  }

  adminDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }

}
