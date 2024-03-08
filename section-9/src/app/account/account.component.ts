import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {id: number, name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private LoggingService: LoggingService, 
              private accountsService: AccountsService){
    }

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status)
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // this.LoggingService.logStatusChange(status)
    this.accountsService.statusUpdated.emit(status);
  }
}
