import { Component, OnInit } from '@angular/core';
import {GetMovieService} from '../../services/get-movie.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public serviceObj:any;
  public cardS:Array<any>= []; 
  public date:any;
  public loader:boolean=true;
  public view:string='trending';
  public pageNo:number=1;
  public total:number;
  public total_count:number;
  public searchQuery:string;
  constructor(private getMovie:GetMovieService,
              private  route:Router,
              private avtivated:ActivatedRoute) { }

  ngOnInit() {
    this.date = new Date();
    this.date = `${this.date.getFullYear()}-${this.date.getMonth()}-${this.date.getDate()}`;
    let type = window.sessionStorage.getItem('viewType');
    let query = window.sessionStorage.getItem('searchQuery');
    let pageNo = window.sessionStorage.getItem('pageNo');
    this.view  = type || 'trending';
    this.searchQuery  = query || '';
    this.pageNo = parseInt(pageNo) || 1;
    this.getTrendingMovies(this.view);
  }

  getTrendingMovies(type:string){
    try{
      this.loader = true;
      this.serviceObj = {
        method:1,
        pageNo:this.pageNo,
        type:type,
        query:this.searchQuery
      };
      window.sessionStorage.setItem('viewType',this.view);
      window.sessionStorage.setItem('searchQuery',this.searchQuery);
      window.sessionStorage.setItem('pageNo',JSON.stringify(this.pageNo));
      this.getMovie.getMovies(this.serviceObj)
      .subscribe(
        (response: any) => {
            this.loader = false;
            this.cardS = response.results;
            this.total = response.total_pages;
            this.total_count = response.total_results;
        },
        (error) => {console.log(error);
          this.route.navigate(['/error']);
        }
      );
    }catch(e){
      console.error(e);
    }
  }

  pageChange(val:boolean){
    if(val && this.pageNo < this.total){
      this.pageNo +=1;
      this.getTrendingMovies(this.view);
    }else if(!val && this.pageNo > 1){
      this.pageNo -= 1;
      this.getTrendingMovies(this.view);
    }
  }

  showTrending(){
    this.view = 'trending';
    window.sessionStorage.setItem('searchQuery',undefined);
    this.getTrendingMovies(this.view);
  }

  movieSearch = (search:string) => {
    try{
      this.searchQuery = search;
      this.view = 'search';
      this.getTrendingMovies(this.view);
    }catch(e){
      console.error(e);
    }
  }

}
