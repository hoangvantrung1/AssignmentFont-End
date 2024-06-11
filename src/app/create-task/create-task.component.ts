import { Component } from '@angular/core';
import { Task } from '../model/task.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  task: Task = {
    name: '',
    description: '',
    priority: '',
    assignedTo: '',
    status: ''
  };
  constructor(private http: HttpClient, private router: Router) {}

  onCreateTask(): void {
    let apiUrl = 'http://localhost:3000/task';
    // Gửi yêu cầu POST để tạo task mới
    this.http.post(apiUrl, this.task).subscribe((res: any) => {
      if (res) {
        alert('Task tạo thành công');
        this.router.navigate(['/task']);
      }
    });
  }
}
