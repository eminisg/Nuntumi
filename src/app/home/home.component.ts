import {Component, OnInit} from '@angular/core';
import {GetItemsService} from "../services/get-items.service";
import {GetImagesService} from "../services/get-images.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newItemsArr: string[] = []
  images!: string[]
  random = 0
  randomArray: number[] = []

  mailsArray:any[] = []
  titlesArray:any[] = []
  imagesArray: string[] = []
  textArray: string[] = []

  constructor(private getItems: GetItemsService, public imageService: GetImagesService,public router:Router,public route:ActivatedRoute) {
    this.showResult('Science')
  }

  ngOnInit(): void {
    this.newItemsArr = this.getItems.getTags.map(n => n.tag)
  }

  showResult(tag: string) {
    this.imageService.searchItem = tag
    this.imagesArray.length = 0
    this.mailsArray.length = 0
    this.randomArray.length = 0
    this.titlesArray.length = 0
    this.textArray.length = 0

    this.imageService.imagesGet().subscribe((response: any) => {
      this.images = response.hits.map((n: { webformatURL: string[]; }) => n.webformatURL);
      for (let i = 0; i < 4; i++) {
        this.random = Math.round(Math.random() * 19)
        this.randomArray.push(this.random)
        this.imagesArray.push(this.images[this.random])
      }
    })

    this.getItems.itemsGet().subscribe(response => {
      for (let i = 0; i < 4; i++) {
       this.mailsArray.push(response[this.randomArray[i]].email);
       this.titlesArray.push(response[this.randomArray[i]].name);
       this.textArray.push(response[this.randomArray[i]].body);
      }
    })
  }

  navigateToArticle() {
    this.router.navigate(['/article'])
  }
}
