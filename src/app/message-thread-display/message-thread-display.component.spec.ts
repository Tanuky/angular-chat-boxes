import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageThreadDisplayComponent } from './message-thread-display.component';
import { ChatMessageThread } from '../chat-history.service';

describe('MessageThreadDisplayComponent DOM Tests', () => {
  let component: MessageThreadDisplayComponent;
  let fixture: ComponentFixture<MessageThreadDisplayComponent>;

  let  fakeThread =  new ChatMessageThread ("fake sender");
  fakeThread.addMessage("String 1");
  fakeThread.addMessage("String 2");


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageThreadDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageThreadDisplayComponent);
    component = fixture.componentInstance;
    component.inputThread = fakeThread;
    component.chatBoxIsSender = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  
  it('should display the sender name if the message is not from the sender', () => {
    let senderName = fixture.debugElement.nativeElement.querySelector(".message-thread__sender-name");
    expect(senderName.textContent).toContain("fake sender");
  });

  it('should display the "You say" if the message is from the sender', () => {
    component.chatBoxIsSender = true;
    fixture.detectChanges();
    let senderName = fixture.debugElement.nativeElement.querySelector(".message-thread__sender-name");
    expect(senderName.textContent).toContain("You say");
  });

  it('should display the messages in the thread', () => {
    let threadBubble = fixture.debugElement.nativeElement.querySelector(".message-thread__bubble");
    let messages = threadBubble.querySelectorAll('li');
    expect(messages.length).toBe(2);
    expect(messages[0].textContent).toContain("String 1");
    expect(messages[1].textContent).toContain("String 2");

  });

});
