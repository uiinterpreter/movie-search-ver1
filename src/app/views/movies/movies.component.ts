import { Component, OnInit } from '@angular/core';
import {GetMovieService} from '../../services/get-movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public serviceObj:any;
  public cardS:Array<any>= []; 
  constructor(private getMovie:GetMovieService) { }

  ngOnInit() {
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.serviceObj = {
      method:1,
    };
    try{
      this.getMovie.getMovies(this.serviceObj)
      .subscribe(
        (response: any) => {
          console.log(response);
            this.cardS = response.results;
        },
        (error) => console.log(error)
      );
    }catch(e){
      console.error(e);
    }
  }

}
