import { Component, OnInit } from '@angular/core';
import { InfoGame } from '../modals/InfoGame.module';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {
  public infoGame: InfoGame = {
    id: '',
    name: '',
    listGamer: [
      {
        id: 1,
        name: '',
        isHost: false,
        money: 1000,
      },
      {
        id: 2,
        name: '',
        isHost: false,
        money: 1000,
      },
      {
        id: 3,
        name: '',
        isHost: false,
        money: 1000,
      },
      {
        id: 4,
        name: '',
        isHost: false,
        money: 1000,
      },
      {
        id: 5,
        name: '',
        isHost: false,
        money: 1000,
      },
      {
        id: 6,
        name: '',
        isHost: false,
        money: 1000,
      }
    ],
    typeGame: '',
    numberPlayer: 2,
    betPrimary: 2000,
    betSecondary: 1000,
    des: '',
    message: '',
  };

  constructor(public router: Router, public gamesv: GameService) {
    if (this.gamesv.typeGameInit && this.gamesv.typeGame) {
      this.gamesv.typeGame.subscribe(info => this.infoGame.typeGame = info);
    }
  }

  ngOnInit() {
  }
  onChangeSelect(event) {
    if (event && event.detail) {
      this.infoGame.numberPlayer = event.detail.value;
    } else { this.infoGame.numberPlayer = 2 }
    console.log('change selecte', this.infoGame.numberPlayer)
  }
  doNext() {
    this.gamesv.infoGameComing = this.infoGame;
    this.router.navigate(['/choose-leader']);
  }
}
