import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
    <div class="container" style="margin-bottom:50px">
      <h3 class="display-4">Structural (directive angular cung cấp)</h3>
      <h3>*ngIf</h3>
      <nav class="nav bg-dark text-white">
        <a
          *ngIf="!isLogin; else tempLogin"
          class="nav-link active text-white"
          href="#"
          (click)="login()"
          >Login</a
        >
        <!-- <a *ngIf="isLogin" class="nav-link active text-white" href="#">Hello ! {{userName}}</a>       -->
      </nav>
      <ng-template #tempLogin>
        <a *ngIf="isLogin" class="nav-link active text-white" href="#"
          >Hello ! {{ userName }}</a
        >
      </ng-template>
      <hr />
      <div class="form-group">
        <p>Nhập số</p>
        <input class="form-control w-25" [(ngModel)]="number" />
      </div>
      <div class="alert alert-success">
        <p *ngIf="number % 2 == 0">Số chẵn</p>
        <p *ngIf="number % 2 != 0">Số lẻ</p>
      </div>
      <h3>*ngSwitchCase</h3>

      <select [(ngModel)]="colors" class="form-control w-25">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      <div [ngSwitch]="colors">
        <p style="color:red" *ngSwitchCase="'red'">Red</p>
        <p style="color: green;" *ngSwitchCase="'green'">Green</p>
        <p style="color: blue;" *ngSwitchCase="'blue'">Blue</p>
        <p style="color: orange;" *ngSwitchCase="'orange'">Orange</p>
      </div>
      <hr />
      <h3>*ngFor</h3>
      <div class="row">
        <div class="col-4" *ngFor="let user of arrUser; index as index">
          <div class="card">
            <img [src]="user.avatar" alt="..." />
            <div class="card-body">
              <p>ID:{{ index + 1 }}</p>
              <p>userName :{{ user.userName }}</p>
              <p>Password :{{ user.password }}</p>
              <p>Email :{{ user.email }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-4" *ngFor="let user of arrUser; let index = index;">
          <div class="card">
            <img [src]="user.avatar" alt="..." />
            <div class="card-body">
              <p>ID: {{ index + 1 }}</p>
              <p>userName: {{ user.userName }}</p>
              <p>Password: {{ user.password }}</p>
              <p>Email: {{ user.email }}</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="container">
      <app-demo-ngContent>
        <img class="logo" src="https://" alt="..." />
      </app-demo-ngContent>
      <hr />

      <h3>[ngClass]</h3>
      <p [ngClass]="{ 'font-chu': fontChu, 'mau-chu': mauChu }">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veniam
        fuga et voluptatem, adipisci tempore labore ullam repudiandae suscipit
        perferendis.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>userName</th>
            <th>password</th>
            <th>email</th>
            <th>avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr
            [ngClass]="{ 'bg-dark text-white': index % 2 === 0 }"
            *ngFor="let user of arrUser; let index = index"
            
          >
            <td>{{ user.userName }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.avatar }}</td>
          </tr> -->
          <tr [ngClass]="{'bg-dark text-white':index%2===0}" *ngFor="let user of arrUser,let index = index">
            <td>{{ user.userName }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.avatar }}</td>
          </tr>
        </tbody>
      </table>
      <div
        [ngStyle]="{ 'background-image': 'url(' + backgroundImg + ')' }"
        style="height:50px"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum
        repellendus natus et quis ducimus quia consequatur? Dicta, consequuntur
        magnam?
      </div>
      <p [ngStyle]="{ 'font-size': fontSize + 'px' }">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        aperiam doloremque soluta, quia repellendus qui voluptatibus sequi. Nam,
        sequi consectetur.
      </p>
      <button (click)="tangGiamFont(true)">+</button>
      <button (click)="tangGiamFont(false)">-</button>
      <h3>Bài tập login</h3>
      <app-bt-directive></app-bt-directive>
      <app-bt-qlsp></app-bt-qlsp>
    </div>
  `,
  styles: [
    `
      .mau-chu {
        color: red;
      }
      .font-chu {
        font-weight: bold;
      }
    `,
  ],
})
export class DirectiveComponent implements OnInit {
  fontSize: number = 16;
  backgroundImg: string = 'https://picsum.photos/200/200';
  mauChu: boolean = true;
  fontChu: boolean = true;
  arrUser: User[] = [
    {
      userName: 'sideptrai',
      password: '12/12/2000',
      email: 'si3d@gmail.com',
      avatar: 'https://i.pravatar.cc?u=si',
    },
    {
      userName: 'khai',
      password: '123456',
      email: 'khai@gmail.com',
      avatar: 'https://i.pravatar.cc?u=khai',
    },
    {
      userName: 'luandeptrai',
      password: '21/12/2000',
      email: 'luan3d@gmail.com',
      avatar: 'https://i.pravatar.cc?u=luan',
    },
  ];
  colors: string = 'red';
  number: number = 3;
  userName: string = 'sideptrai';
  isLogin: boolean = false;
  tangGiamFont(tangGiam: boolean) {
    if (tangGiam) {
      this.fontSize += 2;
    } else {
      this.fontSize -= 2;
    }
  }
  login() {
    this.isLogin = true;
  }
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
