import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `
    <div class="bt-header" style="height:50px;backgroundColor:red">
        Header
    </div>
    `
})

export class BTHeader implements OnInit {
    constructor() { }

    ngOnInit() { }
}