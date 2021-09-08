import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContents } from './BTContents.component';
import { BTFooter } from './BTFooter.component';
import { BTHeader } from './BTHeader.component';
import { BTSidebar } from './BTSideBar.component';

@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    BTHeader,
    BTContents,
    BTSidebar,
    BTFooter,
  ], //Chứa các component thuộc module này
  imports: [CommonModule], //nơi import các module khác cho ứng dụng
  exports: [BaiTapLayoutComponent], //Kết quả cần xuất ra
})
export class BaiTapLayoutModule {}
