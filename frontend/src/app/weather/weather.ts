import { Component, inject } from '@angular/core';
import { WeatherService } from '../services/weather';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather{
  http = inject(HttpClient);
  city = '';
  weatherData: any = null;
  history: any[] = [];
  isLoading = false;
  errorMessage : string = '';
  isDarkMode = false;

  constructor(private weatherService: WeatherService) {}
  search() {
    if (!this.city) return;
    this.isLoading = true;
    this.errorMessage = '';
    this.weatherData = null;

    this.http.get(`http://localhost:3000/api/weather/${this.city}`).subscribe({
      next: (data: any) => {
        this.weatherData = {
          ...data,
          icon: `https://openweathermap.org/img/wn/${
            data?.description.includes('rain')
              ? '10d'
              : data?.description.includes('cloud')
              ? '02d'
              : '01d'
          }@2x.png`,
        };
        this.loadHistory();
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'City not found. Please try again.';
        this.isLoading = false;
      },
    });
  }

  loadHistory() {
    this.http
      .get('http://localhost:3000/api/weather')
      .subscribe((data: any) => {
        this.history = data;
      });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  deleteHistoryItem(id: string) {
    this.http.delete(`http://localhost:3000/api/weather/${id}`).subscribe({
      next: () => this.loadHistory(),
      error: () => alert('Failed to delete item'),
    });
  }

  ngOnInit() {
    this.loadHistory();
  }
}
