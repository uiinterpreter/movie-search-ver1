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
    let date = new Date(this.card.release_date);
    let dateStr = date.getDate()+" "+this.monthNames[date.getMonth()]+ " " +date.getFullYear(); 
    this.card.release_date = dateStr
  }

  goToDetails(){
      this.route.navigate(['details/'+this.card.id]);
  }

}
