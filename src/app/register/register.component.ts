import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {
    this.authService.register({ username: this.username, password: this.password }).subscribe(
      response => {
        alert('Đăng ký thành công');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error during registration:', error);
        alert('Đã xảy ra lỗi khi đăng ký');
      }
    );
  }
}
