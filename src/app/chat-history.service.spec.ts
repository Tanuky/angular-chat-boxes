import { TestBed, inject } from '@angular/core/testing';

import { ChatHistoryService, ChatMessageThread, ChatMessage } from './chat-history.service';


describe('ChatMessage class', () => {
  beforeEach(() => {
  });

  it('should construct the class correctly', () => {
    let fakeMessage = new ChatMessage('fake sender');
    expect(fakeMessage.sender).toBe('fake sender');
    expect(fakeMessage.message).toBe('');
  });
})

describe('ChatMessageThread class', () => {
  beforeEach(() => {
  });

  it('should construct the class correctly', () => {
    let fakeThread = new ChatMessageThread('fake sender');
    expect(fakeThread.sender).toBe('fake sender');
    expect(fakeThread.thread.length).toBe(0);
  });

  it('should add a message to the thread when the function addMessage() is called', () => {
    let fakeThread = new ChatMessageThread('fake sender');
    fakeThread.addMessage('fake Message');
    expect(fakeThread.thread.length).toBe(1);
    expect(fakeThread.thread[0]).toBe('fake Message');
  })
})

describe('ChatHistoryService', () => {

  const fakeSenderA = "fake sender"
  const fakeSenderB = "other fake sender"

  const fakeMessagefromA =new ChatMessage(fakeSenderA);
  fakeMessagefromA.message = "message A"

  const fakeMessagefromB =new ChatMessage(fakeSenderB);
  fakeMessagefromB.message = "message B"


  let fakeThreadA = new ChatMessageThread(fakeSenderA);
  fakeThreadA.addMessage(fakeMessagefromA.message);

  let fakeThreadB = new ChatMessageThread(fakeSenderB);
  fakeThreadB.addMessage(fakeMessagefromB.message);

  let fakeThreadC = new ChatMessageThread(fakeSenderA);
  fakeThreadC.addMessage(fakeMessagefromA.message);
  fakeThreadC.addMessage(fakeMessagefromA.message);



  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatHistoryService]
    });
  });

  it('should be created', inject([ChatHistoryService], (service: ChatHistoryService) => {
    expect(service).toBeTruthy();
  }));

  it('should  add a thread to an history when addNewThread is called', inject([ChatHistoryService], (service: ChatHistoryService) => {
    let newHistory = [];
    let expectedHistory = [fakeThreadA];
    service.addNewThread(fakeMessagefromA, newHistory);
    expect(newHistory).toEqual(expectedHistory);
  }));


  it('should  initialise an history when processMessage is called with an empty history', inject([ChatHistoryService], (service: ChatHistoryService) => {
    let newHistory = [];
    let expectedHistory = [fakeThreadA];
    service.processMessage(fakeMessagefromA, newHistory);
    expect(newHistory).toEqual(expectedHistory);
  }));

  it('should  add a message to last thread when processMessage is called with an message from the same sender as the last thread', inject([ChatHistoryService], (service: ChatHistoryService) => {
    let newHistory = [fakeThreadA];
    let expectedHistory = [fakeThreadC];
    service.processMessage(fakeMessagefromA, newHistory);
    expect(newHistory).toEqual(expectedHistory);
  }));

  it('should  add thread to the history when processMessage is called with an message not from the same sender as the last thread', inject([ChatHistoryService], (service: ChatHistoryService) => {
    let newHistory = [fakeThreadA];
    let expectedHistory = [fakeThreadA, fakeThreadB];
    service.processMessage(fakeMessagefromB, newHistory);
    expect(newHistory).toEqual(expectedHistory);
  }));


});
