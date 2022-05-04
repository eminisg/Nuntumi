import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface loginItems {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  dataCheck = false

  existEmail = ''
  existPassword = ''
  state = false

  constructor(private http:HttpClient) {
  }

  public itemsGet(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
  public usersGet(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  getSignUpData() {
    let newEmail = String(localStorage.getItem('email'));
    let newPassword = String(localStorage.getItem('password'));
    this.loginItems.push({email: newEmail, password: newPassword})
  }

  dataCheckM(): boolean {
    if (this.loginItems.find(n => (n.email === this.existEmail) && (n.password === this.existPassword))) {
      this.dataCheck = true
    } else if (this.loginItems.find(n => (n.email !== this.existEmail) || (n.password !== this.existPassword))) {
      this.dataCheck = false
    }
    return this.dataCheck
  }

  loginItems: loginItems[] = [
    {email: 'user1@mail.ru', password: 'User1#'},
    {email: 'user2@mail.ru', password: 'User2#'},
    {email: 'user3@mail.ru', password: 'User3#'},
    {email: 'user4@mail.ru', password: 'User4#'},
  ]

  getOtp = [
    {email: 'user1@mail.ru', mobile: '+994551111111'},
    {email: 'user2@mail.ru', mobile: '+994552222222'},
    {email: 'user3@mail.ru', mobile: '+994553333333'},
    {email: 'user4@mail.ru', mobile: '+994554444444'},
  ]

  getTags = [
    {tag: 'Science', id: 1},
    {tag: 'People', id: 2},
    {tag: 'Travel', id: 3},
    {tag: 'Minimalism', id: 4},
    {tag: 'Health', id: 5},
    {tag: 'Animals', id: 6},
    {tag: 'Feelings', id: 7},
    {tag: 'Industry', id: 8},
    {tag: 'Computer', id: 9},
    {tag: 'Music', id: 10},
    {tag: 'People', id: 11},
    {tag: 'Business', id: 12},
    {tag: 'Life', id: 13},
    {tag: 'Education', id: 14},
    {tag: 'Food', id: 15},
    {tag: 'Cooking', id: 16},
    {tag: 'Sports', id: 17},
    {tag: 'Science', id: 18},
    {tag: 'Mountain Hiking', id: 19},
    {tag: 'Fashion', id: 20},
    {tag: 'Nature', id: 21},
  ]

  tagsContent = [
    {image:'../../assets/imgs/technology1.jpg',id:1},
    {image:'../../assets/imgs/technology2.jpg',id:1},
    {image:'../../assets/imgs/technology3.jpg',id:1},
    {image:'../../assets/imgs/technology4.jpg',id:1},

  ]
}
