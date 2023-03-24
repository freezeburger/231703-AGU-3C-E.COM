import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'c3-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @ViewChild('card') public card:TemplateRef<any> | null = null;
  public content:TemplateRef<any> | null = null;


  ngAfterViewInit(){
    setTimeout(() => this.content = this.card );
  }

}
