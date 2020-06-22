import { message } from './message.mode';

export interface userMessage{
          id:number,
          emailID:string,
          received:Array<message>,
          sent:Array<message>
}