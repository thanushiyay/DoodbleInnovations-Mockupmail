import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from   '../../services/login-service.service';
import { user } from 'src/app/models/users.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  
  createEmail:string;
  usersList:Array<user>;
  constructor(private  loginService:LoginServiceService,
    private  dialogRef: MatDialogRef<CreateAccountComponent>
    ) { }

  ngOnInit(): void {
        // this.usersList=this.loginService.getUsers();
  }


  addUser()
  {
      this.loginService.addUsers(this.createEmail);
      this.dialogRef.close();
  }
}
