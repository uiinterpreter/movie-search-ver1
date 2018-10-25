import { Component, OnInit,Input } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() clickEvent:any;
  public searchQuery:string='';
  constructor() { }

  ngOnInit() {
    let query = window.sessionStorage.getItem('searchQuery');
    let type = window.sessionStorage.getItem('viewType');
    if(type && type === 'search'){
      this.searchQuery  = query || '';
    }
  }
  

  // call back on search and event to call search on enter and click
  searchMovie(event?:any){
    try{
      if(event.keyCode === 13 || event.type == "click"){
        this.clickEvent(this.searchQuery);
      }
    }catch(e){
      console.error(e);
    }
  }
}
