import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <div class="container">
      <h1 class="display-4">Databinding</h1>
      <h3>Oneway binding</h3>
      <p>
        1. Interpolation (binding dữ liệu từ model sang view thông qua thuộc
        tính với dấu ngoặc nhọn ) => dùng cho innerHTML của thẻ
      </p>
      <p>Tiêu đề :{{ title }}</p>
      <p>2. Property binding =>thường dùng cho thẻ input</p>
      <div [innerHTML]="title"></div>
      <input [value]="title" />
      <p>
        3. Event binding (thay đổi dự liệu trên giao diện thông qua xử lý thao
        tác từ người dùng)
      </p>
      <div class="form-group">
        <p>Tiêu đề</p>

        <input class="form-control w-25" #tagInput />
        TEMPLATE VARIABLE
        <button (click)="changeTitle(tagInput.value)">Change title</button>
      </div>
      <h3>Two binding (binding dữ liệu 2 chiều)</h3>
      <input class="form-control" [(ngModel)]="title" />
      <!-- <input class="form-control" (keyup)="title"> -->
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>image</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
        </thead>
        <tbody>
          <tr *ngFor="let product of arrProduct">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td><img [src]="product.img" width="50" height="50" /></td>
            <td>{{ product.price }}</td>
            <td><input [(ngModel)]="product.quantity"></td>
            <td>{{ product.price *product.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class DataBindingComponent implements OnInit {
  //MVVM
  //Dữ liệu muốn hiển thị được lên giao diện thì phải là thuộc tính của component
  title: string = 'abc';
  arrProduct: Product[] = [
    { id: '1', name: 'IphoneX', price: 1000, img: 'https://picsum.photos/id/237/200/300', quantity: 1 },
    { id: '1', name: 'IphoneX', price: 1000, img: 'https://picsum.photos/id/237/200/300', quantity: 1 },
    { id: '1', name: 'IphoneX', price: 1000, img: 'https://picsum.photos/id/237/200/300', quantity: 1 },
  ];
  constructor() {}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
  ngOnInit() {}
}
interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}
