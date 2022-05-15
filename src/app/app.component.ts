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
  ngOnInit(){
    
  }
  watchList = this.watchListService.watch_list

  showWatchList = this.watchList.slice(0,4)

  onSwapUp(index:number){
    console.log(index)
    this.watchListService.onSwapUp(index)
  }

  onSwapDown(index:number){
    this.watchListService.onSwapDown(index)
  }

  showAll(){
    var temp = this.watchList
    if(this.listStatus == false){
        
        this.showWatchList = temp.slice(0,this.watchList.length-1)
        this.listStatus = true
        this.btnText = "Hide"
    }
    else{
      this.showWatchList = temp.slice(0,4)
      this.listStatus = false
      this.btnText = "Show All"

    }

  }


}
