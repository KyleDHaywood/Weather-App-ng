import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeather(city: string, units: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3cf9142bd208da788d74fc58f0dd43a8&units=' + units)
  }
}
