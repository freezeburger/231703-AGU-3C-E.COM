import { ViewChild, EventEmitter, Output, HostListener, Component } from '@angular/core';

@Component({
  selector: 'c3-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @ViewChild('drawer') drawer: any = null;
  @Output() menuToggle = new EventEmitter()

  @HostListener('window:keydown.alt.m')
  toggleMenu() {

    this.drawer && this.drawer.toggle();
    this.menuToggle.emit({ opened: this.drawer.opened });

  }

}
