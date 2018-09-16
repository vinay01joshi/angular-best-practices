import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.customerForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      sendCatalog: true,
    });
  }

  populateTestData(): void {
    this.customerForm.setValue({
      firstname: 'Vinay',
      lastname: 'Joshi',
      email: 'vinay01joshi@gmail.com',
      sendCatalog: false
    });
  }

  save() {
    console.log('Save called !');
  }

}
