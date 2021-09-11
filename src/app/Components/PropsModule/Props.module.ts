import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './DemoInput/Product.component';
import { ProductListComponent } from './DemoInput/ProductList.component';

@NgModule({
  declarations: [ProductComponent,ProductListComponent],
  imports: [CommonModule,FormsModule],
  exports: [ProductListComponent],
})
export class PropsModule {}
