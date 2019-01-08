import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ChatMessage, ChatMessageThread } from '../chat-history.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html'
})

/*
 * ChatBoxComponent main component of the App, display a chat box complete with header, text content and input and button
 */
export class ChatBoxComponent implements OnInit {

  // chatBoxName : Name of the chat box, also used to identify which chatbox is sending a message
  @Input() chatBoxName: String;
  // messageList : list of message to display on the chat box
  @Input() messageList: ChatMessageThread[];
  // messageSent : event emitter that will send a ChatMessage object to the parent component
  @Output() messageSent = new EventEmitter();

  // initialise input to empty string.
  chatInput = "";
  chatMessageToEmit: ChatMessage;

  constructor() { }

  // on init initialise the message to pass up with the chat box name
  ngOnInit() {
    this.chatMessageToEmit = new ChatMessage(this.chatBoxName);
  }

  // on enter key stroke or click on send button, add the current value of the input to the message to emit, end it and clear the input
  sendMessage() {
    this.chatMessageToEmit.message = this.chatInput;
    this.messageSent.emit(this.chatMessageToEmit);
    this.chatInput = "";
  }
}
