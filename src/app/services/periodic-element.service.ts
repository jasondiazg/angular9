import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { apis } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Periodic } from '../entities/Periodic';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementService {

  constructor(public http: HttpClient) { }

  get(id: number): Observable<Periodic> {
    return this.http.get<any>(`${apis.periodic.get}/${id}`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  getAll(): Observable<Periodic[]> {
    return this.http.get<any>(`${apis.periodic.getAll}`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  post(periodic: Periodic): Observable<Periodic> {
    return this.http.post<any>(`${apis.periodic.post}`, periodic)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  put(periodic: Periodic): Observable<Periodic> {
    return this.http.put<any>(`${apis.periodic.put}`, periodic)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  delete(id: number): Observable<Periodic> {
    return this.http.delete<any>(`${apis.periodic.delete}/${id}`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }
}
