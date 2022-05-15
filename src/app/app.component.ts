import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WatchListService } from './watchlist.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


  constructor(public watchListService:WatchListService,public titleService:Title) {
    titleService.setTitle(`WatchList (${this.watchList.length})`)
  }
  btnText = "Show All"
  listStatus = false
  indexedSlice=4
  ngOnInit(){
    
  }
  watchList = this.watchListService.watch_list

  onSwapUp(index:number){
    console.log(index)
    this.watchListService.onSwapUp(index)
  }

  onSwapDown(index:number){
    this.watchListService.onSwapDown(index)
  }

  showAll(){
    if(this.listStatus == false){
        this.indexedSlice = this.watchList.length
        this.listStatus = true
        this.btnText = "Hide"
    }
    else{
      this.indexedSlice = 4
      this.listStatus = false
      this.btnText = "Show All"

    }

  }


}
