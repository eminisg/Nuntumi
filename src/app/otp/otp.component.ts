import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
   let firsInput = document.getElementById('firstInput') as HTMLInputElement
    firsInput.focus()
  }

  nextIput(current: any, next: any) {
    if (current.value.length === 1) {
      next.focus()
    }
  }

  prevInput(prev: any, current: any) {
    if (prev.value.length === 1) {
      current.value = ''
      prev.focus()
    }
  }
}
