import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GetItemsService} from "../services/get-items.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  passwordsConfirm = true

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    surname: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^ ]+@[^ ]+\\.[a-z]{2,6}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{6,}$")
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{6,}$")
    ])
  })

  constructor(private router:Router,public serviceItem: GetItemsService) {
  }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls
  }

  submit() {
    this.confirmPassword();
    localStorage.setItem('name' , this.f['name'].value);
    localStorage.setItem('surname' , this.f['surname'].value);
    localStorage.setItem('email' , this.f['email'].value);
    localStorage.setItem('password' , this.f['password'].value);
    this.serviceItem.getSignUpData()

    if (this.form.valid && this.passwordsConfirm) {
      this.form.reset()
      this.router.navigate(['/'])
    }
  }


  selectMail() {
    let select = document.getElementById('select1') as HTMLInputElement;
    this.f['email'].setValue(select.value.toString())
  }

  selectPassword() {
    let select = document.getElementById('select2') as HTMLInputElement;
    this.f['password'].setValue(select.value.toString())
  }


  confirmPassword() {
    if (this.f['password'].value === this.f['confirmPassword'].value) {
      this.passwordsConfirm = true
    }
    else if (this.f['password'].value !== this.f['confirmPassword'].value) {
      this.passwordsConfirm = false
    }
  }

  back() {
    this.router.navigate(['/login'])
  }
}
