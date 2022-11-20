import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  index=1;
  users:any=[]
deleteUserName:any;
deleteUserNo:number|undefined;
  sample: String | undefined;

  constructor(private userdetailsService:UserdetailsService) { }

  ngOnInit(): void {
    this.users=this.userdetailsService.getUserDetails();
  }
  deleteUser(userObj:any,no:number){
    this.deleteUserName =userObj;
    this.deleteUserNo=no;
  }
  editUser(userObj:any){
    alert("do you need to edit "+userObj.username)
  }
  confirmDelete(usernumber:any){
    alert("Deleted "+usernumber);
  }
}
