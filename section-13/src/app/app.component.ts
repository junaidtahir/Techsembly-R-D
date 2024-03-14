import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  activated = false;
  ngOnInit() {
    this.userService.activatedEmitter.subscribe((event)=>{
      this.activated = event
    })
  }
}
