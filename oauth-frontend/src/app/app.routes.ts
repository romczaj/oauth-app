import {Routes} from '@angular/router';
import {AuthGuard} from "./auth.guard";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    data: {roles: ['user']}
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: {roles: ['admin']}
  },
];
