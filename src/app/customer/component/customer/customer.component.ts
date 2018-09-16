import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),

    })
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
