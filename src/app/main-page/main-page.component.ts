import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {GetItemsService} from "../services/get-items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  showItem = false
  showUserMenu = false
  headerInputValue!: string
  @Output('sideBarOutput') sideBarOutput = new EventEmitter()
  state = false
  userName = localStorage.getItem('name');
  userSurname = localStorage.getItem('surname');
  userLink = ('@' + String(localStorage.getItem('name')).toLocaleLowerCase() + String(localStorage.getItem('surname')).toLocaleLowerCase())


  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showItem = false
      this.showUserMenu = false

    }
  }

  constructor(private elementRef: ElementRef, public serviceItem: GetItemsService, private router: Router) {
  }

  ngOnInit(): void {
   localStorage.setItem('name','Arthur')
   localStorage.setItem('surname','Jacson')

  }

  showSearchItem() {
    this.showItem = !this.showItem
    this.showUserMenu = false
    this.headerInputValue = ''
  }

  showUserMenuItem() {
    this.showUserMenu = !this.showUserMenu
    this.showItem = false
  }

  logOut() {
    this.serviceItem.dataCheck = false
    this.showUserMenu = false
    this.router.navigate(['/'])
  }

  hideUserMenuItem() {
    this.showUserMenu = false
  }

  showSideBar() {
    this.serviceItem.state = !this.serviceItem.state
   this.sideBarOutput.emit(this.state)
  }

  routeNavigateTo(getItem:string) {
    this.router.navigate([getItem])
  }
}
