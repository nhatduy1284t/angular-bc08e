import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bai-tap-4',
  template: `
    <div class="container">
      <div class="w-50">
        <h1>Bài tập 4</h1>
        <div class="form">
          <div class="form-group">
            <p class="m-0">Email</p>
            <input class="form-control" [(ngModel)]="email" />
          </div>
          <div class="form-group">
            <p class="m-0">FullName</p>
            <input #inputFullName class="form-control" />
          </div>
          <button (click)="changeFullName(inputFullName.value)">Submit</button>
        </div>
        <p class="text-success">Email:{{ email }}</p>

        <p>
          FullName:<span class="text-warning"> {{ fullName }}</span>
        </p>

        <input class="form-control w-25" [(ngModel)]="number" />
        <div class="alert alert-success">
          <p *ngIf="number % 2 == 0">Số chẵn</p>
          <p *ngIf="number % 2 != 0">Số lẻ</p>
        </div>
      </div>
    </div>
  `,
})
export class BaiTap4Component implements OnInit {
  fullName: string = '';
  email: number = 12;
  number: number = 3;
  constructor() {}
  changeFullName = (value: string) => {
    this.fullName = value;
  };
  ngOnInit() {}
}
