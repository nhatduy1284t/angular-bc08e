import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ngContent',
  template: `
    <nav class="nav justify-content-start bg-dark text-white p-2">
      <a class="active" href="#">Active link</a>
      <a href="#">Link</a>
      <a class="disabled" href="#">Disabled link</a>
    </nav>
  `,
})
export class DemoNgContent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
