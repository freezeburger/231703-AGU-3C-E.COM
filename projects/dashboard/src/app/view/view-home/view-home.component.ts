import { Component, inject } from '@angular/core';
import { DataStoreService } from '../../core/store/data-store.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent {

  dataStore = inject(DataStoreService);

  onMenuToggle(menuState:Object){
    console.log(menuState)
  }

}
