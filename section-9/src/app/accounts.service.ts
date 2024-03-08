import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [
        {
          id: 1,
          name: 'Master Account',
          status: 'active'
        },
        {
          id: 2,
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          id: 3,
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();
      
      constructor(private loggingService: LoggingService){}
      
      addAccount(name: string, status: string) {
        let newId = this.accounts.length+1;
        this.accounts.push({id: newId, name: name, status: status});
        this.loggingService.logStatusChange(status)
      }
      removeAccById(id: number){
        for (let i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i].id === id) {
            this.accounts.splice(i, 1);
              i--;
          }
        }
      }
      removeAccount(index: number){
        this.accounts.splice(index , 1);
        this.loggingService.logStatusChange(status)
      }
      updateAccount(id: number, status: string) {
        this.accounts[id].status =  status;
        this.loggingService.logStatusChange(status)
      }
}