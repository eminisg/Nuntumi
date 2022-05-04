import {Component, OnInit} from '@angular/core';
import {GetItemsService} from "../services/get-items.service";
import {GetImagesService} from "../services/get-images.service";
import {getDate} from "ngx-bootstrap/chronos/utils/date-getters";
import {DatePipe} from "@angular/common";
import {moment} from "ngx-bootstrap/chronos/testing/chain";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit {
  userName = localStorage.getItem('name');
  userSurname = localStorage.getItem('surname');
  userLink = ('@' + String(localStorage.getItem('name')).toLocaleLowerCase() + String(localStorage.getItem('surname')).toLocaleLowerCase())
  userProfileLink = (String(localStorage.getItem('name')).toLocaleLowerCase() + String(localStorage.getItem('surname')).toLocaleLowerCase() + '.com')

  counter: number = 10
  images!: string[]
  mailsArray: string[] = []
  titlesArray: string[] = []
  textArray: string[] = []
  usersArray!: string[]
  getDate = ''

  constructor(public service: GetItemsService, public imageService: GetImagesService) {
  }

  ngOnInit(): void {
    this.imageService.imagesGet().subscribe((response: any) => {
      this.images = response.hits.map((n: { webformatURL: string[]; }) => n.webformatURL);
    })
    this.service.itemsGet().subscribe(response => {
      this.titlesArray = response.map((n: { name: string; }) => n.name);
      this.mailsArray = response.map((n: { email: string; }) => n.email);
      this.textArray = response.map((n: { body: string; }) => n.body);
    })
    this.service.usersGet().subscribe(response => {
      this.usersArray = response.map(((n: { name: any; }) => n.name));
      console.log('users', this.usersArray)
    })
  }

  nextPost(event: Event) {
    this.imageService.searchItem = 'all'


    if (event) {
      this.counter++
      this.images[this.counter]
      this.titlesArray[this.counter]
      this.usersArray[this.counter]
      this.textArray[this.counter]
      if (this.counter >= 10) {
        this.counter = 0
      }
    } else {
      this.images[10]
      this.titlesArray[10]
    }
  }

  prevPost(event: Event) {
    this.imageService.searchItem = 'all'

    if (event) {
      this.counter--
      this.images[this.counter]
      if (this.counter <= 0) {
        this.counter = 10
      }
    } else {
      this.images[10]
    }
  }
}
