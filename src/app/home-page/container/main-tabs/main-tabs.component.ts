import { Component, OnInit, Output, Input } from '@angular/core';
import { userMessage } from 'src/app/models/userMessage.model';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/users.model';
import { message } from 'src/app/models/message.mode';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})
export class MainTabsComponent implements OnInit {


  @Output() messageData:Array<message>;
  @Input()  selectedVal:string;
  constructor(private messageService:MessageServiceService,
      private router:ActivatedRoute,private loginService:LoginServiceService
    ) { }
  userMessages:userMessage;
  sentMessage:userMessage;
  currentUser;


  ngOnInit(): void {

    this.loginService.currentUserSubject.subscribe((data)=>
    {
            this.currentUser=data.id;
            const array=this.messageService.getuserMessages();
           this.userMessages=array[this.currentUser-1];
    });


    this.messageService.userMsgAdded.subscribe((data)=>
    {
      this.currentUser=this.router.snapshot.params.id;  
      const array=this.messageService.getuserMessages();
      this.userMessages=array[this.currentUser-1];
    });


    this.currentUser=this.router.snapshot.params.id;  
    const array=this.messageService.getuserMessages();
    this.userMessages=array[this.currentUser-1];


    console.log(this.selectedVal);
  }

}
