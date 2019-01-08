import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageThread } from '../chat-history.service';

@Component({
  selector: 'app-message-thread-display',
  templateUrl: './message-thread-display.component.html'
})

/*
 * MessageThreadDisplayComponent UI component that display a single thread
 */
export class MessageThreadDisplayComponent implements OnInit {

  // inputThread : thread to display
  @Input() inputThread: ChatMessageThread;
  // chatBoxIsSender :  boolean that indicate if the thread messages have been sent from this chat box
  @Input() chatBoxIsSender : Boolean;


  constructor() { }

  ngOnInit() {
  }

}
