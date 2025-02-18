import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private router: Router) {

    //http://localhost:4200/portifolio/1
    this.activeRoute.params.subscribe(res =>
      console.log(res)
    );

    this.activeRoute.firstChild?.params.subscribe(res =>
      console.log(res)
    );

    //http://localhost:4200/portifolio/1?name=Lucas&age=26
    this.activeRoute.queryParams.subscribe(res =>
      console.log(res)
    );
  }

  ngOnInit(): void {
  }

}
