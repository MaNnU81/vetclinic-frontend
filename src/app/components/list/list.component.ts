import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { NgFor, AsyncPipe } from '@angular/common';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import { Animal } from '../../models/animal';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  imports: [CardComponent, NgFor, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

private api = inject(DataService);

  animals$!: Observable<Animal[]>;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.animals$ = this.api.getAll().pipe(
      tap(() => { this.error = null; }),
      catchError((err) => {
        console.error(err);
        this.error = 'Errore nel caricamento dei dati.';
        return of([] as Animal[]);
      }),
      finalize(() => (this.loading = false))
    );
  }
}
