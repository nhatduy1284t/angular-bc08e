import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
//Sử dụng FormsModule cho 2waybinding
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,FormsModule],
  exports: [DataBindingComponent],
  declarations: [DataBindingComponent],

})
export class DataBindingModule {}
