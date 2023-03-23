import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    console.log(1,this)
  }

  @HostListener('window:click', ['$event'] )
  doClick( event:any ){
    console.log('You Clicked', event )
  }

  ngOnInit(){
    console.log(2,this)
  }
  ngDoCheck(){
    console.log(3,this)
  }
  ngOnDestroy(){
    console.log(4,this)
  }
  
}
