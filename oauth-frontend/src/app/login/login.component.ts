import {Component, inject, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    this.oidcSecurityService.authorize()
  }

  private readonly oidcSecurityService = inject(OidcSecurityService);

}
