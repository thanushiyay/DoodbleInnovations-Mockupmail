import { Injectable } from '@angular/core';
import { userMessage } from '../models/userMessage.model';
import { message } from '../models/message.mode';
import { zip, BehaviorSubject } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  singleMessage:message;
  userMsgAdded =new BehaviorSubject<any>("");
  userMessages:Array<userMessage>=[
    {
          id:1,
          emailID:"thanuyt@mockupmail.com",
          received:[
            {
                sender:"yogadheep@mockupmail.com",
                subject:"Sweeet Suprise",
                message:"Hi Thanushiya,    You are  so sweet"
            },
            {
              sender:"yogadheep@mockupmail.com",
              subject:"Birthday Party",
              message:"Hi Thanushiya,         You are welcome..!!!         Thanks,   Yogadheep"
            }
          ],
          sent:[
            {
                sender:"yogadheep@gmail.com",
                subject:"Thank you",
                message:"Hi Yogadheep,      I will be there at evening      Thanks,   Thanushiya Yogaraj"
            },
            {
              sender:"yogadheep@gmail.com",
              subject:"Congrats",
              message:"Hi Yogadheep,      Congrats Man..!!      Thanks,   Thanushiya Yogaraj"
            }
          ]
    },
    {
      id:2,
      emailID:"yogadheep@mockupmail.com",
      received:[
        {
          sender:"thanuyt@mockupmail.com",
          subject:"Thank you",
          message:"Hi Yogadheep,   I will be there at evening         Thanks,   Thanushiya Yogaraj"
      },
      {
        sender:"thanuyt@mockupmail.com",
        subject:"Congrats",
        message:"Hi Yogadheep,         Congrats Man..!!         Thanks,   Thanushiya Yogaraj"
      }
      ],
      sent:[
        {
          sender:"thanuyt@mockupmail.com",
          subject:"Sweeet Suprise",
          message:"Hi Thanushiya,   You are  so sweet"
        },
        {
          sender:"thanuyt@mockupmail.com",
          subject:"Birthday Party",
          message:"Hi Thanushiya,         You are welcome..!!!         Thanks,   Yogadheep"
        }
      ]
     }
  ]
  constructor() {
   }
 


  

  getuserMessages()
  {
      return this.userMessages;
  }

  addDummyUser(fromUser)
  {
    const newObj=fromUser;
    const obj={
     id:newObj.id,
     emailID:newObj.emailID,
     received:[
    
     ],
     sent:[
    
     ]
    }
    this.userMessages.push(obj);

    console.log("dummy user"+this.userMessages);
  }
  addMessage(message:any)
  {

       console.log(message.sender);
       const newObj:message={
         sender:message.sender,
         subject:message.subject,
         message:message.message
       }
       this.singleMessage=newObj;
        const obj=this.userMessages.find(x => x.id == message.from.id);
        // this.singleMessage.sender=message.sender;
        console.log("sent push msg"+JSON.stringify(this.singleMessage.sender));
        obj.sent.push(this.singleMessage);


       
        const obj2=this.userMessages.find(x => x.emailID == message.sender);
        // this.singleMessage.sender=message.from.emailID;
        const newObj2:message={
          sender:message.from.emailID,
          subject:message.subject,
          message:message.message
        }
        obj2.received.push(newObj2);


        console.log(this.userMessages); 
        
        this.userMsgAdded.next(this.userMessages);
        // obj.received.push()
  }
}
