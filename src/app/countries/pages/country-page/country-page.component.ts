import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/contries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';



@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
    `img{
      padding: 0.25rem;
      background-color: #fff;
      border: 1px solid #dee2e6;
      border-radius: 0.25rem;
      max-width: 100%;
      height: auto;
    }`
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private CountriesService: CountriesService,
  ) {}
    ngOnInit(): void {
      this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.CountriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( ( country )=> {

        if ( !country ) return this.router.navigateByUrl('');

        return this.country = country


      })
  }
}
