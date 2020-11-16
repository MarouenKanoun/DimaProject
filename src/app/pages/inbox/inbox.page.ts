import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  messages = [
    {
      side : 'left',
      msg : 'Hello'
    },
    {
      side : 'right',
      msg : 'Hii'
    },
    {
      side : 'left',
      msg : 'Are you nearby ?'
    },
    {
      side : 'right',
      msg : 'I will be there in few mins'
    },
    {
      side : 'left',
      msg : 'Ok, I am waitimg at vinmark Store'
    },
    {
      side : 'right',
      msg : 'Sorry I am stuck in traffic. Please give me a moment.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
