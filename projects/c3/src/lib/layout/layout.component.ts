import { ContentChild } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild, EventEmitter, Output, HostListener, Component } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'c3-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @Input() pageTitle = '';

  @ViewChild('drawer') drawer: any = null;
  @Output() menuToggle = new EventEmitter();

  @ContentChild(AlertComponent) alert : AlertComponent |null = null;

  @HostListener('window:keydown.alt.m')
  toggleMenu() {

    this.drawer && this.drawer.toggle();
    this.menuToggle.emit({ opened: this.drawer.opened });

    if(this.alert) this.alert.content =  this.drawer.opened ? null : this.alert.card;

  }

}
