import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { EActionTypes } from '../enums/e-action-types';
import { AppAuthCredentials } from '../interfaces/app-auth-credentials';
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

  data$ = new BehaviorSubject<ApplicationState>({
    userEmail: '',
    messages: [],
    notifications: []
  });

  public action$ = new Subject<{ type: EActionTypes; payload: any; }>();

  // dispacth(action: { type: EActionTypes.USER_LOGIN_REQUEST; payload: AppAuthCredentials; }): void;
  dispatch(action: { type: EActionTypes; payload: any; }): void {
    console.table(action);

    this.action$.next(action);

    switch (action.type) {
      case EActionTypes.USER_LOGIN_REQUEST:
        this.data$.next(
          {
            ...this.data$.value,
            notifications: [
              { text: 'Identification en cours' },
              ...this.data$.value.notifications
            ]
          }
        )
        break;
      case EActionTypes.USER_LOGIN_FAILURE:
        this.data$.next(
          {
            ...this.data$.value,
            notifications: [
              { text: 'Identification invalid' }
            ]
          }
        )
        break;
      case EActionTypes.USER_LOGIN_SUCCESS:
        this.data$.next(
          {
            ...this.data$.value,
            notifications: [
              { text: 'Bienvenue' }
            ]
          }
        )
        break;
    }
  }

}
