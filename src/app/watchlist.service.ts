import { Injectable } from '@angular/core';
import {WATCH_LIST} from "./DATA"

@Injectable({
  providedIn: 'root',
})
export class WatchListService{
  watch_list;
  constructor() {
      this.watch_list = WATCH_LIST
   }

   onSwapUp(index:number){
      if(index != 0 ){
        console.log(index)
          var temp = this.watch_list[index]
          this.watch_list[index] = this.watch_list[index-1]
          this.watch_list[index-1] = temp
      }
   }
}