import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetImagesService implements OnInit{

  searchItem:string = 'Nature'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public imagesGet(): Observable<any> {
  return this.http.get('https://pixabay.com/api/?key=27022080-7818bd675282a6079711fe21b&category=' + this.searchItem.toLocaleLowerCase())
  }
}
