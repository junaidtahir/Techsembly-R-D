import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() serversDeleted =new EventEmitter<{}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContentInput') newServerContentInput: ElementRef;


  onServerAdded(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }

  onBlueprintAdded(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }
  onServersDeleted(){
    this.serversDeleted.emit({})
  }

}
