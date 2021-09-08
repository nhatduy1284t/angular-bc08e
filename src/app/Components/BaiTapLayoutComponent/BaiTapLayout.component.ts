import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-layout',
  template: `
    <div>
        Bài tập layout component
      <app-bt-header></app-bt-header>
      <div style="display:flex">
        <app-bt-contents style="width:40%"></app-bt-contents>
        <app-bt-sidebar style="width:60%"></app-bt-sidebar>
      </div>
      <app-bt-footer></app-bt-footer>
    </div>
  `,
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
