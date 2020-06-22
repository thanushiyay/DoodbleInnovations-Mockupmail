import { Component, OnInit, Output, Input } from '@angular/core';
import { userMessage } from 'src/app/models/userMessage.model';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { message } from 'src/app/models/message.mode';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReplyMailComponent } from '../reply-mail/reply-mail.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService:MessageServiceService,
      private dialog:MatDialog
    ) { }
  @Input()  messageData:message;


  ngOnInit(): void {
     console.log(this.messageData["sender"]);
  }


  openReplyMessageBox(MessageData:message)
  {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        sender:this.messageData["sender"],
        message:this.messageData["message"],
        subject:this.messageData["subject"]
    };

    const dialogRef = this.dialog.open(ReplyMailComponent, dialogConfig);
  }

}
