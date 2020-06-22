import { Injectable } from '@angular/core';
import { user } from '../models/users.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry } from "rxjs/operators";
import { MessageServiceService } from './message-service.service';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  removeCurrentUserID() {
    localStorage.removeItem("userDetail");
  }



  setCurrentUserID(userDet:user) {
      localStorage.setItem("userDetail",JSON.stringify(userDet));
      this.currentUserSubject.next(userDet);
  }


  getCurrentUserID()
  {
       return JSON.parse(localStorage.getItem("userDetail"));
       
  }
  
  public userSubject=new BehaviorSubject<any>("");
  public currentUserSubject=new BehaviorSubject<any>("");
  constructor(private http:HttpClient,
    private messageService:MessageServiceService
    ) { 
   
  }
  usersList:Array<user>=[ {
    "id":1,
    "emailID":"thanuyt@mockupmail.com"
},
{
    "id":2,
    "emailID":"yogadheep@mockupmail.com"
}];
 



  addUsers(email:string)
  {
      const user={
        id:this.usersList.length+1,
        emailID:email
      }
      this.usersList.push(user);
      this.userSubject.next(this.usersList);
      this.messageService.addDummyUser(user);
  }
  getUsers()
  {
  
      return  this.usersList;
      //  return this.http.get('./assets/users.json').pipe(map(data => data));
      
  }

  getUserByEmail(email:string)
  {
        return this.usersList.find(x => x.emailID == email);
  }
}
