import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  allNumbers: number[] = [];


  onIntervalFired(firedNumber: number) {
    // if (firedNumber % 2 === 0) {
      this.allNumbers.push(firedNumber)
      // this.evenNumbers.push(firedNumber);
    // } else {
      // this.allNumbers.push(firedNumber)
      // this.oddNumbers.push(firedNumber);
    // }
  }
}