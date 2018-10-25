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

  // forming url for search trending and movie details section
  formAPIString(request:any){
    try{
      let date:any = new Date();
      date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      if (request.type === 'trending') return `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${date}&api_key=1bcb0de5947ee4ccfdd236151dc0f99d&sort_by=popularity.desc&page=${request.pageNo}`;
      
      else if (request.type === 'search') return `https://api.themoviedb.org/3/search/movie?api_key=1bcb0de5947ee4ccfdd236151dc0f99d&sort_by=popularity.desc&page=${request.pageNo}&query=${request.query}`;
      
      else if (request.type === 'details') return `https://api.themoviedb.org/3/movie/${request.query}?api_key=1bcb0de5947ee4ccfdd236151dc0f99d`;
    }catch(e){
      console.error(e);
    }
  }
}
