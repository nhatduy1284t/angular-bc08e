import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-qlsp',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header bg-dark text-white">Thêm sản phẩm</div>
        <div class="card-body">
          <div class="form-group">
            <p>Mã sản phẩm</p>
            <input class="form-control" [(ngModel)]="sanPham.maSanPham"/>
          </div>
          <div class="form-group">
            <p>Tên sản phẩm</p>
            <input class="form-control" [(ngModel)]="sanPham.tenSanPham"/>
          </div>
          <div class="form-group">
            <p>Giá</p>
            <input class="form-control"[(ngModel)]="sanPham.gia" />
          </div>
        </div>
        <div class="card-footer text-left">
          <button class="btn btn-outline-danger" (click)="themSanPham(sanPham)">Thêm sản phẩm</button>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-header bg-dark text-white font-weight-bold">
          Danh sách sản phẩm
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              <tr *ngFor="let item of mangSanPham" [ngClass]="{'bg-success':Number(item.maSanPham)%2===0,'bg-warning':Number(item.maSanPham)%2!==0}">
                  <td>{{item.maSanPham}}</td>
                  <td>{{item.tenSanPham}}</td>
                  <td>{{item.gia}}</td>
                  <td><img [src]="item.hinhAnh" style="width:50px"></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class BaiTapQuanLySanPham implements OnInit {
    sanPham:SanPham = {maSanPham:'',tenSanPham:'',gia:0,hinhAnh:''}
    mangSanPham:SanPham[] = [
        {maSanPham:'1',tenSanPham:'AAA',gia:1000,hinhAnh:'https://i.pravatar.cc?u=AAA'},
        {maSanPham:'2',tenSanPham:'BBB',gia:1000,hinhAnh:'https://i.pravatar.cc?u=BBB'},
        {maSanPham:'3',tenSanPham:'CCC',gia:1000,hinhAnh:'https://i.pravatar.cc?u=CCC'},
        {maSanPham:'4',tenSanPham:'DDD',gia:1000,hinhAnh:'https://i.pravatar.cc?u=DDD'}
    ]
    themSanPham(sanPham:SanPham) {
        let sanPhamCanThem:SanPham={...sanPham,hinhAnh:`https://i.pravatar.cc?u=${sanPham.tenSanPham}`};
        ;
        this.mangSanPham.push(sanPhamCanThem);
    }
    Number (value:string) {
        return Number(value);
    }
  constructor() {}

  ngOnInit() {}
}

interface SanPham {
    maSanPham:string;
    tenSanPham:string;
    hinhAnh:string;
    gia:number;
}