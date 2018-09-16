import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './component/customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerComponent],
  exports:[CustomerComponent]
})
export class CustomerModule { }
