import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GetItemsService} from "../services/get-items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^ ]+@[^ ]+\\.[a-z]{2,6}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{6,}$")
    ])
  })

  getInfo = false

  constructor(public serviceItem: GetItemsService,private router:Router) {
  }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls
  }

  submit() {

    // let sendEmailData = localStorage.setItem('existEmail',this.form.get('email')?.value)
    // let sendPasswordData = localStorage.setItem('existPassword',this.form.get('password')?.value)

    this.serviceItem.existEmail = this.f['email'].value
    this.serviceItem.existPassword = this.f['password'].value
    this.serviceItem.dataCheckM()
    this.router.navigate(['/home'])
  }

  // checkInputTouching() {
  //   let checked = false
  //   if ((this.f)['email'].value.length > 0 && (this.f)['password'].value.length > 0) {
  //    return checked = true
  //   }
  //   else {
  //     return checked = false
  //   }
  // }

  selectMail() {
    let select = document.getElementById('select1') as HTMLInputElement;
    this.f['email'].setValue(select.value.toString())
  }

  selectPassword() {
    let select = document.getElementById('select2') as HTMLInputElement;
    this.f['password'].setValue(select.value.toString())
  }

  getInfoFromBack() {

    setTimeout(()=> {
        this.getInfo = true
      },100
    )

  }
}
