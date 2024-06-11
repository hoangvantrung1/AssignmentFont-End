// project.model.ts

// Interface định nghĩa cấu trúc của một dự án
export interface Project {
    name: string;
    description: string;
    dateOfStart: string;
  }
  
  // Class tương ứng nếu bạn muốn xử lý logic hoặc thêm các phương thức
  export class ProjectModel implements Project {
    constructor(public name: string, public description: string, public dateOfStart: string) {}
  }
  