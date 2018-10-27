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
import { DetailsComponent } from './views/details/details.component';
import { ErrorComponent } from './views/error/error.component';
import { TrimAndReducePipe } from './directivesAndPipes/trim-and-reduce.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollTopDirective } from './directivesAndPipes/scroll-top.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieCardComponent,
    SearchInputComponent,
    DetailsComponent,
    ErrorComponent,
    TrimAndReducePipe,
    ScrollTopDirective,
    // Http
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
