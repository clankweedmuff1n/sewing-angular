import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../../environments/environment";
import {User} from "../../../models/User";
import {RegistrationRequest} from "../../../models/RegistrationRequest";
import {AuthenticationResponse} from "../../../models/AuthenticationResponse";
import {AuthenticationRequest} from "../../../models/AuthenticationRequest";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  getUserSelf(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/me`).pipe(map(res => res));
  }

  updateUserSelf(updates: { name?: string; email?: string }): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/me`, updates).pipe(map(res => res));
  }

  register(data: RegistrationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/auth/register`, data).pipe(map(res => res));
  }

  login(data: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http
      .post<AuthenticationResponse>(`${this.apiUrl}/auth/authenticate`, data)
      .pipe(map(res => res));
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, { email: email }, { responseType: 'text' });
  }

  resetPassword(data: { email: string; newPassword: string; token: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, data, { responseType: 'text' });
  }

  changePassword(data: { oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/change-password`, data, { responseType: 'text' });
  }
}
