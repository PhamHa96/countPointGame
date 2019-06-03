import { Injectable } from '@angular/core';
import { InfoGame } from '../modals/InfoGame.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public typeGameInit = new BehaviorSubject('1')
  typeGame = this.typeGameInit.asObservable();
  public infoGameComing: InfoGame;
  constructor() { }
}
