import { Component,ElementRef, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { user } from 'src/app/models/users.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatRipple } from '@angular/material/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Router, ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private el:ElementRef,
    private loginService:LoginServiceService,
    private dialog:MatDialog,
    private route:Router,
    private router:ActivatedRoute
    ) {
    
     }

  usersList:Array<user>;
  presentVal;
  presentname;
  ngOnInit(): void {
    this.loginService.userSubject.subscribe((data)=>
    {
            this.usersList=data;
    });
    // this.loginService.getUsers().subscribe((data:Array<user>)=>
    // {
    //         this.usersList=data;
    // })  
    this.usersList=this.loginService.getUsers();


    this.loginService.currentUserSubject.subscribe((data)=>
    {
              this.presentVal=data.id;
    });
    this.presentVal=this.router.snapshot.params.id;   

  
   
  }

 

  openUser(userDetail:user)
  {
      const id=userDetail.id;
      const emailID=userDetail.emailID;
      this.loginService.setCurrentUserID(userDetail);
      this.route.navigate(['user/'+ id  + "/" +emailID]);
      this.presentVal=id;
  }

  logout()
  {
    this.route.navigate(['']);
    this.loginService.removeCurrentUserID();
  }
}
