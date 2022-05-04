import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {GetItemsService} from "../services/get-items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})
export class SideBarMenuComponent implements OnInit {
  showItem = false
  showUserMenu = false
  headerInputValue!: string
  @Input() state = false

  userName = localStorage.getItem('name');
  userSurname = localStorage.getItem('surname');
  userLink = ('@' + String(localStorage.getItem('name')).toLocaleLowerCase() + String(localStorage.getItem('surname')).toLocaleLowerCase())

  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (clickedInside) {
      this.serviceItem.state = false
    }
  }

  constructor(private elementRef: ElementRef, public serviceItem: GetItemsService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.state)
  }

  showUserMenuItem() {
    this.showUserMenu = !this.showUserMenu
    this.showItem = false
  }

  hideUserMenuItem() {
    this.showUserMenu = false
  }

  logOut() {
    this.serviceItem.dataCheck = false
    this.showUserMenu = false
    this.serviceItem.state = false
    this.router.navigate(['/login'])
  }

  showSearchItem() {
    this.showItem = !this.showItem
    this.showUserMenu = false
    this.headerInputValue = ''
  }

  routeNavigateTo(getItem:string) {
    this.router.navigate([getItem])
  }
}
