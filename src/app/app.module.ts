import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './views/movies/movies.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { MovieCardComponent } from './common/movie-card/movie-card.component';
import { SearchInputComponent } from './common/search-input/search-input.component';
import { HttpClientModule }    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieCardComponent,
    SearchInputComponent,
    // Http
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
