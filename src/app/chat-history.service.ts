import { Injectable } from '@angular/core';

// Class ChatMessage : object containing a message and the sender of this message
export class ChatMessage {
  sender : String;
  message : String;

  constructor (sender : String) {
    this.sender = sender;
    this.message = '';
  }
}

// class ChatMessageThread, object containing a sender and a array of messages
export class ChatMessageThread{
  sender : String;
  thread : String[];

  constructor (sender: String) {
    this.sender = sender;
    this.thread = [];
  }

  // Add a string to the messages Array
  addMessage (message : String) {
    this.thread.push(message);
  }
}

/* 
 * ChatHistoryService, service to process the messages sent from the chat boxes
 */
@Injectable({
  providedIn: 'root'
})
export class ChatHistoryService {

  constructor() { 

  }

  ngOnInit () {
  }

  // addNewThread : takes an history (threadArray) and a chatMessage and add the chatMessage as a thread to the history
  addNewThread (messageEmitted: ChatMessage, history : ChatMessageThread[]) {
    let newThread = new ChatMessageThread(messageEmitted.sender);
    newThread.addMessage(messageEmitted.message);
    history.push(newThread);
  }

  // addNewThread : takes an history (threadArray) and a chatMessage and determine if the message must be added at the end of the last thread or add it as a new thread
  processMessage (messageEmitted: ChatMessage, history : ChatMessageThread[]) {
    if (history.length === 0 ) {
      this.addNewThread(messageEmitted, history);
    } else {
      let numberOfMessage = history.length;
      let lastThread = history[numberOfMessage -1];
      if (lastThread.sender === messageEmitted.sender) {
        lastThread.addMessage(messageEmitted.message);
      } else {
        this.addNewThread(messageEmitted,history);
      }
    }
  }

}
