import { Component, OnInit, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnChanges {
  @Input() clickEvent:any;
  public searchQuery:string='';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }
  
  searchMovie(){
    try{
      this.clickEvent(this.searchQuery);
    }catch(e){
      console.error(e);
    }
  }
}
