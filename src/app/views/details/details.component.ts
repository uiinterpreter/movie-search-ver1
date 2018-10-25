import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {GetMovieService} from '../../services/get-movie.service'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public movieId:string;
  loader: boolean;
  public movieDetails:any = {};
  serviceObj: { method: number; pageNo: any; type: any; query: any; };
  public monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  constructor(private activated: ActivatedRoute,
              private route: Router,
              private getMovie:GetMovieService,) { }

  ngOnInit() {

    // getting id of a movie
    this.activated.params.subscribe(params => {
      this.movieId = params["id"];
      if(this.movieId && this.movieId !== undefined){
        this.getMovieDetails('details');
      }
    });
    // console.log(this.movieId);
  }

  getMovieDetails(type:string){
    try{
      // for ming service obj to get results from api
      this.loader = true;
      this.serviceObj = {
        method:1,
        pageNo:'',
        type:type,
        query:this.movieId
      };
      this.getMovie.getMovies(this.serviceObj)
      .subscribe(
        (response: any) => {
            this.loader = false;
            this.movieDetails = response;
            let date = new Date(this.movieDetails.release_date);
            let dateStr = date.getDate()+" "+this.monthNames[date.getMonth()]+ " " +date.getFullYear(); 
            this.movieDetails.release_date = dateStr
        },
        (error) => {console.log(error);
          this.route.navigate(['/error']);
        }
      );
    }catch(e){
      console.error(e);
    }
  }

}
