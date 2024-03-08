import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
  @Output() onTarget = new EventEmitter<string>();

  onTargetChange(target: string){
    this.onTarget.emit(target)
  }
}
