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
      if(index != null ){
        console.log(index)
          var temp = this.watch_list[index]
          this.watch_list[index] = this.watch_list[index-1]
          this.watch_list[index-1] = temp
      }
   }

   onSwapDown(index:number){
    if(index != null ){
        var temp = this.watch_list[index]
        this.watch_list[index] = this.watch_list[index+1]
        this.watch_list[index+1] = temp
    }
 }

 
}