import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { user } from 'src/app/models/users.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  usersList:Array<user>;
  constructor(private   dialog:MatDialog,
    private   loginService:LoginServiceService,
    private route:Router
    ) { }
 
  ngOnInit(): void {

    this.loginService.userSubject.subscribe((data)=>
    {
       this.usersList=data;
    })
   
    this.usersList=this.loginService.getUsers();
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(CreateAccountComponent, {
      width: '400px',
    });
  }
  clickedUser(userDetail:user)
  {
        const id=userDetail.id;
        const emailID=userDetail.emailID;
        this.loginService.setCurrentUserID(userDetail);
        this.route.navigate(['user/'+ id +"/" + emailID]);
  }
}
