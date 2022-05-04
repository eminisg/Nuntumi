import {Component, OnInit} from '@angular/core';
import {GetItemsService} from "../services/get-items.service";
import {GetImagesService} from "../services/get-images.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  searchId = -1
  inputItem!: string
  tagsResult: any
  showItem = false
  tagItem: any
  allContent: any

  newItemsArr: string[] = []
  images!: string[]
  random!: number
  user!: string
  isLoading = true;
  mailsArray:any[] = []
  titlesArray:any[] = []
  imagesArray: string[] = []
  textArray: string[] = []
  randomArray: number[] = []


  constructor(public service: GetItemsService, public imageService: GetImagesService) {
  }

  ngOnInit(): void {
  }

  setInInput(id: number) {
    this.searchId = id

    this.tagItem = this.service.getTags.find(n => n.id === id)
    this.inputItem = '#' + this.tagItem.tag

    let inputItem = document.getElementById('tags-input') as HTMLInputElement;
    inputItem.focus()
  }

  showTagsResult() {
    this.imagesArray.length = 0
    this.mailsArray.length = 0
    this.randomArray.length = 0
    this.titlesArray.length = 0
    this.textArray.length = 0

    this.showItem = true
    this.imageService.searchItem = this.tagItem.tag
    this.imageService.imagesGet().subscribe((response: any) => {
      if(response){
        this.isLoading = false;
      }
      this.images = response.hits.map((n: { webformatURL: string[]; }) => n.webformatURL);
      for (let i = 0; i < 19; i++) {
        let counter = i
        this.randomArray.push(counter)
        this.imagesArray.push(this.images[counter])
      }
    })

    this.service.itemsGet().subscribe(response => {
      for (let i = 0; i < 19; i++) {
        this.mailsArray.push(response[this.randomArray[i]]?.email);
        this.titlesArray.push(response[this.randomArray[i]]?.name);
        this.textArray.push(response[this.randomArray[i]]?.body);
      }
    })
  }

  reset() {
    this.searchId = -1
    this.showItem = false
    this.inputItem = ''
    this.imageService.searchItem = ''
  }
}
