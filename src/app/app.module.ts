import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTap4Module } from './Components/BaiTap4/BaiTap4.module';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.component';
import { PropsModule } from './Components/PropsModule/Props.module';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';


@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    BaiTap4Module,
    PropsModule
     //Nơi import các module khác của ứng dụng
  ],
  providers: [], //Nơi khai báo các service
  bootstrap: [AppComponent], //Nơi khai báo các chạy trên index Component <app-root></app-root> được trên index
})
export class AppModule {}
