import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/api/animals`;
  constructor() { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.base).pipe(
      catchError(this.handleError('getAll'))
    );
  }

  getById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.base}/${id}`).pipe(
      catchError(this.handleError('getById'))
    );
  }

   create(payload: {
    name: string;
    species: string;
    breed?: string | null;
    idOwner: number;
    color?: string | null;
    img?: string | null;
    yob: number;
    vaccineIds?: number[];
  }): Observable<Animal> {
    return this.http.post<Animal>(this.base, payload).pipe(
      catchError(this.handleError('create'))
    );
  }

    private handleError(op: string) {
    return (err: any) => {
      console.error(`[DataService] ${op} failed`, err);
      return throwError(() => err);
    };
  }
}
