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

}