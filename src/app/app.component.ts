import { Component } from '@angular/core';
import { WATCH_LIST } from './DATA';
import { WatchListService } from './watchlist.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


  constructor(public watchListService:WatchListService) {
  }
  watchList = this.watchListService.watch_list

}
