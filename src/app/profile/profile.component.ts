import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName = localStorage.getItem('name');
  userSurname = localStorage.getItem('surname');
  userLink = ('@' + String(localStorage.getItem('name')).toLocaleLowerCase() + String(localStorage.getItem('surname')).toLocaleLowerCase())
  userProfileLink = (String(localStorage.getItem('name')).toLocaleLowerCase() + String(localStorage.getItem('surname')).toLocaleLowerCase() + '.com')

  constructor() { }

  ngOnInit(): void {
  }

}
