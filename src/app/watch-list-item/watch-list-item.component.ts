import { Component, Input, EventEmitter } from '@angular/core';

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

  ngOnInit(){
    console.log(this.index)
  }


}