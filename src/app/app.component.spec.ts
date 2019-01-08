import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MessageThreadDisplayComponent } from './message-thread-display/message-thread-display.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChatBoxComponent,
        MessageThreadDisplayComponent,
        AppFooterComponent,
        AppHeaderComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: []
        }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.nativeElement;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chat Boxes');
  }));
});
