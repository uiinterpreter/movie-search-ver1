import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetMovieService {

  constructor(private http: HttpClient) { }

  getMovies(requestObj:any) {
    try{
      // const options = new RequestOptions({
      //   withCredentials:false
      // });
      let URL = this.formAPIString(requestObj);
      return this.http.get(URL);
    }catch(exe){
      console.error(exe);
    }
  }

  formAPIString(request:any){
    try{
      let date:any = new Date();
      date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      return `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${date}&api_key=1bcb0de5947ee4ccfdd236151dc0f99d&sort_by=popularity.desc&page=${request.pageNo}`;
    }catch(e){
      console.error(e);
    }
  }
}
