import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDirectiveComponent } from './BaiTapDirective.component';
import { BaiTapQuanLySanPham } from './BaiTapQuanLySanPham.component';
import { DemoNgContent } from './DemoNgContent.component';
import { DirectiveComponent } from './Directive.component';



@NgModule({
    imports: [FormsModule,CommonModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent,DemoNgContent,BaiTapDirectiveComponent,BaiTapQuanLySanPham],
    providers: [],
})
export class DirectiveModule { }
