import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: boolean) => {
        if (response) {
          alert('Đăng nhập thành công');
          this.router.navigate(['/list']);
        } else {
          alert('Tên đăng nhập hoặc mật khẩu không đúng');
        }
      },
      (error: any) => {
        console.error('Error during login:', error);
        alert('Đã xảy ra lỗi khi đăng nhập');
      }
    );
  }
}
