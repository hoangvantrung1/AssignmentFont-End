import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list: any = [];
  constructor(private thaivm2:HttpClient) {}

  ngOnInit(): void {
    //B1: khai báo API Url:
    let apiUrl = 'http://localhost:3000/projects';
    

    //B2: gửi http request lên json-server
    //this.HttpClient.method(apiUrl).subscribe( res => {})
    this.thaivm2.get(apiUrl).subscribe( res => {
      //res là dữ liệu json-server trả về
      this.list = res; //gán giá trị json-server trả về cho biến list
      console.log(this.list);
    })
  }

  onDelete(id: any): void {
    if(confirm('Bạn có chắc ko?')) { //popup confirm
      let apiUrl = 'http://localhost:3000/projects/'+id;
      this.thaivm2.delete(apiUrl).subscribe(res => {
        //C1: gán lại giá trị của list: this.list = 
        //C2: gọi hàm ngOnInit() để cập nhật lại danh sách;
        this.ngOnInit();
      })
    }
  }
}
