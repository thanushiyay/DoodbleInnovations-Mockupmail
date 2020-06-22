import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { message } from 'src/app/models/message.mode';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
// import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-reply-mail',
  templateUrl: './reply-mail.component.html',
  styleUrls: ['./reply-mail.component.css']
})
export class ReplyMailComponent implements OnInit {

  description:string;
  replyMessage:string;
  fromUser;
  obj:message;
  constructor(private dialogRef: MatDialogRef<ReplyMailComponent>,
    @Inject(MAT_DIALOG_DATA) data,private messageService:MessageServiceService,
    private loginService:LoginServiceService) {

      this.description=data;
     }
  

  ngOnInit(): void {
    console.log(this.description["sender"]);
    this.fromUser=this.loginService.getCurrentUserID();
  }

  close()
  {
       this.dialogRef.close();
  }

  sendMessage()
  {


     console.log(this.replyMessage);
     const objj={
       "from":this.fromUser,
       "sender":this.description["sender"],
       "message":this.replyMessage,
       "subject":this.description["subject"]
     };
     console.log(objj);
     this.messageService.addMessage(objj);
     this.dialogRef.close();

  }

}
