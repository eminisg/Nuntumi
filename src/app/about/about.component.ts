import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imageArray:any = [
    {path: 'assets/imgs/slider1.jpg'},
    {path: 'assets/imgs/slider2.jpg'},
    {path: 'assets/imgs/slider3.jpg'}]
  constructor() { }

  ngOnInit(): void {
    console.log(this.imageArray)

  }


}
