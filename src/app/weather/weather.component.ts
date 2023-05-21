import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  minTemp: number = 0;
  maxTemp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'Knoxville';
  units: string = 'imperial';


  constructor(private weatherService: WeatherService){}
  
  ngOnInit():void{
    this.weatherService.getWeather(this.city, this.units).subscribe({

      next: (res) => {
        console.log(res)
        this.myWeather = res;
        this.temperature = Math.round(this.myWeather.main.temp);
        this.feelsLikeTemp = Math.round(this.myWeather.main.feels_like);
        this.minTemp = Math.round(this.myWeather.main.temp_min);
        this.maxTemp = Math.round(this.myWeather.main.temp_max);
        this.humidity = Math.round(this.myWeather.main.humidity);
        this.wind = Math.round(this.myWeather.wind.speed);
        this.summary = this.myWeather.weather[0].description;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
        console.log(this.myWeather);
      },

      error: (error) => console.log(error.message),
      
      complete: () => console.info('API call completed')      
    })
  }
}
