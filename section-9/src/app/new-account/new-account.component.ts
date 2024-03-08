import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private LoggingService: LoggingService,
     private accountService: AccountsService
    ){
      this.accountService.statusUpdated.subscribe((status : string) => 
      alert(status)
      );
    }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // this.LoggingService.logStatusChange(accountStatus)
  }
}
