import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mocked-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched some data');
    return heroes;
  }
}
