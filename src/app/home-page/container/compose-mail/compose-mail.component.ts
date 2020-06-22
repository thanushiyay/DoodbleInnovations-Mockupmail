import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/users.model';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { userMessage } from 'src/app/models/userMessage.model';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  constructor(private loginService:LoginServiceService,
    private messageService:MessageServiceService,
    private dialogRef:MatDialogRef<ComposeMailComponent>
    ) { }
  subject:string;
  message:string;
  sender:string;
   userList:Array<user>;
   userMessages:userMessage
   currentUser;
  ngOnInit(): void {
    this.userList=this.loginService.getUsers();
    this.currentUser= this.loginService.getCurrentUserID();
  }


  sendMessage()
  {
            const msg={
              "from":this.currentUser,
               "sender":this.sender,
               "subject":this.subject,
               "message":this.message
            }
            console.log(msg);
            this.messageService.addMessage(msg);
            this.dialogRef.close();
  }

  close()
  {
    this.dialogRef.close();
  }
}

