import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class WeatherService {
  private baseUrl = 'http://localhost:3000/api/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${this.baseUrl}/${city}`).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error.error || 'Server Error'));
      })
    );
  }

  getHistory() {
    return this.http.get(this.baseUrl);
  }
}