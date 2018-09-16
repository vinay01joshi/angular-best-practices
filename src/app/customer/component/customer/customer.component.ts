import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Customer } from '../../model/customer';

// function ratingRange(c:AbstractControl): {[key:string]:boolean} | null {
//   if(c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5 )){
//     return {'range': true};
//   }
//   return null;
// }

// factory method for rating range.
function ratingRange(min: number, max: number) : ValidatorFn {
  return (c:AbstractControl): {[key:string]:boolean} | null => {
    if(c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max )){
      return {'range': true};
    }
    return null;
  }    
}

//factory method for the mating email
function emailMather(c:AbstractControl) {
  let emailControl = c.get('email');
  let confirmEmailControl = c.get('confirmEmail');

  if(emailControl.pristine || confirmEmailControl.pristine){
    return null;
  }

  if(emailControl.value === confirmEmailControl.value){
    return null;
  }

  return {'match' : true};
}


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
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: ['',[Validators.required,Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        confirmEmail:['',[Validators.required]],
      },{validator: emailMather}),     
      sendCatalog: true,
      phone:[''],
      notification:['email'],
      rating:['', ratingRange(1,5)]
    });

    this.customerForm.get('notification').valueChanges.subscribe(value => console.log(value));
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstname: 'Vinay',
      lastname: 'Joshi',
      email: 'vinay01joshi@gmail.com',
      sendCatalog: false
    });
  }

  save() {
    console.log('Save called !');
  }

  setNotification(notifyVia:string):void {
    const phoneControl = this.customerForm.get('phone');
    if(notifyVia === 'text'){
      phoneControl.setValidators(Validators.required);
    }else{
      phoneControl.clearValidators()
    }

    phoneControl.updateValueAndValidity();
  }

}
