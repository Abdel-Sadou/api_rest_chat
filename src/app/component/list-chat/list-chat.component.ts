import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model";
import {JsonPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {ChatItemComponent} from "./chat-item/chat-item.component";

@Component({
  selector: 'app-list-chat',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    JsonPipe,
    ChatItemComponent
  ],
  templateUrl: './list-chat.component.html',
  styleUrl: './list-chat.component.scss'
})
export class ListChatComponent implements OnInit{

  userservice = inject(UserService)
  user = new User();
  listUsers :User[] = [];

  ngOnInit(): void {
    this.userservice.getCustomersMedium().then(users=> {
      this.listUsers = users
    })

  }



}
