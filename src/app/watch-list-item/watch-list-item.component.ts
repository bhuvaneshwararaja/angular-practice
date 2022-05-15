import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() item;
  @Input() first;
  @Input() last;
  @Input() index;
  @Output() swapUp = new EventEmitter()
  @Output() swapDown = new EventEmitter()
  constructor(){
    
  }

  ngOnInit(){
    console.log(this.index)
  }
  onSwapUp(index:number){
    this.swapUp.emit(index)
  }
  onSwapDown(index:number){
    this.swapDown.emit(index)
  }




}