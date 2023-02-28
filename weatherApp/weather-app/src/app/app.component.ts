import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = '';
  state: string = '';
  country: string = '';
  weather: any;

  constructor(private http: HttpClient) {}

  async getWeather() {
    const url = `http://localhost:3000/weather?city=${this.city}&state=${this.state}&country=${this.country}`;

    try {
      const data = await this.http.get(url).toPromise();
      this.weather = data;
    } catch (error) {
      console.error(error);
    }
  }
}
