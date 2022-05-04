import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements OnInit {
  @Input('imageArray') imageArray: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('add', this.imageArray)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
