import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListChatComponent} from "./component/list-chat/list-chat.component";
import { DiscussionComponent} from "./component/discussion/discussion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListChatComponent , DiscussionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat2Me';
}
