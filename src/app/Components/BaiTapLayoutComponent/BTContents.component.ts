import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-contents',
  template: `
    <div class="bt-contents">
      Contents
    </div>
  `,
  styles : [
      `
      .bt-contents {
          background-color:yellow;
          height:150px
      }
      `
  ]
})
export class BTContents implements OnInit {
  constructor() {}

  ngOnInit() {}
}
