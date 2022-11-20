import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor() { }
  getUserDetails(){
    const userdata=[
      {
        no:1,
        firstname:"Arun",
        lastname:"Kumar",
        username:"Arun123",
        age:20,
        salary:100000
      },
      {
        no:2,
        firstname:"Adi",
        lastname:"prakash",
        username:"reddy123",
        age:21,
        salary:70000
      },
      {
        no:3,
        firstname:"venkat",
        lastname:"varshith",
        username:"varshith123",
        age:19,
        salary:20000
      }
    ]
    return userdata;
  }
}
