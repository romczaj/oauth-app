import {Component, inject} from '@angular/core';
import {BackendApiService} from "../backend-api/backend-api.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  private readonly backendApiService = inject(BackendApiService);

  messages: string[] = []

  getMessage() {
    this.backendApiService.getMessage().subscribe({
        next: result => this.messages.push(result.message)
      }
    )
  }

}
