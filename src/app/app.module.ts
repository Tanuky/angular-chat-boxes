import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { MessageThreadDisplayComponent } from './message-thread-display/message-thread-display.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
