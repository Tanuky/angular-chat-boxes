import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ChatBoxComponent } from './chat-box.component';
import { MessageThreadDisplayComponent } from '../message-thread-display/message-thread-display.component';
import { FormsModule } from '@angular/forms';

describe('ChatBoxComponent Typescript tests', () => {
  let component: ChatBoxComponent;

  const fakeChatBoxName = "testChatBox";

  beforeEach(() => {
    component = new ChatBoxComponent();
    component.chatBoxName = fakeChatBoxName;
    component.ngOnInit();
  });

  it('should hae created a empty chat message with the box name when calling ngOnInit()', () => {
    expect(component.chatMessageToEmit.sender).toBe(fakeChatBoxName);
    expect(component.chatMessageToEmit.message).toBe('');
  })

  it('should send an event when calling sendMessage()', () => {
    spyOn(component.messageSent, 'emit');
    component.sendMessage();
    expect(component.messageSent.emit).toHaveBeenCalled();
  })
});


describe('ChatBoxComponent DOM tests', () => {
  let component: ChatBoxComponent;
  let fixture: ComponentFixture<ChatBoxComponent>;


  const fakeChatBoxName = "testChatBox";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBoxComponent,
        MessageThreadDisplayComponent],
        imports : [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxComponent);
    component = fixture.componentInstance;
    component.chatBoxName = fakeChatBoxName;
    component.messageList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the chat box name', () => {
    let titleComponent = fixture.debugElement.nativeElement.querySelector("h2.chat-box__header");
    expect(titleComponent).toBeTruthy();
    expect(titleComponent.textContent).toContain(fakeChatBoxName);
  });

  it('should display a footer with an input and a button' , () => {
    let footer = fixture.debugElement.nativeElement.querySelector(".chat-box__footer");
    let button = footer.querySelector('.chat-box__send-button');
    let input = footer.querySelector('textarea');
    expect(footer).toBeTruthy();
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
  });

  it('should send an event when using the button', () => {
    spyOn(component.messageSent, 'emit');
    let footer = fixture.debugElement.nativeElement.querySelector(".chat-box__footer");
    let button = footer.querySelector('button');
    button.click();
      expect(component.messageSent.emit).toHaveBeenCalled();
  })
});
