import { Component, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ComposeMailComponent } from '../compose-mail/compose-mail.component';
@Component({
  selector: 'app-side-tabs',
  templateUrl: './side-tabs.component.html',
  styleUrls: ['./side-tabs.component.css']
})
export class SideTabsComponent implements OnInit {


   @Output()  selectedVal:String;
  constructor(public dialog: MatDialog) { }
  sideElements=[
    {
       name:"Inbox",
       msg:0
    },
    {
       name:"Starred",
       msg:0
    },
    {
      name:"Important",
      msg:0
   },
   {
      name:"Sent Mail",
      msg:0
   },
   {
    name:"Drafts",
    msg:0
   },
   {
      name:"Spam",
      msg:0
   },
   {
        name:"Bin",
        msg:0
   }
  ];
  selectedTab="Inbox"

  ngOnInit(): void {
  }



  selectTab(val:string)
  {
    this.selectedTab=val;
  }
  openDialog(): void {
   const dialogRef = this.dialog.open(ComposeMailComponent, {
     width: '600px',
     height:'95vh'
   });
}
}
