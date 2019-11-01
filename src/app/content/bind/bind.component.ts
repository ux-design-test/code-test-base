import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../messageService';

@Component({
  selector: 'bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent {
  messages: any[] = [];
  subscription: Subscription;
  responseData: any;
  imgDisplayOption: boolean;

  constructor(private messageService: MessageService) {}
}
