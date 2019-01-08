import { Component } from '@angular/core';
import { ChatHistoryService, ChatMessageThread } from './chat-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// AppComponent : page layout and data processing
export class AppComponent {
  title = 'Chat Boxes';

  // Inject the data processing service on creation of the app
  constructor (private chatMessageHistory: ChatHistoryService) {

  }

  chatHistory : ChatMessageThread[];

  // On init, create a blank chat history
  ngOnInit () {
    this.chatHistory = [];
  }


  // when a chat box send a message, process the message.
  receiveMessage (event) {
    this.chatMessageHistory.processMessage(event, this.chatHistory);
  }

}
