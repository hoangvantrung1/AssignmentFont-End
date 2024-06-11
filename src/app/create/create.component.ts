import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Project,ProjectModel } from '../model/project.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],  //import FormsModule để sử dụng được form
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  project:ProjectModel = {name:'',description:'',dateOfStart:''};
  constructor(
    private http:HttpClient, //dùng để gửi http request
    private router:Router,
    private authService: AuthService
  ) {}

  onCreate(Project: any): void { 
    let apiUrl = 'http://localhost:3000/projects'; //khai báo apiUrl
    this.project.dateOfStart = new Date().toISOString();
    console.log('Date of start:', this.project.dateOfStart);


    //this.HttpClient.method(apiUrl, data).subscribe( res => {})
    this.http.post(apiUrl,Project).subscribe( res => {
      if (res) {
        alert('Thêm mới thành công');
        //điều hướng ng dùng về trang danh sách
        this.router.navigate(['/list']);
      }
    })   
    if (this.authService.isTeamLeader()) {
      // Logic cho trường hợp người dùng là trưởng nhóm
      console.log('Team Leader can create project');
    } else {
      // Logic cho trường hợp người dùng không phải là trưởng nhóm
      console.log('Employee cannot create project');
    }
  }
}
