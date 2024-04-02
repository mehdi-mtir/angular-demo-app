import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() title? : string;
  @Output() messageEmitter = new EventEmitter<string>();

  sendMessage(msg : string){
    this.messageEmitter.emit(msg);
  }
  
}
