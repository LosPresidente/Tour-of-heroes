import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  //this is for adding new messages
  add(message: string) {
    this.messages.push(message);
  }

  //this is for clearing cache
  clear() {
    this.messages = [];
  }
}