import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    console.log('Username:', username);
    console.log('Password:', password);
    if (username === 'admin' && password === '1234') {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      console.log('Login successful');
      return true;
    }
    console.log('Login failed');
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }


  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }
}