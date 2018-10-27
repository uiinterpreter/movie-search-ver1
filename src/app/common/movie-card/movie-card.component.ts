import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() card:any;
  public monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  constructor( private route: Router,) { }

  ngOnInit() {
    // to change date string
  }

  // got to details on click
  goToDetails(){
      this.route.navigate(['details/'+this.card.id]);
  }

}
