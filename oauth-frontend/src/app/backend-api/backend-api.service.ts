import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8090';

  notProtected(): Observable<Message> {
    return this.http.get<Message>(`${this.apiUrl}/not-protected-api/message`, {})
  }

  getMessage(): Observable<Message> {
    return this.http.get<Message>(`${this.apiUrl}/api/message`, {})
  }
}

export interface Message {
  message: string
}
