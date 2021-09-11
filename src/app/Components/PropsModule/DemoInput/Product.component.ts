import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: ` <div class="card text-light">
    <img [src]="userInput.avatar" alt="..." />
    <div class="card-body bg-dark">
      <p>{{userInput.userName}}</p>
      <p>{{userInput.email}}</p>
    </div>
  </div>`,
})
export class ProductComponent implements OnInit {
  //Input dùng để nhận giá trị tham số  tại nơi sử dụng thẻ này
 @Input('userInput') userInput!:User;
  constructor() {}

  ngOnInit() {}
}
interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}
1;
