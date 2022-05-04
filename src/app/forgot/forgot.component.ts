import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GetItemsService} from "../services/get-items.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^ ]+@[^ ]+\\.[a-z]{2,6}|\\+994(7\\d|8\\d|9\\d)\\d{9}|\\+994\\d{9}$'),
    ]),
  })

  constructor(private router: Router, private getOtp: GetItemsService) {
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls
  }

  submit() {
    if ((this.f['email'].valid || this.f['email'].value.includes('+994')) && !this.f['email'].value.includes('@')) {
      this.router.navigate(['otp-page'])
    } else if (this.f['email'].valid && this.f['email'].value.includes('@')) {
      console.log('send message to mail')
    }
  }

  back() {
    this.router.navigate(['/login'])
  }
}
