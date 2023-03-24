import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EActionTypes } from '../enums/e-action-types';
import { AppMessage } from '../interfaces/app-message';
import { RsReactiveService } from '../interfaces/rs-reactive-service';



export interface ApplicationState {
  userEmail: string;
  messages: AppMessage[];
  notifications: { text: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements RsReactiveService<ApplicationState, EActionTypes>{

  constructor() { }

  data$ = new  BehaviorSubject<ApplicationState>({
    userEmail:'',
    messages:[],
    notifications:[]
  });

  dispacth(action: { type: EActionTypes; payload: any; }): void {
      console.table(action)
  }

}
