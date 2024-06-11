import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; //nhúng thư viện
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'; //nhúng thư viện

@Component({
  selector: 'app-root', //meta-data
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//export class tenComponent
export class AppComponent {
  //properties + method: biến, hàm sử dụng trong component
  count = 0; //khởi tạo biến count = 0
  //khai báo hàm tăng giá trị của count
  //tenHam() {} không quy định dữ liệu trả về
  countClick() { 
    this.count = this.count + 1; //tăng giá trị của count lên 1 đơn vị
  }
  //tenHam(): kieuDuLieu {} có quy định dữ liệu trả về
  countClick2(): void {
    this.count = this.count + 1; //tăng giá trị của count lên 1 đơn vị
  }

  title = 'Assignment';
  email = 'trunghvph31947@fpt.edu.vn';

  info = {
    name: 'trung',
    gender: 'male',
    sdt: '0123456789',
  }
  name = 'trung';
}
