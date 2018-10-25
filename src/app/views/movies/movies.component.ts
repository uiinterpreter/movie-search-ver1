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
  constructor(private getMovie:GetMovieService,
              private  route:Router,
              private avtivated:ActivatedRoute) { }

  ngOnInit() {
    this.date = new Date();
    this.date = `${this.date.getFullYear()}-${this.date.getMonth()}-${this.date.getDate()}`;
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.loader = true;
    this.serviceObj = {
      method:1,
      pageNo:this.pageNo,
    };
    try{
      this.getMovie.getMovies(this.serviceObj)
      .subscribe(
        (response: any) => {
            this.loader = false;
            this.cardS = response.results;
            this.total = response.total_pages;
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
      this.getTrendingMovies();
    }else if(!val && this.pageNo > 1){
      this.pageNo -= 1;
      this.getTrendingMovies();
    }
  }

  movieSearch(search:string){
    console.log(search);
  }

}
