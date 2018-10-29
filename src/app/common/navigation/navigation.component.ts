import { Component, OnInit,Input } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() clickEvent:any;
  public searchQuery:string='';
  public showSearch = true;
  constructor(private  route:Router) {
    this.route.events.subscribe( (val)  => {
      if(val instanceof NavigationEnd){
        if(val.url.indexOf('movies') !== -1){
          this.showSearch = true;
        }
        else{
          this.showSearch = false;
        }
        let query = val.url.split('=')[1];
        if(query && query !== ''){
          this.searchQuery = decodeURIComponent(query);
        }else{
          this.searchQuery = '';
        }
      }
  });
  }

  ngOnInit() {
    let query = window.sessionStorage.getItem('searchQuery');
    let type = window.sessionStorage.getItem('viewType');
    if(type && type === 'search'){
      this.searchQuery  = decodeURIComponent(query) || '';
    }
  }
  

  // call back on search and event to call search on enter and click
  searchMovie(event?:any){
    try{
      if(event.keyCode === 13 || event.type == "click"){
        // this.clickEvent(this.searchQuery);
        this.route.navigate(['movies'],{queryParams:{query:this.searchQuery}});
      }
    }catch(e){
      console.error(e);
    }
  }
}
