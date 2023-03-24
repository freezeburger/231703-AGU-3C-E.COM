import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private API = 'http://localhost:5050/messages'

  constructor(
    private http:HttpClient
  ) { }

  public getMessages(){
    this.http.get(this.API).subscribe(console.table)
  }

  public sendMessage(){}

}
