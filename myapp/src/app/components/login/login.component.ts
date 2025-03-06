import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted');
    if (this.authService.login(this.username, this.password)) {
      console.log('Redirecting to welcome');
      this.router.navigate(['/welcome']);
    } else {
      console.log('Login failed');
      this.errorMessage = 'Error: Invalid Username or Password';
    }
  }
}