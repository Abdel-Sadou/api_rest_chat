import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)
  constructor() { }

  async  getCustomersMedium()  {
    return await  this.http.get<any>('assets/db/db.json')
      .toPromise()
      .then(res => res.data as User[])
      .then(data => data);
  }
}
