import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/contries.service';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

   constructor(
    private activateRoute: ActivatedRoute,
    private CountriesService: CountriesService,
  ) {}
    ngOnInit(): void {
      this.activateRoute.params
      .subscribe( ({ id })=> {

        this.CountriesService.searchCountryByAlphaCode( id )
        .subscribe( country => {
          console.log({ country });

        })
      })
  }
}
